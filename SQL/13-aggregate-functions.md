---
layout: default
title: "13 aggregate functions"
---

# Aggregate Functions

> 🟡 Intermediate

## Definition

An **aggregate function** calculates one result from values across multiple rows. Common aggregates include `COUNT`, `SUM`, `AVG`, `MIN`, and `MAX`.

## Hindi Explanation

Aggregate function kai rows ki values se ek result nikalta hai. Jaise `COUNT` rows ginta hai, `SUM` total jodta hai aur `AVG` average nikalta hai.

## Marathi Explanation

Aggregate function anek rows madhil values varun ek result tayar karto. `COUNT` mojto, `SUM` berij karto aani `AVG` sarasari kadhato.

## Why Use Them?

Aggregates summarize data for reports and analysis without retrieving every individual value into an application.

## Syntax

```sql
SELECT aggregate_function(expression)
FROM table_name
WHERE condition;
```

## Example

```sql
CREATE TABLE sales (
    sale_id INTEGER PRIMARY KEY,
    region VARCHAR(30) NOT NULL,
    amount DECIMAL(10, 2),
    customer_id INTEGER
);

INSERT INTO sales VALUES
    (1, 'West', 120.00, 7),
    (2, 'West', 80.00, 7),
    (3, 'East', NULL, 8);

SELECT
    COUNT(*) AS row_count,
    COUNT(amount) AS known_amount_count,
    SUM(amount) AS total_amount,
    AVG(amount) AS average_amount,
    MIN(amount) AS smallest_amount,
    MAX(amount) AS largest_amount
FROM sales;
```

## Code Breakdown

`COUNT(*)` counts rows. `COUNT(amount)` counts only non-NULL amounts. `SUM` and `AVG` ignore NULL inputs; if there are no non-NULL inputs their result is NULL. Here, `SUM` is 200 and `AVG` is 100.

## Output

| row_count | known_amount_count | total_amount | average_amount | smallest_amount | largest_amount |
|---:|---:|---:|---:|---:|---:|
| 3 | 2 | 200.00 | 100.00 | 80.00 | 120.00 |

## Another Practical Example

```sql
SELECT COUNT(DISTINCT customer_id) AS distinct_customers
FROM sales;
```

This counts different non-NULL customer IDs. Support and behavior for `DISTINCT` with multiple aggregate arguments can vary.

## Common Mistakes

- Using `COUNT(column)` when the intent is to count every row; NULL values are excluded.
- Forgetting that `SUM` and `AVG` can return NULL when there are no non-NULL inputs.
- Expecting `AVG` to return a rounded display value; result type and display precision vary.

## Important Notes

Except for `COUNT`, aggregates generally ignore NULL inputs. Aggregate result data types and integer division details are database-dependent. Use `COALESCE` only when replacing a NULL result is semantically appropriate.

## Real-World Usage

Calculate revenue, average order value, inventory totals, and counts of active users.

## Try It Yourself

1. Count all rows in `sales` and the rows with known `customer_id`.
2. Find the largest sale amount.

## Mini Challenge

Write one query that returns total, average, and number of known sale amounts for the `West` region.

## Related Topics

- [GROUP BY & HAVING](14-group-by-and-having.html)
- [SQL Data Types & NULL Values](04-data-types-and-null.html)

## Navigation

[← SQL Home](./) | [← Previous: Primary Keys & Foreign Keys](12-primary-and-foreign-keys.html) | [Next: GROUP BY & HAVING →](14-group-by-and-having.html)


