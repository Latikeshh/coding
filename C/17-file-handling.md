# File Handling (`fopen`, `fread`, `fwrite`)

> 🔴 Advanced

## 📖 Definition

**File Handling** in C allows programs to create, read, update, and delete files on disk storage. Using stream pointers (`FILE*`) declared in `<stdio.h>`, data can be persisted across program executions in either **Text** or **Binary** formats.

## 🌐 Multilingual Explanation

### English
C file handling manages file streams via `FILE*` pointers. Use `fopen()` with mode strings (`"r"`, `"w"`, `"a"`, `"rb"`, `"wb"`) to open files. Always verify that the file pointer is non-null (`fp != NULL`) before reading or writing. Use `fprintf`/`fgets` for text files and `fread`/`fwrite` for binary files. Always close file streams with `fclose()`.

### Hindi
C mein file handling disk storage par data permanent save karne ke liye `FILE*` stream pointer ka upyog karti hai. File kholne ke liye `fopen(filename, mode)` use karein. Operation shuru karne se pehle `if (fp == NULL)` check karna zaroori hai. Text file ke liye `fprintf`/`fgets` aur binary data ke liye `fread`/`fwrite` use karein. Operation ke baad `fclose(fp)` karna zaroori hai.

### Marathi
Disk var data kayamswapi sathavanyasathi C madhye `FILE*` stream pointer vaparla jato. File ughadnyasathi `fopen(filename, mode)` vaparatat. File open jhali ki nahi he pahanyasathi `fp != NULL` check kareve. Text sathi `fprintf`/`fgets` aani binary sathi `fread`/`fwrite` vaparatat. Kam jhalyavar `fclose(fp)` kareve.

### Hinglish
Program execution close hone ke baad bhi data save rakhne ke liye file handling use hoti hai. Text files human-readable text store karti hain jabki Binary files (`.bin`, `.dat`) raw struct bytes as-is disk par write karti hain. `fseek()` aur `ftell()` file pointer location navigate karte hain.

## 🤔 Why Do We Use It?

RAM memory is volatile; when a program closes or computer restarts, all variable data in memory is erased. File handling persists user accounts, application settings, transaction logs, and databases directly to disk storage.

## 🧠 Simple Explanation

Think of `FILE*` as a bookmark in a book on disk:
- `fopen()` opens the book and places the bookmark at the beginning or end.
- `fprintf()` / `fputs()` writes text onto the page at the bookmark position.
- `fgets()` / `fread()` reads text from the page.
- `fclose()` closes the book and saves changes to the bookshelf.

## 📝 File Opening Modes

| Mode | Purpose | Creates New File? | Truncates (Overwrites) Existing File? |
|---|---|---|---|
| `"r"` | Read text file | No (returns `NULL` if missing) | No |
| `"w"` | Write text file | Yes | Yes (Erases existing content!) |
| `"a"` | Append text at end | Yes | No (Appends to existing content) |
| `"r+"` | Read and Write text | No | No |
| `"w+"` | Read and Write text | Yes | Yes |
| `"rb"` | Read binary file | No | No |
| `"wb"` | Write binary file | Yes | Yes |
| `"ab"` | Append binary file | Yes | No |

## 💡 Practical Example

Here is a practical file handling program demonstrating text file generation, safe reading with `fgets`, binary record serialization with `fwrite`/`fread`, and file positioning with `fseek`/`ftell`:

```c
#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int id;
    char name[30];
    double balance;
} AccountRecord;

int main(void) {
    // ==========================================
    // 1. TEXT FILE OPERATIONS (Writing & Reading)
    // ==========================================
    printf("--- 1. TEXT FILE WRITING & READING ---\n");
    FILE *textFp = fopen("audit_log.txt", "w");
    if (textFp == NULL) {
        perror("Error opening text file for writing");
        return 1;
    }

    fprintf(textFp, "LOG_EVENT: User #101 Logged In\n");
    fprintf(textFp, "LOG_EVENT: Transferred $250.00\n");
    fclose(textFp);
    printf("Text file 'audit_log.txt' written and closed successfully.\n");

    // Reading text file line by line
    textFp = fopen("audit_log.txt", "r");
    if (textFp == NULL) {
        perror("Error opening text file for reading");
        return 1;
    }

    char buffer[100];
    printf("Reading 'audit_log.txt' contents:\n");
    while (fgets(buffer, sizeof(buffer), textFp) != NULL) {
        printf(" -> %s", buffer);
    }
    fclose(textFp);

    // ==========================================
    // 2. BINARY FILE OPERATIONS (fwrite & fread)
    // ==========================================
    printf("\n--- 2. BINARY FILE STRUCT SERIALIZATION ---\n");
    AccountRecord recordOut = {1001, "Amit Patel", 12500.75};

    FILE *binFp = fopen("accounts.bin", "wb");
    if (binFp == NULL) {
        perror("Error opening binary file for writing");
        return 1;
    }

    // Write binary struct to disk
    size_t written = fwrite(&recordOut, sizeof(AccountRecord), 1, binFp);
    if (written == 1) {
        printf("Binary record written successfully to 'accounts.bin'.\n");
    }
    fclose(binFp);

    // Reading binary record back from disk
    AccountRecord recordIn = {0};
    binFp = fopen("accounts.bin", "rb");
    if (binFp == NULL) {
        perror("Error opening binary file for reading");
        return 1;
    }

    // File positioning: Check file size using fseek and ftell
    fseek(binFp, 0, SEEK_END);
    long fileSize = ftell(binFp);
    rewind(binFp); // Reset file position back to beginning
    printf("Binary File Size: %ld bytes\n", fileSize);

    size_t readCount = fread(&recordIn, sizeof(AccountRecord), 1, binFp);
    if (readCount == 1) {
        printf("Restored Account: ID #%d | Name: %s | Balance: $%.2lf\n",
               recordIn.id, recordIn.name, recordIn.balance);
    }
    fclose(binFp);

    return 0;
}
```

## 🔍 Code Breakdown

- `fopen("audit_log.txt", "w")`: Opens file in write mode. If file does not exist, it creates it. If file exists, mode `"w"` truncates (wipes) previous contents.
- `fwrite(&recordOut, sizeof(AccountRecord), 1, binFp)`: Writes raw memory bytes of `recordOut` directly to disk in binary format.
- `fread(&recordIn, sizeof(AccountRecord), 1, binFp)`: Reads exact raw byte layout directly from binary file back into `recordIn` struct memory.
- `fseek(fp, 0, SEEK_END); ftell(fp)`: `fseek` moves cursor to end of file (`SEEK_END`), and `ftell` returns current byte position, calculating total file size. `rewind(fp)` moves cursor back to byte 0.

## 👀 Output

```text
--- 1. TEXT FILE WRITING & READING ---
Text file 'audit_log.txt' written and closed successfully.
Reading 'audit_log.txt' contents:
 -> LOG_EVENT: User #101 Logged In
 -> LOG_EVENT: Transferred $250.00

--- 2. BINARY FILE STRUCT SERIALIZATION ---
Binary record written successfully to 'accounts.bin'.
Binary File Size: 48 bytes (size depends on struct alignment)
Restored Account: ID #1001 | Name: Amit Patel | Balance: $12500.75
```

## ⚠️ Common Mistakes

- **Forgetting `NULL` Checks on `fopen()`:** Reading or writing through a `FILE*` pointer when `fopen()` failed (returns `NULL`) crashes immediately with a Segmentation Fault.
- **Forgetting to Call `fclose()`:** Failing to close files leaves data buffered in RAM memory, causing missing/corrupted file output on disk or resource leaks.
- **Using `feof()` incorrectly in loops:** Writing `while (!feof(fp))` causes the loop to run one extra time because `feof()` only returns `true` AFTER a read operation attempts to read past EOF! Always test function return values (`while (fgets(...) != NULL)` or `while (fread(...) == 1)`).

## 🛡️ Safety / Important Notes

- Always check `if (fp == NULL)` and print descriptive error diagnostics using `perror("Description")`.
- When storing sensitive application data or binary structs across different platforms/compilers, be mindful that binary struct field alignment padding may vary across architectures.

## 🌍 Real-World Usage

File handling builds database storage engines (SQLite, BerkeleyDB), log file rotators, game save files, image file decoders (BMP/PNG parsers), and configuration managers.

## 🧪 Try It Yourself

1. Write a program that opens a text file `notes.txt` in append mode (`"a"`).
2. Append a line of text entered by the user, close the file, and then read and display all lines from `notes.txt`.

## 🎯 Mini Challenge

Write a program that copies a binary file (e.g. an image file or `.bin` file) from `source.bin` to `destination.bin` using a byte buffer and `fread`/`fwrite` loops until `EOF`.

## 🔗 Related Topics

- [Input and Output](04-input-output.md)
- [Structures](14-structures.md)
- [Error Handling](22-error-handling.md)

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Enumerations](16-enums.md) | [Next: Preprocessor →](18-preprocessor-and-macros.md)
