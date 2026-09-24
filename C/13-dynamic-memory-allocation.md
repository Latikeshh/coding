# Dynamic Memory Allocation (`malloc`, `calloc`, `realloc`, `free`)

> 🔴 Advanced

## 📖 Definition

While local variables sit on the **Stack** with fixed compile-time sizes, **Dynamic Memory Allocation** allows programs to request variable-sized memory blocks on the **Heap** at runtime via `<stdlib.h>`.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `malloc` allocates raw heap memory. Always check for `NULL` returns and call `free(ptr)` to prevent memory leaks.
> - **Hindi:** `malloc`/`calloc` से हीप (Heap) पर डायनामिक मेमोरी मिलती है। मेमोरी लीक रोकने के लिए `free()` करना अनिवार्य है।
> - **Marathi:** हीपवरील मेमरीसाठी `malloc` वापरतात. मेमरी लीक टाळण्यासाठी काम झाल्यावर `free()` करणे आवश्यक आहे.
> - **Hinglish:** Heap memory allocation ke liye `malloc`/`calloc` use karo. Null check hamesha karo aur application crash/leaks se bachne ke liye `free(ptr)` zaroori hai.

---

## 📝 Key Allocation Functions

| Function | Purpose | Initialized State |
|---|---|---|
| `malloc(size)` | Allocates `size` bytes on Heap | Uninitialized (garbage data) |
| `calloc(n, size)` | Allocates `n * size` bytes on Heap | Zero-initialized (`0`) |
| `realloc(ptr, new_size)` | Resizes previously allocated block | Preserves existing data |
| `free(ptr)` | Releases heap memory back to OS | N/A |

---

## 💡 Practical Example & Safe Usage

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int n = 5;

    // 1. Allocate heap memory for 5 integers
    int *arr = (int*) malloc(n * sizeof(int));

    // ALWAYS check for allocation failure (returns NULL)
    if (arr == NULL) {
        fprintf(stderr, "Heap memory allocation failed!\n");
        return 1;
    }

    // Populate array
    for (int i = 0; i < n; i++) {
        arr[i] = (i + 1) * 10;
    }

    // 2. Safely resize array using realloc
    n = 8;
    int *temp = (int*) realloc(arr, n * sizeof(int));
    if (temp == NULL) {
        fprintf(stderr, "Reallocation failed!\n");
        free(arr); // Clean up original buffer before exiting
        return 1;
    }
    arr = temp; // Reassign after successful reallocation
    arr[5] = 60; arr[6] = 70; arr[7] = 80;

    // Print array
    for (int i = 0; i < n; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    // 3. ALWAYS free memory to prevent Memory Leaks!
    free(arr);
    arr = NULL; // Reset pointer to prevent dangling pointer access

    return 0;
}
```

---

## 👀 Output

```text
10 20 30 40 50 60 70 80
```

---

## ⚠️ Memory Safety Guardrails

- **Memory Leak:** Forgetting `free()` causes memory leaks that accumulate over time.
- **Dangling Pointer:** Accessing memory after calling `free(ptr)`. Always set `ptr = NULL;` right after freeing.
- **Double Free:** Calling `free()` twice on the same non-NULL pointer causes undefined behavior.

## 🧪 Try It Yourself

Use `calloc` to allocate an array of 4 floats, initialize them, print them, and free the memory safely.

## 🎯 Mini Challenge

Write a program that asks the user how many integers they want to enter `N`, dynamically allocates an integer array of size `N`, calculates the sum, and frees the memory.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Strings](12-strings.md) | [Next: Structures →](14-structures.md)
