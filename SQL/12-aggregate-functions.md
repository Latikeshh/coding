---
layout: default
title: "12 aggregate functions"
---

# 📈 SQL Aggregate Functions (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`)

> 🟡 Intermediate

## 📖 Definition

An **Aggregate Function** in SQL performs a mathematical or statistical calculation on a set of values across multiple rows of a column and returns a single scalar summary value.

SQL's core aggregate functions include:
- **`COUNT(*)` / `COUNT(column)`:** Counts total rows or non-NULL column values.
- **`SUM(column)`:** Calculates the total sum of numeric values.
- **`AVG(column)`:** Calculates the arithmetic mean average of numeric values.
- **`MIN(column)`:** Returns the minimum non-NULL value (numbers, text, or dates).
- **`MAX(column)`:** Returns the maximum non-NULL value (numbers, text, or dates).

---

## 🇮🇳 Hindi (Roman Script)

SQL ke **Aggregate Functions** bohot saari rows ke data ko calculate karke ek single summary result return karte hain. Main aggregate functions hain: `COUNT(*)` (saari rows ginne ke liye), `COUNT(column)` (sirf non-NULL values ginne ke liye), `SUM()` (total amount ke liye), `AVG()` (average nikalne ke liye), `MIN()` (sabse choti value ke liye), aur `MAX()` (sabse badi value ke liye). Important note: `COUNT(*)` ko chhod kar baaki saare aggregate functions `NULL` values ko ignore karte hain.

---

## 🚩 Marathi (Roman Script)

SQL madhil **Aggregate Functions** anek rows madhil values varun ek single summary value tayar kartat. `COUNT(*)` sarva rows mojto, `COUNT(column)` phakta non-NULL values mojto, `SUM()` berij karto, `AVG()` sarasari kadhato, `MIN()` sarvat khali value shodhto, aani `MAX()` sarvat mothi value dakhvato. `COUNT(*)` vakalta baaki sarva aggregate functions `NULL` values la ignore kartat.

---

## 🤔 Why Do We Use It?

Databases often store millions of individual transaction records. Business stakeholders rarely read raw row logs—they require summary metrics to answer key questions:

- What was the total gross revenue generated this month?
- How many unique customers placed an order today?
- What is the average order value across all completed transactions?
- What are the lowest and highest product prices in our inventory?

Aggregate functions calculate these high-level analytics directly inside the database engine in milliseconds.

---

## 🧠 Simple Analogy: The Classroom Grade Summary

Imagine a **Classroom Gradebook**:

- **`COUNT(*)`:** Counting the total number of student desks in the classroom (whether the student took the exam or was absent).
- **`COUNT(score)`:** Counting only the exam papers turned in (excluding absent students who have no score recorded).
- **`SUM(score)`:** Adding up all the exam scores on the turned-in papers.
- **`AVG(score)`:** Calculating the class average score across students who turned in an exam.
- **`MIN(score)` / `MAX(score)`:** Finding the lowest and highest test scores in the class.

---

## 📊 Core Aggregate Functions Reference Matrix

| Function | Functionality | `NULL` Handling Rules | Example Usage |
| :--- | :--- | :--- | :--- |
| **`COUNT(*)`** | Counts **all** matching rows in the result set. | **Includes** `NULL` rows. | `SELECT COUNT(*) FROM orders;` |
| **`COUNT(col)`** | Counts non-NULL entries in a specific column. | **Ignores** `NULL` values. | `SELECT COUNT(email) FROM users;` |
| **`COUNT(DISTINCT col)`** | Counts unique, non-NULL values in a column. | **Ignores** `NULL` values. | `SELECT COUNT(DISTINCT customer_id) FROM orders;` |
| **`SUM(col)`** | Calculates total numeric sum of a column. | **Ignores** `NULL` values. | `SELECT SUM(order_amount) FROM orders;` |
| **`AVG(col)`** | Calculates arithmetic mean average (`SUM / COUNT(col)`). | **Ignores** `NULL` values in denominator. | `SELECT AVG(order_amount) FROM orders;` |
| **`MIN(col)`** | Returns smallest non-NULL value (numbers, dates, text). | **Ignores** `NULL` values. | `SELECT MIN(price) FROM products;` |
| **`MAX(col)`** | Returns largest non-NULL value (numbers, dates, text). | **Ignores** `NULL` values. | `SELECT MAX(price) FROM products;` |

---

## ⚙️ How Aggregate Functions Handle `NULL` & Empty Sets

Understanding `NULL` behavior in aggregations is critical for data accuracy:

1. **`NULL` Values Are Ignored:** All aggregate functions (except `COUNT(*)`) completely skip `NULL` values during calculation.
2. **Behavior on Empty Result Sets:**
   - If a `WHERE` condition matches **0 rows**:
     - `COUNT(*)` returns **`0`**.
     - `SUM()`, `AVG()`, `MIN()`, and `MAX()` return **`NULL`**!
3. **Handling `NULL` Sums with `COALESCE()`:**
   - To prevent returning `NULL` when summing empty or unpaid sets, wrap the sum in `COALESCE(SUM(column), 0.00)`. This guarantees a formatted numeric `$0.00` fallback.

---

## 🛠️ Reproducible Example 1: E-Commerce Analytics Query

Let's execute a complete MySQL-compatible workflow creating an `orders` table and analyzing order counts, paid vs pending transactions, unique customers, and sales revenue.

```sql
-- 1. Create orders table schema
CREATE TABLE IF NOT EXISTS orders (
    order_id INT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_amount DECIMAL(10, 2) NOT NULL,
    payment_status VARCHAR(20) NOT NULL, -- 'PAID', 'PENDING', 'FAILED'
    payment_date DATE -- Nullable for pending/failed orders
);

-- 2. Insert 5 sample orders containing paid, pending, and failed transactions
INSERT INTO orders (order_id, customer_id, order_amount, payment_status, payment_date)
VALUES 
    (1001, 1, 1500.00, 'PAID', '2026-10-01'),
    (1002, 2, 3500.00, 'PAID', '2026-10-02'),
    (1003, 1, 2000.00, 'PENDING', NULL),
    (1004, 3, 5000.00, 'PAID', '2026-10-03'),
    (1005, 2, 1200.00, 'FAILED', NULL);
```

### Comprehensive Aggregate Query:

```sql
SELECT 
    COUNT(*) AS total_order_rows,
    COUNT(payment_date) AS orders_with_payment_dates,
    SUM(CASE WHEN payment_status = 'PAID' THEN 1 ELSE 0 END) AS paid_orders_count,
    COUNT(DISTINCT customer_id) AS unique_purchasers,
    COALESCE(SUM(CASE WHEN payment_status = 'PAID' THEN order_amount ELSE 0 END), 0.00) AS total_paid_revenue,
    ROUND(AVG(CASE WHEN payment_status = 'PAID' THEN order_amount END), 2) AS avg_paid_order_value,
    MIN(order_amount) AS cheapest_order,
    MAX(order_amount) AS highest_order
FROM orders;
```

#### 👀 Expected Output:

```text
+------------------+---------------------------+-------------------+-------------------+--------------------+-----------------------+----------------+---------------+
| total_order_rows | orders_with_payment_dates | paid_orders_count | unique_purchasers | total_paid_revenue | avg_paid_order_value  | cheapest_order | highest_order |
+------------------+---------------------------+-------------------+-------------------+--------------------+-----------------------+----------------+---------------+
|                5 |                         3 |                 3 |                 3 |           10000.00 |               3333.33 |        1200.00 |       5000.00 |
+------------------+---------------------------+-------------------+-------------------+--------------------+-----------------------+----------------+---------------+
```

### 🔍 Query Breakdown & Calculations:
- **`total_order_rows` = 5:** `COUNT(*)` counts all 5 rows in the table.
- **`orders_with_payment_dates` = 3:** `COUNT(payment_date)` counts non-NULL dates (Orders 1001, 1002, 1004).
- **`paid_orders_count` = 3:** `SUM(CASE WHEN payment_status = 'PAID' THEN 1 ELSE 0 END)` explicitly counts orders marked `'PAID'`.
- **`unique_purchasers` = 3:** `COUNT(DISTINCT customer_id)` counts unique customer IDs (`1`, `2`, `3`).
- **`total_paid_revenue` = 10000.00:** Sum of paid orders ($1500 + $3500 + $5000 = $10,000.00$).
- **`avg_paid_order_value` = 3333.33:** Average of paid orders ($10000.00 / 3 = $3,333.33$).

---

## 🛠️ Reproducible Example 2: Understanding `NULL`s in `AVG()` vs `COALESCE()`

Let's explore how `AVG()` calculates averages when nullable columns contain `NULL` values using an `employee_bonuses` table.

```sql
-- 1. Create table schema
CREATE TABLE IF NOT EXISTS employee_bonuses (
    emp_id INT PRIMARY KEY,
    employee_name VARCHAR(50) NOT NULL,
    bonus_amount DECIMAL(10, 2) -- Nullable
);

-- 2. Insert 3 employee records (Alice & Bob receive bonuses; Charlie has NULL)
INSERT INTO employee_bonuses (emp_id, employee_name, bonus_amount)
VALUES
    (1, 'Alice', 5000.00),
    (2, 'Bob', 3000.00),
    (3, 'Charlie', NULL); -- Charlie has no bonus recorded
```

### Comparing Aggregate Calculations:

```sql
SELECT 
    COUNT(*) AS total_employees,
    COUNT(bonus_amount) AS bonus_recipients,
    SUM(bonus_amount) AS total_bonus_payout,
    
    -- 1. Standard AVG(): Ignores NULL Charlie (8000 / 2 recipients = 4000.00)
    AVG(bonus_amount) AS avg_bonus_per_recipient,
    
    -- 2. AVG with COALESCE: Converts NULL to 0.00 (8000 / 3 employees = 2666.67)
    ROUND(AVG(COALESCE(bonus_amount, 0.00)), 2) AS avg_bonus_company_wide
FROM employee_bonuses;
```

#### 👀 Expected Output:

```text
+-----------------+------------------+--------------------+--------------------------+-------------------------+
| total_employees | bonus_recipients | total_bonus_payout | avg_bonus_per_recipient | avg_bonus_company_wide |
+-----------------+------------------+--------------------+--------------------------+-------------------------+
|               3 |                2 |            8000.00 |                  4000.00 |                 2666.67 |
+-----------------+------------------+--------------------+--------------------------+-------------------------+
```

### 💡 Why `avg_bonus_per_recipient` ($4000.00) and `avg_bonus_company_wide` ($2666.67) Differ:
- **`AVG(bonus_amount)`:** Sums non-NULL values ($5000 + $3000 = $8000) and divides by **2** (the count of non-NULL rows). This answers: *"What was the average bonus among employees who actually received a bonus?"*
- **`AVG(COALESCE(bonus_amount, 0.00))`:** Converts Charlie's `NULL` into `0.00`, giving values $5000, $3000, and $0$. It sums to $8000 and divides by **3** (all employees). This answers: *"What was the average bonus payout across all company employees?"*

---

## 🛠️ Common Mistakes & Troubleshooting

| Error / Pitfall | Cause | Recommended Fix |
| :--- | :--- | :--- |
| **`ERROR 1140 (42000): Mixing aggregate and non-aggregate columns`** | Writing `SELECT employee_name, AVG(salary) FROM employees;` without `GROUP BY`. | Remove non-aggregated individual columns or add `GROUP BY employee_name`. |
| **Confusing `COUNT(*)` vs `COUNT(column)`** | Expecting `COUNT(email)` to equal total table rows when some emails are `NULL`. | Use `COUNT(*)` for total table rows; use `COUNT(email)` for non-NULL emails. |
| **`SUM()` Returning `NULL` on Empty Sets** | Running `SELECT SUM(amount)` on a query matching 0 rows returns `NULL` instead of `0`. | Wrap sum in `COALESCE(SUM(amount), 0.00)` to guarantee a numeric `$0.00` fallback. |
| **Applying `SUM()` to String Columns** | Running `SUM(first_name)` on VARCHAR columns. | Apply `SUM()` and `AVG()` only to numeric columns (`INT`, `DECIMAL`, `FLOAT`). |

---

## 🌍 Real-World Usage

- **E-Commerce Dashboards:** Calculating daily gross revenue (`SUM(order_amount)`), total orders (`COUNT(*)`), and average order value (`AVG(order_amount)`).
- **Financial Analytics:** Finding minimum and maximum stock prices (`MIN(price)`, `MAX(price)`).
- **User Metrics:** Counting active subscribers vs total registered accounts (`COUNT(email)` vs `COUNT(*)`).

---

## 🧪 Learning Exercises & Self-Checks

### Exercise 1: Product Price Analytics
Write an SQL query on a `products (product_id, product_name, price, category)` table that retrieves:
1. Total product count (`total_products`).
2. Average product price rounded to 2 decimal places (`avg_price`).
3. Lowest product price (`min_price`).
4. Highest product price (`max_price`).

### Exercise 2: Unique Category Count
Write a query to count how many unique categories exist in the `products` table using `COUNT(DISTINCT category)`.

### Exercise 3: Comparing `COUNT(*)` vs `COUNT(column)`
Given a `users` table with 10 total rows where 3 users have `email = NULL`, what values will `COUNT(*)` and `COUNT(email)` return?

### Exercise 4: Total Revenue Fallback
Write a query using `COALESCE()` that calculates the total revenue from a `sales` table for region `'North'`, returning `0.00` if no matching sales rows exist.

---

## 🎯 Mini Challenge

1. Create a `sales_records` table schema:
   - `sale_id` (INT, Primary Key)
   - `region` (VARCHAR 50)
   - `amount` (DECIMAL 10,2)
   - `payment_status` (VARCHAR 20 — `'PAID'` or `'PENDING'`)
2. Insert 4 records for region `'West'`:
   - ID 1: Amount `1000.00`, Status `'PAID'`
   - ID 2: Amount `2500.00`, Status `'PAID'`
   - ID 3: Amount `1500.00`, Status `'PENDING'`
   - ID 4: Amount `500.00`, Status `'PAID'`
3. Write a single query for region `'West'` that returns:
   - `total_transactions`: Total row count.
   - `paid_transactions`: Count of paid transactions (`payment_status = 'PAID'`).
   - `total_revenue`: Total paid revenue ($1000 + $2500 + $500 = $4000.00$) with a `0.00` fallback using `COALESCE()`.
   - `avg_revenue`: Average revenue across paid transactions rounded to 2 decimal places ($4000 / 3 = $1333.33$).

<details>
<summary>🔍 Click to view Exercise Solutions & Answer Key</summary>

### Answer Key:

#### Exercise 1 Solution:
```sql
SELECT 
    COUNT(*) AS total_products,
    ROUND(AVG(price), 2) AS avg_price,
    MIN(price) AS min_price,
    MAX(price) AS max_price
FROM products;
```

#### Exercise 2 Solution:
```sql
SELECT COUNT(DISTINCT category) AS unique_categories 
FROM products;
```

#### Exercise 3 Solution:
- `COUNT(*)` returns **`10`** (counts all 10 rows).
- `COUNT(email)` returns **`7`** (ignores 3 NULL emails).

#### Exercise 4 Solution:
```sql
SELECT COALESCE(SUM(amount), 0.00) AS total_revenue
FROM sales
WHERE region = 'North';
```

#### Mini Challenge Solution:

```sql
-- Step 1: Create table schema
CREATE TABLE IF NOT EXISTS sales_records (
    sale_id INT PRIMARY KEY,
    region VARCHAR(50) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    payment_status VARCHAR(20) NOT NULL
);

-- Step 2: Insert sample records
INSERT INTO sales_records (sale_id, region, amount, payment_status)
VALUES 
    (1, 'West', 1000.00, 'PAID'),
    (2, 'West', 2500.00, 'PAID'),
    (3, 'West', 1500.00, 'PENDING'),
    (4, 'West', 500.00, 'PAID');

-- Step 3: Run aggregate query
SELECT 
    COUNT(*) AS total_transactions,
    SUM(CASE WHEN payment_status = 'PAID' THEN 1 ELSE 0 END) AS paid_transactions,
    COALESCE(SUM(CASE WHEN payment_status = 'PAID' THEN amount ELSE 0 END), 0.00) AS total_revenue,
    ROUND(AVG(CASE WHEN payment_status = 'PAID' THEN amount END), 2) AS avg_revenue
FROM sales_records
WHERE region = 'West';
```

**Expected Output:**

```text
+--------------------+-------------------+---------------+-------------+
| total_transactions | paid_transactions | total_revenue | avg_revenue |
+--------------------+-------------------+---------------+-------------+
|                  4 |                 3 |       4000.00 |     1333.33 |
+--------------------+-------------------+---------------+-------------+
```

</details>

---

## 🔗 Related Topics

- [Database & Table Basics (`CREATE TABLE`)](03-databases-and-tables.html)
- [`SELECT` – Reading & Querying Data](07-select.html)
- [`UPDATE` & `DELETE` – Modifying Data](11-update-and-delete.html)
- [`GROUP BY` & `HAVING` Clauses](13-group-by-and-having.html)

---

## 🧭 Navigation

[← Previous: UPDATE & DELETE](11-update-and-delete.html) | [SQL Home](./) | [Next: GROUP BY & HAVING →](13-group-by-and-having.html)
