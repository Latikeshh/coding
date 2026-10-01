# Conditional Logic with CASE

> 🟡 Intermediate

## Definition

A `CASE` expression evaluates conditions and returns a value for the first matching branch. It is an expression, so it can appear in a `SELECT`, `ORDER BY`, or other expression context.

## Hindi Explanation

`CASE` conditions ko kram se check karta hai aur pehli true condition ka result deta hai. Koi condition match na ho to `ELSE` ka result aata hai; `ELSE` na ho to result `NULL` hota hai.

## Marathi Explanation

`CASE` conditions kramane tapasato aani pahilya true condition cha result deto. Kahi condition julali nahi aani `ELSE` nasel tar result `NULL` hoto.

## Why Use It?

Use `CASE` to derive labels, bucket values, or apply conditional calculations within a query.

## Syntax

```sql
CASE
    WHEN condition THEN result
    WHEN another_condition THEN another_result
    ELSE fallback_result
END
```

## Example

```sql
SELECT order_id, total,
    CASE
        WHEN total >= 500 THEN 'Large'
        WHEN total >= 100 THEN 'Medium'
        ELSE 'Small'
    END AS order_size
FROM orders;
```

## Code Breakdown

Conditions are considered in order. A total of 600 matches `Large`; a total of 150 matches `Medium`; all remaining values, including NULL totals for which comparisons are unknown, reach `ELSE`.

## Output

| order_id | total | order_size |
|---:|---:|---|
| 1 | 600.00 | Large |
| 2 | 150.00 | Medium |
| 3 | 40.00 | Small |

## Another Practical Example

```sql
SELECT status,
    CASE status
        WHEN 'paid' THEN 'Complete'
        WHEN 'pending' THEN 'In progress'
        ELSE 'Needs review'
    END AS status_label
FROM orders;
```

This is a simple `CASE`, comparing one expression to candidate values.

## Common Mistakes

- Forgetting `END`.
- Assuming later `WHEN` branches are checked after an earlier match.
- Returning incompatible data types in branches; engines may coerce types differently.
- Assuming NULL comparisons match a `WHEN column = NULL` condition; use `IS NULL`.

## Important Notes

`CASE` returns one value per input row and is not a control-flow statement that runs separate SQL commands. Include `ELSE` when an explicit fallback is important.

## Real-World Usage

Classify orders by size, label account states, or calculate conditional fees and reporting categories.

## Try It Yourself

1. Label scores of at least 90 as `A`, at least 75 as `B`, and the rest as `Other`.
2. Return `Unknown` for NULL status values.

## Mini Challenge

Create a query that labels a product `Low stock` when quantity is below 10 and `In stock` otherwise, with an explicit label for unknown quantity.

## Related Topics

- [SQL Functions](16-sql-functions.md)
- [GROUP BY & HAVING](14-group-by-and-having.md)

## Navigation

[← SQL Home](00-README.md) | [← Previous: SQL Functions](16-sql-functions.md) | [Next: Subqueries →](18-subqueries.md)
