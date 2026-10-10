---
layout: default
title: "18 set operations"
---

# Chapter 18 — Set Operations: UNION, UNION ALL, INTERSECT & EXCEPT

> 🟡 Intermediate

---

## 📖 Definition & Fundamental Concepts

An **SQL Set Operation** combines the result sets of two or more independent `SELECT` queries into a single unified result.

While **SQL Joins** combine data **horizontally** by attaching matching columns from related tables side-by-side, **Set Operations** combine data **vertically** by stacking rows from compatible queries on top of one another.

```text
1. HORIZONTAL COMBINATION (SQL JOINS):
   [ Table A Columns ] + [ Table B Columns ]  ---> Combined Columns Side-by-Side

2. VERTICAL COMBINATION (SET OPERATIONS):
   [ Query 1 Result Rows ]
            +                                 ---> Combined Stacked Rows
   [ Query 2 Result Rows ]
```

---

## 🇮🇳 Hindi Explanation

SQL Set Operations do ya zyada alag-alag `SELECT` queries ke results ko vertically ek ke neeche ek jodti hain.
- **Joins** do tables ke columns ko aamne-saamne (horizontally) jodte hain.
- **Set Operations** queries ke rows ko upar-neeche (vertically) stack karti hain.
- `UNION` saari unique rows ko ek sath laata hai aur duplicate rows hata deta hai.
- `UNION ALL` bina duplicate hataye saari rows waise ki waise jodta hai.
- `INTERSECT` sirf wo rows deta hai jo dono queries mein common hain.
- `EXCEPT` pehli query ki wo rows deta hai jo doosri query mein nahi hain.

---

## 🚩 Marathi Explanation

SQL Set Operations don kiwa tyapeksha jast swatantra `SELECT` queries che results vertically ekamekanchya khali ekatra kartat.
- **Joins** dona tables che columns aamne-saamne (horizontally) jodtat.
- **Set Operations** queries chya rows khali-war (vertically) stack kartat.
- `UNION` sarva unique rows ekatra karto aani duplicate rows kadhto.
- `UNION ALL` duplicate na kadhta sarva rows aahe tya swaroopat thevto.
- `INTERSECT` fatkt tyaach rows deto ja donhi queries madhye saman (common) ahet.
- `EXCEPT` pahilya query madhil asha rows deto ja dusrya query madhye nahit.

---

## 📐 The Four Primary Set Operators

```text
       UNION                     UNION ALL                  INTERSECT                  EXCEPT / MINUS
   +---+     +---+           +---+     +---+            +---+     +---+            +---+     +---+
  / ### \   / ### \         / ### \   / ### \          /     \   /     \          / ### \   /     \
 |  ##### X #####  |       |  ##### X #####  |        |   #####X#####   |        |  ##### X       |
  \ ### /   \ ### /         \ ### /   \ ### /          \     /   \     /          \ ### /   \     /
   +---+     +---+           +---+     +---+            +---+     +---+            +---+     +---+
  Combines & Removes        Combines & Keeps          Returns ONLY Common          Returns First Minus
      Duplicates               Duplicates                   Matches                   Second Matches
```

### 1. `UNION`
Combines result sets from multiple `SELECT` statements and **eliminates duplicate rows**.

### 2. `UNION ALL`
Combines result sets from multiple `SELECT` statements and **retains all rows**, including duplicates.
> [!NOTE]
> **Performance Insight**: `UNION ALL` generally avoids the duplicate-elimination step (which involves sorting or hashing the intermediate result set) required by `UNION`. However, actual execution speed depends on data volume, query structure, indexes, and the database optimizer's execution plan.

### 3. `INTERSECT`
Returns only distinct rows that are present in **both** query results.

### 4. `EXCEPT` (or `MINUS` in Oracle)
Returns distinct rows from the first query that are **absent** from the second query.

> [!IMPORTANT]
> **Whole-Row Duplicate Elimination**: Duplicate evaluation in `UNION`, `INTERSECT`, and `EXCEPT` compares the **entire selected row** (every selected column in combination), NOT just a single column such as `name` or `email`.

---

## 📜 Essential Rules for Combining SELECT Statements

To combine two or more `SELECT` queries using set operations, all queries **MUST** strictly adhere to the following rules:

1. **Equal Number of Columns**: Every participating `SELECT` statement must return the exact same number of columns.
2. **Compatible Data Types**: Corresponding columns (1st with 1st, 2nd with 2nd) must have matching or implicitly convertible data types.
3. **Identical Logical Column Order**: Columns must be positioned in the same logical order across all `SELECT` queries.
4. **Inherited Column Headers**: Output column names in the final result set are inherited from the **first `SELECT` statement**.
5. **Sorting with `ORDER BY`**:
   - A top-level `ORDER BY` clause appears at the **very end** of the compound query and sorts the entire combined result set.
   - Individual `SELECT` statements cannot have standalone `ORDER BY` clauses unless enclosed in parentheses with a `LIMIT` clause (e.g. `(SELECT ... ORDER BY col LIMIT n) UNION (SELECT ... ORDER BY col LIMIT n)`), or used inside derived tables/subqueries.

---

## ⚙️ MySQL Version Compatibility & Version Check

Different MySQL versions support different native set operators:
- **`UNION` and `UNION ALL`**: Supported natively across **ALL** MySQL versions.
- **`INTERSECT` and `EXCEPT`**: Supported natively starting with **MySQL 8.0.31** (released October 2022).
- **Older MySQL Versions (< 8.0.31)**: Require alternative query patterns (such as `INNER JOIN`, `EXISTS`, or `NOT EXISTS`).

To check the exact MySQL version running on your environment (e.g. WampServer or phpMyAdmin), execute:

```sql
SELECT VERSION();
```

---

## 📊 Reproducible Sample Setup Data

Run the following script to create and populate two sample tables: `current_clients` and `event_attendees`.

> [!NOTE]
> `DROP TABLE IF EXISTS` ensures the script is completely reproducible by removing any pre-existing tables and data before creation.

```sql
-- Clean up pre-existing sample tables
DROP TABLE IF EXISTS event_attendees;
DROP TABLE IF EXISTS current_clients;

-- 1. Create current_clients table
CREATE TABLE current_clients (
    client_id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL
);

-- 2. Create event_attendees table
CREATE TABLE event_attendees (
    attendee_id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL
);

-- 3. Populate current_clients
INSERT INTO current_clients (client_id, name, email, city) VALUES
(1, 'Rahul Sharma', 'rahul@example.com', 'Mumbai'),
(2, 'Priya Patel', 'priya@example.com', 'Delhi'),
(3, 'Amit Verma', 'amit@example.com', 'Bangalore');

-- 4. Populate event_attendees
INSERT INTO event_attendees (attendee_id, name, email, city) VALUES
(101, 'Priya Patel', 'priya@example.com', 'Delhi'),    -- Exact match with client_id 2
(102, 'Neha Gupta', 'neha@example.com', 'Pune'),
(103, 'Suresh Kumar', 'suresh@example.com', 'Mumbai');
```

---

## 🧭 Detailed Operators Breakdown with Examples & Outputs

### 1. `UNION` (Combines & Removes Duplicate Rows)

Merges rows from both tables and removes exact duplicate rows across all selected columns.

#### SQL Query (All MySQL Versions)
```sql
SELECT name, email, city FROM current_clients
UNION
SELECT name, email, city FROM event_attendees
ORDER BY name;
```

#### Output
| name | email | city |
| :--- | :--- | :--- |
| Amit Verma | amit@example.com | Bangalore |
| Neha Gupta | neha@example.com | Pune |
| Priya Patel | priya@example.com | Delhi |
| Rahul Sharma | rahul@example.com | Mumbai |
| Suresh Kumar | suresh@example.com | Mumbai |

#### Explanation
- `Priya Patel` (`priya@example.com`, `Delhi`) exists in both `current_clients` and `event_attendees`.
- Because `UNION` evaluates the entire row (`name`, `email`, `city`), it identifies `Priya Patel` as a duplicate and returns her **once**.
- Output contains **5 distinct rows**.

---

### 2. `UNION ALL` (Combines & Retains Duplicate Rows)

Merges rows from both queries and keeps every single row, including duplicates.

#### SQL Query (All MySQL Versions)
```sql
SELECT name, email, city FROM current_clients
UNION ALL
SELECT name, email, city FROM event_attendees
ORDER BY name, email;
```

#### Output
| name | email | city |
| :--- | :--- | :--- |
| Amit Verma | amit@example.com | Bangalore |
| Neha Gupta | neha@example.com | Pune |
| Priya Patel | priya@example.com | Delhi |
| Priya Patel | priya@example.com | Delhi |
| Rahul Sharma | rahul@example.com | Mumbai |
| Suresh Kumar | suresh@example.com | Mumbai |

#### Explanation
- `UNION ALL` bypasses duplicate removal.
- `Priya Patel` appears **twice** (once from `current_clients` and once from `event_attendees`).
- Output contains all **6 total rows**.

---

### 3. `INTERSECT` (Returns Common Rows Only)

Returns only rows that exist in **both** query result sets.

#### Native SQL Query (Requires MySQL 8.0.31 or Later)
```sql
-- Native INTERSECT (MySQL 8.0.31+)
SELECT name, email, city FROM current_clients
INTERSECT
SELECT name, email, city FROM event_attendees
ORDER BY name;
```

#### Output
| name | email | city |
| :--- | :--- | :--- |
| Priya Patel | priya@example.com | Delhi |

#### Alternatives for Older MySQL Versions (< 8.0.31)

##### Alternative A: Using `EXISTS` (Broadly Compatible)
```sql
-- Works in ALL MySQL versions
SELECT DISTINCT 
    c.name, 
    c.email, 
    c.city
FROM current_clients AS c
WHERE EXISTS (
    SELECT 1 
    FROM event_attendees AS a
    WHERE a.name = c.name 
      AND a.email = c.email 
      AND a.city = c.city
)
ORDER BY c.name;
```

##### Alternative B: Using `INNER JOIN` with `DISTINCT`
```sql
-- Works in ALL MySQL versions
SELECT DISTINCT 
    c.name, 
    c.email, 
    c.city
FROM current_clients AS c
INNER JOIN event_attendees AS a
    ON c.name = a.name 
   AND c.email = a.email 
   AND c.city = a.city
ORDER BY c.name;
```

---

### 4. `EXCEPT` (Returns Rows Exclusive to First Query)

Returns rows from the first query that do **NOT** appear in the second query.

#### Native SQL Query (Requires MySQL 8.0.31 or Later)
```sql
-- Native EXCEPT (MySQL 8.0.31+)
SELECT name, email, city FROM current_clients
EXCEPT
SELECT name, email, city FROM event_attendees
ORDER BY name;
```

#### Output
| name | email | city |
| :--- | :--- | :--- |
| Amit Verma | amit@example.com | Bangalore |
| Rahul Sharma | rahul@example.com | Mumbai |

#### Explanation
- `Priya Patel` is present in `event_attendees`, so she is excluded.
- `Amit Verma` and `Rahul Sharma` exist only in `current_clients`, so they are returned.

#### Alternatives for Older MySQL Versions (< 8.0.31)

##### Alternative A: Using `NOT EXISTS` (Recommended Anti-Join Pattern)
```sql
-- Works in ALL MySQL versions
SELECT DISTINCT 
    c.name, 
    c.email, 
    c.city
FROM current_clients AS c
WHERE NOT EXISTS (
    SELECT 1 
    FROM event_attendees AS a
    WHERE a.name = c.name 
      AND a.email = c.email 
      AND a.city = c.city
)
ORDER BY c.name;
```

##### Alternative B: Anti-Join with `LEFT JOIN` and `IS NULL`
```sql
-- Works in ALL MySQL versions
SELECT DISTINCT 
    c.name, 
    c.email, 
    c.city
FROM current_clients AS c
LEFT JOIN event_attendees AS a
    ON c.name = a.name 
   AND c.email = a.email 
   AND c.city = a.city
WHERE a.attendee_id IS NULL
ORDER BY c.name;
```

> [!NOTE]
> **Caveats for Older MySQL Emulations**:
> 1. `WHERE a.attendee_id IS NULL` checks a non-nullable primary key to reliably identify unmatched rows.
> 2. `SELECT DISTINCT` is required if the left table contains internal duplicates.
> 3. Standard `=` comparisons treat `NULL = NULL` as `UNKNOWN`. In this sample dataset, all columns are defined `NOT NULL`. If columns can contain `NULL`s, use MySQL's NULL-safe equality operator `<=>` in join conditions.

---

## 🌍 Database Compatibility Reference Table

| Database Engine | `UNION` / `UNION ALL` | `INTERSECT` | `EXCEPT` / `MINUS` | Notes |
| :--- | :---: | :---: | :---: | :--- |
| **MySQL** | ✅ All Versions | ✅ 8.0.31+ | ✅ 8.0.31+ | Use `EXISTS` / `NOT EXISTS` for older versions. |
| **PostgreSQL** | ✅ All Versions | ✅ All Versions | ✅ All Versions (`EXCEPT`) | Full ANSI SQL support. |
| **SQLite** | ✅ All Versions | ✅ All Versions | ✅ All Versions (`EXCEPT`) | Supported across all standard releases. |
| **SQL Server (T-SQL)**| ✅ All Versions | ✅ All Versions | ✅ All Versions (`EXCEPT`) | Full support for set operators. |
| **Oracle DB** | ✅ All Versions | ✅ All Versions | ✅ All Versions (`MINUS`) | Oracle uses the keyword `MINUS` instead of `EXCEPT`. |

---

## ⚠️ Common Mistakes & How to Avoid Them

### 1. Column Count Mismatch
```sql
-- ❌ INCORRECT: First query returns 3 columns, second returns 2 columns!
SELECT name, email, city FROM current_clients
UNION
SELECT name, email FROM event_attendees;

-- ✅ CORRECT: Both queries return exactly 3 columns
SELECT name, email, city FROM current_clients
UNION
SELECT name, email, city FROM event_attendees;
```

### 2. Incompatible Data Types or Misaligned Column Order
```sql
-- ❌ INCORRECT: Matching name (VARCHAR) with client_id (INT)
SELECT name, client_id FROM current_clients
UNION
SELECT attendee_id, name FROM event_attendees;

-- ✅ CORRECT: Align corresponding column types in the same logical order
SELECT client_id, name FROM current_clients
UNION
SELECT attendee_id, name FROM event_attendees;
```

### 3. Placing `ORDER BY` Inside Individual Statements
```sql
-- ❌ INCORRECT: ORDER BY inside the first query causes syntax error!
SELECT name, email FROM current_clients ORDER BY name
UNION
SELECT name, email FROM event_attendees;

-- ✅ CORRECT: Place ORDER BY once at the very end of the compound statement
SELECT name, email FROM current_clients
UNION
SELECT name, email FROM event_attendees
ORDER BY name;
```

### 4. Assuming Duplicate Removal Compares Only One Column
```sql
-- ❌ MISTAKE: Expecting UNION to deduplicate based solely on 'name'
-- If emails or cities differ, two 'Rahul Sharma' rows WILL be returned!
SELECT name, email, city FROM current_clients
UNION
SELECT name, email, city FROM event_attendees;

-- ✅ FACT: UNION compares every selected column in combination (entire row).
```

### 5. Assuming Output Row Order Without `ORDER BY`
```sql
-- ❌ MISTAKE: Relying on default row order without ORDER BY
SELECT name FROM current_clients UNION SELECT name FROM event_attendees;

-- ✅ CORRECT: Always add explicit ORDER BY when output order matters
SELECT name FROM current_clients UNION SELECT name FROM event_attendees ORDER BY name;
```

---

## 🧪 Step-by-Step Practice Exercises

Run this setup script to create tables for the practice exercises:

```sql
DROP TABLE IF EXISTS event_subscribers;
DROP TABLE IF EXISTS online_subscribers;

CREATE TABLE online_subscribers (
    sub_id INT PRIMARY KEY,
    full_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL
);

CREATE TABLE event_subscribers (
    sub_id INT PRIMARY KEY,
    full_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    city VARCHAR(50) NOT NULL
);

INSERT INTO online_subscribers VALUES
(1, 'Aarav Patel', 'aarav@example.com', 'Mumbai'),
(2, 'Diya Sen', 'diya@example.com', 'Kolkata'),
(3, 'Karan Roy', 'karan@example.com', 'Delhi');

INSERT INTO event_subscribers VALUES
(10, 'Diya Sen', 'diya@example.com', 'Kolkata'),       -- Common subscriber
(20, 'Rohan Verma', 'rohan@example.com', 'Bangalore'),
(30, 'Karan Roy', 'karan@example.com', 'Delhi');        -- Common subscriber
```

---

### Exercise 1: Combine All Unique Contacts (`UNION`)
**Task**: Retrieve a unified, deduplicated list of subscriber emails and full names from both online and event sources, sorted by full name.  
**Required Columns**: `full_name`, `email`

```sql
-- Answer
SELECT full_name, email FROM online_subscribers
UNION
SELECT full_name, email FROM event_subscribers
ORDER BY full_name;
```

#### Expected Output
| full_name | email |
| :--- | :--- |
| Aarav Patel | aarav@example.com |
| Diya Sen | diya@example.com |
| Karan Roy | karan@example.com |
| Rohan Verma | rohan@example.com |

---

### Exercise 2: Combine All Registrations Preserving Duplicates (`UNION ALL`)
**Task**: Combine all registration records from both tables into a complete activity log without removing duplicate entries.  
**Required Columns**: `full_name`, `email`, `city`

```sql
-- Answer
SELECT full_name, email, city FROM online_subscribers
UNION ALL
SELECT full_name, email, city FROM event_subscribers
ORDER BY full_name;
```

#### Expected Output
| full_name | email | city |
| :--- | :--- | :--- |
| Aarav Patel | aarav@example.com | Mumbai |
| Diya Sen | diya@example.com | Kolkata |
| Diya Sen | diya@example.com | Kolkata |
| Karan Roy | karan@example.com | Delhi |
| Karan Roy | karan@example.com | Delhi |
| Rohan Verma | rohan@example.com | Bangalore |

---

### Exercise 3: Find Common Subscribers (`INTERSECT`)
**Task**: Find subscribers who registered through **both** online and event channels.  
**Required Columns**: `full_name`, `email`

```sql
-- Native Solution (MySQL 8.0.31+)
SELECT full_name, email FROM online_subscribers
INTERSECT
SELECT full_name, email FROM event_subscribers
ORDER BY full_name;

-- Alternative Solution (All MySQL Versions)
SELECT DISTINCT o.full_name, o.email
FROM online_subscribers AS o
WHERE EXISTS (
    SELECT 1 FROM event_subscribers AS e
    WHERE e.full_name = o.full_name AND e.email = o.email
)
ORDER BY o.full_name;
```

#### Expected Output
| full_name | email |
| :--- | :--- |
| Diya Sen | diya@example.com |
| Karan Roy | karan@example.com |

---

### Exercise 4: Find Online-Only Subscribers (`EXCEPT`)
**Task**: Find subscribers who registered online but have **never** attended an event.  
**Required Columns**: `full_name`, `email`

```sql
-- Native Solution (MySQL 8.0.31+)
SELECT full_name, email FROM online_subscribers
EXCEPT
SELECT full_name, email FROM event_subscribers
ORDER BY full_name;

-- Alternative Solution (All MySQL Versions)
SELECT DISTINCT o.full_name, o.email
FROM online_subscribers AS o
WHERE NOT EXISTS (
    SELECT 1 FROM event_subscribers AS e
    WHERE e.full_name = o.full_name AND e.email = o.email
)
ORDER BY o.full_name;
```

#### Expected Output
| full_name | email |
| :--- | :--- |
| Aarav Patel | aarav@example.com |

---

### Exercise 5: Multi-Source City Directory with Sorting
**Task**: Create a consolidated list of distinct cities where our subscribers live across both channels, sorted alphabetically.  
**Required Columns**: `city`

```sql
-- Answer
SELECT city FROM online_subscribers
UNION
SELECT city FROM event_subscribers
ORDER BY city;
```

#### Expected Output
| city |
| :--- |
| Bangalore |
| Delhi |
| Kolkata |
| Mumbai |

---

## 🎯 Mini Challenge

Find all products in the catalog that have **never been ordered** in any customer transaction.

### Setup Data
```sql
DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS products;

CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE order_items (
    item_id INT PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL
);

INSERT INTO products (product_id, product_name, price) VALUES
(101, 'Mechanical Keyboard', 89.99),
(102, 'Ergonomic Mouse', 49.99),
(103, '4K Monitor', 349.99),
(104, 'USB-C Hub', 29.99);

INSERT INTO order_items (item_id, order_id, product_id, quantity) VALUES
(1, 5001, 101, 1),
(2, 5001, 102, 2),
(3, 5002, 101, 1);
```

### Challenge Solution

#### Option A: Native `EXCEPT` Solution (MySQL 8.0.31+)
```sql
SELECT product_id, product_name FROM products
EXCEPT
SELECT p.product_id, p.product_name 
FROM products AS p 
JOIN order_items AS oi ON p.product_id = oi.product_id
ORDER BY product_id;
```

#### Option B: Broadly Compatible `NOT EXISTS` Anti-Join (All MySQL Versions)
```sql
SELECT p.product_id, p.product_name, p.price
FROM products AS p
WHERE NOT EXISTS (
    SELECT 1 
    FROM order_items AS oi
    WHERE oi.product_id = p.product_id
)
ORDER BY p.product_id;
```

#### Expected Output
| product_id | product_name | price |
| :--- | :--- | :--- |
| 103 | 4K Monitor | 349.99 |
| 104 | USB-C Hub | 29.99 |

> [!TIP]
> **Why `NOT EXISTS` is Preferred Over `NOT IN`**:
> If a column evaluated inside `NOT IN (SELECT col FROM ...)` returns a single `NULL` value, the entire `NOT IN` expression evaluates to `UNKNOWN`, returning **0 rows**! Using `NOT EXISTS` evaluates row existence directly and is completely safe from the NULL trap.

---

## 🔗 Related Topics

- [SQL Joins](14-joins.html)
- [Subqueries & Nested Queries](17-subqueries.html)
- [Common Table Expressions (CTEs)](23-ctes.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: Subqueries](17-subqueries.html) | [Next: Normalization →](19-normalization.html)
