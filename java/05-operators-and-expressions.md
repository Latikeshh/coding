---
layout: default
title: "05 operators and expressions"
---

# Operators and Expressions

## Definition

An operator performs an operation on values. An expression combines values and operators to produce a result.

## Hindi Explanation

Operator values par calculation ya comparison karta hai. Expression ka result ek value hota hai.

## Marathi Explanation

Operator values var kriya kiwa tulana karto. Expression madhun ek parinam milto.

## Hinglish Explanation

Operators calculations, comparisons aur logical checks ke building blocks hain.

## Why Use It?

Operators express calculations and decisions directly in code.

## Syntax

```java
int total = 7 + 3 * 2;
boolean inRange = total >= 10 && total <= 20;
```

## Example and Output

```java
int apples = 7;
int people = 3;
System.out.println(apples / people);       // 2: integer division
System.out.println(apples % people);       // 1: remainder
System.out.println(7.0 / 3);              // decimal division
System.out.println(2 + 3 * 4);            // 14: multiplication first
System.out.println((2 + 3) * 4);          // 20: parentheses first
```

Java includes arithmetic `+ - * / %`, comparisons `== != < <= > >=`, logical `&& || !`, and compound assignments such as `+=` and `-=`. `++` and `--` change a numeric variable by one. Integer division truncates toward zero; integer division by zero throws `ArithmeticException`.

## Code Breakdown

Precedence controls grouping: multiplication happens before addition, comparisons before `&&`, and `&&` before `||`. Parentheses make intent clearer. `&&` and `||` short-circuit: the right side runs only when needed.

## Another Practical Example

```java
int marks = 78;
boolean passed = marks >= 40;
boolean distinction = marks >= 75;
System.out.println("Passed: " + passed + ", distinction: " + distinction);
```

## Common Mistakes

- Using `=` instead of `==` in a comparison.
- Comparing strings with `==`; use `.equals()` for their content.
- Assuming integer division keeps decimal places.
- Confusing `&&` (both conditions) with `||` (either condition).

## Important Notes

`==` compares primitive values, but for objects it tests whether references identify the same object. Use `.equals()` for value equality where the class defines it. Do not compare floating-point calculations for exact equality when rounding error matters.

## Real-World Usage

Operators calculate totals, enforce thresholds, and combine validation conditions.

## Try It Yourself

Compute the remainder when a number of minutes is divided into hours and remaining minutes.

## Mini Challenge

Given a score, calculate whether it is passing and whether it falls in the 75–100 range. Ensure the upper bound is checked too.

## Related Topics

[Conditionals](06-conditionals.md) · [Variables](03-variables-and-data-types.md)

## Navigation

[Previous: Input and Output](04-input-and-output.md) | [Home](00-README.md) | [Next: Conditionals](06-conditionals.md)

