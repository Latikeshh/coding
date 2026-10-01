# Transactions & ACID

> 🔴 Advanced

## Definition

A **transaction** is a logical unit of database work. A transaction groups statements so they can be committed as a unit or, when supported and still active, rolled back. ACID describes important transaction properties: atomicity, consistency, isolation, and durability.

## Hindi Explanation

Transaction related database operations ka ek logical group hota hai. `COMMIT` changes ko pakka karta hai; `ROLLBACK` active transaction ke changes ko cancel karta hai. ACID transaction ki reliability ke chaar gun batata hai.

## Marathi Explanation

Transaction mhanje database operations cha ek logical group. `COMMIT` badal save karto; active transaction madhye `ROLLBACK` badal radd karto. ACID transaction chi vishwasarhata samjavte.

## Why Use Them?

Transactions prevent partially completed business operations, such as debiting one account without crediting the other.

## Syntax

```sql
BEGIN;
-- statements
COMMIT;
-- Or use ROLLBACK instead of COMMIT when appropriate.
```

## Example

```sql
BEGIN;

UPDATE accounts
SET balance = balance - 50.00
WHERE account_id = 1;

UPDATE accounts
SET balance = balance + 50.00
WHERE account_id = 2;

COMMIT;
```

## Code Breakdown

Both updates form one transfer transaction. If an error occurs before commit, the application should handle it and roll back the active transaction. Production transfer logic must also validate account existence, sufficient funds, concurrency, and exact affected-row counts.

## Output

After a successful commit, both account updates are durable according to the database's guarantees. A rollback before commit discards both changes, subject to engine and transaction configuration.

## Another Practical Example

```sql
BEGIN;
UPDATE inventory SET quantity = quantity - 1 WHERE product_id = 10;
SAVEPOINT after_inventory;
-- Additional statements may follow.
ROLLBACK TO SAVEPOINT after_inventory;
COMMIT;
```

Savepoint support and exact syntax vary; rolling back to a savepoint does not necessarily end the outer transaction.

## Common Mistakes

- Leaving transactions open, holding locks and resources longer than needed.
- Assuming every DDL statement can be rolled back in every database.
- Treating ACID as a single isolation level; isolation levels describe concurrency behavior separately.
- Ignoring concurrent updates and lost-update or double-spend risks.

## Important Notes

Atomicity means all-or-nothing behavior within transaction guarantees; consistency means constraints and application invariants are preserved; isolation defines how concurrent transactions interact; durability means committed work survives failures as specified by the system. Autocommit defaults, `BEGIN` syntax, DDL behavior, and isolation defaults vary by engine.

## Real-World Usage

Transfers, order placement, inventory changes, and multi-step account updates commonly need transactions.

## Try It Yourself

1. Update two related rows in one transaction and commit.
2. Repeat and roll back; inspect the resulting values.

## Mini Challenge

Describe checks an application should perform before committing a money transfer, including what should happen if either update affects no row.

## Related Topics

- [Indexes & Query Performance](22-indexes-and-performance.md)
- [Stored Procedures & Functions](27-stored-procedures.md)

## Navigation

[← SQL Home](00-README.md) | [← Previous: Indexes & Performance](22-indexes-and-performance.md) | [Next: Common Table Expressions →](24-ctes.md)
