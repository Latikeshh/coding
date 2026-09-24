# Pointers Basics in C

> 🟡 Intermediate

## 📖 Definition

A **pointer** is a variable that stores the **memory address** of another variable in computer memory.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Pointers store memory addresses. Use `&` to get a variable's address and `*` (dereference) to access or modify the value at that address.
> - **Hindi:** पॉइंटर मेमोरी एड्रेस स्टोर करता है। `&` एड्रेस निकालने के लिए और `*` उस एड्रेस की वैल्यू एक्सेस करने के लिए यूज़ होता है।
> - **Marathi:** पॉइंटर मेमरी ॲड्रेस साठवतो. `&` मुळे ॲड्रेस मिळतो आणि `*` मुळे त्या ॲड्रेसवरील व्हॅल्यू मिळते.
> - **Hinglish:** Pointer memory address store karta hai. `&` operator address nikalta hai aur `*` operator value dereference karta hai.

## 📝 Key Pointer Operators

1. `&` (Address-of operator): Returns the memory address of a variable.
2. `*` (Dereference / Indirection operator): Accesses or modifies the value stored at the memory address pointed to.

```c
int age = 25;
int *ptr = &age; // 'ptr' stores the memory address of 'age'
```

## 💡 Practical Example

```c
#include <stdio.h>

int main(void) {
    int number = 100;
    int *pNumber = &number;

    printf("Value of number: %d\n", number);
    printf("Memory address of number (&number): %p\n", (void*)&number);
    printf("Value stored inside pNumber: %p\n", (void*)pNumber);
    printf("Value dereferenced (*pNumber): %d\n", *pNumber);

    // Modify value directly through pointer dereferencing
    *pNumber = 200;
    printf("Updated value of number: %d\n", number);

    return 0;
}
```

## 👀 Output

```text
Value of number: 100
Memory address of number (&number): 0x7ffd5f... (varies by system)
Value stored inside pNumber: 0x7ffd5f...
Value dereferenced (*pNumber): 100
Updated value of number: 200
```

## ⚠️ Common Mistakes & Memory Safety

- **Uninitialized Pointers (Wild Pointers):** Dereferencing an uninitialized pointer (`int *p; *p = 10;`) writes to random memory addresses and causes segmentation fault crashes!
- Always initialize pointers or explicitly assign them to `NULL`: `int *ptr = NULL;`.

## 🧪 Try It Yourself

Create a variable `x = 50`, create a pointer `p` pointing to `x`, and multiply `x` by `2` using `*p`.

## 🎯 Mini Challenge

Write a function `void swap(int *a, int *b)` that swaps two integer values in place using pointers.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Arrays](09-arrays.md) | [Next: Advanced Pointers →](11-advanced-pointers.md)
