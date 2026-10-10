---
layout: default
title: "09 operators"
---

# Operators in SQL

> 🟢 Beginner

## 📖 Definition

**SQL Operators** are reserved keywords and mathematical symbols used in SQL statements (primarily in `WHERE` clauses and `SELECT` lists) to perform comparison checks, arithmetic calculations, logical evaluations, inclusive range matching, list membership tests, and wildcard pattern searching.

---

## 🇮🇳 Hindi (Roman Script)

SQL mein data compare karne, calculations karne, aur complex filtering ke liye **Operators** ka use hota hai:
- **Comparison Operators:** `=`, `<>`, `!=`, `>`, `<`, `>=`, `<=` (values compare karne ke liye).
- **Logical Operators:** `AND`, `OR`, `NOT` (multiple conditions combine karne ke liye).
- **Arithmetic Operators:** `+`, `-`, `*`, `/`, `%` (math calculations ke liye).
- **Range & Membership:** `BETWEEN` (inclusive range) aur `IN` (list option search).
- **Pattern Matching:** `LIKE` (wildcards `%` aur `_` ke saath text search karne ke liye).
- **NULL Checks:** `IS NULL` aur `IS NOT NULL`.

---

## 🚩 Marathi (Roman Script)

Data filtering aani calculations sathi **SQL Operators** vaparatat:
- **Comparison Operators:** `=`, `<>`, `!=`, `>`, `<`, `>=`, `<=` (values nividnyasathi).
- **Logical Operators:** `AND`, `OR`, `NOT` (ekahun adhik conditions ekatra karnyasathi).
- **Arithmetic Operators:** `+`, `-`, `*`, `/`, `%` (ganitiya kriyansathi).
- **Range & Membership:** `BETWEEN` (range madhil data) aani `IN` (yadi madhil data).
- **Pattern Matching:** `LIKE` (`%` aani `_` wildcards cha wapar karun text shodhnyasathi).
- **NULL Checks:** `IS NULL` aani `IS NOT NULL`.

---

## 🤔 Why Do We Use It?

Without operators, database queries would be limited to fetching entire uncalculated, unfiltered tables. Operators allow you to:

- Build dynamic, real-world business logic (e.g., finding items priced under $50 with active stock).
- Calculate totals, discounts, taxes, and margins on the fly without modifying raw table data.
- Search for partial keywords typed by users in search bars (`LIKE '%keyboard%'`).
- Filter records across multiple allowed category options using `IN ('Electronics', 'Furniture')`.

---

## 🧠 Simple Analogy: The E-Commerce Search Toolbox

Think of SQL Operators as the **Filtering & Calculation Toolbox on an E-Commerce Website**:

```text
┌───────────────────────────┬──────────────────────────────────────────────────────┐
│ E-Commerce UI Widget      │ SQL Operator Equivalent                              │
├───────────────────────────┼──────────────────────────────────────────────────────┤
│ Price Threshold Slider    │ Comparison: WHERE price <= 5000.00                   │
│ Price Range Selection     │ Range: WHERE price BETWEEN 1000.00 AND 15000.00      │
│ Multi-Category Checkboxes │ Membership: WHERE category IN ('Electronics', 'Books')│
│ Search Bar Keyword Input  │ Pattern: WHERE item_name LIKE '%Wireless%'          │
│ Discounted Price Tag      │ Arithmetic: SELECT price * 0.85 AS sale_price        │
└───────────────────────────┴──────────────────────────────────────────────────────┘
```

---

## 🔢 1. Comparison Operators

Comparison operators compare two scalar values and return a boolean truth value (`TRUE`, `FALSE`, or `UNKNOWN`):

| Operator | Standard / Dialect | Meaning | Example |
| :---: | :---: | :--- | :--- |
| **`=`** | ISO Standard | Equal to | `WHERE price = 1200.00` |
| **`<>`** | ISO Standard | Not equal to (Standard SQL) | `WHERE category <> 'Kitchen'` |
| **`!=`** | Supported in MySQL / Postgres | Not equal to (Popular non-standard alias) | `WHERE category != 'Kitchen'` |
| **`>`** | ISO Standard | Greater than | `WHERE stock_quantity > 20` |
| **`<`** | ISO Standard | Less than | `WHERE price < 1000.00` |
| **`>=`** | ISO Standard | Greater than or equal to | `WHERE price >= 4500.00` |
| **`<=`** | ISO Standard | Less than or equal to | `WHERE stock_quantity <= 15` |

---

## 🔀 2. Logical Operators & Precedence (`AND`, `OR`, `NOT`)

Logical operators combine or invert boolean comparison expressions:

- **`AND`:** Returns `TRUE` only if **all** combined conditions evaluate to `TRUE`.
- **`OR`:** Returns `TRUE` if **at least one** condition evaluates to `TRUE`.
- **`NOT`:** Inverts the truth state of a condition (`TRUE` becomes `FALSE`).

> 🚨 **Precedence Reminder:** `AND` has higher execution precedence than `OR`. Always use parentheses `()` to enforce exact evaluation logic when combining `AND` and `OR` conditions!
>
> Example: `WHERE (category = 'Electronics' OR category = 'Furniture') AND price < 10000.00`

---

## ➕ 3. Arithmetic Operators

Arithmetic operators perform mathematical calculations directly inside `SELECT` lists or `WHERE` clauses:

| Operator | Operation | Example Calculation |
| :---: | :--- | :--- |
| **`+`** | Addition | `SELECT price + 50.00 AS price_with_shipping` |
| **`-`** | Subtraction | `SELECT price - 100.00 AS discounted_price` |
| **`*`** | Multiplication | `SELECT price * stock_quantity AS total_inventory_value` |
| **`/`** | Division | `SELECT price / 2 AS half_price` |
| **`%`** / **`MOD`** | Modulus (Remainder) | `SELECT stock_quantity % 10 AS remaining_units` |

> 📌 **Important Rule:** Arithmetic expressions evaluated in a `SELECT` statement create dynamic result columns in memory. They do **not** permanently alter the raw numeric values stored in database tables on disk!

---

## 🎯 4. Range & Membership Operators: `BETWEEN` and `IN`

### A. Range Operator (`BETWEEN min AND max`)
Filters values within a specified boundary range, **inclusive of both minimum and maximum endpoints**:

```sql
SELECT item_name, price
FROM store_inventory
WHERE price BETWEEN 1000.00 AND 15000.00;
-- Inclusive: Matches items priced at exactly 1000.00, 15000.00, and everything in between!
```

### B. List Membership Operator (`IN (value1, value2, ...)`)
Matches a column value against a discrete list of allowed choices:

```sql
SELECT item_name, category
FROM store_inventory
WHERE category IN ('Electronics', 'Furniture');
-- Equivalent to: WHERE category = 'Electronics' OR category = 'Furniture'
```

### C. Exclusion Operator (`NOT IN (value1, value2, ...)`)
Excludes matching list items from the result set:

```sql
SELECT item_name, category
FROM store_inventory
WHERE category NOT IN ('Kitchen', 'Furniture');
```

> ⚠️ **Critical `NULL` Caveat for `NOT IN`:**
> If a list inside `NOT IN (val1, val2, NULL)` contains a `NULL` value, any comparison `col != NULL` yields `UNKNOWN`, causing `NOT IN` to **return 0 rows** for non-matching items!
> - *Safer Pattern:* Ensure the excluded column is `NOT NULL` or explicitly filter out `NULL` values: `WHERE category NOT IN ('Kitchen', 'Furniture') AND category IS NOT NULL`.

---

## 🔍 5. Pattern Matching Operator (`LIKE` with Wildcards)

The `LIKE` operator performs pattern matching against string text using wildcards:

- **`%` Wildcard:** Matches **zero or more** characters.
- **`_` Wildcard:** Matches **exactly one** character.

```sql
-- 1. Matches text starting with 'Wireless' ('Wireless Mouse', 'Wireless Earbuds')
SELECT item_name FROM store_inventory WHERE item_name LIKE 'Wireless%';

-- 2. Matches text ending with 'Cable' ('USB-C Cable', 'HDMI Cable')
SELECT item_name FROM store_inventory WHERE item_name LIKE '%Cable';

-- 3. Matches text containing 'Keyboard' anywhere ('Mechanical Keyboard', 'Gaming Keyboard')
SELECT item_name FROM store_inventory WHERE item_name LIKE '%Keyboard%';

-- 4. Single character wildcard '_' (e.g. 'M_use' matches 'Mouse')
SELECT item_name FROM store_inventory WHERE item_name LIKE 'M_use%';
```

> 🌐 **Collation Note:** In MySQL (with default collations like `utf8mb4_0900_ai_ci`), `LIKE` text pattern matching is **case-insensitive** by default (`'wireless%'` matches `'Wireless Mouse'`).

---

## ❓ 6. NULL Checking Operators (`IS NULL`, `IS NOT NULL`)

As covered in Topics 4 and 8, `NULL` signifies missing or unrecorded information. Because comparing `col = NULL` or `col <> NULL` evaluates to `UNKNOWN` (returning 0 rows), you must use **`IS NULL`** or **`IS NOT NULL`**:

```sql
-- ✅ Correct NULL check syntax:
SELECT * FROM store_inventory WHERE category IS NULL;
SELECT * FROM store_inventory WHERE category IS NOT NULL;
```

---

## 🛠️ Complete Practical Workflow & Inventory Example

Let's execute a complete, runnable MySQL-compatible workflow creating a `store_inventory` table and testing arithmetic calculations, range searches, set membership, and wildcard pattern matching.

```sql
-- 1. Create store_inventory table schema
CREATE TABLE IF NOT EXISTS store_inventory (
    item_id INT PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL
);

-- 2. Insert sample inventory records using explicit column syntax
INSERT INTO store_inventory (item_id, item_name, category, price, stock_quantity)
VALUES 
    (1, 'Gaming Laptop', 'Electronics', 75000.00, 15),
    (2, 'Wireless Mouse', 'Electronics', 1200.00, 50),
    (3, 'Mechanical Keyboard', 'Electronics', 4500.00, 25),
    (4, 'Ergonomic Chair', 'Furniture', 12500.00, 8),
    (5, 'Coffee Mug', 'Kitchen', 350.00, 100),
    (6, 'USB-C Cable', 'Electronics', 499.00, 0);
```

---

### Query 1: Range Searching Using `BETWEEN 1000 AND 15000`

```sql
SELECT item_name, price
FROM store_inventory
WHERE price BETWEEN 1000.00 AND 15000.00;
```

#### 👀 Expected Output:

```text
+---------------------+----------+
| item_name           | price    |
+---------------------+----------+
| Wireless Mouse      |  1200.00 |
| Mechanical Keyboard |  4500.00 |
| Ergonomic Chair     | 12500.00 |
+---------------------+----------+
```

---

### Query 2: Set Membership Search Using `IN ('Electronics', 'Furniture')`

```sql
SELECT item_name, category, price
FROM store_inventory
WHERE category IN ('Electronics', 'Furniture');
```

#### 👀 Expected Output:

```text
+---------------------+-------------+----------+
| item_name           | category    | price    |
+---------------------+-------------+----------+
| Gaming Laptop       | Electronics | 75000.00 |
| Wireless Mouse      | Electronics |  1200.00 |
| Mechanical Keyboard | Electronics |  4500.00 |
| Ergonomic Chair     | Furniture   | 12500.00 |
| USB-C Cable         | Electronics |   499.00 |
+---------------------+-------------+----------+
```

---

### Query 3: Pattern Matching with `LIKE 'Wireless%' OR LIKE '%Cable'`

```sql
SELECT item_name, price
FROM store_inventory
WHERE item_name LIKE 'Wireless%' OR item_name LIKE '%Cable';
```

#### 👀 Expected Output:

```text
+----------------+---------+
| item_name      | price   |
+----------------+---------+
| Wireless Mouse | 1200.00 |
| USB-C Cable    |  499.00 |
+----------------+---------+
```

---

### Query 4: Arithmetic Total Inventory Valuation (`price * stock_quantity`)

```sql
SELECT 
    item_name,
    price,
    stock_quantity,
    price * stock_quantity AS inventory_valuation
FROM store_inventory;
```

#### 👀 Expected Output:

```text
+---------------------+----------+----------------+---------------------+
| item_name           | price    | stock_quantity | inventory_valuation |
+---------------------+----------+----------------+---------------------+
| Gaming Laptop       | 75000.00 |             15 |          1125000.00 |
| Wireless Mouse      |  1200.00 |             50 |            60000.00 |
| Mechanical Keyboard |  4500.00 |             25 |           112500.00 |
| Ergonomic Chair     | 12500.00 |              8 |           100000.00 |
| Coffee Mug          |   350.00 |            100 |            35000.00 |
| USB-C Cable         |   499.00 |              0 |                0.00 |
+---------------------+----------+----------------+---------------------+
```

---

## 🛠️ Common Mistakes & Troubleshooting

| Error / Pitfall | Cause | Recommended Fix |
| :--- | :--- | :--- |
| **Using `=` Instead of `LIKE` with Wildcards** | Writing `WHERE item_name = 'Wireless%'` searches for the literal string `'Wireless%'`. | Use the `LIKE` operator when using `%` or `_` wildcards: `WHERE item_name LIKE 'Wireless%'`. |
| **Assuming `BETWEEN` Excludes Boundaries** | Assuming `BETWEEN 1000 AND 5000` excludes 1000 or 5000. | Remember that `BETWEEN` is **inclusive** of both minimum and maximum boundary endpoints. |
| **`NOT IN` List Containing `NULL` Values** | Using `WHERE col NOT IN ('A', 'B', NULL)` returns 0 rows. | Avoid `NULL` values inside `NOT IN` lists or explicitly filter `AND col IS NOT NULL`. |
| **Forgetting Logical Precedence (`AND` vs `OR`)** | Combining `AND` and `OR` without parentheses alters intended logic. | Wrap grouped conditions in explicit parentheses: `(cond1 OR cond2) AND cond3`. |
| **Using `= NULL` Instead of `IS NULL`** | Comparing `col = NULL` yields `UNKNOWN` (returning 0 rows). | Always use `IS NULL` or `IS NOT NULL` for missing data checks. |
| **Expecting Arithmetic to Update Stored Records** | Expecting `SELECT price * 0.90` to change database values on disk. | Use `UPDATE store_inventory SET price = price * 0.90;` to alter table records permanently. |

---

## 🌍 Real-World Usage

- **E-Commerce Search Engines:** Combining `LIKE '%search_term%'` with category filters `IN (...)` and price sliders `BETWEEN min AND max`.
- **Financial Accounting:** Running `SELECT SUM(amount * tax_rate) FROM transactions` to calculate monthly tax liabilities dynamically.
- **Inventory Logistics:** Querying `WHERE stock_quantity <= reorder_level` to trigger automated restocking alerts.

---

## 🧪 Learning Exercises & Self-Checks

### Exercise 1: Range Filtering
Write an SQL query to select all inventory items whose `stock_quantity` is **between `10` and `50`**, inclusive.

### Exercise 2: Wildcard Search
Write a query to find all inventory item names that contain the word `'Keyboard'` using the `LIKE` operator with wildcards.

### Exercise 3: Arithmetic Discount Calculation
Write a query displaying `item_name`, `price`, and a calculated discounted price column (`price * 0.85`) aliased as `sale_price` for all items in the `'Electronics'` category.

---

## 🎯 Mini Challenge

Write an SQL query to find all inventory items whose category is **neither** `'Kitchen'` **nor** `'Furniture'` **AND** whose price is less than `50000.00`.

Enforce explicit evaluation grouping using parentheses `()`.

<details>
<summary>🔍 Click to view Exercise Solutions & Answer Key</summary>

### Answer Key:

#### Exercise 1 Solution:
```sql
SELECT item_name, stock_quantity 
FROM store_inventory 
WHERE stock_quantity BETWEEN 10 AND 50;
```

#### Exercise 2 Solution:
```sql
SELECT item_name, price 
FROM store_inventory 
WHERE item_name LIKE '%Keyboard%';
```

#### Exercise 3 Solution:
```sql
SELECT item_name, price, price * 0.85 AS sale_price 
FROM store_inventory 
WHERE category = 'Electronics';
```

#### Mini Challenge Solution:

```sql
SELECT item_name, category, price
FROM store_inventory
WHERE (category NOT IN ('Kitchen', 'Furniture'))
  AND price < 50000.00;
```

**Expected Output:**

```text
+---------------------+-------------+---------+
| item_name           | category    | price   |
+---------------------+-------------+---------+
| Wireless Mouse      | Electronics | 1200.00 |
| Mechanical Keyboard | Electronics | 4500.00 |
| USB-C Cable         | Electronics |  499.00 |
+---------------------+-------------+---------+
```

*(Note: `Gaming Laptop` is excluded because its price `75000.00` exceeds `50000.00`).*

</details>

---

## 🔗 Related Topics

- [Database & Table Basics (`CREATE TABLE`)](03-databases-and-tables.html)
- [`SELECT` – Reading & Querying Data](07-select.html)
- [Filtering Data with `WHERE`](08-where.html)
- [Sorting & Limiting Results (`ORDER BY`, `LIMIT`)](10-order-by-and-limit.html)

---

## 🧭 Navigation

[← Previous: Filtering with WHERE](08-where.html) | [SQL Home](./) | [Next: Sorting & Limiting Results →](10-order-by-and-limit.html)
