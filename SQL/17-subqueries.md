---
layout: default
title: "17 subqueries"
---

# Subqueries & Nested Queries

> 🟡 Intermediate

---

## 📖 Definition

A **Subquery** (also called an **Inner Query** or **Nested Query**) is a query embedded within another SQL statement (the **Outer Query**). Subqueries can be used in `SELECT`, `FROM`, `WHERE`, `HAVING`, and `JOIN` clauses. They evaluate first (or per-row in correlated subqueries) to supply data required by the outer statement.

---

## 🇮🇳 Hindi Explanation

Subquery ek query ke andar likhi gayi doosri SQL query hoti hai. Pehle ander waali query (Subquery) run hoti hai, uska output nikalta hai, aur fir bahar waali query (Outer Query) us output ko filtering ya calculation ke liye use karti hai. Jaise: *"Un sabhi employees ke naam dikhao jin ki salary average salary se zyada hai."* Pehle subquery average salary nikalegi, fir outer query wo employees chunegi.

---

## 🚩 Marathi Explanation

Subquery mhanje eka main query chya aat lihileli dusri SQL query. Pahile aatli query execute hote aani ticha result main (outer) query madhye vaparla jato. Udaharanarth: *"Sarasari (average) pagarapeksha jast pagar aslelya sarva karmcharyanchi naave dakhva."* Pahile subquery average salary kadhel, mag outer query karmchari nivadel.

---

## 🧩 Types of Subqueries

```text
                           SUBQUERIES

                                |
        +-----------------------+-----------------------+

        |                                               |
  Non-Correlated Subqueries                      Correlated Subqueries
  (Executes once independently)                 (Executes once PER outer row)

        |                                               |
  +-----+-----+-----+                             +-----+-----+

  |           |     |                             |           |
Scalar    Multi-Row Multi-Col                   EXISTS    NOT EXISTS
(1x1)     (1xN)     (NxM)
```

---

## 1. 🎯 Scalar Subqueries (Returns Single Value: 1 Row, 1 Column)

A **Scalar Subquery** returns exactly one single cell value (1 row, 1 column). It can be used anywhere a literal constant or column expression is expected (e.g., in `SELECT` lists or comparison operators like `=`, `>`, `<`).

### Problem: Find all employees who earn more than the overall average company salary.

```sql
SELECT emp_id, name, salary
FROM employees
WHERE salary > (
    SELECT AVG(salary) 
    FROM employees -- Returns single scalar value: e.g. 75000.00
)
ORDER BY salary DESC;
```

---

## 2. 📋 Multi-Row Subqueries (Returns 1 Column, Multiple Rows)

A **Multi-Row Subquery** returns a list of values (1 column, N rows). It is used with set operators such as `IN`, `NOT IN`, `ANY`, `ALL`, or `SOME`.

### A. Using `IN`
Find all customers who have placed at least one order:
```sql
SELECT customer_id, name, email
FROM customers
WHERE customer_id IN (
    SELECT DISTINCT customer_id 
    FROM orders
);
```

### B. Using `ALL`
Find products whose price is greater than **ALL** products in the 'Accessories' category:
```sql
SELECT product_id, name, price
FROM products
WHERE price > ALL (
    SELECT price 
    FROM products 
    WHERE category = 'Accessories'
);
```

---

## 3. 🔄 Correlated Subqueries (Evaluated Once Per Outer Row)

A **Correlated Subquery** depends on values from the outer query row currently being processed. The inner query executes repeatedly—once for every row evaluated by the outer query!

### Problem: Find employees who earn more than the average salary of THEIR OWN department.

```sql
SELECT e.emp_id, e.name, e.dept_id, e.salary
FROM employees AS e
WHERE e.salary > (
    SELECT AVG(d.salary)
    FROM employees AS d
    WHERE d.dept_id = e.dept_id -- Reference to outer table 'e'!
);
```

---

## 4. ⚡ `EXISTS` & `NOT EXISTS` Operators

`EXISTS` tests for the **presence of matching rows** in a subquery. It returns `TRUE` as soon as the inner query finds at least 1 matching row (short-circuit evaluation), making it extremely fast for existence checks.

### A. Using `EXISTS`
Find departments that have active employees:
```sql
SELECT d.dept_id, d.dept_name
FROM departments AS d
WHERE EXISTS (
    SELECT 1 
    FROM employees AS e
    WHERE e.dept_id = d.dept_id
);
```

### B. Using `NOT EXISTS` (Anti-Join Pattern)
Find customers who have **NEVER** placed an order:
```sql
SELECT c.customer_id, c.name
FROM customers AS c
WHERE NOT EXISTS (
    SELECT 1 
    FROM orders AS o
    WHERE o.customer_id = c.customer_id
);
```

---

## 5. 📦 Subqueries in `FROM` Clause (Derived Tables)

A subquery in a `FROM` clause creates a temporary, in-memory table called a **Derived Table**. In SQL standards, derived tables **must always have an explicit alias**!

```sql
SELECT 
    dept_summary.dept_id,
    dept_summary.total_dept_payroll
FROM (
    SELECT dept_id, SUM(salary) AS total_dept_payroll
    FROM employees
    GROUP BY dept_id
) AS dept_summary
WHERE dept_summary.total_dept_payroll > 200000;
```

---

## 📝 Complete Runnable Setup & Example

```sql
-- Setup Tables
CREATE TABLE depts (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50)
);

CREATE TABLE emps (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    dept_id INT,
    salary DECIMAL(10,2)
);

INSERT INTO depts VALUES (1, 'Tech'), (2, 'Sales'), (3, 'HR');
INSERT INTO emps VALUES 
(101, 'Rahul', 1, 90000.00),
(102, 'Priya', 1, 70000.00),
(103, 'Amit', 2, 60000.00),
(104, 'Neha', 2, 80000.00);

-- Complex Query: Find employees earning above their department average
SELECT 
    e.emp_name,
    e.salary,
    d.dept_name
FROM emps AS e
JOIN depts AS d ON e.dept_id = d.dept_id
WHERE e.salary > (
    SELECT AVG(salary) 
    FROM emps 
    WHERE dept_id = e.dept_id
);
```

### Tabular Output

| emp_name | salary | dept_name |
|:---|:---|:---|
| Rahul | 90000.00 | Tech |
| Neha | 80000.00 | Sales |

---

## ⚠️ Critical Subquery Pitfalls

1. **Subquery Returns More Than 1 Row in Equality Comparison**:
   ```sql
   -- ERROR: Subquery returns 3 rows, but '=' expects 1 row!
   SELECT * FROM employees WHERE dept_id = (SELECT dept_id FROM departments);
   -- FIX: Replace '=' with 'IN'!
   SELECT * FROM employees WHERE dept_id IN (SELECT dept_id FROM departments);
   ```

2. **The Dangerous `NOT IN` with `NULL` Bug**:
   If a subquery used with `NOT IN` returns even a **single `NULL` value**, the entire `NOT IN` condition evaluates to `UNKNOWN`, returning **0 rows**!
   ```sql
   -- DANGEROUS if orders.customer_id contains NULL!
   SELECT * FROM customers WHERE customer_id NOT IN (SELECT customer_id FROM orders);
   
   -- SAFE ALTERNATIVE: Always use NOT EXISTS!
   SELECT * FROM customers c WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.customer_id = c.customer_id);
   ```

---

## 🧪 Try It Yourself

1. Find the highest-paid employee using a scalar subquery with `MAX()`.
2. Find all products that have never been ordered using `NOT EXISTS`.
3. Write a query in `FROM` clause that ranks departments by total salary expenditure.

---

## 🎯 Mini Challenge

Write a query to find all orders whose total order amount is greater than the average order amount of customers from `'India'`.

---

## 🔗 Related Topics

- [SQL Joins](14-joins.html)
- [Set Operations: UNION & EXCEPT](18-set-operations.html)
- [Common Table Expressions (CTEs)](23-ctes.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: CASE Expressions](16-case-expressions.html) | [Next: Set Operations →](18-set-operations.html)

