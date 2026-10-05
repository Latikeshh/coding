---
layout: default
title: "05 insert"
---

# `INSERT` – Adding Data to Tables

> 🟢 Beginner

## 📖 Definition

The **`INSERT INTO`** statement is a Data Manipulation Language (DML) command used to insert new rows (records) into an existing database table.

## 🇮🇳 Hindi

Database table mein naye records/rows add karne ke liye `INSERT INTO` command ka use hota hai. Aap ek waqt mein single row ya ek saath multiple rows insert kar sakte hain.

## 🚩 Marathi

Table madhye navin data/rows bharnyasathi `INSERT INTO` command cha wapar kela jato. Ekasathi ek kiva anek rows insert karta yetat.

## 📝 Syntax Variations

### 1. Specifying Column Names (Best Practice)
Specifying target column names explicitly ensures safety even if table structure changes later:
```sql
INSERT INTO table_name (column1, column2, column3)
VALUES (value1, value2, value3);
```

### 2. Inserting Without Column Names
Values must match the exact order and data types of all table columns:
```sql
INSERT INTO table_name
VALUES (value1, value2, value3);
```

### 3. Inserting Multiple Rows in One Statement (High Efficiency)
```sql
INSERT INTO table_name (column1, column2)
VALUES 
    (val1_a, val2_a),
    (val1_b, val2_b),
    (val1_c, val2_c);
```

## 💡 Practical Example: Inserting Records into Employees Table

```sql
-- Creating target table
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    department VARCHAR(50),
    salary DECIMAL(10, 2),
    hire_date DATE DEFAULT (CURRENT_DATE)
);

-- 1. Inserting a single record with explicit columns
INSERT INTO employees (emp_id, first_name, last_name, department, salary, hire_date)
VALUES (101, 'Vikram', 'Aditya', 'Engineering', 85000.00, '2024-01-15');

-- 2. Inserting multiple records in a single query
INSERT INTO employees (emp_id, first_name, last_name, department, salary, hire_date)
VALUES 
(102, 'Ananya', 'Roy', 'Marketing', 62000.00, '2024-03-01'),
(103, 'Kiran', 'Deshmukh', 'Engineering', 90000.00, '2023-11-10'),
(104, 'Priya', 'Sharma', 'HR', 58000.00, '2025-02-01');

-- 3. Inserting with default hire_date (omitting hire_date column)
INSERT INTO employees (emp_id, first_name, last_name, department, salary)
VALUES (105, 'Siddharth', 'Verma', 'Finance', 72000.00);

-- Querying inserted records
SELECT * FROM employees;
```

## 👀 Output

```text
+--------+------------+-----------+-------------+----------+------------+

| emp_id | first_name | last_name | department  | salary   | hire_date  |
+--------+------------+-----------+-------------+----------+------------+

|    101 | Vikram     | Aditya    | Engineering | 85000.00 | 2024-01-15 |
|    102 | Ananya     | Roy       | Marketing   | 62000.00 | 2024-03-01 |
|    103 | Kiran      | Deshmukh  | Engineering | 90000.00 | 2023-11-10 |
|    104 | Priya      | Sharma    | HR          | 58000.00 | 2025-02-01 |
|    105 | Siddharth  | Verma     | Finance     | 72000.00 | 2026-09-29 |
+--------+------------+-----------+-------------+----------+------------+
```

## ⚠️ Common Mistakes

- Mismatching data type order (e.g., passing string text into a numeric `INT` or `DECIMAL` column).
- Forgetting single quotes around String and Date literal values (`'Vikram'`, `'2024-01-15'`).
- Violating `PRIMARY KEY` or `UNIQUE` constraints by attempting to insert duplicate ID values.

## 🌍 Real-World Usage

Web application forms (like user registration, order checkout, contact forms, or blog comment submission) execute `INSERT INTO` queries behind the scenes.

## 🧪 Try It Yourself

1. Write an `INSERT` statement to add a new employee named `'Neha Patel'` in `'IT'` with salary `78000.00` and `emp_id` `106`.
2. Try inserting a row without specifying a `NOT NULL` required column and observe the constraint error.

## 🎯 Mini Challenge

Write a single multi-row `INSERT` query that adds 2 new products into a `products` table simultaneously.

## 🔗 Related Topics

- [SQL Data Types & NULL Values](04-data-types-and-null.html)
- [`SELECT` – Reading Data](06-select.html)

## 🧭 Navigation

[← SQL Home](./) | [← Previous: Data Types & NULL](04-data-types-and-null.html) | [Next: SELECT – Reading Data →](06-select.html)


