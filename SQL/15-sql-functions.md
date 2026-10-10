---
layout: default
title: "15 sql functions"
---

# SQL Built-in Functions: String, Numeric, Date & NULL Handling

> 🟡 Intermediate

---

## 📖 Definition

An **SQL Function** is a built-in operation that accepts input values (column data or literals), performs a calculation or transformation, and returns a computed value.

In SQL, functions are categorized into two types:
- **Single-Row (Scalar) Functions:** Process individual values per row and return one computed value for every input row (e.g. `UPPER()`, `ROUND()`, `DATEDIFF()`).
- **Multi-Row (Aggregate) Functions:** Process values across multiple rows and summarize them into a single result (e.g. `COUNT()`, `SUM()`, `AVG()`).

---

## 🇮🇳 Hindi (Roman Script)

SQL ke **Built-in Functions** database ke andar bane-banaye tools hote hain jo text, numbers, dates, aur missing values (`NULL`) ko process aur transform karte hain. Primary categories hain: **String Functions** (`CONCAT`, `UPPER`, `CHAR_LENGTH`), **Numeric Functions** (`ROUND`, `CEIL`, `FLOOR`), **Date Functions** (`CURRENT_DATE`, `DATEDIFF`, `DATE_ADD`), aur **NULL Handling Functions** (`COALESCE`, `NULLIF`). Scalar functions har input row ke liye alag computed output dete hain aur table ke stored data ko permanent modify nahi karte.

---

## 🚩 Marathi (Roman Script)

SQL **Built-in Functions** mhanje database madhye built-in asli-le tools aahet, je text, numbers, dates, aani `NULL` values var प्रक्रिया karun result detat. **String Functions** (`CONCAT`, `UPPER`, `CHAR_LENGTH`), **Numeric Functions** (`ROUND`, `CEIL`, `FLOOR`), **Date Functions** (`CURRENT_DATE`, `DATEDIFF`, `DATE_ADD`), aani **NULL Functions** (`COALESCE`, `NULLIF`) hi hyanchi mukhya udaharanet aahet. Scalar functions pratyek row sathi swatantra computed result detat.

---

## 🧩 Categorization of Built-in Functions

```text
                        SQL FUNCTIONS
                              │
        ┌─────────────────────┴─────────────────────┐
        ▼                                           ▼
  Single-Row (Scalar) Functions            Multi-Row (Aggregate) Functions
  (Returns 1 output row per input row)    (Summarizes multiple rows into 1 value)
        │                                           │
  ┌─────┼─────┬─────┬─────┐               ┌─────┼─────┬─────┬─────┐
  │     │     │     │     │               │     │     │     │     │
String Num  Date  NULL   Case            COUNT SUM   AVG  MIN   MAX
```

---

## 🔤 1. String Functions (Text Processing)

String functions clean, format, combine, and extract text data stored in string columns.

| Function | Purpose & Description | Example Statement | Result |
| :--- | :--- | :--- | :--- |
| **`CONCAT(a, b, ...)`** | Merges two or more string values together. | `CONCAT('Rahul', ' ', 'Dravid')` | `'Rahul Dravid'` |
| **`UPPER(str)`** | Converts string characters to UPPERCASE. | `UPPER('mumbai')` | `'MUMBAI'` |
| **`LOWER(str)`** | Converts string characters to lowercase. | `LOWER('ADMIN@TEST.COM')` | `'admin@test.com'` |
| **`CHAR_LENGTH(str)`** | Returns the exact number of **characters** in a string. | `CHAR_LENGTH('SQL World')` | `9` |
| **`LENGTH(str)`** | Returns string length in **bytes** (Differs for UTF-8 multi-byte characters). | `LENGTH('SQL World')` | `9` |
| **`SUBSTRING(str, pos, len)`** | Extracts a substring starting at 1-based position `pos` for length `len`. | `SUBSTRING('Database', 1, 4)` | `'Data'` |
| **`REPLACE(str, old, new)`** | Replaces all occurrences of `old` substring with `new` substring. | `REPLACE('v1.0.0', '1.0.0', '2.0.0')` | `'v2.0.0'` |
| **`TRIM(str)`** | Strips leading and trailing whitespace spaces from text. | `TRIM('  PostgreSQL  ')` | `'PostgreSQL'` |

> 🌐 **MySQL `CHAR_LENGTH()` vs `LENGTH()`:**
> - **`CHAR_LENGTH(str)`:** Counts the actual number of **characters** in the text string.
> - **`LENGTH(str)`:** Counts the number of **bytes** consumed by the string. For standard ASCII text, both return the same value. However, for multi-byte UTF-8 strings (such as non-English characters or emojis like `😊`), `LENGTH()` returns the higher byte count while `CHAR_LENGTH()` returns the human character count.

---

## 🔢 2. Numeric Functions (Mathematical Calculations)

Numeric functions perform mathematical rounding, modulus calculations, and absolute transformations on numbers.

| Function | Purpose & Description | Example Statement | Result |
| :--- | :--- | :--- | :--- |
| **`ROUND(x, d)`** | Rounds number $x$ to $d$ decimal places. | `ROUND(1499.856, 2)` | `1499.86` |
| **`CEIL(x)` / `CEILING`** | Rounds number $x$ **UP** to the nearest whole integer. | `CEIL(12.1)` | `13` |
| **`FLOOR(x)`** | Rounds number $x$ **DOWN** to the nearest whole integer. | `FLOOR(12.9)` | `12` |
| **`ABS(x)`** | Returns the absolute positive value of $x$. | `ABS(-45.50)` | `45.50` |
| **`MOD(n, m)` / `%`** | Returns the integer remainder of division $n / m$. | `MOD(10, 3)` | `1` |
| **`POWER(x, y)`** | Raises base $x$ to the power of exponent $y$ ($x^y$). | `POWER(2, 4)` | `16` |

---

## 📅 3. Date & Time Functions

Date functions perform date arithmetic, extract calendar parts, and format timestamps.

| Function | Purpose & Description | Example Statement | Illustrative Output |
| :--- | :--- | :--- | :--- |
| **`CURRENT_DATE` / `CURDATE()`** | Returns the current server calendar date. | `SELECT CURRENT_DATE;` | `'2026-10-10'` |
| **`CURRENT_TIMESTAMP` / `NOW()`** | Returns the current server date and time. | `SELECT CURRENT_TIMESTAMP;` | `'2026-10-10 14:00:00'` |
| **`DATEDIFF(date1, date2)`** | Returns the difference in days between `date1` and `date2` (`date1 - date2`). | `DATEDIFF('2026-10-15', '2026-10-10')` | `5` |
| **`DATE_ADD(date, INTERVAL n unit)`** | Adds a time interval (`DAY`, `MONTH`, `YEAR`) to a date. | `DATE_ADD('2026-10-10', INTERVAL 30 DAY)` | `'2026-11-09'` |
| **`EXTRACT(unit FROM date)`** | Extracts date parts (`YEAR`, `MONTH`, `DAY`). | `EXTRACT(YEAR FROM '2026-10-10')` | `2026` |

> 📌 **Understanding `DATEDIFF()` Argument Order & Age Limitations:**
> 1. `DATEDIFF(date1, date2)` evaluates `date1 - date2`. If `date1` is earlier than `date2`, `DATEDIFF()` returns a **negative number**.
> 2. Calculating employee age via `DATEDIFF(CURRENT_DATE, birth_date) / 365.25` is a simplified estimate and does not account for leap years perfectly.

---

## 🛡️ 4. NULL Handling Functions (`COALESCE` & `NULLIF`)

In SQL, `NULL` represents missing or unrecorded information. Operations with `NULL` (e.g. `10 + NULL`) evaluate to `NULL`.

### A. `COALESCE(val1, val2, ...)`
Evaluates arguments in sequence and returns the **first non-NULL value** in the list.

```sql
SELECT 
    customer_id,
    full_name,
    COALESCE(phone_number, 'No Phone Available') AS contact_phone
FROM customers;
```

---

### B. `NULLIF(val1, val2)` & Preventing Division-by-Zero
Returns **`NULL`** if `val1 = val2`; otherwise returns `val1`.

In MySQL strict mode, dividing a number by zero triggers a severe runtime error (`ERROR 1365 (22012): Division by 0`). Using `NULLIF(denominator, 0)` converts `0` into `NULL`, causing the division to safely evaluate to `NULL` instead of crashing the query!

```sql
-- Safe Division-by-Zero Prevention:
SELECT 
    store_id,
    total_revenue,
    total_orders,
    -- Converts total_orders = 0 into NULL, preventing Division by Zero!
    ROUND(total_revenue / NULLIF(total_orders, 0), 2) AS avg_order_value
FROM store_sales;
```

---

## 🛠️ Complete Runnable Example (`product_catalog` Table)

Let's execute a complete MySQL-compatible workflow creating a `product_catalog` table and running a query that combines `TRIM()`, `UPPER()`, `COALESCE()`, and `ROUND()`.

```sql
-- 1. Drop sample table if it exists to allow safe script re-runs
DROP TABLE IF EXISTS product_catalog;

-- 2. Create product_catalog table schema
CREATE TABLE product_catalog (
    product_id INT PRIMARY KEY,
    raw_product_name VARCHAR(100) NOT NULL,
    category_code VARCHAR(50), -- Nullable column
    list_price DECIMAL(10, 2) NOT NULL,
    discount_rate DECIMAL(4, 2) -- Nullable column
);

-- 3. Insert sample product records
INSERT INTO product_catalog (product_id, raw_product_name, category_code, list_price, discount_rate)
VALUES
    (1, '  wireless gaming MOUSE  ', 'ELEC', 1299.50, 0.15),
    (2, 'MECHANICAL KEYBOARD', 'ELEC', 3499.00, NULL),
    (3, '  ergonomic desk CHAIR  ', NULL, 12500.00, 0.10),
    (4, 'coffee mug', NULL, 350.00, NULL);

-- 4. Execute Multi-Function Transformation Query
SELECT 
    product_id,
    UPPER(TRIM(raw_product_name)) AS clean_product_name,
    COALESCE(category_code, 'UNASSIGNED') AS display_category,
    list_price,
    COALESCE(discount_rate, 0.00) AS applied_discount_rate,
    ROUND(list_price * (1 - COALESCE(discount_rate, 0.00)), 2) AS final_price
FROM product_catalog;
```

#### 👀 Expected Output:

```text
+--------------------------------+------------------+------------+-----------------------+-------------+
| product_id | clean_product_name | display_category | list_price | applied_discount_rate | final_price |
+--------------------------------+------------------+------------+-----------------------+-------------+
|          1 | WIRELESS GAMING MOUSE | ELEC           |    1299.50 |                  0.15 |     1104.58 |
|          2 | MECHANICAL KEYBOARD| ELEC             |    3499.00 |                  0.00 |     3499.00 |
|          3 | ERGONOMIC DESK CHAIR| UNASSIGNED       |   12500.00 |                  0.10 |    11250.00 |
|          4 | COFFEE MUG         | UNASSIGNED       |     350.00 |                  0.00 |      350.00 |
+--------------------------------+------------------+------------+-----------------------+-------------+
```

> 📌 **Important Clarification:** Displaying `'UNASSIGNED'` for `category_code` or `0.00` for `discount_rate` using `COALESCE()` is a query-level display/calculation fallback. It does **not** alter the raw `NULL` values stored inside the database table on disk.

---

## ⚡ Index Performance Warning: Functions in `WHERE` Clauses

Applying a scalar function to an indexed column inside a `WHERE` clause (e.g. `WHERE UPPER(email) = 'ALICE@EXAMPLE.COM'` or `WHERE YEAR(order_date) = 2026`) prevents MySQL from utilizing a standard B-Tree index on that column, forcing a slow **Full Table Scan**!

### How to Fix Function Index Performance Issues:

1. **Rewrite as Range Predicates (Recommended):**
   ```sql
   -- ❌ Bad (Disables Index on order_date):
   SELECT * FROM orders WHERE YEAR(order_date) = 2026;

   -- ✅ Good (Uses B-Tree Index Range Scan):
   SELECT * FROM orders WHERE order_date >= '2026-01-01' AND order_date < '2027-01-01';
   ```
2. **Use MySQL 8.0+ Functional Indexes:**
   In MySQL 8.0+, you can create an explicit functional index on expressions:
   `CREATE INDEX idx_upper_email ON users ((UPPER(email)));`

---

## 🛠️ Common Mistakes & Troubleshooting

| Error / Pitfall | Cause | Recommended Fix |
| :--- | :--- | :--- |
| **`LENGTH()` vs `CHAR_LENGTH()` UTF-8 Mismatch** | Using `LENGTH()` expecting character count on multi-byte UTF-8 Unicode characters. | Use `CHAR_LENGTH()` to count human characters accurately. |
| **`ERROR 1365 (22012): Division by 0`** | Dividing a numeric column by a column containing zero values. | Wrap the denominator in `NULLIF(denominator, 0)`. |
| **Disabling B-Tree Indexes in `WHERE`** | Applying scalar functions (`UPPER()`, `YEAR()`) to indexed columns. | Rewrite filtering conditions as range comparisons without functions on the column. |
| **`DATEDIFF()` Argument Order Negative Result** | Passing dates in reverse order (`DATEDIFF(start_date, end_date)`). | Ensure `date1` is the later date: `DATEDIFF(later_date, earlier_date)`. |
| **Expecting `COALESCE` to Update Table Data** | Assuming `COALESCE(col, 'Default')` updates table storage. | Use `UPDATE table_name SET col = 'Default' WHERE col IS NULL;` to modify disk data. |

---

## 🌍 Real-World Usage

- **E-Commerce Checkout Engines:** Calculating discounted final prices using `ROUND(price * (1 - COALESCE(discount, 0)), 2)`.
- **User Profile Sanitation:** Cleaning user input with `TRIM()` and `LOWER()` before storing email addresses in database tables.
- **Invoice Aging Reports:** Categorizing overdue invoices using `DATEDIFF(CURRENT_DATE, due_date)`.

---

## 🧪 Structured Practice Exercises

Follow these 5 practical exercises using the `product_catalog` table created above:

### Exercise 1: String Cleanup
Write a query displaying `product_id` and a clean product name formatted with leading/trailing spaces removed (`TRIM()`) and converted to lowercase (`LOWER()`).

### Exercise 2: Numeric Rounding & Tax Calculation
Write a query calculating a 18% tax (`list_price * 0.18`) on all products, returning `product_id`, `list_price`, and `tax_amount` rounded to 2 decimal places using `ROUND()`.

### Exercise 3: Date Arithmetic
Write a query that displays `CURRENT_DATE`, the date 45 days from today using `DATE_ADD()`, and the difference in days using `DATEDIFF()`.

### Exercise 4: NULL Substitution
Write a query displaying `raw_product_name`, and replacing `NULL` discount rates with `0.00` using `COALESCE()`.

### Exercise 5: Safe Division-by-Zero Calculation
Given a `store_sales` table (`total_revenue DECIMAL(10,2)`, `total_orders INT`), write a query calculating average order value while safely preventing division-by-zero errors using `NULLIF()`.

---

## 🎯 Mini Challenge

1. Create a `customer_invoices` table:
   - `invoice_id` (INT, Primary Key)
   - `client_name` (VARCHAR 100, NOT NULL)
   - `gross_amount` (DECIMAL 10,2, NOT NULL)
   - `paid_amount` (DECIMAL 10,2) -- Nullable (NULL if no payment made yet)
   - `due_date` (DATE NOT NULL)
2. Insert 3 sample invoices:
   - Invoice 101: Client `'Acme Corp'`, Gross `5000.00`, Paid `2000.00`, Due `'2026-09-01'`
   - Invoice 102: Client `'Beta LLC'`, Gross `3500.00`, Paid `NULL`, Due `'2026-09-15'`
   - Invoice 103: Client `'Gamma Inc'`, Gross `1200.00`, Paid `1200.00`, Due `'2026-10-01'`
3. Write a query calculating:
   - `client_name`
   - `gross_amount`
   - `unpaid_balance`: `gross_amount - COALESCE(paid_amount, 0.00)`
   - `days_overdue`: `DATEDIFF('2026-10-10', due_date)`

<details>
<summary>🔍 Click to view Exercise Solutions & Answer Key</summary>

### Answer Key:

#### Exercise 1 Solution:
```sql
SELECT product_id, LOWER(TRIM(raw_product_name)) AS clean_name 
FROM product_catalog;
```

#### Exercise 2 Solution:
```sql
SELECT product_id, list_price, ROUND(list_price * 0.18, 2) AS tax_amount 
FROM product_catalog;
```

#### Exercise 3 Solution:
```sql
SELECT 
    CURRENT_DATE AS today,
    DATE_ADD(CURRENT_DATE, INTERVAL 45 DAY) AS future_date,
    DATEDIFF(DATE_ADD(CURRENT_DATE, INTERVAL 45 DAY), CURRENT_DATE) AS days_difference;
```

#### Exercise 4 Solution:
```sql
SELECT raw_product_name, COALESCE(discount_rate, 0.00) AS safe_discount 
FROM product_catalog;
```

#### Exercise 5 Solution:
```sql
SELECT total_revenue / NULLIF(total_orders, 0) AS avg_order_value 
FROM store_sales;
```

#### Mini Challenge Solution:

```sql
-- Step 1: Create invoices table schema
CREATE TABLE IF NOT EXISTS customer_invoices (
    invoice_id INT PRIMARY KEY,
    client_name VARCHAR(100) NOT NULL,
    gross_amount DECIMAL(10, 2) NOT NULL,
    paid_amount DECIMAL(10, 2),
    due_date DATE NOT NULL
);

-- Step 2: Insert sample invoices
INSERT INTO customer_invoices (invoice_id, client_name, gross_amount, paid_amount, due_date)
VALUES 
    (101, 'Acme Corp', 5000.00, 2000.00, '2026-09-01'),
    (102, 'Beta LLC', 3500.00, NULL, '2026-09-15'),
    (103, 'Gamma Inc', 1200.00, 1200.00, '2026-10-01');

-- Step 3: Run calculation query
SELECT 
    client_name,
    gross_amount,
    COALESCE(paid_amount, 0.00) AS paid_amount_display,
    gross_amount - COALESCE(paid_amount, 0.00) AS unpaid_balance,
    DATEDIFF('2026-10-10', due_date) AS days_overdue
FROM customer_invoices;
```

**Expected Output (Calculated against reference date `'2026-10-10'`):**

```text
+-------------+--------------+---------------------+----------------+--------------+
| client_name | gross_amount | paid_amount_display | unpaid_balance | days_overdue |
+-------------+--------------+---------------------+----------------+--------------+
| Acme Corp   |      5000.00 |             2000.00 |        3000.00 |           39 |
| Beta LLC    |      3500.00 |                0.00 |        3500.00 |           25 |
| Gamma Inc   |      1200.00 |             1200.00 |           0.00 |            9 |
+-------------+--------------+---------------------+----------------+--------------+
```

*(Explanation: Beta LLC's NULL payment is converted to 0.00 via COALESCE, yielding unpaid balance = $3,500.00. Days overdue are calculated relative to '2026-10-10').*

</details>

---

## 🔗 Related Topics

- [SQL Data Types & NULL Values](04-data-types-and-null.html)
- [SQL Joins & Table Relationships](14-joins.html)
- [Conditional Logic with CASE](16-case-expressions.html)
- [SQL Window Functions](25-window-functions.html)

---

## 🧭 Navigation

[← Previous: SQL Joins](14-joins.html) | [SQL Home](./) | [Next: CASE Expressions →](16-case-expressions.html)
