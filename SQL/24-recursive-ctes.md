---
layout: default
title: "24 recursive ctes"
---

# 🔄 Recursive CTEs in SQL

> 🔴 Advanced

## 📖 Definition

A **Recursive CTE** (Common Table Expression) is a self-referencing temporary result set defined using the **`WITH RECURSIVE`** clause. It is used to traverse hierarchical or network graph data structures—such as organizational org charts, multi-level category trees, folder file systems, and bill-of-material assemblies—where the depth of the hierarchy is not known in advance.

A Recursive CTE is composed of four mandatory components:
1. **Anchor Member:** The initial non-recursive query that produces the base result set (e.g., the top-level CEO node at `depth = 0`).
2. **`UNION ALL` Operator:** The set operator that combines the anchor rows with the results of subsequent recursive iterations.
3. **Recursive Member:** An inner query that references the CTE name itself, joining the CTE result set back to the source table to fetch the next level of child records while incrementing a `depth` counter (`depth + 1`).
4. **Termination Condition:** A stopping condition that terminates recursion when the recursive query produces no new rows or hits a system depth limit.

> 🌐 **MySQL Version Requirement:** `WITH RECURSIVE` syntax requires **MySQL 8.0 or later** (or MariaDB 10.2.2+). Earlier MySQL versions (v5.7 and older) do not support recursive CTEs.

---

## 🇮🇳 Hindi (Roman Script)

**Recursive CTE** ek aisi temporary query hoti hai jo apne aap ko baar-baar repeat (call) karti hai jab tak saari hierarchical rows process na ho jaayein. Iska use flexible depth waale parent-child relationship ko traverse karne ke liye kiya jata hai (jaise CEO se lekar junior developer tak ki company org chart). Isme **Anchor Member** (shuruaati root record), **`UNION ALL`**, aur **Recursive Member** (jo CTE ko dobara join karke agla level nikalta hai) hote hain. Recursion tab rukta hai jab recursive member ko aage koi nayi child row nahi milti.

---

## 🚩 Marathi (Roman Script)

**Recursive CTE** mhanje swatachya result la parat parat call karnari query, ji parent-child hierarchy kiva tree structure traverse karnyasathi vaparli jate. `WITH RECURSIVE` cha wapar karun **Anchor Member** (suruvaticha root record) aani **Recursive Member** (pudil star shodhnari query) **`UNION ALL`** dware ekatra kele jatat. Jevha recursive query la navin child rows milat nahit, tevha recursion apohap thambte.

---

## 🤔 Why Do We Use It?

Standard SQL queries using traditional `JOIN`s can only query fixed-depth relationships (e.g., joining `employees` to `managers` once handles 1 level). If an organizational tree or folder structure has an unknown number of nested levels (3 levels deep, 10 levels deep, or 50 levels deep), static `JOIN`s fail.

Recursive CTEs solve this problem by iteratively discovering and building parent-child relationships until the entire tree is traversed.

---

## 🧠 Simple Analogy: Family Tree Ancestry Search

Think of a Recursive CTE as tracing a **Family Tree**:

- **Anchor Member:** You start by listing yourself (Generation 0).
- **`UNION ALL`:** Combining generation levels.
- **Recursive Step:** Looking up the parents of everyone found in the previous step (Generation 1: Parents, Generation 2: Grandparents, Generation 3: Great-Grandparents).
- **Termination:** The search automatically stops when no older ancestor records exist in the family database.

---

## 🏗️ Reproducible Employee Hierarchy Dataset

Let's create an `employees` table representing a 4-level organizational hierarchy:

```sql
-- 1. Drop table if exists for safe re-runs
DROP TABLE IF EXISTS employees;

-- 2. Create Employees Table Schema
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50) NOT NULL,
    job_title VARCHAR(50) NOT NULL,
    manager_id INT, -- Nullable Foreign Key referencing the manager's employee_id
    FOREIGN KEY (manager_id) REFERENCES employees(employee_id)
);

-- 3. Insert 4-level organizational hierarchy
INSERT INTO employees (employee_id, employee_name, job_title, manager_id)
VALUES
    (1, 'Vikram Aditya', 'CEO', NULL),            -- Level 0 (Top Boss)
    (2, 'Suresh Sharma', 'VP Tech', 1),            -- Level 1 (Reports to Vikram)
    (3, 'Rohan Verma', 'VP Sales', 1),             -- Level 1 (Reports to Vikram)
    (4, 'Ananya Roy', 'Tech Lead', 2),             -- Level 2 (Reports to Suresh)
    (5, 'Amit Kumar', 'Senior Dev', 4),             -- Level 3 (Reports to Ananya)
    (6, 'Priya Singh', 'Sales Manager', 3);        -- Level 2 (Reports to Rohan)
```

```text
                        [1] Vikram Aditya (CEO)
                               │
            ┌──────────────────┴──────────────────┐
            ▼                                     ▼
  [2] Suresh Sharma (VP Tech)           [3] Rohan Verma (VP Sales)
            │                                     │
            ▼                                     ▼
  [4] Ananya Roy (Tech Lead)            [6] Priya Singh (Sales Mgr)
            │
            ▼
  [5] Amit Kumar (Senior Dev)
```

---

## 🛠️ Step-by-Step Recursive CTE Query & Walkthrough

Let's write a complete, runnable MySQL 8.0+ recursive CTE query to traverse the organizational chart starting from the CEO (`employee_id = 1`):

```sql
WITH RECURSIVE employee_hierarchy AS (
    -- Anchor Member: Select top-level CEO (depth 0)
    SELECT
        employee_id,
        manager_id,
        employee_name,
        job_title,
        0 AS depth
    FROM employees
    WHERE employee_id = 1

    UNION ALL

    -- Recursive Member: Join base table to previous iteration's CTE result
    SELECT
        e.employee_id,
        e.manager_id,
        e.employee_name,
        e.job_title,
        eh.depth + 1
    FROM employees AS e
    INNER JOIN employee_hierarchy AS eh
        ON e.manager_id = eh.employee_id
)
SELECT
    employee_id,
    manager_id,
    employee_name,
    job_title,
    depth
FROM employee_hierarchy
ORDER BY depth, employee_id;
```

#### 👀 Expected Output:

```text
+-------------+------------+---------------+---------------+-------+
| employee_id | manager_id | employee_name | job_title     | depth |
+-------------+------------+---------------+---------------+-------+
|           1 |       NULL | Vikram Aditya | CEO           |     0 |
|           2 |          1 | Suresh Sharma | VP Tech       |     1 |
|           3 |          1 | Rohan Verma   | VP Sales      |     1 |
|           4 |          2 | Ananya Roy    | Tech Lead     |     2 |
|           6 |          3 | Priya Singh   | Sales Manager |     2 |
|           5 |          4 | Amit Kumar    | Senior Dev    |     3 |
+-------------+------------+---------------+---------------+-------+
```

### 🔍 Step-by-Step Execution Breakdown:
- **Iteration 0 (Anchor):** Evaluates `WHERE employee_id = 1`. Returns **Vikram Aditya** at `depth = 0`.
- **Iteration 1 (Recursive):** Joins `employees` where `manager_id` matches Iteration 0 (`employee_id = 1`). Returns **Suresh Sharma** and **Rohan Verma** at `depth = 1`.
- **Iteration 2 (Recursive):** Joins `employees` where `manager_id` matches Iteration 1 (`employee_id = 2` or `3`). Returns **Ananya Roy** and **Priya Singh** at `depth = 2`.
- **Iteration 3 (Recursive):** Joins `employees` where `manager_id` matches Iteration 2 (`employee_id = 4` or `6`). Returns **Amit Kumar** at `depth = 3`.
- **Iteration 4 (Termination):** Searches for employees whose `manager_id = 5` (Amit Kumar). Returns **0 rows**. Recursion halts!

---

## 🛑 Maximum Depth Safeguard & System Limits

To prevent accidental runaway queries on deep trees, restrict recursion by applying a `depth` condition in the recursive member:

```sql
WITH RECURSIVE employee_hierarchy AS (
    SELECT employee_id, manager_id, employee_name, 0 AS depth
    FROM employees WHERE employee_id = 1

    UNION ALL

    SELECT e.employee_id, e.manager_id, e.employee_name, eh.depth + 1
    FROM employees AS e
    INNER JOIN employee_hierarchy AS eh ON e.manager_id = eh.employee_id
    WHERE eh.depth < 2 -- Stops recursion after depth 2
)
SELECT * FROM employee_hierarchy;
```

> ⚙️ **MySQL `cte_max_recursion_depth` System Variable:**
> By default, MySQL limits recursive CTE iterations to **1,000 steps**. If a query exceeds 1,000 iterations, MySQL halts execution with `ERROR 3636 (HY000): Recursive query aborted after 1001 iterations`. You can adjust this session limit using:
> `SET SESSION cte_max_recursion_depth = 5000;`

---

## 🔄 Cycle Detection & Safe Path Traversal

If invalid parent-child data is inserted (e.g. Employee A's manager is B, B's manager is C, and C's manager is set to A), a **circular cycle** is formed!

```text
[Employee 1] ──► [Employee 2] ──► [Employee 3] ──► (Points back to 1!)
```

### Why Foreign Keys Do Not Prevent Cycles:
A Foreign Key constraint only verifies that the referenced `manager_id` exists in the `employees` table—it does **not** check whether that manager is a descendant!

### Safe Path-Tracking Cycle Prevention in MySQL 8.0+:
In MySQL, prevent cycles by building a string path column (`/1/2/3/`) and verifying that the candidate child ID is not already present in the path using `INSTR()`:

```sql
WITH RECURSIVE safe_hierarchy AS (
    -- Anchor Member: Initialize path string
    SELECT
        employee_id,
        manager_id,
        employee_name,
        0 AS depth,
        CAST(CONCAT('/', employee_id, '/') AS CHAR(500)) AS node_path
    FROM employees
    WHERE employee_id = 1

    UNION ALL

    -- Recursive Member: Prevent cycle by checking path string
    SELECT
        e.employee_id,
        e.manager_id,
        e.employee_name,
        sh.depth + 1,
        CAST(CONCAT(sh.node_path, e.employee_id, '/') AS CHAR(500))
    FROM employees AS e
    INNER JOIN safe_hierarchy AS sh
        ON e.manager_id = sh.employee_id
    -- Cycle Prevention Check: Ensure employee_id is NOT in current node_path
    WHERE INSTR(sh.node_path, CONCAT('/', e.employee_id, '/')) = 0
)
SELECT employee_id, manager_id, employee_name, depth, node_path
FROM safe_hierarchy;
```

> 📌 **Why `CAST(... AS CHAR(500))` is Required:** In MySQL recursive CTEs, the data type and character length of strings in the recursive member must match the anchor member. `CAST(... AS CHAR(500))` explicitly allocates sufficient string buffer memory to prevent path string truncation.
> 📌 **Why Delimiters `/1/2/` are Essential:** Enclosing IDs in slashes (`/1/2/10/`) ensures exact integer ID matching and avoids partial substring matching errors (e.g. preventing ID `2` from falsely matching `20`).

---

## 🔢 Generating Numeric Sequences using Recursive CTEs

You can use a recursive CTE to generate a table of sequential numbers on the fly (e.g. for generating missing calendar dates or series numbers):

```sql
-- Generate integers from 1 to 10
WITH RECURSIVE number_sequence AS (
    -- Anchor Member: Starting number
    SELECT 1 AS num

    UNION ALL

    -- Recursive Member: Increment by 1
    SELECT num + 1
    FROM number_sequence
    WHERE num < 10 -- Termination condition
)
SELECT num FROM number_sequence;
```

#### 👀 Expected Output:

```text
+-----+
| num |
+-----+
|   1 |
|   2 |
| ... |
|  10 |
+-----+
```

---

## 📊 `UNION` vs `UNION ALL` in Recursive CTEs

| Feature | `UNION ALL` (Standard Choice) | `UNION` (Deduplicating) |
| :--- | :--- | :--- |
| **Duplicate Rows** | Retains all generated rows across iterations. | Filters out duplicate identical rows across iterations. |
| **Performance** | **High Performance** (no hash deduplication overhead). | **Slower** (requires sorting/hashing to remove duplicate rows). |
| **Cycle Prevention** | Does **not** stop cycles if changing columns (like `depth`) differ. | Stops duplicate identical rows, but fails if `depth` varies. |
| **Recommendation** | **Always use `UNION ALL`** for tree hierarchies. | Use only when genuine row-level deduplication is intended. |

---

## 🛠️ Common Mistakes & Troubleshooting

| Error Message / Pitfall | Cause | Recommended Fix |
| :--- | :--- | :--- |
| **`ERROR 1146 (42000): Table 'cte_name' doesn't exist`** | Forgetting the mandatory **`RECURSIVE`** keyword (`WITH cte_name AS ...`). | Always write `WITH RECURSIVE cte_name AS ...`. |
| **`ERROR 3636 (HY000): Recursive query aborted after 1001 iterations`** | Runaway infinite loop caused by data cycles or missing `WHERE` termination logic. | Check data for circular manager loops or add path tracking (`INSTR`). Increase `cte_max_recursion_depth` if depth is legitimately >1000. |
| **`ERROR 1406 (22001): Data too long for column`** | Path string concatenation exceeding anchor column width. | Wrap anchor path expression in `CAST(CONCAT(...) AS CHAR(500))`. |
| **Type Mismatch Between Anchor and Recursive Members** | Anchor returns `INT` while recursive member returns `DECIMAL` or `VARCHAR`. | Use `CAST()` in anchor member to align column data types across `UNION ALL`. |
| **Sorting Misconception (`ORDER BY depth`)** | Assuming `ORDER BY depth` outputs a tree branch view. | `ORDER BY depth` groups by hierarchy level. For tree branch order, sort by `node_path`. |

---

## 🌍 Real-World Usage

- **Organizational Reporting:** Displaying full manager-to-employee reporting chains.
- **E-Commerce Category Breadcrumbs:** Generating multi-level product category paths (`Electronics > Computers > Laptops > Gaming Laptops`).
- **File Systems:** Calculating total storage size of nested directories and subfolders.
- **Bill-of-Materials (BOM):** Exploding complex manufactured assemblies into raw component parts lists.

---

## 🧪 Structured Practice Exercises

Follow these 5 progressive exercises using the `employees` table schema above:

### Exercise 1: Hand-Tracing Anchor & Iteration 1
Identify which employee records are returned in the Anchor Member and Iteration 1 when starting from CEO `employee_id = 1`.

### Exercise 2: Sub-Tree Hierarchy Search
Write a recursive CTE that lists all direct and indirect report employees under **Suresh Sharma** (`employee_id = 2`).

### Exercise 3: Depth-Limited Search
Modify the employee hierarchy query to return only employees up to **depth 1** (`WHERE eh.depth < 2`).

### Exercise 4: Calendar Date Series Generation
Write a recursive CTE that generates a sequence of 7 consecutive calendar dates starting from `'2026-10-10'`.

### Exercise 5: Cycle-Safe Path Traversal
Explain why `INSTR(node_path, CONCAT('/', employee_id, '/')) = 0` prevents infinite loops when processing circular graph data.

---

## 🎯 Mini Challenge: E-Commerce Category Breadcrumb Paths

1. Create a `categories` table schema:
   - `category_id` (INT, Primary Key)
   - `category_name` (VARCHAR 50, NOT NULL)
   - `parent_id` (INT — Nullable FK referencing `category_id`)
2. Insert sample categories:
   - ID 1: `'Electronics'`, Parent `NULL`
   - ID 2: `'Computers'`, Parent `1`
   - ID 3: `'Laptops'`, Parent `2`
   - ID 4: `'Gaming Laptops'`, Parent `3`
3. Write a recursive CTE starting from `'Electronics'` (`category_id = 1`) that projects:
   - `category_id`
   - `category_name`
   - `depth`
   - `breadcrumb_path` (e.g. `'Electronics > Computers > Laptops > Gaming Laptops'`)

<details>
<summary>🔍 Click to view Exercise Solutions & Answer Key</summary>

### Answer Key:

#### Exercise 1 Solution:
- **Anchor (Level 0):** `1 | Vikram Aditya | CEO`
- **Iteration 1 (Level 1):** `2 | Suresh Sharma` and `3 | Rohan Verma`

#### Exercise 2 Solution:
```sql
WITH RECURSIVE suresh_team AS (
    SELECT employee_id, manager_id, employee_name, job_title, 0 AS depth
    FROM employees WHERE employee_id = 2 -- Starting at Suresh

    UNION ALL

    SELECT e.employee_id, e.manager_id, e.employee_name, e.job_title, st.depth + 1
    FROM employees AS e
    INNER JOIN suresh_team AS st ON e.manager_id = st.employee_id
)
SELECT * FROM suresh_team ORDER BY depth;
-- Output: Suresh (0), Ananya (1), Amit (2)
```

#### Exercise 3 Solution:
```sql
WITH RECURSIVE employee_hierarchy AS (
    SELECT employee_id, manager_id, employee_name, 0 AS depth
    FROM employees WHERE employee_id = 1

    UNION ALL

    SELECT e.employee_id, e.manager_id, e.employee_name, eh.depth + 1
    FROM employees AS e
    INNER JOIN employee_hierarchy AS eh ON e.manager_id = eh.employee_id
    WHERE eh.depth < 1 -- Limits output to depth 0 and 1
)
SELECT * FROM employee_hierarchy;
```

#### Exercise 4 Solution:
```sql
WITH RECURSIVE date_series AS (
    SELECT CAST('2026-10-10' AS DATE) AS log_date
    UNION ALL
    SELECT DATE_ADD(log_date, INTERVAL 1 DAY)
    FROM date_series
    WHERE log_date < '2026-10-16'
)
SELECT log_date FROM date_series;
```

#### Exercise 5 Solution:
- `INSTR()` checks if `CONCAT('/', employee_id, '/')` is already embedded inside `node_path`. If found (result $>0$), the candidate employee has already been visited in the current path, so the condition evaluates to `FALSE` and halts infinite looping.

#### Mini Challenge Solution:

```sql
-- Step 1: Create categories table schema
CREATE TABLE IF NOT EXISTS categories (
    category_id INT PRIMARY KEY,
    category_name VARCHAR(50) NOT NULL,
    parent_id INT,
    FOREIGN KEY (parent_id) REFERENCES categories(category_id)
);

-- Step 2: Insert category hierarchy
INSERT INTO categories (category_id, category_name, parent_id)
VALUES 
    (1, 'Electronics', NULL),
    (2, 'Computers', 1),
    (3, 'Laptops', 2),
    (4, 'Gaming Laptops', 3);

-- Step 3: Execute Recursive CTE for category breadcrumb paths
WITH RECURSIVE category_tree AS (
    -- Anchor Member
    SELECT 
        category_id,
        category_name,
        0 AS depth,
        CAST(category_name AS CHAR(500)) AS breadcrumb_path
    FROM categories
    WHERE category_id = 1

    UNION ALL

    -- Recursive Member
    SELECT 
        c.category_id,
        c.category_name,
        ct.depth + 1,
        CAST(CONCAT(ct.breadcrumb_path, ' > ', c.category_name) AS CHAR(500))
    FROM categories AS c
    INNER JOIN category_tree AS ct ON c.parent_id = ct.category_id
)
SELECT category_id, category_name, depth, breadcrumb_path
FROM category_tree
ORDER BY depth;
```

**Expected Output:**

```text
+-------------+----------------+-------+----------------------------------------------------+
| category_id | category_name  | depth | breadcrumb_path                                    |
+-------------+----------------+-------+----------------------------------------------------+
|           1 | Electronics    |     0 | Electronics                                        |
|           2 | Computers      |     1 | Electronics > Computers                            |
|           3 | Laptops        |     2 | Electronics > Computers > Laptops                  |
|           4 | Gaming Laptops |     3 | Electronics > Computers > Laptops > Gaming Laptops |
+-------------+----------------+-------+----------------------------------------------------+
```

</details>

---

## 🔗 Related Topics

- [SQL Joins & Table Relationships](14-joins.html)
- [Common Table Expressions (Non-Recursive CTEs)](23-ctes.html)
- [SQL Window Functions](25-window-functions.html)

---

## 🧭 Navigation

[← Previous: Common Table Expressions](23-ctes.html) | [SQL Home](./) | [Next: Window Functions →](25-window-functions.html)
