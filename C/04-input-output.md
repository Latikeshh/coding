# Input and Output in C

> 🟢 Beginner

## 📖 Definition

Input and Output (I/O) operations allow C programs to display formatted output to the user terminal (`stdout`) and read formatted user input from standard input stream (`stdin`) using standard C library functions declared in `<stdio.h>`.

## 🌐 Multilingual Explanation

### English
C uses functions from `<stdio.h>` for stream I/O. `printf()` formats and displays output. `scanf()` parses formatted user input and requires memory addresses (`&var`). For text strings containing spaces, `fgets()` is preferred over `scanf("%s")` to prevent buffer overflow vulnerabilities.

### Hindi
C stream I/O ke liye `<stdio.h>` functions ka use karta hai. `printf()` output formatted way mein dikhata hai. `scanf()` user input read karta hai aur isme address-of operator (`&var`) dena padta hai. Multi-word strings ke liye `fgets()` ka upyog karna chahiye taaki buffer overflow se bacha ja sake.

### Marathi
C madhye stream I/O sathi `<stdio.h>` mhadhil functions vaparali jatat. `printf()` output chaanglya format madhye dakhavate. `scanf()` user input vachnyasathi vaparatat aani tyasathi variable cha address (`&var`) dyava lagto. Full text inputs sathi `fgets()` vaparane safe aste.

### Hinglish
`printf()` terminal output dikhane ke liye hai aur `scanf()` user input padhne ke liye. `scanf()` mein primitive types ke sath `&` (address-of) lagana zaroori hota hai. Multi-word string inputs ke liye `scanf("%s")` unsafe hai, safe alternative `fgets()` hai.

## 🤔 Why Do We Use It?

Interactive software must receive inputs from users (such as account login details, transaction amounts, menu selections) and display feedback, error messages, and calculation results back on screen.

## 🧠 Simple Explanation

Think of `printf` as a megaphone broadcasting messages to the screen. Think of `scanf` and `fgets` as a mailbox listener waiting for the user to type something on the keyboard and press Enter.

## 📝 Key Input/Output Functions

| Function | Purpose | Input/Output | Notes |
|---|---|---|---|
| `printf()` | Prints formatted text to console | Output | Uses format specifiers (`%d`, `%f`, `%c`, `%s`) |
| `scanf()` | Parses formatted primitives from keyboard | Input | Requires `&` for non-array variables; returns success count |
| `fgets()` | Reads a full line of text safely | Input | Specifies maximum buffer size to prevent memory overflows |
| `getchar()` | Reads a single character | Input | Reads next byte from `stdin` |
| `putchar()` | Writes a single character | Output | Writes one byte to `stdout` |
| `puts()` | Writes a string with an automatic newline | Output | Simpler alternative to `printf("%s\n", str)` |

## 💡 Practical Example

Here is a practical user registration program that demonstrates safe string reading, integer input validation, and character stream handling:

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char fullName[50];
    int userAge;
    double monthlySalary;

    // 1. Safe String Input using fgets
    printf("Enter your full name: ");
    if (fgets(fullName, sizeof(fullName), stdin) != NULL) {
        // Strip trailing newline character added by fgets
        fullName[strcspn(fullName, "\n")] = '\0';
    }

    // 2. Formatted Integer Input with validation
    printf("Enter your age: ");
    if (scanf("%d", &userAge) != 1 || userAge <= 0) {
        printf("Error: Invalid age entered!\n");
        return 1; // Exit with error code
    }

    // 3. Formatted Floating Point Input with validation
    printf("Enter monthly salary ($): ");
    if (scanf("%lf", &monthlySalary) != 1 || monthlySalary < 0) {
        printf("Error: Invalid salary entered!\n");
        return 1;
    }

    // 4. Formatted Summary Display
    printf("\n--- REGISTRATION CONFIRMATION ---\n");
    printf("Full Name     : %s\n", fullName);
    printf("Age           : %d years\n", userAge);
    printf("Monthly Salary: $%.2lf\n", monthlySalary);
    printf("Status        : Verified\n");

    return 0;
}
```

## 🔍 Code Breakdown

- `fgets(fullName, sizeof(fullName), stdin)`: Reads up to 49 characters plus the null terminator directly into `fullName` from standard input (`stdin`). This guarantees that user input never overflows array memory.
- `fullName[strcspn(fullName, "\n")] = '\0'`: `strcspn` locates the position of the newline character `\n` captured by `fgets` and replaces it with `\0` (null terminator).
- `if (scanf("%d", &userAge) != 1)`: `scanf()` returns the total number of items successfully scanned. Checking if the return value is `1` verifies that the user entered a valid integer rather than letters.
- `&userAge`: The address-of operator `&` provides `scanf` with the exact memory address where the converted integer should be stored.

## 👀 Output

```text
Enter your full name: Priya Sharma
Enter your age: 26
Enter monthly salary ($): 4500.50

--- REGISTRATION CONFIRMATION ---
Full Name     : Priya Sharma
Age           : 26 years
Monthly Salary: $4500.50
Status        : Verified
```

## ⚠️ Common Mistakes

- **Forgetting `&` in `scanf`:** Writing `scanf("%d", userAge)` instead of `scanf("%d", &userAge)` causes segmentation faults because `scanf` treats the uninitialized value of `userAge` as a memory address!
- **Unbounded `scanf("%s")`:** `scanf("%s", buffer)` stops reading at spaces and does NOT check buffer bounds. Typing a long string will overwrite adjacent memory and cause security buffer overflow vulnerabilities.
- **Leftover Newline in `stdin`:** After calling `scanf("%d", &age)`, pressing Enter leaves a `\n` character in the keyboard input buffer. Calling `fgets()` immediately afterwards will read that leftover `\n` as an empty line!
  - *Fix:* Clear leftover input buffer characters before calling `fgets()` using `while (getchar() != '\n' && getchar() != EOF);`.

## 🛡️ Safety / Important Notes

- Always check the return value of `scanf()` to prevent uninitialized variable usage when user inputs invalid data.
- Never use legacy unsafe functions like `gets()` (removed from C11 standard entirely).

## 🌍 Real-World Usage

CLI applications, database tools, interactive shell commands (like `git`, `docker`, `gcc`), and embedded terminal menus rely on structured C stream I/O.

## 🧪 Try It Yourself

1. Write a program that asks the user for a product name (`fgets`), quantity (`scanf`), and unit price (`scanf`).
2. Calculate total bill amount (`quantity * unitPrice`) and display a clean receipt.

## 🎯 Mini Challenge

Write a program that inputs a temperature in Celsius from the user, validates that the input is a valid number, converts it to Fahrenheit (`(C * 9.0 / 5.0) + 32.0`), and prints both values formatted to 1 decimal place.

## 🔗 Related Topics

- [Variables and Data Types](03-variables-and-data-types.md)
- [Operators](05-operators.md)
- [Conditionals](06-conditionals.md)

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Variables](03-variables-and-data-types.md) | [Next: Operators →](05-operators.md)
