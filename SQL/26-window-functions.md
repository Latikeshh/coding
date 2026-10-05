---
layout: default
title: "26 window functions"
---

# SQL Window Functions: OVER, PARTITION BY & Framing

> 🔴 Advanced

---

## 📖 Definition

An **SQL Window Function** performs a calculation across a set of table rows that are related to the current row (called a **Window Frame**). Unlike standard `GROUP BY` aggregates (which collapse multiple rows into a single summary row), **Window Functions preserve the individual identity of every row in the result set** while appending calculated analytical values alongside them.

---

## 🇮🇳 Hindi Explanation

Window Functions multiple rows par calculations karte hain, lekin `GROUP BY` ki tarah rows ko ek row mein shrink nahi karte! Har employee ya transaction ki apni row bani rehti hai, aur uske bagal mein group ranking, running total, ya department average ka extra column aa jata hai. Yeh `OVER (PARTITION BY ... ORDER BY ...)` syntax ke dwara kaam karti hain.

---

## 🚩 Marathi Explanation

Window Functions anaik rows var calculations kartat, pan `GROUP BY` pramane rows collapse karat nahit! Pratyek row tasich rahte aani tichya bajula ranking, running total, kiwa department average cha extra column dakhawla jato. Ha `OVER (PARTITION BY ... ORDER BY ...)` clause cha vapar karun chalto.

---

## 📊 GROUP BY vs Window Function Contrast

```text
Input Rows (Sales Data):

| Emp    | Dept | Amount |
| Rahul  | Tech | 100    |
| Priya  | Tech | 200    |
| Amit   | Sale | 150    |

1. Standard GROUP BY (Collapses Rows):
SELECT Dept, SUM(Amount) FROM Sales GROUP BY Dept;
-> Output: 2 Rows Only! (Tech: 300, Sale: 150)

2. Window Function (Preserves Rows!):
SELECT Emp, Dept, Amount, SUM(Amount) OVER(PARTITION BY Dept) AS DeptTotal FROM Sales;
-> Output: ALL 3 Rows Preserved!

| Emp    | Dept | Amount | DeptTotal |
| Rahul  | Tech | 100    | 300       |
| Priya  | Tech | 200    | 300       |
| Amit   | Sale | 150    | 150       |
```

---

## 📝 Syntax & Mechanics

```sql
function_name(expression) OVER (
    [PARTITION BY partition_column]
    [ORDER BY sort_column [ASC|DESC]]
    [ROWS|RANGE frame_specification]
)
```

### Key Clauses
1. `PARTITION BY`: Divides the result set into distinct partitions (groups) for independent window calculations.
2. `ORDER BY`: Defines the logical sequence of rows within each partition.
3. `ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW`: Defines the precise boundary frame of rows evaluated for running totals or moving averages.

---

## 🧭 Categories of Window Functions

---

### 1. 🏆 Ranking Functions (`ROW_NUMBER`, `RANK`, `DENSE_RANK`)

Ranking functions assign rank numbers to rows within each partition based on the `ORDER BY` specification.

| Function | Description | Example Output on Ties (100, 100, 80) |
|:---|:---|:---:|
| `ROW_NUMBER()` | Assigns unique sequential numbers (No ties!) | `1, 2, 3` |
| `RANK()` | Assigns same rank to ties, **leaves gaps** in sequence | `1, 1, 3` |
| `DENSE_RANK()` | Assigns same rank to ties, **NO gaps** in sequence | `1, 1, 2` |

#### Ranking Query Example
```sql
SELECT 
    emp_name,
    dept_name,
    salary,
    ROW_NUMBER() OVER (PARTITION BY dept_name ORDER BY salary DESC) AS row_num,
    RANK()       OVER (PARTITION BY dept_name ORDER BY salary DESC) AS rnk,
    DENSE_RANK() OVER (PARTITION BY dept_name ORDER BY salary DESC) AS dense_rnk
FROM employees;
```

#### Result Table

| emp_name | dept_name | salary | row_num | rnk | dense_rnk |
|:---|:---|:---|:---:|:---:|:---:|
| Rahul | Tech | 90000 | 1 | **1** | **1** |
| Amit | Tech | 90000 | 2 | **1** | **1** |
| Priya | Tech | 70000 | 3 | **3** | **2** |

---

### 2. 📈 Value Access Functions (`LAG`, `LEAD`, `FIRST_VALUE`, `LAST_VALUE`)

Value functions access data from previous or subsequent rows relative to the current row without requiring self-joins!

- `LAG(col, offset, default)`: Accesses data from a row **before** the current row.
- `LEAD(col, offset, default)`: Accesses data from a row **after** the current row.

#### Example: Month-over-Month Revenue Growth Analysis
```sql
SELECT 
    sale_month,
    revenue,
    LAG(revenue, 1, 0.00) OVER (ORDER BY sale_month) AS prev_month_revenue,
    revenue - LAG(revenue, 1, 0.00) OVER (ORDER BY sale_month) AS revenue_growth
FROM monthly_sales;
```

#### Result Table

| sale_month | revenue | prev_month_revenue | revenue_growth |
|:---|:---|:---|:---|
| 2026-01 | 50000.00 | 0.00 | +50000.00 |
| 2026-02 | 65000.00 | 50000.00 | +15000.00 |
| 2026-03 | 60000.00 | 65000.00 | -5000.00 |

---

### 3. 💰 Running Totals & Moving Averages (Framing)

By combining standard aggregate functions (`SUM`, `AVG`, `MIN`, `MAX`) with an `ORDER BY` clause inside `OVER()`, SQL computes cumulative running calculations!

#### Example: Cumulative Account Running Balance
```sql
SELECT 
    trans_id,
    account_id,
    trans_date,
    amount,
    SUM(amount) OVER (
        PARTITION BY account_id 
        ORDER BY trans_date, trans_id
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_balance
FROM bank_transactions;
```

#### Result Table

| trans_id | account_id | trans_date | amount | running_balance |
|:---|:---|:---|:---|:---|
| 1001 | ACC-01 | 2026-10-01 | +1000.00 | 1000.00 |
| 1002 | ACC-01 | 2026-10-02 | -200.00 | 800.00 |
| 1003 | ACC-01 | 2026-10-03 | +500.00 | 1300.00 |

---

## ⚡ Filtering Window Functions (Using CTEs or Subqueries)

Window functions evaluate during the **`SELECT` phase** (after `WHERE`, `GROUP BY`, and `HAVING`). Therefore, you **cannot** use a window function directly inside a `WHERE` clause!

To filter based on a window function result (e.g., *Find Top 2 Highest Earners per Department*), wrap the window query inside a **Common Table Expression (CTE)**:

```sql
WITH ranked_employees AS (
    SELECT 
        emp_id,
        emp_name,
        dept_name,
        salary,
        DENSE_RANK() OVER (PARTITION BY dept_name ORDER BY salary DESC) AS dept_rank
    FROM employees
)
SELECT emp_id, emp_name, dept_name, salary
FROM ranked_employees
WHERE dept_rank <= 2; -- Top 2 earners in each department!
```

---

## ⚠️ Common Mistakes

1. **Trying to Filter Window Functions in `WHERE`**:
   `WHERE DENSE_RANK() OVER(...) <= 2` throws a syntax error. Always use a CTE or Subquery to filter window ranks.

2. **Omitting `ORDER BY` in Running Totals**:
   If you write `SUM(amount) OVER(PARTITION BY acc_id)` without `ORDER BY`, SQL returns the grand total for the entire partition instead of a step-by-step cumulative balance!

---

## 🧪 Try It Yourself

1. Rank all products by price within their respective category using `DENSE_RANK()`.
2. Compute a 3-day moving average of daily sales using `AVG(amount) OVER(ORDER BY date ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)`.

---

## 🎯 Mini Challenge

Write a query that displays each employee's salary alongside the **highest salary in their department** and the **salary difference** (`highest_salary - employee_salary`).

---

## 🔗 Related Topics

- [GROUP BY & HAVING](14-group-by-and-having.html)
- [Common Table Expressions (CTEs)](24-ctes.html)
- [Subqueries & Nested Queries](18-subqueries.html)

---

## 🧭 Navigation

[← SQL Home](./) | [← Previous: Recursive CTEs](25-recursive-ctes.html) | [Next: Stored Procedures →](27-stored-procedures.html)

