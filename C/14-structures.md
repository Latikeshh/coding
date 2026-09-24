# Structures (`struct`) & `typedef`

> 🟡 Intermediate

## 📖 Definition

A **structure** (`struct`) groups variables of different data types together under a single custom type. `typedef` creates clean type aliases.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `struct` groups heterogeneous variables. Use the arrow operator (`->`) to access struct members through a pointer.
> - **Hindi:** `struct` अलग-अलग डेटा टाइप्स के वेरिएबल्स का ग्रुप बनाता है। पॉइंटर द्वारा एक्सेस करने के लिए एरो एलीमेंट (`->`) का उपयोग करें।
> - **Marathi:** `struct` मुळे वेगवेगळ्या प्रकारचा डेटा एकाच टाईपमध्ये साठवता येतो.
> - **Hinglish:** Heterogeneous data variables ko group karne ke liye `struct` use hota hai. Pointer dereferencing ke liye `ptr->member` use karo.

## 📝 Syntax & Example

```c
#include <stdio.h>
#include <string.h>

typedef struct {
    int id;
    char name[40];
    float salary;
} Employee;

void printEmployee(const Employee *emp) {
    // Use arrow operator -> with struct pointers
    printf("ID: %d | Name: %s | Salary: $%.2f\n", emp->id, emp->name, emp->salary);
}

int main(void) {
    Employee e1 = {101, "Sarah Connor", 75000.0f};
    printEmployee(&e1);
    return 0;
}
```

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Dynamic Memory](13-dynamic-memory-allocation.md) | [Next: Unions & Bit Fields →](15-unions-and-bit-fields.md)
