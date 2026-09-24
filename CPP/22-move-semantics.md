# Move Semantics & Rvalue References (`&&`)

> 🔴 Advanced

## 📖 Definition

- **Lvalue:** An expression with an identifiable memory location (e.g. named variable).
- **Rvalue:** A temporary expression/literal without a persistent memory address (e.g., temporary object returned from function).
- **Move Semantics:** Transfers ownership of heap resources directly from a temporary rvalue object to a destination object without making expensive deep memory copies.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Move semantics (`std::move`, `&&`) transfers ownership of heap memory from temporary objects instead of making expensive deep copies.
> - **Hindi:** मूव सेमांटिक्स (`std::move`) टेम्परेरी ऑब्जेक्ट्स की मेमोरी को कॉपी करने के बजाय ट्रांसफर करता है, जिससे परफॉरमेंस बढ़ती है।
> - **Marathi:** मूव्ह सेमांटिक्समुळे टॅम्परी डेटा कॉपी न होता थेट ट्रान्सफर होतो, ज्यामुळे स्पीड वाढते.
> - **Hinglish:** Move semantics (`std::move`) se temporary objects ka resource transfer hota hai. Deep copying avoid hone se performance boost hoti hai.

---

## 📝 Syntax & `std::move`

```cpp
#include <iostream>
#include <utility>
using namespace std;

class HugeBuffer {
private:
    int* data;
    size_t size;

public:
    HugeBuffer(size_t s) : size(s) {
        data = new int[size];
        cout << "Allocated " << size << " elements on Heap" << endl;
    }

    ~HugeBuffer() {
        delete[] data;
    }

    // Move Constructor (Accepts Rvalue Reference '&&')
    HugeBuffer(HugeBuffer&& other) noexcept : data(other.data), size(other.size) {
        // Steal pointer from temporary object
        other.data = nullptr;
        other.size = 0;
        cout << "Move Constructor executed (Zero Deep Copy!)" << endl;
    }
};

int main() {
    HugeBuffer buf1(1000000);

    // std::move converts lvalue 'buf1' to an rvalue reference, invoking Move Constructor
    HugeBuffer buf2 = std::move(buf1);

    return 0;
}
```

---

## 👀 Output

```text
Allocated 1000000 elements on Heap
Move Constructor executed (Zero Deep Copy!)
```

---

## 🧪 Try It Yourself

Demonstrate how `std::vector::push_back(std::move(obj))` transfers ownership of an object into a vector without making a copy.

## 🎯 Mini Challenge

Implement a Move Assignment Operator (`operator=(HugeBuffer&& other)`) for the `HugeBuffer` class.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Namespaces & Modern C++](21-namespaces-and-modern-cpp.md) | [Next: Comprehensive Mini Projects →](23-mini-projects.md)
