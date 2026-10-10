---
layout: default
title: "13 group by and having"
---

# 📊 `GROUP BY` & `HAVING` Clauses in SQL

> 🟡 Intermediate

## 📖 Definition

- **`GROUP BY`:** An SQL clause that collapses individual table rows sharing identical values in specified columns into summary rows. It is paired with aggregate functions (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) to compute metrics per category.
- **`HAVING`:** An SQL clause used specifically to filter summarized groups **after** aggregation has occurred. It functions as the `WHERE` clause for grouped summary data.

---

## 🇮🇳 Hindi (Roman Script)

Data ko category-wise summarize karne ke liye **`GROUP BY`** clause ka use hota hai (jaise department-wise total salary ya city-wise customer count). **`WHERE`** aur **`HAVING`** mein antar samajhna sabse zaroori hai:
- **`WHERE`:** Grouping hone se **pehle** individual raw rows ko filter karta hai. (Isme `SUM` ya `AVG` jaise aggregate functions nahi likh sakte).
- **`HAVING`:** Grouping aur calculation hone ke **baad** summary groups ko filter karta hai (jaise `HAVING SUM(sales) > 50000`).

---

## 🚩 Marathi (Roman Script)

Data la category-wise summarize karnyasathi **`GROUP BY`** clause vaparla jato. **`WHERE`** aani **`HAVING`** madhil pharak samajne mahatvache ahe:
- **`WHERE`:** Grouping honyapurvi **raw rows** la filter karto.
- **`HAVING`:** Grouping aani aggregation zalyanantar **summary groups** la filter karto (jasakhi `HAVING COUNT(*) >= 5`).

---

## 🤔 Why Do We Use It?

In real-world business analytics, stakeholders need categorized summary reporting rather than raw transaction lists:

- What is the total gross sales revenue per product category?
- Which customers have placed 5 or more completed orders this month?
- What is the average employee salary per department, excluding interns?

`GROUP BY` organizes raw rows into category buckets, and `HAVING` filters those buckets based on aggregate conditions.

---

## 🧠 Simple Analogy: Mailroom Sorting Trays

Think of `GROUP BY` and `HAVING` as a **Postal Mailroom**:

```text
┌───────────────────────────────────────┬──────────────────────────────────────────┐
│ Mailroom Operation                    │ SQL Clause Equivalent                    │
├───────────────────────────────────────┼──────────────────────────────────────────┤
│ 1. Throwing away damaged envelopes    │ WHERE status = 'VALID' (Pre-filter)      │
│ 2. Sorting mail into City Trays       │ GROUP BY city                            │
│ 3. Counting total letters in each tray│ Aggregate: COUNT(*) AS letter_count      │
│ 4. Loading ONLY heavy trays (>50 msgs)│ HAVING COUNT(*) > 50 (Post-group filter) │
└───────────────────────────────────────┴──────────────────────────────────────────┘
```

---

## ⚡ Logical Query Processing Order

Understanding the internal logical execution sequence of SQL clauses explains why aggregate conditions belong in `HAVING` rather than `WHERE`:

```text
1. FROM & JOINs  ──► Locate source tables and join relationships
2. WHERE         ──► Filter individual raw rows BEFORE grouping
3. GROUP BY      ──► Partition remaining rows into category buckets
4. HAVING        ──► Filter aggregate summary groups
5. SELECT        ──► Project columns, evaluate aliases, compute aggregates
6. DISTINCT      ──► Remove duplicate rows from final output
7. ORDER BY      ──► Sort final output rows
8. LIMIT         ──► Restrict maximum number of output rows
```

> 💡 **Why `WHERE SUM(amount) > 100` Fails:** In Step 2 (`WHERE`), individual rows are being evaluated one-by-one *before* groups exist! Aggregations do not exist until Step 3 (`GROUP BY`). Therefore, aggregate filter conditions must be placed in Step 4 (`HAVING`).

---

## 🔍 `WHERE` vs `HAVING` Comparison Matrix

| Feature | `WHERE` Clause | `HAVING` Clause |
| :--- | :--- | :--- |
| **Execution Point** | Evaluated **BEFORE** `GROUP BY` (filters raw rows). | Evaluated **AFTER** `GROUP BY` (filters summary groups). |
| **Aggregate Functions** | ❌ **Prohibited** (e.g. `WHERE SUM(price) > 50` throws Error 1111). | ✅ **Allowed** (e.g. `HAVING SUM(price) > 50`). |
| **Column Targets** | References raw table columns (`department`, `status`). | References aggregate results (`COUNT(*)`, `AVG(salary)`). |
| **Performance** | **High efficiency** (reduces rows before grouping). | **Post-group overhead** (groups rows before filtering). |

### Side-by-Side SQL Comparison:

```sql
-- Query A: Filter individual rows BEFORE grouping using WHERE
SELECT department_name, AVG(salary) AS avg_salary
FROM employees
WHERE status = 'Active' -- Filters out inactive employees first
GROUP BY department_name;

-- Query B: Filter aggregate summary groups AFTER grouping using HAVING
SELECT department_name, AVG(salary) AS avg_salary
FROM employees
GROUP BY department_name
HAVING AVG(salary) > 50000.00; -- Filters out departments with avg salary <= 50,000
```

---

## 🛠️ Reproducible Example 1: Multi-Column `GROUP BY` & `HAVING` (`sales_records`)

Let's execute a complete MySQL-compatible workflow calculating annual revenue per department and filtering department years with $10,000+ in sales.

```sql
-- 1. Create sales_records table schema
CREATE TABLE IF NOT EXISTS sales_records (
    order_id INT PRIMARY KEY,
    department_name VARCHAR(50) NOT NULL,
    order_date DATE NOT NULL,
    status VARCHAR(20) NOT NULL, -- 'COMPLETED', 'PENDING', 'CANCELLED'
    order_total DECIMAL(10, 2) NOT NULL
);

-- 2. Insert sample sales records
INSERT INTO sales_records (order_id, department_name, order_date, status, order_total)
VALUES 
    (1, 'Electronics', '2025-05-10', 'COMPLETED', 15000.00),
    (2, 'Electronics', '2025-06-15', 'COMPLETED', 25000.00),
    (3, 'Furniture', '2025-07-20', 'COMPLETED', 8000.00),
    (4, 'Electronics', '2026-01-10', 'COMPLETED', 30000.00),
    (5, 'Furniture', '2026-02-14', 'COMPLETED', 12000.00),
    (6, 'Kitchen', '2026-03-01', 'COMPLETED', 4000.00),
    (7, 'Electronics', '2026-03-10', 'PENDING', 5000.00);
```

### Multi-Column Grouping Query:

```sql
SELECT 
    department_name,
    YEAR(order_date) AS order_year,
    COUNT(order_id) AS completed_orders,
    SUM(order_total) AS gross_revenue
FROM sales_records
WHERE status = 'COMPLETED' -- Step 1: Filter raw rows BEFORE grouping
GROUP BY department_name, YEAR(order_date) -- Step 2: Group by department AND year
HAVING SUM(order_total) >= 10000.00 -- Step 3: Filter groups generating $10,000+
ORDER BY gross_revenue DESC; -- Step 4: Sort results
```

#### 👀 Expected Output:

```text
+─────────────────+────────────+──────────────────+───────────────+
| department_name | order_year | completed_orders | gross_revenue |
+─────────────────+────────────+──────────────────+───────────────+
| Electronics     |       2025 |                2 |      40000.00 |
| Electronics     |       2026 |                1 |      30000.00 |
| Furniture       |       2026 |                1 |      12000.00 |
+─────────────────+────────────+──────────────────+───────────────+
```

### 🔍 Query Breakdown:
- **`WHERE status = 'COMPLETED'`**: Filters out order #7 (`PENDING`) *before* grouping.
- **`GROUP BY department_name, YEAR(order_date)`**: Groups completed sales by both department name AND calendar year.
- **`HAVING SUM(order_total) >= 10000.00`**: Excludes `Furniture 2025` ($8000) and `Kitchen 2026` ($4000) because their aggregate gross revenue is below $10,000.00.

---

## 🛠️ Reproducible Example 2: VIP Customers (`HAVING COUNT(*) >= 5`)

Find high-frequency VIP customers who have placed 5 or more orders:

```sql
-- 1. Create orders table schema
CREATE TABLE IF NOT EXISTS orders (
    order_id INT PRIMARY KEY,
    customer_id INT NOT NULL,
    total_amount DECIMAL(10, 2) NOT NULL
);

-- 2. Insert sample orders (Customer 1 & 3 have 5 orders; Customer 2 has 2)
INSERT INTO orders (order_id, customer_id, total_amount)
VALUES 
    (101, 1, 150.00), (102, 1, 200.00), (103, 1, 300.00), (104, 1, 100.00), (105, 1, 250.00),
    (106, 2, 500.00), (107, 2, 600.00),
    (108, 3, 100.00), (109, 3, 150.00), (110, 3, 200.00), (111, 3, 250.00), (112, 3, 300.00);

-- 3. Query VIP customers with 5+ orders
SELECT 
    customer_id,
    COUNT(order_id) AS total_orders,
    SUM(total_amount) AS total_spent,
    ROUND(AVG(total_amount), 2) AS avg_order_value
FROM orders
GROUP BY customer_id
HAVING COUNT(order_id) >= 5
ORDER BY total_spent DESC;
```

#### 👀 Expected Output:

```text
+-------------+--------------+-------------+-----------------+
| customer_id | total_orders | total_spent | avg_order_value |
+-------------+--------------+-------------+-----------------+
|           1 |            5 |     1000.00 |          200.00 |
|           3 |            5 |     1000.00 |          200.00 |
+-------------+--------------+-------------+-----------------+
```

*(Note: Customer 2 is excluded because they placed only 2 orders).*

---

## 🛠️ Reproducible Example 3: Salary Audit Excluding Interns

Calculate average department salaries while excluding low-ranking interns before averaging:

```sql
-- 1. Create employees table schema
CREATE TABLE IF NOT EXISTS employees (
    emp_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    job_title VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL
);

-- 2. Insert sample employees
INSERT INTO employees (emp_id, first_name, department_name, job_title, salary)
VALUES 
    (1, 'Rahul', 'Engineering', 'Senior Dev', 95000.00),
    (2, 'Priya', 'Engineering', 'Junior Dev', 65000.00),
    (3, 'Amit', 'Engineering', 'Intern', 20000.00),
    (4, 'Sneha', 'HR', 'HR Manager', 70000.00),
    (5, 'Kiran', 'HR', 'Intern', 18000.00),
    (6, 'Vikram', 'Marketing', 'Lead Marketer', 85000.00);

-- 3. Department salary audit query
SELECT 
    department_name,
    COUNT(emp_id) AS non_intern_count,
    ROUND(AVG(salary), 2) AS avg_non_intern_salary
FROM employees
WHERE job_title != 'Intern' -- Exclude interns BEFORE calculating average
GROUP BY department_name
HAVING AVG(salary) >= 70000.00;
```

#### 👀 Expected Output:

```text
+─────────────────+──────────────────+────────────────────────+
| department_name | non_intern_count | avg_non_intern_salary |
+─────────────────+──────────────────+────────────────────────+
| Marketing       |                1 |               85000.00 |
| Engineering     |                2 |               80000.00 |
| HR              |                1 |               70000.00 |
+─────────────────+──────────────────+────────────────────────+
```

> 💡 **Why `WHERE job_title != 'Intern'` Matters:** If Amit's intern stipend ($20,000) was included in Engineering's average, the average would drop to $60,000. Excluing interns before grouping ensures the population average reflects non-intern staff ($80,000.00$).

---

## ⚠️ MySQL `ONLY_FULL_GROUP_BY` & Common Mistakes

| Error / Pitfall | Cause | Recommended Fix |
| :--- | :--- | :--- |
| **`ERROR 1111 (HY000): Invalid use of group function`** | Writing aggregate functions inside `WHERE` (e.g. `WHERE SUM(sales) > 100`). | Move aggregate conditions to `HAVING SUM(sales) > 100`. |
| **`ERROR 1055 (42000): ONLY_FULL_GROUP_BY violation`** | Selecting a non-aggregated column in `SELECT` that is NOT listed in `GROUP BY`. | Include all non-aggregated `SELECT` columns in the `GROUP BY` clause. |
| **Using `HAVING` for Non-Aggregate Row Filtering** | Writing `HAVING status = 'COMPLETED'` instead of `WHERE status = 'COMPLETED'`. | Use `WHERE` for row filtering. `WHERE` filters rows before grouping, improving performance. |
| **Expecting `HAVING` Aliases in `WHERE`** | Referencing column aliases created in `SELECT` inside the `WHERE` clause. | `WHERE` executes before `SELECT` aliases exist. Use column names in `WHERE`. |

---

## 🌍 Real-World Usage

- **E-Commerce VIP Loyalty Programs:** Identifying top customers spending over $1,000 across 5+ completed orders (`HAVING SUM(total_amount) > 1000`).
- **Financial Audit Systems:** Identifying department branches exceeding monthly operational budgets.
- **Inventory Logistics:** Grouping product stock by warehouse location and alerting when regional inventory falls below safety thresholds.

---

## 🧪 Learning Exercises & Self-Checks

### Exercise 1: Students Table Setup & Grouping
Given the following `students` table:

```sql
CREATE TABLE IF NOT EXISTS students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50) NOT NULL,
    grade_level VARCHAR(20) NOT NULL,
    tuition_fee DECIMAL(10, 2) NOT NULL
);

INSERT INTO students (student_id, student_name, grade_level, tuition_fee)
VALUES 
    (1, 'Rahul', 'Grade 10', 6000.00),
    (2, 'Priya', 'Grade 10', 6000.00),
    (3, 'Amit', 'Grade 10', 6000.00),
    (4, 'Sneha', 'Grade 11', 7500.00),
    (5, 'Kiran', 'Grade 11', 7500.00),
    (6, 'Neha', 'Grade 12', 9000.00);
```

1. Write a query counting total students per `grade_level`.
2. Write a query displaying only grade levels that have **more than 2 students** (`HAVING COUNT(*) > 2`).
3. Write a query calculating total tuition fees per grade level for students paying `tuition_fee >= 7000.00`.

---

## 🎯 Mini Challenge

1. Create an `e_commerce_orders` table schema:
   - `order_id` (INT, Primary Key)
   - `customer_id` (INT)
   - `order_status` (VARCHAR 20 — `'DELIVERED'`, `'PENDING'`, `'CANCELLED'`)
   - `item_count` (INT)
   - `total_price` (DECIMAL 10,2)
2. Insert sample orders:
   - Order 1: Cust 1, `'DELIVERED'`, 5 items, `$300.00`
   - Order 2: Cust 1, `'DELIVERED'`, 6 items, `$250.00`
   - Order 3: Cust 2, `'DELIVERED'`, 12 items, `$600.00`
   - Order 4: Cust 2, `'CANCELLED'`, 10 items, `$500.00`
   - Order 5: Cust 3, `'DELIVERED'`, 2 items, `$100.00`
3. Write a query that:
   - Filters completed orders (`WHERE order_status = 'DELIVERED'`).
   - Groups by `customer_id`.
   - Displays `customer_id`, total items purchased (`SUM(item_count)`), and total spend (`SUM(total_price)`).
   - Filters using `HAVING` to retain only customers whose total spend exceeds **`$500.00`** AND whose total item count is **at least 10 items** (`HAVING SUM(total_price) > 500.00 AND SUM(item_count) >= 10`).

<details>
<summary>🔍 Click to view Exercise Solutions & Answer Key</summary>

### Answer Key:

#### Exercise 1 Solutions:

```sql
-- Task 1: Count students per grade level
SELECT grade_level, COUNT(*) AS student_count
FROM students
GROUP BY grade_level;

-- Task 2: Grade levels with > 2 students
SELECT grade_level, COUNT(*) AS student_count
FROM students
GROUP BY grade_level
HAVING COUNT(*) > 2;
-- Output: Grade 10 (3 students)

-- Task 3: Total tuition fees per grade level for fees >= 7000.00
SELECT grade_level, SUM(tuition_fee) AS total_tuition
FROM students
WHERE tuition_fee >= 7000.00
GROUP BY grade_level;
-- Output: Grade 11 ($15,000.00), Grade 12 ($9,000.00)
```

#### Mini Challenge Solution:

```sql
-- Step 1: Create table schema
CREATE TABLE IF NOT EXISTS e_commerce_orders (
    order_id INT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_status VARCHAR(20) NOT NULL,
    item_count INT NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL
);

-- Step 2: Insert sample orders
INSERT INTO e_commerce_orders (order_id, customer_id, order_status, item_count, total_price)
VALUES 
    (1, 1, 'DELIVERED', 5, 300.00),
    (2, 1, 'DELIVERED', 6, 250.00),
    (3, 2, 'DELIVERED', 12, 600.00),
    (4, 2, 'CANCELLED', 10, 500.00),
    (5, 3, 'DELIVERED', 2, 100.00);

-- Step 3: Execute GROUP BY + HAVING query
SELECT 
    customer_id,
    SUM(item_count) AS total_items,
    SUM(total_price) AS total_spend
FROM e_commerce_orders
WHERE order_status = 'DELIVERED'
GROUP BY customer_id
HAVING SUM(total_price) > 500.00 
   AND SUM(item_count) >= 10;
```

**Expected Output:**

```text
+-------------+-------------+-------------+
| customer_id | total_items | total_spend |
+-------------+-------------+-------------+
|           1 |          11 |      550.00 |
|           2 |          12 |      600.00 |
+-------------+-------------+-------------+
```

*(Explanation: Customer 1 has 11 delivered items spending $550.00. Customer 2 has 12 delivered items spending $600.00 [order #4 was CANCELLED so it is filtered out by WHERE]. Customer 3 is excluded because they bought only 2 items spending $100.00).*

</details>

---

## 🔗 Related Topics

- [Database & Table Basics (`CREATE TABLE`)](03-databases-and-tables.html)
- [`SELECT` – Reading & Querying Data](07-select.html)
- [Filtering Data with `WHERE`](08-where.html)
- [Aggregate Functions (`COUNT`, `SUM`, `AVG`)](12-aggregate-functions.html)
- [SQL Joins & Table Relationships](14-joins.html)

---

## 🧭 Navigation

[← Previous: Aggregate Functions](12-aggregate-functions.html) | [SQL Home](./) | [Next: SQL Joins →](14-joins.html)
