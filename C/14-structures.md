# Structures (`struct`) & `typedef`

> 🟡 Intermediate

## 📖 Definition

A **structure** (`struct`) allows you to group variables of different types together under a single custom data type. `typedef` creates clean type aliases for structures.

---

## 📝 Syntax & `typedef`

```c
#include <stdio.h>
#include <string.h>

// Struct definition with typedef alias 'Employee'
typedef struct {
    int id;
    char name[40];
    float salary;
} Employee;

void printEmployee(const Employee *emp) {
    // Arrow operator (->) is used to access struct members through a pointer
    printf("ID: %d | Name: %s | Salary: $%.2f\n", emp->id, emp->name, emp->salary);
}

int main() {
    Employee e1;
    e1.id = 101;
    strcpy(e1.name, "Sarah Connor");
    e1.salary = 75000.0f;

    // Pass struct pointer to function
    printEmployee(&e1);

    return 0;
}
```

---

## 👀 Output

```text
ID: 101 | Name: Sarah Connor | Salary: $75000.00
```

---

## 🧱 Struct Alignment and Padding

Compilers add padding bytes inside structs so variables align with memory word boundaries:

```c
struct Sample {
    char c;     // 1 byte
                // (3 bytes padding added by compiler)
    int i;      // 4 bytes
};              // Total size: 8 bytes (not 5 bytes!)
```

---

## 🧪 Try It Yourself

Create a `typedef struct` named `Rectangle` with `float width` and `float height`. Write a function `float getArea(const Rectangle *r)` that calculates area.

## 🎯 Mini Challenge

Create an array of 3 `Employee` structs, take user input for each employee's details, and print the entire roster.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Dynamic Memory](13-dynamic-memory-allocation.md) | [Next: Unions & Bit Fields →](15-unions-and-bit-fields.md)
