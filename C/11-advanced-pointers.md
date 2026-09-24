# Advanced Pointers & Pointer Arithmetic

> 🔴 Advanced

## 📖 Definition

Pointer arithmetic operates on memory addresses according to byte sizes of the underlying data type (`sizeof(type)`). Advanced pointer concepts include double pointers (`**`), function pointers, and generic pointers (`void*`).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `ptr + 1` increments address by `sizeof(type)` bytes. Double pointers (`**`) store pointer addresses. `void*` is a generic raw memory pointer.
> - **Hindi:** `ptr + 1` करने पर एड्रेस `sizeof(type)` बाइट्स आगे बढ़ता है। डबल पॉइंटर (`**`) पॉइंटर का एड्रेस स्टोर करता है।
> - **Marathi:** पॉइंटरमध्ये `+1` केल्यास ॲड्रेस प्रकाराच्या साईझनुसार (`sizeof`) पुढे सरकतो.
> - **Hinglish:** Pointer arithmetic data type size ke mutabiq chalti hai (`ptr++` moves by `sizeof(T)` bytes). Double pointers (`**ptr`) pointers ke address hold karte hain.

---

## 🔢 Pointer Arithmetic

Adding `1` to a pointer increases its address offset by `sizeof(type)` bytes:

```c
#include <stdio.h>

int main(void) {
    int arr[3] = {10, 20, 30};
    int *ptr = arr; // Equivalent to &arr[0]

    printf("Address arr[0]: %p, Value: %d\n", (void*)ptr, *ptr);
    ptr++; // Moves address forward by sizeof(int) = 4 bytes to arr[1]
    printf("Address arr[1]: %p, Value: %d\n", (void*)ptr, *ptr);

    return 0;
}
```

---

## 🔄 Pointer to Pointer (`**ptr`)

A pointer holding the memory address of another pointer:

```c
int value = 42;
int *p1 = &value;   // Pointer to int
int **p2 = &p1;     // Pointer to pointer to int

printf("Value via double pointer: %d\n", **p2); // Dereferences twice
```

---

## ⚡ Function Pointers

Store executable code memory addresses to pass functions as arguments:

```c
#include <stdio.h>

int add(int a, int b) { return a + b; }
int multiply(int a, int b) { return a * b; }

void execute(int (*operation)(int, int), int x, int y) {
    printf("Result: %d\n", operation(x, y));
}

int main(void) {
    execute(add, 10, 20);      // Passes 'add' function pointer
    execute(multiply, 10, 20); // Passes 'multiply' function pointer
    return 0;
}
```

---

## 🌐 Generic Pointers (`void*`)

A `void*` pointer holds an untyped raw memory address. It must be explicitly cast before dereferencing:

```c
int num = 100;
void *gPtr = &num;

printf("Cast and dereference: %d\n", *(int*)gPtr);
```

---

## 🧪 Try It Yourself

Declare an array `float prices[] = {1.5f, 2.5f, 3.5f};` and access all elements using pointer incrementing (`*(ptr + i)`).

## 🎯 Mini Challenge

Write a generic swap function `void swapGeneric(void *a, void *b, size_t size)` using `void*` and byte-by-byte memory copying (`memcpy`).

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Pointers Basics](10-pointers-basics.md) | [Next: Strings →](12-strings.md)
