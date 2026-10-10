---
layout: default
title: "25 window functions"
---

# Chapter 25 — SQL Window Functions

> 🔴 Advanced

---

## 📖 Definition & Fundamental Concepts

An **SQL Window Function** performs a calculation across a set of table rows that are related to the current row (called a **Window Frame**).

Unlike standard `GROUP BY` aggregate queries (which collapse multiple individual rows into a single summary row per group), **Window Functions preserve the individual identity of every single row in the result set** while appending calculated analytical metrics alongside them.

```text
1. GROUP BY (Collapses Rows):
   Input: 3 Tech Employees ---> Output: 1 Single Summary Row (Tech Total)

2. WINDOW FUNCTION (Preserves Rows!):
   Input: 3 Tech Employees ---> Output: ALL 3 Individual Rows Maintained
                                        + Department Summary Column Added Beside Each Row!
```

> [!NOTE]
> **MySQL Target**: Window functions require **MySQL 8.0 or later** (or MariaDB 10.2+). Verify your server version in phpMyAdmin using `SELECT VERSION();`. Syntax and optimization details can vary across database engines.

---

## 🇮🇳 Hindi Explanation

Window Functions multiple rows par analytical calculations karte hain, lekin `GROUP BY` ki tarah rows ko ek row mein sink/collapse nahi karte!
- Har employee ya transaction ki apni individual row result mein bani rehti hai.
- Uske bagal mein group ranking, running total, ya department average ka naya column add ho jata hai.
- Yeh `OVER (PARTITION BY ... ORDER BY ...)` syntax ke dwara kaam karti hain.
- `PARTITION BY` data ko chote groups (windows) mein baant ta hai, aur `ORDER BY` window ke andar calculation ka sequence decide karta hai.

---

## 🚩 Marathi Explanation

Window Functions anaik rows var analytical calculations kartat, pan `GROUP BY` pramane rows collapse karat nahit!
- Pratyek employee kiwa transaction chi individual row result madhye tasich rahte.
- Tichya bajula ranking, running total, kiwa department average cha extra column disto.
- Ha `OVER (PARTITION BY ... ORDER BY ...)` clause cha vapar karun chalto.
- `PARTITION BY` data cha chota group (window) tayar karto, aani `ORDER BY` window madhil calculation cha kram (sequence) tharavto.

---

## 📊 Reproducible Sample Setup Data

Run the following setup script in phpMyAdmin or MySQL Workbench to create and populate the sample tables used across this chapter:

```sql
-- Clean up pre-existing sample tables
DROP TABLE IF EXISTS daily_sales;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS bank_transactions;
DROP TABLE IF EXISTS monthly_sales;
DROP TABLE IF EXISTS employees;

-- 1. Create employees table (Includes tied salaries for ranking demos)
CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    emp_name VARCHAR(50) NOT NULL,
    dept_name VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL
);

-- 2. Create monthly_sales table
CREATE TABLE monthly_sales (
    sale_id INT PRIMARY KEY AUTO_INCREMENT,
    sale_month VARCHAR(7) NOT NULL, -- Format: 'YYYY-MM'
    revenue DECIMAL(12, 2) NOT NULL
);

-- 3. Create bank_transactions table
CREATE TABLE bank_transactions (
    trans_id INT PRIMARY KEY AUTO_INCREMENT,
    account_id VARCHAR(20) NOT NULL,
    trans_date DATE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL
);

-- 4. Create products table
CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- 5. Create daily_sales table
CREATE TABLE daily_sales (
    sale_id INT PRIMARY KEY AUTO_INCREMENT,
    sale_date DATE NOT NULL,
    amount DECIMAL(10, 2) NOT NULL
);

-- Populate employees (Tied salaries: Rahul & Amit both 90k in Tech; Neha & Vikram both 65k in HR)
INSERT INTO employees (emp_id, emp_name, dept_name, salary) VALUES
(1, 'Rahul Sharma', 'Tech', 90000.00),
(2, 'Amit Verma', 'Tech', 90000.00),     -- Tied with Rahul
(3, 'Priya Patel', 'Tech', 70000.00),
(4, 'Suresh Kumar', 'Sales', 85000.00),
(5, 'Ananya Roy', 'Sales', 60000.00),
(6, 'Neha Gupta', 'HR', 65000.00),
(7, 'Vikram Singh', 'HR', 65000.00);     -- Tied with Neha

-- Populate monthly_sales
INSERT INTO monthly_sales (sale_id, sale_month, revenue) VALUES
(1, '2026-01', 50000.00),
(2, '2026-02', 65000.00),
(3, '2026-03', 60000.00),
(4, '2026-04', 80000.00);

-- Populate bank_transactions (Includes multiple transactions on the same date)
INSERT INTO bank_transactions (trans_id, account_id, trans_date, amount) VALUES
(1001, 'ACC-101', '2026-10-01', 1000.00),
(1002, 'ACC-101', '2026-10-02', -200.00),
(1003, 'ACC-101', '2026-10-02', 500.00),   -- Same date as 1002
(1004, 'ACC-101', '2026-10-03', -100.00),
(1005, 'ACC-202', '2026-10-01', 2500.00),
(1006, 'ACC-202', '2026-10-02', -400.00);

-- Populate products
INSERT INTO products (product_id, product_name, category, price) VALUES
(1, 'Laptop', 'Electronics', 1200.00),
(2, 'Smartphone', 'Electronics', 800.00),
(3, 'Wireless Headphones', 'Electronics', 150.00),
(4, 'Office Chair', 'Furniture', 250.00),
(5, 'Standing Desk', 'Furniture', 450.00),
(6, 'Bookshelf', 'Furniture', 150.00);

-- Populate daily_sales
INSERT INTO daily_sales (sale_id, sale_date, amount) VALUES
(10, '2026-02-01', 100.00),
(11, '2026-02-02', 200.00),
(12, '2026-02-03', 300.00),
(13, '2026-02-04', 400.00),
(14, '2026-02-05', 500.00);
```

---

## 📝 Window Function Syntax Step-by-Step

```sql
function_name(expression) OVER (
    [PARTITION BY partition_column]
    [ORDER BY sort_column [ASC|DESC]]
    [ROWS|RANGE frame_specification]
)
```

### Clause Breakdown:
1. **`function_name(expression)`**: The window calculation function (e.g. `SUM()`, `AVG()`, `ROW_NUMBER()`, `RANK()`, `LAG()`).
2. **`OVER()`**: Mandatory clause signaling that the function operates as a window function rather than a standard aggregate.
3. **`PARTITION BY`**: *(Optional)* Divides the result set into independent partitions (groups). Calculations restart for each partition.
4. **`ORDER BY`**: *(Optional)* Defines the logical evaluation sequence of rows inside each partition.
5. **Window Frame Specification (`ROWS` / `RANGE`)**: *(Optional)* Defines the explicit physical boundary of rows evaluated relative to the current row (e.g., `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`).

> [!IMPORTANT]
> **Window `ORDER BY` vs Query `ORDER BY`**:
> The `ORDER BY` inside `OVER(...)` controls the **logical sequence of window calculations** (e.g., running total calculation sequence). A top-level `ORDER BY` at the very end of the statement controls the **final displayed output row order**.

---

## ⚖️ GROUP BY vs Window Function Contrast

Let's compare standard `GROUP BY` aggregation against a Window Function using our `employees` sample table.

### Query 1: Standard `GROUP BY` (Collapses Rows)
```sql
SELECT dept_name, SUM(salary) AS total_dept_salary
FROM employees
GROUP BY dept_name
ORDER BY dept_name;
```

#### Output (Collapses 7 Employees into 3 Summary Rows)
| dept_name | total_dept_salary |
| :--- | :---: |
| HR | 130000.00 |
| Sales | 145000.00 |
| Tech | 250000.00 |

---

### Query 2: Window Function (Preserves All 7 Individual Rows!)
```sql
SELECT 
    emp_name,
    dept_name,
    salary,
    SUM(salary) OVER (PARTITION BY dept_name) AS total_dept_salary
FROM employees
ORDER BY dept_name, salary DESC;
```

#### Output (All 7 Individual Rows Maintained + Total Appended)
| emp_name | dept_name | salary | total_dept_salary |
| :--- | :--- | :---: | :---: |
| Neha Gupta | HR | 65000.00 | 130000.00 |
| Vikram Singh | HR | 65000.00 | 130000.00 |
| Suresh Kumar | Sales | 85000.00 | 145000.00 |
| Ananya Roy | Sales | 60000.00 | 145000.00 |
| Rahul Sharma | Tech | 90000.00 | 250000.00 |
| Amit Verma | Tech | 90000.00 | 250000.00 |
| Priya Patel | Tech | 70000.00 | 250000.00 |

---

## 🏆 Ranking Functions: `ROW_NUMBER`, `RANK`, and `DENSE_RANK`

Ranking functions assign rank numbers to rows within each partition based on the specified window ordering.

### Handling Tied Values (e.g. Salaries: $90k, 90k, 70k$):

| Function | Behavior on Tied Values | Example Ranks for (90k, 90k, 70k) |
| :--- | :--- | :---: |
| **`ROW_NUMBER()`** | Assigns strict, unique sequential numbers. Never ties. | `1, 2, 3` |
| **`RANK()`** | Assigns identical ranks to ties, **leaves gaps** in sequence. | `1, 1, 3` *(Skips rank 2)* |
| **`DENSE_RANK()`** | Assigns identical ranks to ties, **NO gaps** in sequence. | `1, 1, 2` |

> [!TIP]
> **Deterministic `ROW_NUMBER()` Ordering**: Because `ROW_NUMBER()` assigns strictly unique numbers, if two rows have identical `salary` values, include a unique tie-breaker column in `ORDER BY` (e.g. `ORDER BY salary DESC, emp_id ASC`) to guarantee deterministic results across executions.

### Comprehensive Ranking Query
```sql
SELECT 
    emp_name,
    dept_name,
    salary,
    ROW_NUMBER() OVER (PARTITION BY dept_name ORDER BY salary DESC, emp_id ASC) AS row_num,
    RANK()       OVER (PARTITION BY dept_name ORDER BY salary DESC) AS rnk,
    DENSE_RANK() OVER (PARTITION BY dept_name ORDER BY salary DESC) AS dense_rnk
FROM employees
ORDER BY dept_name, salary DESC, emp_id ASC;
```

#### Output
| emp_name | dept_name | salary | row_num | rnk | dense_rnk |
| :--- | :--- | :---: | :---: | :---: | :---: |
| Neha Gupta | HR | 65000.00 | 1 | **1** | **1** |
| Vikram Singh | HR | 65000.00 | 2 | **1** | **1** |
| Suresh Kumar | Sales | 85000.00 | 1 | 1 | 1 |
| Ananya Roy | Sales | 60000.00 | 2 | 2 | 2 |
| Rahul Sharma | Tech | 90000.00 | 1 | **1** | **1** |
| Amit Verma | Tech | 90000.00 | 2 | **1** | **1** |
| Priya Patel | Tech | 70000.00 | 3 | **3** | **2** |

#### Explanation of Tech Department Ranks:
- Rahul and Amit both earn $90,000.00$.
- `RANK()` assigns both rank `1`, leaving a gap so Priya receives rank `3`.
- `DENSE_RANK()` assigns both rank `1`, leaving **no gap** so Priya receives rank `2`.

---

## 📈 Value Access Functions: `LAG()` and `LEAD()`

Value functions access data from preceding (`LAG`) or succeeding (`LEAD`) rows within a window partition without self-joins.

- **`LAG(column, offset, default)`**: Returns the value from $offset$ rows **before** the current row.
- **`LEAD(column, offset, default)`**: Returns the value from $offset$ rows **after** the current row.

### Example: Month-over-Month Revenue Analysis

```sql
SELECT 
    sale_month,
    revenue,
    LAG(revenue, 1) OVER (ORDER BY sale_month) AS prev_month_revenue,
    revenue - LAG(revenue, 1) OVER (ORDER BY sale_month) AS mom_revenue_change
FROM monthly_sales
ORDER BY sale_month;
```

#### Output
| sale_month | revenue | prev_month_revenue | mom_revenue_change |
| :---: | :---: | :---: | :---: |
| 2026-01 | 50000.00 | NULL | NULL |
| 2026-02 | 65000.00 | 50000.00 | 15000.00 |
| 2026-03 | 60000.00 | 65000.00 | -5000.00 |
| 2026-04 | 80000.00 | 60000.00 | 20000.00 |

#### Explanation of First Month NULL Handling:
- For the first row (`2026-01`), no preceding row exists in the window order. `LAG()` returns `NULL`, and `revenue - NULL` evaluates to `NULL`.
- If a default value of `0.00` is supplied (`LAG(revenue, 1, 0.00)`), the first row reports `0.00` for previous revenue and `+50000.00` for change. Returning `NULL` is mathematically clearer because no prior month exists.

---

## 💰 Running Totals & Moving Averages (Framing)

### 1. Cumulative Account Running Balance
When computing running totals, always include a unique tie-breaker (like `trans_id`) in `ORDER BY` to maintain deterministic row-by-row sequence when dates are identical:

```sql
SELECT 
    trans_id,
    account_id,
    trans_date,
    amount,
    SUM(amount) OVER (
        PARTITION BY account_id 
        ORDER BY trans_date, trans_id
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_balance
FROM bank_transactions
WHERE account_id = 'ACC-101'
ORDER BY trans_date, trans_id;
```

#### Output
| trans_id | account_id | trans_date | amount | running_balance |
| :---: | :---: | :---: | :---: | :---: |
| 1001 | ACC-101 | 2026-10-01 | 1000.00 | 1000.00 |
| 1002 | ACC-101 | 2026-10-02 | -200.00 | 800.00 |
| 1003 | ACC-101 | 2026-10-02 | 500.00 | 1300.00 |
| 1004 | ACC-101 | 2026-10-03 | -100.00 | 1200.00 |

---

### 2. Three-Row Moving Average

```sql
SELECT 
    sale_date,
    amount,
    AVG(amount) OVER (
        ORDER BY sale_date
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS moving_avg_3_rows
FROM daily_sales
ORDER BY sale_date;
```

#### Output
| sale_date | amount | moving_avg_3_rows |
| :---: | :---: | :---: |
| 2026-02-01 | 100.00 | 100.00 |
| 2026-02-02 | 200.00 | 150.00 |
| 2026-02-03 | 300.00 | 200.00 |
| 2026-02-04 | 400.00 | 300.00 |
| 2026-02-05 | 500.00 | 400.00 |

#### Explanation of Moving Frame Calculations:
- Row 1 (`2026-02-01`): Evaluates 1 row ($100 / 1 = 100.00$).
- Row 2 (`2026-02-02`): Evaluates 2 rows ($(100 + 200) / 2 = 150.00$).
- Row 3 (`2026-02-03`): Evaluates 3 rows ($(100 + 200 + 300) / 3 = 200.00$).
- Row 4 (`2026-02-04`): Evaluates 3 rows ($(200 + 300 + 400) / 3 = 300.00$).

> [!IMPORTANT]
> **`ROWS` vs Calendar Days**:
> `ROWS BETWEEN 2 PRECEDING AND CURRENT ROW` evaluates up to **3 physical data rows** (current row + 2 prior rows in sequence), NOT necessarily 3 calendar days. If date gaps exist (e.g. weekend breaks), physical row counting differs from calendar-day range evaluation.

---

## 🪟 Window Frames: `ROWS` vs `RANGE` & First/Last Values

### `ROWS` vs `RANGE` Default Behavior:
- **`ROWS`**: Measures physical row counts (e.g. `ROWS BETWEEN 1 PRECEDING AND CURRENT ROW`).
- **`RANGE`**: Measures logical range values. If no explicit frame is specified, MySQL defaults to `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`.
  - **Peer Row Caution**: Under `RANGE`, if multiple rows have identical `ORDER BY` values (ties), `RANGE` evaluates all peer rows together, causing running totals to jump instead of stepping row-by-row! Always specify `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` for deterministic step running totals.

### `FIRST_VALUE()` and `LAST_VALUE()` Example
To evaluate `LAST_VALUE()` across the entire partition rather than stopping at the current row, specify `ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING`:

```sql
SELECT 
    product_name,
    category,
    price,
    FIRST_VALUE(product_name) OVER (
        PARTITION BY category ORDER BY price DESC
        ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) AS most_expensive_in_cat,
    LAST_VALUE(product_name) OVER (
        PARTITION BY category ORDER BY price DESC
        ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
    ) AS cheapest_in_cat
FROM products
ORDER BY category, price DESC;
```

#### Output
| product_name | category | price | most_expensive_in_cat | cheapest_in_cat |
| :--- | :--- | :---: | :--- | :--- |
| Laptop | Electronics | 1200.00 | Laptop | Wireless Headphones |
| Smartphone | Electronics | 800.00 | Laptop | Wireless Headphones |
| Wireless Headphones | Electronics | 150.00 | Laptop | Wireless Headphones |
| Standing Desk | Furniture | 450.00 | Standing Desk | Bookshelf |
| Office Chair | Furniture | 250.00 | Standing Desk | Bookshelf |
| Bookshelf | Furniture | 150.00 | Standing Desk | Bookshelf |

---

## ⚡ Filtering Window Functions (Using CTEs)

Because window functions evaluate during the **`SELECT` phase** (after `WHERE`, `GROUP BY`, and `HAVING`), you **cannot** write a window function directly inside a `WHERE` clause!

To filter window results (e.g., *Find Top 2 Earners per Department*), wrap the query inside a **Common Table Expression (CTE)**:

```sql
WITH ranked_employees AS (
    SELECT 
        emp_id,
        emp_name,
        dept_name,
        salary,
        DENSE_RANK() OVER (PARTITION BY dept_name ORDER BY salary DESC) AS dense_rnk
    FROM employees
)
SELECT emp_id, emp_name, dept_name, salary, dense_rnk
FROM ranked_employees
WHERE dense_rnk <= 2
ORDER BY dept_name, dense_rnk, emp_id;
```

#### Output
| emp_id | emp_name | dept_name | salary | dense_rnk |
| :---: | :--- | :--- | :---: | :---: |
| 6 | Neha Gupta | HR | 65000.00 | 1 |
| 7 | Vikram Singh | HR | 65000.00 | 1 |
| 4 | Suresh Kumar | Sales | 85000.00 | 1 |
| 5 | Ananya Roy | Sales | 60000.00 | 2 |
| 1 | Rahul Sharma | Tech | 90000.00 | 1 |
| 2 | Amit Verma | Tech | 90000.00 | 1 |
| 3 | Priya Patel | Tech | 70000.00 | 2 |

#### Ranking Filter Comparison (`<= 2`):
- **`ROW_NUMBER() <= 2`**: Limits output strictly to at most 2 rows per department.
- **`RANK() <= 2`**: Retains ties at rank 1, but if two employees tie at rank 1, rank 2 is skipped so rank 3 is omitted.
- **`DENSE_RANK() <= 2`**: Retains ties at rank 1 AND includes rank 2 (e.g. Priya Patel at $70,000.00$).

---

## ⚠️ Common Mistakes & Pitfalls

1. **Attempting to Filter Window Functions in `WHERE`**: Writing `WHERE ROW_NUMBER() OVER(...) <= 2` raises a syntax error. Use a CTE or subquery wrapper.
2. **Omitting `ORDER BY` in Running Totals**: Writing `SUM(amount) OVER (PARTITION BY acc_id)` without `ORDER BY` returns the grand partition total for every row instead of a cumulative step-by-step balance.
3. **Omitting Tie-Breaker Columns**: Sorting by a non-unique column (like `trans_date`) without a tie-breaker (like `trans_id`) produces non-deterministic row ordering.
4. **Default `LAST_VALUE()` Frame Trap**: Using `LAST_VALUE()` without specifying `ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING` causes `LAST_VALUE()` to return the current row's value because the default frame ends at `CURRENT ROW`.
5. **Confusing Window `ORDER BY` with Main Query `ORDER BY`**: The `ORDER BY` inside `OVER()` sets calculation sequence; the final `ORDER BY` sets displayed row order.

---

## 🧪 Step-by-Step Practice Exercises

Use the sample database script (`employees`, `products`, `monthly_sales`, `bank_transactions`, `daily_sales`) provided in this chapter.

---

### Exercise 1: Rank Products by Price within Category (`DENSE_RANK`)
**Task**: Rank products by price in descending order within each category using `DENSE_RANK()`.  
**Hint**: Partition by `category` and order by `price DESC`.

```sql
-- Answer
SELECT 
    product_name,
    category,
    price,
    DENSE_RANK() OVER (PARTITION BY category ORDER BY price DESC) AS price_rank
FROM products
ORDER BY category, price_rank;
```

#### Expected Output
| product_name | category | price | price_rank |
| :--- | :--- | :---: | :---: |
| Laptop | Electronics | 1200.00 | 1 |
| Smartphone | Electronics | 800.00 | 2 |
| Wireless Headphones | Electronics | 150.00 | 3 |
| Standing Desk | Furniture | 450.00 | 1 |
| Office Chair | Furniture | 250.00 | 2 |
| Bookshelf | Furniture | 150.00 | 3 |

---

### Exercise 2: Rank Employees by Salary within Department (`RANK`)
**Task**: Rank employees by salary in descending order within their department using `RANK()`.

```sql
-- Answer
SELECT 
    emp_name,
    dept_name,
    salary,
    RANK() OVER (PARTITION BY dept_name ORDER BY salary DESC) AS rnk
FROM employees
ORDER BY dept_name, rnk;
```

#### Expected Output
| emp_name | dept_name | salary | rnk |
| :--- | :--- | :---: | :---: |
| Neha Gupta | HR | 65000.00 | 1 |
| Vikram Singh | HR | 65000.00 | 1 |
| Suresh Kumar | Sales | 85000.00 | 1 |
| Ananya Roy | Sales | 60000.00 | 2 |
| Rahul Sharma | Tech | 90000.00 | 1 |
| Amit Verma | Tech | 90000.00 | 1 |
| Priya Patel | Tech | 70000.00 | 3 |

---

### Exercise 3: Previous Month Revenue Comparison (`LAG`)
**Task**: Display each month's revenue alongside the previous month's revenue using `LAG()`.

```sql
-- Answer
SELECT 
    sale_month,
    revenue,
    LAG(revenue, 1) OVER (ORDER BY sale_month) AS prev_revenue
FROM monthly_sales
ORDER BY sale_month;
```

#### Expected Output
| sale_month | revenue | prev_revenue |
| :---: | :---: | :---: |
| 2026-01 | 50000.00 | NULL |
| 2026-02 | 65000.00 | 50000.00 |
| 2026-03 | 60000.00 | 65000.00 |
| 2026-04 | 80000.00 | 60000.00 |

---

### Exercise 4: Running Balance for Account `ACC-202`
**Task**: Calculate a running account balance for `ACC-202` ordered by transaction date and transaction ID.

```sql
-- Answer
SELECT 
    trans_id,
    account_id,
    trans_date,
    amount,
    SUM(amount) OVER (
        PARTITION BY account_id 
        ORDER BY trans_date, trans_id
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_balance
FROM bank_transactions
WHERE account_id = 'ACC-202'
ORDER BY trans_date, trans_id;
```

#### Expected Output
| trans_id | account_id | trans_date | amount | running_balance |
| :---: | :---: | :---: | :---: | :---: |
| 1005 | ACC-202 | 2026-10-01 | 2500.00 | 2500.00 |
| 1006 | ACC-202 | 2026-10-02 | -400.00 | 2100.00 |

---

### Exercise 5: Moving Average of Daily Sales
**Task**: Calculate a 3-row moving average of sales amounts ordered by `sale_date`.

```sql
-- Answer
SELECT 
    sale_date,
    amount,
    ROUND(AVG(amount) OVER (
        ORDER BY sale_date
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ), 2) AS moving_avg
FROM daily_sales
ORDER BY sale_date;
```

#### Expected Output
| sale_date | amount | moving_avg |
| :---: | :---: | :---: |
| 2026-02-01 | 100.00 | 100.00 |
| 2026-02-02 | 200.00 | 150.00 |
| 2026-02-03 | 300.00 | 200.00 |
| 2026-02-04 | 400.00 | 300.00 |
| 2026-02-05 | 500.00 | 400.00 |

---

### Exercise 6: Salary Difference from Department Maximum
**Task**: Display each employee's salary alongside the highest salary in their department and the difference (`max_salary - salary`).

```sql
-- Answer
SELECT 
    emp_name,
    dept_name,
    salary,
    MAX(salary) OVER (PARTITION BY dept_name) AS max_dept_salary,
    MAX(salary) OVER (PARTITION BY dept_name) - salary AS salary_diff
FROM employees
ORDER BY dept_name, salary DESC;
```

#### Expected Output
| emp_name | dept_name | salary | max_dept_salary | salary_diff |
| :--- | :--- | :---: | :---: | :---: |
| Neha Gupta | HR | 65000.00 | 65000.00 | 0.00 |
| Vikram Singh | HR | 65000.00 | 65000.00 | 0.00 |
| Suresh Kumar | Sales | 85000.00 | 85000.00 | 0.00 |
| Ananya Roy | Sales | 60000.00 | 85000.00 | 25000.00 |
| Rahul Sharma | Tech | 90000.00 | 90000.00 | 0.00 |
| Amit Verma | Tech | 90000.00 | 90000.00 | 0.00 |
| Priya Patel | Tech | 70000.00 | 90000.00 | 20000.00 |

---

## 🎯 Mini Challenge

Find each employee's salary alongside the **highest salary in their department** and the **salary difference** (`max_dept_salary - salary`).

```sql
-- Mini Challenge Solution
SELECT 
    emp_id,
    emp_name,
    dept_name,
    salary,
    MAX(salary) OVER (PARTITION BY dept_name) AS highest_dept_salary,
    MAX(salary) OVER (PARTITION BY dept_name) - salary AS salary_difference
FROM employees
ORDER BY dept_name, salary DESC, emp_id;
```

#### Expected Output
| emp_id | emp_name | dept_name | salary | highest_dept_salary | salary_difference |
| :---: | :--- | :--- | :---: | :---: | :---: |
| 6 | Neha Gupta | HR | 65000.00 | 65000.00 | 0.00 |
| 7 | Vikram Singh | HR | 65000.00 | 65000.00 | 0.00 |
| 4 | Suresh Kumar | Sales | 85000.00 | 85000.00 | 0.00 |
| 5 | Ananya Roy | Sales | 60000.00 | 85000.00 | 25000.00 |
| 1 | Rahul Sharma | Tech | 90000.00 | 90000.00 | 0.00 |
| 2 | Amit Verma | Tech | 90000.00 | 90000.00 | 0.00 |
| 3 | Priya Patel | Tech | 70000.00 | 90000.00 | 20000.00 |

#### Explanation:
- `MAX(salary) OVER (PARTITION BY dept_name)` computes the maximum salary for each department without collapsing rows.
- In the Tech department, maximum salary is $90,000.00$. Priya Patel ($70,000.00$) shows a difference of $90000 - 70000 = \$20,000.00$.
- In the Sales department, maximum salary is $85,000.00$. Ananya Roy ($60,000.00$) shows a difference of $85000 - 60000 = \$25,000.00$.

---

## ⚡ Performance & Indexing Guidance

- **Analytics Without Group Collapse**: Window functions avoid extra self-joins and subqueries, leading to cleaner code.
- **Sorting & Partitioning Cost**: Window functions require internal sorting/partitioning passes ($O(N \log N)$ complexity).
- **Index Optimization**: Creating composite indexes matching `PARTITION BY` and `ORDER BY` columns (e.g. `INDEX (dept_name, salary)`) allows MySQL to evaluate windows without extra sorting passes.
- **Query Execution Inspection**: Use `EXPLAIN` in MySQL 8.0 to inspect window evaluation steps:
  ```sql
  EXPLAIN SELECT emp_name, RANK() OVER (PARTITION BY dept_name ORDER BY salary DESC) FROM employees;
  ```

---

## 🔗 Related Topics

- [GROUP BY & HAVING](13-group-by-and-having.html)
- [Common Table Expressions (CTEs)](23-ctes.html)
- [Subqueries & Nested Queries](17-subqueries.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: Recursive CTEs](24-recursive-ctes.html) | [Next: Stored Procedures →](26-stored-procedures.html)
