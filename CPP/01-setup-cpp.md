# Set Up C++ Environment

> 🟢 Beginner

## 📖 Definition

Setting up the C++ environment involves installing an ISO-compliant C++ compiler (such as **GCC `g++`**, **Clang `clang++`**, or **MSVC**) and configuring an IDE or terminal workspace to translate C++ source code (`.cpp` files) into native machine executables.

## 🌐 Multilingual Explanation

### English
To write and execute C++ applications, you need a C++ compiler (`g++` or `clang++`) or an all-in-one IDE like Dev-C++ or VS Code. Commands like `g++ -Wall -Wextra -std=c++20 main.cpp -o main` compile `.cpp` source files with modern ISO C++20 standards enabled.

### Hindi
C++ programs ko write aur execute karne ke liye aapko C++ compiler (`g++` ya `clang++`) ki zaroorat hoti hai. Windows users Dev-C++ IDE ya VS Code + MinGW-w64 use kar sakte hain. `g++ -Wall -Wextra -std=c++20 main.cpp -o main` command se code aadhunik C++20 standard ke anusar compile hota hai.

### Marathi
C++ programs lihinyasathi aani chalavanyasathi C++ compiler (`g++` kiva `clang++`) lagto. Windows var Dev-C++ IDE kiva VS Code + MinGW-w64 vaparatat. `g++ -Wall -Wextra -std=c++20 main.cpp -o main` command dware C++20 standard nusar code compile kela jato.

### Hinglish
C++ code run karne ke liye `g++` compiler mandatory hai. Beginners Dev-C++ IDE download karke ek click mein `F11` dabaakar code compile aur run kar sakte hain. Command line users `g++ -std=c++20 main.cpp -o main` use karte hain.

## 🤔 Why Do We Use It?

The C++ compiler analyzes your source code for type safety, template instantiation errors, and object-oriented syntax rules before translating human-readable class methods into ultra-fast machine binary instructions.

## 🧠 Simple Explanation

Think of C++ code as a blueprint for a high-speed sports car. The C++ compiler (`g++`) is the automated factory floor that inspects the blueprint for design flaws and manufactures the physical car (`main.exe`) ready for driving.

## 📝 Setup Instructions Across Operating Systems

### 1. Windows Setup Options

#### Option A: Using MinGW-w64 / MSYS2 (Terminal / VS Code)
1. Download and install **MSYS2** or **MinGW-w64**.
2. Run package manager command:
   ```bash
   pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain
   ```
3. Add `C:\msys64\ucrt64\bin` to your System Environment Variables (`PATH`).
4. Verify `g++` installation in terminal:
   ```cmd
   g++ --version
   ```

#### Option B: Using Dev-C++ IDE (All-in-One Beginner IDE for Windows)
**Dev-C++** (such as **Embarcadero Dev-C++**) is a popular, lightweight standalone IDE for Windows that includes a bundled MinGW GCC/G++ compiler suite.
1. Download the **Embarcadero Dev-C++** installer from official GitHub releases or SourceForge.
2. Run the `.exe` setup installer. It automatically installs both the Dev-C++ editor and the bundled MinGW `g++` compiler.
3. Open Dev-C++ -> Click **File -> New -> Source File** (or press `Ctrl + N`).
4. Write your C++ code and save the file with a `.cpp` extension (e.g. `main.cpp`).
5. Press **`F11`** (or click **Execute -> Compile & Run**) to automatically compile and execute your C++ code in a console window.

### 2. Linux (Ubuntu / Debian / Fedora)
Open terminal and install build tools:
```bash
# Ubuntu / Debian
sudo apt update && sudo apt install build-essential g++

# Fedora / RHEL
sudo dnf install gcc-c++
```

### 3. macOS (Using Xcode Command Line Tools)
Open Terminal and run:
```bash
xcode-select --install
```
This installs `clang++` (aliased as `g++`).

## 💡 Practical Starter Example

Create a file named `main.cpp`:

```cpp
#include <iostream>

int main() {
    std::cout << "Welcome to Modern C++ Programming!" << std::endl;
    return 0;
}
```

### Compiling and Running via Terminal

```bash
# Compile using modern C++20 standard
g++ -Wall -Wextra -std=c++20 main.cpp -o main

# Run on Linux / macOS:
./main

# Run on Windows (CMD / PowerShell):
main.exe
```

### Compiling and Running in Dev-C++ IDE
Press **`F9`** to Compile, **`F10`** to Run, or **`F11`** to Compile & Run simultaneously.

## 🔍 Code Breakdown

- `#include <iostream>`: Header file incorporating standard input/output stream objects (`std::cout`, `std::cin`).
- `int main()`: Entry point function returning an integer exit status.
- `std::cout << ...`: Character output stream operator printing text to standard output.
- `std::endl`: Flushes the output buffer and inserts a newline.
- `return 0;`: Signals clean, successful execution to the operating system.

## 👀 Output

```text
Welcome to Modern C++ Programming!
```

## ⚠️ Common Mistakes

- **Saving as `.c` instead of `.cpp`:** Saving C++ code with `.c` file extension causes compilers to fail when recognizing C++ features like `std::cout` or classes.
- **Forgetting `-std=c++17` or `-std=c++20` Flag:** Compiling without modern C++ standard flags on older `g++` compilers causes errors when using newer language features.
- **Missing `main()` Return:** Omitting `int main()` return type or using invalid signatures.

## 🛡️ Safety / Important Flags

Always enable compiler warnings during development:
- `-Wall`: Enables standard compiler warnings.
- `-Wextra`: Enables additional warnings for subtle logical bugs.
- `-std=c++20`: Specifies the ISO C++20 standard.

Example command:
```bash
g++ -Wall -Wextra -std=c++20 main.cpp -o main
```

## 🌍 Real-World Usage

Dev-C++ is widely used in school/college computer labs and competitive programming contests (ICPC, Codeforces) due to its instant zero-configuration setup. GCC and Clang power AAA game engines (Unreal Engine), OS kernels, web browsers (Chromium), and financial trading systems.

## 🧪 Try It Yourself

1. Install `g++` compiler or Dev-C++ IDE on your machine.
2. Create a file called `hello.cpp` and print your name using `std::cout`.
3. Compile and run it successfully.

## 🎯 Mini Challenge

Write a program named `banner.cpp` that prints a 3-line banner welcoming yourself to C++ programming using `std::cout`. Compile and execute it in your terminal or Dev-C++.

## 🔗 Related Topics

- [Introduction to C++](02-introduction-to-cpp.md)
- [Variables and Data Types](03-variables-and-data-types.md)
- [Input and Output](04-input-output.md)

## 🧭 Navigation

[← C++ Home](00-README.md) | [Next: Introduction to C++ →](02-introduction-to-cpp.md)
