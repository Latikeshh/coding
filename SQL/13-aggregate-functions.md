---
layout: default
title: "13 aggregate functions"
---

# 📈 SQL Aggregate Functions (COUNT, SUM, AVG, MIN, MAX)

> 🟡 Intermediate

## 📖 Definition

An **Aggregate Function** in SQL performs a mathematical or statistical calculation on a set of values across multiple rows of a column and returns a single scalar summary value. SQL's core aggregate functions include `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX`.

---

## 🌐 Multilingual Explanation

### English
Aggregate functions collapse multiple input rows into a single summary output. Crucially, all aggregate functions (except `COUNT(*)`) automatically ignore `NULL` values during their calculation.

### Hindi (Roman Script)
Aggregate functions bohot saari rows ke data ko process karke ek single summary result dete hain. Main aggregate functions hain: `COUNT` (rows ginnne ke liye), `SUM` (total ke liye), `AVG` (average ke liye), `MIN` (sabse choti value ke liye), aur `MAX` (sabse badi value ke liye).

### Marathi (Roman Script)
Aggregate functions anek rows chya values varun ek single summary result tayar kartat. `COUNT` rows mojto, `SUM` berij karto, `AVG` sarasari kadhato, `MIN` sarvat khali value sodhto, aani `MAX` sarvat mothi value dakhvato.

### Hinglish
Jab aapko database se summary metrics nikalne hon—jaise "Total Sales kitni hui", "Average Order Value kya hai", ya "Active Users kitne hain"—tab aggregate functions use hote hain. `COUNT(*)` sabhi rows ko ginta hai, jabki `COUNT(column)` sirf non-NULL values ko ginta hai.

---

## 📊 Core Aggregate Functions Summary

| Function | Description | NULL Handling | Example Usage |
| :--- | :--- | :--- | :--- |
| `COUNT(*)` | Counts total number of rows in result set. | Includes `NULL` rows. | `SELECT COUNT(*) FROM orders;` |
| `COUNT(col)` | Counts non-NULL entries in specific column. | Ignores `NULL` values. | `SELECT COUNT(email) FROM users;` |
| `COUNT(DISTINCT col)` | Counts unique non-NULL values. | Ignores `NULL` values. | `SELECT COUNT(DISTINCT country) FROM users;` |
| `SUM(col)` | Calculates total sum of numeric values. | Ignores `NULL` values. | `SELECT SUM(amount) FROM sales;` |
| `AVG(col)` | Calculates arithmetic mean average. | Ignores `NULL` values. | `SELECT AVG(score) FROM exams;` |
| `MIN(col)` | Returns minimum value (numbers/dates/text). | Ignores `NULL` values. | `SELECT MIN(price) FROM products;` |
| `MAX(col)` | Returns maximum value (numbers/dates/text). | Ignores `NULL` values. | `SELECT MAX(order_date) FROM orders;` |

---

## 💡 Practical Production Examples

### Example 1: Comprehensive E-Commerce Analytics Query

Calculate order counts, total revenue, average spend, and price range from an `orders` table:

```sql
SELECT 
    COUNT(*) AS total_order_rows,
    COUNT(payment_date) AS paid_orders_count,
    COUNT(DISTINCT customer_id) AS unique_purchasers,
    COALESCE(SUM(total_amount), 0.00) AS total_gross_revenue,
    ROUND(AVG(total_amount), 2) AS average_order_value,
    MIN(total_amount) AS cheapest_order,
    MAX(total_amount) AS highest_order
FROM orders
WHERE order_date >= '2025-01-01';
```

#### Expected Query Output:

| total_order_rows | paid_orders_count | unique_purchasers | total_gross_revenue | average_order_value | cheapest_order | highest_order |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1500 | 1420 | 850 | 185450.00 | 123.63 | 12.50 | 2499.00 |

---

### Example 2: Handling NULL Values in Aggregations with COALESCE

When computing averages on nullable columns, `AVG()` divides the sum by the count of **non-NULL** entries:

```sql
-- Create sample table
CREATE TABLE employee_bonuses (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    bonus_amount DECIMAL(10,2)
);

INSERT INTO employee_bonuses VALUES
(1, 'Alice', 5000.00),
(2, 'Bob', 3000.00),
(3, 'Charlie', NULL); -- No bonus recorded

-- Calculate bonus metrics safely
SELECT 
    COUNT(*) AS total_employees,
    COUNT(bonus_amount) AS bonus_recipient_count,
    SUM(bonus_amount) AS total_bonus_payout,
    
    -- AVG ignores NULL Charlie (5000 + 3000) / 2 = 4000.00
    AVG(bonus_amount) AS avg_bonus_per_recipient,
    
    -- Treating NULL as 0.00 gives company-wide average across all 3 employees
    AVG(COALESCE(bonus_amount, 0.00)) AS avg_bonus_company_wide
FROM employee_bonuses;
```

---

## ⚠️ Common Mistakes & Pitfalls

- **Confusing `COUNT(*)` and `COUNT(column)`**: `COUNT(*)` counts all rows regardless of NULLs. `COUNT(column)` excludes rows where `column` is `NULL`.
- **Misunderstanding `AVG()` with NULLs**: `AVG()` does NOT treat `NULL` as `0`. If 2 out of 10 rows have values `100` and `100` and 8 are `NULL`, `AVG()` returns `100`, not `20`. Use `AVG(COALESCE(col, 0))` if you want `NULL` treated as zero.
- **Forgetting `GROUP BY` when mixing non-aggregated columns**: You CANNOT write `SELECT department_name, AVG(salary) FROM employees;` without a `GROUP BY department_name` clause.
- **Applying `SUM()` on Non-Numeric Types**: Applying `SUM()` on VARCHAR columns causes a type casting error.

---

## 🧪 Try It Yourself & Practice Exercises

1. Write a query on a `products` table that finds the total count of products, average price, cheapest price, and most expensive price.
2. Count how many unique product categories exist in `products` using `COUNT(DISTINCT category)`.

---

## 🎯 Mini Challenge

Write a single query on a `sales` table for the `'West'` region that returns:
- Total number of transaction records (`total_transactions`)
- Number of confirmed paid transactions (`paid_transactions`)
- Total sales revenue (`total_revenue`)
- Average transaction revenue rounded to 2 decimal places (`avg_revenue`)
- Ensure `NULL` revenue totals safely default to `0.00` using `COALESCE()`.

---

## 🔗 Related Topics

- [GROUP BY & HAVING Clauses](14-group-by-and-having.html)
- [SQL Data Types & NULL Values](04-data-types-and-null.html)
- [SQL Window Functions](26-window-functions.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: Primary Keys & Foreign Keys](12-primary-and-foreign-keys.html) | [Next: GROUP BY & HAVING →](14-group-by-and-having.html)
