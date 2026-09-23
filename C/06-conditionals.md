# Conditionals in C

> 🟢 Beginner

## 📖 Definition

Conditional statements allow C programs to make decisions and branching paths depending on evaluated conditions.

## 📝 Syntax

### `if ... else if ... else`
```c
if (condition) {
    // Code block 1
} else if (another_condition) {
    // Code block 2
} else {
    // Default block
}
```

### `switch` Statement
```c
switch (choice) {
    case 1:
        // Action 1
        break;
    case 2:
        // Action 2
        break;
    default:
        // Default action
}
```

## 💡 Practical Example

```c
#include <stdio.h>

int main() {
    int marks = 82;

    if (marks >= 90) {
        printf("Grade: A+\n");
    } else if (marks >= 75) {
        printf("Grade: B\n");
    } else {
        printf("Grade: C\n");
    }

    return 0;
}
```

## 👀 Output

```text
Grade: B
```

## ⚠️ Common Mistakes

- Using `=` instead of `==` inside an `if` condition: `if (x = 10)` sets `x` to `10` and always evaluates to `true`! Always use `if (x == 10)`.

## 🧪 Try It Yourself

Write a program that prompts for an age and prints `"Eligible to vote"` if age is 18 or older, otherwise `"Not eligible"`.

## 🎯 Mini Challenge

Create a simple menu choice using `switch` where option 1 prints `"Start Game"`, option 2 prints `"Settings"`, and option 3 prints `"Exit"`.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Operators](05-operators.md) | [Next: Loops →](07-loops.md)
