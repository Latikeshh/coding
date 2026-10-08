---
layout: default
title: "23 ctes"
---

# 🔗 Common Table Expressions (CTEs) & WITH Clause in SQL

> 🔴 Advanced

## 📖 Definition

A **Common Table Expression (CTE)** is a temporary, named result set defined using the `WITH` clause that exists exclusively within the execution scope of a single SQL statement (`SELECT`, `INSERT`, `UPDATE`, or `DELETE`). CTEs allow developers to break down huge, unreadable SQL queries into modular, self-contained logical building blocks.

---

## 🌐 Multilingual Explanation

### English
A CTE acts as a readable, named inline view defined right before the main query. Instead of writing deeply nested, unreadable subqueries in `FROM` or `JOIN` clauses, you define one or more CTEs at the top of your statement and reference them by name as if they were standard physical tables.

### Hindi (Roman Script)
CTE (`WITH` clause) ek temporary result set hota hai jo sirf ek SQL query ke dauran exist karta hai. Deeply nested subqueries likhne ke bajaye, aap query ke top par `WITH cte_name AS (...)` karke chote modular blocks bana sakte hain. Isse query padhna aur debug karna bohot aasan ho jata hai.

### Marathi (Roman Script)
CTE (`WITH` clause) mhanje ek temporary query result jo eka query sathi sathi vaparta yeto. Nested subqueries aevaji query chya suruvatila `WITH cte_name AS (...)` lihun modular parts tayar karta येतात. Tyamule query samajnyasathi aani maintain karnyasathi sopi hote.

### Hinglish
Complex reporting queries ko modular code mein convert karne ke liye CTEs (`WITH` clause) use hote hain. Chahne par aap multiple CTEs ko comma `,` se separate karke chain kar sakte hain. Subquery Spaghetti code ko clean, professional SQL mein badalne ka yeh sabse accha tariqa hai.

---

## 🤔 Why Use CTEs Instead of Subqueries?

| Feature | Subqueries | Common Table Expressions (CTEs) |
| :--- | :--- | :--- |
| **Readability** | Nested inside `FROM`/`WHERE`, hard to read bottom-up. | Top-down modular structure, reads left-to-right. |
| **Reusability** | Must be duplicated if used multiple times in a query. | Can be referenced multiple times in the main query. |
| **Chaining Ability** | Hard to chain without massive nesting depth. | Seamlessly chain multiple CTEs with commas. |
| **Recursion Support** | Not supported. | Fully supported via `WITH RECURSIVE`. |

---

## 📝 CTE Syntax & Structure

### Basic Single CTE Syntax

```sql
WITH cte_name AS (
    SELECT column1, column2, SUM(column3) AS total_val
    FROM table_name
    WHERE condition
    GROUP BY column1, column2
)
SELECT column1, total_val
FROM cte_name
WHERE total_val > 1000;
```

---

## 💡 Practical Production Examples

### Example 1: Simplifying Complex Aggregation & Filtering

Find top customers who spent more than the average customer spend:

```sql
WITH customer_spending AS (
    -- Step 1: Calculate lifetime spending per customer
    SELECT 
        customer_id, 
        COUNT(order_id) AS total_orders,
        SUM(total_amount) AS lifetime_spend
    FROM orders
    GROUP BY customer_id
),
overall_average AS (
    -- Step 2: Calculate overall average customer spend
    SELECT AVG(lifetime_spend) AS avg_spend
    FROM customer_spending
)
-- Step 3: Main query joining both CTEs
SELECT 
    cs.customer_id,
    cs.total_orders,
    cs.lifetime_spend,
    ROUND(oa.avg_spend, 2) AS overall_avg_spend
FROM customer_spending cs
CROSS JOIN overall_average oa
WHERE cs.lifetime_spend > oa.avg_spend
ORDER BY cs.lifetime_spend DESC;
```

---

### Example 2: Chaining Multiple CTEs for Sequential Data Pipelines

Filter paid orders, calculate customer totals, and join with customer profile metadata:

```sql
WITH paid_orders AS (
    -- Stage 1: Filter active paid transactions
    SELECT order_id, customer_id, total_amount, order_date
    FROM orders
    WHERE payment_status = 'PAID'
),
customer_aggregates AS (
    -- Stage 2: Aggregate paid totals per customer
    SELECT 
        customer_id, 
        COUNT(order_id) AS paid_order_count,
        SUM(total_amount) AS total_paid_amount
    FROM paid_orders
    GROUP BY customer_id
)
-- Stage 3: Final join with customer master table
SELECT 
    c.customer_id,
    CONCAT(c.first_name, ' ', c.last_name) AS full_name,
    c.email,
    ca.paid_order_count,
    ca.total_paid_amount
FROM customers c
INNER JOIN customer_aggregates ca ON c.customer_id = ca.customer_id
ORDER BY ca.total_paid_amount DESC;
```

---

### Example 3: Using CTEs inside DELETE or UPDATE Statements

Delete duplicate email entries while keeping the record with the lowest ID:

```sql
WITH duplicate_emails AS (
    SELECT 
        id,
        email,
        ROW_NUMBER() OVER (
            PARTITION BY email 
            ORDER BY id ASC
        ) AS row_num
    FROM users
)
DELETE FROM users
WHERE id IN (
    SELECT id 
    FROM duplicate_emails 
    WHERE row_num > 1
);
```

---

## ⚠️ Common Mistakes & Pitfalls

- **Placing Semicolons Mid-Query**: Placing a semicolon `;` right after the CTE closing parenthesis `)` breaks the statement. Semicolons belong ONLY at the very end of the main query.
- **Forgetting Commas Between Chained CTEs**: When declaring multiple CTEs, separate them with a comma `,`. Do NOT repeat the `WITH` keyword for subsequent CTEs!
- **Expecting Persistent Disk Storage**: CTEs do NOT persist on disk after query execution completes. For persistent objects, use Views or Permanent Tables.
- **Scope Misunderstanding**: A CTE cannot be referenced outside the single SQL statement where it is defined.

---

## 🧪 Try It Yourself & Practice Exercises

1. Write a query using a CTE named `recent_orders` that selects orders placed in the last 30 days, then calculate the average order total from that CTE.
2. Write a query with two chained CTEs: the first filters active employees, and the second calculates department-wise average salaries.

---

## 🎯 Mini Challenge

Write a query using CTEs that finds each department's total payroll expenditure, calculates the overall company average department payroll, and returns only those departments whose total payroll exceeds the overall company average.

---

## 🔗 Related Topics

- [Subqueries & Nested Queries](17-subqueries.html)
- [Recursive CTEs & Hierarchical Queries](24-recursive-ctes.html)
- [SQL Window Functions](25-window-functions.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: Transactions](22-transactions.html) | [Next: Recursive CTEs →](24-recursive-ctes.html)
