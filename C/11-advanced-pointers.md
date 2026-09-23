# Advanced Pointers & Pointer Arithmetic

> 🔴 Advanced

## 📖 Definition

Pointer arithmetic operates on memory addresses based on the size of the underlying data type. Advanced pointer concepts include pointers to pointers, function pointers, and generic `void*` pointers.

---

## 🔢 Pointer Arithmetic

Adding `1` to a pointer increases its memory address by `sizeof(type)` bytes:

```c
#include <stdio.h>

int main() {
    int arr[3] = {10, 20, 30};
    int *ptr = arr; // Points to arr[0]

    printf("Address ptr: %p, Value: %d\n", (void*)ptr, *ptr);
    ptr++; // Moves by sizeof(int) = 4 bytes to arr[1]
    printf("Address ptr+1: %p, Value: %d\n", (void*)ptr, *ptr);

    return 0;
}
```

---

## 🔄 Pointer to Pointer (`**ptr`)

A pointer that stores the address of another pointer:

```c
int value = 42;
int *p1 = &value;   // Pointer to int
int **p2 = &p1;     // Pointer to pointer to int

printf("Value: %d\n", **p2); // Dereferences twice to get 42
```

---

## ⚡ Function Pointers

Store references to executable function memory addresses:

```c
#include <stdio.h>

void greet() {
    printf("Hello from Function Pointer!\n");
}

int add(int a, int b) {
    return a + b;
}

int main() {
    // Declaring function pointer: return_type (*ptr_name)(param_types)
    void (*funcPtr)() = greet;
    funcPtr(); // Calls greet()

    int (*mathPtr)(int, int) = add;
    printf("Sum: %d\n", mathPtr(10, 20));

    return 0;
}
```

---

## 🌐 Generic Pointers (`void*`)

A `void*` pointer can hold the address of any data type, but must be explicitly cast before dereferencing:

```c
int num = 100;
void *gPtr = &num;

// Cast to int* before dereferencing:
printf("Value: %d\n", *(int*)gPtr);
```

---

## 🧪 Try It Yourself

Declare an array `float prices[] = {1.5f, 2.5f, 3.5f};` and access all elements using pointer incrementing (`*(ptr + i)`).

## 🎯 Mini Challenge

Write a function `void execute(int (*op)(int, int), int x, int y)` that accepts a function pointer and prints the result of calling `op(x, y)`.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Pointers Basics](10-pointers-basics.md) | [Next: Strings →](12-strings.md)
