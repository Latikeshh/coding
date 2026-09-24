# File Handling (`fopen`, `fread`, `fwrite`)

> 🔴 Advanced

## 📖 Definition

C file handling persists data to text/binary disk files using stream pointers (`FILE*`), `fopen()`, `fprintf()`, `fgets()`, `fwrite()`, `fread()`, and `fclose()`.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Open files with `fopen(path, mode)`. Always verify `fp != NULL` and call `fclose(fp)` when done.
> - **Hindi:** फ़ाइल को `fopen()` से खोलें। हमेशा चेक करें कि `fp != NULL` हो और अंत में `fclose()` करना न भूलें।
> - **Marathi:** फाईल उघडण्यासाठी `fopen()` आणि काम झाल्यावर बंद करण्यासाठी `fclose()` वापरतात.
> - **Hinglish:** Disk operations ke liye `FILE *fp = fopen(path, mode)` use karo. Operations finish hone par `fclose(fp)` zaroori hai.

## 📝 Syntax

```c
#include <stdio.h>

int main(void) {
    FILE *fp = fopen("output.txt", "w");
    if (fp == NULL) {
        perror("File creation failed");
        return 1;
    }

    fprintf(fp, "Persistent file data in C\n");
    fclose(fp);
    return 0;
}
```

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Enums](16-enums.md) | [Next: Preprocessor →](18-preprocessor-and-macros.md)
