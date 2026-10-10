---
layout: default
title: "14 joins"
---

# SQL Joins & Table Relationships

> 🟡 Intermediate

---

## 📖 Definition

An **SQL Join** is an operation used to combine columns and rows from two or more database tables based on a related column between them (typically a Foreign Key referencing a Primary Key).

Joins enable normalized relational databases to break complex entities into separate, non-redundant tables while allowing developers to write queries that retrieve unified, multi-table reports in a single query execution.

---

## 🇮🇳 Hindi (Roman Script)

Relational database mein data redundancy (duplication) kam karne ke liye data ko alag-alag tables mein divide kiya jata hai (jaise `employees` aur `departments`). In alag tables ke data ko ek saath combine karke complete report dekhne ke liye **SQL Joins** ka use hota hai. Joins dono tables ke common ID (`PRIMARY KEY` / `FOREIGN KEY`) ke aadhar par rows ko mila kar ek result table return karte hain.

---

## 🚩 Marathi (Roman Script)

Relational database madhye data repetition टाळण्यासाठी mahiti vegle tables madhye (jaise `employees` aani `departments`) saathvli jate. Yaa veglya tables madhil data ekatra karun consolidated report dakhvnyasathi **SQL Joins** cha wapar kela jato. Joins donhi tables madhil common key cha (`PRIMARY KEY` / `FOREIGN KEY`) wapar karun data ekatra kartat.

---

## 🤔 Why Use SQL Joins?

- **Eliminate Data Redundancy:** Avoid repeating department names, locations, and manager details on every employee record. Store department information once in a `departments` table and reference it via `dept_id`.
- **Data Integrity:** Renaming a department requires updating only one row in the `departments` table, rather than updating thousands of employee records.
- **Unified Multi-Table Reporting:** Retrieve consolidated views across customers, orders, payments, and product inventories in a single query.

---

## 🧠 Simple Analogy: Student Event Passes

Imagine two physical lists at a university campus event:
- **List A (Students Registry):** Contains `student_id` and `student_name`.
- **List B (Event Passes):** Contains `pass_id` and `student_id`.

- **`INNER JOIN`:** Lists only students who have actually bought an Event Pass (matching `student_id` on both lists).
- **`LEFT JOIN`:** Lists **every** student in the university registry. Displays their pass code if they bought one, or **`NULL`** if they haven't bought a pass.
- **`RIGHT JOIN`:** Lists **every** event pass issued. Displays student details if assigned, or **`NULL`** if the pass is an unassigned VIP pass.
- **`FULL OUTER JOIN`:** A complete master report showing every student and every pass, whether matched or unmatched.
- **`CROSS JOIN`:** Every possible pair combination of every student with every available event pass.

---

## 🛠️ Safe & Repeatable Sample Setup Tables

Let's create two sample tables (`departments` and `employees`) containing unmatched records on both sides to demonstrate every join type accurately:

```sql
-- 1. Create Parent Table: Departments
CREATE TABLE IF NOT EXISTS departments (
    dept_id INT PRIMARY KEY,
    dept_name VARCHAR(50) NOT NULL UNIQUE
);

-- 2. Create Child Table: Employees
CREATE TABLE IF NOT EXISTS employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50) NOT NULL,
    dept_id INT, -- Nullable Foreign Key
    salary DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);

-- 3. Insert Sample Departments (Dept 30 & 40 have no employees)
INSERT INTO departments (dept_id, dept_name) VALUES
    (10, 'Engineering'),
    (20, 'Marketing'),
    (30, 'Sales'),
    (40, 'Human Resources');

-- 4. Insert Sample Employees (Neha has no assigned department: dept_id IS NULL)
INSERT INTO employees (emp_id, emp_name, dept_id, salary) VALUES
    (101, 'Rahul', 10, 85000.00),
    (102, 'Priya', 20, 65000.00),
    (103, 'Amit', 10, 90000.00),
    (104, 'Neha', NULL, 70000.00);
```

### Table 1: `departments` (Parent)

| dept_id | dept_name |
|:---:|:---|
| **10** | Engineering |
| **20** | Marketing |
| **30** | Sales |
| **40** | Human Resources |

### Table 2: `employees` (Child)

| emp_id | emp_name | dept_id | salary |
|:---:|:---|:---:|:---:|
| 101 | Rahul | **10** | 85000.00 |
| 102 | Priya | **20** | 65000.00 |
| 103 | Amit | **10** | 90000.00 |
| 104 | Neha | **NULL** | 70000.00 |

> ℹ️ **Understanding Neha's `NULL` Department:** Neha's `dept_id` is `NULL`, signifying that no department has been assigned to her. `NULL` does not match any numeric `dept_id` in `departments` through ordinary equality (`=`).

---

## 🧭 Comprehensive Breakdown of Core Join Types

### 1. `INNER JOIN` (Matching Rows in Both Tables)

An **`INNER JOIN`** returns only the rows where there is an exact matching value in **both** tables. Unmatched rows from either table are completely excluded.

```text
  Table A (Left)     Table B (Right)
   +---------+     +---------+
   |         |     |         |
   |     +---|-----+---|     |
   |     |   | ### |   |     |  <-- Returns ONLY Overlapping / Matching
   |     +---|-----+---|     |      Rows Present in Both Tables
   |         |     |         |
   +---------+     +---------+
```

#### SQL Query:
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

#### 👀 Expected Result Table:

| emp_id | emp_name | dept_id | dept_name |
|:---:|:---|:---:|:---|
| 101 | Rahul | 10 | Engineering |
| 102 | Priya | 20 | Marketing |
| 103 | Amit | 10 | Engineering |

#### 🔍 Explanation:
- Rahul and Amit match `dept_id = 10` (`Engineering`).
- Priya matches `dept_id = 20` (`Marketing`).
- Neha is **excluded** because her `dept_id` is `NULL`.
- Sales (`30`) and Human Resources (`40`) are **excluded** because no employee currently belongs to them.

---

### 2. `LEFT JOIN` / `LEFT OUTER JOIN` (All Left Rows + Matching Right)

A **`LEFT JOIN`** (or `LEFT OUTER JOIN`) preserves **every row from the left table** (`employees`), along with matching rows from the right table (`departments`). If a left-table row has no match in the right table, right-table columns return **`NULL`**.

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

#### SQL Query:
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

#### 👀 Expected Result Table:

| emp_id | emp_name | emp_dept_id | dept_name |
|:---:|:---|:---:|:---|
| 101 | Rahul | 10 | Engineering |
| 102 | Priya | 20 | Marketing |
| 103 | Amit | 10 | Engineering |
| 104 | Neha | NULL | **NULL** |

#### 🔍 Explanation:
- All 4 employees are preserved in the result set.
- Neha appears in the output even though she has no assigned department; her `dept_name` is returned as `NULL`.
- *(Note: `LEFT JOIN` and `LEFT OUTER JOIN` are 100% equivalent in SQL syntax).*

---

### 3. `RIGHT JOIN` / `RIGHT OUTER JOIN` (All Right Rows + Matching Left)

A **`RIGHT JOIN`** (or `RIGHT OUTER JOIN`) preserves **every row from the right table** (`departments`), along with matching rows from the left table (`employees`). If a right-table row has no matching employees, left-table columns return **`NULL`**.

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

#### SQL Query:
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

#### 👀 Expected Result Table:

| emp_id | emp_name | dept_id | dept_name |
|:---:|:---|:---:|:---|
| 101 | Rahul | 10 | Engineering |
| 103 | Amit | 10 | Engineering |
| 102 | Priya | 20 | Marketing |
| **NULL** | **NULL** | 30 | Sales |
| **NULL** | **NULL** | 40 | Human Resources |

#### 🔍 Explanation:
- All 4 departments (`Engineering`, `Marketing`, `Sales`, `Human Resources`) are included in the result.
- `Sales` and `Human Resources` have no assigned employees, so `emp_id` and `emp_name` return as `NULL`.
- Neha is **excluded** because she is an unmatched row in the left table.

---

### 4. `FULL OUTER JOIN` (ANSI Standard) & MySQL Emulation

A **`FULL OUTER JOIN`** returns **all rows from both tables**, displaying matching values where they exist and `NULL` for unmatched rows on either side.

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

#### 🌐 MySQL Compatibility & Emulation Notice:
MySQL does **not** natively support `FULL OUTER JOIN` syntax (`ERROR 1064`). In MySQL and MariaDB, you emulate a `FULL OUTER JOIN` by combining a `LEFT JOIN` and a `RIGHT JOIN` using the **`UNION`** operator:

```sql
-- MySQL Emulation of FULL OUTER JOIN
SELECT e.emp_id, e.emp_name, e.dept_id, d.dept_name
FROM employees AS e
LEFT JOIN departments AS d ON e.dept_id = d.dept_id

UNION

SELECT e.emp_id, e.emp_name, e.dept_id, d.dept_name
FROM employees AS e
RIGHT JOIN departments AS d ON e.dept_id = d.dept_id;
```

#### 👀 Expected Result Table (6 Rows Total):

| emp_id | emp_name | dept_id | dept_name |
|:---:|:---|:---:|:---|
| 101 | Rahul | 10 | Engineering |
| 102 | Priya | 20 | Marketing |
| 103 | Amit | 10 | Engineering |
| 104 | Neha | NULL | NULL |
| NULL | NULL | 30 | Sales |
| NULL | NULL | 40 | Human Resources |

> 💡 **Why `UNION` (and NOT `UNION ALL`):** The `UNION` operator automatically deduplicates identical matching rows produced by both the `LEFT JOIN` and `RIGHT JOIN` halves. Using `UNION ALL` without filtering would duplicate the matching employee rows (Rahul, Priya, Amit) twice!

---

### 5. `CROSS JOIN` (Cartesian Product N × M)

A **`CROSS JOIN`** produces the **Cartesian Product** of two tables by pairing every single row from the left table with every single row from the right table. 

If Table A has 4 rows and Table B has 4 rows, the result contains **4 × 4 = 16 rows**.

#### SQL Query:
```sql
SELECT 
    e.emp_name, 
    d.dept_name
FROM employees AS e
CROSS JOIN departments AS d;
```

#### 👀 Partial Result Sample (First 6 of 16 Rows):

| emp_name | dept_name |
|:---|:---|
| Rahul | Engineering |
| Rahul | Marketing |
| Rahul | Sales |
| Rahul | Human Resources |
| Priya | Engineering |
| Priya | Marketing |
| ... | ... *(16 total rows)* |

---

### 6. `SELF JOIN` (Joining a Table to Itself)

A **`SELF JOIN`** joins a table with **itself** using table aliases (`e` and `m`). This is used to query hierarchical relationships stored in a single table, such as linking employees to their respective managers.

#### Setup Table: `staff`

```sql
CREATE TABLE IF NOT EXISTS staff (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50) NOT NULL,
    manager_id INT -- References emp_id in the same table
);

INSERT INTO staff (emp_id, emp_name, manager_id) VALUES
    (1, 'Vikram', NULL),  -- CEO (No Manager)
    (2, 'Suresh', 1),    -- Managed by Vikram
    (3, 'Rohan', 1),     -- Managed by Vikram
    (4, 'Ananya', 2);    -- Managed by Suresh
```

#### SQL Query:
```sql
SELECT 
    e.emp_name AS employee,
    COALESCE(m.emp_name, 'Top Boss (No Manager)') AS manager
FROM staff AS e
LEFT JOIN staff AS m
    ON e.manager_id = m.emp_id;
```

#### 👀 Expected Result Table:

| employee | manager |
|:---|:---|
| Vikram | Top Boss (No Manager) |
| Suresh | Vikram |
| Rohan | Vikram |
| Ananya | Suresh |

---

### 7. `NATURAL JOIN` & Production Warnings

A `NATURAL JOIN` automatically joins two tables based on **all columns that share identical names** across both tables.

```sql
SELECT emp_name, dept_name
FROM employees
NATURAL JOIN departments;
```

> ⚠️ **Production Risk Warning:** Avoid using `NATURAL JOIN` in production software code! If another developer adds a common column (such as `created_at`, `status`, or `updated_by`) to both tables in a future schema migration, the `NATURAL JOIN` will silently change its join conditions and fail or return empty results! Always write explicit join conditions using `ON e.dept_id = d.dept_id` or `USING (dept_id)`.

---

## 🎯 Advanced Filtering Patterns: Anti-Joins & Semi-Joins

### 1. Anti-Join (Finding Unmatched / Orphaned Records)
An **Anti-Join** identifies rows in one table that have **no matching records** in another table. This is achieved using a `LEFT JOIN` combined with a `WHERE right_table.primary_key IS NULL` filter.

#### Scenario A: Find Employees Without an Assigned Department
```sql
SELECT e.emp_id, e.emp_name
FROM employees AS e
LEFT JOIN departments AS d ON e.dept_id = d.dept_id
WHERE d.dept_id IS NULL;
```
- **Output:** `104 | Neha`

#### Scenario B: Find Departments With No Assigned Employees
```sql
SELECT d.dept_id, d.dept_name
FROM departments AS d
LEFT JOIN employees AS e ON d.dept_id = e.dept_id
WHERE e.emp_id IS NULL;
```
- **Output:** `30 | Sales` and `40 | Human Resources`

---

### 2. Semi-Join (Checking Record Existence)
A **Semi-Join** checks whether a matching record exists in a secondary table without duplicating rows from the primary table. In SQL, this is typically implemented using `EXISTS` or `IN`:

```sql
-- Find departments that have AT LEAST ONE assigned employee
SELECT d.dept_id, d.dept_name
FROM departments AS d
WHERE EXISTS (
    SELECT 1 
    FROM employees AS e 
    WHERE e.dept_id = d.dept_id
);
```

---

## ⚠️ `LEFT JOIN` Filtering Trap: `WHERE` vs `ON`

When performing a `LEFT JOIN`, filtering a column from the right table inside the **`WHERE`** clause converts the `LEFT JOIN` into an **`INNER JOIN`** because `NULL` values get filtered out!

### Scenario 1: Filtering Right Table in `WHERE` Clause (Converts to INNER JOIN)

```sql
-- ❌ Converting LEFT JOIN to INNER JOIN unintentionally
SELECT e.emp_name, d.dept_name
FROM employees AS e
LEFT JOIN departments AS d ON e.dept_id = d.dept_id
WHERE d.dept_name = 'Engineering';
```
- **Explanation:** The `WHERE` clause evaluates *after* the join. For Neha, `d.dept_name` is `NULL`. Evaluating `NULL = 'Engineering'` yields `UNKNOWN` (false), so Neha is excluded! The query returns ONLY Engineering employees (`Rahul`, `Amit`).

---

### Scenario 2: Filtering Right Table in `ON` Clause (Preserves LEFT JOIN)

```sql
-- ✅ Preserving all employees while matching Engineering department
SELECT e.emp_name, d.dept_name
FROM employees AS e
LEFT JOIN departments AS d ON e.dept_id = d.dept_id AND d.dept_name = 'Engineering';
```
- **Explanation:** The `AND` filter applies *during* the join matching step. Every employee row is preserved from the left table. For non-Engineering employees (Priya) and Neha, `d.dept_name` appears as `NULL`.

---

## 🛠️ Join Performance & Indexing Best Practices

- **Use Short Table Aliases:** Use clear table aliases (`e` for `employees`, `d` for `departments`) to keep multi-table queries concise.
- **Index Foreign Key Columns:** Indexing columns used in `ON` clauses (e.g., `e.dept_id`) speeds up row matching during joins by allowing the database engine to perform index lookups instead of scanning child tables sequentially.
- **Primary Keys Are Indexed Automatically:** Primary keys in MySQL InnoDB are automatically indexed as clustered indexes.
- **Inspect Execution Plans with `EXPLAIN`:** Use `EXPLAIN SELECT ...` to verify join order, join types (`type: ref` vs `type: ALL`), and index usage.

---

## 📊 Summary Comparison Matrix

| Join Type | Left Table Unmatched Rows | Matching Rows | Right Table Unmatched Rows | Row Count Result (Max) |
| :--- | :---: | :---: | :---: | :--- |
| **`INNER JOIN`** | ❌ Excluded | ✅ Included | ❌ Excluded | Matches Only ($\le N$) |
| **`LEFT JOIN`** | ✅ Included (`NULL`s) | ✅ Included | ❌ Excluded | All Left Rows ($\ge N$) |
| **`RIGHT JOIN`** | ❌ Excluded | ✅ Included | ✅ Included (`NULL`s) | All Right Rows ($\ge M$) |
| **`FULL OUTER JOIN`** | ✅ Included (`NULL`s) | ✅ Included | ✅ Included (`NULL`s) | All Combined Rows |
| **`CROSS JOIN`** | 🔄 Paired with All | 🔄 Paired with All | 🔄 Paired with All | Exactly $N \times M$ Rows |

---

## 🛠️ Common Mistakes & Troubleshooting

| Error / Pitfall | Cause | Recommended Fix |
| :--- | :--- | :--- |
| **`ERROR 1052 (23000): Column 'dept_id' in field list is ambiguous`** | Selecting a column shared by both tables without specifying a table alias. | Prefix the column name with the table alias (`e.dept_id` or `d.dept_id`). |
| **Accidental Cartesian Product (`CROSS JOIN`)** | Omitting the `ON` clause in an `INNER` or `LEFT` join statement. | Always include an `ON e.dept_id = d.dept_id` clause when joining tables. |
| **Converting `LEFT JOIN` to `INNER JOIN`** | Placing right-table filter conditions in the `WHERE` clause instead of `ON`. | Move right-table filter conditions into the `ON` clause (`ON e.dept_id = d.dept_id AND d.dept_name = 'Engineering'`). |
| **Using `FULL OUTER JOIN` in MySQL** | Executing `FULL OUTER JOIN` directly in MySQL (`ERROR 1064`). | Emulate `FULL OUTER JOIN` using `LEFT JOIN ... UNION ... RIGHT JOIN`. |

---

## 🌍 Real-World Usage

- **E-Commerce Applications:** Joining `orders` $\rightarrow$ `order_items` $\rightarrow$ `products` $\rightarrow$ `customers` to generate invoice receipts.
- **Banking Systems:** Joining `accounts` and `transactions` to render monthly account statements.
- **HR & Payroll:** Joining `employees`, `departments`, and `salaries` to process departmental payroll reports.

---

## 🧪 Learning Exercises & Self-Checks

### Exercise 1: Basic Inner Join
Write an `INNER JOIN` query between a `customers` table and an `orders` table to display `customer_name`, `order_id`, and `order_date`.

### Exercise 2: Anti-Join Search
Write a `LEFT JOIN` query to find all customers who have **never placed an order**.

### Exercise 3: Self-Join
Perform a `SELF JOIN` on a `staff` table to display employee names along with their manager names.

---

## 🎯 Mini Challenge

Design a query for a university database with three tables:
- `students` (`student_id`, `student_name`)
- `courses` (`course_id`, `course_name`)
- `enrollments` (`student_id`, `course_id`, `grade`)

Write a query that lists **every student name**, their enrolled **course name**, and their **grade**. If a student is not enrolled in any course, their name must still appear with `NULL` for course name and grade.

<details>
<summary>🔍 Click to view Exercise Solutions & Answer Key</summary>

### Answer Key:

#### Exercise 1 Solution:
```sql
SELECT c.customer_name, o.order_id, o.order_date
FROM customers AS c
INNER JOIN orders AS o ON c.customer_id = o.customer_id;
```

#### Exercise 2 Solution:
```sql
SELECT c.customer_id, c.customer_name
FROM customers AS c
LEFT JOIN orders AS o ON c.customer_id = o.customer_id
WHERE o.order_id IS NULL;
```

#### Exercise 3 Solution:
```sql
SELECT e.emp_name AS employee, m.emp_name AS manager
FROM staff AS e
LEFT JOIN staff AS m ON e.manager_id = m.emp_id;
```

#### Mini Challenge Solution:

```sql
-- Step 1: Create sample university tables
CREATE TABLE IF NOT EXISTS students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    grade VARCHAR(2),
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

-- Step 2: Insert sample data (Student 3 has no enrollments)
INSERT INTO students (student_id, student_name) VALUES (1, 'Rahul'), (2, 'Priya'), (3, 'Amit');
INSERT INTO courses (course_id, course_name) VALUES (101, 'Database Systems'), (102, 'Algorithms');
INSERT INTO enrollments (enrollment_id, student_id, course_id, grade) VALUES (1, 1, 101, 'A'), (2, 2, 102, 'B+');

-- Step 3: Multi-table LEFT JOIN query preserving all students
SELECT 
    s.student_name,
    c.course_name,
    e.grade
FROM students AS s
LEFT JOIN enrollments AS e ON s.student_id = e.student_id
LEFT JOIN courses AS c ON e.course_id = c.course_id
ORDER BY s.student_name;
```

**Expected Output:**

```text
+--------------+------------------+-------+
| student_name | course_name      | grade |
+--------------+------------------+-------+
| Amit         | NULL             | NULL  |
| Priya        | Algorithms       | B+    |
| Rahul        | Database Systems | A     |
+--------------+------------------+-------+
```

*(Explanation: Amit is preserved in the result set with NULL for course_name and grade because a `LEFT JOIN` was used from `students`).*

</details>

---

## 🔗 Related Topics

- [Database & Table Basics (`CREATE TABLE`)](03-databases-and-tables.html)
- [Primary Keys & Foreign Keys](05-keys.html)
- [`GROUP BY` & `HAVING` Clauses](13-group-by-and-having.html)
- [Subqueries & Nested Queries](17-subqueries.html)
- [Set Operations: `UNION` & `EXCEPT`](18-set-operations.html)

---

## 🧭 Navigation

[← Previous: GROUP BY & HAVING](13-group-by-and-having.html) | [SQL Home](./) | [Next: SQL Functions →](15-sql-functions.html)
