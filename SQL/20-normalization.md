# Database Relationships & Normalization

> 🟡 Intermediate

## Definition

**Normalization** organizes relational data to reduce unnecessary duplication and avoid update, insert, and deletion anomalies. It uses keys and dependencies to guide how facts are divided among tables.

## Hindi Explanation

Normalization tables ko is tarah organize karti hai ki data ki anavashyak duplication aur update ke dauran galtiyan kam hon. Related facts ko alag tables mein rakhkar keys se joda jata hai.

## Marathi Explanation

Normalization mule tables chi rachana ashi hote ki anavashyak duplicate data aani update madhil visangati kami hotat. Sambandhit mahiti veglya tables madhye thevun keys ne jodli jate.

## Why Use It?

When the same fact is repeated in many rows, changing it everywhere is error-prone. A normalized design stores a fact in one appropriate place and relates records with keys.

## Simple Explanation

Suppose every order row repeats the customer's name and address. If the address changes, multiple rows must be updated. Store customer details once in `customers`, then let `orders` reference `customer_id`.

## Syntax

Normalization is a design process rather than a SQL command. A simple related-table design looks like:

```sql
CREATE TABLE customers (
    customer_id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    address VARCHAR(250)
);

CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL REFERENCES customers (customer_id),
    ordered_on DATE NOT NULL
);
```

## Example

A common progression is:

- **First Normal Form (1NF):** Each column holds a single value for each row; avoid repeating groups such as `phone1`, `phone2`, `phone3`.
- **Second Normal Form (2NF):** Be in 1NF, and each non-key attribute depends on the whole candidate key, not just part of a composite key.
- **Third Normal Form (3NF):** Be in 2NF, and non-key attributes depend on candidate keys rather than transitively on another non-key attribute.

## Code Breakdown

In the schema above, customer details are stored once. An order uses a foreign key to refer to the customer, which avoids copying the customer's address into each order row.

## Output

A customer address change requires one update in `customers`; related orders continue to identify that customer through the key.

## Another Practical Example

A many-to-many relationship between students and courses uses a junction table with a composite key `(student_id, course_id)` rather than storing a comma-separated list of courses in a student column.

## Common Mistakes

- Storing lists of values in one column and expecting SQL to enforce each item as a separate relationship.
- Assuming normalization means every table must have only one column.
- Over-normalizing without considering query and operational needs.

## Important Notes

Normalization is based on actual business rules and functional dependencies, not just a mechanical checklist. Denormalization can be a deliberate performance or reporting trade-off, but duplicated data then needs a reliable consistency strategy.

## Real-World Usage

Model customers, orders, products, and line items while minimizing inconsistent repeated facts.

## Try It Yourself

1. Redesign a table that repeats department name and department manager on each employee row.
2. Identify a many-to-many relationship and propose its junction table.

## Mini Challenge

A table stores `order_id`, `product_id`, `product_name`, `quantity`, and `product_price`, with `(order_id, product_id)` as its key. Explain which product facts could be separated into another table and why.

## Related Topics

- [Primary Keys & Foreign Keys](12-primary-and-foreign-keys.md)
- [SQL Constraints](11-constraints.md)

## Navigation

[← SQL Home](00-README.md) | [← Previous: Set Operations](19-set-operations.md) | [Next: Views →](21-views.md)
