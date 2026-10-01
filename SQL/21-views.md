# Views & Virtual Tables

> 🟡 Intermediate

## Definition

A **view** is a named query that can be queried like a table. A regular view generally stores the query definition, not a separate copy of its result; a **materialized view** stores results and must be refreshed or maintained.

## Hindi Explanation

View ek saved query hoti hai jise table ki tarah query kar sakte hain. Normal view aam taur par result ki alag copy nahi rakhti. Materialized view result store karti hai aur use refresh karna pad sakta hai.

## Marathi Explanation

View mhanje save keleli query, ji table pramane vaparta yete. Sadharan view result chi vegli copy thevat nahi. Materialized view result store karte aani refresh karavi lagu shakte.

## Why Use Them?

Views can simplify repeated joins, present only selected columns, and provide a stable query interface over underlying tables.

## Syntax

```sql
CREATE VIEW view_name AS
SELECT columns
FROM table_name
WHERE condition;
```

## Example

```sql
CREATE VIEW active_customers AS
SELECT customer_id, name, email
FROM customers
WHERE status = 'active';

SELECT name, email
FROM active_customers
ORDER BY name;
```

## Code Breakdown

The view names a query. Selecting from it runs against the underlying data in a regular view, subject to the database's optimization and permissions rules.

## Output

The select returns names and emails for rows whose status is `active` when the query runs.

## Another Practical Example

```sql
CREATE OR REPLACE VIEW customer_order_totals AS
SELECT customer_id, SUM(total) AS lifetime_total
FROM orders
GROUP BY customer_id;
```

`CREATE OR REPLACE VIEW` is not supported identically by every database; use that engine's supported create/alter syntax.

## Common Mistakes

- Assuming a regular view freezes data as it was when created.
- Assuming every view is updatable. Aggregates, grouping, and joins commonly prevent direct updates.
- Treating a view as an access-control boundary without checking privileges and security semantics.

## Important Notes

A view's query can be changed or dropped, but dependent objects may be affected. Materialized views are vendor-specific and refresh behavior varies. A view is not automatically a performance optimization.

## Real-World Usage

Reuse common reporting queries, expose a limited column set to a team, or encapsulate a complex join behind a readable name.

## Try It Yourself

1. Create a view showing only public product columns.
2. Query that view with a filter and sort.

## Mini Challenge

Create a view that groups orders by customer and displays each total; explain why it might not be directly updatable.

## Related Topics

- [SQL Joins](15-joins.md)
- [Indexes & Query Performance](22-indexes-and-performance.md)

## Navigation

[← SQL Home](00-README.md) | [← Previous: Normalization](20-normalization.md) | [Next: Indexes & Performance →](22-indexes-and-performance.md)
