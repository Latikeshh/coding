# Introduction to C++

> 🟢 Beginner

## 📖 Definition

**C++** was created by Bjarne Stroustrup in 1979 as an extension of the C programming language. It adds **Object-Oriented Programming (OOP)** features while maintaining C's speed and hardware performance.

## 🤔 Why Do We Use It?

C++ is the industry standard for performance-critical applications including game engines (Unreal Engine), operating systems, web browsers (Chrome V8 engine), graphics software, and robotics.

## 🧠 Simple Explanation

If C is like a manual gearbox sports car, C++ is that same car equipped with modern power steering, custom accessories, and object-oriented modular design.

## 📝 Basic Syntax

```cpp
#include <iostream>
using namespace std; // Allows using cout instead of std::cout

int main() {
    cout << "Welcome to C++!" << endl;
    return 0;
}
```

## 🔍 Code Breakdown

1. `#include <iostream>`: Includes the Input/Output Stream library.
2. `using namespace std;`: Imports symbols from the standard namespace so you don't have to write `std::` repeatedly.
3. `cout <<`: "Character Output" stream operator.
4. `endl`: Inserts a new line character and flushes the output buffer.

## 👀 Output

```text
Welcome to C++!
```

## ⚠️ Common Mistakes

- Forgetting semicolons `;` at the end of statements.
- Misusing stream insertion operator `<<` as extraction operator `>>`.

## 🧪 Try It Yourself

Write a C++ program that prints `"C++ combines speed with power!"`.

## 🎯 Mini Challenge

Display a simple welcome card made of lines and stars using `cout`.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Setup](01-setup-cpp.md) | [Next: Variables & Data Types →](03-variables-and-data-types.md)
