# Dynamic Memory Allocation (`malloc`, `calloc`, `realloc`, `free`)

> 🔴 Advanced

## 📖 Definition

While local variables are allocated on the **Stack** at compile time with fixed sizes, **Dynamic Memory Allocation** allows programs to request memory on the **Heap** at runtime using `<stdlib.h>`.

---

## 📝 Key Memory Allocation Functions

| Function | Purpose | Initial Value |
|---|---|---|
| `malloc(size)` | Allocates `size` bytes on heap | Garbage data |
| `calloc(n, size)` | Allocates `n * size` bytes | Cleared to Zero |
| `realloc(ptr, new_size)` | Resizes previously allocated block | Preserves old data |
| `free(ptr)` | Releases memory back to system | N/A |

---

## 💡 Practical Example

```c
#include <stdio.h>
#include <stdlib.h>

int main() {
    int n = 5;

    // 1. Allocate array of 5 integers on Heap
    int *arr = (int*) malloc(n * sizeof(int));

    // ALWAYS check if allocation succeeded (returns NULL on failure)
    if (arr == NULL) {
        printf("Memory allocation failed!\n");
        return 1;
    }

    // Populate array
    for (int i = 0; i < n; i++) {
        arr[i] = (i + 1) * 10;
    }

    // 2. Resize array to hold 8 integers using realloc
    n = 8;
    int *temp = (int*) realloc(arr, n * sizeof(int));
    if (temp != NULL) {
        arr = temp;
        arr[5] = 60;
        arr[6] = 70;
        arr[7] = 80;
    }

    // Print array
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    // 3. ALWAYS free memory when done to prevent Memory Leaks!
    free(arr);
    arr = NULL; // Prevent dangling pointer

    return 0;
}
```

---

## 👀 Output

```text
10 20 30 40 50 60 70 80
```

---

## ⚠️ Common Mistakes

- **Memory Leak:** Failing to call `free()` on dynamically allocated memory.
- **Dangling Pointer:** Accessing memory after calling `free(ptr)`.
- **Double Free:** Calling `free()` twice on the same pointer.

## 🧪 Try It Yourself

Use `calloc` to allocate an array of 4 floats, initialize them, print them, and free the memory.

## 🎯 Mini Challenge

Write a program that asks the user how many numbers they want to enter `N`, dynamically allocates an integer array of size `N`, calculates the sum, and frees the memory.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Strings](12-strings.md) | [Next: Structures →](14-structures.md)
