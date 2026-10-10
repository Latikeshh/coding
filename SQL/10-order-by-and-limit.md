---
layout: default
title: "10 order by and limit"
---

# Sorting & Limiting Results (`ORDER BY`, `LIMIT`)

> 🟢 Beginner

## 📖 Definition

- **`ORDER BY`:** Sorts the rows in a query result set in ascending (`ASC`) or descending (`DESC`) order based on one or more specified columns.
- **`LIMIT` & `OFFSET`:** Restricts the maximum number of rows returned by a query (`LIMIT`) and specifies how many leading rows to skip before returning results (`OFFSET`), forming the backbone of web application pagination.

---

## 🇮🇳 Hindi (Roman Script)

Query results ko kisi specific order mein arrange karne ke liye **`ORDER BY`** clause ka use hota hai. Default sorting ascending (`ASC`) hoti hai (A-to-Z, 1-to-9), jabki descending (`DESC`) ke liye explicitly `DESC` likhna padta hai. Query se top records ya fixed row count return karne ke liye **`LIMIT`** aur rows skip karke pages navigate karne ke liye **`OFFSET`** ka istemal kiya jata hai.

---

## 🚩 Marathi (Roman Script)

Query madhun milnara data tharavik kramat (sorting) lavnyasathi **`ORDER BY`** clause vaparla jato. Omitted astana sorting `ASC` (lahannatun motha) aste, tar `DESC` cha wapar mothyanatun lahan kramat data lavnyasathi hoto. Result madhun tharavik rows baher kadhnyasathi **`LIMIT`** aani pagination sathi **`OFFSET`** cha wapar kela jato.

---

## 🤔 Why Do We Use It?

In relational database theory, **tables are unordered sets of rows**. When you execute a basic `SELECT * FROM table;` query, the database engine returns rows in an arbitrary physical disk order. 

Using `ORDER BY` and `LIMIT` is essential to:

- Display leaderboard rankings (e.g., "Top 10 Highest Spenders" or "Most Recent Orders").
- Sort catalog items alphabetically or by price (e.g., "Price: Low to High").
- Build scalable web pagination controls (e.g., displaying 10 products per page).
- Break ties deterministically so identical query runs always return rows in predictable sequence.

---

## 🧠 Simple Analogy: Shopping Search Filters

Think of `ORDER BY` and `LIMIT` as the **Sorting & Pagination Controls on an Online Shopping Portal**:

```text
┌──────────────────────────────────────┬──────────────────────────────────────────┐
│ Shopping Portal UI Control           │ SQL Query Equivalent                     │
├──────────────────────────────────────┼──────────────────────────────────────────┤
│ Sort By: "Price: High to Low"        │ ORDER BY price DESC                      │
│ Sort By: "Category A-Z, Price High"  │ ORDER BY category ASC, price DESC        │
│ Show: "Top 5 Featured Items"         │ ORDER BY rating DESC LIMIT 5             │
│ Pagination: "Page 2 (Items 11-20)"   │ ORDER BY item_id ASC LIMIT 10 OFFSET 10  │
└──────────────────────────────────────┴──────────────────────────────────────────┘
```

---

## 📝 SQL Clause Execution Order

In MySQL, SQL clauses **must** be written in strict syntactic order:

```sql
SELECT column1, column2         -- 1. Which columns to project
FROM table_name                 -- 2. Which table to query
WHERE condition                 -- 3. Filter matching rows (Optional)
ORDER BY col1 ASC, col2 DESC    -- 4. Sort result set (Optional)
LIMIT count OFFSET offset_val;  -- 5. Restrict row count and skip rows (Optional)
```

> 🚨 **Syntax Order Rule:** Placing `ORDER BY` or `LIMIT` before `WHERE` or `FROM` results in a SQL syntax error (`ERROR 1064 (42000)`).

---

## 🔢 1. Sorting Results (`ORDER BY`)

### A. Ascending vs Descending Order
- **`ASC` (Ascending):** Sorts numbers low-to-high (`1` to `999`), text A-to-Z, and dates oldest-to-newest. **`ASC` is the default** if no direction is specified.
- **`DESC` (Descending):** Sorts numbers high-to-low (`999` to `1`), text Z-to-A, and dates newest-to-oldest.

```sql
-- Default Ascending Sort (A-Z)
SELECT full_name, city FROM customers ORDER BY city ASC;

-- Explicit Descending Sort (Highest to Lowest)
SELECT full_name, total_spent FROM customers ORDER BY total_spent DESC;
```

---

### B. Multi-Column Sorting
When multiple columns are specified, the database engine sorts by the first column. If two or more rows share **identical values** in the first column, the second column is used as a secondary tie-breaker:

```sql
-- Sorts by city alphabetically; within each city, sorts by total_spent highest first
SELECT full_name, city, total_spent
FROM customers
ORDER BY city ASC, total_spent DESC;
```

---

### C. Deterministic Sorting & Tie-Breakers
If two rows have identical values in the sort column (e.g. two customers both spending `$125,000.00`), the database engine may return them in non-deterministic order.

To guarantee reproducible, deterministic results across page reloads, **always add a unique column (such as Primary Key `customer_id`) as the final tie-breaker**:

```sql
-- Deterministic sorting: Uses customer_id ASC as a guaranteed tie-breaker
SELECT customer_id, full_name, city, total_spent
FROM customers
ORDER BY total_spent DESC, customer_id ASC;
```

---

## 🎯 2. Limiting Rows & Pagination (`LIMIT` & `OFFSET`)

### A. Restricting Result Rows (`LIMIT`)
The `LIMIT` clause restricts the maximum number of rows returned:

```sql
-- Returns only the top 3 highest spending customers
SELECT full_name, total_spent
FROM customers
ORDER BY total_spent DESC
LIMIT 3;
```

---

### B. Skipping Rows (`OFFSET`)
The `OFFSET` clause specifies how many rows to skip from the top of the sorted result set before returning rows:

```sql
-- Skips the top 3 rows and returns the next 3 rows (Rows 4, 5, 6)
SELECT full_name, total_spent
FROM customers
ORDER BY total_spent DESC
LIMIT 3 OFFSET 3;
```

> 🌐 **MySQL Shorthand Syntax:** MySQL and MariaDB also support `LIMIT offset_val, count` syntax (e.g. `LIMIT 3, 3` skips 3 rows and returns 3 rows). However, using `LIMIT count OFFSET offset_val` is standard ISO SQL practice and easier to read.

---

### C. Web Application Pagination Formula
When building web application pages (e.g., Page 1, Page 2, Page 3), calculate `OFFSET` dynamically using this formula:

$$\text{OFFSET} = (\text{Page Number} - 1) \times \text{Page Size}$$

| Page Number | Items Per Page (`LIMIT`) | Formula Calculation | Resulting SQL Clause |
| :---: | :---: | :--- | :--- |
| **Page 1** | 10 items | `(1 - 1) * 10 = 0` | `LIMIT 10 OFFSET 0` (Items 1–10) |
| **Page 2** | 10 items | `(2 - 1) * 10 = 10` | `LIMIT 10 OFFSET 10` (Items 11–20) |
| **Page 3** | 10 items | `(3 - 1) * 10 = 20` | `LIMIT 10 OFFSET 20` (Items 21–30) |

---

## 🔍 3. 2nd Row in Sorted List vs 2nd-Highest DISTINCT Value

Beginners frequently confuse these two distinct analytical requirements:

### Task 1: Get the 2nd Row in a Sorted List
Returns a single row located at position #2 in the sorted result set, regardless of duplicate spending amounts:

```sql
SELECT customer_id, full_name, total_spent
FROM customers
ORDER BY total_spent DESC, customer_id ASC
LIMIT 1 OFFSET 1;
```

---

### Task 2: Get the 2nd-Highest DISTINCT Value (and All Customers Tied For It)
If two top spenders are tied at `$125,000.00`, the 2nd row in the list is still `$125,000.00`. To find the **2nd-highest distinct spending amount** (`$85,000.00`) and return **all customers** who spent that amount, use `SELECT DISTINCT` with a subquery:

```sql
-- Step 1: Find the 2nd-highest distinct spending amount ($85,000.00)
SELECT DISTINCT total_spent
FROM customers
ORDER BY total_spent DESC
LIMIT 1 OFFSET 1;

-- Step 2: Retrieve ALL customers matching that 2nd-highest distinct amount
SELECT customer_id, full_name, city, total_spent
FROM customers
WHERE total_spent = (
    SELECT DISTINCT total_spent
    FROM customers
    ORDER BY total_spent DESC
    LIMIT 1 OFFSET 1
);
```

---

## 🛠️ Complete Practical Workflow & Customer Example

Let's execute a complete MySQL-compatible workflow using a `customers` table with six sample records, demonstrating multi-column sorting, deterministic tie-breakers, and pagination.

```sql
-- 1. Create customers table schema
CREATE TABLE IF NOT EXISTS customers (
    customer_id INT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    city VARCHAR(50) NOT NULL,
    total_spent DECIMAL(10, 2) NOT NULL
);

-- 2. Insert sample customer records using explicit column syntax
INSERT INTO customers (customer_id, full_name, city, total_spent)
VALUES 
    (1, 'Aarav Mehta', 'Mumbai', 125000.00),
    (2, 'Sneha Kapoor', 'Delhi', 45000.00),
    (3, 'Rohan Sharma', 'Mumbai', 85000.00),
    (4, 'Priya Singh', 'Bengaluru', 32000.00),
    (5, 'Kiran Deshmukh', 'Pune', 125000.00),
    (6, 'Vikram Aditya', 'Mumbai', 85000.00);
```

---

### Query 1: Top 3 Spenders with Deterministic Tie-Breaker (`total_spent DESC, customer_id ASC`)

Note that `Aarav Mehta` ($125,000.00) and `Kiran Deshmukh` ($125,000.00) are tied for highest spending. Adding `customer_id ASC` ensures `Aarav` (ID 1) consistently appears before `Kiran` (ID 5).

```sql
SELECT customer_id, full_name, city, total_spent
FROM customers
ORDER BY total_spent DESC, customer_id ASC
LIMIT 3;
```

#### 👀 Expected Output:

```text
+-------------+----------------+-----------+-------------+
| customer_id | full_name      | city      | total_spent |
+-------------+----------------+-----------+-------------+
|           1 | Aarav Mehta    | Mumbai    |   125000.00 |
|           5 | Kiran Deshmukh | Pune      |   125000.00 |
|           3 | Rohan Sharma   | Mumbai    |    85000.00 |
+-------------+----------------+-----------+-------------+
```

---

### Query 2: Multi-Column Sorting (City A-Z, then Highest Spender First)

```sql
SELECT customer_id, full_name, city, total_spent
FROM customers
ORDER BY city ASC, total_spent DESC;
```

#### 👀 Expected Output:

```text
+-------------+----------------+-----------+-------------+
| customer_id | full_name      | city      | total_spent |
+-------------+----------------+-----------+-------------+
|           4 | Priya Singh    | Bengaluru |    32000.00 |
|           2 | Sneha Kapoor   | Delhi     |    45000.00 |
|           1 | Aarav Mehta    | Mumbai    |   125000.00 |
|           3 | Rohan Sharma   | Mumbai    |    85000.00 |
|           6 | Vikram Aditya  | Mumbai    |    85000.00 |
|           5 | Kiran Deshmukh | Pune      |   125000.00 |
+-------------+----------------+-----------+-------------+
```

---

### Query 3: Finding All Customers Tied for 2nd-Highest DISTINCT Spending Amount

```sql
SELECT customer_id, full_name, city, total_spent
FROM customers
WHERE total_spent = (
    SELECT DISTINCT total_spent
    FROM customers
    ORDER BY total_spent DESC
    LIMIT 1 OFFSET 1
);
```

#### 👀 Expected Output:

```text
+-------------+---------------+--------+-------------+
| customer_id | full_name     | city   | total_spent |
+-------------+---------------+--------+-------------+
|           3 | Rohan Sharma  | Mumbai |    85000.00 |
|           6 | Vikram Aditya | Mumbai |    85000.00 |
+-------------+---------------+--------+-------------+
```

*(Note: The 1st highest distinct spending amount is $125,000.00. The 2nd highest distinct spending amount is $85,000.00. The subquery retrieves both `Rohan Sharma` and `Vikram Aditya` who are tied at $85,000.00).*

---

## 🛠️ Common Mistakes & Troubleshooting

| Error / Pitfall | Cause | Recommended Fix |
| :--- | :--- | :--- |
| **`ERROR 1064 (42000): Syntax Error`** | Placing `LIMIT` or `ORDER BY` before `WHERE` or `FROM`. | Follow strict SQL order: `SELECT` $\rightarrow$ `FROM` $\rightarrow$ `WHERE` $\rightarrow$ `ORDER BY` $\rightarrow$ `LIMIT`. |
| **Inconsistent Pagination Across Page Reloads** | Sorting by a non-unique column without a tie-breaker. | Always include a unique column (e.g. `PRIMARY KEY customer_id ASC`) as the final sort column. |
| **Confusing 2nd Row vs 2nd-Highest Distinct Value** | Using `LIMIT 1 OFFSET 1` directly when top spenders are tied. | Use `SELECT DISTINCT total_spent ... LIMIT 1 OFFSET 1` in a subquery to find distinct value ties. |
| **Assuming Results Have Default Sort Order** | Expecting `SELECT * FROM table;` to always return rows in primary key or insertion order. | Always specify `ORDER BY` explicitly whenever row sequence matters. |
| **Incorrect `OFFSET` Calculation** | Using `OFFSET 20` for Page 2 with 10 items per page. | Use formula `OFFSET = (Page - 1) * Page Size`. Page 2 offset is `(2 - 1) * 10 = 10`. |

---

## 🌍 Real-World Usage

- **E-Commerce Leaderboards:** `ORDER BY sales_count DESC LIMIT 10` for "Best Sellers".
- **Product Price Sorting:** `ORDER BY price ASC, product_id ASC` for "Price: Low to High".
- **Social Media Feeds:** `ORDER BY post_timestamp DESC LIMIT 20 OFFSET 0` for "Recent Activity Feed".

---

## 🧪 Learning Exercises & Self-Checks

### Exercise 1: Top Cheapest Items
Write a query to retrieve the top 5 cheapest inventory items from a `store_inventory` table (`ORDER BY price ASC, item_id ASC LIMIT 5`).

### Exercise 2: Pagination Formula
Calculate the `OFFSET` value for **Page 3** of a blog post list displaying **15 posts per page**.

### Exercise 3: Multi-Column Sorting
Write an SQL query to select all customers sorted by `city` alphabetically (A-Z) and then by `total_spent` descending (highest first).

---

## 🎯 Mini Challenge

Write a query to display the customer(s) who spent the **2nd-highest DISTINCT total amount** from the `customers` table, including `full_name`, `city`, and `total_spent`.

<details>
<summary>🔍 Click to view Exercise Solutions & Answer Key</summary>

### Answer Key:

#### Exercise 1 Solution:
```sql
SELECT item_name, price 
FROM store_inventory 
ORDER BY price ASC, item_id ASC 
LIMIT 5;
```

#### Exercise 2 Solution:
- **Formula:** $\text{OFFSET} = (\text{Page Number} - 1) \times \text{Page Size}$
- **Calculation:** $(3 - 1) \times 15 = 30$
- **SQL Clause:** `LIMIT 15 OFFSET 30`

#### Exercise 3 Solution:
```sql
SELECT full_name, city, total_spent 
FROM customers 
ORDER BY city ASC, total_spent DESC;
```

#### Mini Challenge Solution:

```sql
SELECT full_name, city, total_spent
FROM customers
WHERE total_spent = (
    SELECT DISTINCT total_spent
    FROM customers
    ORDER BY total_spent DESC
    LIMIT 1 OFFSET 1
);
```

**Expected Output:**

```text
+---------------+--------+-------------+
| full_name     | city   | total_spent |
+---------------+--------+-------------+
| Rohan Sharma  | Mumbai |    85000.00 |
| Vikram Aditya | Mumbai |    85000.00 |
+---------------+--------+-------------+
```

</details>

---

## 🔗 Related Topics

- [Database & Table Basics (`CREATE TABLE`)](03-databases-and-tables.html)
- [`SELECT` – Reading & Querying Data](07-select.html)
- [Filtering Data with `WHERE`](08-where.html)
- [Operators in SQL](09-operators.html)
- [`UPDATE` & `DELETE` – Modifying Data](11-update-and-delete.html)

---

## 🧭 Navigation

[← Previous: Operators in SQL](09-operators.html) | [SQL Home](./) | [Next: UPDATE & DELETE →](11-update-and-delete.html)
