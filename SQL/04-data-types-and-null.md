---
layout: default
title: "04 data types and null"
---

# SQL Data Types & NULL Values

> 🟢 Beginner

## 📖 Definition

Every column in an SQL database table must have a specified **Data Type** that dictates what kind of data (numbers, text, dates) it can hold. Understanding how SQL handles missing or unknown data using the **`NULL`** concept is equally fundamental.

## 🇮🇳 Hindi

SQL Table mein har column ka ek specific Data Type hota hai (jaise Integer, Decimal, Varchar, Date). Missing ya unknown values ko represent karne ke liye **`NULL`** ka use hota hai. Note karein ki `NULL` zero (`0`) ya empty string (`""`) ke barabar nahi hota.

## 🚩 Marathi

Column madhye kontya prakarcha data saathvaycha he Data Type mule tharte. Unknown kiva missing data dakhvanayasathi **`NULL`** cha wapar kela jato. `NULL` mhanje zero kiva empty space nahi.

## 📝 Common SQL Data Types

### 1. Numeric Data Types
- `INT` / `INTEGER`: Standard whole numbers (e.g., `10`, `-500`, `2026`).
- `BIGINT`: Large integers (for large IDs or global transaction counts).
- `DECIMAL(precision, scale)` / `NUMERIC`: Exact numeric value (e.g., `DECIMAL(10,2)` stores up to 10 digits total with 2 after decimal point, like `1499.99`).
- `FLOAT` / `DOUBLE`: Floating-point numbers for scientific calculations.

### 2. Character & String Data Types
- `VARCHAR(n)`: Variable-length character string up to `n` characters (saves storage space).
- `CHAR(n)`: Fixed-length string of exact size `n` (padded with spaces if shorter).
- `TEXT`: Long text documents or descriptions.

### 3. Date & Time Data Types
- `DATE`: Stores date in `YYYY-MM-DD` format (e.g., `'2026-09-29'`).
- `TIME`: Stores time in `HH:MM:SS` format.
- `DATETIME` / `TIMESTAMP`: Stores both date and time (`YYYY-MM-DD HH:MM:SS`).

## 🧠 The Concept of `NULL` in SQL

`NULL` signifies the **absence of a value** or **unknown data**.

- `NULL` is NOT equal to `0`.
- `NULL` is NOT equal to an empty string `""`.
- Any arithmetic operation with `NULL` results in `NULL` (`10 + NULL = NULL`).
- Comparing with `=` will fail (`WHERE col = NULL` is WRONG!). You must use **`IS NULL`** or **`IS NOT NULL`**.

## 💡 Practical Example: Handling Data Types & NULLs

```sql
-- Creating table with various data types
CREATE TABLE customer_leads (
    lead_id INT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15), -- NULL allowed (optional phone)
    estimated_budget DECIMAL(10, 2),
    signup_date DATE DEFAULT (CURRENT_DATE)
);

-- Inserting sample data with NULL values
INSERT INTO customer_leads (lead_id, full_name, phone_number, estimated_budget) 
VALUES 
(1, 'Aarav Mehta', '9876543210', 50000.00),
(2, 'Sneha Kapoor', NULL, 75000.00),          -- Missing phone number
(3, 'Rohan Sharma', '9123456789', NULL);        -- Missing budget

-- Querying records where phone_number IS NULL
SELECT lead_id, full_name, estimated_budget 
FROM customer_leads 
WHERE phone_number IS NULL;

-- Using COALESCE to replace NULL with a default display value
SELECT 
    full_name, 
    COALESCE(phone_number, 'No Phone Provided') AS contact_info,
    COALESCE(estimated_budget, 0.00) AS budget_display
FROM customer_leads;
```

## 👀 Output

```text
Query 1: Leads where phone_number IS NULL
+---------+--------------+------------------+

| lead_id | full_name    | estimated_budget |
+---------+--------------+------------------+

|       2 | Sneha Kapoor |         75000.00 |
+---------+--------------+------------------+

Query 2: Using COALESCE for fallback defaults
+--------------+-------------------+----------------+

| full_name    | contact_info      | budget_display |
+--------------+-------------------+----------------+

| Aarav Mehta  | 9876543210        |       50000.00 |
| Sneha Kapoor | No Phone Provided |       75000.00 |
| Rohan Sharma | 9123456789        |           0.00 |
+--------------+-------------------+----------------+
```

## ⚠️ Common Mistakes

- Writing `WHERE phone = NULL` instead of `WHERE phone IS NULL`.
- Using `CHAR(100)` for variable text names (wastes storage space because short names will be padded with 100 spaces).

## 🌍 Real-World Usage

E-commerce systems use `DECIMAL` for financial currency integrity, `TIMESTAMP` for order audit logs, and `NULL` for optional customer profile fields like middle names or secondary phone numbers.

## 🧪 Try It Yourself

1. Explain why `SELECT 10 + NULL;` outputs `NULL`.
2. Write a query selecting all customer leads where `estimated_budget IS NOT NULL`.

## 🎯 Mini Challenge

Write a query using `COALESCE` that displays a lead's phone number or the string `'N/A'` if the phone number is missing.

## 🔗 Related Topics

- [Database & Table Basics](03-databases-and-tables.html)
- [`INSERT` – Adding Data](05-insert.html)

## 🧭 Navigation

[← SQL Home](./) | [← Previous: Database & Table Basics](03-databases-and-tables.html) | [Next: INSERT – Adding Data →](05-insert.html)


