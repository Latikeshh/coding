---
layout: default
title: "17 templates"
---

# Templates & Generic Programming in C++ (`template<typename T>`)

> 🔴 Advanced

---

## 📖 Definition

**Templates** are the foundation of **Generic Programming** in C++. A Template allows you to write a single blueprint function or class that operates on any data type (`int`, `double`, `std::string`, or custom classes) without duplicating code. The compiler generates specialized, type-safe binary code for each used type at compile time (a process called **Template Instantiation**).

---

## 🇮🇳 Hindi Explanation

Templates C++ ka ek powerful feature hai jo aapko generic code likhne ki suvidha deta hai. Agar aapko ek `max()` function banana hai jo `int`, `double`, aur `string` sab ke liye kaam kare, toh aapko alag-alag 3 functions nahi likhne padenge. Aap `template <typename T>` ka use karke ek hi generic function likh sakte ho. Compiler automatic type deduce karke executable code bana deta hai.

---

## 🚩 Marathi Explanation

Template cha vapar karun aapan C++ madhye type-independent (generic) code lihuu shakto. `int`, `double` kiwa `string` sathi ekach prache function lihinyasathi `template <typename T>` cha vapar kela jato. Compiler compile-time la lagnaara data type tayar karto.

---

## 📝 Function Template & Class Template Syntax

```cpp
// 1. Function Template Syntax
template <typename T>
T add(T a, T b) {
    return a + b;
}

// 2. Class Template Syntax
template <typename T>
class Box {
private:
    T content;
public:
    Box(T val) : content(val) {}
    T getContent() const { return content; }
};
```

---

## 💡 Practical Example

```cpp
#include <iostream>
#include <string>

// 1. Generic Function Template
template <typename T>
T findMax(T a, T b) {
    return (a > b) ? a : b;
}

// 2. Generic Class Template (A simple Container Box)
template <typename T>
class StorageBox {
private:
    T item;
public:
    StorageBox(T val) : item(val) {}

    void display() const {
        std::cout << "[StorageBox] Stored Item: " << item << std::endl;
    }
};

int main() {
    std::cout << "--- 1. FUNCTION TEMPLATE DEMO ---" << std::endl;
    std::cout << "Max Int    : " << findMax(10, 25) << std::endl;
    std::cout << "Max Double : " << findMax(88.5, 42.1) << std::endl;
    std::cout << "Max String : " << findMax(std::string("Banana"), std::string("Apple")) << std::endl;

    std::cout << "\n--- 2. CLASS TEMPLATE DEMO ---" << std::endl;
    StorageBox<int> intBox(500);
    StorageBox<double> doubleBox(99.99);
    StorageBox<std::string> stringBox("C++20 Modules");

    intBox.display();
    doubleBox.display();
    stringBox.display();

    return 0;
}
```

---

## 🔍 Code Breakdown

- `template <typename T>`: Tells the compiler that `T` is a placeholder generic data type.
- `findMax(10, 25)`: Compiler automatically deduces `T = int` and generates an integer version of `findMax()`.
- `StorageBox<int>`: Explicitly instantiates the `StorageBox` class template with `T = int`.

---

## 👀 Output

```text
--- 1. FUNCTION TEMPLATE DEMO ---
Max Int    : 25
Max Double : 88.5
Max String : Banana

--- 2. CLASS TEMPLATE DEMO ---
[StorageBox] Stored Item: 500
[StorageBox] Stored Item: 99.99
[StorageBox] Stored Item: C++20 Modules
```

---

## ⚠️ Common Mistakes

- **Separating Template Definitions into `.cpp` Files**:
  Templates must be fully defined in **Header Files (`.h` / `.hpp`)**! Separating template declarations in header files and implementations in `.cpp` files leads to `undefined reference` linker errors.
- **Incompatible Template Operator Operations**:
  If a template uses `a + b`, attempting to instantiate the template with a custom class that lacks an overloaded `+` operator results in a compilation error.

---

## 🛡️ Best Practices

- Use C++20 **Concepts** (`template <std::integral T>`) to constrain template parameters and produce clean, clear compiler error messages when type requirements are violated.

---

## 🧪 Try It Yourself

1. Write a function template `swapValues(T& a, T& b)` that swaps two variables of any data type.
2. Create a generic `Pair<T1, T2>` class template that holds two values of potentially different data types.

---

## 🎯 Mini Challenge

Implement a custom generic `Stack<T>` class template backed by `std::vector<T>` with `push()`, `pop()`, `top()`, and `isEmpty()` methods.

---

## 🔗 Related Topics

- [Functions in C++](08-functions.html)
- [Classes & OOP](10-classes-and-oops.html)

---

## 🧭 Navigation

[← C++ Home](./) | [← Previous: STL Algorithms](16-stl-algorithms.html) | [Next: Lambdas →](18-lambdas.html)

