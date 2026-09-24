# Strings in C (`<string.h>`)

> 🟡 Intermediate

## 📖 Definition

In C, a **string** is not a primitive data type; it is represented as a 1D array of characters terminated by a special ASCII null character `'\0'` (null terminator). The null terminator signals the end of the string in computer memory.

## 🌐 Multilingual Explanation

### English
Strings in C are null-terminated character arrays (`char[]`). The null terminator `'\0'` marks the end of string data in memory. String literals like `"Hello"` are read-only constants in memory. Always allocate `length + 1` bytes to store `'\0'`. Use `<string.h>` functions (`strlen`, `strcpy`, `strcat`, `strcmp`) and prefer `fgets()` over unsafe `scanf("%s")`.

### Hindi
C mein string alag data type nahi balki null-terminated character array (`char[]`) hota hai. Memory mein string ka anth `'\0'` (null character) se hota hai. Isliye `N` length ki string ke liye `N + 1` bytes allocate karne padte hain. Safe string reading ke liye `fgets()` ka upyog karein aur `<string.h>` library functions use karein.

### Marathi
C madhye string mhanje null-terminated character array (`char[]`) asto. Memory madhye string cha shevut `'\0'` ne hoto. String sathavanyasathi `length + 1` size cha array lagto. Read-only literals aani writable arrays madhye farak samajhane garjeche aahe. `<string.h>` vaprūn string operations kele jatat.

### Hinglish
C strings character arrays hote hain jinke end mein `'\0'` hota hai. `scanf("%s")` unsafe hai kyunki woh spaces par stop ho jata hai aur bounds check nahi karta. Text inputs ke liye `fgets(buf, sizeof(buf), stdin)` use karo aur trailing `\n` character clean karo.

## 🤔 Why Do We Use Them?

Text processing is essential in software: reading usernames, formatting email messages, parsing command line inputs, processing JSON strings, and generating log files.

## 🧠 Simple Explanation

Think of a string in C like a train of letter carriages:
- Each carriage holds one letter (`'H'`, `'e'`, `'l'`, `'l'`, `'o'`).
- The last carriage is a special guard caboose containing `'\0'` that tells C "The train ends here!".
- Without the caboose `'\0'`, functions like `printf("%s")` keep reading adjacent memory forever!

## 📝 Syntax & Standard `<string.h>` Functions

```c
// Writable character array (allocated on Stack)
char name[20] = "Alice"; // Automatically inserts '\0' at index 5

// Read-only string literal pointer (allocated in Code Segment)
const char *title = "Software Engineer";
```

### Essential Functions in `<string.h>`
| Function | Purpose | Example |
|---|---|---|
| `strlen(str)` | Returns string length (excluding `'\0'`) | `strlen("C Code")` -> `6` |
| `strcpy(dest, src)` | Copies `src` string to `dest` buffer | `strcpy(buf, "Hello")` |
| `strncpy(dest, src, n)` | Safer bounded string copy | `strncpy(buf, src, sizeof(buf) - 1)` |
| `strcat(dest, src)` | Concatenates `src` onto end of `dest` | `strcat(buf, " World")` |
| `strcmp(str1, str2)` | Compares 2 strings lexicographically | Returns `0` if strings are equal |
| `strchr(str, ch)` | Finds first occurrence of character `ch` | Returns pointer to char or `NULL` |
| `strstr(str, sub)` | Finds first occurrence of substring `sub` | Returns pointer to match or `NULL` |

## 💡 Practical Example

Here is a practical user profile processor demonstrating string input, null terminator trimming, concatenation, string comparison, and substring searching:

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char firstName[30];
    char lastName[30];
    char fullName[70] = ""; // Initialize empty string
    char searchDomain[] = "gmail.com";
    char userEmail[50];

    printf("--- USER REGISTRATION MODULE ---\n");

    // 1. Reading strings safely using fgets
    printf("Enter First Name: ");
    if (fgets(firstName, sizeof(firstName), stdin) != NULL) {
        firstName[strcspn(firstName, "\n")] = '\0'; // Trim '\0'
    }

    printf("Enter Last Name : ");
    if (fgets(lastName, sizeof(lastName), stdin) != NULL) {
        lastName[strcspn(lastName, "\n")] = '\0';
    }

    // 2. String Concatenation using strncat
    strncat(fullName, firstName, sizeof(fullName) - strlen(fullName) - 1);
    strncat(fullName, " ", sizeof(fullName) - strlen(fullName) - 1);
    strncat(fullName, lastName, sizeof(fullName) - strlen(fullName) - 1);

    printf("\nFull Name      : %s\n", fullName);
    printf("Full Name Length: %zu characters\n", strlen(fullName));

    // 3. String Comparison using strcmp
    printf("\nEnter Email Address: ");
    if (fgets(userEmail, sizeof(userEmail), stdin) != NULL) {
        userEmail[strcspn(userEmail, "\n")] = '\0';
    }

    // 4. Substring Search using strstr
    char *domainMatch = strstr(userEmail, searchDomain);
    if (domainMatch != NULL) {
        printf("Verification   : Valid %s domain email address detected!\n", searchDomain);
    } else {
        printf("Verification   : Non-%s email address detected.\n", searchDomain);
    }

    return 0;
}
```

## 🔍 Code Breakdown

- `strcspn(firstName, "\n")`: Returns the index of the first occurrence of `\n` in `firstName`. Setting `firstName[...] = '\0'` cleanly strips the newline character captured by `fgets()`.
- `strncat(fullName, firstName, ...)`: Appends `firstName` onto `fullName` up to specified maximum remaining capacity, preventing buffer overflow.
- `strcmp(str1, str2)`: Returns `0` if both strings match character for character, a negative value if `str1 < str2`, and a positive value if `str1 > str2`.
- `strstr(userEmail, searchDomain)`: Searches for `searchDomain` inside `userEmail`. If found, returns a pointer to the start of the substring match; otherwise returns `NULL`.

## 👀 Output

```text
--- USER REGISTRATION MODULE ---
Enter First Name: Rahul
Enter Last Name : Verma

Full Name      : Rahul Verma
Full Name Length: 11 characters

Enter Email Address: rahul.verma@gmail.com
Verification   : Valid gmail.com domain email address detected!
```

## ⚠️ Common Mistakes

- **Buffer Overflow (Insufficient Array Size):** Declaring `char str[5] = "Hello";` fails because `"Hello"` requires 6 bytes (`'H','e','l','l','o','\0'`). Missing `'\0'` leads to memory corruption when passing `str` to string functions!
- **Comparing Strings with `==`:** Writing `if (str1 == str2)` compares memory addresses of the character buffers, NOT the string text! Always use `strcmp(str1, str2) == 0` for string equality testing.
- **Modifying Read-Only String Literals:** Writing `char *str = "Read Only"; str[0] = 'W';` crashes with a Segmentation Fault because string literals reside in read-only memory. Use character arrays (`char str[] = "Writable";`) for editable strings.

## 🛡️ Safety / Important Notes

- Always allocate `N + 1` bytes for a string of maximum length `N` to accommodate the null terminator `'\0'`.
- Never use `strcpy` or `strcat` with untrusted input sizes; prefer bounded alternatives (`strncpy`, `strncat`) or calculate buffer lengths explicitly.

## 🌍 Real-World Usage

String operations handle HTTP headers in web servers, SQL query parsing, file path manipulations in shell utilities, configuration file reading (`.env`/`.ini`), and CLI argument parsing.

## 🧪 Try It Yourself

1. Declare two string arrays: `str1[20] = "Coding"` and `str2[20] = "Coding"`.
2. Compare them using `strcmp()` and print whether they are identical.

## 🎯 Mini Challenge

Write a function `void reverseString(char str[])` that reverses a string in-place (e.g. converts `"C Language"` to `"egaugnaL C"`) by swapping characters from ends toward the center. Test it in `main()`.

## 🔗 Related Topics

- [Input and Output](04-input-output.md)
- [Arrays](09-arrays.md)
- [Pointers Basics](10-pointers-basics.md)

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Advanced Pointers](11-advanced-pointers.md) | [Next: Dynamic Memory Allocation →](13-dynamic-memory-allocation.md)
