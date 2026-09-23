# Unions & Bit Fields

> 🔴 Advanced

## 📖 Definition

- **Union:** A custom data type similar to a struct, except **all members share the same memory location**. The size of a union is equal to the size of its largest member.
- **Bit Fields:** Allow packed memory storage inside structs by specifying exact bit lengths for integer variables.

---

## 🤝 Unions in C

Unions are used when a variable can hold only **one** of several data types at any given time:

```c
#include <stdio.h>

union DataValue {
    int i;
    float f;
    char str[20];
};

int main() {
    union DataValue data;

    data.i = 10;
    printf("data.i = %d\n", data.i);

    data.f = 220.5f; // Overwrites shared memory location
    printf("data.f = %.1f\n", data.f);
    // Note: data.i is no longer valid because memory was overwritten!

    printf("Memory size occupied by Union: %zu bytes\n", sizeof(data));
    return 0;
}
```

---

## ⚙️ Bit Fields in C

Bit fields allow saving memory when storing flags or small numbers:

```c
#include <stdio.h>

struct StatusRegister {
    unsigned int isReady    : 1; // 1 bit (0 or 1)
    unsigned int isError    : 1; // 1 bit
    unsigned int mode       : 3; // 3 bits (values 0-7)
    unsigned int status     : 3; // 3 bits
};

int main() {
    struct StatusRegister reg = {1, 0, 5, 2};

    printf("Ready: %u, Mode: %u\n", reg.isReady, reg.mode);
    printf("Size of struct with Bit Fields: %zu bytes\n", sizeof(reg)); // Packaged into 4 bytes!
    return 0;
}
```

---

## 🧪 Try It Yourself

Create a union with `int integer` and `double decimal`. Assign an integer, print it, then assign a double and observe how the integer value changes.

## 🎯 Mini Challenge

Design a packed status struct using bit fields to store 8 boolean flags inside a single byte (`unsigned char`).

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Structures](14-structures.md) | [Next: Enumerations →](16-enums.md)
