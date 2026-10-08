---
layout: default
title: "13 group by and having"
---

# 📊 GROUP BY & HAVING Clauses in SQL

> 🟡 Intermediate

## 📖 Definition

The **`GROUP BY` clause** collapses rows sharing identical values in specified columns into summary rows. It is paired with aggregate functions (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`) to compute metrics per group. The **`HAVING` clause** filters these summarized groups after aggregation has taken place, serving as the `WHERE` clause for grouped data.

---

## 🌐 Multilingual Explanation

### English
`GROUP BY` partitions individual dataset records into distinct buckets based on shared column values. The key distinction between `WHERE` and `HAVING` lies in **when** they filter:
- `WHERE` filters individual raw rows **BEFORE** grouping occurs.
- `HAVING` filters aggregated group records **AFTER** grouping and calculation occur.

### Hindi (Roman Script)
`GROUP BY` milte-julte column values wali rows ko ek jagah group karke aggregate numbers (jaise total sum ya average) calculate karta hai. `WHERE` aur `HAVING` mein antar yeh hai: `WHERE` grouping hone se pehle raw rows ko filter karta hai, jabki `HAVING` grouping aur aggregation ke baad final groups ko filter karta hai.

### Marathi (Roman Script)
`GROUP BY` saman values aslelya rows cha ek group tayar karto aani summary values (SUM, AVG, COUNT) dakhavato. `WHERE` grouping honyapurvi raw rows filter karto, tar `HAVING` grouping zalyanantar tayar jhalelya summary groups la filter karto.

### Hinglish
Data ko department-wise, city-wise, ya category-wise summarize karne ke liye `GROUP BY` use hota hai. Agar aapko aggregate result par filter lagana ho (jaise "sirf wahi departments dikhao jinki total sales > 50,000 hai"), toh aap `WHERE` nahi balki `HAVING` clause use karoge.

---

## ⚡ SQL Query Logical Execution Order

Understanding the internal execution sequence of a SQL query clarifies why `WHERE` cannot filter aggregate results:

```text
1. FROM        ──► Locate target tables & perform JOINs
2. WHERE       ──► Filter individual raw rows BEFORE grouping
3. GROUP BY    ──► Partition remaining rows into distinct groups
4. HAVING      ──► Filter aggregate summary groups
5. SELECT      ──► Compute expressions & select final output columns
6. DISTINCT    ──► Remove duplicate rows
7. ORDER BY    ──► Sort output rows
8. LIMIT       ──► Restrict maximum number of output rows
```

---

## 📝 Syntax & Structure

```sql
SELECT 
    group_column_1,
    group_column_2,
    COUNT(*) AS total_count,
    SUM(numeric_column) AS total_sum
FROM table_name
WHERE raw_row_condition
GROUP BY group_column_1, group_column_2
HAVING aggregate_condition
ORDER BY total_sum DESC;
```

---

## 💡 Practical Production Examples

### Example 1: Multi-Column GROUP BY with HAVING Clause

Calculate order counts and revenue per department and year, displaying only active departments generating over $10,000:

```sql
SELECT 
    department_name,
    EXTRACT(YEAR FROM order_date) AS order_year,
    COUNT(order_id) AS total_orders,
    SUM(order_total) AS gross_revenue
FROM sales_records
WHERE status = 'COMPLETED' -- Step 1: Filter raw rows BEFORE grouping
GROUP BY department_name, EXTRACT(YEAR FROM order_date) -- Step 2: Group rows
HAVING SUM(order_total) >= 10000.00 -- Step 3: Filter aggregate summary groups
ORDER BY gross_revenue DESC;
```

#### Expected Query Output:

| department_name | order_year | total_orders | gross_revenue |
| :--- | :---: | :---: | :---: |
| Electronics | 2025 | 142 | 48500.00 |
| Furniture | 2025 | 68 | 22400.00 |
| Apparel | 2025 | 210 | 15800.00 |

---

### Example 2: Finding Customers with High Order Frequency

Find customers who have placed 5 or more orders:

```sql
SELECT 
    customer_id,
    COUNT(order_id) AS order_count,
    ROUND(AVG(total_amount), 2) AS avg_order_value
FROM orders
GROUP BY customer_id
HAVING COUNT(order_id) >= 5
ORDER BY order_count DESC;
```

---

### Example 3: Department Salary Audit with WHERE vs HAVING

Filter out low-ranking interns before grouping, then return departments with an average salary exceeding $75,000:

```sql
SELECT 
    department_id,
    COUNT(emp_id) AS total_staff,
    ROUND(AVG(salary), 2) AS average_salary
FROM employees
WHERE job_title != 'Intern' -- Exclude interns before calculation
GROUP BY department_id
HAVING AVG(salary) > 75000.00
ORDER BY average_salary DESC;
```

---

## ⚠️ Common Mistakes & Strict ANSI SQL Rules

- **Using Aggregate Functions in `WHERE`**: Writing `WHERE SUM(amount) > 100` throws a syntax error (`An aggregate may not appear in the WHERE clause`). Use `HAVING SUM(amount) > 100`.
- **`ONLY_FULL_GROUP_BY` Rule Violation**: Every non-aggregated column in the `SELECT` list MUST be included in the `GROUP BY` clause. Selecting `SELECT dept_id, emp_name, AVG(salary)` without grouping by `emp_name` causes errors in standard SQL databases (PostgreSQL, Oracle, MySQL 8.0+).
- **Confusing `WHERE` and `HAVING`**: Using `HAVING status = 'ACTIVE'` works but degrades performance because it groups unnecessary inactive rows first before filtering them out. Always put raw row conditions in `WHERE`.

---

## 🧪 Try It Yourself & Practice Exercises

1. Write a query on a `students` table counting total students per `grade_level`.
2. Modify the query to display only grade levels that have more than 30 students.

---

## 🎯 Mini Challenge

Using an `e_commerce_orders` table containing `customer_id`, `order_status`, `item_count`, and `total_price`:
- Filter for completed orders (`order_status = 'DELIVERED'`).
- Group by `customer_id`.
- Display `customer_id`, total items purchased, and total spend.
- Keep only customers whose total spend exceeds $500.00 AND who bought at least 10 items in total.

---

## 🔗 Related Topics

- [Aggregate Functions](12-aggregate-functions.html)
- [SQL Joins & Relationships](14-joins.html)
- [SQL Window Functions](25-window-functions.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: Aggregate Functions](12-aggregate-functions.html) | [Next: SQL Joins →](14-joins.html)
