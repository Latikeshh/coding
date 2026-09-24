# Command Line Arguments (`argc`, `argv`)

> 🟡 Intermediate

## 📖 Definition

**Command Line Arguments** pass inputs directly into a C application from the terminal shell when launching the executable binary. In C, these parameters are received in `main()` via `int argc` (argument count) and `char *argv[]` (argument vector array of string pointers).

## 🌐 Multilingual Explanation

### English
Command line arguments pass parameters to `main(int argc, char *argv[])`. `argc` contains the total argument count (including program executable path at `argv[0]`). `argv[]` is an array of string pointers (`char*`). Always validate `argc` before accessing `argv` array elements. Prefer `strtol()` over `atoi()` for converting string arguments to numbers because `strtol()` provides error detection for invalid non-numeric inputs.

### Hindi
Terminal shell se C program chalate waqt inputs dene ke liye Command Line Arguments ka use hota hai. `main(int argc, char *argv[])` in inputs ko receive karta hai. `argc` total arguments ki count batata hai (jisne `argv[0]` par program name hota hai). Numbers mein conversion ke liye `atoi()` ki jagah `strtol()` ka use karein kyunki `strtol()` invalid input error check karta hai.

### Marathi
Terminal varun program chalavatana parameters denyasathi Command Line Arguments vaparale jatat. `argc` arguments chi sankhya sangto (`argv[0]` madhye program cha path asto). `argv[]` madhye sarv arguments text (string) swarupat asatat. Strings che numbers madhye rupantar karanyasathi `atoi()` peksha `strtol()` vaparane jasta surakshit aahe.

### Hinglish
CLI tools (jaise `gcc`, `git`, `curl`) command line arguments se operate hote hain. `argv[0]` par hamesha executable ka name/path hota hai, isliye real user parameters `argv[1]` se start hote hain. Raw `atoi(argv[1])` unsafe hota hai kyunki invalid text paas hone par woh `0` return karta hai aur error detect nahi karta. Safe conversion ke liye `strtol()` use karo.

## 🤔 Why Do We Use Them?

CLI utilities like `gcc -Wall main.c -o app` or `git commit -m "Init"` do not prompt users interactively with `printf`/`scanf`. Command line arguments allow automation in shell scripts and terminal pipelines.

## 🧠 Simple Explanation

Think of launching a C executable like ordering food at a drive-thru:
- `argv[0]` is the name of the drive-thru restaurant (`./calculator`).
- `argv[1]` is the first item ordered (`"10"`).
- `argv[2]` is the second item ordered (`"25"`).
- `argc` is the total count of items on the receipt (`3`).

## 📝 Syntax & Mechanics

```c
int main(int argc, char *argv[]) {
    // argc: Total number of arguments passed (argc >= 1)
    // argv[0]: Executable name or invocation path string
    // argv[1]: First command line argument passed by user
    // argv[argc - 1]: Last argument passed
    return 0;
}
```

### Safe Numeric String Conversion: `strtol()` vs `atoi()`
- **`atoi(str)`:** Legacy function. Returns `0` on invalid inputs like `"abc"`, making it impossible to distinguish between the number `0` and an invalid string error!
- **`strtol(str, &endptr, base)`:** Modern safe standard function. Sets `endptr` to point to the first invalid character, allowing precise error validation.

## 💡 Practical Example

Here is a practical command line calculator utility demonstrating `argc` validation, safe numeric string conversion using `strtol`, and usage help formatting:

```c
#include <stdio.h>
#include <stdlib.h>
#include <errno.h>

int main(int argc, char *argv[]) {
    printf("--- COMMAND LINE CALCULATOR UTILITY ---\n");

    // 1. Argument Count Validation
    // Expecting 4 arguments: executable_name num1 operator num2
    if (argc != 4) {
        printf("Usage: %s <num1> <+|-|x|/> <num2>\n", argv[0]);
        printf("Example: %s 15 x 4\n", argv[0]);
        return 1; // Exit with error code
    }

    // 2. Safe String to Long Integer Conversion using strtol
    char *endPtr1;
    errno = 0; // Reset global error number
    long num1 = strtol(argv[1], &endPtr1, 10);

    // Validate if argv[1] was a valid number
    if (*endPtr1 != '\0' || errno != 0) {
        printf("Error: First argument '%s' is not a valid integer!\n", argv[1]);
        return 1;
    }

    char operator = argv[2][0]; // First character of operator argument

    char *endPtr2;
    errno = 0;
    long num2 = strtol(argv[3], &endPtr2, 10);

    if (*endPtr2 != '\0' || errno != 0) {
        printf("Error: Third argument '%s' is not a valid integer!\n", argv[3]);
        return 1;
    }

    // 3. Performing Selected Calculation
    long result = 0;
    switch (operator) {
        case '+':
            result = num1 + num2;
            printf("Calculation: %ld + %ld = %ld\n", num1, num2, result);
            break;
        case '-':
            result = num1 - num2;
            printf("Calculation: %ld - %ld = %ld\n", num1, num2, result);
            break;
        case 'x':
        case '*':
            result = num1 * num2;
            printf("Calculation: %ld x %ld = %ld\n", num1, num2, result);
            break;
        case '/':
            if (num2 == 0) {
                printf("Error: Division by zero is undefined!\n");
                return 1;
            }
            printf("Calculation: %ld / %ld = %.2lf\n", num1, num2, (double)num1 / num2);
            break;
        default:
            printf("Error: Unsupported operator '%c'! Use +, -, x, or /.\n", operator);
            return 1;
    }

    return 0;
}
```

## 🔍 Code Breakdown

- `if (argc != 4)`: Verifies that the user provided exactly 3 arguments after the program invocation name.
- `strtol(argv[1], &endPtr1, 10)`: Converts string `argv[1]` in base 10. If `argv[1]` is `"150"`, `endPtr1` points to `'\0'` (successful). If `argv[1]` is `"150abc"`, `endPtr1` points to `'a'`, signaling an invalid format error!
- `argv[0]`: Dynamically prints the name/path of the executable program in help usage instructions (`Usage: ./calc ...`).

## 👀 Output

### Running with Incorrect Arguments (`./calc 10 +`):
```text
--- COMMAND LINE CALCULATOR UTILITY ---
Usage: ./calc <num1> <+|-|x|/> <num2>
Example: ./calc 15 x 4
```

### Running with Valid Arguments (`./calc 25 x 4`):
```text
--- COMMAND LINE CALCULATOR UTILITY ---
Calculation: 25 x 4 = 100
```

### Running with Invalid Numeric Text (`./calc 25 x abc`):
```text
--- COMMAND LINE CALCULATOR UTILITY ---
Error: Third argument 'abc' is not a valid integer!
```

## ⚠️ Common Mistakes

- **Accessing `argv[1]` Without Checking `argc`:** Running `./calc` without arguments and accessing `argv[1]` dereferences a `NULL` pointer (or invalid memory), crashing immediately with a Segmentation Fault! Always check `if (argc >= 2)` first.
- **Relying Exclusively on `atoi()`:** `atoi("invalid")` returns `0` silently without reporting any parsing failure, leading to silent calculation bugs in CLI applications.
- **Shell Wildcard Expansion with `*`:** Passing `*` as an operator on Linux/macOS shell (`./calc 10 * 5`) causes the shell to expand `*` into a list of all files in current directory before passing arguments to C! Use `x` or escape `\*` (`./calc 10 \* 5`).

## 🛡️ Safety / Important Notes

- All items in `argv[]` are string pointers (`char*`). Always convert arguments to numeric types (`strtol`, `strtod`) before performing math operations.
- `argv[argc]` is guaranteed by the ISO C standard to be a `NULL` pointer.

## 🌍 Real-World Usage

Command line argument parsing powers core UNIX CLI utilities (`ls`, `grep`, `cat`, `gcc`, `make`), system services, containers (`docker run`), build toolchains, and automated test harnesses.

## 🧪 Try It Yourself

1. Write a C program that receives a filename as a command line argument (`argv[1]`).
2. Verify `argc == 2`, open the file using `fopen()`, and print a message confirming whether the file exists.

## 🎯 Mini Challenge

Write a CLI program named `greet` that accepts optional flag `--uppercase` or `-u` as `argv[1]` and a name string as `argv[2]`. If the flag is present, convert and print the name in uppercase letters; otherwise print it normally.

## 🔗 Related Topics

- [Input and Output](04-input-output.md)
- [Strings](12-strings.md)
- [Error Handling](22-error-handling.md)

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Storage Classes](19-storage-classes.md) | [Next: Multi-file Projects →](21-multi-file-projects.md)
