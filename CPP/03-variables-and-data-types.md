---
layout: default
title: "03 variables and data types"
---

# Variables & Primitive Data Types in C++

> 🟢 Beginner

---

## 📖 Definition

A **Variable** is a named location in computer memory used to store data. C++ is a **statically typed** and **strongly typed** language, meaning every variable's data type must be declared at compile time and cannot change during program execution.

---

## 🇮🇳 Hindi Explanation

Variable computer ki memory mein ek box ki tarah hota hai jisme hum koi value store karte hain. C++ mein kisi bhi variable ko use karne se pehle uska type (`int`, `double`, `char`, `bool`, `std::string`) batana zaroori hota hai. Memory mein kitni jagah lagegi yeh data type par depend karta hai (jaise `int` 4 bytes leta hai).

---

## 🚩 Marathi Explanation

Variable mhanje computer cha memory madhla ek sthan (box) jyat aapan value store karto. C++ madhye variable vaparanyapurvi tyacha data type (`int`, `double`, `char`, `bool`) sangane bandhankarak aahe. Memory madhye tyala kiti जागा lagel he data type vr tharte.

---

## 📊 Summary of Primitive Data Types

| Data Type | Typical Size | Description | Example Values |
|:---|:---:|:---|:---|
| `int` | 4 Bytes | Whole integers | `-50`, `0`, `42` |
| `float` | 4 Bytes | Single-precision floating point | `3.14f`, `-0.01f` |
| `double` | 8 Bytes | Double-precision floating point | `3.1415926535` |
| `char` | 1 Byte | Single ASCII character in single quotes | `'A'`, `'z'`, `'9'` |
| `bool` | 1 Byte | Boolean truth value | `true` (`1`), `false` (`0`) |
| `std::string` | Dynamic | Sequence of characters in double quotes | `"Learn Coding"` |
| `auto` | Auto-inferred | Type deduced automatically by compiler (C++11) | `auto x = 10;` |

---

## 🧠 Simple Analogy

Think of variable types as kitchen storage containers:
- **`int`**: A egg carton designed strictly for whole eggs (no liquid or slices!).
- **`double`**: A measuring cup for liquids with precise decimal levels.
- **`char`**: A single key hook that holds exactly 1 key.
- **`std::string`**: A word banner made of connected letters.

---

## 💡 Practical Example

```cpp
#include <iostream>
#include <string>
#include <iomanip>

int main() {
    // Variable Declarations & Initializations
    std::string playerName = "Aria Blackwood";
    int level = 42;
    double healthPoints = 98.75;
    char rankGrade = 'S';
    bool isVIPMember = true;

    // Printing variables
    std::cout << "--- PLAYER PROFILE ---" << std::endl;
    std::cout << "Name        : " << playerName << std::endl;
    std::cout << "Level       : " << level << std::endl;
    std::cout << "Health      : " << healthPoints << " HP" << std::endl;
    std::cout << "Rank Grade  : " << rankGrade << std::endl;
    std::cout << "VIP Status  : " << (isVIPMember ? "Active" : "Inactive") << std::endl;

    // Type Deduction with auto (C++11)
    auto score = 15000; // Inferred as int
    std::cout << "Score       : " << score << " (Type auto-deduced)" << std::endl;

    return 0;
}
```

---

## 🔍 Code Breakdown

- `std::string`: Included from `<string>` header for working with text strings.
- `bool`: Can store `true` or `false`. Printed as `1` or `0` by default.
- `(isVIPMember ? "Active" : "Inactive")`: Ternary expression converts boolean `true` into human-readable string.
- `auto score = 15000;`: Compiler automatically deduces `score` as integer at compile time.

---

## 👀 Output

```text
--- PLAYER PROFILE ---
Name        : Aria Blackwood
Level       : 42
Health      : 98.75 HP
Rank Grade  : S
VIP Status  : Active
Score       : 15000 (Type auto-deduced)
```

---

## ⚠️ Common Mistakes

- **Single Quotes vs Double Quotes**:
  - Single quotes `'A'` are for `char`.
  - Double quotes `"A"` are for `std::string`. Writing `char c = "A";` causes a compilation error!
- **Uninitialized Variables**: Reading an uninitialized variable (`int x; std::cout << x;`) accesses garbage memory values!
- **Integer Division Truncation**: `5 / 2` in C++ evaluates to `2` (integer division), NOT `2.5`! Write `5.0 / 2` for decimal float division.

---

## 🛡️ Best Practices

- Always initialize variables upon declaration: `int score = 0;`.
- Use `const` or `constexpr` for variables that should never change: `const double PI = 3.14159;`.

---

## 🧪 Try It Yourself

1. Declare an `int` for your birth year and calculate your current age.
2. Store a product price in a `double` and print it with tax added.

---

## 🎯 Mini Challenge

Write a program that stores a bank account holder's name, account balance, and account active status, then prints a formatted account summary.

---

## 🔗 Related Topics

- [Input & Output in C++](04-input-output.md)
- [Operators in C++](05-operators.md)

---

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Introduction](02-introduction-to-cpp.md) | [Next: Input & Output →](04-input-output.md)
