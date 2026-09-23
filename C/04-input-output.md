# Input and Output in C

> 🟢 Beginner

## 📖 Definition

Input and output (I/O) functions allow programs to interact with users. In C, `printf()` is used for output and `scanf()` is used to read input from the keyboard.

## 📝 Reading User Input with `scanf()`

`scanf()` reads formatted input from standard input. The `&` (address-of) operator is required before variable names so `scanf` knows where in memory to store the entered value.

## 💡 Practical Example

```c
#include <stdio.h>

int main() {
    int age;
    float score;

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("Enter your score: ");
    scanf("%f", &score);

    printf("\n--- Result ---\n");
    printf("Your age is %d and score is %.2f\n", age, score);

    return 0;
}
```

## 👀 Example Interaction

```text
Enter your age: 24
Enter your score: 88.5

--- Result ---
Your age is 24 and score is 88.50
```

## ⚠️ Common Mistakes

- Forgetting the address-of operator `&` in `scanf("%d", &age)`! This will cause a program crash or segmentation fault.

## 🧪 Try It Yourself

Write a program that asks the user for two integers, adds them together, and prints the total sum.

## 🎯 Mini Challenge

Ask the user to enter their temperature in Celsius and convert it to Fahrenheit using `(Celsius * 9/5) + 32`.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Variables](03-variables-and-data-types.md) | [Next: Operators →](05-operators.md)
