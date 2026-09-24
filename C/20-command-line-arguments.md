# Command Line Arguments (`argc`, `argv`)

> 🟡 Intermediate

## 📖 Definition

Command line arguments pass inputs directly into the executable binary from the terminal shell via `int argc` (argument count) and `char *argv[]` (argument vector).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `argc` gives argument count (including binary name). `argv[]` array holds argument strings. Use `atoi()` to convert strings to numbers.
> - **Hindi:** `argc` आर्गुमेंट की संख्या बताता है और `argv[]` में इनपुट टेक्स्ट स्ट्रिंग्स होती हैं।
> - **Marathi:** टर्मिनलवरून इनपुट देण्यासाठी `argc` आणि `argv[]` वापरले जातात.
> - **Hinglish:** Command line input reading ke liye `int argc, char *argv[]` parameters use karo. Numbers ke liye `atoi(argv[i])` convert karta hai.

## 📝 Syntax

```c
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    if (argc < 3) {
        printf("Usage: %s <num1> <num2>\n", argv[0]);
        return 1;
    }

    int num1 = atoi(argv[1]);
    int num2 = atoi(argv[2]);
    printf("Sum: %d\n", num1 + num2);

    return 0;
}
```

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Storage Classes](19-storage-classes.md) | [Next: Multi-file Projects →](21-multi-file-projects.md)
