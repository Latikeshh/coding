# Variables and Data Types in C

> 🟢 Beginner

## 📖 Definition

In C, a **variable** is a named storage location in memory used to hold data that can be read or modified during execution. C is a **statically typed** language, meaning every variable must be declared with an explicit **data type** before it can be used.

## 🌐 Multilingual Explanation

### English
Variables store values in memory. C requires declaring variable types (`int`, `float`, `double`, `char`) at compile time. Format specifiers (like `%d`, `%f`, `%c`, `%zu`) tell functions like `printf` how to interpret and display variable bytes in memory.

### Hindi
Variables memory mein data store karne ki jagah hoti hain. C ek statically typed language hai, isliye variable use karne se pehle uska type (`int`, `float`, `double`, `char`) tay karna padta hai. `printf` mein sahi format specifier (jaise `%d`, `%f`, `%c`, `%zu`) likhna zaroori hai.

### Marathi
Variables mhanje memory madhye data sathavanyachi jaga. C madhye pratyek variable vaparanyapūrvi tyacha data type (`int`, `float`, `double`, `char`) sangana lagto. `printf` vapartanā yogya format specifier (`%d`, `%f`, `%c`, `%zu`) vaparane avashyak aahe.

### Hinglish
Variables memory blocks hote hain jisme hum values store karte hain. C static typing follow karta hai, toh variable declare karte waqt data type dena mandatory hota hai. Output format karne ke liye matching format specifiers (`%d`, `%f`, `%c`, `%zu`) use kiye jaate hain.

## 🤔 Why Do We Use Them?

Rather than hardcoding fixed raw numbers or characters into instructions, variables allow programs to process dynamic user inputs, track inventory, store student records, calculate account balances, and manage hardware state.

## 🧠 Simple Explanation

Think of memory as a huge warehouse filled with storage boxes.
- A **Variable Name** is the text label stuck on the box (e.g., `accountBalance`).
- A **Data Type** is the size and shape of the box (e.g., an `int` box holds whole numbers, a `float` box holds decimal values).
- The **Value** is what you put inside the box.

## 📝 Primitive Data Types in ISO C

The exact size of data types in C depends on the target hardware architecture and compiler implementation (C standard specifies minimum ranges, not fixed byte counts).

| Data Type | Keyword | Typical Size (64-bit Systems) | Format Specifier | Range / Purpose |
|---|---|---|---|---|
| Character | `char` | 1 byte (8 bits) | `%c` | Single character or small integer (`-128` to `127`) |
| Unsigned Character | `unsigned char` | 1 byte (8 bits) | `%c` or `%u` | `0` to `255` (Raw binary byte) |
| Short Integer | `short` | 2 bytes (16 bits) | `%hd` | Small whole numbers (`-32,768` to `32,767`) |
| Integer | `int` | 4 bytes (32 bits) | `%d` or `%i` | Standard whole numbers (`-2.14B` to `+2.14B`) |
| Unsigned Integer | `unsigned int` | 4 bytes (32 bits) | `%u` | Non-negative integers (`0` to `4,294,967,295`) |
| Long Integer | `long` | 4 or 8 bytes | `%ld` | Large whole numbers |
| Long Long Integer | `long long` | 8 bytes (64 bits) | `%lld` | Extremely large integers (`-9 * 10^18` to `+9 * 10^18`) |
| Single Precision Float | `float` | 4 bytes | `%f` | Floating point decimals (6-7 decimal digits) |
| Double Precision Float | `double` | 8 bytes | `%lf` | High precision decimals (15-17 decimal digits) |
| Boolean | `_Bool` / `bool` | 1 byte | `%d` | `0` (`false`) or `1` (`true`) (requires `<stdbool.h>`) |
| Size Type | `size_t` | 4 or 8 bytes | `%zu` | Unsigned type used for memory sizes and `sizeof` |

## 💡 Practical Example

Here is a realistic program tracking bank account details and product information:

```c
#include <stdio.h>
#include <stdbool.h>

int main(void) {
    // Variable Declarations and Initializations
    int accountId = 88402;
    double accountBalance = 15450.75;
    float interestRate = 4.5f;
    char accountTier = 'P'; // 'P' for Premium
    bool isActive = true;

    // Displaying values using appropriate format specifiers
    printf("--- BANK ACCOUNT STATEMENT ---\n");
    printf("Account ID     : %d\n", accountId);
    printf("Account Balance: $%.2lf\n", accountBalance);
    printf("Interest Rate  : %.1f%%\n", interestRate);
    printf("Account Tier   : %c\n", accountTier);
    printf("Account Active : %s\n", isActive ? "Yes" : "No");

    // Demonstrating sizeof operator for memory sizes
    printf("\n--- MEMORY SIZE REPORT ---\n");
    printf("Size of int    : %zu bytes\n", sizeof(int));
    printf("Size of double : %zu bytes\n", sizeof(double));
    printf("Size of float  : %zu bytes\n", sizeof(float));
    printf("Size of char   : %zu bytes\n", sizeof(char));
    printf("Size of bool   : %zu bytes\n", sizeof(bool));

    return 0;
}
```

## 🔍 Code Breakdown

- `double accountBalance = 15450.75;`: Declares a double-precision floating-point variable.
- `float interestRate = 4.5f;`: The `f` suffix tells the compiler this literal is a single-precision `float` (without `f`, decimal literals default to `double`).
- `sizeof(...)`: Unary operator that returns the memory consumption of a type or variable in bytes as a `size_t`.
- `%zu`: The ISO C standard format specifier used to print `size_t` values returned by `sizeof`.
- `%.2lf`: Formats a `double` output to exactly 2 decimal places.

## 👀 Output

```text
--- BANK ACCOUNT STATEMENT ---
Account ID     : 88402
Account Balance: $15450.75
Interest Rate  : 4.5%
Account Tier   : P
Account Active : Yes

--- MEMORY SIZE REPORT ---
Size of int    : 4 bytes
Size of double : 8 bytes
Size of float  : 4 bytes
Size of char   : 1 bytes
Size of bool   : 1 bytes
```

## ⚠️ Common Mistakes

- **Wrong Format Specifier:** Printing a `float` with `%d` or an `int` with `%f` produces garbage values or output errors.
- **Single vs Double Quotes:** Using double quotes for characters (`char c = "A";`) assigns a string pointer to a `char`, causing a compilation warning/error. Characters must use single quotes (`'A'`).
- **Assuming Fixed Byte Sizes:** Assuming `int` is always 4 bytes or `long` is always 8 bytes across all platforms. Use `sizeof` or fixed-width integer types (`<stdint.h>` like `int32_t`, `int64_t`) when exact bit widths matter.
- **ASCII Assumption:** C `char` stores integer code points corresponding to the execution character set. While ASCII is standard on modern platforms, assuming every system character is ASCII can lead to encoding issues.

## 🛡️ Safety / Important Notes

- **Uninitialized Variables:** Local variables declared inside functions contain whatever random garbage data was previously left in that memory location. Always initialize variables before reading them!
  ```c
  int score; // Garbage value!
  printf("%d", score); // Undefined behavior!
  ```

## 🌍 Real-World Usage

Data types dictate memory alignment and cache efficiency in performance-critical software. For instance, graphics engines use 4-byte `float` for vector coordinates, while banking software uses 64-bit `long long` or fixed-point representations to eliminate floating-point rounding errors.

## 🧪 Try It Yourself

1. Write a C program that stores a student's `rollNumber` (`int`), `grade` (`char`), and `gpa` (`float`).
2. Print all three variables cleanly formatted.

## 🎯 Mini Challenge

Write a program that uses `sizeof` to display the memory sizes of `short`, `int`, `long`, `long long`, `float`, `double`, and `long double` on your operating system.

## 🔗 Related Topics

- [Set Up C Environment](01-setup-c.md)
- [Input and Output](04-input-output.md)
- [Operators](05-operators.md)

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Introduction](02-introduction-to-c.md) | [Next: Input & Output →](04-input-output.md)
