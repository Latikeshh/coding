# Variables and Data Types in C

> 🟢 Beginner

## 📖 Definition

In C, variables are typed locations in computer memory used to hold data values. You must specify the **type** of data a variable will store when declaring it.

## 📝 Common Primitive Data Types

| Data Type | Keyword | Size (typical) | Format Specifier | Example |
|---|---|---|---|---|
| Integer | `int` | 4 bytes | `%d` | `10` |
| Floating point | `float` | 4 bytes | `%f` | `3.14f` |
| Double precision | `double` | 8 bytes | `%lf` | `99.99` |
| Character | `char` | 1 byte | `%c` | `'A'` |

## 💡 Practical Example

```c
#include <stdio.h>

int main() {
    int age = 21;
    float gpa = 3.8;
    char grade = 'A';

    printf("Age: %d\n", age);
    printf("GPA: %.1f\n", gpa);
    printf("Grade: %c\n", grade);

    return 0;
}
```

## 👀 Output

```text
Age: 21
GPA: 3.8
Grade: A
```

## ⚠️ Common Mistakes

- Using the wrong format specifier in `printf` (e.g., `%d` for a `float` instead of `%f`).
- Using double quotes `"` for single characters instead of single quotes `'` (e.g., `char c = "A";` is incorrect).

## 🧪 Try It Yourself

Declare an `int` for `birthYear` and a `double` for `height` in meters. Print both with formatted text.

## 🎯 Mini Challenge

Calculate the perimeter of a rectangle with `length = 12` and `width = 5` using `int` variables and print the result.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Introduction](02-introduction-to-c.md) | [Next: Input & Output →](04-input-output.md)
