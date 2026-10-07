---
layout: default
title: "29 json data in sql"
---

# 📦 Working with JSON Data in Relational SQL (`JSON` & `JSONB`)

> 🔴 Advanced

## 📖 Definition

Modern relational database management systems (PostgreSQL, MySQL 8.0+, SQLite, and SQL Server) natively support the **`JSON` and `JSONB` (Binary JSON) data types**. This allows developers to store, query, index, and manipulate semi-structured document data directly alongside traditional relational tables without needing a separate NoSQL database (like MongoDB).

---

## 🌐 Multilingual Explanation

### English
Relational databases no longer restrict you to strict tabular structures. The native `JSON` column type lets you store flexible, nested document attributes (such as user preferences, dynamic product specifications, or API payload logs) inside standard SQL tables, querying them using specialized JSON extraction operators (`->`, `->>`) and functions.

### Hindi (Roman Script)
Modern SQL databases (Jaise PostgreSQL aur MySQL) mein aap `JSON` format ka semi-structured data store kar sakte hain. Iska matlab hai ki aapko har dynamic attribute ke liye alag column ya table banane ki zaroori nahi hai. Aap JSON operators (`->` aur `->>`) se JSON ke andar se data search aur filter kar sakte hain.

### Marathi (Roman Script)
Modern Relational Databases madhye `JSON` data type waparun semi-structured document data store karta yeto. MongoDB saarkhya NoSQL database chi garaj na padta, SQL madhyech JSON keys filter aani query karta yetat.

### Hinglish
Microservices aur REST APIs mein JSON sabse common data format hai. RDBMS mein `JSONB` (Binary JSON) use karne se data compressed form mein store hota hai aur GIN Indexes ki madad se JSON attributes par fast search query chalti hai.

---

## 📝 JSON Operators & Functions Comparison

| Operator / Function | Database Engine | Description | Output Type | Example Usage |
| :--- | :--- | :--- | :--- | :--- |
| **`->`** | PostgreSQL / MySQL / SQLite | Extracts JSON object by key or array index. | `JSON` | `metadata->'address'` |
| **`->>`** | PostgreSQL / MySQL / SQLite | Extracts JSON value as plain text string. | `TEXT` | `metadata->>'city'` |
| **`JSON_EXTRACT()`** | MySQL / SQLite | Extracts JSON value using JSON path syntax. | `JSON` / `TEXT` | `JSON_EXTRACT(data, '$.city')` |
| **`JSON_OBJECT()`** | Standard SQL | Constructs a JSON object from key-value pairs. | `JSON` | `JSON_OBJECT('id', 1, 'name', 'Rohan')` |
| **`JSON_ARRAY()`** | Standard SQL | Constructs a JSON array from scalar values. | `JSON` | `JSON_ARRAY('Red', 'Blue', 'Green')` |

---

## 💡 Practical Complete Production Examples

### Example 1: Creating a Table with JSON Columns & Inserting Documents

```sql
-- 1. Create a table storing dynamic product attributes in JSON format
CREATE TABLE e_commerce_products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    
    -- Native JSON column for flexible, dynamic specifications
    attributes JSON NOT NULL
);

-- 2. Insert records with dynamic JSON specifications
INSERT INTO e_commerce_products (product_name, category, price, attributes)
VALUES 
(
    'Smartphone Pro Max', 
    'Electronics', 
    999.00, 
    '{"storage": "256GB", "color": "Space Gray", "ram": "8GB", "5g_supported": true}'
),
(
    'Ergonomic Mesh Chair', 
    'Furniture', 
    299.00, 
    '{"color": "Black", "max_weight_kg": 150, "adjustable_armrests": true}'
),
(
    'Wireless Gaming Headset', 
    'Electronics', 
    149.00, 
    '{"battery_life_hours": 30, "color": "Black", "noise_cancelling": true}'
);
```

---

### Example 2: Querying & Extracting JSON Fields

```sql
-- Extracting storage and RAM from the JSON column
SELECT 
    product_name,
    price,
    -- Extracting as plain text using ->>
    attributes->>'color' AS item_color,
    attributes->>'storage' AS storage_capacity,
    attributes->>'ram' AS system_ram
FROM e_commerce_products
WHERE category = 'Electronics';
```

#### Expected Query Output:

| product_name | price | item_color | storage_capacity | system_ram |
| :--- | :---: | :---: | :---: | :---: |
| Smartphone Pro Max | 999.00 | Space Gray | 256GB | 8GB |
| Wireless Gaming Headset | 149.00 | Black | NULL | NULL |

---

### Example 3: Filtering Records Based on JSON Key Values

Find all electronic products where `color` is `'Black'` and `5g_supported` is `true`:

```sql
SELECT product_name, price, attributes
FROM e_commerce_products
WHERE attributes->>'color' = 'Black'
   OR (attributes->>'5g_supported')::boolean = TRUE;
```

---

### Example 4: Creating a GIN Index on JSON Columns (PostgreSQL Performance)

Accelerate JSON search queries on large tables with millions of rows:

```sql
-- Create a Generalized Inverted Index (GIN) on the JSONB column
CREATE INDEX idx_products_attributes_gin 
ON e_commerce_products USING GIN (attributes);
```

---

## ⚠️ Common Mistakes & Pitfalls

- **Confusing `->` and `->>`**: The `->` operator returns a JSON-formatted object (with quotes), whereas `->>` returns unquoted plain text. When filtering in `WHERE` clauses, always use `->>` for string comparisons!
- **Not Indexing Frequently Queried JSON Keys**: Querying JSON columns on tables with millions of rows without GIN / functional indexes forces full table scans.
- **Replacing Relational Tables Entirely with JSON**: JSON columns should NOT replace proper normalized relational tables for primary business entities (`users`, `orders`). Use JSON only for dynamic, evolving, or sparse attributes.

---

## 🧪 Try It Yourself & Practice Exercises

1. Create a `user_settings` table with an `id INT PRIMARY KEY` and a `preferences JSON` column.
2. Insert a row with preferences `'{"theme": "dark", "notifications_enabled": true, "language": "en"}'`.
3. Write a `SELECT` query extracting `theme` and `language` as plain text columns.

---

## 🎯 Mini Challenge

Write a query on an `events_log` table containing a `payload JSON` column. Extract `event_name` and `ip_address` from the JSON payload, and filter for events where `status` inside the JSON payload equals `'FAILED'`.

---

## 🔗 Related Topics

- [SQL Data Types & NULL Values](04-data-types-and-null.html)
- [Indexes & Query Performance](21-indexes-and-performance.html)
- [Practical SQL Capstone Projects](30-sql-projects.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: SQL Security](28-sql-security.html) | [Next: SQL Projects →](30-sql-projects.html)
