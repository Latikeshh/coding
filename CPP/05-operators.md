---
layout: default
title: "05 operators"
---

# Operators in C++ (Arithmetic, Relational, Logical, Bitwise)

> 🟢 Beginner

---

## 📖 Definition

An **Operator** is a symbol that instructs the C++ compiler to perform specific mathematical, relational, or logical evaluations on one or more operands. C++ provides a rich set of operators categorized into **Arithmetic**, **Relational**, **Logical**, **Bitwise**, **Assignment**, and **Ternary** operators.

---

## 🇮🇳 Hindi Explanation

Operators wo symbols hote hain jo variables par calculations karte hain. 
- **Arithmetic (`+`, `-`, `*`, `/`, `%`)**: Math calculations ke liye.
- **Relational (`==`, `!=`, `>`, `<`, `>=`, `<=`)**: Compare karke `true` ya `false` return karte hain.
- **Logical (`&&`, `||`, `!`)**: Multiple conditions ko combine karne ke liye.
- **Increment/Decrement (`++`, `--`)**: Value ko 1 se badhane ya ghatane ke liye.

---

## 🚩 Marathi Explanation

Operators mhanje ashe symbols je variables var ghanit (math) kiwa tulana (comparison) kartat.
- **Arithmetic**: Berij, vajahbaki, gunakar, bhagakar aani baaki (`%`).
- **Relational**: Don values madhil tulana karun `true` kiwa `false` uttar detat.
- **Logical**: Ekapeksha jast conditions ekatra tapasnyasathi.

---

## 📊 Summary of Operator Categories

| Category | Operators | Description / Example |
|:---|:---|:---|
| **Arithmetic** | `+`, `-`, `*`, `/`, `%` | `a + b`, `a % b` (Remainder of integer division) |
| **Relational** | `==`, `!=`, `>`, `<`, `>=`, `<=` | `score >= 50` (Returns `bool` true/false) |
| **Logical** | `&&` (AND), `||` (OR), `!` (NOT) | `(age >= 18) && (hasLicense == true)` |
| **Increment/Decrement** | `++a` (Pre), `a++` (Post), `--a`, `a--` | Increments or decrements variable by 1 |
| **Compound Assignment** | `+=`, `-=`, `*=`, `/=`, `%=` | `x += 5` is equivalent to `x = x + 5` |
| **Ternary (Conditional)**| `condition ? val1 : val2` | `(age >= 18) ? "Adult" : "Minor"` |

---

## 🧠 Simple Analogy

- **Logical AND (`&&`)**: Like a security gate requiring **BOTH** a Gate Pass **AND** an ID Card. If either is missing, entry is denied!
- **Logical OR (`||`)**: Like paying for a ticket with **EITHER** Cash **OR** Credit Card. Any 1 valid payment method allows entry.

---

## 💡 Practical Example

```cpp
#include <iostream>

int main() {
    int a = 20, b = 6;

    // 1. Arithmetic Operators
    std::cout << "--- ARITHMETIC OPERATORS ---" << std::endl;
    std::cout << "a + b = " << (a + b) << std::endl;
    std::cout << "a - b = " << (a - b) << std::endl;
    std::cout << "a * b = " << (a * b) << std::endl;
    std::cout << "a / b = " << (a / b) << " (Integer Division)" << std::endl;
    std::cout << "a % b = " << (a % b) << " (Remainder / Modulo)" << std::endl;

    // 2. Relational & Logical Operators
    std::cout << "\n--- RELATIONAL & LOGICAL OPERATORS ---" << std::endl;
    bool isAdult = true;
    bool hasID = false;

    std::cout << "Can Enter (isAdult && hasID) : " << ((isAdult && hasID) ? "Yes" : "No") << std::endl;
    std::cout << "Can Enter (isAdult || hasID) : " << ((isAdult || hasID) ? "Yes" : "No") << std::endl;

    // 3. Pre vs Post Increment Difference
    std::cout << "\n--- INCREMENT DIFFERENCE ---" << std::endl;
    int x = 5;
    std::cout << "Initial x : " << x << std::endl;
    std::cout << "x++ (Post): " << x++ << " (Uses x=5 first, then increments x to 6)" << std::endl;
    std::cout << "Current x : " << x << std::endl;
    std::cout << "++x (Pre) : " << ++x << " (Increments x to 7 first, then uses it)" << std::endl;

    return 0;
}
```

---

## 🔍 Code Breakdown

- `a % b`: Modulo operator calculates the remainder of integer division ($20 \div 6 = 3$ remainder $2$).
- `x++` (Post-increment): Uses the current value of `x` in the expression first, then increments `x` afterwards.
- `++x` (Pre-increment): Increments `x` immediately before evaluating the expression.

---

## 👀 Output

```text
--- ARITHMETIC OPERATORS ---
a + b = 26
a - b = 14
a * b = 120
a / b = 3 (Integer Division)
a % b = 2 (Remainder / Modulo)

--- RELATIONAL & LOGICAL OPERATORS ---
Can Enter (isAdult && hasID) : No
Can Enter (isAdult || hasID) : Yes

--- INCREMENT DIFFERENCE ---
Initial x : 5
x++ (Post): 5 (Uses x=5 first, then increments x to 6)
Current x : 6
++x (Pre) : 7 (Increments x to 7 first, then uses it)
```

---

## ⚠️ Common Mistakes

- **Confusing `=` and `==`**:
  - `=` is the **Assignment Operator** (`x = 10` assigns 10 to x).
  - `==` is the **Equality Operator** (`if (x == 10)` compares x with 10). Writing `if (x = 0)` assigns 0 to x and evaluates to `false`!
- **Modulo `%` on Floating Point Numbers**: `%` works strictly on integer types (`int`). Writing `5.5 % 2.0` causes a compilation error! Use `fmod()` from `<cmath>` for floating-point remainder.

---

## 🛡️ Best Practices

- Always use parentheses `()` in complex logical expressions to make operator precedence explicit: `if ((age >= 18 && score > 50) || isVIP)`.

---

## 🧪 Try It Yourself

1. Declare two numbers, calculate their sum, difference, product, quotient, and remainder.
2. Write a boolean check testing whether a given number is **both even AND greater than 10**.

---

## 🎯 Mini Challenge

Write a C++ script that inputs a student's exam score (0 to 100) and uses a ternary operator `? :` to print `"PASS"` if score $\ge 40$ and `"FAIL"` otherwise.

---

## 🔗 Related Topics

- [Variables & Data Types](03-variables-and-data-types.html)
- [Conditionals in C++](06-conditionals.html)

---

## 🧭 Navigation

[← C++ Home](./) | [← Previous: Input/Output](04-input-output.html) | [Next: Conditionals →](06-conditionals.html)

