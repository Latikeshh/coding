---
layout: default
title: "08 where"
---

# Filtering Data with `WHERE`

> 🟢 Beginner

## 📖 Definition

The **`WHERE`** clause is used in SQL statements (`SELECT`, `UPDATE`, `DELETE`) to filter table records based on one or more boolean search conditions.

The database engine evaluates the `WHERE` condition for every candidate row:
- **`TRUE`:** The row satisfies the condition and is included in the query result (or affected by `UPDATE`/`DELETE`).
- **`FALSE`:** The row fails the condition and is excluded.
- **`UNKNOWN` (due to `NULL`):** The condition evaluates to unknown and the row is excluded.

---

## 🇮🇳 Hindi (Roman Script)

Database table se specific conditions ke aadhar par data filter karne ke liye **`WHERE`** clause ka use hota hai. `WHERE` clause se aap `SELECT` (data dekhne), `UPDATE` (data modify karne), aur `DELETE` (data hatane) queries mein exact rows ko target kar sakte hain. Multiple conditions combine karne ke liye **`AND`**, **`OR`**, aur **`NOT`** ka use hota hai. Sahi logic ke liye parentheses `()` ka istemal karna zaroori hai kyunki SQL mein `AND` ki priority `OR` se zyada hoti hai.

---

## 🚩 Marathi (Roman Script)

Database table madhun tharavik conditions nusar data filter karnyasathi **`WHERE`** clause vaparla jato. Phakta ja rows sathi condition **`TRUE`** hote tech records result madhye disat. Multiple conditions ekatra karnyasathi **`AND`**, **`OR`**, aani **`NOT`** cha wapar hoto. SQL madhye `AND` chi precedence (priority) `OR` peksha jast aslyamule konshta (parentheses `()`) vaparne garjeche ahe.

---

## 🤔 Why Do We Use It?

Executing queries without a `WHERE` clause processes or returns **every single row** in the table. Using `WHERE` is critical because:

- **Precision:** Focuses queries on exact business records (e.g., finding orders for customer #101 or users from 'Mumbai').
- **Query Performance:** Reduces the number of records scanned and processed by the database engine, dramatically speeding up response times.
- **Safety:** Prevents catastrophic accidental data loss (e.g., executing `DELETE FROM staff;` without `WHERE` wipes out the entire table!).

---

## 🧠 Simple Analogy: The Security Gate Check

Think of a `WHERE` clause as a **Security Guard at an Event Gate**:

- **The Event Attendees:** Every row in the `staff` table.
- **`SELECT * FROM staff;`**: Opening the gates and letting everyone enter without checking tickets.
- **`WHERE city = 'Mumbai'`**: The Security Guard asking every attendee: *"Are you from Mumbai?"*
  - Attendees who answer **"Yes" (`TRUE`)** pass through the gate.
  - Attendees who answer **"No" (`FALSE`)** are turned away.
  - Attendees whose location is **unrecorded (`NULL` / `UNKNOWN`)** are also stopped at the gate!

---

## 🔢 1. Comparison Operators Matrix

SQL provides standard comparison operators to evaluate scalar column values:

| Operator | Meaning / Description | Example Query |
| :---: | :--- | :--- |
| **`=`** | Equal to | `WHERE city = 'Mumbai'` |
| **`<>`** / **`!=`** | Not equal to (both supported by MySQL) | `WHERE department != 'HR'` |
| **`>`** | Greater than | `WHERE salary > 70000.00` |
| **`<`** | Less than | `WHERE age < 30` |
| **`>=`** | Greater than or equal to | `WHERE salary >= 85000.00` |
| **`<=`** | Less than or equal to | `WHERE age <= 25` |

> 🌐 **Note on String Case Sensitivity:** In MySQL (with default collations like `utf8mb4_0900_ai_ci`), string comparisons are **case-insensitive** by default. Searching for `WHERE city = 'mumbai'` will match `'Mumbai'`, `'MUMBAI'`, and `'mumbai'`.

---

## 🔀 2. Logical Operators: `AND`, `OR`, `NOT` & Parentheses `()`

When filtering by multiple criteria, combine boolean expressions using logical operators:

- **`AND`:** Returns rows where **ALL** conditions evaluate to `TRUE`.
- **`OR`:** Returns rows where **AT LEAST ONE** condition evaluates to `TRUE`.
- **`NOT`:** Negates a condition (returns rows where the condition is `FALSE`).

### 🚨 Operator Precedence Rule: `AND` Over `OR`
In SQL boolean algebra, **`AND` has higher precedence than `OR`**!

```sql
-- ❌ Without Parentheses (Evaluates as: city = 'Mumbai' OR (city = 'Delhi' AND salary > 80000))
SELECT * FROM staff
WHERE city = 'Mumbai' OR city = 'Delhi' AND salary > 80000;
-- Result: Returns ALL Mumbai staff regardless of salary, PLUS Delhi staff earning > 80000!

-- ✅ With Parentheses (Evaluates as: (city = 'Mumbai' OR city = 'Delhi') AND salary > 80000)
SELECT * FROM staff
WHERE (city = 'Mumbai' OR city = 'Delhi') AND salary > 80000;
-- Result: Correctly returns staff from Mumbai OR Delhi WHO ALSO earn > 80000!
```

---

## 🔍 3. Useful Filtering Patterns: `BETWEEN`, `IN`, and `LIKE`

In addition to basic comparison operators, SQL provides high-level filtering shortcuts:

### A. Range Searching (`BETWEEN min AND max`)
Filters values within a specified range, **inclusive of both endpoints**:

```sql
SELECT name, salary
FROM staff
WHERE salary BETWEEN 65000.00 AND 95000.00;
-- Equivalent to: WHERE salary >= 65000.00 AND salary <= 95000.00
```

### B. List Matching (`IN (value1, value2, ...)`)
Matches a column value against a list of options (a clean alternative to multiple `OR` equality checks):

```sql
SELECT name, city
FROM staff
WHERE city IN ('Mumbai', 'Bengaluru');
-- Equivalent to: WHERE city = 'Mumbai' OR city = 'Bengaluru'
```

### C. Pattern Matching (`LIKE 'pattern'`)
Searches for string pattern matches using SQL wildcards:
- **`%` Wildcard:** Matches **zero or more** characters.
- **`_` Wildcard:** Matches **exactly one** character.

```sql
-- Finds names starting with 'A' (e.g. 'Ananya', 'Amit')
SELECT name FROM staff WHERE name LIKE 'A%';

-- Finds names where the second letter is 'i' (e.g. 'Vikram', 'Kiran')
SELECT name FROM staff WHERE name LIKE '_i%';
```

---

## ❓ 4. Handling `NULL` Values in `WHERE` Clauses

As covered in Topic 4, **`NULL` represents missing or unknown data**.

### The `NULL` Comparison Error:
Comparing a column to `NULL` using ordinary equality operators (`= NULL` or `!= NULL`) evaluates to **`UNKNOWN`**, which fails in `WHERE` filtering and returns 0 rows!

```sql
-- ❌ WRONG! Always returns 0 rows:
SELECT * FROM staff WHERE city = NULL;

-- ✅ CORRECT: Use IS NULL or IS NOT NULL
SELECT * FROM staff WHERE city IS NULL;
SELECT * FROM staff WHERE city IS NOT NULL;
```

> 📌 **`NOT` Operator and `NULL`:** Evaluating `WHERE NOT (salary > 80000)` will **not** include rows where `salary` is `NULL`, because `NOT (UNKNOWN)` remains `UNKNOWN`!

---

## 🛠️ Complete Practical Workflow & Staff Example

Let's create a MySQL-compatible `staff` table and run filtering queries demonstrating multi-condition `AND`, `OR`, `BETWEEN`, and parentheses precedence.

```sql
-- 1. Create table schema
CREATE TABLE IF NOT EXISTS staff (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    age INT NOT NULL,
    city VARCHAR(50) NOT NULL
);

-- 2. Insert sample staff records using explicit column syntax
INSERT INTO staff (emp_id, name, department, salary, age, city)
VALUES 
    (101, 'Ananya Roy', 'Engineering', 95000.00, 28, 'Mumbai'),
    (102, 'Vikram Sharma', 'Engineering', 65000.00, 24, 'Delhi'),
    (103, 'Kiran Deshmukh', 'Marketing', 70000.00, 32, 'Mumbai'),
    (104, 'Siddharth Verma', 'HR', 55000.00, 29, 'Bengaluru'),
    (105, 'Meera Nair', 'Engineering', 105000.00, 35, 'Mumbai');
```

---

### Query 1: Filter Engineering Staff in Mumbai Earning > 90,000

```sql
SELECT name, department, salary, city 
FROM staff 
WHERE department = 'Engineering' 
  AND city = 'Mumbai' 
  AND salary > 90000.00;
```

#### 👀 Expected Output:

```text
+------------+-------------+-----------+--------+
| name       | department  | salary    | city   |
+------------+-------------+-----------+--------+
| Ananya Roy | Engineering |  95000.00 | Mumbai |
| Meera Nair | Engineering | 105000.00 | Mumbai |
+------------+-------------+-----------+--------+
```

---

### Query 2: Filter Staff in Mumbai OR Bengaluru Who Are Under 30

```sql
SELECT name, city, age 
FROM staff 
WHERE (city = 'Mumbai' OR city = 'Bengaluru') 
  AND age < 30;
```

#### 👀 Expected Output:

```text
+-----------------+-----------+-----+
| name            | city      | age |
+-----------------+-----------+-----+
| Ananya Roy      | Mumbai    |  28 |
| Siddharth Verma | Bengaluru |  29 |
+-----------------+-----------+-----+
```

---

### Query 3: Filter Staff Salary Range Using `BETWEEN`

```sql
SELECT name, department, salary
FROM staff
WHERE salary BETWEEN 65000.00 AND 95000.00;
```

#### 👀 Expected Output:

```text
+----------------+-------------+----------+
| name           | department  | salary   |
+----------------+-------------+----------+
| Ananya Roy     | Engineering | 95000.00 |
| Vikram Sharma  | Engineering | 65000.00 |
| Kiran Deshmukh | Marketing   | 70000.00 |
+----------------+-------------+----------+
```

---

## 🛠️ Common Mistakes & Troubleshooting

| Error Message / Pitfall | Cause | Recommended Fix |
| :--- | :--- | :--- |
| **`ERROR 1054 (42S22): Unknown column 'Mumbai' in 'where clause'`** | Forgetting single quotes around string literals (`WHERE city = Mumbai`). | Always enclose text string literals in single quotes (`WHERE city = 'Mumbai'`). |
| **`WHERE column = NULL` Returns 0 Rows** | Using equality `=` operator to compare `NULL` values. | Use `IS NULL` or `IS NOT NULL` for checking missing values. |
| **Unexpected Rows When Combining `AND` & `OR`** | Relying on default precedence where `AND` evaluates before `OR`. | Use explicit parentheses `(cond1 OR cond2) AND cond3` to enforce logic. |
| **Assuming `BETWEEN` Excludes Endpoints** | Assuming `BETWEEN 65000 AND 95000` excludes 65000 or 95000. | Remember that `BETWEEN` is **inclusive** of both minimum and maximum values. |
| **`LIKE` Pattern Missing `%` Wildcards** | Writing `WHERE name LIKE 'Ananya'` (acts as exact `=` match). | Add `%` wildcards for partial matching: `WHERE name LIKE 'Ananya%'`. |

---

## 🌍 Real-World Usage

- **E-Commerce Price Sliders:** Executing `SELECT * FROM products WHERE category = 'Laptops' AND price BETWEEN 40000 AND 80000`.
- **Targeted Email Marketing:** Querying `SELECT email FROM users WHERE country = 'India' AND last_login_date >= '2026-01-01'`.
- **Fraud Monitoring:** Filtering transactions where `amount > 50000 AND status = 'PENDING'`.

---

## 🧪 Learning Exercises & Self-Checks

### Exercise 1: Basic Comparison Filtering
Write an SQL query to select all staff members earning less than `70000.00`.

### Exercise 2: Excluding Specific Departments
Write a query to select all staff members who do **not** work in the `'HR'` department (`!= 'HR'`). Explain how `NULL` values would be handled if a staff record had an unassigned nullable department.

### Exercise 3: Pattern & List Matching
Write a query to select all staff members whose names start with the letter `'A'` AND whose city is in `('Mumbai', 'Delhi')`.

---

## 🎯 Mini Challenge

Write an SQL query to retrieve staff members who are in **either** the `'Engineering'` **or** `'Marketing'` department **AND** have a salary greater than `68000.00`.

Make sure to enforce explicit evaluation grouping using parentheses `()`.

<details>
<summary>🔍 Click to view Exercise Solutions & Answer Key</summary>

### Answer Key:

#### Exercise 1 Solution:
```sql
SELECT name, department, salary 
FROM staff 
WHERE salary < 70000.00;
```

#### Exercise 2 Solution:
```sql
SELECT name, department 
FROM staff 
WHERE department != 'HR';
```
*(Note: If a row has `department IS NULL`, `department != 'HR'` evaluates to `UNKNOWN` and the row is excluded. To include nullable records, write `WHERE department != 'HR' OR department IS NULL`).*

#### Exercise 3 Solution:
```sql
SELECT name, city 
FROM staff 
WHERE name LIKE 'A%' 
  AND city IN ('Mumbai', 'Delhi');
```

#### Mini Challenge Solution:

```sql
SELECT name, department, salary
FROM staff
WHERE (department = 'Engineering' OR department = 'Marketing')
  AND salary > 68000.00;
```

**Expected Output:**

```text
+----------------+-------------+-----------+
| name           | department  | salary    |
+----------------+-------------+-----------+
| Ananya Roy     | Engineering |  95000.00 |
| Kiran Deshmukh | Marketing   |  70000.00 |
| Meera Nair     | Engineering | 105000.00 |
+----------------+-------------+-----------+
```

</details>

---

## 🔗 Related Topics

- [Database & Table Basics (`CREATE TABLE`)](03-databases-and-tables.html)
- [`SELECT` – Reading & Querying Data](07-select.html)
- [Operators in SQL (`BETWEEN`, `IN`, `LIKE`)](09-operators.html)
- [Sorting & Limiting Results (`ORDER BY`, `LIMIT`)](10-order-by-and-limit.html)

---

## 🧭 Navigation

[← Previous: SELECT Querying Data](07-select.html) | [SQL Home](./) | [Next: Operators in SQL →](09-operators.html)
