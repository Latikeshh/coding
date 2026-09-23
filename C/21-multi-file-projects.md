# Multi-file Projects & Header Files

> 🔴 Advanced

## 📖 Definition

Real-world C applications split source code into multiple `.c` implementation files and `.h` header files to improve compilation speed, maintainability, and code organization.

---

## 📁 File Structure Example

```text
my_project/
├── math_utils.h   # Declarations & prototypes
├── math_utils.c   # Implementations
└── main.c         # Entry point
```

---

### 1. `math_utils.h`
```c
#ifndef MATH_UTILS_H
#define MATH_UTILS_H

// Function prototypes
int add(int a, int b);
int multiply(int a, int b);

#endif // MATH_UTILS_H
```

### 2. `math_utils.c`
```c
#include "math_utils.h"

int add(int a, int b) {
    return a + b;
}

int multiply(int a, int b) {
    return a * b;
}
```

### 3. `main.c`
```c
#include <stdio.h>
#include "math_utils.h" // User header enclosed in quotes ""

int main() {
    printf("Add: %d\n", add(10, 5));
    printf("Multiply: %d\n", multiply(10, 5));
    return 0;
}
```

---

## 🛠️ Compiling Multi-file Projects

Compile all `.c` files together into a single executable binary:

```bash
gcc main.c math_utils.c -o app
./app
```

---

## 🧪 Try It Yourself

Create a header `string_utils.h` with a prototype `void toUpper(char *str)` and implement it in `string_utils.c`.

## 🎯 Mini Challenge

Write a basic Makefile that automates compiling `main.c` and `math_utils.c` into `app.exe`.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: CLI Arguments](20-command-line-arguments.md) | [Next: Error Handling →](22-error-handling.md)
