# Loops in C

> 🟢 Beginner

## 📖 Definition

Loops repeat a block of C statements as long as a specified condition remains `true`.

## 📝 Types of Loops

1. **`for` loop:** Used when the number of iterations is known in advance.
2. **`while` loop:** Runs as long as the condition evaluates to `true`.
3. **`do-while` loop:** Guarantees execution at least once before checking the condition.

## 💡 Practical Example

```c
#include <stdio.h>

int main() {
    // 1. For loop
    printf("For Loop:\n");
    for (int i = 1; i <= 3; i++) {
        printf("i = %d\n", i);
    }

    // 2. While loop
    printf("\nWhile Loop:\n");
    int count = 3;
    while (count > 0) {
        printf("count = %d\n", count);
        count--;
    }

    return 0;
}
```

## 👀 Output

```text
For Loop:
i = 1
i = 2
i = 3

While Loop:
count = 3
count = 2
count = 1
```

## ⚠️ Common Mistakes

- Creating an infinite loop by failing to update loop control variables (e.g. omitting `count--`).

## 🧪 Try It Yourself

Write a `for` loop that prints all numbers from `1` to `20` that are divisible by `3`.

## 🎯 Mini Challenge

Write a program that uses a `while` loop to calculate the factorial of a number entered by the user (e.g. `5! = 5 * 4 * 3 * 2 * 1 = 120`).

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Conditionals](06-conditionals.md) | [Next: Functions →](08-functions.md)
