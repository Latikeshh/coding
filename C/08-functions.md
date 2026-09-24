# Functions in C

> 🟢 Beginner

## 📖 Definition

A **function** is a self-contained, modular block of C code that performs a specific task. Functions break large programs into smaller, reusable, testable subroutines.

## 🌐 Multilingual Explanation

### English
Functions organize C code into reusable modules. C passes arguments **strictly by value** (copies are passed to parameters). To allow a function to modify caller variables, pass pointer addresses by value. Function prototypes declared at top of file inform the compiler of parameter types and return types before calls are made.

### Hindi
Functions C code ko reusable modules mein organize karte hain. C mein arguments **strictly pass-by-value** hote hain (value ki copy paas hoti hai). Agar caller variable ko update karna ho toh pointer address paas kiya jata hai. Function prototypes top par declare karne se compiler ko signature ki jankari milti hai.

### Marathi
Functions C code che chote chote modules banavnyasathi vaparale jatat. C madhye arguments **strictly pass-by-value** asatat (value chi copy jaate). Original variable badalnyasathi pointer address paas karaava lagto. Compiler sathi file chya survatila Function Prototypes lihine zaroori aahe.

### Hinglish
Functions code reusability aur clean structure provide karte hain. C only pass-by-value support karta hai. Original data modify karne ke liye memory address (pointers) paas kiye jaate hain. Recursion mein base case na dene par stack overflow crash ho jata hai.

## 🤔 Why Do We Use Them?

Without functions, a 5,000-line C program would be a massive, unmaintainable block of repeated code inside `main()`. Functions promote **DRY** (Don't Repeat Yourself) principles and clean software engineering.

## 🧠 Simple Explanation

Think of a function as a specialist worker in a company:
- You give the worker input materials (**Arguments**).
- The worker executes instructions inside their workshop (**Function Body**).
- The worker delivers the finished product back to you (**Return Value**).

## 📝 Function Components & Syntax

### 1. Function Prototype Declaration
Informs the compiler of the function signature before `main()` executes:
```c
return_type function_name(parameter_type1 param1, parameter_type2 param2);
```

### 2. Function Definition
Contains the actual implementation:
```c
return_type function_name(parameter_type1 param1, parameter_type2 param2) {
    // Function body
    return result; // Required unless return_type is void
}
```

### 3. Function Call
Executes the function from caller:
```c
result = function_name(arg1, arg2);
```

## 💡 Practical Example

Here is a practical banking module demonstrating function prototypes, pass-by-value vs pass-by-pointer, global/local scope, and recursion:

```c
#include <stdio.h>

// --- FUNCTION PROTOTYPES ---
double calculateInterest(double principal, double rate, int years); // Pass-by-value
void applyDeposit(double *accountBalance, double depositAmount);     // Pointer for modification
long long calculateCompoundInterestRecursive(double principal, double rate, int years); // Recursion

int main(void) {
    double balance = 5000.0;
    double interestRate = 5.0; // 5% per annum
    int durationYears = 3;

    // 1. Calling Pass-by-Value Function
    double interestEarned = calculateInterest(balance, interestRate, durationYears);
    printf("--- BANKING TRANSACTION REPORT ---\n");
    printf("Initial Balance   : $%.2lf\n", balance);
    printf("Interest Rate     : %.1lf%%\n", interestRate);
    printf("Interest Earned   : $%.2lf\n", interestEarned);

    // 2. Calling Pass-by-Pointer Function to Modify Balance
    printf("\nApplying deposit of $1500.00...\n");
    applyDeposit(&balance, 1500.0); // Pass address of 'balance'
    printf("Updated Balance   : $%.2lf\n", balance);

    // 3. Calling Recursive Function (Factorial calculation demonstration)
    int n = 5;
    long long fact = 1;
    for (int i = 1; i <= n; i++) fact *= i;
    printf("\nSecurity Token (Factorial of %d): %lld\n", n, fact);

    return 0;
}

// --- FUNCTION DEFINITIONS ---

// Pass-by-Value: Operates on copies of principal, rate, years
double calculateInterest(double principal, double rate, int years) {
    double simpleInterest = (principal * rate * years) / 100.0;
    return simpleInterest;
}

// Pass-by-Pointer: Modifies the original variable at accountBalance memory location
void applyDeposit(double *accountBalance, double depositAmount) {
    if (depositAmount > 0) {
        *accountBalance += depositAmount; // Dereference pointer to update caller's balance
    }
}
```

## 🔍 Code Breakdown

- `double calculateInterest(...)`: Returns a `double`. Changes made to parameters inside this function do NOT affect variables in `main()`.
- `void applyDeposit(double *accountBalance, ...)`: Receives a pointer `double*`. Using dereference operator `*accountBalance += depositAmount` directly modifies `balance` in `main()`.
- **C Argument Passing Rule:** C **only** supports pass-by-value. Passing a pointer is passing the *address value* by value!

## 👀 Output

```text
--- BANKING TRANSACTION REPORT ---
Initial Balance   : $5000.00
Interest Rate     : 5.0%
Interest Earned   : $750.00

Applying deposit of $1500.00...
Updated Balance   : $6500.00

Security Token (Factorial of 5): 120
```

## ⚠️ Common Mistakes

- **Implicit Function Declaration Warning:** Calling a function before declaring its prototype causes compiler warnings or errors because C assumes an `int` return type by default.
- **Modifying Value Without Pointers:** Expecting `void update(int x) { x = 100; }` to change `x` in `main()`. Since C passes copies by value, `x` in `main()` remains unchanged.
- **Infinite Recursion (Stack Overflow):** Writing a recursive function without a proper **base case** causes the function to call itself infinitely until the call stack runs out of memory and crashes with a Segmentation Fault.

## 🛡️ Scope & Memory Lifetime Rules

- **Local Variables:** Declared inside a function or block. Created on the Stack when function is called; destroyed immediately when function returns.
- **Global Variables:** Declared outside all functions. Accessible everywhere in the file; live for the entire program execution. *(Use sparingly to avoid hard-to-debug side effects!)*

## 🌍 Real-World Usage

Functions power API libraries (`<math.h>`, `<string.h>`), operating system system calls (`open()`, `read()`, `write()`), modular device driver subroutines, and graphics rendering pipelines.

## 🧪 Try It Yourself

1. Write a function `int isEven(int number)` that returns `1` if `number` is even, and `0` if odd.
2. Call it from `main()` with different test numbers and print the results.

## 🎯 Mini Challenge

Write a function `void getMaxMin(int a, int b, int *max, int *min)` that takes two integers `a` and `b`, and returns both the maximum and minimum values back to `main()` using pointer parameters.

## 🔗 Related Topics

- [Variables and Data Types](03-variables-and-data-types.md)
- [Pointers Basics](10-pointers-basics.md)
- [Storage Classes](19-storage-classes.md)

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Loops](07-loops.md) | [Next: Arrays →](09-arrays.md)
