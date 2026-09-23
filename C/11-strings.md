# Strings in C

> 🟡 Intermediate

## 📖 Definition

In C, a **string** is simply a 1D array of characters terminated by a special null character `'\0'`.

## 📝 Declaration & Syntax

```c
char name[] = "Alice"; // Automatically includes '\0' at the end (size is 6 bytes)
```

## 💡 Useful String Functions (`<string.h>`)

- `strlen(s)`: Returns length of string (excluding `\0`)
- `strcpy(dest, src)`: Copies `src` to `dest`
- `strcat(dest, src)`: Concatenates `src` to `dest`
- `strcmp(s1, s2)`: Compares two strings (returns `0` if equal)

## 💡 Practical Example

```c
#include <stdio.h>
#include <string.h>

int main() {
    char greeting[20] = "Hello";
    char name[] = " World";

    strcat(greeting, name);
    printf("Combined String: %s\n", greeting);
    printf("Length: %lu\n", strlen(greeting));

    return 0;
}
```

## 👀 Output

```text
Combined String: Hello World
Length: 11
```

## ⚠️ Common Mistakes

- Comparing strings using `==` (e.g. `if (str1 == str2)` compares memory addresses, not text contents! Use `strcmp(str1, str2) == 0`).

## 🧪 Try It Yourself

Declare a string variable with your first name, print its length using `strlen()`.

## 🎯 Mini Challenge

Ask the user to enter a word and write a loop to count how many vowels (`a, e, i, o, u`) it contains.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Pointers](10-pointers-basics.md) | [Next: Structures →](12-structures.md)
