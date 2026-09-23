# Strings in C (`<string.h>`)

> 🟡 Intermediate

## 📖 Definition

In C, strings are null-terminated arrays of characters (`char[]`). The null terminator `'\0'` marks the end of the string in memory.

---

## 📝 Reading & Writing Strings Safely

Using `scanf("%s", str)` is dangerous because it stops at spaces and can cause buffer overflows. Use `fgets()` for safe string input:

```c
#include <stdio.h>

int main() {
    char name[50];

    printf("Enter your full name: ");
    // Safe input: reads up to sizeof(name) - 1 bytes including spaces
    fgets(name, sizeof(name), stdin);

    printf("Hello, %s", name);
    return 0;
}
```

---

## 🛠️ Essential String Functions (`<string.h>`)

```c
#include <stdio.h>
#include <string.h>

int main() {
    char s1[30] = "Programming";
    char s2[30] = " Language";

    // 1. String Length
    printf("Length: %zu\n", strlen(s1)); // 11

    // 2. String Concatenation
    strcat(s1, s2);
    printf("Cat: %s\n", s1); // "Programming Language"

    // 3. String Copy (Safe version: strncpy)
    char dest[20];
    strncpy(dest, "Hello", sizeof(dest) - 1);
    dest[sizeof(dest) - 1] = '\0'; // Ensure null termination

    // 4. String Comparison
    if (strcmp("apple", "apple") == 0) {
        printf("Strings are identical!\n");
    }

    return 0;
}
```

---

## ⚠️ Common Mistakes

- Forgetting to leave space for the null terminator `'\0'` when sizing arrays (`char str[5] = "Hello";` requires 6 bytes!).
- Using `==` to compare string contents instead of `strcmp()`.

## 🧪 Try It Yourself

Write a program that takes a string from the user using `fgets()` and reverses it in place.

## 🎯 Mini Challenge

Write a function `int countWords(const char *str)` that counts how many spaces/words exist in a given string.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Advanced Pointers](11-advanced-pointers.md) | [Next: Dynamic Memory Allocation →](13-dynamic-memory-allocation.md)
