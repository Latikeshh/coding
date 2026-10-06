---
layout: default
title: "17 case expressions"
---

# 🔀 Conditional Logic with CASE Expressions in SQL

> 🟡 Intermediate

## 📖 Definition

The SQL **`CASE` expression** is a versatile control-flow construct that evaluates a sequence of boolean conditions and returns a specific scalar value when the first condition evaluates to `TRUE`. It serves as SQL's built-in `if-then-else` statement and can be embedded seamlessly within `SELECT`, `WHERE`, `GROUP BY`, `ORDER BY`, and `UPDATE` statements.

---

## 🌐 Multilingual Explanation

### English
`CASE` evaluates conditions sequentially from top to bottom. It returns the result corresponding to the first `WHEN` condition that evaluates to `TRUE`. If no condition matches, it returns the value specified in the optional `ELSE` clause. If `ELSE` is omitted and no conditions match, `CASE` returns `NULL`.

### Hindi (Roman Script)
`CASE` statement SQL ka `if-else` hai. Yeh conditions ko upar se neeche sequence mein check karta hai. Pehli `TRUE` condition ka result return hota hai. Agar koi condition match nahi hoti, toh `ELSE` ka value aata hai. Agar `ELSE` na likha ho, toh `NULL` return hota hai.

### Marathi (Roman Script)
`CASE` mhanje SQL madhil `if-else` logic. He conditions varun khali kramane tapasate. Pahili `TRUE` condition milalyas tyacha result milto. Kahi match na jhalyas `ELSE` cha result deto. Jar `ELSE` lihile nasael tar `NULL` result milto.

### Hinglish
SQL queries ke andar conditional logic apply karne ke liye `CASE` use karte hain. Jab aapko data ko categorize karna ho (jaise salary high/medium/low label karna) ya conditional aggregation karna ho (`SUM` with condition), `CASE` output columns derive karta hai.

---

## 🤔 Why Do We Use It?

1. **Dynamic Data Categorization**: Transform numeric values or status codes into human-readable business categories (e.g. Credit score $\rightarrow$ Excellent / Good / Poor).
2. **Conditional Aggregations**: Perform conditional counting or summing within aggregate functions (`SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END)`).
3. **Custom Sorting in ORDER BY**: Force specific rows to appear first or last in search result sets regardless of alphabetical order.
4. **Conditional Data Updates**: Apply variable discount rates or price adjustments in `UPDATE` statements.

---

## 📝 Syntax & Types of CASE Expressions

SQL supports two distinct forms of `CASE` expressions:

### Type 1: Searched CASE Expression (Most Flexible & Powerful)
Evaluates complex boolean expressions (`>`, `<`, `AND`, `OR`, `IS NULL`):

```sql
CASE
    WHEN condition_1 THEN result_1
    WHEN condition_2 THEN result_2
    WHEN condition_3 THEN result_3
    ELSE default_result
END
```

### Type 2: Simple CASE Expression (Value Comparison)
Compares a single expression directly against a list of candidate literal values:

```sql
CASE target_expression
    WHEN value_1 THEN result_1
    WHEN value_2 THEN result_2
    ELSE default_result
END
```

---

## 💡 Practical Production Examples

### Example 1: Categorizing Customer Order Sizes (Searched CASE)

```sql
SELECT 
    order_id, 
    customer_id,
    total_amount,
    CASE
        WHEN total_amount >= 1000.00 THEN 'VIP Tier'
        WHEN total_amount >= 500.00  THEN 'Gold Tier'
        WHEN total_amount >= 100.00  THEN 'Silver Tier'
        ELSE 'Standard Tier'
    END AS customer_tier
FROM orders
ORDER BY total_amount DESC;
```

#### Expected Query Output:

| order_id | customer_id | total_amount | customer_tier |
| :---: | :---: | :---: | :---: |
| 1042 | C881 | 1250.00 | VIP Tier |
| 1089 | C412 | 680.00 | Gold Tier |
| 1015 | C203 | 250.00 | Silver Tier |
| 1092 | C119 | 45.00 | Standard Tier |

---

### Example 2: Conditional Aggregation (Pivot-style Financial Metrics)

Calculate total revenue separated by payment method in a single summary row:

```sql
SELECT 
    COUNT(order_id) AS total_orders,
    SUM(CASE WHEN payment_method = 'Credit Card' THEN amount ELSE 0 END) AS card_revenue,
    SUM(CASE WHEN payment_method = 'UPI' THEN amount ELSE 0 END) AS upi_revenue,
    SUM(CASE WHEN payment_method = 'COD' THEN amount ELSE 0 END) AS cod_revenue
FROM transactions;
```

---

### Example 3: Custom Sorting in ORDER BY Clause

Display critical pending tickets at the top, followed by open, and lastly closed tickets:

```sql
SELECT ticket_id, subject, status, created_at
FROM support_tickets
ORDER BY 
    CASE status
        WHEN 'CRITICAL' THEN 1
        WHEN 'OPEN'     THEN 2
        WHEN 'PENDING'  THEN 3
        WHEN 'CLOSED'   THEN 4
        ELSE 5
    END,
    created_at DESC;
```

---

### Example 4: Conditional Bulk UPDATE Statement

Apply dynamic salary raises based on employee performance ratings:

```sql
UPDATE employees
SET salary = salary * 
    CASE performance_rating
        WHEN 5 THEN 1.15  -- 15% raise
        WHEN 4 THEN 1.10  -- 10% raise
        WHEN 3 THEN 1.05  -- 5% raise
        ELSE 1.00         -- No raise
    END
WHERE department_id = 10;
```

---

## ⚠️ Common Mistakes & Pitfalls

- **Forgetting `END` Keyword**: Every `CASE` block MUST terminate with `END`. Leaving out `END` causes a syntax error.
- **Incompatible Branch Data Types**: All `THEN` and `ELSE` branches MUST return compatible data types (e.g. returning a string in one branch and an integer in another causes type coercion errors).
- **Evaluating `NULL` with Simple CASE**: Writing `WHEN NULL` in a simple `CASE` will always fail because `NULL = NULL` is unknown. Use searched `CASE` with `WHEN column IS NULL`.
- **Branch Evaluation Order**: `CASE` stops checking conditions at the **first matching `TRUE` branch**. Place specific conditions before general ones.

---

## 🧪 Try It Yourself & Practice Exercises

1. Write a query on an `employees` table that categorizes staff into age brackets: `'Junior'` (< 25), `'Mid-Level'` (25–40), and `'Senior'` (> 40).
2. Write a `SELECT` statement that calculates total pass vs fail counts from an `exams` table using conditional `SUM(CASE ...)`.

---

## 🎯 Mini Challenge

Create a query on a `products` table displaying `product_name`, `stock_quantity`, and a dynamic label `stock_status`:
- `Out of Stock` if `stock_quantity = 0`
- `Critical Reorder` if `stock_quantity < 10`
- `Low Stock` if `stock_quantity` is between 10 and 30
- `Adequate Stock` for all other quantities
- Handle `NULL` quantities gracefully as `Unknown Status`.

---

## 🔗 Related Topics

- [SQL Built-in Functions](16-sql-functions.html)
- [GROUP BY & HAVING Clauses](14-group-by-and-having.html)
- [Subqueries & Nested Queries](18-subqueries.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: SQL Functions](16-sql-functions.html) | [Next: Subqueries →](18-subqueries.html)
