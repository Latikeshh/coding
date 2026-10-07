---
layout: default
title: "10 order by and limit"
---

# Sorting & Limiting Results (`ORDER BY`, `LIMIT`)

> 🟢 Beginner

## 📖 Definition

- **`ORDER BY`:** Sorts the retrieved query results in ascending (`ASC`) or descending (`DESC`) order based on one or more columns.
- **`LIMIT` / `OFFSET`:** Restricts the number of returned rows and specifies starting offsets for web application pagination.

## 🇮🇳 Hindi

Query results ko sort karne ke liye `ORDER BY` clause ka use hota hai (`ASC` for low-to-high, `DESC` for high-to-low). Query se fixed number of rows return karne ke liye `LIMIT` ka use hota hai (jaise Top 5 items dikhane ke liye). Page-by-page pagination ke liye `OFFSET` use hota hai.

## 🚩 Marathi

Results cha kram (sorting) badalnyasathi `ORDER BY` (ASC/DESC) vaparatat. Phakta tharavik rows dakhvanyasathi `LIMIT` aani pagination sathi `OFFSET` vaparla jato.

## 📝 Syntax Breakdown

### 1. Sorting Results (`ORDER BY`)
```sql
SELECT column1, column2 
FROM table_name 
ORDER BY column1 ASC, column2 DESC;
```
- `ASC`: Ascending order (A to Z, 1 to 9, oldest date to newest date). Default if omitted.
- `DESC`: Descending order (Z to A, 9 to 1, newest date to oldest date).

### 2. Limiting Rows (`LIMIT` & `OFFSET`)
```sql
-- MySQL / PostgreSQL / SQLite syntax
SELECT column1, column2 
FROM table_name 
ORDER BY price DESC 
LIMIT 5 OFFSET 10;
```
- `LIMIT 5`: Returns a maximum of 5 rows.
- `OFFSET 10`: Skips the first 10 rows before returning results (used for Page 2 pagination!).

*(Note: Microsoft SQL Server uses `TOP 5` or `OFFSET 10 ROWS FETCH NEXT 5 ROWS ONLY` instead of `LIMIT`).*

## 💡 Practical Example: E-Commerce Leaderboard Query

```sql
-- Customers Table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    full_name VARCHAR(100),
    city VARCHAR(50),
    total_spent DECIMAL(10, 2)
);

INSERT INTO customers VALUES 
(1, 'Aarav Mehta', 'Mumbai', 125000.00),
(2, 'Sneha Kapoor', 'Delhi', 45000.00),
(3, 'Rohan Sharma', 'Mumbai', 89000.00),
(4, 'Ananya Roy', 'Bengaluru', 210000.00),
(5, 'Kiran Deshmukh', 'Mumbai', 125000.00),
(6, 'Priya Verma', 'Delhi', 150000.00);

-- Query 1: Top 3 highest spending customers overall
SELECT full_name, city, total_spent 
FROM customers 
ORDER BY total_spent DESC 
LIMIT 3;

-- Query 2: Multi-column sorting (City A-Z, then highest spending first)
SELECT full_name, city, total_spent 
FROM customers 
ORDER BY city ASC, total_spent DESC;
```

## 👀 Output

```text
Query 1 (Top 3 Spenders):
+---------------+-----------+-------------+

| full_name     | city      | total_spent |
+---------------+-----------+-------------+

| Ananya Roy    | Bengaluru |   210000.00 |
| Priya Verma   | Delhi     |   150000.00 |
| Aarav Mehta   | Mumbai    |   125000.00 |
+---------------+-----------+-------------+

Query 2 (Sorted by City ASC, Total Spent DESC):
+---------------+-----------+-------------+

| full_name     | city      | total_spent |
+---------------+-----------+-------------+

| Ananya Roy    | Bengaluru |   210000.00 |
| Priya Verma   | Delhi     |   150000.00 |
| Sneha Kapoor  | Delhi     |    45000.00 |
| Aarav Mehta   | Mumbai    |   125000.00 |
| Kiran Deshmukh| Mumbai    |   125000.00 |
| Rohan Sharma  | Mumbai    |    89000.00 |
+---------------+-----------+-------------+
```

## ⚠️ Common Mistakes

- Using `LIMIT` without an explicit `ORDER BY` clause. Without `ORDER BY`, the database returns arbitrary rows!
- Placing `ORDER BY` or `LIMIT` before the `WHERE` clause (SQL clause order MUST be: `SELECT` -> `FROM` -> `WHERE` -> `ORDER BY` -> `LIMIT`).

## 🌍 Real-World Usage

"Top 10 Trending Songs", "Highest Rated Products", leaderboard rankings, search result sorting (Price: Low to High), and e-commerce pagination controls.

## 🧪 Try It Yourself

1. Write a query to get the top 5 cheapest items from an inventory table (`ORDER BY price ASC LIMIT 5`).
2. Write a query for Page 2 of a blog list showing 10 posts per page (`LIMIT 10 OFFSET 10`).

## 🎯 Mini Challenge

Write a query to display the 2nd highest spending customer from the `customers` table using `ORDER BY`, `LIMIT`, and `OFFSET`.

## 🔗 Related Topics

- [Operators in SQL](08-operators.html)
- [`UPDATE` & `DELETE`](10-update-and-delete.html)

## 🧭 Navigation

[← SQL Home](./) | [← Previous: Operators in SQL](08-operators.html) | [Next: UPDATE & DELETE →](10-update-and-delete.html)


