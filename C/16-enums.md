# Enumerations (`enum`)

> 🟡 Intermediate

## 📖 Definition

An **enumeration** (`enum`) is a user-defined data type consisting of named integer constants. Enums make code readable by replacing magic numbers with meaningful words.

---

## 📝 Syntax & Usage

```c
#include <stdio.h>

enum Day {
    SUNDAY = 0,
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6
};

// Typedef with enum
typedef enum {
    LOW,      // Defaults to 0
    MEDIUM,   // Defaults to 1
    HIGH      // Defaults to 2
} PriorityLevel;

int main() {
    enum Day today = WEDNESDAY;

    if (today == WEDNESDAY) {
        printf("Mid-week day! Day code: %d\n", today);
    }

    PriorityLevel alert = HIGH;
    printf("Alert level: %d\n", alert);

    return 0;
}
```

---

## 👀 Output

```text
Mid-week day! Day code: 3
Alert level: 2
```

---

## 🧪 Try It Yourself

Create an enum `HttpStatus` with constants `OK = 200`, `NOT_FOUND = 404`, and `SERVER_ERROR = 500`. Print their values.

## 🎯 Mini Challenge

Write a function `void handleState(enum State s)` that uses a `switch` statement to handle states `START`, `RUNNING`, and `STOPPED`.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Unions](15-unions-and-bit-fields.md) | [Next: File Handling →](17-file-handling.md)
