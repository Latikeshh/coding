# Practical SQL Projects

> 🔴 Advanced

## Definition

A SQL project applies schema design, data manipulation, querying, and validation to a realistic problem. A good project includes a clear question, coherent tables and keys, representative data, and queries whose results can be checked.

## Hindi Explanation

SQL project mein real problem ke liye tables design karte hain, sample data daalte hain aur meaningful queries likhte hain. Har result ko expected answer ya test data se verify karna chahiye.

## Marathi Explanation

SQL project madhye vastavik samasyesathi tables rachle jatat, sample data ghatla jato aani upyogi queries lihilya jatat. Pratyek result expected answer kiwa test data ne tapasava.

## Why Build Projects?

Projects reveal how concepts work together: keys support relationships, constraints protect data, and queries answer questions from realistic records.

## Project Workflow

1. Write the questions the database should answer.
2. Identify entities, attributes, and relationships.
3. Design tables, primary keys, foreign keys, and constraints.
4. Insert a small dataset that includes edge cases such as NULLs and duplicates.
5. Write and verify queries, including joins and aggregates.
6. Add indexes only after identifying and measuring a relevant workload.
7. Document the chosen SQL engine and any dialect-specific syntax.

## Example: Small Store Schema

```sql
CREATE TABLE customers (
    customer_id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(254) NOT NULL UNIQUE
);

CREATE TABLE products (
    product_id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0)
);

CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL REFERENCES customers (customer_id),
    ordered_on DATE NOT NULL
);

CREATE TABLE order_items (
    order_id INTEGER NOT NULL REFERENCES orders (order_id),
    product_id INTEGER NOT NULL REFERENCES products (product_id),
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    unit_price DECIMAL(10, 2) NOT NULL CHECK (unit_price >= 0),
    PRIMARY KEY (order_id, product_id)
);
```

## Code Breakdown

The schema separates customer, product, order, and line-item facts. `order_items` resolves the many-to-many relationship between orders and products. `unit_price` stores the price charged at purchase time, which can differ from today's product price.

## Output

The schema creates four related tables. Actual success depends on the selected database's type and constraint support.

## Another Practical Example

Practice projects can include a library lending system, course enrollment database, personal expense tracker, or support-ticket reporting database.

## Common Mistakes

- Designing tables before writing down entities and business rules.
- Testing only happy-path data and ignoring invalid references or NULLs.
- Using `SELECT *` in every report rather than naming needed columns.
- Claiming query performance improvements without measuring representative data.

## Important Notes

Choose one database engine and record its version. SQL types, identity columns, date functions, transaction behavior, and schema syntax can vary. Never use real personal or payment data in a learning project.

## Real-World Usage

A portfolio project can demonstrate schema design, data integrity, reporting queries, and measured optimization decisions.

## Try It Yourself

1. Build the store schema and insert at least three customers, products, and orders.
2. Query order totals by customer and identify customers with no orders.

## Mini Challenge

Add product categories and build a report of monthly revenue by category. Define how you handle refunds, missing data, and price changes, then write a query whose result can be checked from your sample dataset.

## Related Topics

- [Database Relationships & Normalization](20-normalization.md)
- [Indexes & Query Performance](22-indexes-and-performance.md)

## Navigation

[← SQL Home](00-README.md) | [← Previous: SQL Security](29-sql-security.md) | [SQL Home →](00-README.md)
