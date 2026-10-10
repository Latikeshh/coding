---
layout: default
title: "29 json data in sql"
---

# Chapter 29 — Working with JSON Data in MySQL

> 🔴 Advanced

---

## 📖 Definition & Fundamental Concepts

**JSON (JavaScript Object Notation)** is a lightweight, human-readable data-interchange format structured as key-value pairs (`{"key": "value"}`) and ordered lists/arrays (`["val1", "val2"]`).

When working with **Semi-Structured Data** (data that does not adhere to a rigid tabular schema), relational databases like **MySQL 8.0+** allow storing JSON documents directly inside a native `JSON` column type.

### Relational Columns vs. JSON Columns:

| Construct | Structure | Schema Modification | Best Used For |
| :--- | :--- | :--- | :--- |
| **Relational Columns** | Strict, fixed data types (`INT`, `VARCHAR`, `DATE`). | Requires `ALTER TABLE` DDL changes. | Core business entities (`users`, `orders`, `transactions`). |
| **JSON Column** | Dynamic, nested key-value documents. | Add keys dynamically without schema alterations. | Dynamic attributes, optional settings, REST API logs. |

> [!WARNING]
> **Architecture Trade-Off**: Storing data inside a JSON column trades normalization, strict foreign key constraints, and automatic B-Tree indexing for schema flexibility. JSON columns should **never** replace core relational entities (`users`, `orders`, `payments`). Use JSON strictly for sparse, evolving, or dynamic metadata.

> [!NOTE]
> **Multi-Database Compatibility Clarification**: Native JSON support and indexing mechanics differ across database engines:
> - **MySQL 8.0+**: Stores native `JSON` in an optimized internal binary format for fast key lookups. Uses Generated Columns or Functional Indexes.
> - **PostgreSQL**: Provides both text-based `JSON` and binary-stored `JSONB` (which supports GIN indexing).
> - **SQLite / SQL Server**: Store JSON as text (`TEXT` / `NVARCHAR`) with built-in validation functions (`ISJSON()`).

---

## 🇮🇳 Hindi Explanation

JSON ek aisa format hai jisme data key-value pairs (`{"color": "Red"}`) ya lists (`["A", "B"]`) mein store hota hai.
- **Semi-Structured Data**: Jab har product ya user ke alag-alag dynamic attributes hon (jaise mobile ka RAM, chair ka weight limit), tab har attribute ke liye alag column banane ke bajaye unhe ek `JSON` column mein store kiya jata hai.
- **MySQL 8.0 JSON**: MySQL 8.0 mein native `JSON` data type milta hai jo internal binary format mein store hota hai aur extraction operators (`->`, `->>`) se easily query hota hai.

---

## 🚩 Marathi Explanation

JSON mhanje key-value pairs (`{"color": "Red"}`) kiwa lists (`["A", "B"]`) madhye data store karnari padhat.
- **Semi-Structured Data**: Jevha pratyek product che vegle dynamic attributes astat (udaharanarth mobile cha RAM, chair cha weight limit), tevha pratyek sathi navin column tayar na karta `JSON` column cha vapar ke la jato.
- **MySQL 8.0 JSON**: MySQL 8.0 madhye native `JSON` data type mialto. `->` aani `->>` operators vaparun JSON madhil specific keys fast query karta yetat.

---

## 📊 Reproducible Sample Setup Data

Run the following script in phpMyAdmin or WampServer to create the `e_commerce_products` table populated with dynamic product specifications:

```sql
-- Clean up pre-existing sample table
DROP TABLE IF EXISTS e_commerce_products;

-- Create table with native MySQL JSON column
CREATE TABLE e_commerce_products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    attributes JSON NOT NULL
) ENGINE=InnoDB;

-- Insert sample records with dynamic JSON specifications
INSERT INTO e_commerce_products (product_id, product_name, category, price, attributes) VALUES
(1, 'Smartphone Pro Max', 'Electronics', 999.00, '{"storage": "256GB", "ram": "8GB", "color": "Space Gray", "5g_supported": true}'),
(2, 'Ergonomic Mesh Chair', 'Furniture', 299.00, '{"color": "Black", "max_weight_kg": 150, "adjustable_armrests": true}'),
(3, 'Wireless Gaming Headset', 'Electronics', 149.00, '{"battery_life_hours": 30, "color": "Black", "noise_cancelling": true}');
```

> [!NOTE]
> **JSON Validation & Case Sensitivity**: MySQL validates every document inserted into a `JSON` column. Inserting invalid JSON syntax raises an error (`Invalid JSON text`). Additionally, JSON key names are **case-sensitive** (`$.Color` is distinct from `$.color`).

---

## 🧭 JSON Extraction Operators (`->` vs `->>`)

MySQL provides two primary shorthand operators and two functions for extracting JSON path values:

| Operator / Function | Description | Return Format | Example Output |
| :--- | :--- | :--- | :--- |
| **`JSON_EXTRACT(col, '$.path')`** | Standard function extracting JSON path. | Quoted JSON Value | `"Space Gray"` |
| **`col -> '$.path'`** | Shorthand alias for `JSON_EXTRACT()`. | Quoted JSON Value | `"Space Gray"` |
| **`col ->> '$.path'`** | Unquotes extracted string value into plain SQL text. Equivalent to `JSON_UNQUOTE(JSON_EXTRACT())`. | Unquoted Plain Text | `Space Gray` |

---

## 💡 Practical Examples

### Example 1: Extracting Quoted vs Unquoted JSON Values

```sql
SELECT 
    product_name,
    price,
    -- 1. Using -> returns quoted JSON string
    attributes->'$.color' AS color_quoted_json,
    
    -- 2. Using ->> returns unquoted plain SQL text
    attributes->>'$.color' AS color_plain_text,
    
    -- 3. Extracting storage (Returns NULL for products missing $.storage)
    attributes->>'$.storage' AS storage_capacity,
    attributes->>'$.ram' AS system_ram
FROM e_commerce_products;
```

#### Output
| product_name | price | color_quoted_json | color_plain_text | storage_capacity | system_ram |
| :--- | :---: | :---: | :---: | :---: | :---: |
| Smartphone Pro Max | 999.00 | `"Space Gray"` | Space Gray | 256GB | 8GB |
| Ergonomic Mesh Chair | 299.00 | `"Black"` | Black | NULL | NULL |
| Wireless Gaming Headset | 149.00 | `"Black"` | Black | NULL | NULL |

#### Explanation:
- `attributes->'$.color'` returns `"Space Gray"` (including surrounding JSON quotes).
- `attributes->>'$.color'` returns `Space Gray` as clean unquoted text.
- Missing JSON paths (such as `$.storage` on the Ergonomic Mesh Chair) evaluate safely to SQL `NULL`.

---

### Example 2: Filtering Records on JSON Attributes

Find products where `color` is `'Black'` OR `5g_supported` is `true`:

```sql
SELECT product_name, category, price, attributes->>'$.color' AS item_color
FROM e_commerce_products
WHERE attributes->>'$.color' = 'Black'
   OR attributes->>'$.5g_supported' = 'true';
```

#### Output
| product_name | category | price | item_color |
| :--- | :--- | :---: | :--- |
| Smartphone Pro Max | Electronics | 999.00 | Space Gray |
| Ergonomic Mesh Chair | Furniture | 299.00 | Black |
| Wireless Gaming Headset | Electronics | 149.00 | Black |

---

### Example 3: Finding Values with `JSON_CONTAINS()`

`JSON_CONTAINS()` checks if a specific target JSON value exists at a path:

```sql
SELECT product_name, price
FROM e_commerce_products
WHERE JSON_CONTAINS(attributes, 'true', '$.5g_supported');
```

#### Output
| product_name | price |
| :--- | :---: |
| Smartphone Pro Max | 999.00 |

---

### Example 4: Constructing JSON Documents (`JSON_OBJECT` & `JSON_ARRAY`)

Construct JSON objects and arrays dynamically in SQL:

```sql
SELECT 
    JSON_OBJECT('user_id', 101, 'name', 'Rahul Sharma', 'is_active', true) AS created_object,
    JSON_ARRAY('Electronics', 'Furniture', 'Books') AS created_array;
```

#### Output
| created_object | created_array |
| :--- | :--- |
| `{"is_active": true, "name": "Rahul Sharma", "user_id": 101}` | `["Electronics", "Furniture", "Books"]` |

---

### Example 5: Updating JSON Documents (`JSON_SET` & `JSON_REPLACE`)

MySQL provides functions to modify existing JSON documents without replacing the entire column value:
- `JSON_SET()`: Inserts a path if missing, or replaces it if present.
- `JSON_INSERT()`: Inserts a path ONLY if it does NOT already exist.
- `JSON_REPLACE()`: Replaces a path ONLY if it ALREADY exists.

```sql
-- Update Smartphone Pro Max (product_id = 1): Change storage to 512GB and add a new key warranty_years = 2
UPDATE e_commerce_products
SET attributes = JSON_SET(attributes, '$.storage', '512GB', '$.warranty_years', 2)
WHERE product_id = 1;

-- Verify update
SELECT product_name, attributes->>'$.storage' AS storage, attributes->>'$.warranty_years' AS warranty
FROM e_commerce_products
WHERE product_id = 1;
```

#### Output
| product_name | storage | warranty |
| :--- | :---: | :---: |
| Smartphone Pro Max | 512GB | 2 |

---

### Example 6: Removing JSON Keys (`JSON_REMOVE`)

```sql
-- Remove warranty_years key from product_id = 1
UPDATE e_commerce_products
SET attributes = JSON_REMOVE(attributes, '$.warranty_years')
WHERE product_id = 1;

-- Verify removal
SELECT product_name, attributes
FROM e_commerce_products
WHERE product_id = 1;
```

#### Output
| product_name | attributes |
| :--- | :--- |
| Smartphone Pro Max | `{"ram": "8GB", "color": "Space Gray", "storage": "512GB", "5g_supported": true}` |

---

### Example 7: Checking Path Existence (`JSON_CONTAINS_PATH`)

Check if a specific JSON key exists within the document:

```sql
SELECT product_name, category
FROM e_commerce_products
WHERE JSON_CONTAINS_PATH(attributes, 'one', '$.battery_life_hours');
```

#### Output
| product_name | category |
| :--- | :--- |
| Wireless Gaming Headset | Electronics |

---

## 🔍 Missing Keys vs. JSON `null` vs. SQL `NULL`

Understanding null states in JSON path extraction is essential for bug prevention:

```sql
-- Demo setup showing different null representations
SELECT 
    -- 1. Missing JSON Key -> Returns SQL NULL
    JSON_EXTRACT('{"color": "Red"}', '$.size') AS missing_key_result,
    
    -- 2. Explicit JSON null value -> Returns JSON null
    JSON_EXTRACT('{"color": null}', '$.color') AS explicit_json_null,
    
    -- 3. SQL NULL column -> Returns SQL NULL
    JSON_EXTRACT(NULL, '$.color') AS sql_null_input;
```

#### Output
| missing_key_result | explicit_json_null | sql_null_input |
| :---: | :---: | :---: |
| `NULL` | `null` | `NULL` |

> [!TIP]
> Use `JSON_CONTAINS_PATH(attributes, 'one', '$.key')` to verify if a key exists before evaluating its value.

---

## ⚡ Indexing JSON Attributes in MySQL (Generated Columns)

> [!WARNING]
> **No Direct B-Tree Index on Native JSON Columns**: You **cannot** create a standard B-Tree index directly on a `JSON` column in MySQL. Attempting `CREATE INDEX idx ON table(json_col)` raises an error.

### Solution: Indexing Generated Columns (MySQL 8.0)

To accelerate queries filtering by a JSON attribute (e.g. `color`), create a **Stored or Virtual Generated Column** that extracts the JSON attribute, then build an index on that generated column:

```sql
-- 1. Add a STORED generated column that extracts $.color
ALTER TABLE e_commerce_products
ADD COLUMN item_color VARCHAR(30)
GENERATED ALWAYS AS (attributes->>'$.color') STORED;

-- 2. Create a standard B-Tree Index on the generated column
CREATE INDEX idx_products_item_color ON e_commerce_products(item_color);

-- 3. Fast indexed query (Uses B-Tree index!)
SELECT product_name, price, item_color
FROM e_commerce_products
WHERE item_color = 'Black';
```

#### Output
| product_name | price | item_color |
| :--- | :---: | :--- |
| Ergonomic Mesh Chair | 299.00 | Black |
| Wireless Gaming Headset | 149.00 | Black |

#### Performance Check via `EXPLAIN`:
Running `EXPLAIN SELECT * FROM e_commerce_products WHERE item_color = 'Black';` confirms that MySQL uses `idx_products_item_color` via `ref` access, avoiding full table scans!

---

## ⚠️ Common Mistakes & Troubleshooting

1. **Attempting PostgreSQL `USING GIN` Syntax in MySQL**: `CREATE INDEX ... USING GIN (attributes)` is PostgreSQL-specific. In MySQL, use **Generated Columns** with standard indexes.
2. **Confusing Quoted `->` and Unquoted `->>`**: Comparing `attributes->'$.color' = 'Black'` fails because `->` returns `"Black"` (with quotes). Use `->>` for text filtering.
3. **Attempting PostgreSQL Type Casts (`::boolean`) in MySQL**: `(attributes->>'$.key')::boolean` is invalid syntax in MySQL. Compare unquoted extracted values to string `'true'` or `'false'`.
4. **Treating JSON as a Full Replacement for Relational Tables**: Overusing JSON columns leads to complex queries, lack of foreign key constraints, and maintenance headaches. Use JSON only for dynamic, sparse metadata.
5. **JSON Key Case Sensitivity Errors**: `$.color` and `$.Color` are treated as different paths in MySQL. Maintain consistent lowercase key naming conventions.

---

## 🧪 Step-by-Step Practice Exercises

Run the setup script provided in this chapter before attempting these exercises.

---

### Exercise 1: Create a User Settings Table with JSON
**Task**: Create a table named `user_settings` (`id INT PRIMARY KEY AUTO_INCREMENT`, `username VARCHAR(50)`, `preferences JSON`).

```sql
-- Answer
DROP TABLE IF EXISTS user_settings;

CREATE TABLE user_settings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    preferences JSON NOT NULL
) ENGINE=InnoDB;
```

---

### Exercise 2: Insert Preferences Document
**Task**: Insert a user `'Rahul'` with preferences `{"theme": "dark", "notifications_enabled": true, "language": "en"}`.

```sql
-- Answer
INSERT INTO user_settings (username, preferences)
VALUES ('Rahul', '{"theme": "dark", "notifications_enabled": true, "language": "en"}');
```

---

### Exercise 3: Extract Preferences as Plain Text
**Task**: Extract `theme` and `language` as unquoted text columns for all users.

```sql
-- Answer
SELECT 
    username,
    preferences->>'$.theme' AS preferred_theme,
    preferences->>'$.language' AS preferred_language
FROM user_settings;
```

#### Expected Output
| username | preferred_theme | preferred_language |
| :--- | :--- | :--- |
| Rahul | dark | en |

---

### Exercise 4: Filter Enabled Notifications
**Task**: Select usernames where `notifications_enabled` inside `preferences` equals `'true'`.

```sql
-- Answer
SELECT username
FROM user_settings
WHERE preferences->>'$.notifications_enabled' = 'true';
```

#### Expected Output
| username |
| :--- |
| Rahul |

---

### Exercise 5: Update a JSON Key Without Overwriting
**Task**: Update Rahul's preferences to change `theme` to `'light'` using `JSON_SET()`.

```sql
-- Answer
UPDATE user_settings
SET preferences = JSON_SET(preferences, '$.theme', 'light')
WHERE username = 'Rahul';

-- Verify update
SELECT username, preferences->>'$.theme' AS updated_theme FROM user_settings;
```

#### Expected Output
| username | updated_theme |
| :--- | :--- |
| Rahul | light |

---

### Exercise 6: Create an Indexed Generated Column for Language
**Task**: Add a generated column `user_language` for `$.language` on `user_settings` and create an index on it.

```sql
-- Answer
ALTER TABLE user_settings
ADD COLUMN user_language VARCHAR(10)
GENERATED ALWAYS AS (preferences->>'$.language') STORED;

CREATE INDEX idx_user_language ON user_settings(user_language);
```

---

## 🎯 Mini Challenge

Query an `events_log` table storing REST API payload logs to identify all failed API events.

### Setup Data
```sql
DROP TABLE IF EXISTS events_log;

CREATE TABLE events_log (
    event_id INT PRIMARY KEY AUTO_INCREMENT,
    event_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    payload JSON NOT NULL
) ENGINE=InnoDB;

INSERT INTO events_log (event_id, event_time, payload) VALUES
(1, '2026-10-10 10:00:00', '{"event_name": "user_login", "ip_address": "192.0.2.45", "status": "SUCCESS"}'),
(2, '2026-10-10 10:05:00', '{"event_name": "payment_checkout", "ip_address": "198.51.100.12", "status": "FAILED", "error_code": 402}'),
(3, '2026-10-10 10:10:00', '{"event_name": "password_reset", "ip_address": "192.0.2.88", "status": "SUCCESS"}'),
(4, '2026-10-10 10:15:00', '{"event_name": "api_authentication", "ip_address": "203.0.113.5", "status": "FAILED", "error_code": 401}');
```

### Challenge Solution

```sql
SELECT 
    event_id,
    event_time,
    payload->>'$.event_name' AS event_name,
    payload->>'$.ip_address' AS ip_address,
    payload->>'$.error_code' AS error_code
FROM events_log
WHERE payload->>'$.status' = 'FAILED'
ORDER BY event_id;
```

#### Expected Output
| event_id | event_time | event_name | ip_address | error_code |
| :---: | :--- | :--- | :--- | :---: |
| 2 | 2026-10-10 10:05:00 | payment_checkout | 198.51.100.12 | 402 |
| 4 | 2026-10-10 10:15:00 | api_authentication | 203.0.113.5 | 401 |

#### Explanation:
`payload->>'$.status'` extracts the unquoted `status` string from the JSON document. The `WHERE` clause filters for `'FAILED'`, correctly isolating events 2 and 4.

---

## 🔗 Related Topics

- [SQL Data Types & NULL Values](04-data-types-and-null.html)
- [Indexes & Query Performance](21-indexes-and-performance.html)
- [Practical SQL Capstone Projects](30-sql-projects.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: SQL Security](28-sql-security.html) | [Next: SQL Projects →](30-sql-projects.html)
