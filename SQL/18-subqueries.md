---
layout: default
title: "18 subqueries"
---

# Subqueries & Nested Queries

> 🟡 Intermediate

## Definition

A **subquery** is a query nested inside another SQL statement. It can produce a scalar value, a set of values, or rows used as a table expression.

## Hindi Explanation

Subquery ek query ke andar likhi hui doosri query hoti hai. Iska result ek value, values ka set, ya rows ho sakta hai, jise outer query use karti hai.

## Marathi Explanation

Subquery mhanje eka SQL query madhye lihileli dusri query. Ti ek value, values cha set, kiwa rows deu shakte; outer query ticha vapar karte.

## Why Use Them?

Subqueries express questions in stages, such as finding products priced above the overall average or checking whether related rows exist.

## Syntax

```sql
SELECT columns
FROM table_name
WHERE value operator (
    SELECT expression
    FROM another_table
);
```

## Example

```sql
SELECT product_id, name, price
FROM products
WHERE price > (
    SELECT AVG(price)
    FROM products
);
```

## Code Breakdown

The inner query calculates one average value. The outer query returns products whose price exceeds that value. The scalar subquery must produce at most one row; otherwise, many databases report an error.

## Output

The result contains products above the table's average price. Exact rows depend on the data.

## Another Practical Example

Use `EXISTS` to find customers with at least one order:

```sql
SELECT c.customer_id, c.name
FROM customers AS c
WHERE EXISTS (
    SELECT 1
    FROM orders AS o
    WHERE o.customer_id = c.customer_id
);
```

This correlated subquery refers to the current outer row. `EXISTS` tests whether any matching row exists; the selected literal is not returned.

## Common Mistakes

- Comparing a scalar value with a subquery that returns multiple rows.
- Using `NOT IN` when the subquery can return NULL, which can make the predicate unknown; `NOT EXISTS` is often a clearer anti-match pattern.
- Assuming a subquery is always slower than a join. Optimizers may transform either form.

## Important Notes

Subqueries can appear in `FROM`, `SELECT`, and predicate positions, with support details varying by product. A derived table in `FROM` generally needs an alias in many engines. Correlated subqueries depend on outer-row values but are not necessarily executed naively once per row; the optimizer decides.

## Real-World Usage

Compare records to aggregate thresholds, find matching or missing related records, and break complex reporting logic into readable parts.

## Try It Yourself

1. Find employees earning more than the average salary.
2. Find products with no order items using `NOT EXISTS`.

## Mini Challenge

Return each department whose average salary is greater than the overall company average.

## Related Topics

- [SQL Joins](15-joins.md)
- [Common Table Expressions](24-ctes.md)

## Navigation

[← SQL Home](00-README.md) | [← Previous: CASE Expressions](17-case-expressions.md) | [Next: Set Operations →](19-set-operations.md)

