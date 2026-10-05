---
layout: default
title: "27 stored procedures"
---

# Stored Procedures & Functions

> 🔴 Advanced

## Definition

A **stored procedure** is a named routine stored in a database and invoked to perform operations. A **stored function** returns a value and may be usable in expressions, subject to engine rules.

## Hindi Explanation

Stored procedure database mein save kiya gaya routine hota hai jo call karne par operations karta hai. Stored function value return karta hai. Dono ki syntax aur allowed behavior database ke hisaab se badalte hain.

## Marathi Explanation

Stored procedure mhanje database madhye save kelela routine, jo call kelyavar operations karto. Stored function value parat dete. Donhanchi syntax aani maryada database pramane vegli aste.

## Why Use Them?

Routines can centralize repeated database-side logic, reduce round trips for certain workflows, and provide a controlled interface to data operations.

## Syntax

Routine syntax is vendor-specific. This PostgreSQL example defines and calls a function:

```sql
CREATE FUNCTION add_tax(amount NUMERIC)
RETURNS NUMERIC
LANGUAGE SQL
IMMUTABLE
AS $$
    SELECT amount * 1.08;
$$;

SELECT add_tax(100.00);
```

## Example

The example returns `108.00` for an input of `100.00`. The routine does not update stored data; it calculates a result.

## Code Breakdown

`RETURNS NUMERIC` declares the result type. `LANGUAGE SQL` specifies the function body language. `IMMUTABLE` is a promise that the result depends only on the input and does not change for the same input; only use it when that promise is true.

## Output

```text
108.00
```

## Another Practical Example

A database-specific stored procedure could perform a multi-step operation, but the transaction and error-handling syntax must be written for the target engine.

## Common Mistakes

- Copying procedure syntax from one vendor into another.
- Marking a function deterministic or immutable when it reads changing data or depends on time.
- Putting business rules only in a routine without documenting how clients must call it.

## Important Notes

Procedure/function syntax, parameter modes, transaction control, return values, privileges, and deployment differ substantially among PostgreSQL, MySQL, SQL Server, Oracle, and SQLite. SQLite does not provide stored procedures in the same way as server database systems. Version routines as schema migrations and review execution privileges.

## Real-World Usage

Encapsulate reusable calculations, database-side maintenance, and tightly controlled data workflows.

## Try It Yourself

1. In PostgreSQL, create a pure SQL function that doubles a numeric input.
2. Look up how your selected database invokes a procedure and note the differences.

## Mini Challenge

Design (do not assume portable syntax for) a routine that marks an order paid only if it is currently pending. Identify concurrency and permission concerns.

## Related Topics

- [Transactions & ACID](23-transactions.html)
- [Triggers](28-triggers.html)

## Navigation

[← SQL Home](./) | [← Previous: Window Functions](26-window-functions.html) | [Next: Triggers →](28-triggers.html)


