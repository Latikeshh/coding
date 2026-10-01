# Primary Keys & Foreign Keys

> 🟡 Intermediate

## Definition

A **primary key** uniquely identifies each row in a table. A **foreign key** enforces a relationship by requiring referenced values to exist in another table (or in a referenced unique key).

## Hindi Explanation

Primary key har row ki alag pehchan hoti hai; isme duplicate ya `NULL` value nahi ho sakti. Foreign key do tables ke beech sambandh banati hai aur galat ya bina parent wala reference rokne mein madad karti hai.

## Marathi Explanation

Primary key pratyek row la vegli olakh dete; tyat duplicate kiwa `NULL` value naste. Foreign key don tables madhil sambandh jodte aani astitvat naslelya parent row cha reference rokhte.

## Why Use Them?

Keys preserve row identity and referential integrity. They make relationships explicit and prevent orphaned records such as an order that refers to a nonexistent customer.

## Syntax

```sql
CREATE TABLE customers (
    customer_id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    total DECIMAL(10, 2) NOT NULL CHECK (total >= 0),
    CONSTRAINT fk_orders_customer
        FOREIGN KEY (customer_id) REFERENCES customers (customer_id)
);
```

## Example

```sql
INSERT INTO customers (customer_id, name) VALUES (1, 'Mira');
INSERT INTO orders (order_id, customer_id, total) VALUES (101, 1, 45.00);

-- Rejected: customer_id 999 does not exist.
INSERT INTO orders (order_id, customer_id, total) VALUES (102, 999, 10.00);
```

## Code Breakdown

The customer table's primary key identifies each customer. `orders.customer_id` is a foreign key referencing that key. The final insert violates referential integrity and is rejected.

## Output

The first two inserts succeed; the final insert fails with a foreign-key violation. Exact messages vary by database.

## Another Practical Example

A junction table can represent a many-to-many relationship:

```sql
CREATE TABLE course_enrollments (
    student_id INTEGER REFERENCES students (student_id),
    course_id INTEGER REFERENCES courses (course_id),
    enrolled_on DATE NOT NULL,
    PRIMARY KEY (student_id, course_id)
);
```

## Common Mistakes

- Treating a foreign key as automatically creating an index on its referencing column; indexing behavior varies by database.
- Deleting a parent row without considering dependent rows.
- Using a natural identifier that may change as a primary key when a stable key is more appropriate.

## Important Notes

`ON DELETE` and `ON UPDATE` actions such as `CASCADE`, `SET NULL`, and `RESTRICT` define what happens to dependent rows; choose them deliberately. Nullable foreign-key columns can represent an absent relationship. SQLite requires foreign-key enforcement to be enabled for each connection in common configurations.

## Real-World Usage

Customer IDs connect orders to customers; product IDs connect order lines to products; enrollment keys connect students and courses.

## Try It Yourself

1. Create an `authors` table with a primary key.
2. Create a `books` table whose `author_id` references `authors`.

## Mini Challenge

Design tables for departments and employees, ensuring each employee references an existing department.

## Related Topics

- [SQL Constraints](11-constraints.md)
- [Database Relationships & Normalization](20-normalization.md)

## Navigation

[← SQL Home](00-README.md) | [← Previous: SQL Constraints](11-constraints.md) | [Next: Aggregate Functions →](13-aggregate-functions.md)
