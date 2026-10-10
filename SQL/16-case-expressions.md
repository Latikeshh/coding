---
layout: default
title: "16 case expressions"
---

# 🔀 Conditional Logic with CASE Expressions in SQL

> 🟡 Intermediate

---

## 📖 Definition

The SQL **`CASE` expression** is a conditional expression that evaluates a sequence of boolean conditions and returns a scalar value when the first condition evaluates to `TRUE`.

It serves as SQL's built-in conditional logic mechanism and can be embedded inside `SELECT`, `WHERE`, `GROUP BY`, `ORDER BY`, and `UPDATE` statements.

### Key Rules of `CASE` Expressions:
- **Sequential Evaluation:** Conditions are checked in order from top to bottom. As soon as a condition evaluates to `TRUE`, `CASE` returns its corresponding `THEN` value and **stops checking further conditions**.
- **The `ELSE` Fallback:** If no `WHEN` condition matches, `CASE` returns the value specified in the `ELSE` clause.
- **Default `NULL` Behavior:** If `ELSE` is omitted and no `WHEN` conditions match, `CASE` returns **`NULL`**.
- **Syntax vs Stored Procedures:** In standard SQL queries, the `CASE` expression terminates with the **`END`** keyword. *(Note: This differs from MySQL stored procedure control-flow `CASE` statements, which terminate with `END CASE;`)*.

---

## 🇮🇳 Hindi (Roman Script)

SQL mein conditional logic apply karne ke liye **`CASE` expression** ka use hota hai. Yeh conditions ko top-to-bottom sequence mein evaluate karta hai. Pehli `TRUE` condition milti hi `CASE` uska `THEN` result return karta hai aur baaki conditions ko skip kar deta hai. Agar koi condition match na ho, toh `ELSE` ka value aata hai. Agar `ELSE` na likha ho aur koi condition TRUE na ho, toh `NULL` return hota hai. `CASE` expression hamesha **`END`** keyword se khatam hota hai.

---

## 🚩 Marathi (Roman Script)

SQL madhye conditional logic vaparnyasathi **`CASE` expression** cha wapar kela jato. He conditions varun khali kramane tapasate. Pahili `TRUE` condition milalyas tyacha `THEN` result milto aani baaki conditions check kelea jat nahit. Kahi match na jhalyas `ELSE` cha result deto. Jar `ELSE` lihile nasael aani condition TRUE nasael tar **`NULL`** result milto. `CASE` expression cha shevat hamesha **`END`** keyword ne hoto.

---

## 🤔 Why Do We Use It?

`CASE` expressions allow you to build dynamic business logic directly inside SQL queries:

- **Dynamic Data Categorization:** Transform numeric ranges or codes into human-readable labels (e.g. Total Spend $\rightarrow$ VIP, Gold, Silver, Standard).
- **Conditional Aggregation (Pivoting Metrics):** Sum or count records conditionally within aggregate functions (`SUM(CASE WHEN payment_method = 'UPI' THEN amount ELSE 0 END)`).
- **Custom Sort Ordering:** Force specific status values (e.g. `'URGENT'`, `'HIGH'`) to appear first in query output results.
- **Conditional Data Updates:** Calculate variable salary raises or tier discounts dynamically in `UPDATE` statements.

---

## 📝 Simple CASE vs Searched CASE Syntax

SQL supports two distinct forms of `CASE` expressions:

### 1. Searched CASE Expression (Most Flexible & Universal)
Evaluates complex boolean conditions using comparison operators (`>`, `<`, `BETWEEN`, `AND`, `OR`, `IS NULL`):

```sql
CASE
    WHEN condition_1 THEN result_1
    WHEN condition_2 THEN result_2
    WHEN condition_3 THEN result_3
    ELSE fallback_result
END
```

---

### 2. Simple CASE Expression (Value Comparison)
Compares a single target expression directly against candidate literal values for exact equality:

```sql
CASE target_expression
    WHEN candidate_value_1 THEN result_1
    WHEN candidate_value_2 THEN result_2
    ELSE fallback_result
END
```

---

## 🛠️ Practical Example A: Categorizing Customer Order Sizes

When creating range categories, arrange conditions from **highest threshold to lowest threshold** so higher values are evaluated first:

```sql
-- 1. Create orders table schema
CREATE TABLE IF NOT EXISTS orders (
    order_id INT PRIMARY KEY,
    customer_id VARCHAR(10) NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL
);

-- 2. Insert sample order records
INSERT INTO orders (order_id, customer_id, total_amount)
VALUES 
    (101, 'C881', 12500.00),
    (102, 'C412', 6800.00),
    (103, 'C203', 3500.00),
    (104, 'C119', 450.00);

-- 3. Execute Searched CASE query for customer tier categorization
SELECT 
    order_id, 
    customer_id,
    total_amount,
    CASE
        WHEN total_amount >= 10000.00 THEN 'VIP Customer'
        WHEN total_amount >= 5000.00  THEN 'Gold Customer'
        WHEN total_amount >= 2000.00  THEN 'Silver Customer'
        ELSE 'Standard Customer'
    END AS customer_tier
FROM orders
ORDER BY total_amount DESC;
```

#### 👀 Expected Output:

```text
+----------+-------------+--------------+-------------------+
| order_id | customer_id | total_amount | customer_tier     |
+----------+-------------+--------------+-------------------+
|      101 | C881        |     12500.00 | VIP Customer      |
|      102 | C412        |      6800.00 | Gold Customer     |
|      103 | C203        |      3500.00 | Silver Customer   |
|      104 | C119        |       450.00 | Standard Customer |
+----------+-------------+--------------+-------------------+
```

> 💡 **Why Order Matters:** If `total_amount >= 2000.00` were placed at the top, order #101 ($12,500.00) would match `>= 2000` first and be assigned `'Silver Customer'` prematurely! Always list specific/higher thresholds before general ones.

---

## 🛠️ Practical Example B: Conditional Aggregation (Pivoting Metrics)

Combine `SUM()` or `COUNT()` with `CASE` to pivot transaction totals by payment method into separate summary columns:

```sql
-- 1. Create transactions table schema
CREATE TABLE IF NOT EXISTS transactions (
    transaction_id INT PRIMARY KEY,
    payment_method VARCHAR(30) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL
);

-- 2. Insert sample transactions
INSERT INTO transactions (transaction_id, payment_method, amount)
VALUES 
    (1, 'Credit Card', 1500.00),
    (2, 'UPI', 2500.00),
    (3, 'Credit Card', 3500.00),
    (4, 'COD', 800.00),
    (5, 'UPI', 1200.00);

-- 3. Execute Conditional Aggregation Query
SELECT 
    COUNT(transaction_id) AS total_orders,
    SUM(CASE WHEN payment_method = 'Credit Card' THEN amount ELSE 0 END) AS credit_card_revenue,
    SUM(CASE WHEN payment_method = 'UPI' THEN amount ELSE 0 END) AS upi_revenue,
    SUM(CASE WHEN payment_method = 'COD' THEN amount ELSE 0 END) AS cod_revenue
FROM transactions;
```

#### 👀 Expected Output:

```text
+--------------+---------------------+-------------+-------------+
| total_orders | credit_card_revenue | upi_revenue | cod_revenue |
+--------------+---------------------+-------------+-------------+
|            5 |             5000.00 |     3700.00 |      800.00 |
+--------------+---------------------+-------------+-------------+
```

---

## 🛠️ Practical Example C: Custom Priority Sorting in `ORDER BY`

Sort support tickets by business priority (`URGENT` $\rightarrow$ `HIGH` $\rightarrow$ `MEDIUM` $\rightarrow$ `LOW` $\rightarrow$ `RESOLVED`), breaking ties with `created_at DESC`.

```sql
-- 1. Create support_tickets table schema
CREATE TABLE IF NOT EXISTS support_tickets (
    ticket_id INT PRIMARY KEY,
    subject VARCHAR(100) NOT NULL,
    status VARCHAR(20) NOT NULL,
    created_at DATE NOT NULL
);

-- 2. Insert sample tickets
INSERT INTO support_tickets (ticket_id, subject, status, created_at)
VALUES 
    (101, 'Server Outage', 'RESOLVED', '2026-10-01'),
    (102, 'Login Failure', 'URGENT', '2026-10-02'),
    (103, 'Payment Gateway Error', 'HIGH', '2026-10-02'),
    (104, 'UI Alignment Issue', 'MEDIUM', '2026-10-03'),
    (105, 'Slow Page Load', 'LOW', '2026-10-03');

-- 3. Execute Custom Sorting Query
SELECT ticket_id, subject, status, created_at
FROM support_tickets
ORDER BY 
    CASE status
        WHEN 'URGENT'   THEN 1
        WHEN 'HIGH'     THEN 2
        WHEN 'MEDIUM'   THEN 3
        WHEN 'LOW'      THEN 4
        WHEN 'RESOLVED' THEN 5
        ELSE 6
    END ASC,
    created_at DESC;
```

#### 👀 Expected Output:

```text
+-----------+-----------------------+----------+------------+
| ticket_id | subject               | status   | created_at |
+-----------+-----------------------+----------+------------+
|       102 | Login Failure         | URGENT   | 2026-10-02 |
|       103 | Payment Gateway Error | HIGH     | 2026-10-02 |
|       104 | UI Alignment Issue    | MEDIUM   | 2026-10-03 |
|       105 | Slow Page Load        | LOW      | 2026-10-03 |
|       101 | Server Outage         | RESOLVED | 2026-10-01 |
+-----------+-----------------------+----------+------------+
```

---

## 🛠️ Practical Example D: Conditional Bulk `UPDATE` Statements

Apply performance-based salary increments dynamically across an entire department:

```sql
-- 1. Create employees table schema
CREATE TABLE IF NOT EXISTS staff_ratings (
    emp_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    performance_rating INT NOT NULL
);

-- 2. Insert sample staff
INSERT INTO staff_ratings (emp_id, first_name, salary, performance_rating)
VALUES 
    (1, 'Rahul', 80000.00, 5),
    (2, 'Priya', 60000.00, 4),
    (3, 'Amit', 50000.00, 3);

-- 3. Execute Conditional UPDATE
UPDATE staff_ratings
SET salary = salary * 
    CASE performance_rating
        WHEN 5 THEN 1.15  -- 15% raise
        WHEN 4 THEN 1.10  -- 10% raise
        WHEN 3 THEN 1.05  -- 5% raise
        ELSE 1.00         -- No raise
    END;

-- 4. Verify updated salaries
SELECT emp_id, first_name, performance_rating, salary FROM staff_ratings;
```

#### 👀 Expected Output:

```text
+--------+------------+--------------------+----------+
| emp_id | first_name | performance_rating | salary   |
+--------+------------+--------------------+----------+
|      1 | Rahul      |                  5 | 92000.00 |
|      2 | Priya      |                  4 | 66000.00 |
|      3 | Amit       |                  3 | 52500.00 |
+--------+------------+--------------------+----------+
```

> ⚠️ **Data Safety Warning for `UPDATE`:** `UPDATE` statements permanently modify records stored on disk! Always preview your calculated values with a `SELECT` query first before running `UPDATE`, or execute inside a `START TRANSACTION` block.

---

## 🛠️ Common Mistakes & Troubleshooting

| Error / Pitfall | Cause | Recommended Fix |
| :--- | :--- | :--- |
| **`ERROR 1064 (42000): Syntax Error`** | Forgetting the mandatory **`END`** keyword at the end of the `CASE` expression. | Ensure every `CASE` expression terminates with `END`. |
| **Testing `NULL` in Simple `CASE`** | Writing `CASE col WHEN NULL THEN ...` (fails because `col = NULL` yields `UNKNOWN`). | Use Searched `CASE` with `WHEN col IS NULL THEN ...`. |
| **Broad Conditions First** | Placing `>= 2000` before `>= 10000` in threshold range checks. | Arrange `WHEN` range thresholds from highest to lowest. |
| **Incompatible Return Data Types** | Returning strings in one `THEN` branch and integers in another `THEN` branch. | Ensure all `THEN` and `ELSE` branches return compatible data types. |
| **Unexpected `NULL` Output** | Omitting `ELSE` when no `WHEN` condition matches. | Provide an explicit `ELSE` fallback value (e.g. `ELSE 'Standard'`). |

---

## 🌍 Real-World Usage

- **E-Commerce Shipping Labels:** Categorizing delivery speed (`WHEN speed_id = 1 THEN 'Overnight Air' ELSE 'Standard Ground'`).
- **Financial Risk Modeling:** Assigning credit risk tiers based on credit score ranges.
- **Reporting Pivots:** Grouping quarterly revenue into 4 fiscal quarter columns (`Q1`, `Q2`, `Q3`, `Q4`).

---

## 🧪 Structured Practice Exercises

### Exercise 1: Categorizing Age Brackets
Write a `SELECT` query on an `employees` table categorizing staff into age brackets: `'Junior'` (< 25), `'Mid-Level'` (25–40), and `'Senior'` (> 40).

### Exercise 2: Mapping Status Codes to Labels
Write a `SELECT` query that converts single-letter order status codes (`'P'`, `'S'`, `'D'`, `'C'`) into readable string labels (`'Pending'`, `'Shipped'`, `'Delivered'`, `'Cancelled'`).

### Exercise 3: Handling `NULL`s in `CASE`
Write a `CASE` expression that checks if `phone_number IS NULL`. If `NULL`, return `'Missing Phone'`; otherwise return `'Phone Available'`.

### Exercise 4: Conditional Aggregation
Write a query on an `exam_results` table that counts total passed students (`score >= 50`) and total failed students (`score < 50`) in a single row using `SUM(CASE ...)`.

### Exercise 5: Custom Priority Ordering
Write an `ORDER BY` clause using `CASE` to sort user roles in priority order: `'Admin'` (1st), `'Moderator'` (2nd), `'Member'` (3rd), `'Guest'` (4th).

---

## 🎯 Mini Challenge

1. Create a `products` table schema:
   - `product_id` (INT, Primary Key)
   - `product_name` (VARCHAR 100, NOT NULL)
   - `stock_quantity` (INT — Nullable)
2. Insert 5 sample product records:
   - ID 1: `'Wireless Mouse'`, Stock `0`
   - ID 2: `'USB-C Cable'`, Stock `5`
   - ID 3: `'Mechanical Keyboard'`, Stock `20`
   - ID 4: `'Gaming Monitor'`, Stock `45`
   - ID 5: `'Desk Mat'`, Stock `NULL`
3. Write a `SELECT` query displaying `product_name`, `stock_quantity`, and a dynamic label `stock_status` applying the following rules in correct order:
   - `'Unknown Status'` if `stock_quantity IS NULL`
   - `'Out of Stock'` if `stock_quantity = 0`
   - `'Critical Reorder'` if `stock_quantity < 10`
   - `'Low Stock'` if `stock_quantity` is between 10 and 30, inclusive
   - `'Adequate Stock'` for all other quantities

<details>
<summary>🔍 Click to view Exercise Solutions & Answer Key</summary>

### Answer Key:

#### Exercise 1 Solution:
```sql
SELECT employee_name, age,
    CASE 
        WHEN age < 25 THEN 'Junior'
        WHEN age BETWEEN 25 AND 40 THEN 'Mid-Level'
        ELSE 'Senior'
    END AS age_bracket
FROM employees;
```

#### Exercise 2 Solution:
```sql
SELECT order_id,
    CASE status_code
        WHEN 'P' THEN 'Pending'
        WHEN 'S' THEN 'Shipped'
        WHEN 'D' THEN 'Delivered'
        WHEN 'C' THEN 'Cancelled'
        ELSE 'Unknown Status'
    END AS display_status
FROM orders;
```

#### Exercise 3 Solution:
```sql
SELECT full_name,
    CASE 
        WHEN phone_number IS NULL THEN 'Missing Phone'
        ELSE 'Phone Available'
    END AS contact_status
FROM customers;
```

#### Exercise 4 Solution:
```sql
SELECT 
    COUNT(student_id) AS total_students,
    SUM(CASE WHEN score >= 50 THEN 1 ELSE 0 END) AS passed_students,
    SUM(CASE WHEN score < 50 THEN 1 ELSE 0 END) AS failed_students
FROM exam_results;
```

#### Exercise 5 Solution:
```sql
SELECT username, role
FROM user_accounts
ORDER BY 
    CASE role
        WHEN 'Admin' THEN 1
        WHEN 'Moderator' THEN 2
        WHEN 'Member' THEN 3
        WHEN 'Guest' THEN 4
        ELSE 5
    END ASC;
```

#### Mini Challenge Solution:

```sql
-- Step 1: Create table schema
CREATE TABLE IF NOT EXISTS products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    stock_quantity INT -- Nullable
);

-- Step 2: Insert sample products
INSERT INTO products (product_id, product_name, stock_quantity)
VALUES 
    (1, 'Wireless Mouse', 0),
    (2, 'USB-C Cable', 5),
    (3, 'Mechanical Keyboard', 20),
    (4, 'Gaming Monitor', 45),
    (5, 'Desk Mat', NULL);

-- Step 3: Run Searched CASE query evaluating stock status
SELECT 
    product_name,
    stock_quantity,
    CASE
        WHEN stock_quantity IS NULL THEN 'Unknown Status' -- Checked FIRST!
        WHEN stock_quantity = 0 THEN 'Out of Stock'
        WHEN stock_quantity < 10 THEN 'Critical Reorder'
        WHEN stock_quantity BETWEEN 10 AND 30 THEN 'Low Stock'
        ELSE 'Adequate Stock'
    END AS stock_status
FROM products;
```

**Expected Output:**

```text
+---------------------+----------------+------------------+
| product_name        | stock_quantity | stock_status     |
+---------------------+----------------+------------------+
| Wireless Mouse      |              0 | Out of Stock     |
| USB-C Cable         |              5 | Critical Reorder |
| Mechanical Keyboard |             20 | Low Stock        |
| Gaming Monitor      |             45 | Adequate Stock   |
| Desk Mat            |           NULL | Unknown Status   |
+---------------------+----------------+------------------+
```

</details>

---

## 🔗 Related Topics

- [SQL Built-in Functions](15-sql-functions.html)
- [`GROUP BY` & `HAVING` Clauses](13-group-by-and-having.html)
- [Subqueries & Nested Queries](17-subqueries.html)

---

## 🧭 Navigation

[← Previous: SQL Functions](15-sql-functions.html) | [SQL Home](./) | [Next: Subqueries →](17-subqueries.html)
