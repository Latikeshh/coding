# Storage Classes in C

> 🔴 Advanced

## 📖 Definition

A **Storage Class** defines the scope (visibility), lifetime, and memory location (Stack, Register, or Data segment) of variables and functions in C.

---

## 📝 Storage Classes Summary

| Keyword | Storage Location | Default Value | Scope | Lifetime |
|---|---|---|---|---|
| `auto` | Stack | Garbage | Local block | Block execution |
| `register` | CPU Register | Garbage | Local block | Block execution |
| `static` | Data segment | Zero (`0`) | Local to block or file | Entire program run |
| `extern` | Data segment | Zero (`0`) | Global (all files) | Entire program run |

---

## 💡 Practical Examples

### 1. `static` Local Variables (Preserves value between function calls)
```c
#include <stdio.h>

void countCalls() {
    static int counter = 0; // Initialized ONLY ONCE
    counter++;
    printf("Function called %d times\n", counter);
}

int main() {
    countCalls(); // 1
    countCalls(); // 2
    countCalls(); // 3
    return 0;
}
```

---

### 2. `extern` Keyword (Sharing global variables across files)
```c
// file1.c
int globalScore = 100; // Global declaration

// file2.c
#include <stdio.h>

extern int globalScore; // References globalScore from file1.c

void printScore() {
    printf("Score: %d\n", globalScore);
}
```

---

## 🧪 Try It Yourself

Write a function `int getNextId()` that uses a `static` variable to generate sequential unique IDs every time it is called.

## 🎯 Mini Challenge

Demonstrate the difference in behavior between a regular `int` counter and a `static int` counter inside a loop.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Preprocessor](18-preprocessor-and-macros.md) | [Next: CLI Arguments →](20-command-line-arguments.md)
