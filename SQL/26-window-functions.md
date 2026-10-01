# Window Functions

> 🔴 Advanced

## Definition

A **window function** calculates a value across related rows while keeping each input row in the result. Unlike `GROUP BY`, it does not collapse each group into one row.

## Hindi Explanation

Window function related rows par calculation karta hai, lekin har input row result mein bani rehti hai. `GROUP BY` ki tarah rows ko ek group row mein sametata nahi.

## Marathi Explanation

Window function sambandhit rows var calculation karto, pan pratyek input row result madhye thevto. `GROUP BY` pramane anek rows eka row madhye kami karat nahi.

## Why Use Them?

Use window functions for rankings, running totals, moving averages, and comparisons to neighboring or partition-level values.

## Syntax

```sql
function_name(expression) OVER (
    PARTITION BY grouping_expression
    ORDER BY ordering_expression
    frame_clause
)
```

## Example

```sql
SELECT
    department,
    employee_id,
    salary,
    DENSE_RANK() OVER (
        PARTITION BY department
        ORDER BY salary DESC
    ) AS department_rank
FROM employees;
```

## Code Breakdown

`PARTITION BY` restarts ranking for each department. `ORDER BY` ranks higher salaries first. `DENSE_RANK` assigns the same rank to tied salaries without leaving gaps.

## Output

Each employee remains in the result with a rank within their department. Rows tied on salary share a rank.

## Another Practical Example

```sql
SELECT
    account_id,
    posted_at,
    amount,
    SUM(amount) OVER (
        PARTITION BY account_id
        ORDER BY posted_at, transaction_id
        ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
    ) AS running_balance_change
FROM transactions;
```

A deterministic tie-breaker such as `transaction_id` makes the row order explicit.

## Common Mistakes

- Expecting `PARTITION BY` to filter rows; it only defines calculation groups.
- Omitting ordering when a meaningful rank or running sequence is required.
- Assuming the default frame for an ordered aggregate is always row-by-row; default frames can include peers with the same ordering values.

## Important Notes

Window functions generally cannot be used directly in `WHERE` at the same query level; use a subquery or CTE to filter their results. Frame support, `QUALIFY`, and details vary by engine. Add a unique ordering key when deterministic row-by-row output matters.

## Real-World Usage

Rank products by category, compute rolling sales totals, and compare each month's result with the prior month.

## Try It Yourself

1. Rank products by price within each category.
2. Calculate a running total of orders per customer.

## Mini Challenge

Return the top two salaries in each department. Decide whether ties should be included and choose `ROW_NUMBER`, `RANK`, or `DENSE_RANK` accordingly.

## Related Topics

- [GROUP BY & HAVING](14-group-by-and-having.md)
- [Common Table Expressions](24-ctes.md)

## Navigation

[← SQL Home](00-README.md) | [← Previous: Recursive CTEs](25-recursive-ctes.md) | [Next: Stored Procedures →](27-stored-procedures.md)
