---
layout: default
title: "03 databases and tables"
---

# Database & Table Basics (`CREATE`, `ALTER`, `DROP`)

> 🟢 Beginner

## 📖 Definition

**Data Definition Language (DDL)** commands allow you to create, modify, and delete database structures including databases, tables, columns, and constraints.

## 🇮🇳 Hindi

Database aur Tables banane aur unke structure ko change karne ke liye DDL commands ka use hota hai. `CREATE DATABASE` se naya database banta hai, `CREATE TABLE` se new table structure design hota hai, `ALTER TABLE` se existing columns modify/add hote hain, aur `DROP` se structure completely delete ho jata hai.

## 🚩 Marathi

Database aani Tables cha structure tayar karnyasathi `CREATE` command vaparatat. Structure madhye badal karnyasathi `ALTER` aani table kiva database poornapane delete karnyasathi `DROP` command cha wapar hoto.

## 📝 Key DDL Statements

- `CREATE DATABASE database_name;`: Creates a new empty database.
- `USE database_name;`: Selects the active database (MySQL/SQL Server).
- `CREATE TABLE table_name (...);`: Defines a new table schema with column names and data types.
- `ALTER TABLE table_name ...;`: Modifies an existing table's columns or structure.
- `DROP TABLE table_name;`: Removes a table definition and its data, subject to the database's transaction and recovery behavior.
- `TRUNCATE TABLE table_name;`: Removes all rows while keeping the table definition; availability and exact behavior vary by database.

## 💡 Practical Example: Complete DDL Script

```sql
-- 1. Create a new database
CREATE DATABASE shop_db;

-- 2. Select the active database
USE shop_db;

-- 3. Create a products table
CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    price DECIMAL(10, 2),
    stock_quantity INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Alter table: Add a new column 'discount_percent'
ALTER TABLE products 
ADD discount_percent INT DEFAULT 0;

-- 5. Alter table: Drop a column 'category'
ALTER TABLE products 
DROP COLUMN category;
```

## 🔍 Code Breakdown

- `INT PRIMARY KEY`: Unique integer identifier for each record.
- `VARCHAR(100) NOT NULL`: Variable text string up to 100 characters that cannot be empty (`NULL`).
- `DECIMAL(10, 2)`: Fixed precision number allowing up to 10 total digits with 2 decimal places (ideal for currency like `9999.99`).
- `DEFAULT 0`: Assigns `0` automatically if no value is provided during row insertion.

## ⚠️ Difference Between `DROP` vs `TRUNCATE` vs `DELETE`

| Command | Category | Action | Structure Kept? |
|---|---|---|---|
| `DROP TABLE` | Usually DDL | Removes the table definition and its data | ❌ No |
| `TRUNCATE TABLE` | Classification varies | Removes all rows while keeping the table definition | ✅ Yes |
| `DELETE FROM` | DML | Removes specific rows based on `WHERE` condition | ✅ Yes |

> The DDL/DML classification, transaction rollback support, trigger behavior, identity-counter handling, and performance of `TRUNCATE` vary by database. Do not assume it is always faster than `DELETE` or impossible to roll back; check your database documentation.

## ⚠️ Common Mistakes

- Forgetting that `DROP TABLE` removes both the table definition and its data; whether a transaction or backup can recover it depends on the database and setup.
- Trying to create a table before selecting an active database (`USE database_name;`).

## 🌍 Real-World Usage

Software architects write DDL migration scripts to set up application schemas for production databases, e-commerce inventories, and user management systems.

## 🧪 Try It Yourself

1. Write a statement to create a database named `company_db`.
2. Write a `CREATE TABLE` query for an `employees` table with columns: `emp_id` (INT), `full_name` (VARCHAR 100), and `salary` (DECIMAL 10,2).

## 🎯 Mini Challenge

Write an `ALTER TABLE` statement that adds an `email` column of type `VARCHAR(150)` to the `employees` table.

## 🔗 Related Topics

- [SQL Data Types & NULL Values](04-data-types-and-null.md)
- [`INSERT` – Adding Data](05-insert.md)

## 🧭 Navigation

[← SQL Home](00-README.md) | [← Previous: Introduction to SQL](02-introduction-to-sql.md) | [Next: SQL Data Types & NULL →](04-data-types-and-null.md)

