---
layout: default
title: "06 conditionals"
---

# Conditionals

## Definition

Conditional statements choose which block runs based on a boolean expression.

## Hindi Explanation

Conditionals condition ke sach ya galat hone par alag code chalate hain.

## Marathi Explanation

Condition khari kiwa khoti asel tyavarun conditionals vegla code chalavtat.

## Hinglish Explanation

`if` se program decision leta hai; `else if` aur `else` baaki cases handle karte hain.

## Why Use It?

Programs use conditions to validate input, select actions, and respond to changing data.

## Syntax and Example

```java
int marks = 72;
if (marks < 0 || marks > 100) {
    System.out.println("Invalid marks");
} else if (marks >= 40) {
    System.out.println("Pass");
} else {
    System.out.println("Try again");
}
```

## Output

```text
Pass
```

## Code Breakdown

Java requires a boolean condition in `if`; unlike some languages, numbers and strings are not automatically truthy or falsy. The first true branch runs; later branches are skipped. Braces are recommended even for one statement.

## Another Practical Example

```java
int choice = 2;
switch (choice) {
    case 1 -> System.out.println("View balance");
    case 2 -> System.out.println("Deposit");
    default -> System.out.println("Unknown option");
}
```

Switch statements and expressions support other forms, including strings and enums. Use `if` for ranges and compound conditions; `switch` works well when selecting among distinct cases.

## Common Mistakes

- Writing `=` instead of a comparison.
- Forgetting braces or mismatching them.
- Reversing the order of ranges so a broad case catches everything first.
- Expecting non-boolean values to act as conditions.

## Important Notes

The conditional expression `condition ? valueA : valueB` chooses one value and is useful for short assignments. Nested conditions are valid, but extract logic into a method if nesting harms readability.

## Real-World Usage

Conditions decide eligibility, access, discounts, and responses to user choices.

## Try It Yourself

Classify a temperature as below freezing, comfortable, or hot.

## Mini Challenge

Read an integer and report whether it is negative, zero, or positive, then whether it is even or odd.

## Related Topics

[Operators](05-operators-and-expressions.md) · [Loops](07-loops.md)

## Navigation

[Previous: Operators](05-operators-and-expressions.md) | [Home](00-README.md) | [Next: Loops](07-loops.md)

