# Dynamic Memory Allocation (`malloc`, `calloc`, `realloc`, `free`)

> 🔴 Advanced

## 📖 Definition

**Dynamic Memory Allocation** in C allows programs to request variable amounts of memory from the **Heap** at runtime using standard functions declared in `<stdlib.h>`. Unlike **Stack** memory (which has fixed sizes determined at compile time), Heap allocations persist until explicitly released using `free()`.

## 🌐 Multilingual Explanation

### English
Dynamic memory allocation requests memory from the Heap during execution. Functions like `malloc`, `calloc`, and `realloc` return `void*` raw memory addresses. In idiomatic C, casting `malloc()` returns is unnecessary (`int *arr = malloc(n * sizeof *arr);`). Always verify allocation success against `NULL`, use temporary pointers during `realloc`, and call `free()` to prevent memory leaks.

### Hindi
Dynamic Memory Allocation execution ke dauran Heap memory se space mangta hai. Idiomatic C mein `malloc()` ko explicit cast karna galat mana jata hai (`int *arr = malloc(n * sizeof *arr);` use karein). Allocation ke baad `NULL` check karna mandatory hai. Memory leaks se bachne ke liye kaam khatam hone par `free(ptr)` karein aur pointer ko `NULL` set karein.

### Marathi
Dynamic memory allocation mule run time var Heap varun garjenusar memory milte. Idiomatic C madhye `malloc` la cast karanyachi garaj naste (`int *arr = malloc(n * sizeof *arr);` vāparave). Memory milalyavar `NULL` check karne avashyak aahe. Memory leaks talnyasathi `free(ptr)` karun pointer `NULL` karaava.

### Hinglish
Stack memory ka size compile time par fixed hota hai, jabki Heap memory runtime par expand/shrink hoti hai. In C, `malloc()` to explicit cast mat karo. Always check `if (arr == NULL)` failure check. `realloc` karte waqt temp pointer use karo taaki original pointer leak na ho.

## 🤔 Why Do We Use It?

If you write a program to process customer orders, you cannot know at compile time whether a user will enter 5 orders or 50,000 orders. Dynamic memory allows arrays and data structures to grow or shrink dynamically in response to actual runtime workload.

## 🧠 Simple Explanation

- **Stack Memory:** Reserved hotel rooms booked weeks in advance. Fixed size, automatically cleaned up when function ends.
- **Heap Memory:** A flexible storage warehouse where you rent exact space on-demand while working, and return the key (`free`) when finished. If you forget to return the key, the space remains locked forever (**Memory Leak**).

## 📝 Key Heap Functions (`<stdlib.h>`)

| Function | Signature / Usage | Initialized State | Notes |
|---|---|---|---|
| `malloc()` | `ptr = malloc(bytes);` | Uninitialized (garbage data) | Fast raw memory allocation |
| `calloc()` | `ptr = calloc(count, size);` | Zero-initialized (`0`) | Slightly slower; clears memory bytes to 0 |
| `realloc()` | `ptr = realloc(old_ptr, new_bytes);` | Preserves existing data | Resizes existing heap block; returns new address |
| `free()` | `free(ptr);` | N/A | Releases heap memory back to OS |

### Idiomatic C Allocation Syntax
Do **NOT** cast `malloc` in C! C automatically converts `void*` to any object pointer type.
```c
// RECOMMENDED IDIOMATIC C STYLE:
int *arr = malloc(n * sizeof *arr); // Uses pointer dereference type automatically

// NOT RECOMMENDED IN C:
// int *arr = (int *)malloc(n * sizeof(int));
```
*Why?* Unnecessary casts clutter code and can hide missing `#include <stdlib.h>` bugs in older compiler standards.

## 💡 Practical Example

Here is a practical dynamic inventory expansion program demonstrating `malloc`, `calloc`, safe `realloc` with temporary pointer checking, `NULL` validation, and clean memory deallocation:

```c
#include <stdio.h>
#include <stdlib.h>

int main(void) {
    int initialCapacity = 3;

    // 1. Allocating dynamic array on Heap using calloc (zero-initialized)
    printf("--- 1. INITIAL HEAP ALLOCATION (calloc) ---\n");
    int *inventory = calloc((size_t)initialCapacity, sizeof *inventory);

    // ALWAYS check for allocation failure (returns NULL)
    if (inventory == NULL) {
        fprintf(stderr, "Error: Initial heap memory allocation failed!\n");
        return 1;
    }

    // Populate initial items
    inventory[0] = 101;
    inventory[1] = 102;
    inventory[2] = 103;

    printf("Initial Capacity: %d items\n", initialCapacity);
    printf("Items in Inventory: ");
    for (int i = 0; i < initialCapacity; i++) {
        printf("[%d] ", inventory[i]);
    }
    printf("\n\n");

    // 2. Resizing Array using realloc with SAFE TEMPORARY POINTER PATTERN
    printf("--- 2. DYNAMIC RESIZING (realloc) ---\n");
    int newCapacity = 6;

    // SAFE PATTERN: Assign realloc return to a temporary pointer first!
    int *temp = realloc(inventory, (size_t)newCapacity * sizeof *temp);

    if (temp == NULL) {
        fprintf(stderr, "Error: Memory reallocation failed! Original data preserved.\n");
        free(inventory); // Clean up original buffer before exiting
        inventory = NULL;
        return 1;
    }

    // Assign temporary pointer back to inventory after successful allocation
    inventory = temp;

    // Populate new capacity slots
    inventory[3] = 104;
    inventory[4] = 105;
    inventory[5] = 106;

    printf("Expanded Capacity: %d items\n", newCapacity);
    printf("Items in Inventory: ");
    for (int i = 0; i < newCapacity; i++) {
        printf("[%d] ", inventory[i]);
    }
    printf("\n\n");

    // 3. Deallocating Heap Memory cleanly
    printf("--- 3. CLEANING UP HEAP MEMORY ---\n");
    free(inventory);
    inventory = NULL; // Prevent Dangling Pointer access!
    printf("Heap memory freed successfully. Pointer reset to NULL.\n");

    return 0;
}
```

## 🔍 Code Breakdown

- `sizeof *inventory`: Evaluates to `sizeof(int)` dynamically based on the type of pointer `inventory`. This eliminates hardcoded type names in allocation statements.
- `if (temp == NULL)`: Crucial safe `realloc` pattern. If `realloc` fails and you wrote `inventory = realloc(inventory, ...)`, `inventory` would become `NULL`, losing the address of the original memory block and causing an untraceable memory leak!
- `free(inventory); inventory = NULL;`: Calling `free()` returns memory to the OS. Setting `inventory = NULL` ensures that subsequent accidental reads/writes fail cleanly rather than causing corrupted memory bugs.

## 👀 Output

```text
--- 1. INITIAL HEAP ALLOCATION (calloc) ---
Initial Capacity: 3 items
Items in Inventory: [101] [102] [103] 

--- 2. DYNAMIC RESIZING (realloc) ---
Expanded Capacity: 6 items
Items in Inventory: [101] [102] [103] [104] [105] [106] 

--- 3. CLEANING UP HEAP MEMORY ---
Heap memory freed successfully. Pointer reset to NULL.
```

## ⚠️ Common Memory Bugs & Guardrails

- **Memory Leak:** Allocating heap memory with `malloc`/`calloc` and losing the pointer reference without calling `free()`. Memory remains allocated until process exit.
- **Use-After-Free:** Reading or modifying heap memory via a pointer after calling `free(ptr)`.
- **Double-Free:** Calling `free(ptr)` twice on the same non-NULL pointer address. Calling `free(NULL)` is a safe no-op.
- **Integer Overflow in Allocation Size:** Calculating `n * sizeof(T)` where `n` is large enough to overflow `size_t`, resulting in allocating a tiny buffer that gets immediately overflowed!

## 🛡️ Safety / Important Rules

1. Always check if returned pointer is `NULL` before dereferencing.
2. For every `malloc`/`calloc`/`realloc`, ensure there is a matching `free()`.
3. Never use raw pointers after calling `free()`; immediately set `ptr = NULL;`.

## 🌍 Real-World Usage

Dynamic memory powers database query result buffers, file loading trees, dynamic array implementations (`std::vector` equivalents in C), image decoding buffers, and network socket queues.

## 🧪 Try It Yourself

1. Ask the user for `N` (number of test scores).
2. Dynamically allocate an `int` array of size `N` using `malloc`.
3. Read `N` scores using a loop, calculate average, and `free` the memory.

## 🎯 Mini Challenge

Write a program that dynamically allocates memory for a string of 50 characters, reads a sentence from the user using `fgets()`, uses `realloc()` to shrink the memory block to the exact string length (`strlen + 1`), prints the string and updated buffer size, and frees the memory.

## 🔗 Related Topics

- [Pointers Basics](10-pointers-basics.md)
- [Advanced Pointers](11-advanced-pointers.md)
- [Structures](14-structures.md)

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Strings](12-strings.md) | [Next: Structures →](14-structures.md)
