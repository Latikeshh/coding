---
layout: default
title: "23 ctes"
---

# Chapter 23 — Common Table Expressions (CTEs) & WITH Clause

> 🔴 Advanced

---

## 📖 Definition & Fundamental Concepts

A **Common Table Expression (CTE)** is a temporary, named result set defined using the `WITH` clause that exists **exclusively within the execution scope of a single SQL statement** (`SELECT`, `INSERT`, `UPDATE`, or `DELETE`).

CTEs serve as readable, top-down building blocks that decompose large, complex SQL queries into modular, self-contained stages.

```text
WITH cte_stage_1 AS (
    SELECT ... FROM base_table
),
cte_stage_2 AS (
    SELECT ... FROM cte_stage_1
)
SELECT ... 
FROM cte_stage_2;
```

### How CTEs Compare to Other SQL Database Constructs:

| Construct | Lifetime & Scope | Storage Location | Modifiability / Reuse |
| :--- | :--- | :--- | :--- |
| **Common Table Expression (CTE)** | Single SQL statement | In-memory / inline evaluation | Temporary; scoped to 1 statement. |
| **Subquery (Derived Table)** | Single SQL statement | Inline evaluation | Inline; must be duplicated to reuse. |
| **Temporary Table (`CREATE TEMPORARY TABLE`)** | Entire database session | Temporary disk/memory storage | Persists across multiple statements until closed. |
| **Database View (`CREATE VIEW`)** | Permanent schema object | Stores only query definition | Permanent; reusable across sessions. |
| **Physical Base Table** | Permanent schema object | Disk storage | Permanent data rows. |

> [!NOTE]
> **MySQL Version Target**: Native CTE support via the `WITH` clause was introduced in **MySQL 8.0** (and MariaDB 10.2). If you are using WampServer or phpMyAdmin, ensure your MySQL version is 8.0 or higher (`SELECT VERSION();`).

> [!IMPORTANT]
> **Performance & Materialization Insight**: A CTE is primarily an **abstraction and readability tool**. Using a CTE does **not** guarantee that its result is stored physically on disk or computed only once. Depending on the database version, query structure, and optimizer choices, the query engine may inline the CTE (merge it into the main query) or materialize it. Neither a CTE nor a subquery is universally faster; performance depends on indexes, join conditions, and execution plans.

---

## 🇮🇳 Hindi Explanation

Common Table Expression (CTE) ek temporary named query result hota hai jo `WITH` clause se banta hai. Yeh sirf **ek hi SQL statement** ke dauran exist karta hai.
- **Mukhya Fayda**: Deeply nested subqueries (jo padhne mein mushkil hoti hain) ki bajaye aap query ke top par `WITH cte_name AS (...)` karke chote modular blocks bana sakte hain.
- **Scope**: CTE ka naam sirf ussi ek query mein kaam karta hai. Query khatam hote hi CTE memory se gayab ho jata hai.
- **Performance**: CTE hamesha fast nahi hota; yeh mukhya roop se query ko readable aur maintainable banane ke liye use hota hai.

---

## 🚩 Marathi Explanation

Common Table Expression (CTE) mhanje `WITH` clause ne tayar kelela ek temporary, named query result set. Ha fatk **ekaach SQL statement** purta maryadit asto.
- **Mukhya Fayda**: Complex aani nested subqueries aevaji query chya suruvatila `WITH cte_name AS (...)` lihun modular parts tayar karta yetat. Tyamule query samajnyasathi aani debug karnyasathi sopi hote.
- **Scope**: CTE cha vapar ekaach statement madhye hoto. Statement samplyavar CTE नष्ट hoto.
- **Performance**: CTE mhanje fast query ase nahi; ha pramanat code vachnyayogya (readable) karnyasathi vaparla jato.

---

## 📊 Reproducible Sample Setup Data

Run the following setup script in phpMyAdmin or MySQL Workbench to create and populate the sample database tables (`departments`, `employees`, `customers`, and `orders`) used throughout this chapter.

```sql
-- Clean up pre-existing sample tables
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS departments;

-- 1. Create departments table
CREATE TABLE departments (
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(50) NOT NULL
);

-- 2. Create employees table
CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    department_id INT NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

-- 3. Create customers table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);

-- 4. Create orders table
CREATE TABLE orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT NOT NULL,
    order_date DATE NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    payment_status VARCHAR(20) NOT NULL, -- 'PAID', 'UNPAID', 'PENDING'
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Populate departments
INSERT INTO departments (department_id, department_name) VALUES
(1, 'HR'),
(2, 'Marketing'),
(3, 'Engineering'),
(4, 'Sales');

-- Populate employees
INSERT INTO employees (emp_id, first_name, last_name, department_id, salary) VALUES
(1, 'Rahul', 'Sharma', 3, 90000.00),   -- Engineering
(2, 'Priya', 'Patel', 3, 110000.00),  -- Engineering
(3, 'Amit', 'Verma', 2, 60000.00),    -- Marketing
(4, 'Neha', 'Gupta', 2, 70000.00),    -- Marketing
(5, 'Vikram', 'Singh', 1, 65000.00),  -- HR
(6, 'Ananya', 'Roy', 4, 80000.00);    -- Sales

-- Populate customers
INSERT INTO customers (customer_id, first_name, last_name, email) VALUES
(101, 'Aarav', 'Mehta', 'aarav@example.com'),
(102, 'Sophia', 'Miller', 'sophia@example.com'),
(103, 'Karan', 'Johar', 'karan@example.com'),
(104, 'Emma', 'Wilson', 'emma@example.com'); -- Customer 104 has 0 orders

-- Populate orders
INSERT INTO orders (order_id, customer_id, order_date, total_amount, payment_status) VALUES
(5001, 101, '2026-02-01', 250.00, 'PAID'),
(5002, 101, '2026-02-15', 450.00, 'PAID'),
(5003, 102, '2026-01-20', 1200.00, 'PAID'),
(5004, 103, '2026-02-10', 300.00, 'UNPAID'),
(5005, 101, '2026-02-25', 100.00, 'PAID'),
(5006, 102, '2026-02-28', 500.00, 'PENDING');
```

---

## 📝 Basic CTE Syntax & Step-by-Step Breakdown

A CTE is defined using the `WITH` keyword at the beginning of an SQL statement:

```sql
WITH cte_name AS (
    SELECT column1, column2
    FROM table_name
    WHERE condition
)
SELECT column1, column2
FROM cte_name;
```

### Syntax Elements:
1. **`WITH`**: Keyword that initiates the Common Table Expression block.
2. **`cte_name`**: The custom identifier assigned to the temporary result set.
3. **`AS`**: Keyword binding the CTE name to the inner query.
4. **`( SELECT ... )`**: Parentheses enclosing the inner query definition.
5. **Consuming Main Query**: The primary statement (`SELECT`, `INSERT`, `UPDATE`, or `DELETE`) that consumes `cte_name`.
6. **Final Semicolon `;`**: Placed **ONLY** at the very end of the consuming main statement.

---

### Basic Runnable Example

Find all employees in the Engineering department (`department_id = 3`):

```sql
WITH engineering_staff AS (
    SELECT emp_id, first_name, last_name, salary
    FROM employees
    WHERE department_id = 3
)
SELECT emp_id, CONCAT(first_name, ' ', last_name) AS full_name, salary
FROM engineering_staff
ORDER BY salary DESC;
```

#### Output
| emp_id | full_name | salary |
| :---: | :--- | :---: |
| 2 | Priya Patel | 110000.00 |
| 1 | Rahul Sharma | 90000.00 |

#### Explanation
- `engineering_staff` is defined as a temporary CTE containing 2 rows.
- The consuming main query selects from `engineering_staff` and sorts by salary.
- Once the main query finishes executing, `engineering_staff` is out of scope and cannot be referenced in a subsequent statement.

---

## ⚖️ Comparing CTEs vs Subqueries

Both CTEs and derived-table subqueries can express identical relational logic. However, their structural trade-offs differ:

| Dimension | Subqueries (Derived Tables) | Common Table Expressions (CTEs) |
| :--- | :--- | :--- |
| **Readability** | Nested inside `FROM` / `WHERE` (evaluated bottom-up/inside-out). | Defined at top of statement (evaluated top-down/left-to-right). |
| **Reusability in 1 Statement** | Must be duplicated if referenced multiple times. | Can be referenced multiple times in the main query. |
| **Chaining Multiple Stages** | Requires deep, complex nesting levels. | Chain multiple CTEs sequentially using commas. |
| **Recursion** | Not supported. | Supported via `WITH RECURSIVE`. |
| **Scope & Lifetime** | Single statement. | Single statement. |
| **Performance** | Optimizer dependent. | Optimizer dependent (neither is automatically faster). |

### Equivalent Code Comparison

#### Option A: Subquery Version
```sql
SELECT c.first_name, c.email, summary.total_spend
FROM customers AS c
JOIN (
    SELECT customer_id, SUM(total_amount) AS total_spend
    FROM orders
    GROUP BY customer_id
) AS summary ON c.customer_id = summary.customer_id
WHERE summary.total_spend > 500.00;
```

#### Option B: CTE Version (More Readable)
```sql
WITH customer_summary AS (
    SELECT customer_id, SUM(total_amount) AS total_spend
    FROM orders
    GROUP BY customer_id
)
SELECT c.first_name, c.email, cs.total_spend
FROM customers AS c
JOIN customer_summary AS cs ON c.customer_id = cs.customer_id
WHERE cs.total_spend > 500.00;
```

---

## 💡 Practical Examples

### Example A: Customers Spending Above Average

Calculate total customer spending, compute the overall average customer spend, and return customers exceeding that average:

```sql
WITH customer_spending AS (
    -- Stage 1: Calculate total spend and order count per customer
    SELECT 
        customer_id, 
        COUNT(order_id) AS order_count,
        SUM(total_amount) AS lifetime_spend
    FROM orders
    GROUP BY customer_id
),
overall_average AS (
    -- Stage 2: Calculate average spending across ordering customers
    SELECT AVG(lifetime_spend) AS avg_customer_spend
    FROM customer_spending
)
-- Stage 3: Consume both CTEs using CROSS JOIN
SELECT 
    c.customer_id,
    CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
    cs.order_count,
    cs.lifetime_spend,
    ROUND(oa.avg_customer_spend, 2) AS overall_avg_spend
FROM customers AS c
JOIN customer_spending AS cs ON c.customer_id = cs.customer_id
CROSS JOIN overall_average AS oa
WHERE cs.lifetime_spend > oa.avg_customer_spend
ORDER BY cs.lifetime_spend DESC;
```

#### Output
| customer_id | customer_name | order_count | lifetime_spend | overall_avg_spend |
| :---: | :--- | :---: | :---: | :---: |
| 102 | Sophia Miller | 2 | 1700.00 | 933.33 |

#### Explanation
1. `customer_spending` calculates total spending for ordering customers:
   - Customer 101 (Aarav): $250 + $450 + $100 = \$800.00$ (3 orders).
   - Customer 102 (Sophia): $1200 + $500 = \$1700.00$ (2 orders).
   - Customer 103 (Karan): $300.00$ (1 order).
2. `overall_average` calculates the average of these 3 customer totals: $(800 + 1700 + 300) / 3 = \$933.33$.
3. The main query joins customer metadata, compares `lifetime_spend` against `$933.33`, and returns Sophia Miller ($1700.00).

> [!NOTE]
> **Handling Zero-Order Customers**: The `JOIN orders` in `customer_spending` considers ordering customers. If a `LEFT JOIN` were used on `customers`, Customer 104 (Emma, $0.00$) would be included, making the overall average $(800 + 1700 + 300 + 0) / 4 = \$700.00$.

---

### Example B: Chaining Multiple CTEs for Sequential Pipelines

Filter paid orders, aggregate customer totals, and join with customer metadata:

```sql
WITH paid_orders AS (
    -- Stage 1: Filter active paid transactions
    SELECT order_id, customer_id, total_amount, order_date
    FROM orders
    WHERE payment_status = 'PAID'
),
customer_paid_aggregates AS (
    -- Stage 2: Aggregate paid totals per customer (References Stage 1 CTE!)
    SELECT 
        customer_id, 
        COUNT(order_id) AS paid_order_count,
        SUM(total_amount) AS total_paid_amount
    FROM paid_orders
    GROUP BY customer_id
)
-- Stage 3: Final join with customer master table
SELECT 
    c.customer_id,
    CONCAT(c.first_name, ' ', c.last_name) AS full_name,
    c.email,
    ca.paid_order_count,
    ca.total_paid_amount
FROM customers AS c
JOIN customer_paid_aggregates AS ca ON c.customer_id = ca.customer_id
ORDER BY ca.total_paid_amount DESC;
```

#### Output
| customer_id | full_name | email | paid_order_count | total_paid_amount |
| :---: | :--- | :--- | :---: | :---: |
| 102 | Sophia Miller | sophia@example.com | 1 | 1200.00 |
| 101 | Aarav Mehta | aarav@example.com | 3 | 800.00 |

#### Explanation
- Multiple CTEs are declared in a single `WITH` clause separated by a comma `,`.
- `customer_paid_aggregates` references the preceding `paid_orders` CTE directly.
- Orders with status `'UNPAID'` or `'PENDING'` (Orders 5004 and 5006) are filtered out in Stage 1.

---

### Example C: CTEs with Deletion & MySQL Target Table Restrictions

A CTE can be used in a `SELECT` statement to preview duplicate records before running deletion operations.

#### Disposable Demonstration Table Setup
```sql
-- Create temporary demo contacts table
DROP TABLE IF EXISTS demo_contacts;

CREATE TABLE demo_contacts (
    contact_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL
);

INSERT INTO demo_contacts (contact_id, full_name, email) VALUES
(1, 'Aarav Mehta', 'aarav@example.com'),
(2, 'Aarav Mehta', 'aarav@example.com'),    -- Duplicate email!
(3, 'Sophia Miller', 'sophia@example.com'),
(4, 'Sophia Miller', 'sophia@example.com'),  -- Duplicate email!
(5, 'Karan Johar', 'karan@example.com');
```

#### Step 1: Safe Non-Destructive `SELECT` Preview
Always preview rows marked for deletion using `ROW_NUMBER()`:

```sql
WITH duplicate_preview AS (
    SELECT 
        contact_id,
        full_name,
        email,
        ROW_NUMBER() OVER (
            PARTITION BY email 
            ORDER BY contact_id ASC
        ) AS row_num
    FROM demo_contacts
)
SELECT contact_id, full_name, email, row_num
FROM duplicate_preview
WHERE row_num > 1;
```

##### Preview Output
| contact_id | full_name | email | row_num |
| :---: | :--- | :--- | :---: |
| 2 | Aarav Mehta | aarav@example.com | 2 |
| 4 | Sophia Miller | sophia@example.com | 2 |

#### Step 2: Safe MySQL-Compatible Deletion via JOIN
> [!WARNING]
> **MySQL Error 1093 Caution**: In MySQL, attempting `DELETE FROM demo_contacts WHERE id IN (SELECT id FROM cte_name)` where the CTE selects from `demo_contacts` can raise `ERROR 1093 (HY000): You can't specify target table 'demo_contacts' for update in FROM clause`. To perform a safe deletion in MySQL 8.0, join the target table with a derived table or CTE:

```sql
-- Safe MySQL 8.0 Deletion using JOIN on CTE
WITH duplicate_ranks AS (
    SELECT 
        contact_id,
        ROW_NUMBER() OVER (
            PARTITION BY email 
            ORDER BY contact_id ASC
        ) AS row_num
    FROM demo_contacts
)
DELETE c
FROM demo_contacts AS c
JOIN duplicate_ranks AS r ON c.contact_id = r.contact_id
WHERE r.row_num > 1;

-- Verify remaining records
SELECT * FROM demo_contacts ORDER BY contact_id;
```

##### Output After Deletion
| contact_id | full_name | email |
| :---: | :--- | :--- |
| 1 | Aarav Mehta | aarav@example.com |
| 3 | Sophia Miller | sophia@example.com |
| 5 | Karan Johar | karan@example.com |

---

## ⚡ Performance & Best Practices

1. **Readability First**: Use CTEs to simplify complex multi-stage analytical queries.
2. **Optimizer Behavior in MySQL 8.0**:
   - By default, MySQL 8.0 attempts to **inline** unreferenced or simple CTEs into the main query.
   - For CTEs referenced multiple times, MySQL 8.0 can **materialize** the CTE (store temporary internal result rows) if doing so reduces execution cost.
3. **Inspect Execution Plans with `EXPLAIN`**:
   Verify query execution plans in MySQL using `EXPLAIN`:
   ```sql
   EXPLAIN WITH customer_spending AS (
       SELECT customer_id, SUM(total_amount) AS total FROM orders GROUP BY customer_id
   )
   SELECT * FROM customer_spending WHERE total > 500;
   ```
4. **Recursive CTEs**: Ordinary CTEs cannot reference themselves. To build recursive tree/hierarchical queries, use `WITH RECURSIVE` (detailed in Chapter 24).

---

## ⚠️ Common Mistakes & Pitfalls

### 1. Placing a Semicolon Before the Main Statement
```sql
-- ❌ INCORRECT: Semicolon after CTE definition terminates statement early!
WITH dept_summary AS (
    SELECT department_id, AVG(salary) AS avg_sal FROM employees GROUP BY department_id
); -- Error!
SELECT * FROM dept_summary;

-- ✅ CORRECT: Semicolon belongs ONLY at the end of the consuming main statement
WITH dept_summary AS (
    SELECT department_id, AVG(salary) AS avg_sal FROM employees GROUP BY department_id
)
SELECT * FROM dept_summary;
```

### 2. Repeating `WITH` for Multiple CTEs
```sql
-- ❌ INCORRECT: Repeating 'WITH' keyword for second CTE
WITH cte1 AS (SELECT * FROM customers),
WITH cte2 AS (SELECT * FROM orders) -- Error!
SELECT * FROM cte1;

-- ✅ CORRECT: Separate multiple CTEs using commas (single 'WITH' keyword)
WITH cte1 AS (SELECT * FROM customers),
cte2 AS (SELECT * FROM orders)
SELECT * FROM cte1;
```

### 3. Attempting to Reference a CTE in a Separate Statement
```sql
-- Statement 1
WITH my_cte AS (SELECT * FROM customers)
SELECT * FROM my_cte;

-- Statement 2 (Fails! my_cte is out of scope)
SELECT * FROM my_cte; -- ERROR: Table 'my_cte' doesn't exist!
```

---

## 🧪 Step-by-Step Practice Exercises

Use the sample database script (`departments`, `employees`, `customers`, `orders`) provided in this chapter.

---

### Exercise 1: Filter Recent Orders
**Task**: Use a CTE named `february_orders` to filter orders placed on or after `'2026-02-01'`, then calculate the average order total from that CTE.  
**Hint**: Select `order_id`, `total_amount`, and `order_date` in the CTE.

```sql
-- Answer
WITH february_orders AS (
    SELECT order_id, total_amount, order_date
    FROM orders
    WHERE order_date >= '2026-02-01'
)
SELECT 
    COUNT(order_id) AS february_order_count,
    ROUND(AVG(total_amount), 2) AS avg_february_order_amount
FROM february_orders;
```

#### Expected Output
| february_order_count | avg_february_order_amount |
| :---: | :---: |
| 5 | 320.00 |

*(Orders: 5001 = $250, 5002 = $450, 5004 = $300, 5005 = $100, 5006 = $500. Total = $1600 / 5 = \$320.00$).*

---

### Exercise 2: Department-Wise Average Salary
**Task**: Create a CTE named `dept_salaries` that aggregates employee count and average salary per department, then join it with `departments` to display department name, employee count, and average salary.

```sql
-- Answer
WITH dept_salaries AS (
    SELECT 
        department_id, 
        COUNT(emp_id) AS emp_count,
        ROUND(AVG(salary), 2) AS avg_salary
    FROM employees
    GROUP BY department_id
)
SELECT 
    d.department_name,
    ds.emp_count,
    ds.avg_salary
FROM departments AS d
JOIN dept_salaries AS ds ON d.department_id = ds.department_id
ORDER BY ds.avg_salary DESC;
```

#### Expected Output
| department_name | emp_count | avg_salary |
| :--- | :---: | :---: |
| Engineering | 2 | 100000.00 |
| Sales | 1 | 80000.00 |
| HR | 1 | 65000.00 |
| Marketing | 2 | 65000.00 |

---

### Exercise 3: Chained CTEs for Department High Earners
**Task**: Create two chained CTEs:
1. `high_earners`: Filters employees with salary $\ge \$70,000.00$.
2. `dept_high_earner_count`: Counts high earners per department.
Join with `departments` to display department name and count of high earners.

```sql
-- Answer
WITH high_earners AS (
    SELECT emp_id, department_id, salary
    FROM employees
    WHERE salary >= 70000.00
),
dept_high_earner_count AS (
    SELECT department_id, COUNT(emp_id) AS high_earner_count
    FROM high_earners
    GROUP BY department_id
)
SELECT 
    d.department_name,
    c.high_earner_count
FROM departments AS d
JOIN dept_high_earner_count AS c ON d.department_id = c.department_id
ORDER BY c.high_earner_count DESC;
```

#### Expected Output
| department_name | high_earner_count |
| :--- | :---: |
| Engineering | 2 |
| Marketing | 1 |
| Sales | 1 |

---

### Exercise 4: Customers Above Average Customer Spending
**Task**: Use CTEs to find customers whose total spending across all orders is strictly greater than the overall average customer spending.

```sql
-- Answer
WITH customer_totals AS (
    SELECT customer_id, SUM(total_amount) AS total_spend
    FROM orders
    GROUP BY customer_id
),
avg_spend AS (
    SELECT AVG(total_spend) AS company_avg_spend
    FROM customer_totals
)
SELECT 
    c.customer_id,
    CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
    ct.total_spend
FROM customers AS c
JOIN customer_totals AS ct ON c.customer_id = ct.customer_id
CROSS JOIN avg_spend AS a
WHERE ct.total_spend > a.company_avg_spend
ORDER BY ct.total_spend DESC;
```

#### Expected Output
| customer_id | customer_name | total_spend |
| :---: | :--- | :---: |
| 102 | Sophia Miller | 1700.00 |

---

### Exercise 5: Departments Exceeding Average Department Payroll
**Task**: Use CTEs to calculate total payroll per department, compute the average department payroll, and return departments exceeding that average.

```sql
-- Answer
WITH dept_payroll AS (
    SELECT department_id, SUM(salary) AS total_payroll
    FROM employees
    GROUP BY department_id
),
avg_payroll AS (
    SELECT AVG(total_payroll) AS avg_dept_payroll
    FROM dept_payroll
)
SELECT 
    d.department_name,
    dp.total_payroll,
    ROUND(ap.avg_dept_payroll, 2) AS company_avg_dept_payroll
FROM departments AS d
JOIN dept_payroll AS dp ON d.department_id = dp.department_id
CROSS JOIN avg_payroll AS ap
WHERE dp.total_payroll > ap.avg_dept_payroll
ORDER BY dp.total_payroll DESC;
```

#### Expected Output
| department_name | total_payroll | company_avg_dept_payroll |
| :--- | :---: | :---: |
| Engineering | 200000.00 | 118750.00 |
| Marketing | 130000.00 | 118750.00 |

---

## 🎯 Mini Challenge

Find departments whose total employee payroll expenditure exceeds the average department payroll expenditure across the company.

### Requirements:
1. Use the `departments` and `employees` setup tables.
2. Include checks for departments with or without employees.
3. Show the complete runnable CTE query and output table.

```sql
-- Mini Challenge Solution
WITH dept_summary AS (
    SELECT 
        d.department_id,
        d.department_name,
        COALESCE(SUM(e.salary), 0.00) AS dept_payroll
    FROM departments AS d
    LEFT JOIN employees AS e ON d.department_id = e.department_id
    GROUP BY d.department_id, d.department_name
),
overall_dept_avg AS (
    SELECT AVG(dept_payroll) AS avg_dept_payroll
    FROM dept_summary
)
SELECT 
    ds.department_id,
    ds.department_name,
    ds.dept_payroll,
    ROUND(oda.avg_dept_payroll, 2) AS overall_avg_dept_payroll
FROM dept_summary AS ds
CROSS JOIN overall_dept_avg AS oda
WHERE ds.dept_payroll > oda.avg_dept_payroll
ORDER BY ds.dept_payroll DESC;
```

#### Expected Output
| department_id | department_name | dept_payroll | overall_avg_dept_payroll |
| :---: | :--- | :---: | :---: |
| 3 | Engineering | 200000.00 | 118750.00 |
| 2 | Marketing | 130000.00 | 118750.00 |

#### Explanation of Safeguards:
- `LEFT JOIN` ensures all 4 departments are evaluated in `dept_summary` (HR: $65k, Marketing: $130k, Engineering: $200k, Sales: $80k).
- Average department payroll across the 4 departments = $(65000 + 130000 + 200000 + 80000) / 4 = \$118,750.00$.
- Departments exceeding $\$118,750.00$ are Engineering ($200k) and Marketing ($130k).

---

## 🔗 Related Topics

- [Subqueries & Nested Queries](17-subqueries.html)
- [Recursive CTEs & Hierarchical Queries](24-recursive-ctes.html)
- [SQL Window Functions](25-window-functions.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: Transactions](22-transactions.html) | [Next: Recursive CTEs →](24-recursive-ctes.html)
