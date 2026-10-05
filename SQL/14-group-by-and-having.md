---
layout: default
title: "14 group by and having"
---

# GROUP BY & HAVING

> 🟡 Intermediate

## Definition

`GROUP BY` partitions rows into groups that share values, allowing aggregates to be calculated per group. `HAVING` filters those groups after aggregation; `WHERE` filters input rows before grouping.

## Hindi Explanation

`GROUP BY` milte-julte values wali rows ko group karta hai. `WHERE` grouping se pehle rows chunta hai, jabki `HAVING` aggregate banne ke baad groups ko filter karta hai.

## Marathi Explanation

`GROUP BY` saman values aslelya rows che groups karto. `WHERE` grouping purvi rows nivadto, tar `HAVING` aggregate zalyanantar groups filter karto.

## Why Use Them?

Grouping turns detailed records into useful summaries, such as revenue by region or orders per customer.

## Syntax

```sql
SELECT grouping_column, aggregate_function(value_column)
FROM table_name
WHERE row_condition
GROUP BY grouping_column
HAVING group_condition;
```

## Example

```sql
SELECT region, SUM(amount) AS revenue
FROM sales
WHERE amount IS NOT NULL
GROUP BY region
HAVING SUM(amount) >= 100
ORDER BY revenue DESC;
```

## Code Breakdown

The database excludes rows with unknown amounts, groups remaining rows by region, calculates each group's revenue, keeps groups with revenue of at least 100, and sorts the result. `WHERE` cannot normally refer to an aggregate result because aggregation has not happened yet.

## Output

Using the sample rows from [Aggregate Functions](13-aggregate-functions.html), the `West` group has revenue `200.00` and is returned; `East` has no known amount and is excluded.

## Another Practical Example

```sql
SELECT customer_id, COUNT(*) AS order_count
FROM orders
GROUP BY customer_id
HAVING COUNT(*) >= 3;
```

This returns customer groups with at least three orders.

## Common Mistakes

- Putting aggregate conditions in `WHERE` instead of `HAVING`.
- Selecting a non-aggregated column that is not grouped. Database rules differ, and permissive behavior can produce unclear results.
- Assuming groups appear in a particular order without `ORDER BY`.

## Important Notes

In portable queries, select only grouping expressions and aggregate expressions. Some databases allow grouping by a select-list alias or ordinal, but this is not uniformly portable.

## Real-World Usage

Build monthly sales reports, count support tickets by status, and find customers whose purchase totals exceed a threshold.

## Try It Yourself

1. Count employees in each department.
2. Show only departments with more than five employees.

## Mini Challenge

Using an `orders` table, return each customer with total completed-order value, keeping totals above 500. State which row condition belongs in `WHERE` and which aggregate condition belongs in `HAVING`.

## Related Topics

- [Aggregate Functions](13-aggregate-functions.html)
- [SQL Joins](15-joins.html)

## Navigation

[← SQL Home](./) | [← Previous: Aggregate Functions](13-aggregate-functions.html) | [Next: SQL Joins →](15-joins.html)


