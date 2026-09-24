# Unions & Bit Fields

> 🔴 Advanced

## 📖 Definition

- **Union:** A custom data type where **all members share the exact same memory location** (size equals largest member).
- **Bit Fields:** Packed integer variables inside structs specified with exact bit counts (`unsigned int flag : 1;`).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** A `union` shares memory across all members. Bit fields (`flag : 1`) pack boolean/small flags into exact bit counts.
> - **Hindi:** `union` में सभी मेंबर्स एक ही मेमोरी शेयर करते हैं। बिट फ़ील्ड्स (`flag : 1`) मेमोरी बचाने के लिए बिट्स सेट करते हैं।
> - **Marathi:** `union` मध्ये सर्व मेंबर्स एकाच मेमरी लोकेशनवर साठवले जातात.
> - **Hinglish:** `union` mein saare members same memory location share karte hain. Hardware flags ke liye Bit fields (`: 1` bit) memory bachat karte hain.

## 📝 Syntax

```c
#include <stdio.h>

union DataValue {
    int i;
    float f;
};

struct HardwareRegister {
    unsigned int isReady : 1; // Occupies 1 bit
    unsigned int isError : 1; // Occupies 1 bit
    unsigned int mode    : 3; // Occupies 3 bits
};
```

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Structures](14-structures.md) | [Next: Enumerations →](16-enums.md)
