# Set Up C Environment

> 🟢 Beginner

## 📖 Definition

To write and run C applications, you need a C compiler (like `GCC` or `Clang`) that translates human-readable source code (`.c`) into machine executables.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** C source code (`.c`) must be compiled with `gcc` into an executable binary before running.
> - **Hindi:** सी सोर्स कोड (`.c`) को चलाने से पहले `gcc` कंपाइलर द्वारा बाइनरी में कंपाइल करना पड़ता है।
> - **Marathi:** C प्रोग्राम चालवण्यासाठी `gcc` द्वारे कंपाईल करणे आवश्यक असते.
> - **Hinglish:** C code ko execute karne se pehle `gcc filename.c -o program` se compile karna padta hai.

## 🚀 Step-by-Step Setup & Compilation

### 1. Write Starter Code (`hello.c`)
```c
#include <stdio.h>

int main(void) {
    printf("Hello, C World!\n");
    return 0;
}
```

### 2. Compile and Run in Terminal
```bash
gcc -Wall -std=c11 hello.c -o hello
./hello      # On Linux / macOS
hello.exe    # On Windows
```

## 🧭 Navigation

[← C Home](00-README.md) | [Next: Introduction to C →](02-introduction-to-c.md)
