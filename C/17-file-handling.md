# File Handling (`fopen`, `fread`, `fwrite`)

> 🔴 Advanced

## 📖 Definition

File handling operations allow C programs to persist data directly to disk files using standard C file stream pointers (`FILE*`).

---

## 📁 Common File Modes (`fopen`)

| Mode | Action |
|---|---|
| `"r"` | Open existing text file for reading |
| `"w"` | Create or overwrite text file for writing |
| `"a"` | Append text to end of file |
| `"rb"`, `"wb"` | Read/write in Binary mode |

---

## 📝 Writing & Reading Text Files

```c
#include <stdio.h>

int main() {
    // 1. Writing to a file
    FILE *fout = fopen("notes.txt", "w");
    if (fout == NULL) {
        printf("Error opening file for writing!\n");
        return 1;
    }

    fprintf(fout, "Line 1: Persistent data in C\n");
    fprintf(fout, "Line 2: File Handling is easy!\n");
    fclose(fout); // Always close files when done

    // 2. Reading line-by-line from a file
    FILE *fin = fopen("notes.txt", "r");
    if (fin == NULL) {
        printf("Error opening file for reading!\n");
        return 1;
    }

    char buffer[100];
    while (fgets(buffer, sizeof(buffer), fin) != NULL) {
        printf("Read: %s", buffer);
    }

    fclose(fin);
    return 0;
}
```

---

## 💾 Binary File I/O (`fwrite` and `fread`)

```c
#include <stdio.h>

typedef struct {
    int id;
    float score;
} Record;

int main() {
    Record r1 = {101, 95.5f};

    // Write binary struct to disk
    FILE *fp = fopen("record.bin", "wb");
    fwrite(&r1, sizeof(Record), 1, fp);
    fclose(fp);

    // Read binary struct from disk
    Record r2;
    fp = fopen("record.bin", "rb");
    fread(&r2, sizeof(Record), 1, fp);
    fclose(fp);

    printf("Read Binary Struct -> ID: %d, Score: %.1f\n", r2.id, r2.score);
    return 0;
}
```

---

## 🧪 Try It Yourself

Write a program that prompts the user for a string and appends it to `log.txt` using `"a"` mode.

## 🎯 Mini Challenge

Write a file copy utility in C that reads a file byte-by-byte using `fgetc()` or `fread()` and writes to a destination file.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Enums](16-enums.md) | [Next: Preprocessor →](18-preprocessor-and-macros.md)
