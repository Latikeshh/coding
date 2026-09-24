# Error Handling & Debugging (`errno`, `perror`)

> 🔴 Advanced

## 📖 Definition

C system calls store error codes inside global `<errno.h>`. Print human-readable system error diagnostics using `perror()` and `strerror()`.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** System library failures populate `errno`. Print descriptive system errors using `perror("Failed message")`.
> - **Hindi:** सिस्टम एरर आने पर `errno` कोड सेट होता है। `perror()` से इंसान के पढ़ने योग्य एरर मैसेज प्रिंट होता है।
> - **Marathi:** सिस्टीम एरर समजण्यासाठी `perror()` चा वापर होतो.
> - **Hinglish:** File/Network system call fail hone par `perror("Error Message")` se exact system error cause debug karo.

## 📝 Syntax

```c
#include <stdio.h>
#include <errno.h>

int main(void) {
    FILE *fp = fopen("missing.txt", "r");
    if (fp == NULL) {
        perror("File Open Failure"); // Prints: File Open Failure: No such file or directory
        return 1;
    }
    fclose(fp);
    return 0;
}
```

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Multi-file Projects](21-multi-file-projects.md) | [Next: Comprehensive C Mini Projects →](23-mini-projects.md)
