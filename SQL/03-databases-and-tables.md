---
layout: default
title: "03 databases and tables"
---

# Database & Table Basics (`CREATE`, `ALTER`, `DROP`)

> 🟢 Beginner

## 📖 Definition

In relational database systems, a **Database** is a named top-level container (or namespace) that holds database objects, while a **Table** is a structured grid inside that database consisting of **Columns** (fields defining data attributes) and **Rows** (individual data records).

**Data Definition Language (DDL)** commands (`CREATE`, `ALTER`, `DROP`, `TRUNCATE`) are the subset of SQL used to create, modify, inspect, and delete database containers and table schemas.

### Core Concepts:
- **Database:** A top-level logical container that isolates one project's tables, views, and security permissions from other applications.
- **Table:** A 2-dimensional grid of rows and columns designed to store a specific type of real-world entity (e.g., `students`, `orders`).
- **Columns (Attributes):** The fixed vertical definitions of a table. Each column has an explicit name, a data type (e.g., `INT`, `VARCHAR`), and optional rules called **constraints** (e.g., `NOT NULL`, `PRIMARY KEY`).
- **Rows (Records):** The dynamic horizontal entries added to a table. Each row represents a single complete instance of the entity.
- **Schema Design:** The process of choosing appropriate column names, data types, and integrity rules before inserting data. Careful schema design prevents data corruption, improves search speed, and saves disk space.

---

## 🇮🇳 Hindi (Roman Script)

Relational database mein **Database** ek main folder (ya container) ki tarah hota hai jiske andar saare **Tables** store hote hain. Single **Table** mein data ko **Columns** (data type aur rules define karne wale fields) aur **Rows** (actual records) ke form mein organize kiya jata hai. Structure banane ke liye `CREATE DATABASE` aur `CREATE TABLE` commands ka use hota hai. Structure change karne ke liye `ALTER TABLE` aur poora table ya database delete karne ke liye `DROP` command ka use hota hai. Data delete karne ke liye `TRUNCATE` (saare rows instantly clear karne ke liye) aur `DELETE` (selective rows delete karne ke liye) ke beech ka fark samajhna zaroori hai.

---

## 🚩 Marathi (Roman Script)

Relational database madhye **Database** ha ek mukhya container asto jyachyat saare **Tables** saathvle jatat. **Table** madhye mahiti **Columns** (data chi attribute niyam) aani **Rows** (actual records) chya swarupat aste. N नवीन Database aani Table tayar karnyasathi `CREATE`, structure madhye badal karnyasathi `ALTER`, aani structure delete karnyasathi `DROP` commands vaparlya jatat. Table poornapane delete karne (`DROP`), fakta saara data empty karne (`TRUNCATE`), aani tharavik rows kadhne (`DELETE`) yanchyat pharak ahe.

---

## 🤔 Why Do We Use It?

Before you can insert customer profiles, store product prices, or query sales records, you must create a structured environment. DDL statements allow you to:

- Create isolated namespaces for different applications (`school_db`, `ecommerce_db`).
- Define exact data types and rules to prevent bad data (e.g., stopping text from being inserted into an `age` or `price` column).
- Evolve your application database over time by adding or modifying table columns safely without recreating the entire database.

---

## 🧠 Simple Explanation & Analogy

Think of Database & Table setup as a **Digital Filing Cabinet**:

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        DATABASE: school_db                             │
│                     ( The Digital Filing Cabinet )                     │
│                                                                        │
│   ┌────────────────────────────────────────────────────────────────┐   │
│   │                     TABLE: students                            │   │
│   │                  ( A Labeled File Drawer )                     │   │
│   │                                                                │   │
│   │   COLUMNS (Form Field Headers):                                │   │
│   │   [ student_id (INT) | student_name (VARCHAR) | age (INT) ]     │   │
│   │                                                                │   │
│   │   ROWS (Filled Application Forms):                             │   │
│   │   Row 1: [ 1           | Rahul                | 20        ]    │   │
│   │   Row 2: [ 2           | Priya                | 21        ]    │   │
│   └────────────────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────────────────┘
```

- **Database (`school_db`):** The physical filing cabinet.
- **Table (`students`):** A specific drawer labeled "Students".
- **Columns:** The pre-printed form headers on the student registration card (`student_id`, `student_name`, `age`).
- **Row:** A completed form for one student filed inside the drawer.

---

## 🗄️ Database Management Commands

Below are the standard DDL statements for managing database containers.

### 1. Create a Database
Creates a new empty database namespace.

```sql
-- Standard SQL Database Creation
CREATE DATABASE school_db;

-- Safeguard: Creates database only if it does not already exist
CREATE DATABASE IF NOT EXISTS school_db;
```

### 2. Display Available Databases *(MySQL / MariaDB Specific)*
Displays a list of all database containers created on the server instance.

```sql
-- MySQL / MariaDB specific command
SHOW DATABASES;
```

> 🌐 **Engine Compatibility Note:** `SHOW DATABASES;` is specific to **MySQL** and **MariaDB**. In **PostgreSQL**, use the `\l` meta-command in `psql` or view databases in pgAdmin. In **SQLite**, databases are individual `.db` files on disk, so this command does not apply.

### 3. Select an Active Database *(MySQL / MariaDB Specific)*
Sets the active database context for subsequent table queries.

```sql
-- MySQL / MariaDB specific command
USE school_db;
```

> 🌐 **Engine Compatibility Note:** `USE database_name;` sets the session context in **MySQL**, **MariaDB**, and **SQL Server**. **PostgreSQL** uses `\c database_name` in `psql` or a GUI selector in pgAdmin.

### 4. Delete a Database *(High Risk!)*
Permanently deletes the database container and **all** tables, views, indexes, and records contained inside it.

```sql
-- Permanent Deletion Warning: This cannot be undone!
DROP DATABASE IF EXISTS school_db;
```

> ⚠️ **Critical Risk Warning:** `DROP DATABASE` permanently destroys all data inside the specified database. Executing this command requires administrative privileges (`DROP` privilege). Never execute `DROP DATABASE` on a production database server!

---

## 📋 Table Creation (`CREATE TABLE`)

Once a database is created and selected, use `CREATE TABLE` to define the table schema, column names, data types, and integrity constraints.

### Practical Example: Creating a `students` Table

```sql
-- Ensure database is selected
USE school_db;

-- Create the students table schema
CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    age INT,
    city VARCHAR(50)
);
```

### 🔍 Column Definition Breakdown:
- **`CREATE TABLE students (...)`**: Tells the database engine to construct a new table named `students`.
- **`student_id INT PRIMARY KEY`**: Defines `student_id` as an integer (`INT`) and marks it as the **Primary Key** (guaranteeing that every student has a unique ID number and no ID is `NULL`).
- **`student_name VARCHAR(100) NOT NULL`**: Defines `student_name` as a variable-length character string up to a maximum of 100 characters. The **`NOT NULL`** constraint ensures this field can never be left empty.
- **`age INT`**: Defines `age` as an integer column.
- **`city VARCHAR(50)`**: Defines `city` as a variable-length string up to 50 characters.

> ℹ️ **Understanding `VARCHAR(n)`:** `VARCHAR(100)` means the column can store up to 100 characters. Unlike fixed-length `CHAR(100)`, `VARCHAR` allocates only the storage space actually used by the text string plus 1-2 length bytes, making it memory-efficient.

---

## 🔍 Table Inspection Commands *(MySQL / MariaDB)*

After creating a table, you can inspect its schema definition and confirm its column structure.

### 1. List All Tables in the Active Database
```sql
SHOW TABLES;
```

### 2. Inspect Column Definitions & Data Types
```sql
-- Displays column names, data types, NULL rules, keys, and default values
DESCRIBE students;

-- Short syntax equivalent:
DESC students;
```

#### 👀 Expected `DESCRIBE students;` Output:

```text
+--------------+--------------+------+-----+---------+-------+
| Field        | Type         | Null | Key | Default | Extra |
+--------------+--------------+------+-----+---------+-------+
| student_id   | int          | NO   | PRI | NULL    |       |
| student_name | varchar(100) | NO   |     | NULL    |       |
| age          | int          | YES  |     | NULL    |       |
| city         | varchar(50)  | YES  |     | NULL    |       |
+--------------+--------------+------+-----+---------+-------+
```

### 3. Display the Exact SQL `CREATE TABLE` DDL Statement
```sql
SHOW CREATE TABLE students;
```

> 🌐 **Other Engines:** In **PostgreSQL**, use `\dt` to list tables and `\d students` to inspect table structure. In **SQLite**, use `.tables` to list tables and `.schema students` to inspect the creation statement.

---

## 🛠️ Modifying Table Structure (`ALTER TABLE`)

Applications evolve over time. Instead of dropping and recreating a table (which destroys existing records), use **`ALTER TABLE`** to modify the schema structure.

### 1. Add a New Column
Adds an `email` column to the existing `students` table:

```sql
ALTER TABLE students
ADD email VARCHAR(150);
```

### 2. Modify an Existing Column's Data Type or Constraints *(MySQL / MariaDB)*
Expands `student_name` length to 150 characters and enforces `NOT NULL`:

```sql
ALTER TABLE students
MODIFY COLUMN student_name VARCHAR(150) NOT NULL;
```

> 🌐 **Dialect Note:** Syntax for modifying column types varies across engines:
> - **MySQL / MariaDB:** `ALTER TABLE students MODIFY COLUMN student_name VARCHAR(150) NOT NULL;`
> - **PostgreSQL:** `ALTER TABLE students ALTER COLUMN student_name TYPE VARCHAR(150);`
> - **SQLite:** SQLite has limited `ALTER TABLE` support. Modifying column types in SQLite often requires creating a new table, copying data, and dropping the old table.

### 3. Rename a Column *(MySQL 8.0+ / Standard SQL)*
Renames the `city` column to `hometown`:

```sql
ALTER TABLE students
RENAME COLUMN city TO hometown;
```

### 4. Drop (Delete) a Column
Permanently removes the `age` column and all data stored within it:

```sql
ALTER TABLE students
DROP COLUMN age;
```

---

## ⚠️ Removing Tables & Data: `DROP` vs `TRUNCATE` vs `DELETE`

Beginners frequently confuse these three commands. Understand their critical differences:

| Command | SQL Category | What It Removes | Table Structure Kept? | Transaction Rollback? | Best Used For |
| :--- | :---: | :--- | :---: | :---: | :--- |
| **`DROP TABLE`** | **DDL** | Removes **everything**: the table definition, indexes, permissions, and all data. | ❌ **No** | ❌ No (in default autocommit) | Deleting an obsolete table entirely from disk. |
| **`TRUNCATE TABLE`** | **DDL** | Instantly empties **all rows** from the table. Resets auto-increment counters. | ✅ **Yes** | ❌ No (in most engines) | Wiping all test data rapidly while keeping empty table schema. |
| **`DELETE FROM`** | **DML** | Removes **specific rows** matching a `WHERE` condition (or all rows if no `WHERE` is given). | ✅ **Yes** | ✅ **Yes** (Inside active transaction) | Selectively removing specific row records safely. |

```sql
-- 1. DROP: Deletes entire table and structure
DROP TABLE IF EXISTS students;

-- 2. TRUNCATE: Empties all rows, keeps empty table structure
TRUNCATE TABLE students;

-- 3. DELETE: Removes specific rows safely
DELETE FROM students WHERE hometown = 'Pune';
```

---

## 🚀 Complete Practical Workflow (MySQL / MariaDB)

Follow this complete, logically ordered workflow from start to finish in phpMyAdmin, MySQL Workbench, or CLI:

```sql
-- Step 1: Create practice database
CREATE DATABASE IF NOT EXISTS school_db;

-- Step 2: Select database session context
USE school_db;

-- Step 3: Create the students table
CREATE TABLE IF NOT EXISTS students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100) NOT NULL,
    age INT,
    city VARCHAR(50)
);

-- Step 4: Inspect table structure
DESCRIBE students;

-- Step 5: Modify table structure by adding an email column
ALTER TABLE students
ADD email VARCHAR(150);

-- Step 6: Verify updated structure
DESCRIBE students;
```

---

## 📊 Adding Sample Data & Viewing Table Results

To see your new table structure in action, let's insert a few sample student records:

```sql
-- Insert 3 sample records into the students table
INSERT INTO students (student_id, student_name, age, city, email)
VALUES 
    (1, 'Rahul', 20, 'Pune', 'rahul@example.com'),
    (2, 'Priya', 21, 'Mumbai', 'priya@example.com'),
    (3, 'Amit', 19, 'Dhule', 'amit@example.com');

-- Query all rows from the table
SELECT * FROM students;
```

#### 👀 Resulting Data Table Output:

```text
+------------+--------------+------+--------+-------------------+
| student_id | student_name | age  | city   | email             |
+------------+--------------+------+--------+-------------------+
|          1 | Rahul        | 20   | Pune   | rahul@example.com |
|          2 | Priya        | 21   | Mumbai | priya@example.com |
|          3 | Amit         | 19   | Dhule  | amit@example.com  |
+------------+--------------+------+--------+-------------------+
```

*(Note: `INSERT` statements will be covered in detail in Topic 6).*

---

## 🛠️ Common Mistakes & Troubleshooting

| Issue / Error Message | Likely Cause | Recommended Fix |
| :--- | :--- | :--- |
| **`ERROR 1046 (3D000): No database selected`** | Attempting to create or inspect tables without selecting a database first. | Run `USE school_db;` or select `school_db` from phpMyAdmin sidebar before running table statements. |
| **`ERROR 1050 (42S01): Table 'students' already exists`** | Attempting to execute `CREATE TABLE students` when it already exists in the database. | Use `CREATE TABLE IF NOT EXISTS students (...);` or check existing tables with `SHOW TABLES;`. |
| **`ERROR 1064 (42000): Syntax Error`** | Forgetting a comma between column definitions in `CREATE TABLE`. | Check that every column definition except the last one is followed by a comma `,`. |
| **`ERROR 1062 (23000): Duplicate entry for key 'PRIMARY'`** | Attempting to insert two records with the same `student_id` Primary Key value. | Ensure every inserted record contains a unique Primary Key integer value. |
| **Destructive `DROP TABLE` Error** | Running `DROP TABLE` accidentally expecting it to only clear rows. | Use `TRUNCATE TABLE` to clear rows while keeping the table, or `DELETE FROM` with `WHERE`. |
| **Dialect Mismatch in `ALTER TABLE`** | Using MySQL `MODIFY COLUMN` syntax inside PostgreSQL or SQLite. | Check target database engine rules: PostgreSQL uses `ALTER COLUMN ... TYPE`, SQLite requires table recreation. |

---

## 🌍 Real-World Usage

In professional software development:

- **Database Migrations:** Engineering teams maintain `.sql` migration files containing `CREATE TABLE` and `ALTER TABLE` statements version-controlled in Git repositories to deploy schema updates across development, staging, and production environments.
- **Microservice Schemas:** E-commerce systems create separate databases (`orders_db`, `users_db`, `inventory_db`) to decouple microservices and optimize table schemas independently.

---

## 🧪 Learning Exercises & Self-Checks

### Question Set 1: Conceptual Check
1. Explain the difference between a **Database** and a **Table** using a real-world analogy.
2. What is the difference between `DROP TABLE` and `TRUNCATE TABLE`?
3. Why is it important to specify column data types (like `INT` or `VARCHAR`) when creating a table?

### Question Set 2: Database Creation
Write the SQL statements to:
1. Safely create a database named `company_db` only if it does not already exist.
2. Select `company_db` as your active database session context.

### Question Set 3: Table Schema Creation
Write a `CREATE TABLE` statement for an `employees` table with the following columns:
- `emp_id`: Integer, Primary Key.
- `full_name`: Variable text up to 100 characters, Cannot be empty.
- `salary`: Decimal supporting values up to `999,999.99` (`DECIMAL(8,2)`).
- `hire_date`: Date field (`DATE`).

### Question Set 4: Altering Table Structure
Write an `ALTER TABLE` statement that adds a `department_id` column of type `INT` to the `employees` table.

---

## 🎯 Mini Challenge

Write the complete SQL script to:
1. Create and select a database named `library_db`.
2. Create a `books` table with:
   - `book_id` (Integer, Primary Key)
   - `title` (Variable text up to 150 characters, Cannot be NULL)
   - `author` (Variable text up to 100 characters)
   - `price` (Decimal, 8 digits total, 2 decimal places)
3. Alter the `books` table to add a `published_year` column of type `INT`.

<details>
<summary>🔍 Click to view Mini Challenge Solution</summary>

```sql
-- Step 1: Create and select library database
CREATE DATABASE IF NOT EXISTS library_db;
USE library_db;

-- Step 2: Create books table
CREATE TABLE IF NOT EXISTS books (
    book_id INT PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    author VARCHAR(100),
    price DECIMAL(8, 2)
);

-- Step 3: Add published_year column
ALTER TABLE books
ADD published_year INT;

-- Step 4: Verify table schema
DESCRIBE books;
```

**Expected `DESCRIBE books;` Output:**

```text
+----------------+--------------+------+-----+---------+-------+
| Field          | Type         | Null | Key | Default | Extra |
+----------------+--------------+------+-----+---------+-------+
| book_id        | int          | NO   | PRI | NULL    |       |
| title          | varchar(150) | NO   |     | NULL    |       |
| author         | varchar(100) | YES  |     | NULL    |       |
| price          | decimal(8,2) | YES  |     | NULL    |       |
| published_year | int          | YES  |     | NULL    |       |
+----------------+--------------+------+-----+---------+-------+
```

</details>

---

## 🔗 Related Topics

- [SQL Data Types & NULL Values](04-data-types-and-null.html)
- [Database Keys (Primary, Foreign & Candidate Keys)](05-keys.html)
- [`INSERT` – Adding Data to Tables](06-insert.html)

---

## 🧭 Navigation

[← Previous: Introduction to SQL](02-introduction-to-sql.html) | [SQL Home](./) | [Next: Data Types & NULL Values →](04-data-types-and-null.html)
