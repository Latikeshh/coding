# Storage Classes in C

> 🔴 Advanced

## 📖 Definition

Storage classes (`static`, `extern`, `auto`, `register`) determine variable scope (visibility), lifetime, and initial value memory locations.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `static` preserves variable value between function calls. `extern` references global variables across multiple files.
> - **Hindi:** `static` वेरिएबल फंक्शन खत्म होने के बाद भी अपनी वैल्यू याद रखता है। `extern` से ग्लोबल वेरिएबल दूसरी फाइलों में यूज़ होता है।
> - **Marathi:** `static` व्हॅरियबल फंक्शन संपल्यावरही आपली व्हॅल्यू टिकवून ठेवतो.
> - **Hinglish:** `static` local variables function calls ke beech Apni values retain karte hain. `extern` global variables share karta hai.

## 📝 Syntax

```c
#include <stdio.h>

void generateId(void) {
    static int id = 100; // Initialized ONCE; retains state
    id++;
    printf("Unique ID: %d\n", id);
}

int main(void) {
    generateId(); // Unique ID: 101
    generateId(); // Unique ID: 102
    return 0;
}
```

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Preprocessor](18-preprocessor-and-macros.md) | [Next: CLI Arguments →](20-command-line-arguments.md)
