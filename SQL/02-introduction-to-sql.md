---
layout: default
title: "02 introduction to sql"
---

# Introduction to SQL & Relational Databases

> 🟢 Beginner

## 📖 Definition

**SQL (Structured Query Language)** is the standardized computer language used to define, query, manipulate, and control data stored in a **Relational Database Management System (RDBMS)**.

To understand relational databases clearly, you must distinguish between the following related concepts:

- **SQL:** The query language itself (the instructions you write).
- **Database:** An organized collection of structured data stored electronically on disk.
- **DBMS (Database Management System):** General software that controls database creation, storage, and retrieval.
- **RDBMS (Relational Database Management System):** A specialized DBMS based on the relational model, where data is organized into tables that can be linked using common identifiers.
- **Database Server:** A background service or process that accepts, processes, and responds to database requests (e.g., MySQL Server, PostgreSQL Server).
- **Database Client:** A tool or software interface (such as phpMyAdmin, MySQL Workbench, pgAdmin, or CLI) used by developers to send queries to a database server.

> 💡 **Important Distinction:** **SQL** is the language, whereas **MySQL**, **PostgreSQL**, **Oracle**, and **SQLite** are specific software engines that implement and execute the SQL language. They are not the same thing. Furthermore, not all RDBMS software uses a client-server model—for instance, **SQLite** is an embedded, file-based database that runs directly inside an application without a separate server process.

---

## 🇮🇳 Hindi (Roman Script)

**SQL (Structured Query Language)** woh bhasha hai jiske zariye hum relational database se baat karte hain. Aapko **SQL** (bhasha) aur **MySQL / PostgreSQL** (software jo SQL execute karte hain) ke beech ka fark samajhna zaroori hai. Relational database mein data **Tables** (rows aur columns) ke form mein organized rehta hai. Tables ke beech ke rishte (relationships) data redundancy ko kam karte hain aur fast search queries chalane mein madad karte hain.

---

## 🚩 Marathi (Roman Script)

**SQL** hi relational database sobat samvad sadhnyasathi vaparli janari pramanit bhasha ahe. **SQL** (bhasha) aani **MySQL / PostgreSQL** (database software) yanchyat pharak ahe. Relational database madhye mahiti **Tables** (rows aani columns) chya swarupat saathvli jate. Vegveglya tables madhil sambandhamule (relationships) data chukiya shivay aani changlya speed ne shodhata yeto.

---

## 🤔 Why Do We Use It?

While simple spreadsheets (like Microsoft Excel) or flat text files work well for small lists, they become unreliable, slow, and insecure when managing enterprise data. Relational databases providing SQL support are essential because they offer:

- **Concurrency & Multi-User Access:** Hundreds of users can safely read and write data simultaneously without corrupting files.
- **Data Integrity & Rules:** Enforces constraints (e.g., ensuring an order cannot exist without a valid customer).
- **High Performance & Indexing:** Quickly retrieves specific records from millions of rows in milliseconds using B-Tree indexes.
- **ACID Transactions:** Guarantees that financial and business operations complete fully or fail safely without leaving partial data.

---

## 🧱 Key Database Terminology

Relational databases organize information into tabular structures. Consider this `employees` table:

```text
employees
+----+------------+-----------+---------+
| id | first_name | position  | salary  |
+----+------------+-----------+---------+
| 1  | Rahul      | Developer | 75000   |
| 2  | Priya      | Designer  | 65000   |
| 3  | Amit       | Tester    | 50000   |
+----+------------+-----------+---------+
```

- **Table:** The main named container (`employees`) representing a single real-world entity type.
- **Columns (Attributes):** The vertical fields (`id`, `first_name`, `position`, `salary`) that define the data type and properties stored for every entry.
- **Row (Record / Tuple):** A single horizontal entry representing one complete entity (e.g., `1 | Rahul | Developer | 75000`).
- **Field:** Informally used to describe an individual column attribute or a specific data cell value at the intersection of a row and column (e.g., `75000`).
- **Primary Key:** A column or combination of columns that uniquely identifies each row in a table. In the table above, `id` serves as a Primary Key (no two employees can share the same `id`).

---

## 🔗 Simple Relational Database Example

Relational databases avoid storing repetitive data in a single giant spreadsheet by splitting information into multiple, smaller related tables.

For example, instead of repeating department names and locations inside every employee record, we create two related tables: `departments` and `employees`.

```text
departments
+---------------+-----------------+
| department_id | department_name |
+---------------+-----------------+
| 10            | Engineering     |
| 20            | Design          |
+---------------+-----------------+

employees
+----+------------+---------------+---------+
| id | first_name | department_id | salary  |
+----+------------+---------------+---------+
| 1  | Rahul      | 10            | 75000   |
| 2  | Priya      | 20            | 65000   |
| 3  | Amit       | 10            | 50000   |
+----+------------+---------------+---------+
```

### How They Connect:
- In `employees`, `department_id = 10` links **Rahul** and **Amit** directly to the **Engineering** department in the `departments` table.
- `department_id = 20` links **Priya** to the **Design** department.
- If the Engineering department renames itself, we update **one single row** in `departments`, and every employee linked via `department_id = 10` automatically reflects the change!

---

## 📝 Categories of SQL Commands

SQL commands are commonly grouped into five functional categories. *(Note: Classification conventions vary in educational references—for example, some textbooks classify `SELECT` under DML, while others place it in its own category as DQL)*.

```text
                      ┌─────────────────────────────────────────┐
                      │          SQL Command Categories         │
                      └────────────────────┬────────────────────┘
        ┌──────────────┬──────────────┬────┴─────────┬──────────────┐
        ▼              ▼              ▼              ▼              ▼
     ┌─────┐        ┌─────┐        ┌─────┐        ┌─────┐        ┌─────┐
     │ DDL │        │ DML │        │ DQL │        │ DCL │        │ TCL │
     └─────┘        └─────┘        └─────┘        └─────┘        └─────┘
   Structure         Data          Queries       Access       Transactions
```

### 1. DDL (Data Definition Language)
Commands that define, alter, or remove database structures and schema objects (tables, indexes, views).
- `CREATE` — Creates new database objects (`CREATE TABLE employees ...;`).
- `ALTER` — Modifies existing table structures (`ALTER TABLE employees ADD email VARCHAR(100);`).
- `DROP` — Permanently deletes a table or database (`DROP TABLE employees;`).
- `TRUNCATE` — Removes all rows from a table while preserving its structure.

### 2. DML (Data Manipulation Language)
Commands used to insert, update, or delete actual data records inside tables.
- `INSERT` — Adds new data rows (`INSERT INTO employees VALUES (4, 'Neha', 'HR', 55000);`).
- `UPDATE` — Modifies existing row values (`UPDATE employees SET salary = 80000 WHERE id = 1;`).
- `DELETE` — Removes specific rows (`DELETE FROM employees WHERE id = 3;`).

### 3. DQL (Data Query Language)
Commands used exclusively to retrieve data from the database.
- `SELECT` — Fetches records matching specified search criteria (`SELECT * FROM employees;`).

### 4. DCL (Data Control Language)
Commands that manage user rights, roles, and security permissions.
- `GRANT` — Gives access permissions to users (`GRANT SELECT ON employees TO user1;`).
- `REVOKE` — Removes previously granted permissions (`REVOKE SELECT ON employees FROM user1;`).

### 5. TCL (Transaction Control Language)
Commands that manage groups of SQL operations executed as a single atomic unit.
- `COMMIT` — Saves changes permanently to disk (`COMMIT;`).
- `ROLLBACK` — Undoes uncommitted changes if an error occurs (`ROLLBACK;`).
- `SAVEPOINT` — Sets a point within a transaction to which you can roll back.

---

## 💡 Syntax Rules & Comments

When writing SQL queries, keep these fundamental syntax rules in mind:

1. **Case Sensitivity:** SQL keywords (`SELECT`, `FROM`, `WHERE`) are general case-insensitive. However, table names, column identifiers, and string literals can be case-sensitive depending on the operating system and database collation configuration. Writing keywords in **UPPERCASE** is a universal readability best practice.
2. **Statement Termination:** Semicolons `;` terminate SQL statements in multi-command scripts and command-line interfaces.
3. **String Literals:** Text values must be enclosed in single quotes `'Rahul'`.
4. **Comments:**
   - **Single-Line Comment:** Starts with `-- ` (double dash followed by a space).
   - **Multi-Line / Block Comment:** Enclosed between `/*` and `*/`.

### Example 1: Single-Line Comment & Simple Select

```sql
-- Retrieve the name and salary of all employees
SELECT first_name, salary
FROM employees;
```

### Example 2: Block Comment & Filtered Query

```sql
/* 
  Query: High Earners Filter
  Author: Learn Coding Team
  Purpose: Fetches employees earning over 60,000
*/
SELECT first_name, salary
FROM employees
WHERE salary > 60000;
```

---

## 🚀 First-Query Walkthrough

You can execute a simple `SELECT` statement in any SQL client without creating or reading from a physical table on disk:

```sql
SELECT
    'Hello, SQL!' AS message,
    2026 AS example_year;
```

### 🔍 Detailed Query Breakdown:
- `SELECT`: Tells the database engine to return or project values.
- `'Hello, SQL!'`: A string literal value.
- `AS message`: Assigns an explicit **Column Alias** (`message`) to the output header.
- `2026`: A numeric literal value.
- `AS example_year`: Assigns a column alias (`example_year`).

#### 👀 Expected Output:

```text
+-------------+--------------+
| message     | example_year |
+-------------+--------------+
| Hello, SQL! |         2026 |
+-------------+--------------+
```

> ℹ️ **Note:** This query evaluates expressions in memory and returns a temporary result set. It does **not** create a database table or save data permanently on disk.

---

## 🌍 Real-World Usage

SQL is used in virtually every industry to manage structured records:

- 🏦 **Banking Systems:** Tracking account balances, deposits, withdrawals, and fraud logs.
- 🛒 **E-Commerce Platforms:** Managing product catalogs, shopping carts, inventory stock, and customer orders.
- 🏢 **HR & Payroll:** Storing employee profiles, attendance records, tax deductions, and salary disbursements.
- 🎓 **Education Portals:** Recording student enrollments, course catalogs, exam marks, and grade histories.
- 📊 **Business Intelligence:** Running complex analytical queries to track quarterly revenue and user retention trends.

---

## ⚠️ Common Mistakes

- **Confusing SQL with MySQL / PostgreSQL:** Assuming "SQL" is a software program you download, rather than the query language executed *by* MySQL or PostgreSQL.
- **Confusing Engine Server with Client Tool:** Expecting a client like MySQL Workbench to work without starting the underlying MySQL server service first.
- **Forgetting Quotes Around String Literals:** Writing `WHERE first_name = Rahul` instead of `WHERE first_name = 'Rahul'`.
- **Confusing `DELETE` and `DROP`:** Using `DROP TABLE` (which deletes the entire table structure) when you intended to use `DELETE FROM` (which removes rows).
- **Missing Semicolon `;`:** Forgetting the trailing semicolon when running multi-statement scripts in CLI tools.

---

## 🧪 Learning Exercises & Self-Checks

### Question Set 1: Conceptual Check
1. Explain the difference between **SQL** and **MySQL** in your own words.
2. What is the difference between a **Database Server** and a **Database Client**?
3. Why do relational databases split data into multiple related tables instead of putting everything into one massive spreadsheet?

### Question Set 2: Identify Table Components
Look at the `employees` table below:

```text
employees
+----+------------+-----------+---------+
| id | first_name | position  | salary  |
+----+------------+-----------+---------+
| 1  | Rahul      | Developer | 75000   |
| 2  | Priya      | Designer  | 65000   |
| 3  | Amit       | Tester    | 50000   |
+----+------------+-----------+---------+
```

1. List all column names in this table.
2. How many total rows (records) are stored in this table?
3. Which column is most suitable as a Primary Key?

### Question Set 3: Command Categorization
Classify each of the following SQL commands into its correct category (**DDL**, **DML**, **DQL**, **DCL**, or **TCL**):
1. `CREATE TABLE`
2. `INSERT INTO`
3. `SELECT`
4. `GRANT`
5. `COMMIT`

### Question Set 4: Syntax Bug Hunt
Identify the syntax error in the following query:

```sql
SELECT first_name, salary FROM employees WHERE first_name = Rahul;
```

---

## 🎯 Mini Challenge

Write a single SQL query using `SELECT` and `AS` aliases that displays two columns:
1. Column 1 named `CourseName` with the value `'SQL Mastery'`.
2. Column 2 named `TotalLessons` with the value `30`.

<details>
<summary>🔍 Click to view Exercise Solutions & Answer Key</summary>

### Answer Key:

#### Question Set 1:
1. **SQL** is the query language used to write commands. **MySQL** is a Relational Database Management System (RDBMS) software that executes SQL commands.
2. A **Database Server** is the background engine process that stores and manages data on disk. A **Database Client** is the tool (like phpMyAdmin or Workbench) where you type queries and view output tables.
3. To eliminate data redundancy, prevent inconsistency when updating records, and improve query speed.

#### Question Set 2:
1. Columns: `id`, `first_name`, `position`, `salary`.
2. Total rows: `3` records.
3. Primary Key: `id` (because it contains unique integer values for each employee).

#### Question Set 3:
1. `CREATE TABLE` $\rightarrow$ **DDL**
2. `INSERT INTO` $\rightarrow$ **DML**
3. `SELECT` $\rightarrow$ **DQL**
4. `GRANT` $\rightarrow$ **DCL**
5. `COMMIT` $\rightarrow$ **TCL**

#### Question Set 4:
- **Error:** `Rahul` is missing single quotes. String literals in SQL must be enclosed in single quotes (`'Rahul'`).
- **Fixed Query:** `SELECT first_name, salary FROM employees WHERE first_name = 'Rahul';`

#### Mini Challenge Solution:

```sql
SELECT 'SQL Mastery' AS CourseName, 30 AS TotalLessons;
```

**Expected Output:**

```text
+-------------+--------------+
| CourseName  | TotalLessons |
+-------------+--------------+
| SQL Mastery |           30 |
+-------------+--------------+
```

</details>

---

## 🔗 Related Topics

- [Set Up SQL Environment](01-setup-sql.html)
- [Database & Table Basics (`CREATE`, `ALTER`, `DROP`)](03-databases-and-tables.html)

---

## 🧭 Navigation

[← Previous: Set Up SQL Environment](01-setup-sql.html) | [SQL Home](./) | [Next: Database & Table Basics →](03-databases-and-tables.html)
