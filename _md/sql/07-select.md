---
layout: default
title: "07 select"
---

# `SELECT` – Reading & Querying Data

> 🟢 Beginner

## 📖 Definition

The **`SELECT`** statement is the primary **Data Query Language (DQL)** command in SQL. It is used to query, filter, project, and retrieve data records from one or more database tables.

`SELECT` queries do not modify or destroy table records on disk. Instead, the database engine evaluates your query instructions in memory and returns a temporary 2-dimensional result set (tabular view) consisting of rows and columns.

---

## 🇮🇳 Hindi (Roman Script)

Database tables se data read aur retrieve karne ke liye **`SELECT`** query ka use hota hai. Aap saare columns (`SELECT *`) ya specific columns (`SELECT col1, col2`) choose kar sakte hain. Result table ke headers ko rename karne ke liye **Column Aliases (`AS`)**, duplicate rows ko hatane ke liye **`DISTINCT`**, aur do text fields ko jodne ke liye **`CONCAT()`** function ka use kiya jata hai. Math operations (jaise `salary * 12`) se dynamic result columns bante hain lekin table ka permanent data change nahi hota.

---

## 🚩 Marathi (Roman Script)

Database table madhun data vachnyasathi aani pahanyasathi **`SELECT`** query cha wapar kela jato. Pratyek column pahanyasathi `SELECT *` kiva vishisht columns sathi `SELECT col1, col2` vaparatat. Duplicate rows kadhnyasathi **`DISTINCT`**, output column la navin nav dhenyasathi **Column Alias (`AS`)**, aani text एकत्र karnyasathi **`CONCAT()`** function cha wapar hoto. Calculated columns (jaise `salary * 12`) mule temporary result milto, table madhil mool data badalat nahi.

---

## 🤔 Why Do We Use It?

`SELECT` is the most frequently executed statement in database applications. It allows developers to:

- Fetch specific data fields required by web applications, mobile apps, and user interfaces.
- Perform dynamic calculations, currency conversions, and percentage markups on the fly.
- Combine text fields (e.g., merging `first_name` and `last_name` into `full_name`).
- Filter out duplicate records using `DISTINCT`.
- Prepare structured datasets for reporting dashboards and business intelligence analytics.

---

## 🧠 Simple Analogy: The Library Catalog Search

Think of a database table as a **Library Book Inventory**:

- **`SELECT * FROM books;`**: Walking into the library and pulling every book off the shelf to inspect all details (Title, Author, ISBN, Price, Page Count, Genre).
- **`SELECT title, author FROM books;`**: Looking at the library catalog card that displays *only* the Book Title and Author Name.
- **Column Alias (`title AS Book_Title`):** Placing a temporary sticky label on the catalog card heading for display.
- **`SELECT DISTINCT genre FROM books;`**: Browsing the catalog to get a unique list of genres available in the library without seeing "Fiction" repeated 500 times.

---

## 📝 `SELECT` Syntax Variations & Key Features

SQL provides several ways to customize how data columns are retrieved and presented:

### 1. Selecting All Columns (`SELECT *`)
The asterisk `*` wildcard instructs the engine to return every column defined in the table schema:

```sql
SELECT * FROM employees;
```

#### 💡 `SELECT *` vs Explicit Column Projection:
- **`SELECT *` Use Case:** Great for quick ad-hoc exploration in phpMyAdmin, MySQL Workbench, or CLI tools.
- ⚠️ **Production Warning:** Avoid using `SELECT *` in backend application code! Explicitly listing needed columns (`SELECT first_name, salary`) reduces network bandwidth, decreases memory consumption, and prevents application code from breaking if new columns are added to the table schema later.

---

### 2. Selecting Specific Columns
Explicitly project only the columns required for your application:

```sql
SELECT first_name, last_name, salary
FROM employees;
```

---

### 3. Column Aliases (`AS`)
Aliases allow you to temporarily rename column headings in the query result display:

```sql
SELECT 
    first_name AS Name,
    salary AS MonthlySalary
FROM employees;
```

> 📌 **Important Alias Rules:**
> 1. Column aliases only rename the **output result set header**. They do **not** permanently rename the underlying table column on disk!
> 2. The `AS` keyword is optional in MySQL (`first_name Name`), but explicitly writing `AS` is recommended for code clarity.
> 3. If an alias contains spaces, enclose it in quotes: `salary AS 'Monthly Salary'`.

---

### 4. Eliminating Duplicates (`DISTINCT`)
The `DISTINCT` keyword filters out duplicate rows, returning only unique values:

```sql
SELECT DISTINCT department
FROM employees;
```

#### 🚨 Crucial Rule About `DISTINCT`:
`DISTINCT` applies to the **combination of ALL selected columns**, not just the first column!

```sql
-- Evaluates unique COMBINATIONS of (department + salary)
SELECT DISTINCT department, salary
FROM employees;
```

*(Note: Unless an `ORDER BY` clause is used, the relational database engine does not guarantee any specific row order in the output set).*

---

### 5. Calculated & Derived Columns
You can perform mathematical operations (`+`, `-`, `*`, `/`) directly inside a `SELECT` query:

```sql
SELECT 
    first_name,
    salary,
    salary * 12 AS annual_salary,
    salary * 0.10 AS bonus_amount
FROM employees;
```

> ℹ️ **Memory Projection vs Table Storage:** Arithmetic calculations generate temporary derived columns in memory for display purposes. They do **not** alter the actual `salary` records stored in the database table on disk! *(Also note that any arithmetic operation involving `NULL` yields `NULL`)*.

---

### 6. String Concatenation (`CONCAT()`)
MySQL provides the **`CONCAT(string1, string2, ...)`** function to merge multiple text fields or literal strings into a single column:

```sql
SELECT 
    CONCAT(first_name, ' ', last_name) AS full_name,
    department
FROM employees;
```

---

### 7. Selecting Literal Values & Expressions
You can execute `SELECT` queries with static literal expressions without referencing any database table:

```sql
SELECT 
    'Hello, SQL!' AS message,
    100 * 5 AS calculation_result;
```

#### 👀 Expected Output:

```text
+-------------+--------------------+
| message     | calculation_result |
+-------------+--------------------+
| Hello, SQL! |                500 |
+-------------+--------------------+
```

---

## 🛠️ Complete Practical Workflow & Employee Example

Let's set up an `employees` table and run queries demonstrating explicit column selection, string concatenation, arithmetic calculations, and `DISTINCT`.

```sql
-- 1. Create table schema
CREATE TABLE IF NOT EXISTS employees (
    emp_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    department VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL
);

-- 2. Insert sample records using explicit column syntax
INSERT INTO employees (emp_id, first_name, last_name, department, salary)
VALUES 
    (1, 'Rahul', 'Dravid', 'Sports', 85000.00),
    (2, 'Priya', 'Sharma', 'HR', 60000.00),
    (3, 'Amit', 'Kumar', 'Sports', 85000.00),
    (4, 'Sneha', 'Patel', 'Engineering', 95000.00),
    (5, 'Kiran', 'Rao', 'HR', 60000.00);
```

---

### Query 1: Full Name Concatenation, Salary & 10% Hike Calculation

```sql
SELECT 
    CONCAT(first_name, ' ', last_name) AS full_name,
    department,
    salary,
    salary * 1.10 AS salary_after_hike
FROM employees;
```

#### 👀 Expected Output:

```text
+--------------+-------------+----------+-------------------+
| full_name    | department  | salary   | salary_after_hike |
+--------------+-------------+----------+-------------------+
| Rahul Dravid | Sports      | 85000.00 |          93500.00 |
| Priya Sharma | HR          | 60000.00 |          66000.00 |
| Amit Kumar   | Sports      | 85000.00 |          93500.00 |
| Sneha Patel  | Engineering | 95000.00 |         104500.00 |
| Kiran Rao    | HR          | 60000.00 |          66000.00 |
+--------------+-------------+----------+-------------------+
```

---

### Query 2: Retrieving Unique Departments (`DISTINCT`)

```sql
SELECT DISTINCT department 
FROM employees;
```

#### 👀 Expected Output:

```text
+-------------+
| department  |
+-------------+
| Sports      |
| HR          |
| Engineering |
+-------------+
```

---

### Query 3: Multi-Column `DISTINCT` (Unique Department & Salary Combinations)

```sql
SELECT DISTINCT department, salary 
FROM employees;
```

#### 👀 Expected Output:

```text
+-------------+----------+
| department  | salary   |
+-------------+----------+
| Sports      | 85000.00 |
| HR          | 60000.00 |
| Engineering | 95000.00 |
+-------------+----------+
```

*(Note: Although `Rahul` and `Amit` are separate employees, both work in `Sports` for `85000.00`, so `DISTINCT department, salary` returns that unique pair once).*

---

## 🛠️ Common Mistakes & Troubleshooting

| Error Message / Pitfall | Cause | Recommended Fix |
| :--- | :--- | :--- |
| **`ERROR 1054 (42S22): Unknown column 'firstname'`** | Misspelling column names (`firstname` instead of `first_name`). | Verify exact column names using `DESCRIBE employees;`. |
| **`ERROR 1064 (42000): Syntax Error`** | Forgetting commas between selected columns (`SELECT first_name last_name`). | Ensure every selected column name except the last one is followed by a comma `,`. |
| **Expecting `AS` Alias to Rename Table Column** | Assuming `SELECT salary AS pay` permanently renames the table column on disk. | Understand that aliases only rename output headings for that query result display. |
| **Assuming Default Row Order** | Expecting `SELECT` to always return rows in insertion or primary key order without `ORDER BY`. | Use explicit `ORDER BY column_name` whenever specific row sequence is required. |
| **Expecting Calculations to Update Table Data** | Expecting `SELECT salary * 12` to change stored values in the database. | Use `UPDATE` statements to permanently alter data stored on disk. |
| **Arithmetic Operations with `NULL`** | Performing calculations on nullable columns (`salary + bonus`) where `bonus` is `NULL`. | Use `COALESCE(bonus, 0)` to replace `NULL` values with zero before arithmetic operations. |

---

## 🌍 Real-World Usage

- **E-Commerce Product Feeds:** Running `SELECT product_name, price, price * 0.80 AS discounted_price FROM products` to compute sale prices dynamically on web pages.
- **User Profile Headers:** Using `SELECT CONCAT(first_name, ' ', last_name) AS display_name FROM users` to display user profile names on mobile apps.
- **Analytics Reports:** Running `SELECT DISTINCT country FROM customers` to identify global market reach.

---

## 🧪 Learning Exercises & Self-Checks

### Exercise 1: Column Aliases
Write a `SELECT` statement to retrieve `first_name` and `salary` from the `employees` table, displaying the `salary` column under the alias `Monthly_Pay`.

### Exercise 2: Unique Values
Write an SQL query to retrieve a list of all unique job departments represented in the `employees` table.

### Exercise 3: Annual Income Calculation
Write a query displaying `first_name`, `salary`, and an estimated annual income column (`salary * 12`) aliased as `Annual_Income`.

---

## 🎯 Mini Challenge

Write a `SELECT` query that calculates an employee's estimated daily pay rate assuming **22 working days per month** (`salary / 22`).

Project two columns in your query result:
1. `full_name` (using `CONCAT(first_name, ' ', last_name)`)
2. `daily_rate` (calculated as `salary / 22`)

<details>
<summary>🔍 Click to view Exercise Solutions & Answer Key</summary>

### Answer Key:

#### Exercise 1 Solution:
```sql
SELECT first_name, salary AS Monthly_Pay 
FROM employees;
```

#### Exercise 2 Solution:
```sql
SELECT DISTINCT department 
FROM employees;
```

#### Exercise 3 Solution:
```sql
SELECT first_name, salary, salary * 12 AS Annual_Income 
FROM employees;
```

#### Mini Challenge Solution:

```sql
SELECT 
    CONCAT(first_name, ' ', last_name) AS full_name,
    salary / 22 AS daily_rate
FROM employees;
```

**Expected Output:**

```text
+--------------+------------+
| full_name    | daily_rate |
+--------------+------------+
| Rahul Dravid | 3863.6363  |
| Priya Sharma | 2727.2727  |
| Amit Kumar   | 3863.6363  |
| Sneha Patel  | 4318.1818  |
| Kiran Rao    | 2727.2727  |
+--------------+------------+
```

*(Note: `salary / 22` provides a simplified estimate of daily earnings for display purposes).*

</details>

---

## 🔗 Related Topics

- [Database & Table Basics (`CREATE TABLE`)](03-databases-and-tables.html)
- [`INSERT` – Adding Data to Tables](06-insert.html)
- [Filtering Data with `WHERE`](08-where.html)
- [Sorting & Limiting Results (`ORDER BY`, `LIMIT`)](10-order-by-and-limit.html)

---

## 🧭 Navigation

[← Previous: INSERT Data](06-insert.html) | [SQL Home](./) | [Next: Filtering Data with WHERE →](08-where.html)
