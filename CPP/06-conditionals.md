---
layout: default
title: "06 conditionals"
---

# Control Flow & Conditionals in C++ (`if`, `else`, `switch`)

> 🟢 Beginner

---

## 📖 Definition

**Conditional Statements** allow a program to make decision choices and execute specific blocks of code depending on whether boolean conditions evaluate to `true` or `false`. C++ provides `if`, `else if`, `else`, and `switch` statements for control flow branch selection.

---

## 🇮🇳 Hindi Explanation

Conditionals ka matlab hai code ko shart (condition) ke hisaab se chalana. 
- `if` tab chalta hai jab condition `true` ho.
- `else if` tab chalta hai jab pehli `if` condition `false` ho aur nayi condition check karni ho.
- `else` tab chalta hai jab saari conditions `false` ho jayein.
- `switch` ek hi variable ki alag-alag exact values (`case 1`, `case 2`) ko fast match karne ke liye use hota hai.

---

## 🚩 Marathi Explanation

Conditionals cha vapar karun aapan conditions var aadharit code run karto.
- `if`: Condition true aslyas chalte.
- `else if`: Pahili condition false aslyas dusri condition tapasnyasathi.
- `else`: Sarva conditions false aslyas.
- `switch`: Eka variable chya nirdharit values (`case`) tapasnyasathi.

---

## 📝 Syntax & Branching Structure

### 1. `if - else if - else` Ladder
```cpp
if (condition1) {
    // Code executed if condition1 is true
} else if (condition2) {
    // Code executed if condition2 is true
} else {
    // Code executed if all conditions are false
}
```

### 2. `switch - case` Statement
```cpp
switch (expression) {
    case value1:
        // Statements
        break; // Prevents fall-through!
    case value2:
        // Statements
        break;
    default:
        // Fallback statements
        break;
}
```

---

## 💡 Practical Example

```cpp
#include <iostream>

int main() {
    int score = 85;
    char grade;

    std::cout << "=== GRADE EVALUATION SYSTEM ===" << std::endl;

    // 1. if - else if - else Ladder
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80) {
        grade = 'B';
    } else if (score >= 70) {
        grade = 'C';
    } else if (score >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    std::cout << "Score: " << score << " | Assigned Grade: " << grade << std::endl;

    // 2. switch - case Statement
    std::cout << "\n--- GRADE REMARKS ---" << std::endl;
    switch (grade) {
        case 'A':
            std::cout << "Remark: Outstanding Performance!" << std::endl;
            break;
        case 'B':
            std::cout << "Remark: Excellent Job!" << std::endl;
            break;
        case 'C':
            std::cout << "Remark: Good Effort!" << std::endl;
            break;
        case 'D':
            std::cout << "Remark: Needs Improvement." << std::endl;
            break;
        case 'F':
            std::cout << "Remark: Failed. Please retake the test." << std::endl;
            break;
        default:
            std::cout << "Invalid Grade." << std::endl;
            break;
    }

    return 0;
}
```

---

## 🔍 Code Breakdown

- `if (score >= 90)`: Evaluates first. Since `85 >= 90` is `false`, execution moves to the next branch `else if (score >= 80)`.
- `score >= 80`: Evaluates to `true`, assigning `'B'` to `grade`. Subsequent `else if` branches are skipped.
- `break` inside `switch`: Immediately exits the `switch` block. Without `break`, execution continues sequentially into the next `case` (known as **fall-through**).

---

## 👀 Output

```text
=== GRADE EVALUATION SYSTEM ===
Score: 85 | Assigned Grade: B

--- GRADE REMARKS ---
Remark: Excellent Job!
```

---

## ⚠️ Common Mistakes

- **Forgetting `break` in `switch` Cases**:
  Omitting `break` causes C++ to execute subsequent case statements even if their values do not match!
- **Using `switch` with Floating Point Numbers or Strings**:
  Standard C++ `switch` works strictly on integral types (`int`, `char`, `enum`). You cannot write `switch(double_val)` or `switch(string_val)`. Use `if-else` for strings and doubles.

---

## 🛡️ Best Practices

- Always include a `default:` label in `switch` statements to handle unexpected or fallback values cleanly.

---

## 🧪 Try It Yourself

1. Input an integer from the user and check whether it is **Positive**, **Negative**, or **Zero**.
2. Input a year and check if it is a **Leap Year** (`(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)`).

---

## 🎯 Mini Challenge

Write a mini calculator using a `switch` statement that inputs 2 numbers and an operator character (`+`, `-`, `*`, `/`) and prints the result.

---

## 🔗 Related Topics

- [Operators in C++](05-operators.md)
- [Loops in C++](07-loops.md)

---

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Operators](05-operators.md) | [Next: Loops →](07-loops.md)
