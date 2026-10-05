---
layout: default
title: "16 sql functions"
---

# SQL Built-in Functions: String, Numeric, Date & NULL Handling

> 🟡 Intermediate

---

## 📖 Definition

An **SQL Function** is a built-in operation that accepts input values (arguments), performs a calculation or transformation, and returns a computed value. SQL functions are broadly divided into **Single-Row (Scalar) Functions** (which operate on individual values per row) and **Multi-Row (Aggregate) Functions** (which calculate a single summary value across multiple rows).

---

## 🇮🇳 Hindi Explanation

SQL Functions database ke ander bane-banaye tool hote hain jo text, numbers, ya dates ko transform karte hain. For example, text ko capital karna (`UPPER`), prices ko round off karna (`ROUND`), do dates ke bich ka difference nikalna (`DATEDIFF`), ya missing values ko default text se replace karna (`COALESCE`). Single-row functions har row ke liye alag result dete hain.

---

## 🚩 Marathi Explanation

SQL Functions mhanje database madhye built-in asli-le tools aahet, je text, numbers, kiwa dates var prakriya karun result detat. Udaharanarth, text capital karne (`UPPER`), price round karun dakhavne (`ROUND`), kiwa `NULL` value chya aivaji default text dakhavne (`COALESCE`). Scalar functions pratyek row sathi swatantra result detat.

---

## 🧩 Categorization of Built-in Functions

```text
                        SQL FUNCTIONS
                              |
        +---------------------+---------------------+
        |                                           |
  Single-Row (Scalar) Functions            Multi-Row (Aggregate) Functions
  (Returns 1 value per input row)         (Summarizes multiple rows to 1 value)
        |                                           |
  +-----+-----+-----+-----+               +-----+-----+-----+-----+
  |     |     |     |                     |     |     |     |
String Num  Date  NULL                   COUNT SUM   AVG  MIN/MAX
```

---

## 1. 🔤 String Functions (Text Manipulation)

String functions process textual data in columns or string literals.

### Common String Functions Table
| Function | Description | Example | Result |
|:---|:---|:---|:---|
| `CONCAT(a, b)` | Combines two or more strings | `CONCAT('Hello', ' ', 'World')` | `'Hello World'` |
| `UPPER(str)` | Converts string to UPPERCASE | `UPPER('alice')` | `'ALICE'` |
| `LOWER(str)` | Converts string to lowercase | `LOWER('ADMIN')` | `'admin'` |
| `LENGTH(str)` | Returns string character length | `LENGTH('Database')` | `8` |
| `SUBSTRING(str, pos, len)` | Extracts a portion of string | `SUBSTRING('JavaScript', 1, 4)` | `'Java'` |
| `REPLACE(str, old, new)` | Replaces sub-string matches | `REPLACE('v1.0', '1.0', '2.0')` | `'v2.0'` |
| `TRIM(str)` | Removes leading/trailing spaces | `TRIM('  SQL  ')` | `'SQL'` |

### Practical Code Example
```sql
SELECT 
    emp_id,
    CONCAT(first_name, ' ', last_name) AS full_name,
    UPPER(department) AS dept_upper,
    LENGTH(first_name) AS name_char_count,
    SUBSTRING(email, 1, 5) AS email_prefix
FROM employees;
```

---

## 2. 🔢 Numeric Functions (Math Calculations)

Numeric functions perform mathematical operations on integers, decimals, and floats.

### Common Numeric Functions Table
| Function | Description | Example | Result |
|:---|:---|:---|:---|
| `ROUND(x, d)` | Rounds $x$ to $d$ decimal places | `ROUND(125.789, 2)` | `125.79` |
| `CEIL(x)` / `CEILING` | Rounds UP to nearest integer | `CEIL(4.1)` | `5` |
| `FLOOR(x)` | Rounds DOWN to nearest integer | `FLOOR(4.9)` | `4` |
| `ABS(x)` | Returns absolute positive value | `ABS(-50.25)` | `50.25` |
| `MOD(n, m)` / `%` | Returns remainder of $n / m$ | `MOD(10, 3)` | `1` |
| `POWER(x, y)` | Calculates $x^y$ | `POWER(2, 3)` | `8` |

### Practical Code Example
```sql
SELECT 
    product_id,
    price,
    price * 0.18 AS raw_tax,
    ROUND(price * 0.18, 2) AS tax_rounded,
    CEIL(price) AS price_ceiling,
    FLOOR(price) AS price_floor
FROM products;
```

---

## 3. 📅 Date & Time Functions

Date functions handle timestamps, date calculations, intervals, and formatting.

### Common Date Functions Table
| Function | Description | Example | Output |
|:---|:---|:---|:---|
| `CURRENT_DATE` | Returns current system date | `CURRENT_DATE` | `2026-10-05` |
| `CURRENT_TIMESTAMP` | Returns current date + time | `CURRENT_TIMESTAMP` | `2026-10-05 18:30:00` |
| `DATEDIFF(end, start)` | Days between two dates | `DATEDIFF('2026-12-25', '2026-12-20')` | `5` |
| `DATE_ADD(date, INTERVAL n DAY)` | Adds days/months to a date | `DATE_ADD('2026-01-01', INTERVAL 7 DAY)` | `2026-01-08` |
| `EXTRACT(part FROM date)` | Extracts YEAR, MONTH, DAY | `EXTRACT(YEAR FROM CURRENT_DATE)` | `2026` |

### Practical Code Example
```sql
SELECT 
    order_id,
    order_date,
    CURRENT_DATE AS today,
    DATEDIFF(CURRENT_DATE, order_date) AS days_since_order,
    DATE_ADD(order_date, INTERVAL 30 DAY) AS payment_due_date
FROM orders;
```

---

## 4. 🛡️ NULL Handling Functions

In SQL, `NULL` represents missing or unknown data. Operations on `NULL` (like `NULL + 10`) evaluate to `NULL`. Use NULL handling functions to provide fallback default values.

### A. `COALESCE(val1, val2, ...)`
Returns the **first non-NULL value** in the argument list.
```sql
SELECT 
    customer_id,
    name,
    COALESCE(phone, mobile, 'No Phone Available') AS contact_number
FROM customers;
```

### B. `NULLIF(val1, val2)`
Returns `NULL` if `val1` equals `val2`; otherwise returns `val1`. Useful to prevent **Division by Zero** errors!
```sql
-- Prevents Division by Zero error when total_items is 0!
SELECT 
    total_sales / NULLIF(total_items, 0) AS avg_item_price
FROM sales_summary;
```

---

## 📝 Complete Runnable Script & Output

```sql
-- Setup Sample Data
CREATE TABLE product_catalog (
    item_id INT PRIMARY KEY,
    item_code VARCHAR(20),
    price DECIMAL(10,2),
    discount_pct DECIMAL(5,2),
    category VARCHAR(50)
);

INSERT INTO product_catalog VALUES
(1, '  pro-laptop  ', 1200.50, 10.00, 'Electronics'),
(2, 'desk-chair', 250.00, NULL, 'Furniture'),
(3, 'usb-cable', 15.75, 0.00, NULL);

-- Execute Multi-Function Query
SELECT 
    item_id,
    UPPER(TRIM(item_code)) AS clean_code,
    price,
    COALESCE(discount_pct, 0.00) AS safe_discount,
    ROUND(price * (1 - COALESCE(discount_pct, 0)/100), 2) AS final_price,
    COALESCE(category, 'General') AS display_category
FROM product_catalog;
```

### Tabular Output
| item_id | clean_code | price | safe_discount | final_price | display_category |
|:---|:---|:---|:---|:---|:---|
| 1 | PRO-LAPTOP | 1200.50 | 10.00 | 1080.45 | Electronics |
| 2 | DESK-CHAIR | 250.00 | 0.00 | 250.00 | Furniture |
| 3 | USB-CABLE | 15.75 | 0.00 | 15.75 | General |

---

## ⚠️ Common Mistakes & Dialect Differences

1. **Dialect Variations for String Concatenation**:
   - MySQL/PostgreSQL: `CONCAT(a, b)`
   - PostgreSQL/SQLite/Oracle standard operator: `'Hello' || ' ' || 'World'`
   - SQL Server: `'Hello' + ' ' + 'World'`

2. **`COUNT(*)` vs `COUNT(column)`**:
   - `COUNT(*)` counts every row including `NULL`s.
   - `COUNT(column)` ignores rows where `column` is `NULL`.

3. **Function Side Effects on Indexes**:
   Applying scalar functions to indexed filter columns (e.g. `WHERE UPPER(email) = 'ALICE@TEST.COM'`) disables standard B-Tree index lookups unless an expression/function-based index exists!

---

## 🧪 Try It Yourself

1. Write a query to display employee names formatted as `Last Name, First Name` in uppercase.
2. Calculate the age of employees in years using `DATEDIFF` and `CURRENT_DATE`.
3. Use `COALESCE` to replace `NULL` shipping addresses with `'Self-Pickup'`.

---

## 🎯 Mini Challenge

Write a query that displays product name, price rounded up to the nearest whole integer (`CEIL`), and an formatted item code prefixed with `SKU-` (e.g., `SKU-LAPTOP`).

---

## 🔗 Related Topics

- [SQL Joins](15-joins.html)
- [Conditional Logic with CASE](17-case-expressions.html)
- [Window Functions](26-window-functions.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: SQL Joins](15-joins.html) | [Next: CASE Expressions →](17-case-expressions.html)

