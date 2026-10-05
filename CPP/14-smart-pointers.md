---
layout: default
title: "14 smart pointers"
---

# Smart Pointers & Memory Management in Modern C++ (`unique_ptr`, `shared_ptr`, `weak_ptr`)

> 🔴 Advanced

---

## 📖 Definition

In modern C++ (C++11 and beyond), **Smart Pointers** are container wrapper classes provided by `<memory>` that manage the lifetime of heap-allocated dynamic memory through **RAII (Resource Acquisition Is Initialization)**. Smart pointers automatically deallocate heap memory when their scope ends, completely eliminating manual `delete` statements, raw pointer dangling bugs, and memory leaks!

---

## 🇮🇳 Hindi Explanation

Purane C++ mein jab hum `new` se heap memory allocate karte the, toh humein `delete` karke memory free karni padti thi. Agar `delete` bhool gaye, toh memory leak ho jata tha. **Smart Pointers (`std::unique_ptr`, `std::shared_ptr`)** modern C++ ka sabse zaroori feature hain. Yeh raw pointers ko wrap kar lete hain aur jaise hi pointer scope se bahar jata hai, heap memory ko **apne aap `delete` kar dete hain**!

---

## 🚩 Marathi Explanation

C++11 paasun raw pointers aani manual `delete` vaparanyapradhane **Smart Pointers (`std::unique_ptr`, `std::shared_ptr`)** vaparale jaataat. Smart pointer mhanje eka dynamic memory vr wrapper. Object cha scope samplyavar smart pointer aapoap heap memory `delete` karto, jyamule memory leaks hot nahit.

---

## 📊 The 3 Smart Pointer Types Compared

| Smart Pointer | Ownership Rule | Copyable? | Movable? | Ideal Use Case |
|:---|:---|:---:|:---:|:---|
| **`std::unique_ptr`** | **Exclusive Ownership** (1 owner only!) | ❌ No | ✅ Yes (`std::move`) | Default choice! Fast, zero overhead |
| **`std::shared_ptr`** | **Shared Ownership** (Ref-counted) | ✅ Yes | ✅ Yes | Shared resources across multiple owners |
| **`std::weak_ptr`** | **Non-owning Observer** | ✅ Yes | ✅ Yes | Breaks circular reference deadlocks |

---

## 💡 Practical Example

```cpp
#include <iostream>
#include <memory>
#include <string>

class Resource {
private:
    std::string name;
public:
    Resource(std::string resName) : name(resName) {
        std::cout << "[ALLOCATED] Heap Resource: " << name << std::endl;
    }

    ~Resource() {
        std::cout << "[DESTROYED] Heap Resource: " << name << " (Auto-freed!)" << std::endl;
    }

    void doWork() const {
        std::cout << "Working with Resource: " << name << std::endl;
    }
};

int main() {
    std::cout << "--- 1. DEMO: std::unique_ptr (Exclusive Ownership) ---" << std::endl;
    {
        // Recommended helper: std::make_unique (C++14)
        std::unique_ptr<Resource> uPtr1 = std::make_unique<Resource>("UniqueDB");
        uPtr1->doWork();

        // std::unique_ptr CANNOT be copied!
        // std::unique_ptr<Resource> uPtr2 = uPtr1; // COMPILATION ERROR!

        // Ownership can be MOVED using std::move
        std::unique_ptr<Resource> uPtr2 = std::move(uPtr1); // uPtr1 is now empty/null
        
        if (!uPtr1) {
            std::cout << "uPtr1 is now NULL after std::move." << std::endl;
        }
        uPtr2->doWork();
    } // uPtr2 goes out of scope HERE -> Destructor called automatically!

    std::cout << "\n--- 2. DEMO: std::shared_ptr (Shared Reference Counting) ---" << std::endl;
    {
        std::shared_ptr<Resource> sPtr1 = std::make_shared<Resource>("SharedCache");
        std::cout << "Reference Count: " << sPtr1.use_count() << std::endl;

        {
            // Copying std::shared_ptr INCREMENTS reference counter!
            std::shared_ptr<Resource> sPtr2 = sPtr1;
            std::cout << "Reference Count inside inner scope: " << sPtr1.use_count() << std::endl;
            sPtr2->doWork();
        } // sPtr2 goes out of scope HERE -> Ref count decremented back to 1!

        std::cout << "Reference Count after inner scope ends: " << sPtr1.use_count() << std::endl;
    } // sPtr1 goes out of scope HERE -> Ref count reaches 0 -> Memory freed automatically!

    std::cout << "--- END OF MAIN ---" << std::endl;
    return 0;
}
```

---

## 🔍 Code Breakdown

- `std::make_unique<Resource>("UniqueDB")`: Allocates `Resource` on the heap and wraps it inside a `unique_ptr`.
- `std::move(uPtr1)`: Transfers exclusive ownership from `uPtr1` to `uPtr2`.
- `sPtr1.use_count()`: Inspects the internal reference counter of `std::shared_ptr`. When `use_count()` drops to `0`, `delete` executes automatically.

---

## 👀 Output

```text
--- 1. DEMO: std::unique_ptr (Exclusive Ownership) ---
[ALLOCATED] Heap Resource: UniqueDB
Working with Resource: UniqueDB
uPtr1 is now NULL after std::move.
Working with Resource: UniqueDB
[DESTROYED] Heap Resource: UniqueDB (Auto-freed!)

--- 2. DEMO: std::shared_ptr (Shared Reference Counting) ---
[ALLOCATED] Heap Resource: SharedCache
Reference Count: 1
Reference Count inside inner scope: 2
Working with Resource: SharedCache
Reference Count after inner scope ends: 1
[DESTROYED] Heap Resource: SharedCache (Auto-freed!)
--- END OF MAIN ---
```

---

## ⚠️ Common Mistakes

- **Using Raw `new` and `delete` in Modern C++**: Manual memory management leads to dangling pointers and memory leaks. Use `std::make_unique` or `std::make_shared` instead.
- **Circular Reference Memory Leak with `shared_ptr`**:
  If Object A holds a `shared_ptr` to Object B, and Object B holds a `shared_ptr` to Object A, their reference counts never reach 0! Use `std::weak_ptr` for back-references to break circular loops.

---

## 🛡️ Best Practices

- Make `std::unique_ptr` your default smart pointer choice unless shared ownership is strictly required.
- Always use factory functions `std::make_unique` (C++14) and `std::make_shared` (C++11) for safety and exception performance.

---

## 🧪 Try It Yourself

1. Allocate a dynamic `std::vector<int>` inside a `std::unique_ptr`, populate 5 numbers, and iterate over them.
2. Inspect `use_count()` of a `std::shared_ptr` as you pass it to functions by value vs by reference.

---

## 🎯 Mini Challenge

Implement a `TreeNode` class where a parent node owns its children using `std::vector<std::unique_ptr<TreeNode>>`. Demonstrate tree creation and automated cleanup.

---

## 🔗 Related Topics

- [Constructors & Destructors](11-constructors-and-destructors.html)
- [Inheritance & Polymorphism](12-inheritance-and-polymorphism.html)

---

## 🧭 Navigation

[← C++ Home](./) | [← Previous: Operator Overloading](13-operator-overloading.html) | [Next: STL Containers →](15-stl-containers.html)

