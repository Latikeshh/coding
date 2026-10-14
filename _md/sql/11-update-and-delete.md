---
layout: default
title: "11 update and delete"
---

# `UPDATE` & `DELETE` – Modifying Data

> 🟢 Beginner

## 📖 Definition

- **`UPDATE`:** A **Data Manipulation Language (DML)** command that modifies existing column values in specific database table rows.
- **`DELETE`:** A DML command that permanently removes specific data rows from a database table based on a filtering condition.

Both `UPDATE` and `DELETE` modify table contents on disk, making proper condition filtering with **`WHERE`** clauses and data safety protocols essential for database administration.

---

## 🇮🇳 Hindi (Roman Script)

Existing database records ko modify karne ke liye **`UPDATE`** aur unnecessary records ko delete karne ke liye **`DELETE FROM`** command ka use hota hai. 

> 🚨 **CRITICAL WARNING:** `UPDATE` ya `DELETE` queries chalate waqt **`WHERE`** clause hamesha lagana zaroori hai! Agar aap bina `WHERE` clause ke `UPDATE` ya `DELETE` run karenge, toh **poore table ka data ek saath modify ya delete ho jayega**! Hamesha query run karne se pehle `SELECT` statement se target rows ko test aur verify karein.

---

## 🚩 Marathi (Roman Script)

Table madhil existing data badalnyasathi **`UPDATE`** aani data delete karnyasathi **`DELETE FROM`** command vaparatat.

> 🚨 **CRITICAL WARNING:** `UPDATE` kiva `DELETE` query linitana **`WHERE`** condition lihine atyanta garjeche ahe! `WHERE` condition na lihilyas **poorna table madhil data badlel kiva delete hoil**. Query run karnya purvi hamesha `SELECT` query dware target rows तपासून (verify karun) ghya.

---

## 🤔 Why Do We Use It?

Databases are dynamic systems where information changes continuously over time. You need `UPDATE` and `DELETE` commands to:

- Modify customer account details (e.g., updating phone numbers or home addresses).
- Change application state flags (e.g., updating an order status from `'Pending'` to `'Shipped'`).
- Perform relative financial adjustments (e.g., increasing departmental salaries by 10% or adding a bonus).
- Remove obsolete or closed records (e.g., deleting canceled registrations or purged accounts).

---

## 🧠 Simple Analogy: Student Report Cards

Think of database table operations as managing **Student Report Cards**:

- **`SELECT`:** Opening a student's file folder and reading their marks on screen.
- **`UPDATE`:** Taking an eraser, updating an existing grade from `80` to `90`, and writing it back onto the card.
- **`DELETE`:** Taking a withdrawn student's file folder out of the cabinet and placing it in the paper shredder.
- **Omitting `WHERE` Clause:** Erasing the grade on **every single student card in the entire university filing cabinet**!

---

## 📝 1. Modifying Data (`UPDATE`)

### A. Updating a Single Column
To update a single column for a specific record, specify the column name and the new target value in the `SET` clause:

```sql
UPDATE employee_accounts
SET salary = 62000.00
WHERE emp_id = 103;
```

---

### B. Updating Multiple Columns in One Statement
To modify multiple columns simultaneously, separate column assignment pairs with commas in the `SET` clause:

```sql
UPDATE employee_accounts
SET status = 'Active',
    salary = 58000.00
WHERE emp_id = 104;
```

---

### C. Relative Arithmetic Updates (Fixed vs Percentage Assignment)

You can assign a fixed value or perform relative arithmetic updates using the column's current value:

- **Fixed Assignment:** `SET salary = 58000.00` $\rightarrow$ Sets salary to exactly $58,000.00 regardless of its previous value.
- **Relative Arithmetic Update:** `SET salary = salary * 1.10` $\rightarrow$ Calculates a 10% increase on the employee's current salary.

```sql
-- Increase Engineering department salaries by 10%
UPDATE employee_accounts
SET salary = salary * 1.10
WHERE department = 'Engineering';
```

> ⚠️ **Compounding Warning:** Executing a relative arithmetic update (`salary = salary * 1.10`) multiple times continuously compounds the calculation! Running it twice turns an $80,000 salary into $88,000, and then into $96,800.

---

### 🛡️ Safe 3-Step `UPDATE` Workflow:

To prevent accidental data corruption, always follow this 3-step execution pattern:

```sql
-- Step 1: PREVIEW target rows first using SELECT
SELECT emp_id, first_name, department, salary
FROM employee_accounts
WHERE department = 'Engineering';

-- Step 2: EXECUTE the UPDATE query
UPDATE employee_accounts
SET salary = salary * 1.10
WHERE department = 'Engineering';

-- Step 3: VERIFY the modified rows
SELECT emp_id, first_name, department, salary
FROM employee_accounts
WHERE department = 'Engineering';
```

---

## 🗑️ 2. Removing Data (`DELETE`)

The `DELETE FROM` statement removes specific rows matching a `WHERE` condition.

### A. Deleting a Specific Record Using Primary Key

```sql
-- Deleting employee #102
DELETE FROM employee_accounts
WHERE emp_id = 102;
```

---

### B. Deleting Multiple Rows Matching a Condition

```sql
-- Deleting all employees whose status is 'Resigned'
DELETE FROM employee_accounts
WHERE status = 'Resigned';
```

---

### 🛡️ Safe 3-Step `DELETE` Workflow:

```sql
-- Step 1: PREVIEW target rows to be deleted
SELECT * FROM employee_accounts
WHERE status = 'Resigned';

-- Step 2: EXECUTE the DELETE query
DELETE FROM employee_accounts
WHERE status = 'Resigned';

-- Step 3: VERIFY that target rows have been removed (should return 0 rows)
SELECT * FROM employee_accounts
WHERE status = 'Resigned';
```

---

## 🔐 3. Data Safety & MySQL Transactions (`START TRANSACTION`)

In enterprise databases supporting transactional storage engines (such as MySQL **InnoDB**), you can wrap `UPDATE` and `DELETE` statements inside a transaction block to test changes safely before saving them permanently.

```sql
-- 1. Start a safe, temporary transaction block
START TRANSACTION;

-- 2. Execute candidate UPDATE or DELETE statement
UPDATE employee_accounts
SET salary = salary * 1.10
WHERE department = 'Engineering';

-- 3. Inspect modified records within the uncommitted transaction session
SELECT * FROM employee_accounts WHERE department = 'Engineering';

-- 4. IF SATISFIED, save changes permanently:
COMMIT;

-- OR IF AN ERROR OCCURRED, undo all changes and restore original data:
-- ROLLBACK;
```

> 🌐 **Transaction Compatibility & Rules:**
> - Transactions require a transactional storage engine like MySQL **InnoDB** (default in MySQL 5.5+). Older MyISAM tables do not support transaction rollbacks.
> - **`ROLLBACK`** must be called **before** `COMMIT`. Once `COMMIT` is executed, changes are written to disk permanently.
> - In MySQL, executing DDL commands (`TRUNCATE TABLE`, `DROP TABLE`, `ALTER TABLE`) triggers an **implicit commit**, terminating any active transaction block.

---

## 📊 4. `DELETE` vs `TRUNCATE` Comparison

Beginners frequently ask whether to use `DELETE FROM` or `TRUNCATE TABLE` when clearing table data:

| Feature | `DELETE FROM table_name` | `TRUNCATE TABLE table_name` |
| :--- | :--- | :--- |
| **SQL Category** | **DML** (Data Manipulation Language) | **DDL** (Data Definition Language) |
| **Condition Filtering** | Accepts `WHERE` clause to delete specific rows. | Does **NOT** accept `WHERE`. Empties all rows unconditionally. |
| **Execution Method** | Deletes rows individually, logging each deletion. | Re-initializes the table data pages on disk instantly. |
| **Auto-Increment Counter** | Preserves current `AUTO_INCREMENT` sequence number. | Resets `AUTO_INCREMENT` counter back to `1`. |
| **Transaction Rollback** | Fully rollbackable inside InnoDB transaction blocks. | Causes an implicit commit in MySQL; cannot be rolled back. |
| **Best Used For** | Selectively removing specific row records safely. | Instantly wiping all test rows while preserving empty table schema. |

---

## 🛠️ Complete Practical Workflow & Employee Example

Let's execute a complete MySQL-compatible workflow creating an `employee_accounts` table, inserting 4 initial records, and applying sequential `UPDATE` and `DELETE` operations.

```sql
-- 1. Create table schema
CREATE TABLE IF NOT EXISTS employee_accounts (
    emp_id INT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    department VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    status VARCHAR(20) DEFAULT 'Active'
);

-- 2. Insert initial sample records using explicit column syntax
INSERT INTO employee_accounts (emp_id, first_name, last_name, department, salary, status)
VALUES 
    (101, 'Ananya', 'Roy', 'Engineering', 80000.00, 'Active'),
    (102, 'Priya', 'Sharma', 'HR', 50000.00, 'Resigned'),
    (103, 'Kiran', 'Deshmukh', 'Marketing', 60000.00, 'Active'),
    (104, 'Siddharth', 'Verma', 'HR', 52000.00, 'On Leave');

-- Step A: Apply a 10% salary increase to Engineering department
UPDATE employee_accounts
SET salary = salary * 1.10
WHERE department = 'Engineering';

-- Step B: Update multiple columns for Siddharth Verma (ID 104)
UPDATE employee_accounts
SET status = 'Active',
    salary = 58000.00
WHERE emp_id = 104;

-- Step C: Delete employees whose status is 'Resigned'
DELETE FROM employee_accounts
WHERE status = 'Resigned';

-- Step D: Retrieve final remaining active records
SELECT emp_id, CONCAT(first_name, ' ', last_name) AS full_name, department, salary, status
FROM employee_accounts;
```

#### 👀 Expected Final Output:

```text
+--------+-----------------+-------------+----------+--------+
| emp_id | full_name       | department  | salary   | status |
+--------+-----------------+-------------+----------+--------+
|    101 | Ananya Roy      | Engineering | 88000.00 | Active |
|    103 | Kiran Deshmukh  | Marketing   | 60000.00 | Active |
|    104 | Siddharth Verma | HR          | 58000.00 | Active |
+--------+-----------------+-------------+----------+--------+
```

### 🔍 Verification Breakdown:
1. **Ananya Roy (ID 101):** Salary increased by 10% from $80,000.00 to **$88,000.00**.
2. **Priya Sharma (ID 102):** Removed completely from table because her status was `'Resigned'`.
3. **Kiran Deshmukh (ID 103):** Remained unchanged ($60,000.00, Active).
4. **Siddharth Verma (ID 104):** Status updated to `'Active'` and salary updated to **$58,000.00**.

---

## 🛠️ Common Mistakes & Troubleshooting

| Error / Pitfall | Cause | Recommended Fix |
| :--- | :--- | :--- |
| **Accidental Bulk Overwrite (`UPDATE` without `WHERE`)** | Running `UPDATE employee_accounts SET salary = 90000;` without `WHERE`. | **Always** test filter conditions with `SELECT` before running `UPDATE`! |
| **Accidental Bulk Table Wipe (`DELETE` without `WHERE`)** | Running `DELETE FROM employee_accounts;` without `WHERE`. | Use `SELECT` first to verify target rows before deleting. |
| **Forgetting Quotes Around Strings in `SET`** | Writing `SET status = Active` without single quotes. | Enclose text strings in single quotes: `SET status = 'Active'`. |
| **Accidentally Compounding Relative Updates** | Re-running `SET salary = salary * 1.10` multiple times by mistake. | Use `SELECT` to verify current values before re-running arithmetic updates. |
| **Confusing `DELETE FROM` with `DROP TABLE`** | Running `DROP TABLE` expecting it to only clear row records. | Use `DELETE FROM` to remove rows; `DROP TABLE` permanently deletes the entire table structure! |
| **Expecting `ROLLBACK` After `COMMIT`** | Calling `ROLLBACK` after `COMMIT` was already executed. | `ROLLBACK` must be called *before* `COMMIT` in an uncommitted transaction session. |

---

## 🌍 Real-World Usage

- **E-Commerce Order Management:** Executing `UPDATE orders SET status = 'Shipped' WHERE order_id = 88412;`.
- **Account Security:** Executing `UPDATE users SET password_hash = '...' WHERE user_id = 42;`.
- **Session Cleanup Services:** Running `DELETE FROM active_sessions WHERE last_activity < '2026-10-01';` nightly.

---

## 🧪 Learning Exercises & Self-Checks

### Exercise A: Department Transfer
Write an `UPDATE` statement to change **Kiran Deshmukh's** (`emp_id = 103`) department to `'Sales'`.

### Exercise B: Safe Deletion Test
Write a `DELETE` statement to remove any employee whose salary is **less than `50000.00`**.
- *Self-Check:* Explain why running this query against the updated sample table above deletes **0 rows** safely.

---

## 🎯 Mini Challenge

For all employees working in the **`'HR'`** department, write a single `UPDATE` statement that:
1. Sets their `status` to `'Reviewed'`.
2. Adds a flat bonus of **`2000.00`** to their current salary (using relative arithmetic addition `salary = salary + 2000.00`).

<details>
<summary>🔍 Click to view Exercise Solutions & Answer Key</summary>

### Answer Key:

#### Exercise A Solution:
```sql
UPDATE employee_accounts
SET department = 'Sales'
WHERE emp_id = 103;
```

#### Exercise B Solution:
```sql
DELETE FROM employee_accounts
WHERE salary < 50000.00;
```
- **Explanation:** In our updated table output above, the remaining salaries are $88,000.00, $60,000.00, and $58,000.00. Because no employee earns below $50,000.00, the condition evaluates to `FALSE` for all rows and 0 rows are deleted.

#### Mini Challenge Solution:

```sql
UPDATE employee_accounts
SET status = 'Reviewed',
    salary = salary + 2000.00
WHERE department = 'HR';
```

**Verification Query:**

```sql
SELECT emp_id, CONCAT(first_name, ' ', last_name) AS full_name, department, salary, status
FROM employee_accounts
WHERE department = 'HR';
```

**Expected Output:**

```text
+--------+-----------------+------------+----------+----------+
| emp_id | full_name       | department | salary   | status   |
+--------+-----------------+------------+----------+----------+
|    104 | Siddharth Verma | HR         | 60000.00 | Reviewed |
+--------+-----------------+------------+----------+----------+
```

*(Note: Siddharth Verma's salary increases from $58,000.00 to $60,000.00 and his status changes to `'Reviewed'`).*

</details>

---

## 🔗 Related Topics

- [Database & Table Basics (`CREATE TABLE`)](03-databases-and-tables.html)
- [Filtering Data with `WHERE`](08-where.html)
- [Sorting & Limiting Results (`ORDER BY`, `LIMIT`)](10-order-by-and-limit.html)
- [Aggregate Functions (`COUNT`, `SUM`, `AVG`)](12-aggregate-functions.html)

---

## 🧭 Navigation

[← Previous: Sorting & Limiting Results](10-order-by-and-limit.html) | [SQL Home](./) | [Next: Aggregate Functions →](12-aggregate-functions.html)
