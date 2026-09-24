# C Preprocessor & Macros (`#define`, `#ifdef`)

> 🟡 Intermediate

## 📖 Definition

The **C Preprocessor** is a macro expansion step that processes source code text *before* actual compilation begins. Preprocessor directives start with `#` and perform text substitutions, file inclusions (`#include`), and conditional compilation (`#ifdef`).

## 🌐 Multilingual Explanation

### English
The preprocessor runs before compiler syntax analysis. Directives like `#include` copy header declarations, while `#define` creates constant values and function-like macros. Function-like macros must enclose all parameters in parentheses (`#define SQUARE(x) ((x) * (x))`) to avoid precedence bugs. Header Guards (`#ifndef HEADER_H`) prevent duplicate declaration errors.

### Hindi
Preprocessor directives `#` se shuru hoti hain aur compilation se pehle run hoti hain. `#include` header files copy karta hai aur `#define` constants aur macros banata hai. Function-like macros mein hamesha inner-outer parentheses lagayein (`#define SQUARE(x) ((x) * (x))`), aksar operator precedence bugs se bachne ke liye. Header guards multiple inclusions rokte hain.

### Marathi
Preprocessor (#) code compile honyapūrvi chalato. `#include` dware header file mhadhil code copy hoto, aani `#define` dware macros tayar hotat. Macro lihitana hamesha double brackets `((x) * (x))` vaparave lagtat. File punha punha include houn samasya yenayene mhanun Header Guards vaparatat.

### Hinglish
Preprocessor simple text substitution step hai. `#define SQUARE(x) x * x` dangerous hota hai kyunki `SQUARE(1 + 2)` expand hokar `1 + 2 * 1 + 2 = 5` ban jata hai, `9` nahi! Always write `#define SQUARE(x) ((x) * (x))`. Multiple inclusions rokne ke liye `.h` files mein `#ifndef` Header Guards lagayein.

## 🤔 Why Do We Use It?

Preprocessors allow defining central configuration constants (`#define MAX_USERS 1000`), enabling cross-platform compilation flags (`#ifdef _WIN32`), creating debug logging macros, and organizing code modularity.

## 🧠 Simple Explanation

Think of the preprocessor as a "Find and Replace" automated text editor that runs on your source code right before passing the file to the compiler.
- `#define PI 3.14159`: Replaces every word `PI` in your code with literal text `3.14159`.
- `#include "my_header.h"`: Replaces line `#include ...` with the entire contents of `my_header.h`.

## 📝 Key Directives & Predefined Macros

| Directive / Macro | Purpose | Example / Expansion |
|---|---|---|
| `#include <stdio.h>` | Includes standard system header file | Searches system include paths |
| `#include "utils.h"` | Includes local user header file | Searches current project folder first |
| `#define NAME value` | Defines a macro constant or macro function | `#define MAX_BUFFER 1024` |
| `#undef NAME` | Undefines an existing macro | `#undef MAX_BUFFER` |
| `#ifndef` / `#define` / `#endif` | Header Guard pattern | Prevents duplicate file inclusions |
| `#ifdef` / `#else` / `#endif` | Conditional compilation | Compiles code conditionally based on flags |
| `__FILE__` | Predefined macro for current file name | Expands to `"main.c"` |
| `__LINE__` | Predefined macro for current line number | Expands to integer line number |
| `__DATE__` / `__TIME__` | Predefined macros for compilation date/time | Expands to `"Sep 24 2026"` |

## 💡 Practical Example

Here is a practical program demonstrating macro safety rules, conditional debug logging macros, header guards, and predefined system macros:

```c
#include <stdio.h>

// 1. SAFE MACRO DEFINITION (Enclosed in parentheses!)
#define SQUARE_SAFE(x) ((x) * (x))

// UNSAFE MACRO DEFINITION (DO NOT USE THIS - DEMONSTRATION ONLY!)
#define SQUARE_UNSAFE(x) x * x

// 2. CONFIGURATION CONSTANTS
#define APP_VERSION "2.4.0"
#define MAX_RETRY_LIMIT 3

// 3. CONDITIONAL DEBUG LOGGING MACRO
#define DEBUG_MODE 1

#if DEBUG_MODE
    #define LOG_DEBUG(msg) printf("[DEBUG] %s:%d - %s\n", __FILE__, __LINE__, msg)
#else
    #define LOG_DEBUG(msg) // Expands to empty text in production
#endif

int main(void) {
    printf("--- 1. PREPROCESSOR MACRO SAFETY DEMONSTRATION ---\n");
    int val = 1 + 2; // 3

    int unsafeRes = SQUARE_UNSAFE(1 + 2); // Expands to: 1 + 2 * 1 + 2 = 5!
    int safeRes = SQUARE_SAFE(1 + 2);     // Expands to: ((1 + 2) * (1 + 2)) = 9!

    printf("Calculation (1 + 2)^2 Unsafe Macro Expansion: %d (WRONG!)\n", unsafeRes);
    printf("Calculation (1 + 2)^2 Safe Macro Expansion  : %d (CORRECT!)\n\n", safeRes);

    // 2. Debug Logging Macro
    printf("--- 2. CONDITIONAL COMPILATION & SYSTEM LOGS ---\n");
    LOG_DEBUG("Initializing database connection pool...");
    LOG_DEBUG("System ready for traffic.");

    // 3. Predefined Macros
    printf("\n--- 3. PREDEFINED COMPILER METADATA ---\n");
    printf("Application Version : %s\n", APP_VERSION);
    printf("Compiled On Date    : %s at %s\n", __DATE__, __TIME__);
    printf("Source File Path    : %s\n", __FILE__);
    printf("Current Code Line   : %d\n", __LINE__);

    return 0;
}
```

## 🔍 Code Breakdown

- `SQUARE_UNSAFE(1 + 2)`: Expands literally to `1 + 2 * 1 + 2`. Operator precedence evaluates `2 * 1` first, giving `1 + 2 + 2 = 5`!
- `SQUARE_SAFE(1 + 2)`: Expands to `((1 + 2) * (1 + 2))`. Parentheses force `1 + 2 = 3` to evaluate first, giving `3 * 3 = 9`.
- `#if DEBUG_MODE`: The preprocessor evaluates `DEBUG_MODE`. If non-zero, it includes the debug logging code; if `0`, it omits debug logging lines completely, leaving zero runtime overhead in production builds.

## 👀 Output

```text
--- 1. PREPROCESSOR MACRO SAFETY DEMONSTRATION ---
Calculation (1 + 2)^2 Unsafe Macro Expansion: 5 (WRONG!)
Calculation (1 + 2)^2 Safe Macro Expansion  : 9 (CORRECT!)

--- 2. CONDITIONAL COMPILATION & SYSTEM LOGS ---
[DEBUG] main.c:38 - Initializing database connection pool...
[DEBUG] main.c:39 - System ready for traffic.

--- 3. PREDEFINED COMPILER METADATA ---
Application Version : 2.4.0
Compiled On Date    : Sep 24 2026 at 11:15:00
Source File Path    : main.c
Current Code Line   : 46
```

## ⚠️ Common Mistakes

- **Macro Parameter Side Effects:** Passing expressions with side effects to macros (e.g. `SQUARE_SAFE(i++)`). Since the macro parameter `x` appears twice in `((x) * (x))`, `i++` evaluates twice, incrementing `i` two times instead of once! Prefer inline functions (`inline`) in modern C for complex logic.
- **Missing Parentheses in Macro Body:** Forgetting parentheses around individual macro parameters or the outer macro expression itself.
- **Putting Semicolons at End of `#define`:** Writing `#define MAX 100;` causes the semicolon to be included in text substitution, resulting in syntax errors like `int arr[100;];`.

## 🛡️ Safety / Header Guard Pattern

Always wrap header file contents in **Header Guards** to prevent duplicate declaration errors when included multiple times:
```c
/* my_module.h */
#ifndef MY_MODULE_H
#define MY_MODULE_H

// Declarations, prototypes, structs
void processData(void);

#endif // MY_MODULE_H
```

## 🌍 Real-World Usage

Preprocessors enable cross-platform support (handling Windows `#ifdef _WIN32` vs Linux `#ifdef __linux__`), feature flags in enterprise software, assertion macros (`assert()`), and compiler optimization directives.

## 🧪 Try It Yourself

1. Define a macro `#define MAX(a, b) (((a) > (b)) ? (a) : (b))`.
2. Test it with two numbers and print the larger value.

## 🎯 Mini Challenge

Write a macro `#define ARRAY_SIZE(arr) (sizeof(arr) / sizeof((arr)[0]))`. Test it on an integer array and a character array in `main()` to verify that it correctly returns element counts.

## 🔗 Related Topics

- [Variables and Data Types](03-variables-and-data-types.md)
- [Multi-file Projects](21-multi-file-projects.md)

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: File Handling](17-file-handling.md) | [Next: Storage Classes →](19-storage-classes.md)
