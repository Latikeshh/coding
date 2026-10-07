---
layout: default
title: "11 update and delete"
---

# `UPDATE` & `DELETE` – Modifying Data

> 🟢 Beginner

## 📖 Definition

- **`UPDATE`:** A Data Manipulation Language (DML) command that modifies existing column values in database table rows.
- **`DELETE`:** A DML command that removes existing rows from a table based on a specified condition.

## 🇮🇳 Hindi

Existing data ko modify karne ke liye `UPDATE` aur delete karne ke liye `DELETE FROM` ka use hota hai. **DANGER WARNING:** Update ya Delete query likhte waqt `WHERE` clause lagana kabhi na bhoolein! Agar bina `WHERE` clause ke query chalayi toh poore table ka data change ya delete ho jayega!

## 🚩 Marathi

Data badalnyasathi `UPDATE` aani delete karnyasathi `DELETE FROM` vaparatat. `WHERE` condition na lihilya-s akha table badlel kiva delete hoil, mhanun kaalji ghyavi.

## 📝 Syntax & Safety Rules

### 1. Modifying Data (`UPDATE`)
```sql
UPDATE table_name 
SET column1 = value1, column2 = value2 
WHERE condition;
```

### 2. Removing Data (`DELETE`)
```sql
DELETE FROM table_name 
WHERE condition;
```

> ⚠️ **CRITICAL SAFETY RULE:** Always test your `WHERE` condition with a `SELECT *` query FIRST before converting it into an `UPDATE` or `DELETE` statement!

## 💡 Practical Example: Managing Employee Salaries & Accounts

```sql
-- Employees Table Setup
CREATE TABLE employee_accounts (
    emp_id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10, 2),
    status VARCHAR(20) DEFAULT 'Active'
);

INSERT INTO employee_accounts VALUES 
(101, 'Ananya Roy', 'Engineering', 80000.00, 'Active'),
(102, 'Kiran Deshmukh', 'Marketing', 60000.00, 'Active'),
(103, 'Siddharth Verma', 'HR', 55000.00, 'On Leave'),
(104, 'Priya Sharma', 'Engineering', 75000.00, 'Resigned');

-- 1. UPDATE: Give 10% salary increment to Engineering department
UPDATE employee_accounts 
SET salary = salary * 1.10 
WHERE department = 'Engineering';

-- 2. UPDATE: Change multiple columns for Siddharth Verma
UPDATE employee_accounts 
SET status = 'Active', salary = 58000.00 
WHERE emp_id = 103;

-- 3. DELETE: Remove resigned employees from table
DELETE FROM employee_accounts 
WHERE status = 'Resigned';

-- View final updated table
SELECT * FROM employee_accounts;
```

## 👀 Output

```text
Updated Table Result:
+--------+-----------------+-------------+----------+--------+

| emp_id | name            | department  | salary   | status |
+--------+-----------------+-------------+----------+--------+

|    101 | Ananya Roy      | Engineering | 88000.00 | Active |
|    102 | Kiran Deshmukh  | Marketing   | 60000.00 | Active |
|    103 | Siddharth Verma | HR          | 58000.00 | Active |
+--------+-----------------+-------------+----------+--------+
```

## ⚠️ `DELETE` vs `TRUNCATE` Comparison

| Feature | `DELETE FROM table` | `TRUNCATE TABLE` |
|---|---|---|
| Category | DML | Commonly classified as DDL; classification varies |
| Condition Filter | Allows `WHERE` filter | Removes ALL rows (No `WHERE` allowed) |
| Performance | Depends on table size, indexes, triggers, and engine | Often optimized for bulk removal, but actual performance varies |
| Transaction Rollback | Depends on database and transaction context | Depends on database and transaction context |

`TRUNCATE TABLE` removes every row but keeps the table definition. Its support, locking, trigger behavior, identity-counter handling, and rollback semantics differ among database systems. Confirm the behavior for your engine before using it in production.

## ⚠️ Common Mistakes

- Running `UPDATE employee_accounts SET salary = 90000;` without `WHERE` (overwrites every employee's salary to 90,000!).
- Running `DELETE FROM table_name;` without `WHERE` (wipes out all table records!).

## 🌍 Real-World Usage

Updating user passwords, updating e-commerce order statuses (`'Pending'` -> `'Shipped'`), incrementing user account balances, and purging expired session data.

## 🧪 Try It Yourself

1. Write an `UPDATE` statement to change Kiran Deshmukh's department to `'Sales'`.
2. Write a `DELETE` statement to remove any employee whose salary is less than `50000.00`.

## 🎯 Mini Challenge

Write a query that updates all employees in the `'HR'` department by setting their status to `'Reviewed'` and adding a flat bonus of `2000.00` to their salary.

## 🔗 Related Topics

- [Filtering Data with `WHERE`](08-where.html)
- [Sorting & Limiting Results](10-order-by-and-limit.html)

## 🧭 Navigation

[← SQL Home](./) | [← Previous: Sorting & Limiting Results](10-order-by-and-limit.html)


