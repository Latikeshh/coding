---
layout: default
title: "28 triggers"
---

# Triggers

> 🔴 Advanced

## Definition

A **trigger** is database logic that runs automatically when a configured event, such as an insert, update, or delete, occurs on a table or view. Trigger timing and supported events depend on the database.

## Hindi Explanation

Trigger ek automatic database routine hai jo configured event, jaise insert ya update, hone par chalta hai. Trigger ke timing aur syntax ke rules database product ke hisaab se alag hote hain.

## Marathi Explanation

Trigger ha automatic database routine aahe, jo insert kiwa update sarkha nirdharit event zalyavar chalto. Trigger chi vel aani syntax database pramane badalte.

## Why Use Them?

Triggers can enforce rules close to the data or record audit information for changes that must be captured regardless of which client performs them.

## Syntax

Trigger syntax is vendor-specific. This PostgreSQL example records updates to an employee's salary:

```sql
CREATE TABLE salary_audit (
    employee_id INTEGER NOT NULL,
    old_salary NUMERIC NOT NULL,
    new_salary NUMERIC NOT NULL,
    changed_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE FUNCTION log_salary_change()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO salary_audit (employee_id, old_salary, new_salary)
    VALUES (OLD.employee_id, OLD.salary, NEW.salary);
    RETURN NEW;
END;
$$;

CREATE TRIGGER employees_salary_audit
AFTER UPDATE OF salary ON employees
FOR EACH ROW
WHEN (OLD.salary IS DISTINCT FROM NEW.salary)
EXECUTE FUNCTION log_salary_change();
```

## Example

Updating an employee's salary causes one audit row to be inserted for each changed row.

## Code Breakdown

`OLD` contains the previous row and `NEW` the proposed row in this PostgreSQL row-level trigger. `AFTER UPDATE OF salary` limits the event; the `WHEN` condition skips unchanged values. The trigger function returns `NEW` as required for this trigger type.

## Output

The employee update proceeds and a corresponding old/new salary pair is recorded in `salary_audit` within the same transaction.

## Another Practical Example

A trigger could set an `updated_at` column when a row changes, although application-managed timestamps or database defaults may be simpler depending on the requirements.

## Common Mistakes

- Hiding important side effects in triggers so callers cannot predict what a statement changes.
- Creating recursive trigger behavior that repeatedly modifies the same table.
- Forgetting that trigger effects typically participate in the triggering transaction and can cause it to fail.

## Important Notes

This example is PostgreSQL-specific. MySQL, SQL Server, Oracle, and SQLite use different trigger syntax and capabilities. Triggers are not a substitute for carefully designed constraints, and their execution order and recursion rules should be verified in the target database.

## Real-World Usage

Write audit trails, enforce cross-row rules that constraints cannot express, or maintain derived data when the consistency trade-off is understood.

## Try It Yourself

1. Inspect trigger documentation for your database and identify its row-level or statement-level behavior.
2. Trace how an insert or update could activate your proposed trigger.

## Mini Challenge

Design an audit trigger for changes to an order's status. Decide whether to record updates that set the status to its existing value.

## Related Topics

- [Stored Procedures & Functions](27-stored-procedures.html)
- [SQL Constraints](11-constraints.html)

## Navigation

[← SQL Home](./) | [← Previous: Stored Procedures](27-stored-procedures.html) | [Next: SQL Security →](29-sql-security.html)


