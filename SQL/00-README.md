---
layout: default
title: "SQL Master Syllabus"
permalink: /SQL/
---

# ⚡ Learn SQL

SQL (Structured Query Language) is the standard language used to communicate with relational databases. It lets you create databases and tables, store and retrieve data, filter and sort records, combine data from multiple tables, modify records, and perform powerful data analysis.

> 🟢 **Beginner to Advanced:** Start with database fundamentals and basic queries, master filtering, sorting, grouping, and joins, then move into subqueries, functions, views, indexes, transactions, constraints, normalization, and advanced SQL techniques.

## 📖 What You Will Learn

* What databases and relational databases are
* SQL syntax, statements, keywords, and comments
* Creating and managing databases and tables
* Inserting, reading, updating, and deleting data
* Filtering data using `WHERE`, `AND`, `OR`, `NOT`, and `BETWEEN`
* Sorting and limiting query results with `ORDER BY` and `LIMIT`
* SQL data types and NULL values
* Aggregate functions such as `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX`
* Grouping data using `GROUP BY` and filtering groups with `HAVING`
* Combining data using `INNER`, `LEFT`, `RIGHT`, and `FULL` joins
* Primary keys, foreign keys, unique constraints, and other constraints
* Subqueries and correlated subqueries
* SQL functions, expressions, and conditional logic
* Views, indexes, and database optimization concepts
* Transactions, `COMMIT`, `ROLLBACK`, and ACID properties
* Database normalization and relational design
* Common Table Expressions (CTEs) and recursive queries
* Window functions and advanced data analysis
* Stored procedures, triggers, and database automation
* Practical SQL projects and real-world database queries

## 📚 Lessons

| #  | Topic                                           | Level           | Link                                          |
| -- | ----------------------------------------------- | --------------- | --------------------------------------------- |
| 01 | Set Up SQL Environment                          | 🟢 Beginner     | [Open lesson](01-setup-sql.md)                |
| 02 | Introduction to SQL & Databases                 | 🟢 Beginner     | [Open lesson](02-introduction-to-sql.md)      |
| 03 | Database & Table Basics                         | 🟢 Beginner     | [Open lesson](03-databases-and-tables.md)     |
| 04 | SQL Data Types & NULL Values                    | 🟢 Beginner     | [Open lesson](04-data-types-and-null.md)      |
| 05 | `INSERT` – Adding Data                          | 🟢 Beginner     | [Open lesson](05-insert.md)                   |
| 06 | `SELECT` – Reading Data                         | 🟢 Beginner     | [Open lesson](06-select.md)                   |
| 07 | Filtering Data with `WHERE`                     | 🟢 Beginner     | [Open lesson](07-where.md)                    |
| 08 | Operators in SQL                                | 🟢 Beginner     | [Open lesson](08-operators.md)                |
| 09 | Sorting & Limiting Results                      | 🟢 Beginner     | [Open lesson](09-order-by-and-limit.md)       |
| 10 | `UPDATE` & `DELETE`                             | 🟢 Beginner     | [Open lesson](10-update-and-delete.md)        |
| 11 | SQL Constraints                                 | 🟡 Intermediate | [Open lesson](11-constraints.md)              |
| 12 | Primary Keys & Foreign Keys                     | 🟡 Intermediate | [Open lesson](12-primary-and-foreign-keys.md) |
| 13 | Aggregate Functions                             | 🟡 Intermediate | [Open lesson](13-aggregate-functions.md)      |
| 14 | `GROUP BY` & `HAVING`                           | 🟡 Intermediate | [Open lesson](14-group-by-and-having.md)      |
| 15 | SQL Joins                                       | 🟡 Intermediate | [Open lesson](15-joins.md)                    |
| 16 | SQL String, Numeric & Date Functions            | 🟡 Intermediate | [Open lesson](16-sql-functions.md)            |
| 17 | Conditional Logic with `CASE`                   | 🟡 Intermediate | [Open lesson](17-case-expressions.md)         |
| 18 | Subqueries & Nested Queries                     | 🟡 Intermediate | [Open lesson](18-subqueries.md)               |
| 19 | Set Operations (`UNION`, `INTERSECT`, `EXCEPT`) | 🟡 Intermediate | [Open lesson](19-set-operations.md)           |
| 20 | Database Relationships & Normalization          | 🟡 Intermediate | [Open lesson](20-normalization.md)            |
| 21 | Views & Virtual Tables                          | 🟡 Intermediate | [Open lesson](21-views.md)                    |
| 22 | Indexes & Query Performance                     | 🔴 Advanced     | [Open lesson](22-indexes-and-performance.md)  |
| 23 | Transactions & ACID                             | 🔴 Advanced     | [Open lesson](23-transactions.md)             |
| 24 | Common Table Expressions (CTEs)                 | 🔴 Advanced     | [Open lesson](24-ctes.md)                     |
| 25 | Recursive CTEs                                  | 🔴 Advanced     | [Open lesson](25-recursive-ctes.md)           |
| 26 | Window Functions                                | 🔴 Advanced     | [Open lesson](26-window-functions.md)         |
| 27 | Stored Procedures & Functions                   | 🔴 Advanced     | [Open lesson](27-stored-procedures.md)        |
| 28 | Triggers                                        | 🔴 Advanced     | [Open lesson](28-triggers.md)                 |
| 29 | SQL Security & Permissions                      | 🔴 Advanced     | [Open lesson](29-sql-security.md)             |
| 30 | Practical SQL Projects                          | 🔴 Advanced     | [Open lesson](30-sql-projects.md)             |

## 🎯 Suggested Learning Flow

`01–04 SQL & Database Fundamentals` → `05–10 CRUD & Query Basics` → `11–15 Constraints, Keys & Joins` → `16–20 Functions, Subqueries & Database Design` → `21–23 Views, Indexes & Transactions` → `24–26 CTEs & Advanced Queries` → `27–29 Procedures, Triggers & Security` → `30 Practical Projects`

## 🧪 Practice Routine

For each lesson:

1. Read the explanation and study the SQL examples.
2. Run every query using your SQL environment.
3. Create your own database and tables instead of only copying examples.
4. Insert different types of data and experiment with the queries.
5. Change conditions, joins, functions, and values to observe the results.
6. Test edge cases such as `NULL`, duplicate values, and empty results.
7. Solve the **Try It Yourself** and **Mini Challenge** tasks.
8. Review the generated result and understand why the query produced it.

## 🗄️ Recommended SQL Environments

You can practice SQL using:

* MySQL
* PostgreSQL
* SQLite
* Microsoft SQL Server
* MariaDB
* Oracle Database
* Online SQL playgrounds

> ⚠️ SQL syntax can vary between database systems. Most fundamental SQL concepts are shared, but features such as date functions, `LIMIT`, stored procedures, and some advanced syntax may differ between MySQL, PostgreSQL, SQL Server, Oracle, and SQLite.

## ✅ Progress Checklist

* [ ] I understand what SQL and relational databases are.
* [ ] I can create databases and tables.
* [ ] I understand SQL data types and `NULL`.
* [ ] I can insert, select, update, and delete records.
* [ ] I can filter and sort query results.
* [ ] I understand primary keys and foreign keys.
* [ ] I can use SQL constraints correctly.
* [ ] I can use aggregate functions such as `COUNT`, `SUM`, and `AVG`.
* [ ] I can group data using `GROUP BY` and `HAVING`.
* [ ] I understand and can use different types of joins.
* [ ] I can write subqueries and nested queries.
* [ ] I understand database relationships and normalization.
* [ ] I can create and use views.
* [ ] I understand indexes and basic query optimization.
* [ ] I understand transactions, `COMMIT`, `ROLLBACK`, and ACID.
* [ ] I can write CTEs and recursive queries.
* [ ] I can use window functions for advanced data analysis.
* [ ] I understand stored procedures and triggers.
* [ ] I understand basic database security and permissions.
* [ ] I have built practical SQL projects using real-world datasets.

## 🧭 Navigation

[← Repository Home](../README.md) | [Start with Lesson 01 →](01-setup-sql.md)

