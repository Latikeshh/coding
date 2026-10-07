---
layout: default
title: "24 recursive ctes"
---

# Recursive CTEs

> 🔴 Advanced

## Definition

A **recursive CTE** is a CTE that refers to its own result to process hierarchical or sequential data. It consists of an anchor query and a recursive query, combined with `UNION` or `UNION ALL`.

## Hindi Explanation

Recursive CTE apne pichhle result ko dobara use karke hierarchy ya sequence par kaam karta hai. Isme shuruaati anchor query aur agla level nikalne wali recursive query hoti hai.

## Marathi Explanation

Recursive CTE aaplyach magil result cha vapar karun hierarchy kiwa sequence var kaam karto. Tyat suruvaticha anchor query aani pudhcha star shodhnari recursive query aste.

## Why Use Them?

They can traverse organizational hierarchies, category trees, and parent-child relationships when the number of levels is not fixed.

## Syntax

```sql
WITH RECURSIVE cte_name AS (
    -- Anchor member
    SELECT ...
    UNION ALL
    -- Recursive member references cte_name
    SELECT ... FROM source JOIN cte_name ON ...
)
SELECT * FROM cte_name;
```

## Example

This PostgreSQL-compatible example lists a manager and all levels of employees below them:

```sql
WITH RECURSIVE reports AS (
    SELECT employee_id, manager_id, name, 0 AS depth
    FROM employees
    WHERE employee_id = 1

    UNION ALL

    SELECT e.employee_id, e.manager_id, e.name, r.depth + 1
    FROM employees AS e
    JOIN reports AS r ON e.manager_id = r.employee_id
)
SELECT employee_id, name, depth
FROM reports
ORDER BY depth, employee_id;
```

## Code Breakdown

The anchor selects the starting manager at depth zero. Each recursive iteration adds employees whose `manager_id` belongs to the previous result, increasing depth. The recursion ends when no more rows match.

## Output

The result contains the selected manager and reachable reports, with their hierarchy depth. The exact order is defined by the final `ORDER BY`.

## Another Practical Example

A recursive CTE can generate integer sequences, but built-in series or hierarchy facilities may be more suitable in a particular database.

## Common Mistakes

- Writing a recursive member that does not make progress and therefore runs until an engine limit or failure.
- Failing to handle cycles in data; a row may become its own ancestor through a cycle.
- Assuming every database uses identical recursive syntax or limits.

## Important Notes

Use valid parent-child constraints and, for potentially cyclic graphs, add explicit cycle detection or a depth bound appropriate to the business rule. `UNION` removes duplicates and can stop repeated identical rows, while `UNION ALL` retains them and is usually more efficient when duplicates are not a termination concern. Syntax such as `SEARCH` and `CYCLE` is database-specific.

## Real-World Usage

Traverse employee reporting structures, nested categories, bill-of-material trees, and folder hierarchies.

## Try It Yourself

1. Trace the anchor and first recursive iteration for a three-level manager hierarchy.
2. Add a maximum depth condition suitable for a known hierarchy.

## Mini Challenge

Adapt the example to list all descendants of a chosen department node and explain how you would detect or prevent cycles.

## Related Topics

- [Common Table Expressions](24-ctes.html)
- [SQL Joins](15-joins.html)

## Navigation

[← SQL Home](./) | [← Previous: Common Table Expressions](24-ctes.html) | [Next: Window Functions →](26-window-functions.html)


