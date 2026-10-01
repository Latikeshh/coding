# Common Table Expressions (CTEs)

> 🔴 Advanced

## Definition

A **Common Table Expression (CTE)** is a named result set scoped to a single statement. It is introduced with `WITH` and can make a complex query easier to read or reuse within that statement.

## Hindi Explanation

CTE `WITH` ke saath define kiya gaya named query result hota hai, jo ek statement tak available hota hai. Isse complex query ko chhote, samajhne layak parts mein likh sakte hain.

## Marathi Explanation

CTE ha `WITH` ne tayar kelela named query result asto aani eka statement purta vaparta yeto. Mothi query samajnyasathi tyache chhote bhaag karta yetat.

## Why Use Them?

CTEs give meaningful names to intermediate query results and can replace deeply nested subqueries when that improves clarity.

## Syntax

```sql
WITH cte_name AS (
    SELECT columns
    FROM table_name
)
SELECT columns
FROM cte_name;
```

## Example

```sql
WITH customer_totals AS (
    SELECT customer_id, SUM(total) AS lifetime_total
    FROM orders
    GROUP BY customer_id
)
SELECT customer_id, lifetime_total
FROM customer_totals
WHERE lifetime_total >= 1000
ORDER BY lifetime_total DESC;
```

## Code Breakdown

The CTE calculates one total per customer. The outer query filters and sorts those totals. The CTE exists only for this statement; it does not create a persistent table or view.

## Output

The result lists customers whose total orders reach at least 1000, highest total first.

## Another Practical Example

Multiple CTEs can be declared in one `WITH` clause:

```sql
WITH paid_orders AS (
    SELECT customer_id, total
    FROM orders
    WHERE status = 'paid'
), customer_totals AS (
    SELECT customer_id, SUM(total) AS paid_total
    FROM paid_orders
    GROUP BY customer_id
)
SELECT customer_id, paid_total
FROM customer_totals;
```

## Common Mistakes

- Adding a semicolon between the CTE definition and its main statement.
- Assuming a CTE is always materialized or always inlined; optimizer behavior varies.
- Forgetting that a CTE name is scoped to one statement.

## Important Notes

CTEs are supported by modern versions of major relational databases, but details such as materialization hints and recursive syntax differ. A CTE is a query organization feature, not inherently a performance improvement.

## Real-World Usage

Break reporting queries into named stages such as filtering, aggregation, and ranking.

## Try It Yourself

1. Use a CTE to select recent orders, then query those results.
2. Use two CTEs to filter products and calculate a category total.

## Mini Challenge

Write a CTE that finds each department's average salary, then return only departments above a chosen threshold.

## Related Topics

- [Subqueries & Nested Queries](18-subqueries.md)
- [Recursive CTEs](25-recursive-ctes.md)

## Navigation

[← SQL Home](00-README.md) | [← Previous: Transactions](23-transactions.md) | [Next: Recursive CTEs →](25-recursive-ctes.md)
