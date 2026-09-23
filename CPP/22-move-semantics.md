# Move Semantics & Rvalue References (`&&`)

> 🔴 Advanced

## 📖 Definition

- **Lvalue:** An expression with an identifiable memory address (e.g., named variables).
- **Rvalue:** Temporary values or literals that do not persist beyond the expression (e.g. temporary objects, literals like `42`).
- **Move Semantics:** Transfers ownership of heap resources from a temporary rvalue to a new object without performing expensive deep memory allocations.

---

## 📝 Syntax & `std::move`

```cpp
#include <iostream>
#include <utility>
#include <vector>
using namespace std;

class HugeBuffer {
private:
    int* data;
    size_t size;

public:
    HugeBuffer(size_t s) : size(s) {
        data = new int[size];
        cout << "Allocated " << size << " elements" << endl;
    }

    ~HugeBuffer() {
        delete[] data;
    }

    // Move Constructor (Accepts Rvalue Reference '&&')
    HugeBuffer(HugeBuffer&& other) noexcept : data(other.data), size(other.size) {
        // Steal resource from temporary object
        other.data = nullptr;
        other.size = 0;
        cout << "Move Constructor executed (No Deep Copy!)" << endl;
    }
};

int main() {
    HugeBuffer buf1(1000000);

    // std::move casts buf1 (lvalue) to an rvalue reference, triggering Move Constructor
    HugeBuffer buf2 = std::move(buf1);

    return 0;
}
```

---

## 👀 Output

```text
Allocated 1000000 elements
Move Constructor executed (No Deep Copy!)
```

---

## 🧪 Try It Yourself

Demonstrate how `std::vector::push_back(std::move(obj))` transfers ownership of an object into a vector without copying.

## 🎯 Mini Challenge

Implement a Move Assignment Operator (`operator=(HugeBuffer&& other)`) for the `HugeBuffer` class.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Namespaces & Modern C++](21-namespaces-and-modern-cpp.md) | [Next: Comprehensive Mini Projects →](23-mini-projects.md)
