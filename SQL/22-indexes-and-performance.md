# Indexes & Query Performance

> 🔴 Advanced

## Definition

An **index** is a data structure maintained by a database to find rows more efficiently for selected lookup, join, or ordering patterns. It uses storage and must be maintained when data changes.

## Hindi Explanation

Index database ko kuch queries mein rows jaldi dhoondhne mein madad karta hai. Lekin index storage leta hai aur insert, update, delete ke waqt maintain karna padta hai, isliye har column par index banana sahi nahi hota.

## Marathi Explanation

Index kahi queries madhye rows lavkar shodhayla madat karto. Pan to storage gheto aani data badaltana maintain karava lagto; mhanun pratyek column var index karne yogya nahi.

## Why Use Them?

Indexes can reduce the rows or pages examined for selective filters, joins, and ordering. They are most useful when the workload justifies their cost.

## Syntax

```sql
CREATE INDEX index_name ON table_name (column_name);

CREATE INDEX index_name ON table_name (column_a, column_b);
```

## Example

```sql
CREATE INDEX idx_orders_customer_date
ON orders (customer_id, ordered_on);

SELECT order_id, ordered_on
FROM orders
WHERE customer_id = 42
ORDER BY ordered_on;
```

## Code Breakdown

The composite index is ordered by `customer_id` then `ordered_on`; it may help queries filtering by the leading column and then by date. Whether it is chosen depends on data distribution, query shape, statistics, and the database optimizer.

## Output

The query returns the matching orders in date order. An index does not change the result, and the database may choose a scan instead.

## Another Practical Example

Inspect a query plan using the engine's `EXPLAIN` command:

```sql
EXPLAIN
SELECT order_id FROM orders WHERE customer_id = 42;
```

Some engines offer `EXPLAIN ANALYZE` to execute the query and report actual measurements; use care with statements that modify data.

## Common Mistakes

- Creating indexes on every column, increasing storage and write costs.
- Assuming an index guarantees a faster query or will always be selected.
- Ignoring composite-index column order and the actual filter/sort workload.
- Benchmarking only tiny sample data.

## Important Notes

Index types, online creation, partial indexes, included columns, and plan output are database-specific. Use representative data, examine plans, and measure before and after. Keep statistics current using engine-managed or documented procedures.

## Real-World Usage

Speed up frequent lookups by account ID, joins by foreign key, and feeds ordered by a timestamp.

## Try It Yourself

1. Identify a frequent query in your sample schema and propose a supporting index.
2. Compare its query plan before and after adding the index.

## Mini Challenge

Given frequent queries filtering by `status` and ordering by `created_at`, propose a candidate composite index and explain what you would measure before keeping it.

## Related Topics

- [Views](21-views.md)
- [Transactions & ACID](23-transactions.md)

## Navigation

[← SQL Home](00-README.md) | [← Previous: Views](21-views.md) | [Next: Transactions →](23-transactions.md)
