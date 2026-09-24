# Conditionals in C

> 🟢 Beginner

## 📖 Definition

Conditional statements (`if`, `else if`, `else`, `switch`) control the execution flow of a C program by executing specific code blocks based on whether logical expressions evaluate to **true** (non-zero) or **false** (`0`).

## 🌐 Multilingual Explanation

### English
C uses `if-else` branches and `switch` statements to make decisions. In C, any non-zero numeric value evaluates as `true`, while `0` evaluates as `false`. `switch` statements require `break` keywords to prevent accidental fallthrough to subsequent cases.

### Hindi
C program decision-making ke liye `if`, `else if`, `else` aur `switch` statements ka use karta hai. C mein zero (`0`) ka matlab `false` hota hai aur koi bhi non-zero number (jaise `1`, `100`, `-5`) `true` hota hai. `switch` statement mein `break` na lagane par fallthrough ho jata hai.

### Marathi
C madhye decision-making sathi `if`, `else if`, `else` aani `switch` statements vaparali jatat. C madhye `0` mhanje `false` aani `0` vyatirikta konta hi number `true` manla jato. `switch` madhye `break` naslyas tya nantarche cases sudha execute hotat.

### Hinglish
Program execution flow control karne ke liye `if-else` aur `switch` use hota hai. Comparison ke liye `if (score == 100)` likhein, `=` assignment ke sath mix mat karein. Short-circuit evaluation se pehli condition fail hone par logical AND `&&` doosri condition evaluation skip kar deta hai.

## 🤔 Why Do We Use Them?

Real-world software is dynamic. A banking app must check if a user has sufficient account balance before approving a withdrawal. An ATM must present choices based on user menu selections. Conditionals allow code to make decisions based on changing data.

## 🧠 Simple Explanation

Think of conditionals as road signs:
- `if (weather == RAINY)`: Take an umbrella.
- `else if (weather == SUNNY)`: Wear sunglasses.
- `else`: Wear normal clothes.

## 📝 Syntax & Decision Structures

### 1. `if - else if - else` Ladder
```c
if (condition1) {
    // Executes if condition1 is non-zero (true)
} else if (condition2) {
    // Executes if condition1 is 0 AND condition2 is non-zero
} else {
    // Executes if all preceding conditions evaluate to 0 (false)
}
```

### 2. `switch` Statement
`switch` compares an integer or `char` expression against constant `case` values:
```c
switch (expression) {
    case CONSTANT1:
        // Statements
        break; // Exits switch block
    case CONSTANT2:
        // Statements
        break;
    default:
        // Executes if no cases match
        break;
}
```

## 💡 Practical Example

Here is a practical student grading and academic standing system demonstrating both `if-else` ladders and `switch` menus:

```c
#include <stdio.h>

int main(void) {
    int studentMarks = 84;
    char gradeLetter;

    // 1. Determining Grade using if - else if - else Ladder
    if (studentMarks >= 90) {
        gradeLetter = 'A';
    } else if (studentMarks >= 75) {
        gradeLetter = 'B';
    } else if (studentMarks >= 60) {
        gradeLetter = 'C';
    } else if (studentMarks >= 40) {
        gradeLetter = 'D';
    } else {
        gradeLetter = 'F';
    }

    printf("Student Score : %d / 100\n", studentMarks);
    printf("Grade Assigned: %c\n\n", gradeLetter);

    // 2. Performance Feedback using switch
    printf("--- ACADEMIC FEEDBACK ---\n");
    switch (gradeLetter) {
        case 'A':
            printf("Remark: Outstanding performance! Eligible for scholarship.\n");
            break;
        case 'B':
            printf("Remark: Good performance. Keep up the consistent work.\n");
            break;
        case 'C':
            printf("Remark: Satisfactory performance. Room for improvement.\n");
            break;
        case 'D':
            printf("Remark: Marginal pass. Academic counseling recommended.\n");
            break;
        case 'F':
            printf("Remark: Failed course. Re-examination required.\n");
            break;
        default:
            printf("Remark: Invalid grade specified!\n");
            break;
    }

    return 0;
}
```

## 🔍 Code Breakdown

- `if (studentMarks >= 90)`: Checks conditions sequentially. Once a condition evaluates to `1` (`true`), its block executes, and C skips all remaining `else if` and `else` branches.
- `switch (gradeLetter)`: Evaluates the single character variable `gradeLetter`.
- `break`: Essential inside each `case`. It terminates execution of the `switch` statement and jumps out to the next statement outside the switch block.

## 👀 Output

```text
Student Score : 84 / 100
Grade Assigned: B

--- ACADEMIC FEEDBACK ---
Remark: Good performance. Keep up the consistent work.
```

## ⚠️ Common Mistakes

- **Accidental Assignment in Condition:** Writing `if (mark = 100)` assigns `100` to `mark`. Since `100` is non-zero, the condition is always `true`! Always use `==` for comparisons: `if (mark == 100)`.
- **Missing `break` in `switch` (Fallthrough):** Forgetting `break` causes execution to "fall through" and execute subsequent case blocks even if their case labels do not match!
  ```c
  switch (code) {
      case 1: printf("One\n"); // Missing break!
      case 2: printf("Two\n"); // Executes both "One" and "Two" if code is 1!
  }
  ```
- **Float in `switch`:** `switch` statements only accept integral values (`int`, `char`, `enum`). Floating-point numbers (`float`, `double`) cannot be used in a `switch`.

## 🛡️ Safety / Short-Circuit Evaluation

C uses **Short-Circuit Evaluation** for logical operators:
- In `A && B`: If `A` evaluates to `0` (`false`), C will **not** evaluate `B` at all, because the overall result is guaranteed to be `false`.
- In `A || B`: If `A` evaluates to non-zero (`true`), C will **not** evaluate `B` at all.

*Example Safety Guard:*
```c
if (ptr != NULL && *ptr == 10) { // Safe! If ptr is NULL, *ptr is never evaluated, preventing crash
    printf("Valid match\n");
}
```

## 🌍 Real-World Usage

Conditionals drive user authorization checks, operating system kernel interrupt handling, game engine state machines, network packet routing, and error recovery handlers.

## 🧪 Try It Yourself

1. Write a C program that takes a number and checks if it is **Positive**, **Negative**, or **Zero**.
2. Also check if the number is **Even** or **Odd** using `% 2 == 0`.

## 🎯 Mini Challenge

Write a menu-driven ATM program using `switch`. Present 3 choices:
1. Check Balance
2. Deposit Money
3. Withdraw Money
Input the user's menu choice and execute the selected action using a starting balance of `$1000.00`.

## 🔗 Related Topics

- [Operators](05-operators.md)
- [Loops](07-loops.md)
- [Functions](08-functions.md)

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Operators](05-operators.md) | [Next: Loops →](07-loops.md)
