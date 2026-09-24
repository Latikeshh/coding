# Constructors, Destructors & RAII

> 🟡 Intermediate

## 📖 Definition

- **Constructor:** Member function executed automatically when an object is instantiated to initialize member state.
- **Destructor:** Special member function (`~ClassName`) called automatically when an object goes out of scope to release resources (memory, file handles, locks).
- **RAII (Resource Acquisition Is Initialization):** Fundamental C++ idiom where resource lifecycle is bound directly to object lifetime.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** RAII binds resource lifecycle to object scope. The constructor acquires resources and the destructor (`~Class`) releases them automatically.
> - **Hindi:** RAII तकनीक में ऑब्जेक्ट बनते ही रिसोर्स (मेमोरी/फाइल) मिलता है और स्कोप खत्म होते ही डिस्ट्रक्टर (`~Class`) उसे अपने आप फ्री कर देता है।
> - **Marathi:** RAII मुळे ऑब्जेक्टचा स्कोप संपताच डिस्ट्रक्टर मेमरी किंवा फाईल्स आपोआप बंद/फ्री करतो.
> - **Hinglish:** RAII idiom se memory leaks avoid hote hain. Constructor resource allocation karta hai aur Destructor (`~Class`) auto-cleanup karta hai.

---

## 📝 Types of Constructors & RAII Example

```cpp
#include <iostream>
using namespace std;

class Buffer {
private:
    int* data;
    int size;

public:
    // 1. Default Constructor
    Buffer() : data(nullptr), size(0) {}

    // 2. Parameterized Constructor (Acquires Resource)
    Buffer(int s) : size(s) {
        data = new int[size];
        cout << "Allocated buffer memory of size " << size << endl;
    }

    // 3. Copy Constructor (Deep Copy)
    Buffer(const Buffer& other) : size(other.size) {
        data = new int[size];
        for (int i = 0; i < size; i++) data[i] = other.data[i];
        cout << "Deep Copy constructor executed" << endl;
    }

    // 4. Destructor (RAII Cleanup)
    ~Buffer() {
        delete[] data; // Automatically releases memory when scope ends
        cout << "Destructor freed buffer heap memory" << endl;
    }
};

int main() {
    {
        Buffer b1(10); // Resource allocated
    } // Scope ends -> b1 destructor automatically called here!

    return 0;
}
```

---

## 👀 Output

```text
Allocated buffer memory of size 10
Destructor freed buffer heap memory
```

---

## ⚠️ Common Mistakes

- Forgetting to write a custom Copy Constructor when a class manages dynamic raw pointers (`new`), resulting in shallow copy double-free crashes! Use Smart Pointers (`std::unique_ptr`) to avoid raw pointers.

## 🧪 Try It Yourself

Create a `FileHandler` class whose constructor opens a file and whose destructor automatically closes it.

## 🎯 Mini Challenge

Implement a `Person` class with `name` and `age`, demonstrating default, parameterized, and copy constructors.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: OOP Basics](10-classes-and-oops.md) | [Next: Inheritance & Polymorphism →](12-inheritance-and-polymorphism.md)
