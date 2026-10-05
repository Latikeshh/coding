---
layout: default
title: "15 stl containers"
---

# C++ Standard Template Library (STL) Containers (`vector`, `map`, `unordered_map`, `set`)

> 🟡 Intermediate

---

## 📖 Definition

The **Standard Template Library (STL)** is a collection of C++ template classes providing standardized data structures and algorithms. **STL Containers** hold collections of objects in memory. They are categorized into:
1. **Sequence Containers**: Sequential ordering (`std::vector`, `std::deque`, `std::list`).
2. **Associative Containers**: Sorted key-value structures based on Red-Black Trees (`std::map`, `std::set`).
3. **Unordered Associative Containers**: Unsorted key-value structures based on Hash Tables (`std::unordered_map`, `std::unordered_set`).

---

## 🇮🇳 Hindi Explanation

STL C++ ka sabse powerful part hai. Inme bane-banaye data structures hote hain:
- **`std::vector`**: Dynamic array (fast random access $O(1)$).
- **`std::map`**: Key-value pair ko **sorted order** mein rakhta hai ($O(\log N)$ search time).
- **`std::unordered_map`**: Hash Table par based hota hai, isiliye fast lookup ($O(1)$) deta hai.
- **`std::set`**: Duplicate elements ko automatically hata deta hai aur baki values ko **sorted** rakhta hai.

---

## 🚩 Marathi Explanation

STL C++ cha ek atyant mahatvacha bhaag aahe. Yaat ready-made data structures astat:
- **`std::vector`**: Dynamic array.
- **`std::map`**: Key-value pairs **sorted** swaroopat store karto.
- **`std::unordered_map`**: Hash table cha vapar karun fast lookup ($O(1)$) deto.
- **`std::set`**: Unique aani sorted elements store karto (duplicates kadhto).

---

## 📊 Summary Comparison of Key STL Containers

| Container | Internal Data Structure | Ordering | Search Complexity | Unique Keys? |
|:---|:---|:---:|:---:|:---:|
| **`std::vector`** | Dynamic Array | Sequence Order | $O(N)$ | ❌ Allows Duplicates |
| **`std::map`** | Red-Black Tree | Sorted by Key | $O(\log N)$ | ✅ Unique Keys |
| **`std::unordered_map`** | Hash Table | Unordered | $O(1)$ Average | ✅ Unique Keys |
| **`std::set`** | Red-Black Tree | Sorted Values | $O(\log N)$ | ✅ Unique Values Only |

---

## 💡 Practical Example

```cpp
#include <iostream>
#include <vector>
#include <map>
#include <unordered_map>
#include <set>
#include <string>

int main() {
    // 1. std::set (Unique, Auto-Sorted)
    std::cout << "--- 1. std::set (Unique & Sorted) ---" << std::endl;
    std::set<int> uniqueNumbers = {40, 10, 20, 10, 30, 40}; // Duplicates ignored!

    std::cout << "Set Elements (Auto-Sorted): ";
    for (int num : uniqueNumbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    // 2. std::map (Ordered Key-Value Pair)
    std::cout << "\n--- 2. std::map (Sorted Key-Value Pairs) ---" << std::endl;
    std::map<std::string, double> studentGrades;
    studentGrades["Rahul"] = 92.5;
    studentGrades["Alice"] = 98.0;
    studentGrades["Priya"] = 88.0;

    for (const auto& [name, grade] : studentGrades) { // C++17 Structured Binding
        std::cout << name << " -> Grade: " << grade << "%" << std::endl;
    }

    // 3. std::unordered_map (O(1) Hash Table Lookup)
    std::cout << "\n--- 3. std::unordered_map (O(1) Fast Lookup) ---" << std::endl;
    std::unordered_map<std::string, std::string> phoneBook;
    phoneBook["Police"] = "100";
    phoneBook["Ambulance"] = "102";
    phoneBook["Fire"] = "101";

    std::string query = "Ambulance";
    if (phoneBook.find(query) != phoneBook.end()) {
        std::cout << "Emergency Number for " << query << " : " << phoneBook[query] << std::endl;
    }

    return 0;
}
```

---

## 🔍 Code Breakdown

- `std::set<int>`: Automatically discards duplicate `10` and `40`, storing `{10, 20, 30, 40}` in strictly ascending order.
- `const auto& [name, grade]`: C++17 Structured Binding syntax cleanly unpacks key-value `std::pair` elements inside `for` loops.
- `phoneBook.find(query) != phoneBook.end()`: The standard C++ idiomatic way to check whether a key exists in a map without accidentally inserting a blank entry!

---

## 👀 Output

```text
--- 1. std::set (Unique & Sorted) ---
Set Elements (Auto-Sorted): 10 20 30 40 

--- 2. std::map (Sorted Key-Value Pairs) ---
Alice -> Grade: 98%
Priya -> Grade: 88%
Rahul -> Grade: 92.5%

--- 3. std::unordered_map (O(1) Fast Lookup) ---
Emergency Number for Ambulance : 102
```

---

## ⚠️ Common Mistakes

- **Accidental Insertion Bug with `map[key]`**:
  Accessing `map["NonExistentKey"]` using square brackets `[]` **inserts** a default blank entry into the map if the key didn't exist! Use `.find(key)` or `.contains(key)` (C++20) for read-only lookup.
- **Choosing `std::map` when Order Doesn't Matter**: `std::map` incurs $O(\log N)$ tree traversal overhead. Use `std::unordered_map` for faster $O(1)$ performance when ordering is not needed.

---

## 🛡️ Best Practices

- Use `std::vector` by default for sequential data.
- Use `std::unordered_map` when you need key-value lookups by unique IDs (like User ID -> User Data).

---

## 🧪 Try It Yourself

1. Store 5 duplicate integers in a `std::set` and verify its final size.
2. Build a word frequency counter using `std::unordered_map<std::string, int>`.

---

## 🎯 Mini Challenge

Write an inventory management system using `std::map<int, std::string>` (Product ID -> Product Name). Implement functions to add products, remove products by ID, and list all products sorted by ID.

---

## 🔗 Related Topics

- [Arrays & Vectors](09-arrays-and-vectors.md)
- [STL Algorithms](16-stl-algorithms.md)

---

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Smart Pointers](14-smart-pointers.md) | [Next: STL Algorithms →](16-stl-algorithms.md)
