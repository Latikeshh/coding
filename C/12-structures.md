# Structures (`struct`) in C

> 🟡 Intermediate

## 📖 Definition

A **structure** (`struct`) is a user-defined data type that allows you to group related variables of different data types together.

## 📝 Syntax

```c
struct Student {
    char name[50];
    int rollNumber;
    float gpa;
};
```

## 💡 Practical Example

```c
#include <stdio.h>
#include <string.h>

struct Book {
    char title[50];
    char author[50];
    float price;
};

int main() {
    struct Book b1;

    strcpy(b1.title, "The C Programming Language");
    strcpy(b1.author, "Kernighan & Ritchie");
    b1.price = 45.50;

    printf("Title: %s\n", b1.title);
    printf("Author: %s\n", b1.author);
    printf("Price: $%.2f\n", b1.price);

    return 0;
}
```

## 👀 Output

```text
Title: The C Programming Language
Author: Kernighan & Ritchie
Price: $45.50
```

## ⚠️ Common Mistakes

- Forgetting the trailing semicolon `;` after the `struct` definition closing brace `};`.

## 🧪 Try It Yourself

Create a `struct Point` with `int x` and `int y` members. Create an instance `p1`, assign values, and print `(x, y)`.

## 🎯 Mini Challenge

Create an array of 3 `struct Student` records, populate them with user input, and print the student with the highest GPA.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Strings](11-strings.md) | [Next: Mini Projects →](13-mini-projects.md)
