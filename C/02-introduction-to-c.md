# Introduction to C

> 🟢 Beginner

## 📖 Definition

**C** is a general-purpose, procedural programming language created by Dennis Ritchie in 1972 at Bell Labs. It is standardized under ISO/IEC 9899 (C99, C11, C17).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** C is a compiled, procedural language that offers high execution speed and direct access to computer memory.
> - **Hindi:** सी (C) एक कंपाइल्ड प्रोग्रामिंग भाषा है जो डायरेक्ट मेमोरी एक्सेस और तेज़ स्पीड प्रदान करती है।
> - **Marathi:** C ही स्पीड आणि डायरेक्ट मेमरी ॲक्सेस देणारी सिस्टिम प्रोग्रामिंग भाषा आहे.
> - **Hinglish:** C language direct memory access aur high execution speed ke liye use hoti hai. Operating systems C mein likhe jaate hain.

## 🤔 Why Do We Use It?

C provides fast execution speed, low memory overhead, and direct pointer access to memory hardware. Operating systems (Linux, Windows, macOS kernel components), database engines (MySQL), compilers, and embedded firmware are written in C.

## 🧠 Simple Explanation

Learning C is like learning how a car engine operates under the hood. It teaches you how computer memory, variables, pointers, and CPU instructions work at a fundamental level.

## 📝 Basic Structure of an ISO C Program

```c
#include <stdio.h> // Standard Input Output library header

int main(void) {
    // Program entry point
    printf("Welcome to C Programming!\n");
    
    return 0; // Signals successful execution to operating system
}
```

## 🔍 Code Breakdown

1. `#include <stdio.h>`: Preprocessor directive including standard I/O functions like `printf`.
2. `int main(void)`: Standard entry point function returning an integer exit status.
3. `printf(...)`: Formatted print function outputting text to `stdout`.
4. `\n`: Escape character representing a newline.
5. `return 0;`: Returns exit code `0` (success) to the operating system shell.

## 👀 Output

```text
Welcome to C Programming!
```

## ⚠️ Common Mistakes

- Forgetting semicolons `;` at the end of statements.
- Spelling `main` incorrectly (e.g. `Main` or `man`).

## 🧪 Try It Yourself

Write a C program that prints `"C is fast and efficient!"`.

## 🎯 Mini Challenge

Write a program that displays a 3x3 square made of asterisk `*` characters using `printf`.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: C Setup](01-setup-c.md) | [Next: Variables & Data Types →](03-variables-and-data-types.md)
