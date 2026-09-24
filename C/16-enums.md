# Enumerations (`enum`)

> 🟡 Intermediate

## 📖 Definition

An **enumeration** (`enum`) defines custom integer constants represented by human-readable names, replacing raw magic numbers.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `enum` replaces magic integer numbers with self-documenting constant names (`SUCCESS = 0`).
> - **Hindi:** `enum` कोड को पढ़ने में आसान बनाने के लिए नंबर्स को नाम (जैसे `SUCCESS`, `ERROR`) देता है।
> - **Marathi:** `enum` मुळे नंबर्सऐवजी नावांचा वापर करून कोड सोपा होतो.
> - **Hinglish:** Magic numbers replace karne ke liye `enum` (`SUCCESS = 0`, `FAILED = 1`) use karo.

## 📝 Syntax

```c
#include <stdio.h>

typedef enum {
    STATUS_OK = 200,
    STATUS_NOT_FOUND = 404,
    STATUS_SERVER_ERROR = 500
} HttpStatus;

int main(void) {
    HttpStatus code = STATUS_OK;
    printf("HTTP Response Code: %d\n", code);
    return 0;
}
```

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Unions](15-unions-and-bit-fields.md) | [Next: File Handling →](17-file-handling.md)
