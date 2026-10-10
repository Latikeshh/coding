---
layout: default
title: "17 subqueries"
---

# Subqueries & Nested Queries in SQL

> 🟡 Intermediate

---

## 📖 Definition

A **Subquery** (also called an **Inner Query** or **Nested Query**) is an SQL query embedded inside an **Outer Query** (`SELECT`, `INSERT`, `UPDATE`, `DELETE`, or `FROM` clause) whose computed result is consumed by the outer statement.

Subqueries allow developers to construct complex, multi-stage queries without writing temporary intermediate scripts.

### Key Concepts:
- **Logical Execution:** In non-correlated subqueries, the inner query evaluates first to produce a result value or dataset, which is then passed to the outer query.
- **Scope & Aliasing:** Tables defined inside an inner subquery are isolated from the outer query, unless explicitly correlated via table aliases.
- **Flexibility:** Subqueries can return a single scalar value, a single column with multiple rows, multiple columns, or a complete temporary table source.

---

## 🇮🇳 Hindi (Roman Script)

**Subquery** ek main SQL query ke andar likhi gayi choti sub-query hoti hai. Pehle andar waali subquery execute hakar result calculate karti hai, aur fir bahar waali outer query us result ko filtering ya calculation ke liye use karti hai. Jaise: *"Un sabhi employees ko dikhao jin ki salary company ki average salary se zyada hai."* Pehle inner subquery overall average salary calculate karegi, fir outer query us average se zyada salary waale employees ko filter karegi.

---

## 🚩 Marathi (Roman Script)

**Subquery** mhanje main SQL query chya aat lihileli dusri choti query. Pahile aatli subquery execute houn result tayar karte, aani tya result cha wapar main (outer) query madhye kela jato. Udaharanarth: *"Sarasari (average) pagarapeksha jast pagar aslelya karmcharyanchi naave dakhva."* Pahile subquery average salary kadhel, mag outer query karmchari filter karech.

---

## 🧩 Subquery Classification & Categories

Subqueries are categorized based on their **result dimensions** and **outer query relationships**. *(Note: These categories describe different properties and are not mutually exclusive—for instance, a subquery can be both correlated and scalar)*.

```text
                           SUBQUERIES
                               │
        ┌──────────────────────┴──────────────────────┐
        ▼                                             ▼
  Non-Correlated Subqueries                      Correlated Subqueries
  (Inner query executes independently)          (Inner query references outer row)
        │                                             │
  ┌─────┼─────────────┬─────────────┐           ┌─────┴─────────────┐
  │     │             │             │           │                   │
Scalar Multi-Row    Multi-Col    Derived Table  EXISTS / NOT EXISTS  Correlated Scalar
(1x1)  (1xN)        (NxM)       (FROM clause)  (Boolean Check)      (Per-row Lookup)
```

1. **Scalar Subquery:** Returns exactly **1 value** (1 row, 1 column).
2. **Single-Column, Multi-Row Subquery:** Returns **1 column with multiple rows** (used with `IN`, `ALL`, `ANY`/`SOME`).
3. **Multi-Column Subquery:** Returns multiple columns (used for multi-column tuple matching).
4. **Correlated Subquery:** References columns from the outer query, creating a logical dependency.
5. **Derived Table:** A subquery placed in the `FROM` clause acting as a temporary table source (requires an alias in MySQL).
6. **`EXISTS` / `NOT EXISTS` Subquery:** Evaluates boolean existence of matching rows.

---

## ⚡ Execution Behavior: Non-Correlated vs Correlated

Understanding how inner and outer queries interact logically:

- **Non-Correlated Subquery:** The inner subquery operates independently. It does **not** reference any columns from the outer query and can be run as a standalone statement.
- **Correlated Subquery:** The inner subquery references a column from the outer query row currently being processed (e.g., `WHERE d.department_id = e.department_id`). Logically, the inner query evaluates for each candidate row of the outer query.
- 🌐 **MySQL Optimizer Note:** Modern MySQL (5.7+, 8.0+) query optimizers frequently rewrite, flatten, or materialize subqueries into semi-joins or hash tables for high performance, so logical correlation does not imply a slow physical loop.

---

## 🎯 1. Scalar Subqueries (Returns 1 Value: 1 Row, 1 Column)

A **Scalar Subquery** returns a single cell value. It can be used anywhere a literal constant or column expression is expected (e.g. in `SELECT` lists or comparison operators like `=`, `>`, `<`).

### Pattern A: Scalar Subquery in `WHERE` Clause
Find all employees who earn more than the company-wide average salary:

```sql
SELECT emp_id, first_name, salary
FROM emps
WHERE salary > (
    SELECT AVG(salary) FROM emps -- Returns scalar value $72,000.00
)
ORDER BY salary DESC;
```

### Pattern B: Scalar Subquery in `SELECT` List
Display each employee's salary alongside the company-wide average salary:

```sql
SELECT 
    first_name,
    salary,
    (SELECT ROUND(AVG(salary), 2) FROM emps) AS company_avg_salary
FROM emps;
```

> ⚠️ **Scalar Subquery Error Warning:** If a subquery placed next to a scalar comparison operator (`=`, `>`, `<`) returns more than 1 row, MySQL throws `ERROR 1242 (21000): Subquery returns more than 1 row`. Use `IN` or `LIMIT 1` to fix this error.

---

## 📋 2. Multi-Row Subqueries (`IN`, `ALL`, `ANY`/`SOME`)

A **Multi-Row Subquery** returns a list of values in a single column (1 column, $N$ rows). It is paired with list operators:

### A. Using `IN` (List Matching)
Find all departments that currently have at least one employee assigned:

```sql
SELECT dept_id, dept_name
FROM depts
WHERE dept_id IN (
    SELECT DISTINCT department_id 
    FROM emps 
    WHERE department_id IS NOT NULL
);
```

### B. Using `ALL` (Compares Against Every Item in Set)
Find employees whose salary is greater than **ALL** employees in department 20:

```sql
SELECT first_name, salary
FROM emps
WHERE salary > ALL (
    SELECT salary 
    FROM emps 
    WHERE department_id = 20
);
```
- **Explanation:** If department 20 salaries are $60,000 and $70,000, `salary > ALL (...)` requires the salary to be greater than $70,000 (the maximum in department 20).

### C. Using `ANY` / `SOME` (Compares Against At Least One Item)
Find employees whose salary is greater than **AT LEAST ONE** employee in department 20:

```sql
SELECT first_name, salary
FROM emps
WHERE salary > ANY (
    SELECT salary 
    FROM emps 
    WHERE department_id = 20
);
```
- **Explanation:** `salary > ANY (...)` requires the salary to be greater than $60,000 (the minimum in department 20).

> 🚨 **Critical `NULL` Trap for `NOT IN`:**
> If a subquery used with `NOT IN` returns even a **single `NULL` value**, the entire `NOT IN` condition evaluates to `UNKNOWN`, returning **0 rows**!
> ```sql
> -- ❌ DANGEROUS if department_id contains NULL:
> SELECT * FROM depts WHERE dept_id NOT IN (SELECT department_id FROM emps);
>
> -- ✅ SAFE ALTERNATIVE 1: Filter out NULLs in subquery
> SELECT * FROM depts WHERE dept_id NOT IN (SELECT department_id FROM emps WHERE department_id IS NOT NULL);
>
> -- ✅ SAFE ALTERNATIVE 2: Use NOT EXISTS
> SELECT * FROM depts d WHERE NOT EXISTS (SELECT 1 FROM emps e WHERE e.department_id = d.dept_id);
> ```

---

## 🔄 3. Correlated Subqueries

A **Correlated Subquery** references a column from the outer query.

### Problem: Find employees who earn more than the average salary of THEIR OWN department.

```sql
SELECT e.emp_id, e.first_name, e.department_id, e.salary
FROM emps AS e
WHERE e.salary > (
    SELECT AVG(d.salary)
    FROM emps AS d
    WHERE d.department_id = e.department_id -- Correlation condition!
);
```

### 🔍 Step-by-Step Execution Logic:
1. For each candidate row $e$ evaluated by the outer query:
2. The inner subquery executes, calculating `AVG(salary)` for only those employees $d$ where `d.department_id = e.department_id`.
3. If $e$'s salary is greater than that department average, row $e$ is included in the output.
4. *(Note: Unassigned employees where `department_id IS NULL` fail equality `NULL = NULL` and are excluded).*

---

## ⚡ 4. `EXISTS` & `NOT EXISTS` Operators

The **`EXISTS`** predicate checks for the **presence of matching rows** in a subquery. It evaluates to boolean `TRUE` as soon as the inner query finds at least 1 matching row (short-circuit evaluation).

### A. Using `EXISTS`
Find departments that have at least one assigned employee:

```sql
SELECT d.dept_id, d.dept_name
FROM depts AS d
WHERE EXISTS (
    SELECT 1 
    FROM emps AS e
    WHERE e.department_id = d.dept_id
);
```

### B. Using `NOT EXISTS` (Anti-Join Pattern)
Find departments that have **NO** assigned employees:

```sql
SELECT d.dept_id, d.dept_name
FROM depts AS d
WHERE NOT EXISTS (
    SELECT 1 
    FROM emps AS e
    WHERE e.department_id = d.dept_id
);
```

> 💡 **Why `SELECT 1` is Standard:** Inside an `EXISTS` subquery, `SELECT 1` (or `SELECT *`) is standard convention because the database engine ignores actual column values projected by the inner query—it only checks whether at least one matching row exists!

---

## 📦 5. Subqueries in `FROM` Clause (Derived Tables)

A subquery placed in the `FROM` clause creates a temporary query result source called a **Derived Table**.

> 🚨 **MySQL Mandatory Alias Rule:** Every derived table in the `FROM` clause **MUST** have an explicit alias assigned (`AS alias_name`), or MySQL throws `ERROR 1248 (42000): Every derived table must have its own alias`.

```sql
SELECT 
    dept_summary.department_id,
    dept_summary.total_payroll,
    dept_summary.staff_count
FROM (
    SELECT 
        department_id,
        SUM(salary) AS total_payroll,
        COUNT(emp_id) AS staff_count
    FROM emps
    WHERE department_id IS NOT NULL
    GROUP BY department_id
) AS dept_summary -- Mandatory alias!
WHERE dept_summary.total_payroll > 100000.00;
```

---

## 🛠️ Complete Runnable Setup & Unified Example

Let's execute a complete, runnable MySQL-compatible workflow creating `depts` and `emps` tables, inserting sample records, and executing scalar, multi-row, correlated, and derived table subqueries.

```sql
-- 1. Drop sample tables if they exist to allow safe re-runs
DROP TABLE IF EXISTS emps;
DROP TABLE IF EXISTS depts;

-- 2. Create Parent Table: Departments
CREATE TABLE depts (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50) NOT NULL
);

-- 3. Create Child Table: Employees
CREATE TABLE emps (
    emp_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    department_id INT, -- Nullable FK
    salary DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (department_id) REFERENCES depts(dept_id)
);

-- 4. Insert Sample Departments
INSERT INTO depts (dept_id, dept_name) VALUES
    (10, 'Engineering'),
    (20, 'Marketing'),
    (30, 'Sales'); -- Dept 30 has no employees

-- 5. Insert Sample Employees
INSERT INTO emps (emp_id, first_name, department_id, salary) VALUES
    (1, 'Rahul', 10, 85000.00),
    (2, 'Priya', 20, 60000.00),
    (3, 'Amit', 10, 95000.00),
    (4, 'Sneha', 20, 70000.00),
    (5, 'Neha', NULL, 50000.00); -- Unassigned employee
```

---

### Query 1: Scalar Subquery (Earning More Than Company-Wide Average $72,000.00)

```sql
SELECT emp_id, first_name, salary
FROM emps
WHERE salary > (SELECT AVG(salary) FROM emps)
ORDER BY salary DESC;
```

#### 👀 Expected Output:

```text
+--------+------------+----------+
| emp_id | first_name | salary   |
+--------+------------+----------+
|      3 | Amit       | 95000.00 |
|      1 | Rahul      | 85000.00 |
+--------+------------+----------+
```

*(Company average salary = $360,000 / 5 = $72,000.00. Only Amit [$95k] and Rahul [$85k] earn above $72k).*

---

### Query 2: Correlated Subquery (Earning More Than Department Average)

```sql
SELECT e.emp_id, e.first_name, e.department_id, e.salary
FROM emps AS e
WHERE e.salary > (
    SELECT AVG(d.salary)
    FROM emps AS d
    WHERE d.department_id = e.department_id
);
```

#### 👀 Expected Output:

```text
+--------+------------+---------------+----------+
| emp_id | first_name | department_id | salary   |
+--------+------------+---------------+----------+
|      3 | Amit       |            10 | 95000.00 |
|      4 | Sneha      |            20 | 70000.00 |
+--------+------------+---------------+----------+
```

*(Engineering avg = $90,000 $\rightarrow$ Amit [$95k] > $90k. Marketing avg = $65,000 $\rightarrow$ Sneha [$70k] > $65k).*

---

## 🛠️ Common Mistakes & Troubleshooting

| Error / Pitfall | Cause | Recommended Fix |
| :--- | :--- | :--- |
| **`ERROR 1242 (21000): Subquery returns more than 1 row`** | Using a scalar comparison operator (`=`, `>`, `<`) with a subquery returning multiple rows. | Replace scalar comparison with `IN`, `ANY`, or `ALL` operators. |
| **`NOT IN` Subquery Returning 0 Rows** | Subquery in `NOT IN (SELECT col FROM ...)` returns at least one `NULL` value. | Filter out `NULL`s in subquery (`WHERE col IS NOT NULL`) or use `NOT EXISTS`. |
| **`ERROR 1248 (42000): Every derived table must have its own alias`** | Omitting a table alias from a subquery placed in the `FROM` clause. | Always assign an explicit alias to derived tables: `FROM (...) AS my_derived_table`. |
| **Incorrect Correlation Alias** | Misreferencing outer table aliases inside correlated subqueries. | Ensure table aliases (`e` for outer, `d` for inner) are clearly distinguished. |

---

## 🌍 Real-World Usage

- **E-Commerce Fraud Filters:** Finding users whose order amounts exceed 5x their personal historical average order size (`WHERE amount > 5 * (SELECT AVG(amount) ...)`).
- **Financial Risk Reporting:** Finding accounts whose balance exceeds `ALL` default credit thresholds.
- **Data Cleanup Jobs:** Identifying orphaned customer profiles using `NOT EXISTS`.

---

## 🧪 Structured Practice Exercises

### Exercise 1: Scalar Subquery
Write a query on the `emps` table to find all employees whose salary is **less than** the overall company average salary.

### Exercise 2: Multi-Row `ALL` Operator
Write a query to find all employees whose salary is **greater than ALL** employees in department 20 (Marketing).

### Exercise 3: Anti-Join with `NOT EXISTS`
Write a query to find all departments in `depts` that have **no** assigned employees using `NOT EXISTS`.

### Exercise 4: Correlated Subquery
Write a correlated subquery finding employees who earn **less than or equal to** the average salary of their own department.

### Exercise 5: Derived Table Summarization
Write a query using a derived table in the `FROM` clause that calculates the total payroll per department and projects `department_id` and `total_payroll`.

---

## 🎯 Mini Challenge

1. Create a `customers` table (`customer_id`, `customer_name`, `country`).
2. Create an `orders` table (`order_id`, `customer_id`, `order_amount`).
3. Insert sample data:
   - Customers: ID 1 `'Rahul'` (`'India'`), ID 2 `'Priya'` (`'India'`), ID 3 `'John'` (`'USA'`).
   - Orders: Order 101 (Cust 1, `$1500.00`), Order 102 (Cust 2, `$3500.00`), Order 103 (Cust 3, `$8000.00`), Order 104 (Cust 1, `$2000.00`).
4. Write a subquery that retrieves all orders whose `order_amount` is **greater than the average order amount of customers from `'India'`**.

<details>
<summary>🔍 Click to view Exercise Solutions & Answer Key</summary>

### Answer Key:

#### Exercise 1 Solution:
```sql
SELECT emp_id, first_name, salary
FROM emps
WHERE salary < (SELECT AVG(salary) FROM emps);
```

#### Exercise 2 Solution:
```sql
SELECT emp_id, first_name, salary
FROM emps
WHERE salary > ALL (SELECT salary FROM emps WHERE department_id = 20);
-- Output: Amit ($95,000.00 > $70,000.00)
```

#### Exercise 3 Solution:
```sql
SELECT d.dept_id, d.dept_name
FROM depts AS d
WHERE NOT EXISTS (SELECT 1 FROM emps AS e WHERE e.department_id = d.dept_id);
-- Output: Sales (dept_id 30)
```

#### Exercise 4 Solution:
```sql
SELECT e.emp_id, e.first_name, e.department_id, e.salary
FROM emps AS e
WHERE e.salary <= (SELECT AVG(d.salary) FROM emps AS d WHERE d.department_id = e.department_id);
-- Output: Rahul ($85k <= $90k Eng avg), Priya ($60k <= $65k Mktg avg)
```

#### Exercise 5 Solution:
```sql
SELECT dept_summary.department_id, dept_summary.total_payroll
FROM (
    SELECT department_id, SUM(salary) AS total_payroll
    FROM emps
    WHERE department_id IS NOT NULL
    GROUP BY department_id
) AS dept_summary;
```

#### Mini Challenge Solution:

```sql
-- Step 1: Create customers & orders tables
CREATE TABLE IF NOT EXISTS customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(50) NOT NULL,
    country VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS orders (
    order_id INT PRIMARY KEY,
    customer_id INT NOT NULL,
    order_amount DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Step 2: Insert sample data
INSERT INTO customers (customer_id, customer_name, country) VALUES
    (1, 'Rahul', 'India'),
    (2, 'Priya', 'India'),
    (3, 'John', 'USA');

INSERT INTO orders (order_id, customer_id, order_amount) VALUES
    (101, 1, 1500.00),
    (102, 2, 3500.00),
    (103, 3, 8000.00),
    (104, 1, 2000.00);

-- Step 3: Subquery filtering orders above Indian customers' average order size
SELECT o.order_id, o.customer_id, o.order_amount
FROM orders AS o
WHERE o.order_amount > (
    SELECT AVG(sub_o.order_amount)
    FROM orders AS sub_o
    JOIN customers AS sub_c ON sub_o.customer_id = sub_c.customer_id
    WHERE sub_c.country = 'India'
);
```

**Expected Output:**

```text
+----------+-------------+--------------+
| order_id | customer_id | order_amount |
+----------+-------------+--------------+
|      102 |           2 |      3500.00 |
|      103 |           3 |      8000.00 |
+----------+-------------+--------------+
```

*(Explanation: Orders from India are $1500, $3500, and $2000. Average order for India = $7000 / 3 = $2333.33. Orders above $2333.33 are order 102 [$3500.00] and order 103 [$8000.00]).*

</details>

---

## 🔗 Related Topics

- [SQL Joins & Table Relationships](14-joins.html)
- [Conditional Logic with CASE](16-case-expressions.html)
- [Set Operations: `UNION` & `EXCEPT`](18-set-operations.html)
- [Common Table Expressions (CTEs)](23-ctes.html)

---

## 🧭 Navigation

[← Previous: CASE Expressions](16-case-expressions.html) | [SQL Home](./) | [Next: Set Operations →](18-set-operations.html)
