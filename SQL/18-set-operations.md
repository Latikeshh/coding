---
layout: default
title: "18 set operations"
---

# Set Operations: UNION, UNION ALL, INTERSECT & EXCEPT

> 🟡 Intermediate

---

## 📖 Definition

**SQL Set Operations** allow you to combine the results of two or more independent `SELECT` queries into a single unified result set. Unlike **Joins** (which append columns horizontally from related tables), **Set Operations** combine rows vertically from compatible query results.

The four primary SQL set operations are:
1. `UNION`: Combines results and **removes duplicates**.
2. `UNION ALL`: Combines results and **retains all duplicates** (significantly faster).
3. `INTERSECT`: Returns only rows that exist in **both** result sets.
4. `EXCEPT` (or `MINUS`): Returns rows from the first query that are **absent** from the second query.

---

## 🇮🇳 Hindi Explanation

Set Operations do alag `SELECT` queries ke result ko vertical direction mein ek ke neeche ek jodti hain. `UNION` dono lists ko mila kar duplicate entries hata deta hai. `UNION ALL` saari entries rakhta hai bina duplicate hataye (isiliye yeh fast hota hai). `INTERSECT` sirf dono lists ki common entries dikhata hai. `EXCEPT` pehli list ki wo entries dikhata hai jo doosri list mein nahi hain.

---

## 🚩 Marathi Explanation

Set Operations don swatantra `SELECT` queries che results eka khali ek (vertically) ekatra kartat. `UNION` donhi lists ekatra karun duplicate rows kadhto. `UNION ALL` duplicate na kadhta sarva rows thevto (mhanun ha fast asto). `INTERSECT` donhi lists madhil saman (common) rows dakhavto. `EXCEPT` pahilya list madhil asha rows dakhavto ja dusrya list madhye nahit.

---

## 📐 Visual Set Theory Diagrams

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

---

## 📜 Strict Rules for SQL Set Operations

To perform any set operation, the participating `SELECT` statements **MUST** satisfy two strict mathematical conditions:

1. **Equal Number of Columns**: Every `SELECT` query must return the exact same count of columns.
2. **Compatible Data Types**: The corresponding columns in each query (1st with 1st, 2nd with 2nd) must have matching or implicitly convertible data types.

> [!NOTE]
> Column names in the final output are determined by the column headers specified in the **FIRST `SELECT` query**.

---

## 📊 Sample Setup Data

```sql
-- Setup Customers and Suppliers Tables
CREATE TABLE current_clients (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    city VARCHAR(50)
);

CREATE TABLE event_attendees (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    city VARCHAR(50)
);

INSERT INTO current_clients VALUES
(1, 'Rahul Sharma', 'rahul@example.test', 'Mumbai'),
(2, 'Priya Patel', 'priya@example.test', 'Delhi'),
(3, 'Amit Verma', 'amit@example.test', 'Bangalore');

INSERT INTO event_attendees VALUES
(101, 'Priya Patel', 'priya@example.test', 'Delhi'),    -- Common record
(102, 'Neha Gupta', 'neha@example.test', 'Pune'),
(103, 'Suresh Kumar', 'suresh@example.test', 'Mumbai');
```

---

## 🧭 Deep Dive into the 4 Set Operators

### 1. `UNION` (Combines & Deduplicates)

Merges rows from both queries and performs an internal sorting pass to eliminate all duplicate rows.

```sql
SELECT name, email, city FROM current_clients
UNION
SELECT name, email, city FROM event_attendees
ORDER BY name;
```

#### Output

| name | email | city |
|:---|:---|:---|
| Amit Verma | amit@example.test | Bangalore |
| Neha Gupta | neha@example.test | Pune |
| Priya Patel | priya@example.test | Delhi | *(Deduplicated! Appeared in both tables)* |
| Rahul Sharma | rahul@example.test | Mumbai |
| Suresh Kumar | suresh@example.test | Mumbai |

---

### 2. `UNION ALL` (Combines & Retains All Rows)

Merges rows from both queries without sorting or deduplication. Always use `UNION ALL` over `UNION` when you know result sets do not overlap or when duplicates are desirable!

```sql
SELECT name, email, city FROM current_clients
UNION ALL
SELECT name, email, city FROM event_attendees;
```

#### Output (6 Total Rows)
Includes `Priya Patel` twice because `UNION ALL` bypasses deduplication checks.

---

### 3. `INTERSECT` (Common Rows Only)

Returns only the distinct rows that are returned by **both** the first and second queries.

```sql
SELECT name, email, city FROM current_clients
INTERSECT
SELECT name, email, city FROM event_attendees;
```

#### Output

| name | email | city |
|:---|:---|:---|
| Priya Patel | priya@example.test | Delhi |

---

### 4. `EXCEPT` / `MINUS` (Difference Operator)

Returns all distinct rows from the first query that are **NOT present** in the second query.
*(Note: Oracle uses the keyword `MINUS` instead of `EXCEPT`)*.

```sql
SELECT name, email, city FROM current_clients
EXCEPT
SELECT name, email, city FROM event_attendees;
```

#### Output

| name | email | city |
|:---|:---|:---|
| Amit Verma | amit@example.test | Bangalore |
| Rahul Sharma | rahul@example.test | Mumbai |

---

## 🛠️ Database Compatibility & Emulations

| Database Engine | `UNION` / `UNION ALL` | `INTERSECT` | `EXCEPT` / `MINUS` |
|:---|:---:|:---:|:---:|
| **PostgreSQL** | ✅ Supported | ✅ Supported | ✅ Supported (`EXCEPT`) |
| **SQL Server** | ✅ Supported | ✅ Supported | ✅ Supported (`EXCEPT`) |
| **SQLite** | ✅ Supported | ✅ Supported | ✅ Supported (`EXCEPT`) |
| **Oracle** | ✅ Supported | ✅ Supported | ✅ Supported (`MINUS`) |
| **MySQL (8.0.31+)** | ✅ Supported | ✅ Supported | ✅ Supported (`EXCEPT`) |
| **Older MySQL** | ✅ Supported | ⚠️ Emulate with `INNER JOIN` | ⚠️ Emulate with `LEFT JOIN WHERE ... IS NULL` |

### Emulating `EXCEPT` in Older MySQL Versions
```sql
-- Equivalent to: SELECT email FROM current_clients EXCEPT SELECT email FROM event_attendees
SELECT c.email
FROM current_clients AS c
LEFT JOIN event_attendees AS e ON c.email = e.email
WHERE e.email IS NULL;
```

---

## ⚠️ Common Mistakes

1. **`ORDER BY` Location Error**:
   `ORDER BY` must appear **only once at the very end** of the combined statement, sorting the entire final output. Placing `ORDER BY` inside individual `SELECT` queries causes syntax errors!

2. **Column Misalignment**:
   Combining `SELECT name, age` with `SELECT age, name` causes type mismatch or corrupted output tables. Always align corresponding column types.

---

## 🧪 Try It Yourself

1. Create a unified email contact list from `employees`, `customers`, and `vendors` tables using `UNION`.
2. Find cities where both customers and suppliers are located using `INTERSECT`.

---

## 🎯 Mini Challenge

Write a query that retrieves all products that have been cataloged in `products` but have **never been ordered** in `order_items`, using `EXCEPT` (or a supported alternative).

---

## 🔗 Related Topics

- [SQL Joins](14-joins.html)
- [Subqueries & Nested Queries](17-subqueries.html)
- [Common Table Expressions (CTEs)](23-ctes.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: Subqueries](17-subqueries.html) | [Next: Normalization →](19-normalization.html)

