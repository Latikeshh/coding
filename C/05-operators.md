# Operators in C

> 🟢 Beginner

## 📖 Definition

**Operators** in C perform mathematical calculations, logical checks, and value assignments.

## 📝 Operators Summary

1. **Arithmetic:** `+`, `-`, `*`, `/`, `%`
2. **Relational:** `==`, `!=`, `>`, `<`, `>=`, `<=`
3. **Logical:** `&&` (AND), `||` (OR), `!` (NOT)
4. **Increment / Decrement:** `++`, `--`

## 💡 Practical Example

```c
#include <stdio.h>

int main() {
    int a = 15, b = 4;

    printf("Addition: %d\n", a + b);
    printf("Integer Division: %d\n", a / b); // Truncates decimal part!
    printf("Modulus (Remainder): %d\n", a % b);

    int count = 5;
    count++;
    printf("Incremented Count: %d\n", count);

    return 0;
}
```

## 👀 Output

```text
Addition: 19
Integer Division: 3
Modulus (Remainder): 3
Incremented Count: 6
```

## ⚠️ Common Mistakes

- **Integer Division:** Dividing two integers produces an integer (e.g. `5 / 2` yields `2`, not `2.5`). Cast one operand to `float` or `double` if you want a decimal result: `(float)5 / 2`.

## 🧪 Try It Yourself

Write a C program that calculates the remainder when `29` is divided by `5`.

## 🎯 Mini Challenge

Write a program that takes an integer number from the user and checks if it is even or odd using the `%` operator.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Input/Output](04-input-output.md) | [Next: Conditionals →](06-conditionals.md)
