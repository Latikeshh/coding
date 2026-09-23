# Set Up C++ Environment

> 🟢 Beginner

## 📖 Definition

To compile and run C++ code, you need a C++ compiler such as **GCC (`g++`)**, **Clang**, or **MSVC** (Microsoft Visual C++).

## 🤔 Why Do We Use It?

C++ source files (`.cpp`) are compiled into machine code executables (`.exe` on Windows or ELF binaries on Linux/macOS) for direct, high-speed execution.

## 🚀 Step-by-Step Setup

### Step 1: Install `g++` Compiler
- **Windows:** Install MinGW-w64 via MSYS2 or standalone installer. Verify with `g++ --version` in terminal.
- **macOS:** Install Xcode Command Line Tools (`xcode-select --install`).
- **Linux:** Install via terminal: `sudo apt install build-essential g++`.

### Step 2: Write Starter Code
Create `main.cpp` in VS Code:
```cpp
#include <iostream>

int main() {
    std::cout << "Hello, C++ World!" << std::endl;
    return 0;
}
```

### Step 3: Compile and Run
In VS Code Terminal:
```bash
g++ main.cpp -o main
./main      # Linux/macOS
main.exe    # Windows
```

## 👀 Output

```text
Hello, C++ World!
```

## ⚠️ Common Mistakes

- Forgetting `#include <iostream>` when using `std::cout` or `std::cin`.
- Forgetting to save the `.cpp` file before compiling.

## 🧪 Try It Yourself

Write and compile a C++ program that prints `"Setting up C++ was successful!"`.

## 🎯 Mini Challenge

Print your name, favorite game or software, and target learning goal on three separate lines using `std::cout`.

## 🧭 Navigation

[← C++ Home](00-README.md) | [Next: Introduction to C++ →](02-introduction-to-cpp.md)
