# Strings in C (`<string.h>`)

> 🟡 Intermediate

## 📖 Definition

In C, strings are null-terminated character arrays (`char[]`). The null terminator `'\0'` marks end-of-string in memory. Always use `fgets()` instead of `scanf("%s")` for input.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Strings in C end with null terminator `'\0'`. Use `fgets()` for safe multi-word input to prevent buffer overflow vulnerabilities.
> - **Hindi:** सी में स्ट्रिंग के अंत में `'\0'` होता है। सेफ इनपुट के लिए `scanf` की जगह `fgets()` का प्रयोग करें।
> - **Marathi:** सी मध्ये स्ट्रिंगच्या शेवटी `'\0'` असतो. सुरक्षित इनपुटसाठी `fgets()` वापरावे.
> - **Hinglish:** C strings null-terminated `'\0'` character arrays hote hain. Safe text input ke liye `fgets(buf, size, stdin)` use karo.

## 📝 Syntax & Standard Functions (`<string.h>`)

```c
#include <stdio.h>
#include <string.h>

int main(void) {
    char name[40];

    printf("Enter name: ");
    fgets(name, sizeof(name), stdin);

    printf("Length: %zu\n", strlen(name));
    return 0;
}
```

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Advanced Pointers](11-advanced-pointers.md) | [Next: Dynamic Memory Allocation →](13-dynamic-memory-allocation.md)
