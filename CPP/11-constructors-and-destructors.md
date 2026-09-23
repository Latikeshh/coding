# Constructors, Destructors & RAII

> 🟡 Intermediate

## 📖 Definition

- **Constructor:** Member function called automatically when an object is created to initialize instance variables.
- **Destructor:** Special member function (prefixed with `~`) invoked automatically when an object goes out of scope or is destroyed to clean up resources (memory, file handles).
- **RAII (Resource Acquisition Is Initialization):** C++ design idiom where resource ownership is bound to object lifetime.

---

## 📝 Types of Constructors

```cpp
#include <iostream>
#include <string>
using namespace std;

class Buffer {
private:
    int* data;
    int size;

public:
    // 1. Default Constructor
    Buffer() : data(nullptr), size(0) {
        cout << "Default constructor called" << endl;
    }

    // 2. Parameterized Constructor
    Buffer(int s) : size(s) {
        data = new int[size]; // Acquire resource
        cout << "Allocated buffer of size " << size << endl;
    }

    // 3. Copy Constructor (Deep Copy)
    Buffer(const Buffer& other) : size(other.size) {
        data = new int[size];
        for (int i = 0; i < size; i++) data[i] = other.data[i];
        cout << "Copy constructor called (Deep Copy)" << endl;
    }

    // 4. Destructor (RAII Cleanup)
    ~Buffer() {
        delete[] data; // Release resource
        cout << "Destructor freed buffer memory" << endl;
    }
};

int main() {
    {
        Buffer b1(10); // Resource allocated
    } // Block ends -> b1 destructor automatically called here!

    return 0;
}
```

---

## 👀 Output

```text
Allocated buffer of size 10
Destructor freed buffer memory
```

---

## ⚠️ Common Mistakes

- Failing to implement a custom Copy Constructor when your class manages dynamic heap memory (`new`), causing shallow copy double-free crashes!

## 🧪 Try It Yourself

Create a `FileHandler` class whose constructor opens a file and whose destructor automatically closes it.

## 🎯 Mini Challenge

Implement a `Person` class with `name` and `age`, demonstrating default, parameterized, and copy constructors.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: OOP Basics](10-classes-and-oops.md) | [Next: Inheritance & Polymorphism →](12-inheritance-and-polymorphism.md)
