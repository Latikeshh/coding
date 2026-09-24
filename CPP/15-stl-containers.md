# STL Containers (`map`, `set`, `unordered_map`)

> 🟡 Intermediate

## 📖 Definition

The C++ Standard Template Library (STL) offers efficient containers: `std::vector` (dynamic array), `std::map` (ordered $O(\log n)$ key-value mapping), `std::unordered_map` (hash table $O(1)$ lookup), and `std::set` (unique sorted elements).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `std::map` stores sorted key-value pairs. `std::set` stores unique elements. `std::unordered_map` provides fast $O(1)$ hash lookups.
> - **Hindi:** `std::map` की-वैल्यू जोड़े स्टोर करता है। `std::set` डुप्लिकेट वैल्यूज़ को खुद हटा देता है।
> - **Marathi:** `std::set` मध्ये डुप्लिकेट व्हॅल्यू राहू शकत नाहीत आणि `std::map` मध्ये की-व्हॅल्यू डेटा साठवला जातो.
> - **Hinglish:** Sorted key-value storage ke liye `std::map` aur unique sorted elements ke liye `std::set` use karo.

## 📝 Syntax

```cpp
#include <iostream>
#include <map>
#include <set>
using namespace std;

int main() {
    map<string, int> scores;
    scores["Alice"] = 95;

    set<int> uniqueNums = {10, 20, 10, 30}; // Stores 10, 20, 30
    return 0;
}
```

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Smart Pointers](14-smart-pointers.md) | [Next: STL Algorithms →](16-stl-algorithms.md)
