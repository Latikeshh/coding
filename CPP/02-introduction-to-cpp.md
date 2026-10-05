---
layout: default
title: "02 introduction to cpp"
---

# Introduction to C++ Language & ISO Standards

> 🟢 Beginner

---

## 📖 Definition

**C++** is a general-purpose, statically typed, compiled, middle-level programming language created by **Bjarne Stroustrup** in 1979 at Bell Labs as an expansion of the C language ("C with Classes"). C++ combines low-level direct memory manipulation with high-level Object-Oriented, Generic, and Functional programming paradigms.

---

## 🇮🇳 Hindi Explanation

C++ ek bahut hi fast aur powerful programming language hai jo C language par berbasis hai. C++ mein aapko direct memory control (pointers) ke saath-saath Object-Oriented Programming (Classes & Objects) aur Standard Template Library (STL) milti hai. Issi wajah se games (Unreal Engine), Operating Systems, aur high-frequency trading platforms C++ mein likhe jaate hain.

---

## 🚩 Marathi Explanation

C++ hi C language madhye sudharana karun tayar keleli ek atyant वेगवान (fast) aani powerful programming language aahe. C++ madhye memory vr sarakshat control (Pointers) aani Object-Oriented Programming (OOP) che sarva features miltat. Games, Operating Systems, aani Complex Applications madhye C++ cha sarvadhik vapar kele jato.

---

## 🤔 Why Learn C++?

1. **Unmatched Performance & Speed**: Zero-cost abstractions mean you don't pay a performance penalty for using high-level features.
2. **Direct Hardware & Memory Control**: Fine-grained pointers and explicit stack/heap allocation.
3. **Rich Ecosystem**: Standard Template Library (STL) provides battle-tested data structures (`vector`, `unordered_map`, `set`, algorithms).
4. **ISO Standardization Evolution**: C++ is actively updated every 3 years (C++11, C++14, C++17, C++20, C++23).

---

## 🧠 Simple Analogy

Think of programming languages as vehicles:
- **Python**: A self-driving automatic Tesla (very comfortable, easy to drive, but the computer controls everything).
- **C++**: A Formula-1 racing car with a manual gearbox (you control every gear, engine valve, and steering millimeter. It requires skill, but achieves blistering speed!).

---

## 📝 Evolution of C++ Standards

| ISO Standard | Major Introduced Features |
|:---|:---|
| **C++98 / C++03** | Classes, Templates, Exceptions, Initial STL |
| **C++11** | Modern C++ Revolution! `auto`, Lambdas, Smart Pointers, Move Semantics |
| **C++14 / C++17** | Generic Lambdas, `std::optional`, `std::variant`, Structured Binding |
| **C++20** | Concepts, Ranges, Coroutines, Modules (`import`), `std::format` |
| **C++23** | `std::print`, Expected type, Multidimensional subscript operator `[]` |

---

## 💡 Practical Example

```cpp
#include <iostream>
#include <string>

int main() {
    std::string language = "C++20";
    int releaseYear = 2020;
    
    std::cout << "Language: " << language << std::endl;
    std::cout << "Standardized in: " << releaseYear << std::endl;
    std::cout << "C++ combines Low-Level Control + High-Level Speed!" << std::endl;
    
    return 0;
}
```

---

## 🔍 Code Breakdown

- `<iostream>`: Preprocessor header providing `std::cout` and `std::cin`.
- `std::string`: Modern dynamic string class provided by standard library.
- `std::endl`: Flushes buffer and outputs `\n`.

---

## 👀 Output

```text
Language: C++20
Standardized in: 2020
C++ combines Low-Level Control + High-Level Speed!
```

---

## ⚠️ Common Mistakes

- **Confusing C and C++**: C++ supports everything C does, but adds Classes, References, Templates, and Smart Pointers. Do not write raw `malloc/free` when `new/delete` or `std::vector` is available in C++.
- **Forgetting Namespace Prefix**: Writing `cout` instead of `std::cout` without `using namespace std;`.

---

## 🛡️ Best Practices

- Prefer modern C++ idioms (`std::vector`, `std::unique_ptr`) over raw C-style arrays and raw pointers.

---

## 🌍 Real-World Usage

- **Game Development**: Unreal Engine 5, Unity Engine Core, EA Frostbite.
- **Operating Systems**: Microsoft Windows Kernel, Apple macOS Core, Android Runtime (ART).
- **Web Browsers**: Google Chrome V8 JavaScript Engine, Mozilla Firefox.

---

## 🧪 Try It Yourself

1. Compile a C++ script using `g++ -std=c++20 main.cpp` and print the version of C++ you are practicing.

---

## 🎯 Mini Challenge

Write a program that prints 3 advantages of C++ formatted as bullet points on separate lines.

---

## 🔗 Related Topics

- [Setup C++ Development Environment](01-setup-cpp.md)
- [Variables & Data Types](03-variables-and-data-types.md)

---

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Setup](01-setup-cpp.md) | [Next: Variables & Data Types →](03-variables-and-data-types.md)
