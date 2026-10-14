---
layout: default
title: "09 arrays and vectors"
---

# Fixed Arrays vs Dynamic `std::vector` in C++

> 🟢 Beginner

---

## 📖 Definition

In C++, sequence storage is available in two primary formats:
1. **C-Style Fixed Arrays**: Continuous contiguous memory blocks of a fixed size determined at compile time (`int arr[5]`).
2. **`std::vector`**: Modern Standard Template Library (STL) dynamic array that automatically grows or shrinks in heap memory as elements are added or removed (`.push_back()`, `.pop_back()`, `.size()`).

---

## 🇮🇳 Hindi Explanation

- **Fixed Array (`int arr[5]`)**: Iska size fixed hota hai aur ise baad mein badha ya ghata nahi sakte. Memory stack mein allocate hoti hai.
- **`std::vector`**: Yeh C++ STL ka sabse popular dynamic container hai. Iska size runtime par automatic adjust hota hai. `.push_back(val)` se naye elements add karte hain, aur `.size()` se total elements ka pata chalta hai. Real-world C++ projects mein fixed array ke jagah `std::vector` use karna recommended hota hai.

---

## 🚩 Marathi Explanation

- **Fixed Array (`int arr[5]`)**: Yacha size tharlela asto aani badalta yet nahi.
- **`std::vector`**: Ha C++ STL cha ek dynamic container aahe. Yacha size garjenusar apoaap badalto. N नवीन elements sathi `.push_back()` aani size sathi `.size()` cha vapar kartat. Modern C++ madhye vector cha vapar sabse jast kela jato.

---

## 📊 Feature Comparison Table

| Feature | Fixed C-Style Array | `std::vector` |
|:---|:---|:---|
| **Size Flexibility** | Fixed at compile time | Dynamic (Grows/shrinks at runtime) |
| **Memory Allocation** | Stack memory | Contiguous Heap memory |
| **Element Access** | `arr[i]` | `vec[i]` or `vec.at(i)` (bound-checked) |
| **Size Method** | `sizeof(arr)/sizeof(arr[0])` | `vec.size()` |
| **Inserting Elements**| Cannot add beyond fixed capacity | `vec.push_back(value)` |
| **Safety** | High risk of buffer overflow | Safe with `.at()` exception checking |

---

## 💡 Practical Example

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    // 1. C-Style Fixed Array
    std::cout << "--- 1. C-STYLE FIXED ARRAY ---" << std::endl;
    int fixedArr[3] = {10, 20, 30};
    for (int i = 0; i < 3; i++) {
        std::cout << "Fixed Array [" << i << "] = " << fixedArr[i] << std::endl;
    }

    // 2. Modern std::vector (Dynamic Array)
    std::cout << "\n--- 2. MODERN DYNAMIC std::vector ---" << std::endl;
    std::vector<int> numbers; // Initially empty

    // Adding elements dynamically
    numbers.push_back(100);
    numbers.push_back(200);
    numbers.push_back(300);
    numbers.push_back(400);

    std::cout << "Initial Vector Size     : " << numbers.size() << std::endl;

    // Modifying elements
    numbers[1] = 250;

    // Removing the last element
    numbers.pop_back(); // Removes 400
    std::cout << "Size after pop_back()   : " << numbers.size() << std::endl;

    // Iterating with Range-based for loop
    std::cout << "\nVector Elements: ";
    for (int val : numbers) {
        std::cout << val << " ";
    }
    std::cout << std::endl;

    // Safe bound-checked access with .at()
    std::cout << "First Element (.at(0))  : " << numbers.at(0) << std::endl;

    return 0;
}
```

---

## 🔍 Code Breakdown

- `#include <vector>`: Required header for utilizing `std::vector`.
- `numbers.push_back(100)`: Appends `100` to the end of the vector, dynamically reallocating memory if necessary.
- `numbers.pop_back()`: Removes the last element from the vector in $O(1)$ constant time.
- `numbers.at(0)`: Accesses the element at index `0`. If index is out of bounds, throws an `std::out_of_range` exception instead of crashing with segmentation fault!

---

## 👀 Output

```text
--- 1. C-STYLE FIXED ARRAY ---
Fixed Array [0] = 10
Fixed Array [1] = 20
Fixed Array [2] = 30

--- 2. MODERN DYNAMIC std::vector ---
Initial Vector Size     : 4
Size after pop_back()   : 3

Vector Elements: 100 250 300 
First Element (.at(0))  : 100
```

---

## ⚠️ Common Mistakes

- **Out-Of-Bounds Memory Access (`arr[10]` on a size-3 array)**:
  Accessing an invalid index on a raw C-style array causes **Undefined Behavior (UB)** or a **Segmentation Fault** crash!
- **Passing Vectors by Value**: Passing a vector to a function as `void print(std::vector<int> v)` creates a duplicate copy of every element in memory! Always pass by const reference: `void print(const std::vector<int>& v)`.

---

## 🛡️ Best Practices

- Prefer `std::vector` over C-style arrays for almost all dynamic sequence needs in modern C++.
- Use `vec.reserve(N)` if you know the approximate number of elements in advance to prevent multiple memory reallocations.

---

## 🧪 Try It Yourself

1. Create a `std::vector<double>` containing 5 student test scores, then calculate and print their average score.
2. Reverse the order of elements in a vector using `std::reverse(vec.begin(), vec.end())` from `<algorithm>`.

---

## 🎯 Mini Challenge

Write a program that inputs numbers from a user one by one into a `std::vector<int>` until the user enters `-1`. Then print the minimum, maximum, and total sum of all entered numbers.

---

## 🔗 Related Topics

- [Loops in C++](07-loops.html)
- [STL Containers](15-stl-containers.html)

---

## 🧭 Navigation

[← C++ Home](./) | [← Previous: Functions](08-functions.html) | [Next: Classes & OOP →](10-classes-and-oops.html)

