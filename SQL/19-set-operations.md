# Set Operations: UNION, INTERSECT & EXCEPT

> 🟡 Intermediate

## Definition

Set operations combine the results of compatible `SELECT` statements. `UNION` combines rows and removes duplicates; `UNION ALL` keeps duplicates. `INTERSECT` returns rows present in both results; `EXCEPT` returns rows from the first result that are absent from the second.

## Hindi Explanation

Set operations do ya zyada `SELECT` results ko jodti ya compare karti hain. `UNION` duplicates hataata hai, `UNION ALL` rakhta hai, `INTERSECT` common rows deta hai, aur `EXCEPT` pehle result ki alag rows deta hai.

## Marathi Explanation

Set operations anek `SELECT` results ekatra kartat kiwa tulana kartat. `UNION` duplicates kadhte, `UNION ALL` thevte, `INTERSECT` saman rows dete, aani `EXCEPT` pahilya result madhil veglya rows dete.

## Why Use Them?

They combine similarly shaped results from archives, regions, or different query conditions without joining columns side by side.

## Syntax

```sql
SELECT column_a, column_b FROM source_a
UNION
SELECT column_x, column_y FROM source_b;
```

## Example

```sql
SELECT email FROM current_customers
UNION
SELECT email FROM former_customers;
```

This returns distinct emails across both query results.

## Code Breakdown

Each query must return the same number of columns in the same order, with compatible data types. Column names in the final result usually come from the first query. Use parentheses when combining more than two operations and when controlling evaluation order.

## Output

If current customers return `a@example.test` and `b@example.test`, and former customers return `b@example.test` and `c@example.test`, `UNION` returns each of the three values once.

## Another Practical Example

```sql
SELECT customer_id FROM web_orders
INTERSECT
SELECT customer_id FROM store_orders;
```

This finds IDs present in both result sets where `INTERSECT` is supported.

## Common Mistakes

- Expecting `UNION` to combine columns from related rows; that is a join's job.
- Returning different column counts or incompatible types.
- Using `UNION` when duplicates are meaningful, causing unnecessary deduplication.

## Important Notes

`INTERSECT` and `EXCEPT` are available in many systems, but support and syntax vary. MySQL versions before 8.0.31 do not support these operators. Ordering applies to the combined result and typically belongs at the end of the compound query.

## Real-World Usage

Combine current and archived records, compare customers across sales channels, and produce unified lists from separate sources.

## Try It Yourself

1. Combine two lists of city names with and without duplicate elimination.
2. Find product IDs present in both warehouse tables.

## Mini Challenge

Write a query that returns IDs present in `active_users` but not in `blocked_users`. Use `EXCEPT` where supported and describe a portable alternative.

## Related Topics

- [SQL Joins](15-joins.md)
- [Subqueries & Nested Queries](18-subqueries.md)

## Navigation

[← SQL Home](00-README.md) | [← Previous: Subqueries](18-subqueries.md) | [Next: Normalization →](20-normalization.md)
