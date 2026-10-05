---
layout: default
title: "CPP Master Syllabus"
permalink: /CPP/
---

# 🚀 Learn C++

C++ is a high-performance, object-oriented, systems-level programming language used in game development (Unreal Engine), high-frequency trading, operating systems, compilers, database systems, embedded devices, and robotics.

> 🟢 **Beginner to Advanced:** start with streams and basic syntax, master object-oriented programming (OOP), constructors, smart pointers (`unique_ptr`/`shared_ptr`), STL containers, generic templates, lambdas, exception handling, move semantics, and modern C++11–C++20 standards.

## 📖 What You Will Learn

- Setting up `g++`/`clang++` compilers and compiling C++ codebases
- Stream I/O (`std::cout`, `std::cin`, `getline`) and string handling (`std::string`)
- Pass-by-value vs pass-by-reference (`&`), default arguments, and function overloading
- Dynamic array management using `std::vector`
- Object-Oriented Programming (OOP): classes, encapsulation, private/public access, constructors, destructors, Rule of 3/5/0, inheritance, and dynamic polymorphism (`virtual` / `override`)
- Custom operator overloading (`+`, `<<`, `==`, `[]`)
- Modern memory management with Smart Pointers (`std::unique_ptr`, `std::shared_ptr`, `std::weak_ptr`)
- Standard Template Library (STL): `std::vector`, `std::map`, `std::unordered_map`, `std::set`, `std::list`, `std::pair`, `std::tuple`
- STL Algorithms (`std::sort`, `std::find`, `std::binary_search`, `std::transform`)
- Generic programming using Function Templates and Class Templates
- C++ Lambda Expressions, closures, and `std::function`
- Exception handling (`try`, `catch`, `throw`, `std::exception`)
- Modern C++ Features: Rvalue references (`&&`), Move semantics (`std::move`), `constexpr`, `auto`, `enum class`, and Structured Binding

## 📚 Lessons

| # | Topic | Level | Link |
|---|---|---|---|
| 01 | Set Up C++ Environment | 🟢 Beginner | [Open lesson](01-setup-cpp.html) |
| 02 | Introduction to C++ | 🟢 Beginner | [Open lesson](02-introduction-to-cpp.html) |
| 03 | Variables & Primitive Data Types | 🟢 Beginner | [Open lesson](03-variables-and-data-types.html) |
| 04 | Input & Output (`std::cout`, `std::cin`, `getline`) | 🟢 Beginner | [Open lesson](04-input-output.html) |
| 05 | Operators | 🟢 Beginner | [Open lesson](05-operators.html) |
| 06 | Conditionals (`if`, `else`, `switch`) | 🟢 Beginner | [Open lesson](06-conditionals.html) |
| 07 | Loops & Range-Based For | 🟢 Beginner | [Open lesson](07-loops.html) |
| 08 | Functions, Default Arguments & References | 🟢 Beginner | [Open lesson](08-functions.html) |
| 09 | Arrays & Dynamic Vectors (`std::vector`) | 🟡 Intermediate | [Open lesson](09-arrays-and-vectors.html) |
| 10 | Classes & Objects (OOP Basics) | 🟡 Intermediate | [Open lesson](10-classes-and-oops.html) |
| 11 | Constructors, Destructors & RAII | 🟡 Intermediate | [Open lesson](11-constructors-and-destructors.html) |
| 12 | Inheritance & Polymorphism (`virtual`, `override`) | 🔴 Advanced | [Open lesson](12-inheritance-and-polymorphism.html) |
| 13 | Operator Overloading | 🔴 Advanced | [Open lesson](13-operator-overloading.html) |
| 14 | Smart Pointers (`unique_ptr`, `shared_ptr`) | 🔴 Advanced | [Open lesson](14-smart-pointers.html) |
| 15 | STL Containers (`map`, `set`, `unordered_map`) | 🟡 Intermediate | [Open lesson](15-stl-containers.html) |
| 16 | STL Algorithms & Iterators | 🟡 Intermediate | [Open lesson](16-stl-algorithms.html) |
| 17 | Generic Programming & Templates | 🔴 Advanced | [Open lesson](17-templates.html) |
| 18 | Lambdas & Function Objects | 🔴 Advanced | [Open lesson](18-lambdas.html) |
| 19 | Exception Handling (`try`, `catch`, `throw`) | 🟡 Intermediate | [Open lesson](19-exception-handling.html) |
| 20 | File Streams (`ifstream`, `ofstream`) | 🟡 Intermediate | [Open lesson](20-file-streams.html) |
| 21 | Namespaces & Modern C++ (C++11 to C++20) | 🔴 Advanced | [Open lesson](21-namespaces-and-modern-cpp.html) |
| 22 | Move Semantics & Rvalue References (`&&`) | 🔴 Advanced | [Open lesson](22-move-semantics.html) |
| 23 | Comprehensive C++ Mini Projects | 🔴 Advanced | [Open lesson](23-mini-projects.html) |

## 🎯 Suggested Learning Flow

`01–08 C++ Core Syntax` → `09–11 OOP & Constructors` → `12–14 Inheritance, Overloading & Smart Pointers` → `15–16 STL Containers & Algorithms` → `17–18 Templates & Lambdas` → `19–22 Modern C++ Features & Move Semantics` → `23 Projects`

## 🧪 Practice Routine

1. Read the explanation and code example.
2. Compile using `g++ -std=c++17 -Wall filename.cpp -o program`.
3. Test edge cases, memory lifecycle, and class behavior.
4. Solve practice exercises.

## ✅ Progress Checklist

- [ ] I can write and compile modern C++17/20 code using `g++`.
- [ ] I understand classes, encapsulation, inheritance, and dynamic polymorphism.
- [ ] I can manage object lifecycle safely using RAII and Smart Pointers (`unique_ptr`/`shared_ptr`).
- [ ] I can manipulate STL containers (`map`, `set`, `vector`) and algorithms (`std::sort`).
- [ ] I can write template classes and functions for generic programming.
- [ ] I understand move semantics, rvalue references (`&&`), and lambda expressions.

## 🧭 Navigation

[← Repository Home](../) | [Start with Lesson 01 →](01-setup-cpp.html)


