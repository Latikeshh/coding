---
layout: default
title: "06 insert"
---

# `INSERT` – Adding Data to Tables

> 🟢 Beginner

## 📖 Definition

The **`INSERT INTO`** statement is a **Data Manipulation Language (DML)** command used to add new data rows (records) into an existing database table.

When you execute an `INSERT` command, the database engine verifies that the new record satisfies all column data types, string length rules, `NOT NULL` constraints, `UNIQUE` restrictions, `CHECK` conditions, and `FOREIGN KEY` relationships before writing the row to disk.

---

## 🇮🇳 Hindi (Roman Script)

Database table mein naye records/rows add karne ke liye **`INSERT INTO`** command ka use hota hai. Recommended tareeka yeh hai ki aap column names ko explicitly mention karein (`INSERT INTO table_name (col1, col2)...`). Single row insert karne ke alawa, aap ek hi query mein multiple rows bhi insert kar sakte hain. Text aur date values ko hamesha single quotes (`'text'`) mein likhna zaroori hai.

---

## 🚩 Marathi (Roman Script)

Table madhye navin data/rows bharnyasathi **`INSERT INTO`** command cha wapar kela jato. Columns chi naave spashtha sangun data bharnaychi paddhat sarvat changli ahe. Ekasathi ek kiva anek rows (`VALUES (...), (...)`) insert karta येतात. Text aani date valuse sathi single quotes (`'text'`) vaparnya garjeche ahe.

---

## 🤔 Why Do We Use It?

Creating database tables with `CREATE TABLE` only constructs the empty schema framework. The `INSERT INTO` statement is used to:

- Populate database tables with real-world application records (user registrations, e-commerce orders, inventory logs).
- Add new single records or perform bulk multi-row data imports efficiently.
- Trigger automatic column default values (`DEFAULT`) and auto-incrementing primary key IDs (`AUTO_INCREMENT`).

---

## 🧠 Simple Analogy: Index Cards in a File Drawer

Think of an `INSERT INTO` statement as filling out a new **Registration Card** and sliding it into a filing drawer:

- **The File Drawer:** The existing database table (`employees`).
- **The Printed Field Headers:** The column names (`emp_id`, `first_name`, `salary`).
- **Filling out the Card:** The `INSERT INTO` query writing values into each field.
- **Rules on the Card:** Constraints ensuring you don't leave required fields blank (`NOT NULL`) or write duplicate Roll Numbers (`PRIMARY KEY`).

---

## 📝 Syntax Variations Explained

SQL supports three primary variations of the `INSERT INTO` statement:

### Variation 1: Explicit Column Syntax (Recommended Best Practice)
Specifying target column names explicitly is the safest and most maintainable approach:

```sql
INSERT INTO employees
    (emp_id, first_name, last_name, department, salary, hire_date)
VALUES
    (101, 'Vikram', 'Aditya', 'Engineering', 85000.00, '2024-01-15');
```

#### 💡 Why Explicit Column Syntax is Best Practice:
1. **Schema Immunity:** If a developer adds a new column to the table later, existing code won't break because explicit column names dictate exact value alignment.
2. **Column Omission:** Allows you to omit optional columns (columns that allow `NULL` or have a `DEFAULT` value).
3. **Clarity:** Makes queries self-documenting by showing exactly which value corresponds to which column.

---

### Variation 2: Implicit Column Syntax (Without Column Names)
Omitting column names requires supplying values for **every** column in the exact ordinal sequence defined in the table schema:

```sql
INSERT INTO employees
VALUES (105, 'Siddharth', 'Verma', 'Finance', 72000.00, '2024-05-10');
```

> ⚠️ **Warning on Implicit Syntax:** This approach is fragile. If the table schema is altered (e.g., adding a new column or reordering existing columns), this query will fail or insert data into wrong columns! Always prefer explicit column syntax in production code.

---

### Variation 3: Inserting Multiple Rows in One Statement (High Performance)
MySQL, MariaDB, PostgreSQL, and SQLite allow inserting multiple records using a single comma-separated `VALUES` list:

```sql
INSERT INTO employees
    (emp_id, first_name, last_name, department, salary, hire_date)
VALUES
    (102, 'Ananya', 'Roy', 'Marketing', 62000.00, '2024-03-01'),
    (103, 'Kiran', 'Deshmukh', 'Engineering', 90000.00, '2023-11-10'),
    (104, 'Priya', 'Sharma', 'HR', 58000.00, '2025-02-01');
```

> ⚡ **Performance Tip:** Inserting 1,000 rows in a single multi-row `INSERT` statement executes up to **20x faster** than executing 1,000 individual `INSERT` statements due to reduced network latency and transaction commit overhead!

---

## 🛠️ Complete Practical Workflow & Employee Example

Let's execute a complete, runnable MySQL-compatible workflow creating an `employees` table and demonstrating single inserts, multi-row inserts, column omissions, and `NULL` inserts.

```sql
-- 1. Create target employees table
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    department VARCHAR(50), -- Nullable field
    salary DECIMAL(10, 2),
    hire_date DATE DEFAULT (CURRENT_DATE) -- Defaults to current date if omitted
);

-- 2. Insert single record with explicit columns
INSERT INTO employees (emp_id, first_name, last_name, department, salary, hire_date)
VALUES (101, 'Vikram', 'Aditya', 'Engineering', 85000.00, '2024-01-15');

-- 3. Insert multiple records in a single query
INSERT INTO employees (emp_id, first_name, last_name, department, salary, hire_date)
VALUES 
    (102, 'Ananya', 'Roy', 'Marketing', 62000.00, '2024-03-01'),
    (103, 'Kiran', 'Deshmukh', 'Engineering', 90000.00, '2023-11-10'),
    (104, 'Priya', 'Sharma', 'HR', 58000.00, '2025-02-01');

-- 4. Insert record with omitted hire_date (Triggers DEFAULT CURRENT_DATE)
INSERT INTO employees (emp_id, first_name, last_name, department, salary)
VALUES (105, 'Siddharth', 'Verma', 'Finance', 72000.00);

-- 5. Insert record with explicit NULL for nullable department
INSERT INTO employees (emp_id, first_name, last_name, department, salary, hire_date)
VALUES (106, 'Neha', 'Patel', NULL, 78000.00, '2024-06-01');

-- 6. Retrieve all rows to verify inserted data
SELECT * FROM employees;
```

#### 👀 Expected `SELECT * FROM employees;` Output:

```text
+--------+------------+-----------+-------------+----------+------------+
| emp_id | first_name | last_name | department  | salary   | hire_date  |
+--------+------------+-----------+-------------+----------+------------+
|    101 | Vikram     | Aditya    | Engineering | 85000.00 | 2024-01-15 |
|    102 | Ananya     | Roy       | Marketing   | 62000.00 | 2024-03-01 |
|    103 | Kiran      | Deshmukh  | Engineering | 90000.00 | 2023-11-10 |
|    104 | Priya      | Sharma    | HR          | 58000.00 | 2025-02-01 |
|    105 | Siddharth  | Verma     | Finance     | 72000.00 | 2026-10-10 |
|    106 | Neha       | Patel     | NULL        | 78000.00 | 2024-06-01 |
+--------+------------+-----------+-------------+----------+------------+
```

> ℹ️ **Understanding Default Dates:** For `emp_id 105`, `hire_date` was omitted from the `INSERT` column list, so the database engine automatically evaluated `DEFAULT (CURRENT_DATE)` upon query execution. Output `2026-10-10` represents the execution date when this tutorial was run.

---

## ⚙️ How SQL Handles Defaults, NULLs, and Required Columns

Understanding what happens when columns are omitted or assigned `NULL`:

1. **Omitting a Column with a `DEFAULT` Value:**
   - If you omit `hire_date` from the column list, the engine automatically populates it with the default value (`CURRENT_DATE`).
2. **Explicitly Passing `NULL` to a Column with a `DEFAULT` Value:**
   - If you execute `INSERT INTO employees (..., hire_date) VALUES (..., NULL);`, the engine inserts **`NULL`**, **not** the default date! Default constraints only trigger when the column is completely omitted from the column list.
3. **Omitting a Required `NOT NULL` Column Without a Default:**
   - If you attempt to omit `last_name` (defined as `VARCHAR(50) NOT NULL`), the statement is rejected:
     `ERROR 1364 (HY000): Field 'last_name' doesn't have a default value`.

---

## 🚀 Advanced Variation: `INSERT INTO ... SELECT ...`

You can copy rows from one table directly into another table using a `SELECT` query:

```sql
-- Create an archive table for high earners
CREATE TABLE senior_staff (
    staff_id INT PRIMARY KEY,
    full_name VARCHAR(100),
    department VARCHAR(50),
    salary DECIMAL(10, 2)
);

-- Copy employees earning >= 80,000 into senior_staff
INSERT INTO senior_staff (staff_id, full_name, department, salary)
SELECT emp_id, CONCAT(first_name, ' ', last_name), department, salary
FROM employees
WHERE salary >= 80000.00;
```

---

## 🛠️ Common Mistakes & Troubleshooting

| Error Message / Pitfall | Cause | Recommended Fix |
| :--- | :--- | :--- |
| **`ERROR 1136 (21S01): Column count doesn't match value count`** | Number of values provided does not match the number of specified columns. | Ensure every column in `(col1, col2)` has a matching value in `VALUES (val1, val2)`. |
| **`ERROR 1062 (23000): Duplicate entry for key 'PRIMARY'`** | Attempting to insert an `emp_id` Primary Key value that already exists. | Provide a unique integer for `emp_id` or use `AUTO_INCREMENT`. |
| **`ERROR 1054 (42S22): Unknown column 'Vikram' in 'field list'`** | Forgetting single quotes around text or date strings (`Vikram` instead of `'Vikram'`). | Always enclose text strings and date literals in single quotes (`'Vikram'`, `'2024-01-15'`). |
| **`ERROR 1364 (HY000): Field 'last_name' doesn't have a default value`** | Omitting a required `NOT NULL` column that has no `DEFAULT` constraint defined. | Supply a valid string value for all required `NOT NULL` columns. |
| **`ERROR 1452 (23000): Cannot add or update a child row`** | Inserting a Foreign Key ID that does not exist in the parent table. | Ensure the referenced parent record exists before inserting into the child table. |
| **Value & Column Order Mismatch** | Swapping values (e.g. passing salary into date column or name into ID column). | Use explicit column lists and match value types carefully to column positions. |

---

## 🌍 Real-World Usage

Every interactive web application relies on `INSERT INTO` queries:

- **E-Commerce Checkouts:** Inserting a new order record into `orders` and multiple line items into `order_items`.
- **User Authentication:** Inserting a new user profile when someone signs up on a website.
- **Financial Logs:** Inserting audit log events for every bank transaction or transfer.

---

## 🧪 Learning Exercises & Self-Checks

### Exercise 1: Inserting a Single Employee
Write an `INSERT INTO` statement to add a new employee named `'Rahul Verma'` working in the `'Marketing'` department with salary `65000.00` and `emp_id = 107`. Ensure all required `NOT NULL` columns (`emp_id`, `first_name`, `last_name`) are supplied.

### Exercise 2: Understanding Constraint Errors
Explain why the following query fails and identify the exact error code triggered:

```sql
INSERT INTO employees (emp_id, first_name, department, salary)
VALUES (108, 'Aarav', 'Finance', 70000.00);
```

### Exercise 3: Multi-Row Insert Practice
Write a single SQL statement that inserts two new departments (`30, 'Finance'` and `40, 'Human Resources'`) into a `departments (dept_id, dept_name)` table.

---

## 🎯 Mini Challenge

1. Write a statement to create a `products` table:
   - `product_id` (INT, Primary Key)
   - `product_name` (VARCHAR 100, NOT NULL)
   - `price` (DECIMAL 10,2, NOT NULL)
2. Write a single multi-row `INSERT` statement to add 2 products:
   - Product 1: ID `1`, Name `'Wireless Mouse'`, Price `1299.50`
   - Product 2: ID `2`, Name `'Mechanical Keyboard'`, Price `3499.00`

<details>
<summary>🔍 Click to view Exercise Solutions & Answer Key</summary>

### Answer Key:

#### Exercise 1 Solution:
```sql
INSERT INTO employees (emp_id, first_name, last_name, department, salary)
VALUES (107, 'Rahul', 'Verma', 'Marketing', 65000.00);
```

#### Exercise 2 Solution:
- **Reason:** The query omits `last_name`, which is defined as `VARCHAR(50) NOT NULL` with no `DEFAULT` constraint.
- **Error:** `ERROR 1364 (HY000): Field 'last_name' doesn't have a default value`.

#### Exercise 3 Solution:
```sql
INSERT INTO departments (dept_id, dept_name)
VALUES 
    (30, 'Finance'),
    (40, 'Human Resources');
```

#### Mini Challenge Solution:

```sql
-- Step 1: Create products table
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Step 2: Multi-row insert
INSERT INTO products (product_id, product_name, price)
VALUES 
    (1, 'Wireless Mouse', 1299.50),
    (2, 'Mechanical Keyboard', 3499.00);

-- Step 3: Verify results
SELECT * FROM products;
```

**Expected Output:**

```text
+------------+---------------------+---------+
| product_id | product_name        | price   |
+------------+---------------------+---------+
|          1 | Wireless Mouse      | 1299.50 |
|          2 | Mechanical Keyboard | 3499.00 |
+------------+---------------------+---------+
```

</details>

---

## 🔗 Related Topics

- [Database & Table Basics (`CREATE TABLE`)](03-databases-and-tables.html)
- [SQL Data Types & NULL Values](04-data-types-and-null.html)
- [Database Keys (Primary, Foreign & Candidate Keys)](05-keys.html)
- [`SELECT` – Reading & Querying Data](07-select.html)

---

## 🧭 Navigation

[← Previous: Database Keys](05-keys.html) | [SQL Home](./) | [Next: SELECT – Querying Data →](07-select.html)
