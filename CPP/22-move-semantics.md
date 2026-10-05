---
layout: default
title: "22 move semantics"
---

# Move Semantics, Lvalues, Rvalues & `std::move` in C++

> 🔴 Advanced

---

## 📖 Definition

Introduced in C++11, **Move Semantics** allows C++ to **transfer (move) ownership** of resources (like heap memory, file handles, or graphics buffers) from temporary objects directly to new objects instead of performing expensive deep copies.
- **Lvalue**: An persistent object that occupies an identifiable location in memory (has a name and memory address).
- **Rvalue**: A temporary, short-lived value that exists only during expression evaluation (has no persistent address).
- **Rvalue Reference (`T&&`)**: Binds strictly to temporary rvalues.
- **`std::move()`**: Casts an lvalue into an rvalue reference, enabling resource transfer.

---

## 🇮🇳 Hindi Explanation

Purani C++ mein jab hum kisi temporary object ko naye variable mein assign karte the, toh C++ poori memory ko duplicate (deep copy) karta tha. C++11 mein **Move Semantics** aaya. Isme naya object temporary object ki heap memory ka pointer **chura (steal/transfer) leta hai** aur purane temporary object ke pointer ko `nullptr` kar deta hai. Isse memory duplication nahi hoti aur program ki speed 100x tak badh jaati hai!

---

## 🚩 Marathi Explanation

Move Semantics C++11 cha ek atyantvegvan (fast) feature aahe. Deep Copy karne aivaji, **Move Semantics** mule temporary object chi heap memory n नवीन object kade **transfer** ke li jaate. Jyamule duplicate copy tayar hot nahi aani performance vadhato.

---

## 📊 Copy Semantics vs Move Semantics

```text
1. Deep Copy Semantics (Expensive O(N) allocation):
[Original Buffer] -> Copy All Elements -> [New Buffer Copy]

2. Move Semantics (Lighting Fast O(1) Pointer Transfer):
[Original Buffer Pointer] ----(Transfer Pointer)----> [New Object Pointer]
[Original Buffer Pointer] -> Set to NULL (Empty)
```

---

## 💡 Practical Example

```cpp
#include <iostream>
#include <utility> // For std::move
#include <cstring>

class DynamicBuffer {
private:
    char* data;
    size_t size;

public:
    // Constructor
    DynamicBuffer(size_t sz) : size(sz) {
        data = new char[size];
        std::memset(data, 'A', size);
        std::cout << "[CONSTRUCTOR] Allocated " << size << " bytes on heap." << std::endl;
    }

    // Destructor
    ~DynamicBuffer() {
        if (data != nullptr) {
            std::cout << "[DESTRUCTOR] Deallocated " << size << " bytes." << std::endl;
            delete[] data;
        } else {
            std::cout << "[DESTRUCTOR] Empty moved-from object cleaned up safely." << std::endl;
        }
    }

    // 1. Copy Constructor (Expensive Deep Copy!)
    DynamicBuffer(const DynamicBuffer& other) : size(other.size) {
        data = new char[size];
        std::memcpy(data, other.data, size);
        std::cout << "[DEEP COPY CONSTRUCTOR] Duplicated " << size << " bytes in memory." << std::endl;
    }

    // 2. Move Constructor (Lightning Fast O(1) Pointer Transfer!)
    DynamicBuffer(DynamicBuffer&& other) noexcept 
        : data(other.data), size(other.size) // STEAL POINTER!
    {
        other.data = nullptr; // Nullify source pointer so it doesn't free the memory!
        other.size = 0;
        std::cout << "[MOVE CONSTRUCTOR] Transferred ownership of " << size << " bytes!" << std::endl;
    }

    size_t getSize() const { return size; }
};

int main() {
    std::cout << "--- 1. DEEP COPYING AN OBJECT ---" << std::endl;
    DynamicBuffer buf1(100000); // 100 KB Buffer
    DynamicBuffer buf2 = buf1;  // Triggers DEEP COPY (Expensive!)

    std::cout << "\n--- 2. MOVING AN OBJECT (std::move) ---" << std::endl;
    // std::move casts buf1 to an rvalue reference, triggering the MOVE CONSTRUCTOR!
    DynamicBuffer buf3 = std::move(buf1); // Triggers MOVE CONSTRUCTOR (O(1) Fast!)

    std::cout << "buf3 Size: " << buf3.getSize() << " bytes" << std::endl;
    std::cout << "buf1 Size after std::move: " << buf1.getSize() << " bytes (Empty)" << std::endl;

    std::cout << "\n--- CLEANING UP ---" << std::endl;
    return 0;
}
```

---

## 🔍 Code Breakdown

- `DynamicBuffer(DynamicBuffer&& other) noexcept`: Rvalue reference `&&` binds to temporary objects or `std::move()` outputs.
- `other.data = nullptr;`: **CRITICAL**: Nullifying the source pointer ensures that when `other`'s destructor runs, `delete[] nullptr` executes safely without double-freeing the moved memory!
- `std::move(buf1)`: Converts lvalue `buf1` into an rvalue reference, telling the compiler: *"I am done with buf1, feel free to steal its resources!"*

---

## 👀 Output

```text
--- 1. DEEP COPYING AN OBJECT ---
[CONSTRUCTOR] Allocated 100000 bytes on heap.
[DEEP COPY CONSTRUCTOR] Duplicated 100000 bytes in memory.

--- 2. MOVING AN OBJECT (std::move) ---
[MOVE CONSTRUCTOR] Transferred ownership of 100000 bytes!
buf3 Size: 100000 bytes
buf1 Size after std::move: 0 bytes (Empty)

--- CLEANING UP ---
[DESTRUCTOR] Empty moved-from object cleaned up safely.
[DESTRUCTOR] Deallocated 100000 bytes.
[DESTRUCTOR] Deallocated 100000 bytes.
```

---

## ⚠️ Common Mistakes

- **Using a Variable After `std::move`**: Once an object has been moved from (`std::move(obj)`), its internal resources belong to the target object. Reading or accessing fields on a moved-from object is unsafe!
- **Forgetting `noexcept` on Move Constructors**: Standard library containers (like `std::vector`) will NOT use custom move constructors during reallocation unless marked `noexcept`!

---

## 🛡️ Best Practices

- Always mark move constructors and move assignment operators `noexcept`.
- Prefer standard library types (`std::string`, `std::vector`) which already have move semantics built-in natively.

---

## 🧪 Try It Yourself

1. Measure the execution time difference between copying vs moving a `std::vector<int>` with 10,000,000 elements.

---

## 🎯 Mini Challenge

Write a custom `String` class with a custom move constructor. Demonstrate moving string ownership from a temporary function return value directly into a global vector.

---

## 🔗 Related Topics

- [Smart Pointers](14-smart-pointers.md)
- [Classes & OOP](10-classes-and-oops.md)

---

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Modern C++](21-namespaces-and-modern-cpp.md) | [Next: Mini Projects →](23-mini-projects.md)
