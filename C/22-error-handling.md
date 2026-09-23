# Error Handling & Debugging (`errno`, `perror`)

> 🔴 Advanced

## 📖 Definition

C provides system error codes via `<errno.h>` and helper logging functions (`perror()` and `strerror()`) to diagnose runtime failures.

---

## 📝 Error Codes & Functions

- `errno`: Global integer storing the error code of the last failed system library call.
- `perror("prefix")`: Prints prefix string followed by the human-readable explanation of `errno`.
- `strerror(errno)`: Returns a pointer to the textual error string associated with an error code.

```c
#include <stdio.h>
#include <errno.h>
#include <string.h>

int main() {
    FILE *fp = fopen("non_existent_file.txt", "r");

    if (fp == NULL) {
        printf("Error Code (errno): %d\n", errno);
        printf("Error Message: %s\n", strerror(errno));

        // Convenience function:
        perror("File Open Failed");
        return 1;
    }

    fclose(fp);
    return 0;
}
```

---

## 👀 Output

```text
Error Code (errno): 2
Error Message: No such file or directory
File Open Failed: No such file or directory
```

---

## 🧪 Try It Yourself

Attempt to open a restricted or non-existent file path and print the error using `perror()`.

## 🎯 Mini Challenge

Write a function `FILE* safeOpen(const char* path, const char* mode)` that logs detailed errors if opening fails.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Multi-file Projects](21-multi-file-projects.md) | [Next: Comprehensive C Mini Projects →](23-mini-projects.md)
