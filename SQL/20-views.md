---
layout: default
title: "20 views"
---

# 👁️ Views & Virtual Tables in SQL

> 🟡 Intermediate

## 📖 Definition

A **SQL View** is a virtual table defined by a stored `SELECT` query. Unlike physical tables, a standard (regular) view does not store data on disk; instead, it dynamically executes its underlying `SELECT` query every time the view is queried. A **Materialized View**, in contrast, physically persists query results on disk and must be refreshed periodically.

---

## 🌐 Multilingual Explanation

### English
Views act as custom abstractions or virtual layers over complex physical tables. They allow developers to hide complex table joins, encapsulate multi-table business logic, and restrict user access to sensitive columns (such as passwords, credit card numbers, or social security details).

### Hindi (Roman Script)
SQL View ek virtual table hoti hai jo kisi `SELECT` query par base hoti hai. Yeh disk par alag se data store nahi karti, balki jab bhi aap view ko query karte hain, yeh background mein original table se fresh data fetch karti hai. Complex joins ko simplify karne ke liye views ka use hota hai.

### Marathi (Roman Script)
SQL View mhanje ek virtual table ji `SELECT` query var aadharit aste. Ti disk var veglatha data store karat nahi. Jevha tumhi view query karta, tevha ti original tables madhun ch data dakhavate. Complex joins aani security sathi views cha vapar hoto.

### Hinglish
Views ko aap ek saved `SELECT` query ki tarah samajh sakte hain jise aap regular table ki tarah `SELECT * FROM view_name` karke query kar sakte hain. Subqueries aur complex `JOIN` statements ko encapsulate karne ke liye views sabse best practice hain.

---

## 🤔 Why Do We Use Views?

1. **Query Simplification & Code Reuse**: Encapsulate multi-table `JOIN` operations, aggregate calculations, and window functions behind a single, readable view name.
2. **Column-Level & Row-Level Security**: Expose specific public columns (e.g. `employee_id`, `department`) while hiding sensitive private columns (e.g. `salary`, `ssn`, `password_hash`).
3. **Legacy Schema Backward Compatibility**: Refactor underlying database tables without breaking legacy client applications that query the original view interface.
4. **Consistency**: Ensure all team members and business intelligence tools use identical, standardized business calculations.

---

## 📝 Types of Views in SQL

| View Type | Storage Mechanism | Data Freshness | Performance Impact | Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Standard (Virtual) View** | Only stores the `SELECT` query definition. | Always 100% fresh real-time data. | Query executes on every request. | Abstraction, security, query reuse. |
| **Materialized View** | Stores query results physically on disk. | Cached (requires `REFRESH`). | Blazing fast read performance for heavy reporting. | Data warehousing, heavy aggregations. |
| **Updatable View** | Maps directly to a single base table row. | Real-time bi-directional sync. | Direct write operations. | Simplified single-table updates. |

---

## 💡 Practical Production Examples

### Example 1: Creating a Security View (Restricting Sensitive Columns)

Expose employee contact details while hiding private salary and SSN data:

```sql
-- 1. Create a secure view for general department staff
CREATE VIEW public_employee_directory AS
SELECT 
    emp_id,
    first_name,
    last_name,
    email,
    department_id,
    job_title
FROM employees
WHERE is_active = TRUE;

-- 2. Query the view like a regular table
SELECT first_name, last_name, email, job_title
FROM public_employee_directory
WHERE department_id = 4
ORDER BY last_name ASC;
```

---

### Example 2: Encapsulating Complex Joins & Calculations

Simplify multi-table reporting for sales orders, customers, and payment metrics:

```sql
CREATE OR REPLACE VIEW customer_sales_summary AS
SELECT 
    c.customer_id,
    CONCAT(c.first_name, ' ', c.last_name) AS customer_name,
    c.country,
    COUNT(o.order_id) AS total_orders,
    COALESCE(SUM(o.total_amount), 0.00) AS lifetime_spend,
    MAX(o.order_date) AS last_order_date
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.first_name, c.last_name, c.country;

-- Query the complex join with a simple single clause:
SELECT customer_name, lifetime_spend 
FROM customer_sales_summary 
WHERE lifetime_spend > 1000.00;
```

---

### Example 3: Materialized View for High-Performance Analytics (PostgreSQL)

Cache heavy aggregate computations for dashboard reporting:

```sql
-- 1. Create Materialized View storing pre-computed results
CREATE MATERIALIZED VIEW mv_monthly_revenue_summary AS
SELECT 
    DATE_TRUNC('month', order_date) AS sales_month,
    COUNT(order_id) AS total_orders,
    SUM(total_amount) AS gross_revenue
FROM orders
GROUP BY DATE_TRUNC('month', order_date);

-- 2. Query the pre-computed materialized view instantly
SELECT sales_month, gross_revenue 
FROM mv_monthly_revenue_summary 
ORDER BY sales_month DESC;

-- 3. Periodically refresh the cached data (e.g. via nightly cron job)
REFRESH MATERIALIZED VIEW CONCURRENTLY mv_monthly_revenue_summary;
```

---

## ⚠️ Common Mistakes & Misconceptions

- **Assuming Standard Views Cache Data**: Standard views DO NOT cache data. Running a query against a view runs the underlying `SELECT` query every single time.
- **Attempting to Update Non-Updatable Views**: You CANNOT issue `INSERT`, `UPDATE`, or `DELETE` statements against views that contain `GROUP BY`, `DISTINCT`, `HAVING`, `UNION`, or aggregate functions.
- **Over-Nesting Views**: Creating views on top of other views (`View_A` $\rightarrow$ `View_B` $\rightarrow$ `View_C`) degrades query optimizer efficiency and leads to performance bottlenecks.
- **Forgetting Materialized View Refreshes**: Materialized view data remains stale until explicit `REFRESH MATERIALIZED VIEW` commands are run.

---

## 🧪 Try It Yourself & Practice Exercises

1. Create a view named `high_value_products` that selects all products with a unit price greater than $100 and stock level above 0.
2. Query `high_value_products` to display only the product name and price, sorted alphabetically.

---

## 🎯 Mini Challenge

Create a view named `department_salary_stats` that calculates `department_id`, total employee count, average salary (rounded to 2 decimal places), and maximum salary for each active department. Explain why this view cannot accept direct `INSERT` statements.

---

## 🔗 Related Topics

- [SQL Joins & Relationships](14-joins.html)
- [Indexes & Query Performance](21-indexes-and-performance.html)
- [Common Table Expressions (CTEs)](23-ctes.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: Normalization](19-normalization.html) | [Next: Indexes & Performance →](21-indexes-and-performance.html)
