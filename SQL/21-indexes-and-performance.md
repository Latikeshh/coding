---
layout: default
title: "21 indexes and performance"
---

# ⚡ SQL Indexes & Query Performance Tuning

> 🔴 Advanced

## 1. What is an Index?

An **index** in a Relational Database Management System (RDBMS) is a specialized, persistent data structure (typically a **B-Tree** or **B+Tree**) maintained by the database engine to locate specific table records rapidly. 

Just like an index at the back of a textbook allows you to jump directly to a page without reading the entire book, a database index allows the query execution engine to pinpoint matching rows without scanning every page on disk.

---

## 2. Why Indexes Are Needed

When a database table contains only a few hundred rows, searching through every row is virtually instantaneous. However, as tables grow to **1,000,000+ rows**, performance drops dramatically:

- **Without an Index (Full Table Scan)**: The database engine must perform a sequential disk scan (`type: ALL` or `seq scan`), reading every single row from disk into memory. Time complexity is **`O(N)`**.
- **With an Index (B-Tree Lookup)**: The engine searches through a balanced tree hierarchy, pinpointing target rows in logarithmic time complexity **`O(log N)`**.

| Table Size | Full Table Scan (`O(N)`) | B-Tree Index Search (`O(log N)`) | Performance Gain |
| :---: | :---: | :---: | :---: |
| **10,000 rows** | 10,000 row inspections | ~14 tree steps | **700x faster** |
| **1,000,000 rows** | 1,000,000 row inspections | ~20 tree steps | **50,000x faster** |
| **10,000,000 rows** | 10,000,000 row inspections | ~24 tree steps | **416,000x faster** |

---

## 3. How an Index Works — Simple Analogy

Imagine searching for the term **"Photosynthesis"** inside a 1,000-page biology textbook:

- ❌ **Without an Index (Sequential Scan)**:
  You start reading on Page 1, turn to Page 2, Page 3... all the way to Page 1,000 until you find the word. This takes hours.

- ✅ **With an Index (B-Tree Index Lookup)**:
  You turn directly to the **Alphabetical Index** at the back of the book, look up **"Photosynthesis"**, see **"Page 412"**, and jump straight to Page 412 in 2 seconds.

In SQL:
- The **Book Content** is your physical SQL table stored on disk.
- The **Back-of-Book Index** is your B-Tree Index file pointing to disk block addresses (Row IDs / Primary Keys).

---

## 4. Types of Indexes

SQL databases support several index structures designed for different workload patterns:

| Index Type | Structure / Behavior | Best Used For |
| :--- | :--- | :--- |
| **Single-Column Index** | Index created on a single table column. | Frequent equality filters on 1 column (`WHERE user_id = 5`). |
| **Composite (Multi-Column) Index** | Index spanning 2 or more columns in a specific order. | Multi-filter queries (`WHERE country = 'IN' AND city = 'Mumbai'`). |
| **Unique Index** | Enforces row uniqueness while indexing column values. | Natural unique identifiers (`email`, `username`, `ssn`). |
| **Clustered Index** | Physical storage order of table data on disk (Primary Key). | Primary Key lookups and range scans. Exactly 1 per table. |
| **Non-Clustered Index** | Separate index structure pointing back to primary key/ROWID. | Secondary lookups on non-primary key columns. |
| **Full-Text Index** | Tokenized index for text searching (`MATCH AGAINST`). | Searching long text/VARCHAR columns for keywords. |

---

## 5. CREATE INDEX Syntax

### Basic Single-Column Index
```sql
CREATE INDEX index_name ON table_name (column_name);
```

### Unique Index
```sql
CREATE UNIQUE INDEX index_name ON table_name (column_name);
```

### Composite (Multi-Column) Index
```sql
CREATE INDEX index_name ON table_name (column_1, column_2, column_3);
```

---

## 6. Single-Column and Unique Indexes

Creating single-column and unique indexes on an `e_commerce_users` table:

```sql
-- 1. Create table
CREATE TABLE e_commerce_users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    account_status VARCHAR(20) DEFAULT 'ACTIVE'
);

-- 2. Create a Unique Index on email (guarantees fast lookup and prevents duplicates)
CREATE UNIQUE INDEX idx_users_email 
ON e_commerce_users (email);

-- 3. Create a Single-Column Index on last_name for frequent search filtering
CREATE INDEX idx_users_lastname 
ON e_commerce_users (last_name);
```

---

## 7. Composite Indexes and Column Order

A **Composite Index** indexes multiple columns together. Column ordering is critical because composite indexes follow the **Leftmost Prefix Rule**.

```sql
-- Create composite index on (country, state, city)
CREATE INDEX idx_location_hierarchy 
ON e_commerce_users (country, state, city);
```

### 🎯 How Leftmost Prefix Rules Work:

| Query Filter Pattern | Index Utilized? | Reason |
| :--- | :---: | :--- |
| `WHERE country = 'India'` | **YES** | Matches 1st column (Leftmost prefix). |
| `WHERE country = 'India' AND state = 'MH'` | **YES** | Matches 1st and 2nd columns. |
| `WHERE country = 'India' AND state = 'MH' AND city = 'Mumbai'` | **YES** | Matches all 3 columns. |
| `WHERE state = 'MH' AND city = 'Mumbai'` | ❌ **NO** | Skips 1st column (`country`). Leftmost prefix broken! |
| `WHERE city = 'Mumbai'` | ❌ **NO** | Skips 1st and 2nd columns. Full table scan triggered! |

> 📌 **Rule of Thumb**: Put the most frequently filtered and highest-cardinality column **FIRST** in a composite index.

---

## 8. SHOW INDEX and DROP INDEX — MySQL

In MySQL and MariaDB, you can inspect existing indexes and drop unnecessary ones:

```sql
-- 1. Inspect all indexes on a table
SHOW INDEX FROM e_commerce_users;

-- 2. Inspect indexes formatted as rows (\G in MySQL CLI)
SHOW INDEX FROM e_commerce_users\G;

-- 3. Drop an index in MySQL / MariaDB
DROP INDEX idx_users_lastname ON e_commerce_users;

-- Drop index syntax in PostgreSQL / SQLite
DROP INDEX idx_users_lastname;
```

---

## 9. EXPLAIN with Real Output

The `EXPLAIN` command reveals how the database query optimizer plans to execute your query:

```sql
-- Inspect execution plan for a non-indexed lookup
EXPLAIN SELECT * FROM e_commerce_users WHERE last_name = 'Sharma';
```

### 📊 Real MySQL `EXPLAIN` Output Breakdown:

```text
*************************** 1. row ***************************
           id: 1
  select_type: SIMPLE
        table: e_commerce_users
   partitions: NULL
         type: ref
possible_keys: idx_users_lastname
          key: idx_users_lastname
      key_len: 202
          ref: const
         rows: 4
     filtered: 100.00
        Extra: NULL
```

### Key `EXPLAIN` Fields Explained:
- **`type: ALL`**: 🚨 Danger! Full Table Scan (Reading every row on disk).
- **`type: ref` / `const`**: ✅ Excellent! Index lookup pinpointing exact matches.
- **`key`**: The name of the index chosen by the optimizer (`idx_users_lastname`).
- **`rows`**: Estimated number of rows inspected (e.g. 4 rows instead of 1,000,000 rows).

---

## 10. Query Performance Before and After

Let me demonstrate a real benchmark test on a table with **1,000,000 customer orders**:

```sql
-- Query searching for orders placed by customer #88412
SELECT order_id, total_amount, order_date 
FROM customer_orders 
WHERE customer_id = 88412;
```

### 🔴 BEFORE INDEX:
- **Execution Plan**: `type: ALL` (Full Table Scan)
- **Rows Examined**: **1,000,000 rows**
- **Execution Time**: **1.450 seconds** (1,450 ms)

```sql
-- Adding B-Tree Index
CREATE INDEX idx_orders_customer_id ON customer_orders (customer_id);
```

### 🟢 AFTER INDEX:
- **Execution Plan**: `type: ref` (B-Tree Index Search)
- **Rows Examined**: **3 rows**
- **Execution Time**: **0.002 seconds** (2 ms) — **725x Speedup!**

---

## 11. Advantages and Disadvantages

| Advantages of Indexes | Disadvantages of Indexes |
| :--- | :--- |
| ⚡ **Blazing Fast Searches**: Reduces lookup time from seconds to milliseconds. | 💾 **Consumes Extra Disk Space**: Index B-Trees are stored on disk. |
| 🔗 **Faster JOINs**: Accelerates Foreign Key joins across multiple tables. | 🐢 **Slows Down Writes (`INSERT`/`UPDATE`/`DELETE`)**: B-Tree must be updated on every write. |
| 📊 **Faster Sorting**: Speeds up `ORDER BY` and `GROUP BY` operations. | 🧹 **Maintenance Overhead**: Requires periodic optimization on huge tables. |

---

## 12. When NOT to Use Indexes

Do NOT create indexes blindly on every column! Avoid indexes in these scenarios:

1. **Small Tables (< 1,000 Rows)**: Full table scans in memory are faster than traversing B-Tree indexes.
2. **Low-Cardinality Columns**: Columns with very few distinct values (e.g., `gender`, `is_active`, `boolean` flags where 50% of rows match).
3. **Write-Heavy Tables (`INSERT`/`UPDATE` Intensive)**: High-frequency logging or IoT sensor tables where write speed is priority.
4. **Columns Never Used in Queries**: Columns that never appear in `WHERE`, `JOIN`, `GROUP BY`, or `ORDER BY` clauses.

---

## 13. Common Mistakes

- ❌ **Indexing Every Column**: Slows down `INSERT` statements dramatically and wastes disk space.
- ❌ **Applying Functions on Indexed Columns**: Writing `WHERE YEAR(order_date) = 2025` invalidates the index! Use range filters instead: `WHERE order_date >= '2025-01-01' AND order_date < '2026-01-01'`.
- ❌ **Ignoring Composite Index Column Order**: Putting low-cardinality columns first in a composite index breaks leftmost prefix matching for primary filters.
- ❌ **Forgetting Foreign Key Indexes**: Forgetting to index Foreign Key columns causes multi-table `JOIN` queries to perform slow full table scans.

---

## 14. Hindi and Marathi Explanations

### Hindi (Roman Script)
Database **Index** ek book ke back-page index ki tarah hota hai. Yeh `WHERE`, `JOIN`, aur `ORDER BY` queries ko lakho rows mein se milliseconds mein search karke deta hai. Indexing se `SELECT` query super-fast ho jaati hai, lekin zyada indexes banane se `INSERT` aur `UPDATE` slow ho jaate hain kyunki database ko har write par B-Tree update karna padta hai.

### Marathi (Roman Script)
Database **Index** mhanje pustaakachya shevti aslelya index sarkha asto. Tyamule million rows madhun data 1-2 milliseconds madhye shodhata yeto. Index mule `SELECT` query fast hote, pan khup jast index kelyas `INSERT` aani `UPDATE` slow hotat karani pratyek veli index tree update karava lagto.

### Hinglish
SQL performance tuning ka sabse pehla aur main step Indexing hota hai. `EXPLAIN` command se aap check kar sakte hain ki query `type: ALL` (Full Scan) kar rahi hai ya `type: ref` (Index Search). Single column, Composite, aur Unique Indexes ka sahi mixture use karna professional database administration hai.

---

## 15. Practice Questions & Mini Challenge

### Practice Questions:
1. Explain the difference between a **Full Table Scan (`type: ALL`)** and an **Index Ref Lookup (`type: ref`)** in an `EXPLAIN` output.
2. Suppose you create a composite index on `(department_id, hire_date)`. Will a query filtering ONLY by `WHERE hire_date = '2025-01-01'` use this index? Explain why or why not based on the Leftmost Prefix Rule.
3. Why do indexes speed up `SELECT` queries but slow down `INSERT` statements?

---

### 🎯 Mini Challenge

You are appointed as the Database Administrator for a fast-growing online food delivery app. Users are complaining that searching for active restaurants by city and cuisine is taking **3.8 seconds**:

```sql
-- Slow Query:
SELECT restaurant_id, restaurant_name, rating 
FROM restaurants 
WHERE city = 'Mumbai' 
  AND cuisine_type = 'Italian' 
  AND is_active = TRUE 
ORDER BY rating DESC;
```

**Your Tasks:**
1. Identify why this query is taking 3.8 seconds on a table with 2,000,000 rows.
2. Propose the single best **Composite Index** (`CREATE INDEX ...`) to optimize this query.
3. Explain the exact order of columns chosen in your composite index and why `is_active` shouldn't be the first column.

---

## 🔗 Related Topics

- [SQL Views & Virtual Tables](20-views.html)
- [Transactions & ACID Properties](22-transactions.html)
- [Common Table Expressions (CTEs)](23-ctes.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: Views](20-views.html) | [Next: Transactions →](22-transactions.html)
