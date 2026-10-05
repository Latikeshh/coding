---
layout: default
title: "08 functions"
---

# Functions in C++ (Pass-by-Value, Pass-by-Reference & Overloading)

> 🟢 Beginner

---

## 📖 Definition

A **Function** is a self-contained block of organized, reusable C++ statements that performs a specific task. Functions take input arguments, process data, and optionally return a result value. C++ supports **Pass-by-Value** (copying arguments), **Pass-by-Reference** (referencing original variables directly), **Default Parameters**, and **Function Overloading**.

---

## 🇮🇳 Hindi Explanation

Function ek reusable code block hota hai jo ek specific kaam karta hai.
- **Pass-by-Value**: Function ko variable ki ek nakal (copy) milti hai. Original variable change nahi hota.
- **Pass-by-Reference (`&`)**: Function ko original variable ka memory address/reference milta hai. Inside function jo bhi change hoga, wo main variable mein reflect hoga.
- **Function Overloading**: Ek hi naam ke multiple functions banana jin ke parameters alag hote hain (jaise `add(int, int)` aur `add(double, double)`).

---

## 🚩 Marathi Explanation

Function mhanje punha punha vaparta yenara code cha ek bhaag.
- **Pass-by-Value**: Function la variable chi copy milte; मूळ (original) variable badalat nahi.
- **Pass-by-Reference (`&`)**: Function la sarakshat original variable cha address milto; tyat kelela badal original variable vr disto.
- **Function Overloading**: Ekach navache anek functions lihine,yaat parameters vegle astat.

---

## 📊 Pass-by-Value vs Pass-by-Reference Comparison

| Parameter Mode | Syntax | Memory Behavior | Modifies Original? | Performance Impact |
|:---|:---|:---|:---:|:---|
| **Pass-by-Value** | `void fn(int x)` | Creates a duplicate copy in stack memory | ❌ No | Memory copy overhead for large objects |
| **Pass-by-Reference** | `void fn(int& x)` | Operates directly on original memory location | ✅ Yes | Zero-copy fast performance |
| **Const Reference** | `void fn(const std::string& s)` | Read-only reference | ❌ No | Zero-copy fast & safe |

---

## 🧠 Simple Analogy

- **Pass-by-Value**: Photocopying a document and handing it to a friend. If your friend writes notes on their photocopy, your original document remains completely clean!
- **Pass-by-Reference**: Sharing a Google Doc link. If your friend edits text in the document, you see the edits instantly on the original document!

---

## 💡 Practical Example

```cpp
#include <iostream>
#include <string>

// 1. Pass-by-Value Function
void incrementValue(int val) {
    val += 10; // Modifies local copy only!
}

// 2. Pass-by-Reference Function (using '&')
void incrementReference(int& ref) {
    ref += 10; // Modifies original variable!
}

// 3. Function Overloading (Same name 'add', different parameter types)
int add(int a, int b) {
    return a + b;
}

double add(double a, double b) {
    return a + b;
}

// 4. Function with Default Parameter
void greetUser(std::string name, std::string title = "Member") {
    std::cout << "Hello " << title << " " << name << "!" << std::endl;
}

int main() {
    std::cout << "--- 1. PASS-BY-VALUE vs PASS-BY-REFERENCE ---" << std::endl;
    int num1 = 50;
    incrementValue(num1);
    std::cout << "After Pass-by-Value    : " << num1 << " (Unchanged)" << std::endl;

    incrementReference(num1);
    std::cout << "After Pass-by-Reference: " << num1 << " (Updated directly)" << std::endl;

    std::cout << "\n--- 2. FUNCTION OVERLOADING ---" << std::endl;
    std::cout << "add(10, 20)       [int]   : " << add(10, 20) << std::endl;
    std::cout << "add(5.5, 4.2)     [double]: " << add(5.5, 4.2) << std::endl;

    std::cout << "\n--- 3. DEFAULT PARAMETERS ---" << std::endl;
    greetUser("Aria");                // Uses default title = "Member"
    greetUser("Vikram", "Dr.");       // Overrides default title

    return 0;
}
```

---

## 🔍 Code Breakdown

- `void incrementReference(int& ref)`: The `&` symbol marks `ref` as a reference alias to `num1`. Changes to `ref` alter `num1` directly.
- `int add(int, int)` vs `double add(double, double)`: Compiler automatically resolves which overloaded function to call based on passed argument types.
- `std::string title = "Member"`: Default parameter assigned when argument is omitted at call site.

---

## 👀 Output

```text
--- 1. PASS-BY-VALUE vs PASS-BY-REFERENCE ---
After Pass-by-Value    : 50 (Unchanged)
After Pass-by-Reference: 60 (Updated directly)

--- 2. FUNCTION OVERLOADING ---
add(10, 20)       [int]   : 30
add(5.5, 4.2)     [double]: 9.7

--- 3. DEFAULT PARAMETERS ---
Hello Member Aria!
Hello Dr. Vikram!
```

---

## ⚠️ Common Mistakes

- **Forgetting Function Prototypes**: Calling a function above its definition without a forward declaration (`int add(int, int);`) causes `'add' was not declared in this scope` error.
- **Accidental Pass-by-Value for Heavy Containers**: Passing a huge `std::vector<int>` by value copies millions of elements in memory! Always pass large containers by const reference: `void process(const std::vector<int>& data)`.

---

## 🛡️ Best Practices

- Mark reference parameters `const` when the function only needs read access: `void print(const std::string& text)`.

---

## 🧪 Try It Yourself

1. Write a `swapNumbers(int& a, int& b)` function that swaps the values of two integers using pass-by-reference.
2. Create an overloaded function `calculateArea` for calculating the area of a square (`side`) and a rectangle (`length, width`).

---

## 🎯 Mini Challenge

Write a function `isPrime(int n)` that returns `true` if $n$ is a prime number and `false` otherwise. Test it in `main()` with numbers from 1 to 20.

---

## 🔗 Related Topics

- [Variables & Data Types](03-variables-and-data-types.html)
- [Arrays & Vectors](09-arrays-and-vectors.html)

---

## 🧭 Navigation

[← C++ Home](./) | [← Previous: Loops](07-loops.html) | [Next: Arrays & Vectors →](09-arrays-and-vectors.html)

