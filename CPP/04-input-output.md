---
layout: default="default"
title: "04 input output"
---

# Input & Output Streams in C++ (`std::cin`, `std::cout`, `getline`)

> 🟢 Beginner

---

## 📖 Definition

In C++, Input/Output (I/O) is performed using **Streams** provided by the `<iostream>` standard library. A Stream is an abstraction that represents a flow of data to or from a device:
- `std::cout`: Standard Output Stream (prints data to terminal).
- `std::cin`: Standard Input Stream (reads data from keyboard).
- `std::cerr`: Standard Error Stream (unbuffered error logs).
- `std::getline()`: Reads full sentences including spaces.

---

## 🇮🇳 Hindi Explanation

C++ mein console par data print karne ke liye `std::cout` aur extraction operator `<<` ka use hota hai. User se terminal par input lene ke liye `std::cin` aur insertion operator `>>` ka use hota hai. Agar user se poora sentence (spaces ke saath) input lena ho, toh `std::getline(std::cin, string_variable)` ka use karte hain, kyunki `std::cin >>` space milte hi ruk jata hai.

---

## 🚩 Marathi Explanation

C++ madhye screen vr text dakhavnyasathi `std::cout` aani `<<` cha vapar kela jato. User kadun keyboard dwara input ghenyasathi `std::cin` aani `>>` cha vapar kartat. Purna vaky (spaces sobat) input ghenyasathi `std::getline()` cha vapar karne garjeche aste, karanh `std::cin` space aalyavrach thambto.

---

## 📊 Comparison: `std::cin >>` vs `std::getline()`

| Feature | `std::cin >> var` | `std::getline(std::cin, var)` |
|:---|:---|:---|
| **Handles Spaces?** | ❌ Stops at first whitespace/space | ✅ Reads full line including spaces |
| **Best Used For** | Single numbers (`int`, `double`) or single words | Full names, addresses, full sentences |
| **Newline Buffer** | Leaves `\n` in buffer | Consumes the `\n` newline character |

---

## 💡 Practical Example

```cpp
#include <iostream>
#include <string>
#include <limits>

int main() {
    std::string fullName;
    int age;
    double gpa;

    std::cout << "=== STUDENT ENROLLMENT SYSTEM ===" << std::endl;

    // Reading Numerical Input
    std::cout << "Enter your Age: ";
    std::cin >> age;

    std::cout << "Enter your GPA: ";
    std::cin >> gpa;

    // CRITICAL: Clear the leftover '\n' newline character from the buffer!
    std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n');

    // Reading Full Sentence Input
    std::cout << "Enter your Full Name (with spaces): ";
    std::getline(std::cin, fullName);

    // Printing Final Output Summary
    std::cout << "\n--- ENROLLED STUDENT DETAILS ---" << std::endl;
    std::cout << "Full Name : " << fullName << std::endl;
    std::cout << "Age       : " << age << " years old" << std::endl;
    std::cout << "GPA       : " << gpa << " / 4.0" << std::endl;

    return 0;
}
```

---

## 🔍 Code Breakdown

- `std::cin >> age`: Reads integer input into `age`. Leaves the user's `Enter` keypress (`\n`) sitting in the keyboard buffer.
- `std::cin.ignore(...)`: Flushes the leftover `\n` from the input stream. Without this, `std::getline()` immediately reads the leftover `\n` and skips user name input!
- `std::getline(std::cin, fullName)`: Captures the entire full name string including spaces until `Enter` is pressed.

---

## 👀 Output

```text
=== STUDENT ENROLLMENT SYSTEM ===
Enter your Age: 20
Enter your GPA: 3.85
Enter your Full Name (with spaces): Rahul Vikram Sharma

--- ENROLLED STUDENT DETAILS ---
Full Name : Rahul Vikram Sharma
Age       : 20 years old
GPA       : 3.85 / 4.0
```

---

## ⚠️ Common Mistakes

- **Skipped `getline()` Bug**: Forgetting `std::cin.ignore()` after reading numbers with `std::cin >>` causes the subsequent `getline()` to be completely skipped!
- **Chaining Output Without Spaces**: Writing `std::cout << age << gpa;` prints `203.85` instead of `20 3.85`. Always include separator spaces or `\n`.

---

## 🛡️ Best Practices

- Prefer `\n` over `std::endl` inside heavy loops because `std::endl` forces a buffer flush every iteration, which degrades I/O performance.

---

## 🧪 Try It Yourself

1. Write a program that asks for a user's city and age, then calculates how many years remain until age 100.
2. Read 2 floating point numbers from input and print their sum, product, and average.

---

## 🎯 Mini Challenge

Create an interactive receipt calculator: Ask for item name (full line), item price, and quantity. Print a receipt with item name, total subtotal, 18% tax, and final grand total.

---

## 🔗 Related Topics

- [Variables & Data Types](03-variables-and-data-types.html)
- [Operators in C++](05-operators.html)

---

## 🧭 Navigation

[← C++ Home](./) | [← Previous: Variables](03-variables-and-data-types.html) | [Next: Operators →](05-operators.html)

