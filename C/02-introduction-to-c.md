# Introduction to C

> 🟢 Beginner

## 📖 Definition

**C** is a general-purpose, procedural programming language created by Dennis Ritchie in 1972 at Bell Labs.

## 🤔 Why Do We Use It?

C is fast, lightweight, and gives direct access to memory. Major operating systems like Linux, Windows, and macOS, as well as database engines (MySQL) and python runtimes, are written in C.

## 🧠 Simple Explanation

Learning C is like learning how an engine works from inside the car. It teaches you how computer memory, variables, and instructions operate at a fundamental level.

## 📝 Basic Structure of a C Program

```c
#include <stdio.h> // Standard Input Output library

int main() {
    // This is the entry point of every C program
    printf("Welcome to C Programming!\n");
    
    return 0; // Indicates successful program execution
}
```

## 🔍 Code Breakdown

1. `#include <stdio.h>`: Includes standard functions like `printf`.
2. `int main()`: Main function where program execution starts.
3. `printf(...)`: Prints text to the terminal.
4. `\n`: Escape character for new line.
5. `return 0;`: Signals that the program executed without errors.

## 👀 Output

```text
Welcome to C Programming!
```

## ⚠️ Common Mistakes

- Forgetting semicolons `;` at the end of statements.
- Spelled `main` incorrectly (e.g. `Main` or `man`).

## 🧪 Try It Yourself

Write a C program that prints `"C is fast and efficient!"`.

## 🎯 Mini Challenge

Write a program that displays a 3x3 square made of asterisk `*` characters using `printf`.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: C Setup](01-setup-c.md) | [Next: Variables & Data Types →](03-variables-and-data-types.md)
