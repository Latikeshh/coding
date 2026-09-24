# C Preprocessor & Macros

> 🟡 Intermediate

## 📖 Definition

The **C Preprocessor** performs text substitution, file inclusion (`#include`), and conditional compilation (`#ifdef`) before source code compilation begins.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Preprocessor directives (`#define`, `#ifdef`) run before compilation. Use Header Guards (`#ifndef`) in `.h` files.
> - **Hindi:** प्रीप्रोसेसर निर्देश (`#define`, `#ifdef`) कंपाइलेशन से पहले टेक्स्ट रिप्लेसमेंट करते हैं।
> - **Marathi:** प्रीप्रोसेसर कोड कंपाईल होण्यापूर्वी टेक्स्ट रीप्लेसमेंट करतो.
> - **Hinglish:** Preprocessor `#define` constants/macros text-replace karta hai. Header files mein multiple inclusions rokne ke liye Header Guards use karo.

## 📝 Syntax

```c
#include <stdio.h>

#define PI 3.14159
#define SQUARE(x) ((x) * (x))

int main(void) {
    printf("Area: %.2f\n", PI * SQUARE(5));
    return 0;
}
```

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: File Handling](17-file-handling.md) | [Next: Storage Classes →](19-storage-classes.md)
