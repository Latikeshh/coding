---
layout: default
title: "04 data types and null"
---

# SQL Data Types & NULL Values

> 🟢 Beginner

## 📖 Definition

In SQL, every column in a database table must be assigned an explicit **Data Type** that defines the nature of data it can store (whole numbers, exact decimals, variable text, dates) and how much storage memory it consumes.

Understanding data types also requires mastering **`NULL`**—the special SQL keyword used to signify missing, unknown, or unrecorded information.

---

## 🇮🇳 Hindi (Roman Script)

SQL Table mein har column ka ek Data Type hota hai jo decide karta hai ki usme kaisa data store hoga (jaise `INT` integers ke liye, `DECIMAL` paise/amount ke liye, `VARCHAR` text ke liye, aur `DATE` tarikh ke liye). Missing ya unknown values ko represent karne ke liye **`NULL`** ka use hota hai. Dhyan rakhein ki `NULL` zero (`0`) ya empty string (`''`) ke barabar nahi hota, aur `NULL` ko compare karne ke liye `=` ki jagah **`IS NULL`** ya **`IS NOT NULL`** ka use kiya jata hai.

---

## 🚩 Marathi (Roman Script)

Table madhye pratyek column sathi Data Type nivadava lagto (jasakhi `INT` sankhyansathi, `DECIMAL` paishansathi, `VARCHAR` navansathi, aani `DATE` tarikhesathi). Missing kiva mahit naslelya data sathi **`NULL`** cha wapar kela jato. `NULL` mhanje zero (`0`) kiva empty space (`''`) nahi. `NULL` sodvnyasathi `=` na vaparta **`IS NULL`** kiva **`IS NOT NULL`** chya wapar kele jato.

---

## 🤔 Why Do We Use It?

Selecting the correct data types and handling missing values properly is essential because:

- **Data Integrity:** Prevents invalid data entries (e.g., stopping alphabetical text from being stored in an age or price column).
- **Storage & Memory Efficiency:** Allocates appropriate disk space (e.g., using 1 byte for small status flags instead of 8 bytes).
- **Exact Financial Calculations:** Prevents floating-point rounding errors when processing monetary transactions.
- **Accurate Business Analytics:** Distinguishes between a customer having a **budget of $0.00** versus an **unknown budget (`NULL`)**.

---

## 🧠 Simple Analogy: Passport Application Form

Think of a table definition as a **Passport Application Form**:

- **Age Field:** Accepts whole numbers only $\rightarrow$ `INT`
- **Applicant Name:** Accepts variable-length text $\rightarrow$ `VARCHAR(100)`
- **Country Code:** Accepts exact 2-letter codes (`IN`, `US`) $\rightarrow$ `CHAR(2)`
- **Date of Birth:** Accepts calendar dates $\rightarrow$ `DATE`
- **Middle Name:** Optional field $\rightarrow$ If left blank, it is recorded as **`NULL`** *(Missing/Unknown, NOT "Zero" and NOT an empty string)*.

---

## 🔢 1. Numeric Data Types

SQL numeric types are divided into **Exact Integers**, **Exact Decimals**, and **Approximate Floating-Point Numbers**.

### A. Integers (Whole Numbers)
- **`INT` / `INTEGER`:** Standard 4-byte integer. Range: `-2,147,483,648` to `2,147,483,647`. Best for IDs, ages, quantities.
- **`BIGINT`:** 8-byte integer for massive numbers. Best for global transaction IDs or large system metrics.

### B. Exact Fixed-Point Decimals (Money & Currency)
- **`DECIMAL(p, s)` / `NUMERIC(p, s)`:** Stores exact numeric values without floating-point rounding errors.
  - **Precision ($p$):** Total maximum number of digits stored (both left and right of the decimal point).
  - **Scale ($s$):** Maximum number of digits stored to the right of the decimal point.

> 💡 **Example:** `DECIMAL(10, 2)` permits **10 total digits**, with **2 digits after the decimal point**. The largest value it can store is `99,999,999.99`. Always use `DECIMAL` for product prices, account balances, and tax calculations!

### C. Approximate Floating-Point Numbers
- **`FLOAT` / `DOUBLE`:** Stores approximate scientific floating-point numbers.
  - ⚠️ **Warning:** Never use `FLOAT` or `DOUBLE` for financial or currency calculations due to binary hardware rounding inaccuracies (e.g., `0.1 + 0.2` returning `0.30000000000000004`).

---

## 🔤 2. String & Text Data Types

### A. `VARCHAR(n)` (Variable-Length Text)
Stores variable-length text up to a maximum of $n$ characters.
- **Behavior:** If you store `'Rahul'` (5 characters) in a `VARCHAR(100)` column, it consumes only 5 characters of storage plus 1 length-byte.
- **Best Used For:** Names, email addresses, street names, cities.

### B. `CHAR(n)` (Fixed-Length Text)
Stores fixed-length text strings of exact length $n$.
- **Behavior:** If you store `'IN'` in a `CHAR(10)` column, the database engine pads it with 8 trailing spaces to fill all 10 characters.
- **Best Used For:** Fixed-length codes like 2-letter state/country codes (`IN`, `US`), status flags (`Y`/`N`), or hash strings.

### C. `TEXT` (Long Documents)
Stores long text up to 65,535 characters (in MySQL). Used for product descriptions, blog posts, or support tickets.

> 📌 **Rule of Thumb for Phone Numbers:** Phone numbers (e.g., `+919876543210`, `02212345678`) should **always** be stored as `VARCHAR` (strings), **never** as integers (`INT`)! Integer types strip leading zeros (`022` becomes `22`), cannot store `+` country codes, and reject formatting dashes.

---

## 📅 3. Date & Time Data Types

| Data Type | Format | Example | Description & Best Use Case |
| :--- | :---: | :---: | :--- |
| **`DATE`** | `YYYY-MM-DD` | `'2026-10-09'` | Calendar date without time. Best for birthdays, hire dates. |
| **`TIME`** | `HH:MM:SS` | `'14:30:00'` | Time of day or elapsed time interval. Best for shift hours. |
| **`DATETIME`** | `YYYY-MM-DD HH:MM:SS` | `'2026-10-09 14:30:00'` | Static date and time (Year 1000 to 9999). Unaffected by timezones. |
| **`TIMESTAMP`** | `YYYY-MM-DD HH:MM:SS` | `'2026-10-09 09:00:00'` | UTC timezone-aware timestamp (1970 to 2038). Auto-converts between UTC and local timezone. |

> 🌐 **MySQL `DATETIME` vs `TIMESTAMP`:** In MySQL, `TIMESTAMP` values are converted from the local session timezone to **UTC** for storage on disk, and back to the client's local timezone upon retrieval. `DATETIME` stores raw static dates regardless of server timezone settings.

---

## 🧠 Deep Dive: Understanding `NULL` in SQL

**`NULL`** represents missing, unknown, or unrecorded information.

### What `NULL` Is NOT:
- ❌ `NULL` is **NOT** equal to zero (`0`). Zero is a known number.
- ❌ `NULL` is **NOT** equal to an empty string (`''`). An empty string is a known text value of zero length.
- ❌ `NULL` is **NOT** equal to the literal string `'NULL'`.

```text
┌─────────────────┬─────────────────────────────────────────────────┐
│ Value           │ Real-World Interpretation                       │
├─────────────────┼─────────────────────────────────────────────────┤
│ budget = 0.00   │ Customer explicitly stated their budget is $0   │
│ budget = ''     │ Empty string text (Invalid numeric type)        │
│ budget = NULL   │ Customer HAS NOT stated their budget yet (Unknown)│
└─────────────────┴─────────────────────────────────────────────────┘
```

### Three-Valued Logic (3VL) & `NULL` Comparisons

In SQL, boolean logic evaluates to three possible states: **`TRUE`**, **`FALSE`**, or **`UNKNOWN`**.

Any mathematical calculation or equality comparison involving `NULL` returns `NULL` / `UNKNOWN`:

```sql
-- Arithmetic with NULL returns NULL:
SELECT 10 + NULL;  -- Result: NULL

-- Equality comparison with NULL yields UNKNOWN (Fails in WHERE clause!):
SELECT * FROM customer_leads WHERE phone_number = NULL; -- ❌ WRONG! Returns 0 rows!
```

### Correct `NULL` Operators: `IS NULL` & `IS NOT NULL`

To check for missing values in SQL, you must use **`IS NULL`** or **`IS NOT NULL`**:

```sql
-- ✅ Correct: Selects leads with missing phone numbers
SELECT * FROM customer_leads WHERE phone_number IS NULL;

-- ✅ Correct: Selects leads with valid, known phone numbers
SELECT * FROM customer_leads WHERE phone_number IS NOT NULL;
```

---

## 🛠️ Practical Working Example: `customer_leads` Table

Let's create a MySQL-compatible `customer_leads` table and explore `NULL` filtering and `COALESCE` functions.

```sql
-- 1. Create table schema
CREATE TABLE customer_leads (
    lead_id INT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15), -- NULL allowed (optional field)
    estimated_budget DECIMAL(10, 2), -- NULL allowed (unknown budget)
    signup_date DATE DEFAULT (CURRENT_DATE)
);

-- 2. Insert sample records containing available and NULL values
INSERT INTO customer_leads (lead_id, full_name, phone_number, estimated_budget, signup_date)
VALUES 
    (1, 'Aarav Mehta', '9876543210', 50000.00, '2026-10-01'),
    (2, 'Sneha Kapoor', NULL, 75000.00, '2026-10-02'),          -- Missing phone
    (3, 'Rohan Sharma', '9123456789', NULL, '2026-10-03'),        -- Unknown budget
    (4, 'Priya Singh', NULL, NULL, '2026-10-04');                 -- Missing phone & budget
```

### Query 1: Find Leads with Missing Phone Numbers (`IS NULL`)

```sql
SELECT lead_id, full_name, estimated_budget
FROM customer_leads
WHERE phone_number IS NULL;
```

#### 👀 Expected Output:

```text
+---------+--------------+------------------+
| lead_id | full_name    | estimated_budget |
+---------+--------------+------------------+
|       2 | Sneha Kapoor |         75000.00 |
|       4 | Priya Singh  |             NULL |
+---------+--------------+------------------+
```

---

### Query 2: Find Leads with Known Budgets (`IS NOT NULL`)

```sql
SELECT lead_id, full_name, estimated_budget
FROM customer_leads
WHERE estimated_budget IS NOT NULL;
```

#### 👀 Expected Output:

```text
+---------+--------------+------------------+
| lead_id | full_name    | estimated_budget |
+---------+--------------+------------------+
|       1 | Aarav Mehta  |         50000.00 |
|       2 | Sneha Kapoor |         75000.00 |
+---------+--------------+------------------+
```

---

### Query 3: Replacing `NULL` Display Values using `COALESCE`

The **`COALESCE(expr1, expr2, ...)`** function evaluates arguments in order and returns the **first non-NULL expression**.

```sql
SELECT 
    full_name,
    COALESCE(phone_number, 'N/A') AS contact_info,
    COALESCE(estimated_budget, 0.00) AS display_budget
FROM customer_leads;
```

#### 👀 Expected Output:

```text
+--------------+--------------+----------------+
| full_name    | contact_info | display_budget |
+--------------+--------------+----------------+
| Aarav Mehta  | 9876543210   |       50000.00 |
| Sneha Kapoor | N/A          |       75000.00 |
| Rohan Sharma | 9123456789   |           0.00 |
| Priya Singh  | N/A          |           0.00 |
+--------------+--------------+----------------+
```

> 📌 **Important Clarification on `COALESCE`:** Displaying `0.00` for `Rohan Sharma` using `COALESCE(estimated_budget, 0.00)` is only a display rule for user interfaces. It does **not** alter the underlying database table record, which remains `NULL` (unknown).

---

## 📊 Concise Data Types & NULL Comparison Matrix

| Comparison Category | Feature A | Feature B | Key Difference |
| :--- | :--- | :--- | :--- |
| **Numeric Precision** | `INT` (Whole integer) | `DECIMAL(10,2)` (Exact decimal) | `INT` stores whole numbers; `DECIMAL` stores exact money/prices. |
| **Financial Safety** | `DECIMAL` (Exact fixed-point) | `FLOAT` / `DOUBLE` (Approximate) | `DECIMAL` is exact; `FLOAT` suffers binary rounding errors. |
| **String Allocation** | `CHAR(10)` (Fixed length) | `VARCHAR(10)` (Variable length) | `CHAR` pads trailing spaces; `VARCHAR` uses only required bytes. |
| **Timezone Behavior** | `DATETIME` (Static date/time) | `TIMESTAMP` (UTC aware) | `DATETIME` stays fixed; `TIMESTAMP` converts to client timezone. |
| **Missing Values** | `NULL` (Unknown / Missing) | `0` or `''` (Known values) | `NULL` means unknown; `0` is numeric zero; `''` is empty text. |

---

## 🛠️ Common Mistakes & Best Practices

1. ❌ **Writing `WHERE column = NULL`**:
   - *Fix:* Always use `WHERE column IS NULL` or `WHERE column IS NOT NULL`.
2. ❌ **Storing Phone Numbers or Postal Codes as `INT`**:
   - *Fix:* Always store phone numbers, zip codes, and credit card numbers as `VARCHAR` to preserve leading zeros (`022`) and special characters (`+`).
3. ❌ **Using `FLOAT` or `DOUBLE` for Money Calculations**:
   - *Fix:* Use `DECIMAL(10,2)` for prices and monetary accounts to prevent floating-point rounding errors.
4. ❌ **Confusing `NULL` with Zero or Empty Text**:
   - *Fix:* Treat `NULL` as unknown data. Avoid converting `NULL` to `0` inside table storage unless a zero value is factually accurate.

---

## 🌍 Real-World Usage

- **E-Commerce Applications:** Uses `DECIMAL(10,2)` for item pricing, `TIMESTAMP` for order checkout logs, and `NULL` for optional customer discount codes.
- **Healthcare Records:** Uses `DATE` for birth dates, `DECIMAL(5,2)` for body weight/temperature, and `NULL` for unrecorded patient allergies.

---

## 🧪 Learning Exercises & Self-Checks

### Exercise 1: Finding Missing Data
Write an SQL query on the `customer_leads` table to retrieve all columns for leads who have **both** a missing phone number (`IS NULL`) and a missing budget (`IS NULL`).

### Exercise 2: Data Type Selection
Choose the single best SQL data type for each of the following real-world attributes:
1. Product Price (e.g., `$1,499.99`): `________________`
2. Customer Age (e.g., `25`): `________________`
3. US State Abbreviation (e.g., `'CA'`, `'NY'`): `________________`
4. User Bio / Product Description: `________________`
5. International Phone Number (e.g., `'+91-9876543210'`): `________________`

---

## 🎯 Mini Challenge

Write an SQL query on `customer_leads` that returns two columns:
1. `full_name`
2. `lead_status`: If `phone_number` is `NULL`, display `'Action Needed: Missing Phone'`; otherwise display `'Contact Info Available'`.

*(Hint: Use `COALESCE` or `IS NULL` logic).*

<details>
<summary>🔍 Click to view Exercise Solutions & Answer Key</summary>

### Answer Key:

#### Exercise 1 Solution:
```sql
SELECT *
FROM customer_leads
WHERE phone_number IS NULL 
  AND estimated_budget IS NULL;
```

#### Exercise 2 Solution:
1. Product Price $\rightarrow$ `DECIMAL(10,2)`
2. Customer Age $\rightarrow$ `INT` (or `TINYINT`)
3. US State Abbreviation $\rightarrow$ `CHAR(2)`
4. Product Description $\rightarrow$ `TEXT` (or `VARCHAR(500)`)
5. Phone Number $\rightarrow$ `VARCHAR(20)`

#### Mini Challenge Solution:

```sql
SELECT 
    full_name,
    CASE 
        WHEN phone_number IS NULL THEN 'Action Needed: Missing Phone'
        ELSE 'Contact Info Available'
    END AS lead_status
FROM customer_leads;
```

**Expected Output:**

```text
+--------------+------------------------------+
| full_name    | lead_status                  |
+--------------+------------------------------+
| Aarav Mehta  | Contact Info Available       |
| Sneha Kapoor | Action Needed: Missing Phone |
| Rohan Sharma | Contact Info Available       |
| Priya Singh  | Action Needed: Missing Phone |
+--------------+------------------------------+
```

</details>

---

## 🔗 Related Topics

- [Database & Table Basics (`CREATE`, `ALTER`, `DROP`)](03-databases-and-tables.html)
- [Database Keys (Primary, Foreign & Candidate Keys)](05-keys.html)
- [`INSERT` – Adding Data to Tables](06-insert.html)

---

## 🧭 Navigation

[← Previous: Database & Table Basics](03-databases-and-tables.html) | [SQL Home](./) | [Next: Database Keys →](05-keys.html)
