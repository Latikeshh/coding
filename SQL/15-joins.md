---
layout: default
title: "15 joins"
---

# SQL Joins

> 🟡 Intermediate

## Definition

A **join** combines rows from tables using a related column or join condition. Joins let a query return connected information without duplicating it across tables.

## Hindi Explanation

Join related tables ki rows ko condition ke aadhar par saath laata hai. `INNER JOIN` matching rows deta hai, aur `LEFT JOIN` left table ki unmatched rows bhi rakhta hai.

## Marathi Explanation

Join sambandhit tables madhil rows condition nusar ekatra karto. `INNER JOIN` jod julnarya rows deto; `LEFT JOIN` left table madhil na julnarya rows suddha thevto.

## Why Use Them?

Normalized databases store related facts in separate tables. Joins retrieve those facts together, such as order details with customer names.

## Syntax

```sql
SELECT selected_columns
FROM left_table AS l
JOIN right_table AS r ON l.key = r.key;
```

## Example

```sql
SELECT o.order_id, c.name, o.total
FROM orders AS o
INNER JOIN customers AS c
    ON c.customer_id = o.customer_id;
```

`INNER JOIN` returns only pairs satisfying the `ON` condition. A `LEFT JOIN` keeps every row from `orders` and fills customer columns with NULL when no match exists:

```sql
SELECT o.order_id, c.name
FROM orders AS o
LEFT JOIN customers AS c
    ON c.customer_id = o.customer_id;
```

## Code Breakdown

Aliases `o` and `c` shorten table references. `ON` defines how rows match. Qualify shared column names to avoid ambiguity.

## Output

The inner join returns one row for each matched order/customer pair. The left join also returns unmatched orders, with NULL in `c.name`.

## Another Practical Example

Find customers with no orders:

```sql
SELECT c.customer_id, c.name
FROM customers AS c
LEFT JOIN orders AS o
    ON o.customer_id = c.customer_id
WHERE o.order_id IS NULL;
```

## Common Mistakes

- Omitting or weakening the join condition, causing a Cartesian product and potentially many unexpected rows.
- Placing a right-table filter in `WHERE` after a `LEFT JOIN` when unmatched rows should remain; this can eliminate them. Consider placing that filter in `ON`.
- Joining tables on a non-unique key and assuming each left row produces only one result.

## Important Notes

`INNER` and `LEFT` joins are widely supported. `RIGHT` and `FULL OUTER` support differs across engines; MySQL does not support `FULL OUTER JOIN` directly. `CROSS JOIN` intentionally combines every row on one side with every row on the other.

## Real-World Usage

Combine orders with customers, invoice lines with products, or employees with departments.

## Try It Yourself

1. Join `books` to `authors` to display each title and author name.
2. List all authors, including authors with no books.

## Mini Challenge

Write a query that lists every customer and their order IDs, including customers who have never placed an order.

## Related Topics

- [Primary Keys & Foreign Keys](12-primary-and-foreign-keys.md)
- [Subqueries & Nested Queries](18-subqueries.md)

## Navigation

[← SQL Home](00-README.md) | [← Previous: GROUP BY & HAVING](14-group-by-and-having.md) | [Next: SQL Functions →](16-sql-functions.md)

