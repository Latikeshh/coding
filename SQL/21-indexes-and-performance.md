---
layout: default
title: "21 indexes and performance"
---

# ⚡ SQL Indexes & Query Performance Tuning

> 🔴 Advanced

---

## 📖 Definition

An **index** in a Relational Database Management System (RDBMS) is a persistent data structure (typically a **B-Tree**) maintained by the database engine to locate table rows efficiently without inspecting every page on disk.

Just like an alphabetical index at the back of a textbook allows you to jump directly to Page 412 for a term instead of reading through all 1,000 pages line-by-line, a database index allows the query execution engine to pinpoint matching rows rapidly.

> 💡 **Important Reality Check:** Indexes do **not** guarantee a fixed response time for every query. Query performance depends on table size, storage engine caching, hardware disk speed, row selectivity, and the query optimizer's chosen execution plan.

---

## 🇮🇳 Hindi (Roman Script)

Database **Index** ek book ke back-page index ki tarah hota hai jo query ko rows jaldi dhoondhne mein madad karta hai. B-Tree index ki wajah se database engine ko lakho rows ek-ek karke scan nahi karne padte (`Full Table Scan`). Indexing se `SELECT` queries fast ho jaati hain, lekin zyada indexes banane se `INSERT`, `UPDATE`, aur `DELETE` operations slow ho sakte hain kyunki database ko har write par index tree update karna padta hai.

---

## 🚩 Marathi (Roman Script)

Database **Index** mhanje pustakachya shevti aslelya index sarkha asto jo query la rows lavkar shodhayla madat karto. B-Tree index mule database engine la sarva rows ek-ek karun scan karave lagat nahit (`Full Table Scan`). Indexing mule `SELECT` queries fast hotat, pan khup jast indexes kelyas `INSERT`, `UPDATE`, aani `DELETE` operations slow hotat karani pratyek write veli index tree update karava lagto.

---

## 🔍 Understanding Full Table Scans vs Index Lookups

When a query is executed, the database query optimizer evaluates the query structure and statistics to choose between two primary access strategies:

1. **Full Table Scan (`type: ALL`):**
   - The database engine reads every data page sequentially from disk/buffer pool to evaluate `WHERE` conditions.
   - **When it occurs:** When no index exists on the filtered columns, when the table is very small, or when the query requests a large percentage of table rows.
   - **Cost:** Time and I/O grow with the total number of table rows ($O(N)$ logical complexity).

2. **Index Lookup (`type: ref` / `range` / `eq_ref`):**
   - The engine traverses a balanced tree structure to pinpoint specific matching key entries, then retrieves the corresponding table rows.
   - **When it occurs:** When a selective index exists on the filtered or joined columns.
   - **Cost:** Significantly reduces the volume of data pages examined ($O(\log N)$ tree traversal), though returning millions of matching rows from a non-covering index still requires significant row lookups.

> 🧠 **Why Optimizers Sometimes Prefer Table Scans:** If a query requests 80% of all rows in a table, the optimizer may deliberately choose a sequential table scan over an index lookup. Reading consecutive disk pages sequentially is often faster for the operating system than making 800,000 random index-pointer lookups!

---

## 🔑 SQL Index Types & Database Engine Terms

Different index structures are optimized for specific data types and query patterns:

| Index Type | Underlying Structure | Characteristics & Behavior in MySQL (InnoDB) | Primary Use Cases |
| :--- | :--- | :--- | :--- |
| **Primary Key (Clustered Index)** | B-Tree | Organizes physical row storage on disk. In MySQL InnoDB, table data is stored directly inside the Primary Key B-Tree. Exactly 1 per table. | Primary Key point lookups and sequential range scans. |
| **Secondary Index (Non-Clustered)** | B-Tree | Separate index structure storing secondary column values alongside pointers to the Primary Key. | Lookups on non-primary key columns (`WHERE last_name = 'Sharma'`). |
| **Unique Index** | B-Tree | Enforces value uniqueness across table rows while providing fast search lookups. Allows multiple `NULL`s in MySQL unless `NOT NULL` is set. | Unique business attributes (`email`, `username`, `vehicle_vin`). |
| **Composite (Multi-Column) Index** | B-Tree | Indexes 2 or more columns together in a specific sequence (follows Leftmost Prefix Rule). | Multi-column filter queries (`WHERE country = 'IN' AND state = 'MH'`). |
| **Full-Text Index** | Inverted Index | Tokenizes long text into words/stems for natural language keyword searching (`MATCH() AGAINST()`). | Searching long text articles, comments, descriptions. |
| **Spatial Index** | R-Tree / MBR | Indexes multi-dimensional geographic spatial data (`POINT`, `POLYGON`, `GEOMETRY`). | GIS queries, location distance, boundaries. Supported in InnoDB (MySQL 5.7+). |
| **Hash Index** | Hash Table | Key-value hash lookup. Extremely fast $O(1)$ exact equality (`=`), but does **not** support range scans (`>`, `<`) or sorting. | Memory storage engine and NDB Cluster in MySQL. |
| **B-Tree Index** | Self-Balancing Tree | Default universal index structure in MySQL. Supports `=`, `>`, `<`, `>=`, `<=`, `BETWEEN`, and `LIKE 'prefix%'`. | General-purpose scalar column querying. |

---

## 🛠️ `CREATE INDEX`, Inspection (`SHOW INDEX`) & Removal (`DROP INDEX`)

In MySQL, Primary Keys and `UNIQUE` constraints automatically create supporting indexes upon table creation. You create secondary indexes using `CREATE INDEX`.

### 1. Basic Syntax
```sql
-- Single-Column Index
CREATE INDEX idx_users_lastname ON e_commerce_users (last_name);

-- Unique Index
CREATE UNIQUE INDEX idx_users_email ON e_commerce_users (email);

-- Composite Index
CREATE INDEX idx_user_location ON user_locations (country, state, city);
```

### 2. Inspecting Table Indexes (`SHOW INDEX`)
```sql
-- Inspect all indexes defined on a table in MySQL
SHOW INDEX FROM e_commerce_users;
```

### 3. Removing an Index (`DROP INDEX`)
```sql
-- MySQL syntax to drop an index
DROP INDEX idx_users_lastname ON e_commerce_users;
```

---

## 🧩 Composite Indexes & Leftmost-Prefix Rule

A **Composite Index** indexes multiple columns in a specific sequence. Column ordering is critical because composite indexes follow the **Leftmost Prefix Rule**.

Let's demonstrate using a `user_locations` table:

```sql
-- 1. Create user_locations table
CREATE TABLE IF NOT EXISTS user_locations (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(100) NOT NULL,
    country VARCHAR(50) NOT NULL,
    state VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL
);

-- 2. Create Composite Index on (country, state, city)
CREATE INDEX idx_location_hierarchy ON user_locations (country, state, city);
```

### 🎯 Leftmost-Prefix Matching Rules:

| Query Filter Pattern | Leftmost Prefix Match? | Index Usage Behavior |
| :--- | :---: | :--- |
| `WHERE country = 'India'` | **YES** | Matches 1st column (leading prefix). Index utilized. |
| `WHERE country = 'India' AND state = 'MH'` | **YES** | Matches 1st and 2nd columns. Index utilized. |
| `WHERE country = 'India' AND state = 'MH' AND city = 'Mumbai'` | **YES** | Matches all 3 columns. Index fully utilized. |
| `WHERE state = 'MH' AND city = 'Mumbai'` | ❌ **NO** | Skips leading `country` column. Cannot perform direct leftmost prefix lookup. |
| `WHERE city = 'Mumbai'` | ❌ **NO** | Skips 1st and 2nd leading columns. |

> 📌 **Guideline on Column Order:** Do not blindly place high-cardinality columns first. Design composite index column order based on actual query filter patterns, putting equality-filtered columns (`=`) first and range-filtered columns (`>`, `<`) or sort columns (`ORDER BY`) trailing.

---

## 🔍 Reproducible `EXPLAIN` Walkthrough (MySQL)

The **`EXPLAIN`** statement reveals the query optimizer's execution plan, showing whether an index was chosen or if a full table scan was performed.

### Step 1: Create Table & Insert Sample Records

```sql
-- Drop table if exists to allow safe re-runs
DROP TABLE IF EXISTS e_commerce_users;

CREATE TABLE e_commerce_users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO e_commerce_users (first_name, last_name, email)
VALUES 
    ('Rahul', 'Sharma', 'rahul@example.com'),
    ('Priya', 'Sharma', 'priya@example.com'),
    ('Amit', 'Kumar', 'amit@example.com'),
    ('Sneha', 'Patel', 'sneha@example.com');
```

---

### Step 2: Run `EXPLAIN` BEFORE Creating an Index

```sql
EXPLAIN SELECT user_id, first_name FROM e_commerce_users WHERE last_name = 'Sharma';
```

#### 👀 Query Plan Result (BEFORE INDEX):

```text
+----+-------------+------------------+------------+------+---------------+------+---------+------+------+----------+-------------+
| id | select_type | table            | partitions | type | possible_keys | key  | key_len | ref  | rows | filtered | Extra       |
+----+-------------+------------------+------------+------+---------------+------+---------+------+------+----------+-------------+
|  1 | SIMPLE      | e_commerce_users | NULL       | ALL  | NULL          | NULL | NULL    | NULL |    4 |    25.00 | Using where |
+----+-------------+------------------+------------+------+---------------+------+---------+------+------+----------+-------------+
```
- **`type: ALL`**: Indicates a Full Table Scan (every row in table was inspected).
- **`key: NULL`**: No index was used.

---

### Step 3: Create Index and Run `EXPLAIN` AFTER Creating Index

```sql
-- Create secondary index on last_name
CREATE INDEX idx_users_lastname ON e_commerce_users (last_name);

-- Run EXPLAIN again
EXPLAIN SELECT user_id, first_name FROM e_commerce_users WHERE last_name = 'Sharma';
```

#### 👀 Query Plan Result (AFTER INDEX):

```text
+----+-------------+------------------+------------+------+--------------------+--------------------+---------+-------+------+----------+-------+
| id | select_type | table            | partitions | type | possible_keys      | key                | key_len | ref   | rows | filtered | Extra |
+----+-------------+------------------+------------+------+--------------------+--------------------+---------+-------+------+----------+-------+
|  1 | SIMPLE      | e_commerce_users | NULL       | ref  | idx_users_lastname | idx_users_lastname | 202     | const |    2 |   100.00 | NULL  |
+----+-------------+------------------+------------+------+--------------------+--------------------+---------+-------+------+----------+-------+
```

### 📊 Understanding Key `EXPLAIN` Output Fields:
- **`type: ref`**: Access method indicating a non-unique index lookup (`const` indicates Primary Key lookup).
- **`possible_keys`**: List of candidate indexes considered by the optimizer (`idx_users_lastname`).
- **`key`**: The actual index selected by the optimizer (`idx_users_lastname`).
- **`rows`**: Optimizer's **estimated count** of rows to examine (estimated 2 rows instead of scanning full table).
- **`Extra`**: Additional optimizer details (e.g. `Using index` for covering indexes, `Using where` for additional filtering).

> 💡 **`EXPLAIN ANALYZE` in MySQL 8.0.18+:** Executing `EXPLAIN ANALYZE SELECT ...` actually executes the query and prints tree execution details with exact millisecond timings and actual row counts examined.

---

## ⚡ Function Invalidation on Indexed Columns & Date Range Fixing

Applying a scalar function to an indexed column inside a `WHERE` clause (e.g. `WHERE YEAR(order_date) = 2025` or `WHERE UPPER(email) = 'ALICE@EXAMPLE.COM'`) prevents MySQL from using a standard B-Tree index on that column, forcing a full table scan!

### ❌ Inefficient Query (Disables B-Tree Index):
```sql
-- Applies YEAR() function to every row, disabling index on order_date
SELECT order_id, total_amount 
FROM customer_orders 
WHERE YEAR(order_date) = 2025;
```

### ✅ Optimized Query (Uses B-Tree Range Scan):
```sql
-- Uses range comparison; enables B-Tree index range scan
SELECT order_id, total_amount 
FROM customer_orders 
WHERE order_date >= '2025-01-01' AND order_date < '2026-01-01';
```

> 🌐 **MySQL 8.0+ Functional Indexes:** In MySQL 8.0+, you can create functional indexes on expressions: `CREATE INDEX idx_order_year ON customer_orders ((YEAR(order_date)));`.

---

## 🛠️ Specialized Indexes: Full-Text & Spatial

### 1. Full-Text Index (`FULLTEXT`) for Text Searching
Full-text indexes use inverted index matrices to tokenize long text fields for natural language keyword searching using `MATCH() AGAINST()`.

```sql
-- 1. Create table with FULLTEXT index
CREATE TABLE IF NOT EXISTS product_reviews (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    review_text TEXT NOT NULL,
    FULLTEXT INDEX idx_ft_reviews (review_text)
);

-- 2. Insert sample reviews
INSERT INTO product_reviews (product_name, review_text) VALUES
    ('Wireless Mouse', 'Excellent build quality, silent click, highly recommended for gaming.'),
    ('Mechanical Keyboard', 'RGB backlighting is great, tactile switches feel amazing.'),
    ('USB Cable', 'Durable braided cable with fast charging speed.');

-- 3. Query using MATCH() AGAINST()
SELECT product_name, review_text
FROM product_reviews
WHERE MATCH(review_text) AGAINST('gaming quality' IN NATURAL LANGUAGE MODE);
```

---

### 2. Spatial Index (`SPATIAL`) for GIS Location Data
Spatial indexes use R-Tree data structures to index multi-dimensional geographic coordinates (`POINT`, `POLYGON`, `GEOMETRY`). *(Supported in MySQL InnoDB 5.7+)*.

```sql
CREATE TABLE IF NOT EXISTS delivery_hubs (
    hub_id INT PRIMARY KEY AUTO_INCREMENT,
    hub_name VARCHAR(100) NOT NULL,
    location POINT NOT NULL SRID 0, -- Spatial POINT type
    SPATIAL INDEX idx_hub_location (location) -- R-Tree Spatial Index
);
```

---

## ⚖️ Balanced Index Selection Guidance

Do not follow rigid rules like "never index small tables" or "never index low-cardinality columns". Evaluate index decisions based on realistic trade-offs:

| Benefit / Trade-off | Description | Practical Consideration |
| :--- | :--- | :--- |
| ⚡ **Faster Read Queries** | Speeds up `SELECT` point lookups, `JOIN`s, and `ORDER BY` sorting. | Essential for high-read application endpoints. |
| 💾 **Storage Overhead** | Index B-Trees are stored on disk and loaded into buffer pool memory. | Unnecessary indexes consume valuable RAM and disk space. |
| 🐢 **Slower Write Operations** | B-Trees must be updated on every `INSERT`, `UPDATE`, and `DELETE`. | High write-volume tables (e.g. IoT logs) should minimize extra secondary indexes. |
| 🔗 **Foreign Key Joins** | Indexing foreign key columns accelerates multi-table joins. | MySQL InnoDB automatically creates indexes on Foreign Key constraints if none exist. |

---

## 🛠️ Common Mistakes & Troubleshooting

| Error / Pitfall | Cause | Recommended Fix |
| :--- | :--- | :--- |
| **Disabling B-Tree Index in `WHERE`** | Wrapping an indexed column in a function (`WHERE UPPER(last_name) = 'SHARMA'`). | Rewrite conditions as range queries without functions, or use MySQL 8.0+ functional indexes. |
| **Creating Duplicate Indexes** | Creating `CREATE INDEX idx_id ON table (id)` when `id` is already the Primary Key. | Avoid creating duplicate secondary indexes on columns already indexed by `PRIMARY KEY` or `UNIQUE`. |
| **Missing Leftmost Prefix in Composite Index** | Querying `WHERE state = 'MH'` on composite index `(country, state, city)`. | Create a dedicated index or reorder composite columns to align with primary query patterns. |
| **Over-Indexing Write-Heavy Tables** | Adding 10 secondary indexes to a high-frequency logging table. | Keep secondary indexes minimal on write-heavy tables to maintain `INSERT` performance. |

---

## 🌍 Real-World Usage

- **E-Commerce Portals:** Indexing `customer_id` on `orders` to render customer order history pages instantly.
- **User Authentication:** Creating a `UNIQUE` index on `email` to guarantee unique logins and enable fast authentication lookups.
- **Search Platforms:** Using Full-Text indexes (`FULLTEXT`) for article, documentation, and product search bars.

---

## 🧪 Learning Exercises & Self-Checks

### Exercise 1: Interpreting `EXPLAIN`
Run `EXPLAIN` on a query filtering an un-indexed column vs an indexed column. Identify what `type: ALL` vs `type: ref` signifies.

### Exercise 2: Leftmost Prefix Rule
Given a composite index on `(department_id, hire_date)`, explain whether `WHERE hire_date = '2026-10-10'` can perform a direct leftmost prefix lookup on this index.

### Exercise 3: Fixing Inefficient Functions in `WHERE`
Rewrite the following inefficient query so it can use a B-Tree index on `order_date`:
`SELECT * FROM orders WHERE YEAR(order_date) = 2026;`

---

## 🎯 Mini Challenge: Restaurant Search Query Optimization

Analyze the following restaurant search query executed on a table with 500,000 rows:

```sql
SELECT restaurant_id, restaurant_name, rating 
FROM restaurants 
WHERE city = 'Mumbai' 
  AND cuisine_type = 'Italian' 
  AND is_active = TRUE 
ORDER BY rating DESC;
```

### Table Schema:
```sql
CREATE TABLE IF NOT EXISTS restaurants (
    restaurant_id INT PRIMARY KEY AUTO_INCREMENT,
    restaurant_name VARCHAR(100) NOT NULL,
    city VARCHAR(50) NOT NULL,
    cuisine_type VARCHAR(50) NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    rating DECIMAL(3, 2) NOT NULL
);
```

**Your Tasks:**
1. Propose a candidate Composite Index (`CREATE INDEX ...`) to optimize this filter and sort query.
2. Explain how equality predicates (`city`, `cuisine_type`, `is_active`) and the trailing sort column (`rating`) influence your composite index column sequence.
3. How would you verify whether your proposed index improved performance using `EXPLAIN`?

<details>
<summary>🔍 Click to view Exercise Solutions & Answer Key</summary>

### Answer Key:

#### Exercise 1 Solution:
- `type: ALL` indicates a Full Table Scan (scanning all table rows).
- `type: ref` indicates a non-unique index lookup (using B-Tree index).

#### Exercise 2 Solution:
- **No.** The composite index `(department_id, hire_date)` has `department_id` as its leading leftmost prefix. Filtering solely by `hire_date` skips the first leading column and cannot perform a direct leftmost prefix index lookup.

#### Exercise 3 Solution:
```sql
SELECT * FROM orders 
WHERE order_date >= '2026-01-01' AND order_date < '2027-01-01';
```

#### Mini Challenge Solution:

```sql
-- Step 1: Create candidate composite index
CREATE INDEX idx_restaurant_search 
ON restaurants (city, cuisine_type, is_active, rating DESC);

-- Step 2: Verify execution plan with EXPLAIN
EXPLAIN SELECT restaurant_id, restaurant_name, rating 
FROM restaurants 
WHERE city = 'Mumbai' 
  AND cuisine_type = 'Italian' 
  AND is_active = TRUE 
ORDER BY rating DESC;
```

**Explanation:**
1. **Leading Equality Columns (`city`, `cuisine_type`, `is_active`):** Placing equality-filtered columns first creates a tight leftmost prefix match.
2. **Trailing Sort Column (`rating DESC`):** Appending `rating DESC` at the end of the composite index allows the engine to read matching rows in pre-sorted order, avoiding an extra sorting step (`filesort`).
3. **Verification:** Check `EXPLAIN` output: `type` should change from `ALL` to `ref`/`range`, `key` should display `idx_restaurant_search`, and `Extra` should no longer show `Using filesort`.

</details>

---

## 🔗 Related Topics

- [SQL Views & Virtual Tables](20-views.html)
- [Transactions & ACID Properties](22-transactions.html)
- [Common Table Expressions (CTEs)](23-ctes.html)

---

## 🧭 Navigation

[← Previous: Views](20-views.html) | [SQL Home](./) | [Next: Transactions →](22-transactions.html)
