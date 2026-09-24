# Multi-file Projects & Header Files (`.h`)

> 🔴 Advanced

## 📖 Definition

Production C software is organized into **Multi-file Projects** consisting of **Header Files** (`.h` containing type definitions, macros, and function prototypes) and **Source Files** (`.c` containing actual function implementations). This separates interface declarations from implementation code, enabling modular software development and faster incremental compilation.

## 🌐 Multilingual Explanation

### English
Multi-file architecture divides code into header files (`.h`) and implementation files (`.c`). Header files contain function prototypes, structure definitions, and Header Guards (`#ifndef`). Source files contain function definitions and include matching headers via `#include "header.h"`. The compiler compiles `.c` files into object files (`.o` or `.obj`) and the linker combines them into an executable binary.

### Hindi
Bade C projects ko modular banane ke liye Header Files (`.h`) aur Source Files (`.c`) mein toda jata hai. Header files mein function prototypes, structs aur Header Guards (`#ifndef`) hote hain. Implementation `.c` files mein hota hai. Sabhi `.c` files ko ek sath compile karke linker executable binary file banata hai (`gcc main.c bank.c -o app`).

### Marathi
Mothe C projects sope karanyasathi Header Files (`.h`) aani Source Files (`.c`) vaparale jatat. Header file madhye function prototypes, structs aani Header Guards asatat. Implementation `.c` file madhye hote. System sarv `.c` files compile karun link karte.

### Hinglish
Clean software architecture ke liye interface declaration `.h` file mein rakhein aur actual business logic `.c` file mein. Multiple inclusions rokne ke liye `.h` file mein Header Guards `#ifndef BANK_H` zaroori hain. Project compile karne ke liye command: `gcc -Wall -Wextra -std=c11 main.c bank.c -o app`.

## 🤔 Why Do We Use It?

Putting 50,000 lines of code into a single `main.c` file makes teamwork impossible, causes git merge conflicts, and forces the compiler to recompile the entire project even when changing a single line. Multi-file modularity fixes all these issues.

## 🧠 Simple Explanation

Think of a multi-file project like a restaurant:
- **Header File (`bank.h`):** The printed menu given to customers. It lists dish names and prices (**Function Prototypes**), but doesn't cook the food.
- **Source File (`bank.c`):** The kitchen where chefs actually prepare the food (**Function Definitions**).
- **Driver File (`main.c`):** The dining manager who orders dishes from the menu (**Function Calls**).

## 📝 Multi-file Project Architecture & Header Guards

### 1. Header File Guard Pattern (`bank.h`)
```c
#ifndef BANK_H
#define BANK_H

// Function prototypes & struct definitions
typedef struct {
    int accountNumber;
    double balance;
} Account;

void depositMoney(Account *acc, double amount);
void printAccount(const Account *acc);

#endif // BANK_H
```

### 2. Implementation File (`bank.c`)
```c
#include <stdio.h>
#include "bank.h" // Include matching header

void depositMoney(Account *acc, double amount) {
    if (acc != NULL && amount > 0) {
        acc->balance += amount;
    }
}

void printAccount(const Account *acc) {
    printf("Account #%d | Balance: $%.2lf\n", acc->accountNumber, acc->balance);
}
```

### 3. Main Driver File (`main.c`)
```c
#include <stdio.h>
#include "bank.h"

int main(void) {
    Account acc1 = {8801, 1000.00};
    depositMoney(&acc1, 500.00);
    printAccount(&acc1);
    return 0;
}
```

## 💡 Practical Project Example

Here is a multi-file compilation project layout.

### File 1: `bank.h` (Header Interface)
```c
#ifndef BANK_H
#define BANK_H

typedef struct {
    int id;
    char name[40];
    double balance;
} BankAccount;

// Function Prototypes
void initAccount(BankAccount *acc, int id, const char *name, double initialDeposit);
int withdraw(BankAccount *acc, double amount);
void displayAccount(const BankAccount *acc);

#endif // BANK_H
```

### File 2: `bank.c` (Implementation Source)
```c
#include <stdio.h>
#include <string.h>
#include "bank.h"

void initAccount(BankAccount *acc, int id, const char *name, double initialDeposit) {
    if (acc != NULL) {
        acc->id = id;
        strncpy(acc->name, name, sizeof(acc->name) - 1);
        acc->name[sizeof(acc->name) - 1] = '\0';
        acc->balance = (initialDeposit >= 0) ? initialDeposit : 0.0;
    }
}

int withdraw(BankAccount *acc, double amount) {
    if (acc != NULL && amount > 0 && acc->balance >= amount) {
        acc->balance -= amount;
        return 1; // Withdrawal successful
    }
    return 0; // Withdrawal failed (insufficient funds)
}

void displayAccount(const BankAccount *acc) {
    if (acc != NULL) {
        printf("ID: #%d | Name: %-15s | Balance: $%.2lf\n", acc->id, acc->name, acc->balance);
    }
}
```

### File 3: `main.c` (Driver Application)
```c
#include <stdio.h>
#include "bank.h"

int main(void) {
    BankAccount userAcc;

    printf("--- MODULAR BANKING SYSTEM ---\n");
    initAccount(&userAcc, 501, "Vikram Seth", 2500.00);
    displayAccount(&userAcc);

    printf("\nAttempting withdrawal of $500.00...\n");
    if (withdraw(&userAcc, 500.00)) {
        printf("Withdrawal approved!\n");
    } else {
        printf("Withdrawal declined due to insufficient funds.\n");
    }

    displayAccount(&userAcc);

    return 0;
}
```

### Compiling Multi-file Projects via GCC Command Line
```bash
# Compile all C source files together into a single executable binary
gcc -Wall -Wextra -std=c11 main.c bank.c -o banking_app

# Run Executable:
./banking_app
```

## 🔍 Code Breakdown & Linking Process

1. **Preprocessing:** `#include "bank.h"` in both `main.c` and `bank.c` copies the contents of `bank.h` into the translation unit before compilation.
2. **Compilation:** `gcc -c main.c` and `gcc -c bank.c` compile `.c` source files independently into machine object code files `main.o` and `bank.o`.
3. **Linking:** The **Linker** binds function calls in `main.o` (like `withdraw()`) to their matching function definition memory addresses inside `bank.o`, creating the final `banking_app` binary.

## 👀 Output

```text
--- MODULAR BANKING SYSTEM ---
ID: #501 | Name: Vikram Seth    | Balance: $2500.00

Attempting withdrawal of $500.00...
Withdrawal approved!
ID: #501 | Name: Vikram Seth    | Balance: $2000.00
```

## ⚠️ Common Mistakes

- **Including `.c` Files Instead of `.h` Files:** Writing `#include "bank.c"` in `main.c`. Including source files directly causes duplicate symbol definition errors during linking! Always `#include` header files (`.h`), never `.c` files.
- **Missing Header Guards:** Forgetting `#ifndef BANK_H` in header files. If multiple source files include `bank.h`, the compiler sees duplicate struct definitions and throws compilation errors.
- **Forgetting to Pass All `.c` Files to GCC:** Running `gcc main.c -o app` without including `bank.c` causes Linker errors (`undefined reference to 'withdraw'`).

## 🛡️ Simple Makefile for Multi-file Build Automation

A **Makefile** automates compiling multi-file projects so you don't have to type long `gcc` commands manually:

```makefile
# Makefile
CC = gcc
CFLAGS = -Wall -Wextra -std=c11

all: banking_app

banking_app: main.o bank.o
	$(CC) $(CFLAGS) main.o bank.o -o banking_app

main.o: main.c bank.h
	$(CC) $(CFLAGS) -c main.c

bank.o: bank.c bank.h
	$(CC) $(CFLAGS) -c bank.c

clean:
	rm -f *.o banking_app
```

## 🌍 Real-World Usage

Every major C library (OpenGL, SQLite, GTK, Linux Kernel drivers) uses multi-file architecture with public `.h` header interface files and hidden `.c` source implementations.

## 🧪 Try It Yourself

1. Create a `math_utils.h` header file containing prototype `int square(int x);`.
2. Create `math_utils.c` with the definition.
3. Create `main.c` that includes `math_utils.h`, calls `square(5)`, and print the result. Compile all files together.

## 🎯 Mini Challenge

Build a multi-file student grade project:
- `student.h`: Contains `typedef struct Student` and function prototypes.
- `student.c`: Contains functions to initialize student and calculate letter grade.
- `main.c`: Tests creating multiple students and printing their final report.

## 🔗 Related Topics

- [Functions](08-functions.md)
- [Structures](14-structures.md)
- [Preprocessor and Macros](18-preprocessor-and-macros.md)

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: CLI Arguments](20-command-line-arguments.md) | [Next: Error Handling →](22-error-handling.md)
