# Set Up C Environment

> 🟢 Beginner

## 📖 Definition

To write and run C code, you need a **C compiler** (such as `GCC` or `Clang`) that translates human-readable C code into machine code binaries.

## 🤔 Why Do We Use It?

Unlike interpreted languages, C source code (`.c`) must be compiled into an executable file (`.exe` on Windows or a binary on Linux/macOS) before it can run on your computer.

## 🧠 Simple Explanation

Think of C source code as a recipe written in words. The compiler is a machine that converts that recipe into a finished meal (an executable program).

## 🚀 Step-by-Step Setup

### Step 1: Install GCC Compiler
- **Windows:** Download MinGW-w64 or install via `wsl` / `MSYS2`. Verify installation by typing `gcc --version` in command prompt.
- **macOS:** Open Terminal and install Xcode Command Line Tools by typing `xcode-select --install`.
- **Linux:** Install GCC via package manager: `sudo apt install build-essential`.

### Step 2: Write Your First C Program
1. Open VS Code and create a file named `hello.c`.
2. Add the following code:
```c
#include <stdio.stdio.h> // Header for input/output functions

int main() {
    printf("Hello, C World!\n");
    return 0;
}
```

### Step 3: Compile and Run
Open your terminal inside VS Code and type:
```bash
gcc hello.c -o hello
./hello      # On Linux/macOS
hello.exe    # On Windows
```

## 👀 Output

```text
Hello, C World!
```

## ⚠️ Common Mistakes

- Forgetting to compile before running (changes in `.c` files will not show in execution until recompiled).
- Forgetting the trailing `.c` extension when compiling (`gcc main.c`).

## 🧪 Try It Yourself

Compile and run a C program that prints `"I am setting up C on my system!"`.

## 🎯 Mini Challenge

Print two lines: Your name on the first line and your favorite programming language on the second line using `\n` line breaks.

## 🧭 Navigation

[← C Home](00-README.md) | [Next: Introduction to C →](02-introduction-to-c.md)
