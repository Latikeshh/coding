---
layout: default
title: "02 introduction to sql"
---

# Introduction to SQL & Databases

> 🟢 Beginner

## 📖 Definition

**SQL (Structured Query Language)** is the standard programming language used to store, manipulate, retrieve, and manage data stored in a **Relational Database Management System (RDBMS)**.

## 🇮🇳 Hindi

SQL ek standardized query language hai jiska use Relational Databases mein data store karne, search karne, update karne, aur manage karne ke liye kiya jata hai. Relational Database mein data organized **Tables** (rows aur columns) mein store hota hai.

## 🚩 Marathi

Relational Database madhye data **Tables** (rows aani columns) chya svarupat saathvla jato. Ya data la manage karnyasathi aani queries run karnyasathi SQL bhashecha wapar kela jato.

## 🤔 Why Do We Use It?

Plain text files or spreadsheets (like Excel) become slow, unreliable, and insecure when handling millions of records, simultaneous multi-user access, or complex data relationships. SQL databases provide high performance, transaction security, fast indexing, and robust data integrity.

## 🧠 Key Database Terminology

- **Database:** A structured collection of data stored electronically on a computer system.
- **RDBMS:** Software system used to manage relational databases (e.g., MySQL, PostgreSQL, SQLite, SQL Server, Oracle).
- **Table:** A collection of related data entries organized in rows and columns (e.g., `customers`, `orders`).
- **Column (Field):** A specific data attribute within a table (e.g., `email`, `first_name`, `price`).
- **Row (Record / Tuple):** A single individual entry or item inside a table.

```text
Table: employees
+----+------------+-----------+------------+
| id | first_name | position  | salary     |  <-- Columns (Fields)
+----+------------+-----------+------------+
| 1  | Rahul      | Developer | 75000.00   |  <-- Row (Record 1)
| 2  | Priya      | Designer  | 65000.00   |  <-- Row (Record 2)
+----+------------+-----------+------------+
```

## 📝 Categories of SQL Commands

SQL commands are classified into major categories based on their functionality:

1. **DQL (Data Query Language):** `SELECT` (Retrieves data from database).
2. **DDL (Data Definition Language):** `CREATE`, `ALTER`, `DROP`, `TRUNCATE` (Defines database structure/schema).
3. **DML (Data Manipulation Language):** `INSERT`, `UPDATE`, `DELETE` (Modifies actual data records).
4. **DCL (Data Control Language):** `GRANT`, `REVOKE` (Manages user access permissions).
5. **TCL (Transaction Control Language):** `COMMIT`, `ROLLBACK`, `SAVEPOINT` (Manages database transactions).

## 💡 Syntax Rules

- SQL keywords are **case-insensitive** (`SELECT` is the same as `select`), but writing keywords in **UPPERCASE** is industry best practice.
- Statements usually end with a semicolon `;`.
- Single-line comments start with `--`, and multi-line comments are enclosed in `/* ... */`.

```sql
-- This is a single-line SQL comment

/*
  This is a multi-line SQL comment
  Query retrieves active employees
*/
SELECT first_name, salary 
FROM employees;
```

## ⚠️ Common Mistakes

- Confusing **SQL** (the language) with **MySQL** or **PostgreSQL** (the database management software systems that execute SQL).
- Not using consistent uppercase formatting for SQL keywords, making complex queries hard to read.

## 🌍 Real-World Usage

SQL powers backend systems behind banking applications, e-commerce platforms (Amazon, Flipkart), streaming services (Netflix, Spotify), and social media networks.

## 🧪 Try It Yourself

1. List the 5 categories of SQL commands and identify which category `SELECT` belongs to.
2. Write a single-line SQL comment stating your favorite database system.

## 🎯 Mini Challenge

Categorize the following commands as DDL, DML, or DQL: `INSERT`, `CREATE TABLE`, `SELECT`, `UPDATE`, `DROP DATABASE`.

## 🔗 Related Topics

- [Set Up SQL Environment](01-setup-sql.md)
- [Database & Table Basics](03-databases-and-tables.md)

## 🧭 Navigation

[← SQL Home](00-README.md) | [← Previous: SQL Setup](01-setup-sql.md) | [Next: Database & Table Basics →](03-databases-and-tables.md)

