# SQL Constraints

> 🟡 Intermediate

## Definition

A **constraint** is a rule enforced by a database on table data. Constraints help keep invalid or inconsistent values out of the database, including when data is written by different applications or users.

## Hindi Explanation

Constraint database ke data par lagaya gaya niyam hota hai. Jaise `NOT NULL` zaroori value maangta hai aur `UNIQUE` duplicate values rokta hai. Database khud in niyamon ko har insert ya update par check karta hai.

## Marathi Explanation

Constraint mhanje database madhil data var lavlela niyam. `NOT NULL` mule value dene avashyak hote, tar `UNIQUE` duplicate value rokhte. Insert kiwa update kartana database ha niyam tapasato.

## Why Use Constraints?

Application code alone cannot guarantee that every write is valid. Constraints protect data at its source and make rules consistent across clients and application paths.

## Common Constraints

- `NOT NULL`: The column must have a non-NULL value.
- `UNIQUE`: Values in a column or column combination must be unique. NULL handling varies by database.
- `PRIMARY KEY`: Uniquely identifies each row; it implies uniqueness and non-nullability.
- `FOREIGN KEY`: Requires a referenced value to exist in a related table, subject to the configured action.
- `CHECK`: Requires a Boolean condition to be true or unknown according to database constraint semantics. Use `NOT NULL` too when a value must be present.
- `DEFAULT`: Supplies a value when an insert omits the column or uses the `DEFAULT` keyword; it does not replace an explicitly supplied NULL.

## Syntax

```sql
CREATE TABLE products (
    product_id INTEGER PRIMARY KEY,
    sku VARCHAR(30) NOT NULL UNIQUE,
    price DECIMAL(10, 2) NOT NULL CHECK (price >= 0),
    stock INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0)
);
```

Constraints can also be named and declared at table level:

```sql
CREATE TABLE order_items (
    order_id INTEGER NOT NULL,
    line_number INTEGER NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    CONSTRAINT pk_order_items PRIMARY KEY (order_id, line_number)
);
```

## Example

```sql
INSERT INTO products (product_id, sku, price) VALUES (1, 'PEN-01', 1.50);

-- Rejected: price cannot be negative.
INSERT INTO products (product_id, sku, price) VALUES (2, 'BAD-01', -1.00);

-- stock is omitted, so its default is used.
SELECT product_id, sku, price, stock FROM products;
```

## Code Breakdown

- `PRIMARY KEY` prevents two rows from having the same product ID.
- `NOT NULL UNIQUE` requires a SKU and prevents duplicate SKUs.
- `CHECK (price >= 0)` rejects a negative price, but by itself does not reject NULL.
- `DEFAULT 0` supplies zero stock when the insert omits `stock`.
- The second insert violates a constraint and fails; it does not silently fix the value.

## Output

The first insert succeeds. The second insert fails with a constraint violation. Exact error text depends on the database.

## Another Practical Example

```sql
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY,
    email VARCHAR(254) NOT NULL UNIQUE,
    age INTEGER CHECK (age >= 13)
);
```

This enforces required, unique email addresses and rejects ages below 13 when an age is supplied. Add `NOT NULL` to `age` if it must always be known.

## Common Mistakes

- Assuming `CHECK (value > 0)` rejects NULL; comparisons with NULL are unknown, so use `NOT NULL` when required.
- Assuming all databases treat NULL values in `UNIQUE` constraints identically.
- Using `DEFAULT` as though it were a validation rule. A default does not prevent another value from being supplied.
- Adding constraints to existing data without checking for rows that violate them.

## Important Notes

Constraint syntax and support for altering constraints vary by database. A failed constraint statement normally returns an error; transaction behavior and whether a multi-row statement leaves any changes depend on the database and execution context.

## Real-World Usage

Use constraints for required account fields, unique usernames, nonnegative quantities, valid status values, and relationships between orders and customers.

## Try It Yourself

1. Create a `courses` table with a primary key, a required title, and a nonnegative fee.
2. Add a unique constraint to a `course_code` column.

## Mini Challenge

Create an `inventory` table with a primary key, a unique required SKU, a required quantity defaulting to zero, and a rule that quantity cannot be negative.

## Related Topics

- [Primary Keys & Foreign Keys](12-primary-and-foreign-keys.md)
- [Database & Table Basics](03-databases-and-tables.md)

## Navigation

[← SQL Home](00-README.md) | [← Previous: UPDATE & DELETE](10-update-and-delete.md) | [Next: Primary Keys & Foreign Keys →](12-primary-and-foreign-keys.md)
