---
layout: default
title: "16 sql functions"
---

# SQL String, Numeric & Date Functions

> 🟡 Intermediate

## Definition

SQL functions accept values and return a computed value. Common built-ins transform text and numbers, handle NULLs, or calculate date/time values.

## Hindi Explanation

SQL functions input values lekar result deti hain. `UPPER` text ko uppercase karta hai, `ROUND` number round karta hai, aur `COALESCE` pehli non-NULL value deta hai. Date functions database ke hisaab se alag ho sakte hain.

## Marathi Explanation

SQL function input values gheun result dete. `UPPER` text uppercase karto, `ROUND` sankhya round karto, aani `COALESCE` pahili non-NULL value dete. Date functions database pramane badlu shaktat.

## Why Use Them?

Functions help normalize display, calculate derived values, handle optional data, and filter or group using computed values.

## Syntax

```sql
SELECT function_name(expression)
FROM table_name;
```

## SQL Function types
# (1) SRF Single row fun
# (2) MRF multi row function

## Example

```sql
SELECT
    UPPER(name) AS display_name,
    ROUND(price * 1.10, 2) AS price_with_tax,
    COALESCE(category, 'Uncategorized') AS category_label
FROM products;
```

## Code Breakdown

`UPPER` changes the returned text, not the stored value. `ROUND` calculates a two-decimal result; it does not by itself change the column's stored precision. `COALESCE` returns the first non-NULL argument.

## Output

For a row with `name = 'Notebook'`, `price = 2.50`, and `category = NULL`, the query returns `NOTEBOOK`, `2.75`, and `Uncategorized`.

## Another Practical Example

```sql
SELECT product_id, LENGTH(name) AS name_length
FROM products;
```

Function names such as `LENGTH` and `CHAR_LENGTH` are not fully consistent across database products.

## Common Mistakes

- Assuming string concatenation, date arithmetic, or function names are identical in every engine.
- Using a function on an indexed column in a filter without considering whether the index can still be used.
- Treating rounding as a substitute for choosing an appropriate numeric type.

## Important Notes

`UPPER`, `LOWER`, `ROUND`, and `COALESCE` are broadly available, but exact syntax and behavior can still differ. Date formatting, current-time functions, time zones, and interval arithmetic are especially dialect-dependent. Check the documentation for your selected database.

## Real-World Usage

Format labels, calculate taxes, fill display fallbacks, and extract or compare date parts in reports.

## Try It Yourself

1. Display each product name in lowercase.
2. Show each price rounded to the nearest whole number.

## Mini Challenge

Return product name, price after a 5% discount rounded to two places, and a fallback category label.

## Related Topics

- [Conditional Logic with CASE](17-case-expressions.md)
- [SQL Data Types & NULL Values](04-data-types-and-null.md)

## Navigation

[← SQL Home](00-README.md) | [← Previous: SQL Joins](15-joins.md) | [Next: CASE Expressions →](17-case-expressions.md)

