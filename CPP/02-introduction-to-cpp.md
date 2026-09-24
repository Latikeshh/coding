# Introduction to C++

> 🟢 Beginner

## 📖 Definition

**C++** was created by Bjarne Stroustrup in 1979 at Bell Labs as an extension of C. It combines low-level hardware performance with high-level **Object-Oriented Programming (OOP)**, generic templates, and RAII memory safety under ISO C++ standards (C++11, C++17, C++20).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** C++ is a compiled OOP language built on top of C, offering high speed, classes, STL containers, and systems-level control.
> - **Hindi:** C++ एक ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग (OOP) भाषा है जो सी (C) की स्पीड के साथ क्लासेस और मॉडर्न फीचर्स प्रदान करती है।
> - **Marathi:** C++ ही C मधील स्पीड आणि OOP चे गुणधर्म असलेली उच्च-कार्यक्षम भाषा आहे.
> - **Hinglish:** C++ language C ki execution speed aur modern Object-Oriented Programming (OOP) features combine karti hai.

## 🤔 Why Do We Use It?

C++ is the industry standard for performance-critical systems including game engines (Unreal Engine), operating system kernels, web browser engines (Chrome V8/Blink), high-frequency trading platforms, and robotics.

## 🧠 Simple Explanation

If C is like a manual gearbox sports car, C++ is that same car equipped with modern power steering, custom accessories, and object-oriented modular design.

## 📝 Basic Syntax

```cpp
#include <iostream>

int main() {
    // std::cout refers to standard character output stream
    std::cout << "Welcome to ISO C++!" << std::endl;
    return 0;
}
```

## 🔍 Code Breakdown

1. `#include <iostream>`: Includes standard Input/Output stream library.
2. `std::cout <<`: "Character Output" stream insertion operator.
3. `std::endl`: Inserts a newline character and flushes the output buffer stream.
4. `return 0;`: Returns exit code `0` to operating system.

## 👀 Output

```text
Welcome to ISO C++!
```

## ⚠️ Common Mistakes

- Forgetting semicolons `;` at statement ends.
- Using extraction operator `>>` instead of insertion operator `<<` with `cout`.

## 🧪 Try It Yourself

Write a C++ program that prints `"C++ combines speed with power!"`.

## 🎯 Mini Challenge

Display a simple welcome card made of lines and stars using `std::cout`.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Setup](01-setup-cpp.md) | [Next: Variables & Data Types →](03-variables-and-data-types.md)
