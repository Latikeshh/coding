# Pointers Basics in C

> 🟡 Intermediate

## 📖 Definition

A **pointer** is a variable that stores the **memory address** of another variable.

## 📝 Key Pointer Operators

1. `&` (Address-of operator): Returns the memory address of a variable.
2. `*` (Dereference / Indirection operator): Accesses the value stored at a memory address.

```c
int age = 25;
int *ptr = &age; // ptr stores address of age
```

## 💡 Practical Example

```c
#include <stdio.h>

int main() {
    int number = 100;
    int *pNumber = &number;

    printf("Value of number: %d\n", number);
    printf("Memory address of number: %p\n", (void*)&number);
    printf("Pointer pNumber stores: %p\n", (void*)pNumber);
    printf("Value dereferenced by pNumber (*pNumber): %d\n", *pNumber);

    // Changing value via pointer
    *pNumber = 200;
    printf("Updated value of number: %d\n", number);

    return 0;
}
```

## 👀 Output

```text
Value of number: 100
Memory address of number: 0x7ffd5f... (varies by system)
Pointer pNumber stores: 0x7ffd5f...
Value dereferenced by pNumber (*pNumber): 100
Updated value of number: 200
```

## ⚠️ Common Mistakes

- Uninitialized pointers (wild pointers): Using `*ptr` before assigning an address to `ptr` causes crashes! Always initialize pointers or set them to `NULL`.

## 🧪 Try It Yourself

Create a variable `x = 50`, create a pointer `p` pointing to `x`, and multiply `x` by `2` using `*p`.

## 🎯 Mini Challenge

Write a function `void swap(int *a, int *b)` that swaps two integer values using pointers.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Arrays](09-arrays.md) | [Next: Strings →](11-strings.md)
