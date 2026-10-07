---
layout: default
title: "09 operators"
---

# Operators in SQL

> 🟢 Beginner

## 📖 Definition

**SQL Operators** are reserved symbols and keywords used in `WHERE` clauses to perform arithmetic calculations, comparison checks, logical evaluation, range matching, list membership checks, and wildcard pattern searching.

## 🇮🇳 Hindi

SQL mein conditional checks aur filtering ke liye comparison operators (`=`, `!=`, `>`, `<`), range checking (`BETWEEN`), membership checking (`IN`), wildcard search (`LIKE`), aur null checks (`IS NULL`) ka use hota hai.

## 🚩 Marathi

Data sodhnya sathi comparison, logical, `BETWEEN`, `IN`, aani `LIKE` operators vaparatat. Text search sathi `LIKE` operator sobat `%` aani `_` wildcards vaparatat.

## 📝 SQL Operator Categories

### 1. Comparison Operators
- `=` (Equal to)
- `<>` or `!=` (Not equal to)
- `>` (Greater than), `<` (Less than)
- `>=` (Greater than or equal to), `<=` (Less than or equal to)

### 2. Range & Membership Operators
- `BETWEEN min AND max`: Matches values within an inclusive range.
- `IN (val1, val2, ...)`: Matches values matching any item in a specified list.
- `NOT IN (...)`: Excludes matching list items.

### 3. Pattern Matching Operator (`LIKE` with Wildcards)
- `%`: Matches **zero or more characters** (e.g., `'A%'` matches `'Alex'`, `'Aarav'`, `'A'`).
- `_`: Matches **exactly one single character** (e.g., `'A_am'` matches `'Adam'`).

### 4. NULL Checking Operators
- `IS NULL`: Checks if column value is missing.
- `IS NOT NULL`: Checks if column value is present.

## 💡 Practical Example: Using Diverse SQL Operators

```sql
-- Sample Products Table
CREATE TABLE store_inventory (
    item_id INT PRIMARY KEY,
    item_name VARCHAR(100),
    category VARCHAR(50),
    price DECIMAL(10, 2),
    stock INT
);

INSERT INTO store_inventory VALUES 
(1, 'Gaming Laptop', 'Electronics', 75000.00, 15),
(2, 'Wireless Mouse', 'Electronics', 1200.00, 50),
(3, 'Mechanical Keyboard', 'Electronics', 4500.00, 25),
(4, 'Ergonomic Chair', 'Furniture', 12500.00, 8),
(5, 'Coffee Mug', 'Kitchen', 350.00, 100),
(6, 'USB-C Cable', 'Electronics', 499.00, 0);

-- Query 1: BETWEEN (Price between 1,000 and 15,000)
SELECT item_name, price FROM store_inventory 
WHERE price BETWEEN 1000.00 AND 15000.00;

-- Query 2: IN (Category is Electronics or Furniture)
SELECT item_name, category FROM store_inventory 
WHERE category IN ('Electronics', 'Furniture');

-- Query 3: LIKE Wildcard Search (Items starting with 'Wireless' or ending with 'Cable')
SELECT item_name, price FROM store_inventory 
WHERE item_name LIKE 'Wireless%' OR item_name LIKE '%Cable';
```

## 👀 Output

```text
Query 1 (BETWEEN 1000 AND 15000):
+---------------------+----------+

| item_name           | price    |
+---------------------+----------+

| Wireless Mouse      |  1200.00 |
| Mechanical Keyboard |  4500.00 |
| Ergonomic Chair     | 12500.00 |
+---------------------+----------+

Query 2 (IN ('Electronics', 'Furniture')):
+---------------------+-------------+

| item_name           | category    |
+---------------------+-------------+

| Gaming Laptop       | Electronics |
| Wireless Mouse      | Electronics |
| Mechanical Keyboard | Electronics |
| Ergonomic Chair     | Furniture   |
| USB-C Cable         | Electronics |
+---------------------+-------------+

Query 3 (LIKE Wildcard Pattern):
+----------------+---------+

| item_name      | price   |
+----------------+---------+

| Wireless Mouse | 1200.00 |
| USB-C Cable    |  499.00 |
+----------------+---------+
```

## ⚠️ Common Mistakes

- Using `=` instead of `LIKE` when searching with wildcards (`WHERE name = 'A%'` looks for literal text `'A%'` instead of names starting with A!).
- Forgetting that `BETWEEN` is **inclusive** of both boundary numbers.

## 🌍 Real-World Usage

E-commerce search bars (`LIKE '%search_term%'`), price filter sliders (`BETWEEN min AND max`), and multi-select category checkboxes (`IN (...)`).

## 🧪 Try It Yourself

1. Write a query to select items with `stock` between `10` and `50`.
2. Write a query to find all item names that contain the word `'Board'` using `LIKE`.

## 🎯 Mini Challenge

Write a query to select all items whose category is NOT IN `'Kitchen'` or `'Furniture'` AND whose price is less than `50000`.

## 🔗 Related Topics

- [Filtering Data with `WHERE`](07-where.html)
- [Sorting & Limiting Results](09-order-by-and-limit.html)

## 🧭 Navigation

[← SQL Home](./) | [← Previous: Filtering with WHERE](07-where.html) | [Next: Sorting & Limiting Results →](09-order-by-and-limit.html)


