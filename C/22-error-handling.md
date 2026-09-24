# Error Handling & Debugging (`errno`, `perror`)

> 🔴 Advanced

## 📖 Definition

C does **not** possess built-in high-level exception handling constructs (such as `try-catch` blocks found in Java or C++). **Error Handling** in C relies on checking function return values, evaluating global system error codes declared in `<errno.h>`, and printing human-readable diagnostics using `perror()` and `strerror()`.

## 🌐 Multilingual Explanation

### English
C handles runtime errors using explicit function return values (e.g. returning `NULL`, `-1`, or `0` for success). When system calls or standard C library functions fail, they set the global integer variable `errno` declared in `<errno.h>`. `perror("msg")` prints a custom descriptive message followed by the system error string corresponding to `errno`. `strerror(errno)` from `<string.h>` returns the error message string directly.

### Hindi
C mein `try-catch` exception handling nahi hoti. Errors ko handle karne ke liye functions return status values (jaise `NULL` ya `-1`) check karte hain. Jab koi system call fail hota hai toh woh `<errno.h>` ke global variable `errno` mein error code set karta hai. `perror("msg")` human-readable system error message print karta hai. `strerror(errno)` error description string return karta hai.

### Marathi
C madhye `try-catch` sarkhe exception mechanisms nasatat. Function cha return value (jase `NULL` kiva `-1`) pahun error samajhto. System call fail jhalyas `<errno.h>` madhil `errno` variable madhye error code sathavla jato. Error cha arth samjhanysathi `perror()` kiva `strerror(errno)` vaparatat.

### Hinglish
C language defensive programming strategy follow karti hai. Standard functions (`fopen`, `malloc`, `scanf`) ka return value hamesha validate karein. Failing system calls `errno` set karte hain. Diagnostic errors console par print karne ke liye `perror("Error Description")` use karo. Compilation warnings catch karne ke liye `-Wall -Wextra` flags use karo.

## 🤔 Why Do We Use It?

Production applications operate in unpredictable real-world environments: files may be missing, network connections may drop, disk drives may run out of space, and memory allocations may fail. Without error handling, software crashes unexpectedly or causes silent data corruption.

## 🧠 Simple Explanation

Think of C error handling like driving a car with dashboard warning lights:
- Every system function (`fopen`, `malloc`) checks its engine status and returns a status flag (`0` for green, `1` or `NULL` for red warning).
- If something breaks, the system sets an error code in `errno` (like a OBD diagnostic error code `EACCES` for permission denied).
- Calling `perror("File Error")` decodes the numerical error code into plain English for the driver to read on screen.

## 📝 Key Error Handling Functions & Identifiers

| Function / Identifier | Header File | Purpose | Example / Notes |
|---|---|---|---|
| `errno` | `<errno.h>` | Global integer variable holding last system error code | Set by failed library functions (`ENOENT`, `EACCES`) |
| `perror(const char *s)` | `<stdio.h>` | Prints custom string `s` followed by system error text | `perror("File open failed")` |
| `strerror(int errnum)` | `<string.h>` | Returns string pointer for a given `errno` integer | `printf("Error: %s\n", strerror(errno))` |
| `EXIT_SUCCESS` | `<stdlib.h>` | Macro integer constant representing clean exit (`0`) | `return EXIT_SUCCESS;` |
| `EXIT_FAILURE` | `<stdlib.h>` | Macro integer constant representing error exit (`1`) | `return EXIT_FAILURE;` |

## 💡 Practical Example

Here is a practical file processor program demonstrating explicit return status checking, `errno` inspection, `perror()`, and `strerror()` error reporting:

```c
#include <stdio.h>
#include <stdlib.h>
#include <errno.h>
#include <string.h>

// Function with explicit error code return convention
// Returns 0 for success, non-zero error code for failure
int processDataFile(const char *filepath) {
    errno = 0; // Reset global errno before operation

    FILE *fp = fopen(filepath, "r");
    if (fp == NULL) {
        // 1. Logging system error using perror
        perror("perror report [processDataFile]");

        // 2. Logging specific system error string using strerror(errno)
        fprintf(stderr, "strerror report: Failed to open '%s' - Code %d: %s\n",
                filepath, errno, strerror(errno));

        // 3. Inspecting specific errno constants
        if (errno == ENOENT) {
            fprintf(stderr, "Diagnostic: File does not exist on disk.\n");
        } else if (errno == EACCES) {
            fprintf(stderr, "Diagnostic: Permission denied to access file.\n");
        }

        return EXIT_FAILURE;
    }

    printf("File '%s' opened successfully! Processing contents...\n", filepath);
    fclose(fp);
    return EXIT_SUCCESS;
}

int main(void) {
    printf("--- C ERROR HANDLING DEMONSTRATION ---\n");

    // 1. Attempting to open a non-existent file
    printf("1. Testing Non-Existent File Path:\n");
    int status1 = processDataFile("non_existent_file_999.txt");
    printf("Operation Status Code: %d\n\n", status1);

    // 2. Dynamic Memory Allocation Error Handling
    printf("2. Testing Heap Memory Allocation Error Handling:\n");
    size_t hugeSize = (size_t)-1; // Attempt to allocate impossibly huge size (e.g. 18 Exabytes)
    
    int *hugeBuffer = malloc(hugeSize);
    if (hugeBuffer == NULL) {
        perror("perror report [malloc failure]");
        fprintf(stderr, "strerror report: Heap allocation failed - %s\n", strerror(errno));
    } else {
        free(hugeBuffer);
    }

    return 0;
}
```

## 🔍 Code Breakdown

- `errno = 0;`: Resets global error code variable before making system library calls.
- `if (fp == NULL)`: Standard C idiom for detecting file opening failures.
- `perror("perror report")`: Automatically looks up the current integer value in `errno` and prints `perror report: No such file or directory` directly to standard error stream (`stderr`).
- `strerror(errno)`: Returns a pointer to the human-readable string describing `errno` (`"No such file or directory"` or `"Cannot allocate memory"`).

## 👀 Output

```text
--- C ERROR HANDLING DEMONSTRATION ---
1. Testing Non-Existent File Path:
perror report [processDataFile]: No such file or directory
strerror report: Failed to open 'non_existent_file_999.txt' - Code 2: No such file or directory
Diagnostic: File does not exist on disk.
Operation Status Code: 1

2. Testing Heap Memory Allocation Error Handling:
perror report [malloc failure]: Cannot allocate memory
strerror report: Heap allocation failed - Cannot allocate memory
```

## ⚠️ Common Mistakes

- **Ignoring Return Values:** Assuming functions like `fopen()`, `malloc()`, or `scanf()` will always succeed without checking return values. If `malloc` fails and returns `NULL`, accessing `ptr[0]` immediately crashes the program!
- **Checking `errno` Without Checking Return Value:** Reading `errno` when a library function succeeded. Many C library functions do NOT reset `errno` to `0` on success, so `errno` may hold leftover error numbers from previous failed operations! Only inspect `errno` after a function explicitly returns an error status.
- **Printing Error Logs to `stdout` instead of `stderr`:** Printing error diagnostics using `printf()` instead of standard error stream `fprintf(stderr, ...)` or `perror()`. Using `stderr` ensures error logs are captured cleanly even when standard output is redirected in shell scripts.

## 🛡️ Defensive Programming & Compiler Debug Flags

Always compile with strict warning flags enabled during development to let the compiler catch potential bugs, uninitialized variables, format specifier mismatches, and dead code:

```bash
# Enable strict compiler warnings
gcc -Wall -Wextra -Wpedantic -std=c11 program.c -o program
```

## 🌍 Real-World Usage

Error handling powers industrial operating systems, financial database transactions, cloud microservices, aerospace navigation control systems, and embedded network daemons.

## 🧪 Try It Yourself

1. Write a function `double safeDivide(double num, double den, int *errCode)` that sets `*errCode = 1` if `den == 0.0` and returns `0.0`; otherwise sets `*errCode = 0` and returns division result.
2. Test it in `main()` with division by zero.

## 🎯 Mini Challenge

Write a program that prompts the user for a filename, opens it using `fopen()`, reads its contents line by line, and uses `errno` and `perror()` to handle and log errors if the file is missing or unreadable.

## 🔗 Related Topics

- [File Handling](17-file-handling.md)
- [Dynamic Memory Allocation](13-dynamic-memory-allocation.md)
- [Command Line Arguments](20-command-line-arguments.md)

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Multi-file Projects](21-multi-file-projects.md) | [Next: Mini Projects →](23-mini-projects.md)
