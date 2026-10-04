---
layout: default
title: "07 loops"
---

# Loops

## Definition

A loop repeats a block while a condition holds or for each item in a sequence.

## Hindi Explanation

Loop ek block ko baar-baar chalata hai. `for` count ya items ke liye aur `while` condition ke liye upyogi hai.

## Marathi Explanation

Loop ek block punha punha chalavto. `for` mojani kiwa items sathi, tar `while` condition sathi upyogi aahe.

## Hinglish Explanation

Repeated kaam ko manually copy karne ke bajay loop mein likho.

## Why Use It?

Loops process collections, repeat prompts, and perform calculations without duplicated code.

## Syntax and Example

```java
int sum = 0;
for (int number = 1; number <= 5; number++) {
    sum += number;
}
System.out.println(sum);
```

## Output

```text
15
```

## Code Breakdown

The `for` loop has initialization, continuation condition, and update. A `while` loop checks its condition before each iteration. Enhanced `for` iterates over each item: `for (String name : names) { ... }`.

## Another Practical Example

```java
int attempts = 0;
while (attempts < 3) {
    System.out.println("Attempt " + (attempts + 1));
    attempts++;
}
```

`break` exits the nearest loop; `continue` skips to its next iteration. Nested loops are useful for grids but can increase work quickly. Ensure a `while` loop changes state so it can end.

## Common Mistakes

- Off-by-one conditions such as `i <= array.length`.
- Forgetting to update a `while` loop counter, creating an infinite loop.
- Changing a collection's structure while iterating it with an enhanced `for` loop.

## Important Notes

Use an index-based `for` when the index matters. Use enhanced `for` when only values matter. `do-while` checks its condition after the body, so it runs at least once.

## Real-World Usage

Loops process each record, retry a failed action, or calculate totals across transaction data.

## Try It Yourself

Print multiples of 7 up to 70 and calculate their sum.

## Mini Challenge

Print a right triangle of stars using nested loops. Then explain how many times the inner body runs for height 4.

## Related Topics

[Conditionals](06-conditionals.md) · [Methods](08-methods.md) · [Arrays](09-arrays.md)

## Navigation

[Previous: Conditionals](06-conditionals.md) | [Home](00-README.md) | [Next: Methods](08-methods.md)

