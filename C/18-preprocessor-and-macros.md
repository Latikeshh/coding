# C Preprocessor & Macros

> 🟡 Intermediate

## 📖 Definition

The **C Preprocessor** is a text-substitution tool that runs on source code before the actual compilation phase begins. All preprocessor directives begin with `#`.

---

## 📝 Common Preprocessor Directives

### 1. Macro Definitions (`#define`)
```c
#include <stdio.h>

#define PI 3.14159
#define SQUARE(x) ((x) * (x)) // Macro function

int main() {
    printf("PI value: %f\n", PI);
    printf("Square of 5: %d\n", SQUARE(5)); // Replaced with ((5) * (5))
    return 0;
}
```

---

### 2. Conditional Compilation (`#ifdef`, `#ifndef`, `#endif`)
Allows selectively including code based on defined flags or operating system macros:

```c
#include <stdio.h>

#define DEBUG_MODE 1

int main() {
#if DEBUG_MODE
    printf("[DEBUG]: Debug logging enabled.\n");
#endif

    printf("Application running normally.\n");
    return 0;
}
```

---

### 3. Header Guards (Prevent Multiple Inclusions)
Inside custom `.h` files:
```c
#ifndef MY_HEADER_H
#define MY_HEADER_H

// Header content declarations

#endif // MY_HEADER_H
```

---

## 🧪 Try It Yourself

Define a macro `MAX(a, b) ((a) > (b) ? (a) : (b))` and test it with two numbers.

## 🎯 Mini Challenge

Write a preprocessor check `#ifdef _WIN32` to display `"Running on Windows"` vs `"Running on POSIX"`.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: File Handling](17-file-handling.md) | [Next: Storage Classes →](19-storage-classes.md)
