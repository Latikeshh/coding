---
layout: default
title: "07 select"
---

# `SELECT` – Reading Data

> 🟢 Beginner

## 📖 Definition

The **`SELECT`** statement is a Data Query Language (DQL) command used to query and retrieve data rows from one or more database tables.

## 🇮🇳 Hindi

Database tables se data read aur retrieve karne ke liye `SELECT` query ka use hota hai. Aap saare columns (`SELECT *`) ya specific columns (`SELECT col1, col2`) choose kar sakte hain. Duplicate rows hatane ke liye `DISTINCT` aur column name change karke dikhane ke liye Column Alias (`AS`) ka use hota hai.

## 🚩 Marathi

Database table madhun data vachnyasathi aani baghnyasathi `SELECT` query cha wapar kela jato. Distinct (unique) values sathi `DISTINCT` aani navin nav dhenyasathi `AS` (Alias) vaparatat.

## 📝 Key Features & Syntax Variations

### 1. Selecting All Columns (`SELECT *`)
Retrieves every column defined in the table:
```sql
SELECT * FROM employees;
```

### 2. Selecting Specific Columns (Best Practice for Performance)
```sql
SELECT first_name, last_name, salary FROM employees;
```

### 3. Column Aliases (`AS`)
Renames output column headings in the query result table:
```sql
SELECT first_name AS Name, salary AS MonthlySalary FROM employees;
```

### 4. Unique Values (`DISTINCT`)
Filters out duplicate row values from result set:
```sql
SELECT DISTINCT department FROM employees;
```

### 5. Calculated / Derived Columns
Performs calculations directly inside the query:
```sql
SELECT 
    first_name, 
    salary, 
    (salary * 12) AS annual_salary,
    (salary * 0.10) AS bonus_amount
FROM employees;
```

## 💡 Practical Example: Advanced SELECT Query

```sql
-- Sample Employees Table
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10, 2)
);

INSERT INTO employees VALUES 
(1, 'Rahul', 'Dravid', 'Sports', 85000.00),
(2, 'Priya', 'Sharma', 'HR', 60000.00),
(3, 'Amit', 'Kumar', 'Sports', 85000.00),
(4, 'Sneha', 'Patel', 'Engineering', 95000.00),
(5, 'Kiran', 'Rao', 'HR', 60000.00);

-- Query 1: Selecting specific columns with Alias & Calculations
SELECT 
    CONCAT(first_name, ' ', last_name) AS full_name,
    department,
    salary,
    (salary * 1.10) AS salary_after_hike
FROM employees;

-- Query 2: Getting unique departments
SELECT DISTINCT department FROM employees;
```

## 👀 Output

```text
Query 1 Output:
+--------------+-------------+----------+-------------------+

| full_name    | department  | salary   | salary_after_hike |
+--------------+-------------+----------+-------------------+

| Rahul Dravid | Sports      | 85000.00 |          93500.00 |
| Priya Sharma | HR          | 60000.00 |          66000.00 |
| Amit Kumar   | Sports      | 85000.00 |          93500.00 |
| Sneha Patel  | Engineering | 95000.00 |         104500.00 |
| Kiran Rao    | HR          | 60000.00 |          66000.00 |
+--------------+-------------+----------+-------------------+

Query 2 Output (DISTINCT):
+-------------+

| department  |
+-------------+

| Sports      |
| HR          |
| Engineering |
+-------------+
```

## ⚠️ Common Mistakes

- Overusing `SELECT *` in production application code. Selecting unnecessary large text or blob columns degrades database and network bandwidth performance!
- Forgetting that `DISTINCT` applies across **all selected columns combined**, not just the first column.

## 🌍 Real-World Usage

Every web app dashboard, search results page, report generator, and data visualization analytics tool runs `SELECT` queries to display information to users.

## 🧪 Try It Yourself

1. Write a query to select `first_name` and `salary` from `employees` with an alias `Monthly_Pay`.
2. Write a query to find all unique job departments in your organization.

## 🎯 Mini Challenge

Write a `SELECT` query that calculates an employee's daily pay assuming 22 working days per month (`salary / 22`) aliased as `daily_rate`.

## 🔗 Related Topics

- [`INSERT` – Adding Data](06-insert.html)
- [Filtering Data with `WHERE`](08-where.html)

## 🧭 Navigation

[← SQL Home](./) | [← Previous: INSERT – Adding Data](06-insert.html) | [Next: Filtering Data with WHERE →](08-where.html)


