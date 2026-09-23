# STL Containers (`map`, `set`, `unordered_map`)

> 🟡 Intermediate

## 📖 Definition

The **Standard Template Library (STL)** provides container data structures optimized for efficiency:
- **Sequential:** `std::vector`, `std::list`, `std::deque`
- **Associative:** `std::map` (ordered key-value pairs, $O(\log n)$), `std::set` (ordered unique elements)
- **Unordered Associative:** `std::unordered_map` (hash table key-value pairs, $O(1)$ average), `std::unordered_set`

---

## 💡 Practical Examples

### 1. `std::map` (Ordered Key-Value Mapping)
```cpp
#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    map<string, int> phonebook;

    phonebook["Alice"] = 5551234;
    phonebook["Bob"] = 5555678;
    phonebook["Charlie"] = 5559999;

    // Fast lookup
    if (phonebook.find("Alice") != phonebook.end()) {
        cout << "Alice's Number: " << phonebook["Alice"] << endl;
    }

    // Iterating over map (keys are sorted alphabetically)
    for (const auto& [name, number] : phonebook) { // C++17 Structured Binding
        cout << name << " -> " << number << endl;
    }

    return 0;
}
```

---

### 2. `std::set` (Unique Sorted Set)
```cpp
#include <iostream>
#include <set>
using namespace std;

int main() {
    set<int> uniqueNumbers = {50, 10, 20, 10, 50, 30};

    // Automatically removes duplicates and keeps sorted
    for (int num : uniqueNumbers) {
        cout << num << " "; // 10 20 30 50
    }
    cout << endl;

    return 0;
}
```

---

## 🧪 Try It Yourself

Create a `std::map<string, double>` mapping product names to prices. Print all items costing more than `$10.0`.

## 🎯 Mini Challenge

Use `std::unordered_map` to count word frequencies in a given vector of strings.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Smart Pointers](14-smart-pointers.md) | [Next: STL Algorithms →](16-stl-algorithms.md)
