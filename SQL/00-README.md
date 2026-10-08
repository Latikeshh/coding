---
layout: default
title: "SQL Master Syllabus"
permalink: /SQL/
---

# ⚡ Learn SQL Database & Querying

SQL (Structured Query Language) is the global standard language for relational database management systems. It enables software engineers, data analysts, and backend developers to design database schemas, enforce relational integrity via Primary and Foreign Keys, write efficient data queries, perform complex multi-table joins, build analytical reports, and optimize performance.

> 🟢 **Beginner to Advanced:** Start with database setup and table design, master Primary/Foreign Keys and CRUD operations, learn advanced filtering, grouping, and multi-table Joins, then build advanced analytical queries using Subqueries, CTEs, Window Functions, Views, Indexes, Transactions, JSON Data, and Stored Procedures.

---

## 📖 What You Will Learn

- Relational database architecture, DBMS components, and SQL execution order
- Creating databases and tables with `CREATE DATABASE` and `CREATE TABLE`
- Data types (`INT`, `VARCHAR`, `DECIMAL`, `DATE`, `TIMESTAMP`) and `NULL` handling
- Enforcing schema integrity using `PRIMARY KEY`, `FOREIGN KEY`, `NOT NULL`, `UNIQUE`, `CHECK`, and `DEFAULT`
- Inserting records into parent and child tables safely using `INSERT INTO`
- Reading, querying, filtering, and sorting records with `SELECT`, `WHERE`, `ORDER BY`, and `LIMIT`
- Multi-condition logical operators (`AND`, `OR`, `NOT`, `BETWEEN`, `IN`, `LIKE`)
- Modifying and removing table records safely with `UPDATE` and `DELETE`
- Aggregate functions (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) and handling `NULL`s with `COALESCE`
- Summarizing data using `GROUP BY` and filtering aggregated groups using `HAVING`
- Combining relational data using `INNER`, `LEFT`, `RIGHT`, `FULL`, and `CROSS` joins
- Built-in string, numeric, date/time, and type-conversion functions
- Conditional logic with `CASE` expressions in `SELECT`, `ORDER BY`, and aggregations
- Modular query design using Subqueries, CTEs (`WITH` clause), and Recursive CTEs
- Set operations (`UNION`, `UNION ALL`, `INTERSECT`, `EXCEPT`)
- Database normalization standards (1NF, 2NF, 3NF) and ER relationship design
- Creating Virtual Views and Materialized Views for reporting and security abstraction
- B-Tree Indexes, query execution plans (`EXPLAIN ANALYZE`), and query optimization
- Transaction management (`BEGIN`, `COMMIT`, `ROLLBACK`) and ACID properties
- Advanced analytical queries using SQL Window Functions (`OVER`, `PARTITION BY`, `ROW_NUMBER`, `RANK`)
- Working with `JSON` and `JSONB` semi-structured data inside relational database columns
- Database automation using Stored Procedures, Functions, Triggers, and Security Grants
- Real-world capstone SQL projects and database administration scripts

---

## 📚 Complete Lesson Index

| # | Topic | Level | Link |
| :---: | :--- | :---: | :--- |
| **01** | Set Up SQL Environment | 🟢 Beginner | [Open lesson](01-setup-sql.html) |
| **02** | Introduction to SQL & Databases | 🟢 Beginner | [Open lesson](02-introduction-to-sql.html) |
| **03** | Database & Table Basics (`CREATE`, `ALTER`, `DROP`) | 🟢 Beginner | [Open lesson](03-databases-and-tables.html) |
| **04** | SQL Data Types & NULL Values | 🟢 Beginner | [Open lesson](04-data-types-and-null.html) |
| **05** | Database Keys (Primary, Foreign, Composite, Candidate & Surrogate Keys) | 🟢 Beginner | [Open lesson](05-keys.html) |
| **06** | `INSERT` – Adding Data to Tables with Keys | 🟢 Beginner | [Open lesson](06-insert.html) |
| **07** | `SELECT` – Reading & Querying Data | 🟢 Beginner | [Open lesson](07-select.html) |
| **08** | Filtering Data with `WHERE` | 🟢 Beginner | [Open lesson](08-where.html) |
| **09** | Operators in SQL | 🟢 Beginner | [Open lesson](09-operators.html) |
| **10** | Sorting & Limiting Results (`ORDER BY`, `LIMIT`) | 🟢 Beginner | [Open lesson](10-order-by-and-limit.html) |
| **11** | `UPDATE` & `DELETE` – Modifying Data | 🟢 Beginner | [Open lesson](11-update-and-delete.html) |
| **12** | Aggregate Functions (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) | 🟡 Intermediate | [Open lesson](12-aggregate-functions.html) |
| **13** | `GROUP BY` & `HAVING` Clauses | 🟡 Intermediate | [Open lesson](13-group-by-and-having.html) |
| **14** | SQL Joins & Table Relationships | 🟡 Intermediate | [Open lesson](14-joins.html) |
| **15** | SQL Built-in String, Numeric & Date Functions | 🟡 Intermediate | [Open lesson](15-sql-functions.html) |
| **16** | Conditional Logic with `CASE` | 🟡 Intermediate | [Open lesson](16-case-expressions.html) |
| **17** | Subqueries & Nested Queries | 🟡 Intermediate | [Open lesson](17-subqueries.html) |
| **18** | Set Operations (`UNION`, `INTERSECT`, `EXCEPT`) | 🟡 Intermediate | [Open lesson](18-set-operations.html) |
| **19** | Database Relationships & Normalization (1NF–3NF) | 🟡 Intermediate | [Open lesson](19-normalization.html) |
| **20** | Views & Virtual Tables | 🟡 Intermediate | [Open lesson](20-views.html) |
| **21** | Indexes & Query Performance (`EXPLAIN`) | 🔴 Advanced | [Open lesson](21-indexes-and-performance.html) |
| **22** | Transactions & ACID Properties | 🔴 Advanced | [Open lesson](22-transactions.html) |
| **23** | Common Table Expressions (CTEs) | 🔴 Advanced | [Open lesson](23-ctes.html) |
| **24** | Recursive CTEs & Hierarchical Data | 🔴 Advanced | [Open lesson](24-recursive-ctes.html) |
| **25** | SQL Window Functions (`OVER`, `PARTITION BY`) | 🔴 Advanced | [Open lesson](25-window-functions.html) |
| **26** | Stored Procedures & Functions | 🔴 Advanced | [Open lesson](26-stored-procedures.html) |
| **27** | Triggers & Automated Events | 🔴 Advanced | [Open lesson](27-triggers.html) |
| **28** | SQL Security, Roles & Permissions | 🔴 Advanced | [Open lesson](28-sql-security.html) |
| **29** | Working with JSON Data in Relational SQL (`JSON` & `JSONB`) | 🔴 Advanced | [Open lesson](29-json-data-in-sql.html) |
| **30** | Practical SQL Capstone Projects | 🔴 Advanced | [Open lesson](30-sql-projects.html) |

---

## 🎯 Suggested Learning Flow

`01–05 Database Design & Keys` $\rightarrow$ `06–11 CRUD Operations & Query Filtering` $\rightarrow$ `12–14 Aggregation & Joins` $\rightarrow$ `15–19 Functions, Subqueries & Normalization` $\rightarrow$ `20–22 Views, Indexes & Transactions` $\rightarrow$ `23–25 CTEs & Window Functions` $\rightarrow$ `26–29 JSON Data, Procedures, Triggers & Security` $\rightarrow$ `30 Capstone Projects`

---

## 🧭 Navigation

[← Repository Home](../README.md) | [Start with Lesson 01 →](01-setup-sql.html)
