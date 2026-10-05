---
layout: default
title: "07 where"
---

# Filtering Data with `WHERE`

> 🟢 Beginner

## 📖 Definition

The **`WHERE`** clause filters rows retrieved by a query so that only records satisfying specified boolean conditions are returned.

## 🇮🇳 Hindi

Database table se specific conditions ke aadhar par data filter karne ke liye `WHERE` clause ka use hota hai. Aap `WHERE` ka use `SELECT`, `UPDATE`, aur `DELETE` queries ke saath kar sakte hain. Multiple conditions combine karne ke liye `AND`, `OR`, aur `NOT` ka use hota hai.

## 🚩 Marathi

Data filter karnyasathi `WHERE` clause vaparla jato. Phakta `true` aslenaraya conditions cha data baher yeto. Multiple conditions sathi `AND`, `OR`, aani `NOT` vaparatat.

## 📝 Logical Operators in `WHERE` Clause

- **`AND`:** Returns rows where **ALL** conditions evaluate to `TRUE`.
- **`OR`:** Returns rows where **AT LEAST ONE** condition evaluates to `TRUE`.
- **`NOT`:** Inverts a condition state (returns rows where condition is `FALSE`).

## 🧠 Operator Precedence & Parentheses `()`

In SQL, `AND` has higher precedence than `OR`. Always use parentheses `()` to explicitly define evaluation order when mixing `AND` and `OR` conditions!

```sql
-- Without Parentheses (Evaluates: department = 'HR' OR (department = 'Tech' AND salary > 80000))
SELECT * FROM employees 
WHERE department = 'HR' OR department = 'Tech' AND salary > 80000;

-- With Parentheses (Evaluates: (department = 'HR' OR department = 'Tech') AND salary > 80000)
SELECT * FROM employees 
WHERE (department = 'HR' OR department = 'Tech') AND salary > 80000;
```

## 💡 Practical Example: Filtering Employee Data

```sql
-- Employees Table Setup
CREATE TABLE staff (
    emp_id INT PRIMARY KEY,
    name VARCHAR(50),
    department VARCHAR(50),
    salary DECIMAL(10, 2),
    age INT,
    city VARCHAR(50)
);

INSERT INTO staff VALUES 
(101, 'Ananya Roy', 'Engineering', 95000.00, 28, 'Mumbai'),
(102, 'Vikram Sharma', 'Engineering', 65000.00, 24, 'Delhi'),
(103, 'Kiran Deshmukh', 'Marketing', 70000.00, 32, 'Mumbai'),
(104, 'Siddharth Verma', 'HR', 55000.00, 29, 'Bengaluru'),
(105, 'Meera Nair', 'Engineering', 105000.00, 35, 'Mumbai');

-- Query 1: Filter Engineering staff in Mumbai earning > 90,000
SELECT name, department, salary, city 
FROM staff 
WHERE department = 'Engineering' AND city = 'Mumbai' AND salary > 90000;

-- Query 2: Filter staff living in Mumbai OR Bengaluru who are under 30
SELECT name, city, age 
FROM staff 
WHERE (city = 'Mumbai' OR city = 'Bengaluru') AND age < 30;
```

## 👀 Output

```text
Query 1 Output:
+------------+-------------+-----------+--------+
| name       | department  | salary    | city   |
+------------+-------------+-----------+--------+
| Ananya Roy | Engineering |  95000.00 | Mumbai |
| Meera Nair | Engineering | 105000.00 | Mumbai |
+------------+-------------+-----------+--------+

Query 2 Output:
+-----------------+-----------+-----+
| name            | city      | age |
+-----------------+-----------+-----+
| Ananya Roy      | Mumbai    |  28 |
| Siddharth Verma | Bengaluru |  29 |
+-----------------+-----------+-----+
```

## ⚠️ Common Mistakes

- Forgetting single quotes around string literals (`WHERE city = Mumbai` fails; it must be `WHERE city = 'Mumbai'`).
- Neglecting parentheses when combining `AND` and `OR` logic, causing unintended rows to be returned.

## 🌍 Real-World Usage

Filtering e-commerce products by price range/category, showing user orders placed in the last 30 days, or listing active subscribers.

## 🧪 Try It Yourself

1. Write a query to select all staff members earning less than `70000.00`.
2. Write a query to select staff members who are NOT in the `'HR'` department.

## 🎯 Mini Challenge

Write a query to retrieve staff who are either in `'Engineering'` or `'Marketing'` AND have salary greater than `68000.00`.

## 🔗 Related Topics

- [`SELECT` – Reading Data](06-select.html)
- [Operators in SQL](08-operators.html)

## 🧭 Navigation

[← SQL Home](./) | [← Previous: SELECT – Reading Data](06-select.html) | [Next: Operators in SQL →](08-operators.html)


