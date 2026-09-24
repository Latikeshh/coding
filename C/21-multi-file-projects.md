# Multi-file Projects & Header Files

> 🔴 Advanced

## 📖 Definition

Production C software is split into `.h` header interface files (declarations) and `.c` implementation source files (definitions) for modularity and compilation speed.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Put prototypes/structs in `.h` header files with Header Guards (`#ifndef`). Compile all `.c` files together.
> - **Hindi:** डिक्लेरेशन `.h` हेडर फाइलों में और इम्प्लीमेंटेशन `.c` फाइलों में रखें। सब फाइलों को एक साथ कंपाइल करें।
> - **Marathi:** मोठे प्रोजेक्ट्स सोपे करण्यासाठी मोड्युलर कोड (.h आणि .c) वापरला जातो.
> - **Hinglish:** Clean architecture ke liye function prototypes `.h` file mein rakho, aur implementations `.c` file mein. Compile with `gcc main.c utils.c -o app`.

## 📝 Structure

```c
/* utils.h */
#ifndef UTILS_H
#define UTILS_H
int multiply(int a, int b);
#endif

/* utils.c */
#include "utils.h"
int multiply(int a, int b) { return a * b; }

/* main.c */
#include <stdio.h>
#include "utils.h"
int main(void) {
    printf("%d\n", multiply(5, 4));
    return 0;
}
```

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: CLI Arguments](20-command-line-arguments.md) | [Next: Error Handling →](22-error-handling.md)
