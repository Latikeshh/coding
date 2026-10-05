---
layout: default
title: "15 joins"
---

# SQL Joins & Table Relationships

> 🟡 Intermediate

---

## 📖 Definition

An **SQL Join** is a powerful operation used to combine columns and rows from two or more tables based on a related column between them (typically a Foreign Key referencing a Primary Key). Joins allow normalized relational databases to break data into small, non-redundant tables while still retrieving consolidated, multi-table reports in a single query.

---

## 🇮🇳 Hindi Explanation

SQL Joins alag-alag tables ke data ko ek saath connect karne ke liye use hote hain. Jab hum relational database banate hain, toh hum data ko alag tables (jaise `employees` aur `departments`) mein tod kar rakhte hain taaki duplication na ho. Sub query karte waqt, `JOIN` ka kaam dono tables ke bich ke common ID (Primary Key / Foreign Key) ko mila kar ek complete unified table ki tarah result dikhana hota hai.

---

## 🚩 Marathi Explanation

SQL Joins cha vapar dona kiwa tyapeksha phar tables madhil data ekatra karun dakhavnyasathi kela jato. Database madhye data duplicate hou naye mhanun hum mahiti veglya tables madhye thevto (udaharanarth `employees` aani `departments`). Joins mule yaprakaarche vegle tables tyanachya common ID cha vapar karun eka sampurna report sarakhe ekatra dakhawle jataat.

---

## 🤔 Why Use SQL Joins?

1. **Eliminate Data Redundancy**: Instead of repeating department name, location, and manager on every employee record, store department details once in a `departments` table and reference it via `department_id`.
2. **Data Integrity**: Updating a department name requires editing only 1 row in `departments` rather than thousands of employee records.
3. **Flexible Reporting**: Effortlessly generate cross-sectional reports (e.g., list all employees along with their department names and project assignments).

---

## 🧠 Simple Analogy

Think of two lists at a college event:
- **List A (Students)**: Contains `Student ID` and `Student Name`.
- **List B (Event Passes)**: Contains `Pass Code` and `Student ID`.

- **INNER JOIN**: Only students who have actually bought an Event Pass (matches on both sides).
- **LEFT JOIN**: Every student in college, showing their pass code if they bought one, or `NULL` if they haven't bought any.
- **RIGHT JOIN**: Every event pass issued, showing student details if assigned, or `NULL` if an unassigned VIP pass.
- **FULL OUTER JOIN**: A complete master list showing every student and every pass, whether matched or unmatched.
- **CROSS JOIN**: Every possible pair combination of every student with every available pass.

---

## 📊 Sample Setup Tables

Let's create two sample tables (`departments` and `employees`) with unmatched rows on both sides to demonstrate every join type clearly:

```sql
-- Create Departments Table
CREATE TABLE departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50) NOT NULL
);

-- Create Employees Table
CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50) NOT NULL,
    dept_id INT,
    salary DECIMAL(10,2)
);

-- Insert Sample Departments
INSERT INTO departments (dept_id, dept_name) VALUES
(10, 'Engineering'),
(20, 'Marketing'),
(30, 'Sales'),
(40, 'Human Resources'); -- Dept 40 has no employees

-- Insert Sample Employees
INSERT INTO employees (emp_id, emp_name, dept_id, salary) VALUES
(101, 'Rahul', 10, 85000.00),
(102, 'Priya', 20, 65000.00),
(103, 'Amit', 10, 90000.00),
(104, 'Neha', NULL, 70000.00); -- Neha has no assigned department (dept_id is NULL)
```

### Table 1: `departments`

| dept_id | dept_name |
|:---|:---|
| 10 | Engineering |
| 20 | Marketing |
| 30 | Sales |
| 40 | Human Resources |

### Table 2: `employees`

| emp_id | emp_name | dept_id | salary |
|:---|:---|:---|:---|
| 101 | Rahul | 10 | 85000.00 |
| 102 | Priya | 20 | 65000.00 |
| 103 | Amit | 10 | 90000.00 |
| 104 | Neha | NULL | 70000.00 |

---

## 🧭 Comprehensive Breakdown of All 8 Join Types

### 1. `INNER JOIN` (Intersection of Matches)

An `INNER JOIN` returns only the rows where there is a matching value in **both** tables. Unmatched rows from either table are completely excluded.

#### Visual ASCII Venn Diagram
```text
  Table A (Left)     Table B (Right)
   +---------+     +---------+

   |         |     |         |
   |     +---|-----+---|     |
   |     |   | ### |   |     |  <-- Only Overlapping / Matching
   |     +---|-----+---|     |      Rows Are Returned!
   |         |     |         |
   +---------+     +---------+
```

#### SQL Query
```sql
SELECT 
    e.emp_id, 
    e.emp_name, 
    d.dept_id, 
    d.dept_name
FROM employees AS e
INNER JOIN departments AS d
    ON e.dept_id = d.dept_id;
```

#### Result Table

| emp_id | emp_name | dept_id | dept_name |
|:---|:---|:---|:---|
| 101 | Rahul | 10 | Engineering |
| 102 | Priya | 20 | Marketing |
| 103 | Amit | 10 | Engineering |

#### Explanation
- Rahul & Amit match `dept_id = 10` (Engineering).
- Priya matches `dept_id = 20` (Marketing).
- Neha is **excluded** because her `dept_id` is `NULL`.
- Sales (30) and HR (40) are **excluded** because no employee belongs to them.

---

### 2. `LEFT JOIN` / `LEFT OUTER JOIN` (All Left + Matching Right)

A `LEFT JOIN` returns **all rows from the left table**, along with matching rows from the right table. If there is no match in the right table, columns from the right table will contain `NULL`.

#### Visual ASCII Venn Diagram
```text
  Table A (Left)     Table B (Right)
   +---------+     +---------+

   | ####### |     |         |
   | #######-|-----+---|     |  <-- ALL Rows from Left Table
   | ####### | ### |   |     |      + Matching Rows from Right
   | #######-|-----+---|     |
   | ####### |     |         |
   +---------+     +---------+
```

#### SQL Query
```sql
SELECT 
    e.emp_id, 
    e.emp_name, 
    e.dept_id AS emp_dept_id, 
    d.dept_name
FROM employees AS e
LEFT JOIN departments AS d
    ON e.dept_id = d.dept_id;
```

#### Result Table

| emp_id | emp_name | emp_dept_id | dept_name |
|:---|:---|:---|:---|
| 101 | Rahul | 10 | Engineering |
| 102 | Priya | 20 | Marketing |
| 103 | Amit | 10 | Engineering |
| 104 | Neha | NULL | NULL |

#### Explanation
- All 4 employees are present in the output.
- Neha appears in the result even though she has no assigned department; her `dept_name` is returned as `NULL`.

---

### 3. `RIGHT JOIN` / `RIGHT OUTER JOIN` (All Right + Matching Left)

A `RIGHT JOIN` returns **all rows from the right table**, along with matching rows from the left table. If there is no match in the left table, columns from the left table will contain `NULL`.

#### Visual ASCII Venn Diagram
```text
  Table A (Left)     Table B (Right)
   +---------+     +---------+

   |         |     | ####### |
   |     +---|-----|-####### |  <-- ALL Rows from Right Table
   |     |   | ### | ####### |      + Matching Rows from Left
   |     +---|-----|-####### |
   |         |     | ####### |
   +---------+     +---------+
```

#### SQL Query
```sql
SELECT 
    e.emp_id, 
    e.emp_name, 
    d.dept_id, 
    d.dept_name
FROM employees AS e
RIGHT JOIN departments AS d
    ON e.dept_id = d.dept_id;
```

#### Result Table

| emp_id | emp_name | dept_id | dept_name |
|:---|:---|:---|:---|
| 101 | Rahul | 10 | Engineering |
| 103 | Amit | 10 | Engineering |
| 102 | Priya | 20 | Marketing |
| NULL | NULL | 30 | Sales |
| NULL | NULL | 40 | Human Resources |

#### Explanation
- All 4 departments (`Engineering`, `Marketing`, `Sales`, `Human Resources`) are included in the result.
- Sales and Human Resources have no employees, so `emp_id` and `emp_name` appear as `NULL`.
- Neha is **excluded** because she is in the left table with no department match.

---

### 4. `FULL OUTER JOIN` (All Rows from Both Sides)

A `FULL OUTER JOIN` returns **all rows from both tables**. When a row matches, values from both sides are displayed. When there is no match on either side, `NULL` fills the missing columns.

#### Visual ASCII Venn Diagram
```text
  Table A (Left)     Table B (Right)
   +---------+     +---------+

   | ####### |     | ####### |
   | #######-|-----|-####### |  <-- EVERY SINGLE ROW
   | ####### | ### | ####### |      From Both Tables
   | #######-|-----|-####### |
   | ####### |     | ####### |
   +---------+     +---------+
```

#### Standard ANSI SQL Query
```sql
SELECT 
    e.emp_id, 
    e.emp_name, 
    d.dept_id, 
    d.dept_name
FROM employees AS e
FULL OUTER JOIN departments AS d
    ON e.dept_id = d.dept_id;
```

#### Result Table

| emp_id | emp_name | dept_id | dept_name |
|:---|:---|:---|:---|
| 101 | Rahul | 10 | Engineering |
| 102 | Priya | 20 | Marketing |
| 103 | Amit | 10 | Engineering |
| 104 | Neha | NULL | NULL |
| NULL | NULL | 30 | Sales |
| NULL | NULL | 40 | Human Resources |

> [!NOTE]
> **MySQL Compatibility Note**: MySQL does not natively support `FULL OUTER JOIN`. In MySQL, emulate a `FULL OUTER JOIN` using a `LEFT JOIN` and a `RIGHT JOIN` combined with `UNION`:
> ```sql
> SELECT e.emp_id, e.emp_name, d.dept_id, d.dept_name
> FROM employees AS e LEFT JOIN departments AS d ON e.dept_id = d.dept_id
> UNION
> SELECT e.emp_id, e.emp_name, d.dept_id, d.dept_name
> FROM employees AS e RIGHT JOIN departments AS d ON e.dept_id = d.dept_id;
> ```

---

### 5. `CROSS JOIN` (Cartesian Product N × M)

A `CROSS JOIN` produces the **Cartesian Product** of two tables. Every row from the first table is paired with every single row from the second table. If Table A has 4 rows and Table B has 4 rows, the result contains **4 × 4 = 16 rows**.

#### SQL Query
```sql
SELECT 
    e.emp_name, 
    d.dept_name
FROM employees AS e
CROSS JOIN departments AS d;
```

#### Partial Output Sample (First 6 of 16 Rows)

| emp_name | dept_name |
|:---|:---|
| Rahul | Engineering |
| Rahul | Marketing |
| Rahul | Sales |
| Rahul | Human Resources |
| Priya | Engineering |
| Priya | Marketing |
| ... | ... (16 total rows) |

---

### 6. `SELF JOIN` (Joining a Table to Itself)

A `SELF JOIN` is a regular join where a table is joined with **itself**. This is useful for evaluating hierarchical data within the same table, such as finding an employee's manager or comparing product prices within the same category.

#### Setup Table: `staff`
```sql
CREATE TABLE staff (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    manager_id INT
);

INSERT INTO staff VALUES
(1, 'Vikram', NULL),  -- CEO (No Manager)
(2, 'Suresh', 1),    -- Managed by Vikram
(3, 'Rohan', 1),     -- Managed by Vikram
(4, 'Ananya', 2);    -- Managed by Suresh
```

#### SQL Query
```sql
SELECT 
    e.emp_name AS employee,
    COALESCE(m.emp_name, 'Top Boss (No Manager)') AS manager
FROM staff AS e
LEFT JOIN staff AS m
    ON e.manager_id = m.emp_id;
```

#### Result Table

| employee | manager |
|:---|:---|
| Vikram | Top Boss (No Manager) |
| Suresh | Vikram |
| Rohan | Vikram |
| Ananya | Suresh |

---

### 7. `NATURAL JOIN` (Implicit Matching on Common Column Names)

A `NATURAL JOIN` automatically joins two tables based on **all columns that share the exact same name** across both tables.

```sql
SELECT emp_name, dept_name
FROM employees
NATURAL JOIN departments;
```

> [!WARNING]
> **Production Danger**: Avoid `NATURAL JOIN` in production code. If someone adds a common column like `created_at` or `status` to both tables later, your `NATURAL JOIN` will silently break or return empty results! Always explicitly specify join conditions using `ON`.

---

### 8. `ANTI JOIN` & `SEMI JOIN` (Pattern Techniques)

#### A. Anti-Join (Finding Unmatched / Orphaned Records)
An **Anti-Join** returns rows from the left table that have **no matching records** in the right table. This is achieved using a `LEFT JOIN` combined with a `WHERE ... IS NULL` clause.

```sql
-- Find employees who do NOT belong to any valid department
SELECT e.emp_id, e.emp_name
FROM employees AS e
LEFT JOIN departments AS d
    ON e.dept_id = d.dept_id
WHERE d.dept_id IS NULL;
```

#### Output

| emp_id | emp_name |
|:---|:---|
| 104 | Neha |

#### B. Semi-Join (Filtering for Existence)
A **Semi-Join** returns rows from the left table that match at least one record in the right table, without duplicating left rows if multiple right matches exist. In SQL, this is typically implemented using `EXISTS` or `IN`:

```sql
-- Find departments that have at least one assigned employee
SELECT d.dept_id, d.dept_name
FROM departments AS d
WHERE EXISTS (
    SELECT 1 
    FROM employees AS e 
    WHERE e.dept_id = d.dept_id
);
```

---

## 📝 Summary Comparison Table

| Join Type | Left Table Unmatched Rows | Matching Rows | Right Table Unmatched Rows | Row Count Formula (Max) |
|:---|:---:|:---:|:---:|:---|
| `INNER JOIN` | ❌ Excluded | ✅ Included | ❌ Excluded | Matches Only (≤ N) |
| `LEFT JOIN` | ✅ Included (NULLs) | ✅ Included | ❌ Excluded | All Left Rows (≥ N) |
| `RIGHT JOIN` | ❌ Excluded | ✅ Included | ✅ Included (NULLs) | All Right Rows (≥ M) |
| `FULL OUTER JOIN` | ✅ Included (NULLs) | ✅ Included | ✅ Included (NULLs) | Combined Distinct Rows |
| `CROSS JOIN` | 🔄 All Paired | 🔄 All Paired | 🔄 All Paired | Exactly **N × M** Rows |

---

## ⚠️ Common Mistakes & Pitfalls

1. **Missing `ON` Clause (Accidental Cartesian Product)**:
   Omitting `ON` turns an intentional join into a massive `CROSS JOIN` that can freeze production databases!
   ```sql
   -- BAD: Missing ON condition!
   SELECT * FROM employees, departments;
   ```

2. **Filtering Left Joined Tables in `WHERE` Clause**:
   Filtering columns from the right table in `WHERE` converts a `LEFT JOIN` into an `INNER JOIN` because `NULL` values get filtered out!
   ```sql
   -- BAD: Forces LEFT JOIN to behave like INNER JOIN
   SELECT * FROM employees e
   LEFT JOIN departments d ON e.dept_id = d.dept_id
   WHERE d.dept_name = 'Engineering'; -- Neha gets dropped!

   -- GOOD: Place the right table filter inside the ON clause!
   SELECT * FROM employees e
   LEFT JOIN departments d ON e.dept_id = d.dept_id AND d.dept_name = 'Engineering';
   ```

3. **Ambiguous Column Name Errors**:
   Selecting `dept_id` without specifying table aliases causes `ERROR 1052: Column 'dept_id' in field list is ambiguous`. Always prefix columns with table aliases (`e.dept_id`, `d.dept_id`).

---

## 🛡️ Best Practices & Performance Notes

- **Always Use Short Table Aliases**: Use readable aliases (`e` for `employees`, `d` for `departments`) to keep queries clean.
- **Ensure Foreign Keys Are Indexed**: Indexing columns used in `ON` clauses (e.g., `e.dept_id`) improves join performance from $O(N)$ table scans to $O(\log N)$ B-Tree index lookups!
- **Join Smaller Tables First**: Optimizers usually handle join order, but writing clean queries with explicit `INNER JOIN`s helps the query engine construct efficient execution plans.

---

## 🌍 Real-World Usage

- **E-Commerce Portals**: Joining `orders`, `order_items`, `customers`, and `products` to render order invoice summaries.
- **Banking Applications**: Joining `accounts` and `transactions` to generate monthly bank statements.
- **HR & Payroll Systems**: Joining `employees`, `salaries`, and `tax_brackets` to process monthly payroll.

---

## 🧪 Try It Yourself

1. Write an `INNER JOIN` query between `customers` and `orders` to display `customer_name`, `order_id`, and `order_date`.
2. Write a `LEFT JOIN` query to find all customers who have **never placed an order**.
3. Perform a `SELF JOIN` on an `employees` table to display employee names along with their manager names.

---

## 🎯 Mini Challenge

Given two tables:
- `students` (`student_id`, `student_name`)
- `courses` (`course_id`, `course_name`)
- `enrollments` (`student_id`, `course_id`, `grade`)

Write a query that lists **every student name**, the **course name** they are enrolled in, and their **grade**. If a student is not enrolled in any course, their name should still appear with `NULL` for course name and grade.

<details>
<summary>🔍 Click to reveal solution</summary>

```sql
SELECT 
    s.student_name,
    c.course_name,
    e.grade
FROM students AS s
LEFT JOIN enrollments AS e
    ON s.student_id = e.student_id
LEFT JOIN courses AS c
    ON e.course_id = c.course_id
ORDER BY s.student_name;
```
</details>

---

## 🔗 Related Topics

- [Primary Keys & Foreign Keys](12-primary-and-foreign-keys.html)
- [GROUP BY & HAVING](14-group-by-and-having.html)
- [Subqueries & Nested Queries](18-subqueries.html)
- [Set Operations: UNION & EXCEPT](19-set-operations.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: GROUP BY & HAVING](14-group-by-and-having.html) | [Next: SQL Functions →](16-sql-functions.html)

