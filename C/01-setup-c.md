# Set Up C Environment

> 🟢 Beginner

## 📖 Definition

Setting up the C environment involves installing a C compiler (such as **GCC** or **Clang**) and configuring your system to translate human-readable source code (`.c` files) into machine-executable binary files (`.exe` on Windows or ELF executables on Linux/macOS).

## 🌐 Multilingual Explanation

### English
To write and run C programs, you need a text editor and a C compiler (or an all-in-one IDE like Dev-C++ or VS Code). The compiler translates your `.c` source code into machine instructions. Commands like `gcc -Wall -Wextra -std=c11 program.c -o program` compile the code cleanly with modern standard rules and safety warnings enabled.

### Hindi
C programs likhne aur chalane ke liye aapko ek text editor aur C compiler (jaise GCC ya Clang) ki zaroorat hoti hai, ya aap Dev-C++ jaise all-in-one IDE ka upyog kar sakte hain. Compiler aapke `.c` code ko computer ke samajhne yogya binary (machine code) mein badalta hai. `gcc -Wall -Wextra -std=c11 program.c -o program` command se code safe aur aadhunik C11 standard ke anusar compile hota hai.

### Marathi
C madhil programs lihinyasathi aani chalavanyasathi text editor aani C compiler chi (jasakhi GCC kiva Clang) garaj aste, kiva aapan Dev-C++ sarkha ready-made IDE vaparu shakto. Compiler tumchya `.c` code che rupantar machine code madhye karto. `gcc -Wall -Wextra -std=c11 program.c -o program` ya command dware safe aani C11 standards nusar code compile kela jato.

### Hinglish
C language mein code run karne ke liye humein C compiler (jaise GCC ya Clang) ki zaroorat hoti hai. Windows users Dev-C++ IDE ya VS Code + MinGW-w64 use kar sakte hain. `gcc -Wall -Wextra -std=c11 program.c -o program` command se code bina kisi error ya safety warning ke compile hota hai.

## 🤔 Why Do We Use It?

Computers cannot understand human-written C code directly. The compiler acts as a translator that checks your code for syntax errors, optimizes performance, and converts it into native hardware instructions that run at maximum speed.

## 🧠 Simple Explanation

Think of C source code as a recipe written in English. Your CPU is a chef who only understands binary (0s and 1s). The C compiler is an expert translator who reads your recipe, checks for missing ingredients or steps, and writes a clear binary instruction manual for the CPU to execute.

## 📝 Setup Instructions Across Operating Systems

### 1. Windows Setup Options

#### Option A: Using MinGW-w64 / MSYS2 (Terminal / VS Code)
1. Download and install **MSYS2** or **MinGW-w64**.
2. Run the package manager command:
   ```bash
   pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain
   ```
3. Add `C:\msys64\ucrt64\bin` to your System Environment Variables (`PATH`).
4. Open Terminal or Command Prompt and verify installation:
   ```cmd
   gcc --version
   ```

#### Option B: Using Dev-C++ IDE (All-in-One Beginner IDE for Windows)
**Dev-C++** (such as **Embarcadero Dev-C++** or Orwell Dev-C++) is a popular, lightweight standalone IDE for Windows that includes a bundled MinGW GCC compiler suite.
1. Download the **Embarcadero Dev-C++** installer from official GitHub releases or SourceForge.
2. Run the `.exe` setup installer. It automatically installs both the Dev-C++ code editor and the bundled MinGW GCC compiler.
3. Open Dev-C++ -> Click **File -> New -> Source File** (or press `Ctrl + N`).
4. Write your C program and save the file with a `.c` extension (e.g. `hello.c`).
5. Press **`F11`** (or click **Execute -> Compile & Run**) to automatically compile and execute your C code in an output console window.

### 2. Linux (Ubuntu / Debian / Fedora)
Open your terminal and install the build tools:
```bash
# Ubuntu / Debian
sudo apt update && sudo apt install build-essential gcc

# Fedora / RHEL
sudo dnf groupinstall "Development Tools"
```

### 3. macOS (Using Xcode Command Line Tools)
Open Terminal and run:
```bash
xcode-select --install
```
This installs `clang` (aliased as `gcc`).

## 💡 Practical Starter Example

Create a file named `hello.c`:

```c
#include <stdio.h>

int main(void) {
    printf("Hello, World! Welcome to C programming.\n");
    return 0;
}
```

### Compiling and Running via Terminal

```bash
# Compile with warnings and modern standard
gcc -Wall -Wextra -std=c11 hello.c -o hello

# Run on Linux / macOS:
./hello

# Run on Windows (CMD / PowerShell):
hello.exe
```

### Compiling and Running in Dev-C++ IDE
Press **`F9`** to Compile, **`F10`** to Run, or **`F11`** to Compile & Run simultaneously.

## 🔍 Code Breakdown

- `#include <stdio.h>`: Includes the Standard Input Output header file containing functions like `printf`.
- `int main(void)`: The main entry point where program execution begins. `void` explicitly specifies that `main` receives no arguments.
- `printf(...)`: Prints the formatted string to the console screen.
- `\n`: Newline escape sequence that moves the cursor to the next line.
- `return 0;`: Returns `0` to the operating system, signaling that the program finished successfully without errors.

## 👀 Output

```text
Hello, World! Welcome to C programming.
```

## ⚠️ Common Mistakes

- **Forgetting `-o filename` in Terminal:** Running `gcc hello.c` without `-o` generates a default output file named `a.out` (Linux/macOS) or `a.exe` (Windows).
- **Saving as `.cpp` instead of `.c` in Dev-C++:** Saving C source code with `.cpp` extension causes Dev-C++ to compile it as C++ code instead of standard C.
- **Missing Path Variable on Windows:** Getting `'gcc' is not recognized as an internal or external command` when using CMD/PowerShell because MinGW bin folder is not added to System PATH.
- **Forgetting `return 0;` or `int main(void)` signature:** Using legacy non-standard signatures like `void main()` causes compiler warnings on strict standards.

## 🛡️ Safety / Important Flags

Always enable compiler warnings during development:
- `-Wall`: Enables all standard compiler warnings.
- `-Wextra`: Enables additional extra warnings for potential bugs.
- `-std=c11`: Specifies the ISO C11 standard.

Example command:
```bash
gcc -Wall -Wextra -std=c11 program.c -o program
```

## 🌍 Real-World Usage

Every major operating system kernel (Linux, Windows kernel, macOS Darwin), embedded microcontroller firmware, game engine core, and database engine (SQLite, PostgreSQL) is built using GCC or Clang toolchains.

## 🧪 Try It Yourself

1. Install GCC/Clang or Dev-C++ on your machine.
2. Create a file called `info.c` and print your name and favorite programming language.
3. Compile and run it successfully.

## 🎯 Mini Challenge

Write a program named `square.c` that prints a 4x4 box made of `#` symbols using 4 separate `printf` statements. Compile and run it in your terminal or Dev-C++.

## 🔗 Related Topics

- [Introduction to C](02-introduction-to-c.md)
- [Variables and Data Types](03-variables-and-data-types.md)
- [Input and Output](04-input-output.md)

## 🧭 Navigation

[← C Home](00-README.md) | [Next: Introduction to C →](02-introduction-to-c.md)
