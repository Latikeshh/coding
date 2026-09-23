# Functions in C

> 🟢 Beginner

## 📖 Definition

A **function** is a self-contained block of code that performs a specific task and can be called repeatedly.

## 📝 Structure of a C Function

```c
return_type function_name(parameter_type parameter_name) {
    // Code logic
    return value;
}
```

## 💡 Practical Example

```c
#include <stdio.h>

// Function Prototype / Declaration
int addNumbers(int x, int y);

int main() {
    int sum = addNumbers(12, 28);
    printf("The sum is: %d\n", sum);
    return 0;
}

// Function Definition
int addNumbers(int x, int y) {
    return x + y;
}
```

## 👀 Output

```text
The sum is: 40
```

## ⚠️ Common Mistakes

- Calling a function before declaring or defining it (use function prototypes at the top of the file).

## 🧪 Try It Yourself

Write a function `float multiply(float a, float b)` that returns the product of two floating point numbers.

## 🎯 Mini Challenge

Write a function `isPositive(int num)` that returns `1` if `num > 0`, `-1` if `num < 0`, and `0` if `num == 0`.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Loops](07-loops.md) | [Next: Arrays →](09-arrays.md)
