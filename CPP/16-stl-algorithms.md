---
layout: default
title: "16 stl algorithms"
---

# C++ STL Algorithms (`std::sort`, `std::find`, `std::accumulate`, `std::transform`)

> 🟡 Intermediate

---

## 📖 Definition

The C++ Standard Template Library provides **STL Algorithms** in the `<algorithm>` and `<numeric>` headers. STL algorithms operate on ranges of elements using **Iterators** (`begin()`, `end()`). They provide highly optimized implementations for sorting, searching, transforming, counting, and aggregating container elements.

---

## 🇮🇳 Hindi Explanation

STL Algorithms C++ ke banae-banaye high-speed functions hain jo arrays ya vectors par kaam karte hain.
- `std::sort()`: Elements ko ascending ya descending order mein sort karta hai ($O(N \log N)$ IntroSort).
- `std::find()`: Kisi value ko search karta hai.
- `std::accumulate()`: Saare numbers ka sum (total) karta hai.
- `std::transform()`: Every element par function apply karke naya result generate karta hai.

---

## 🚩 Marathi Explanation

STL Algorithms mhanje `<algorithm>` madhye uplabdh aslele vegvan ready-made functions.
- `std::sort()`: Container madhil elements sort karnyasathi.
- `std::find()`: Specific value shodhnayasathi.
- `std::accumulate()`: Element chi berij (sum) karnyasathi.
- `std::transform()`: Elements transform/modify karnyasathi.

---

## 📊 Summary Table of Essential STL Algorithms

| Algorithm | Header | Complexity | Description |
|:---|:---:|:---:|:---|
| `std::sort(first, last)` | `<algorithm>` | $O(N \log N)$ | Sorts elements in ascending/custom order |
| `std::find(first, last, val)` | `<algorithm>` | $O(N)$ | Searches for matching value |
| `std::accumulate(first, last, init)`| `<numeric>` | $O(N)$ | Calculates sum of elements from initial value |
| `std::count(first, last, val)` | `<algorithm>` | $O(N)$ | Counts occurrences of matching value |
| `std::transform(first, last, out, op)`| `<algorithm>` | $O(N)$ | Applies operation/transformation to elements |
| `std::reverse(first, last)` | `<algorithm>` | $O(N)$ | Reverses element sequence in-place |

---

## 💡 Practical Example

```cpp
#include <iostream>
#include <vector>
#include <algorithm> // For std::sort, std::find, std::transform
#include <numeric>   // For std::accumulate

int main() {
    std::vector<int> numbers = {45, 12, 85, 32, 89, 12, 67};

    // 1. Sorting Elements
    std::cout << "--- 1. SORTING ---" << std::endl;
    std::sort(numbers.begin(), numbers.end()); // Ascending sort

    std::cout << "Sorted Numbers: ";
    for (int num : numbers) {
        std::cout << num << " ";
    }
    std::cout << std::endl;

    // 2. Searching with std::find
    std::cout << "\n--- 2. SEARCHING ---" << std::endl;
    int target = 85;
    auto it = std::find(numbers.begin(), numbers.end(), target);
    if (it != numbers.end()) {
        std::cout << "Found target " << target << " at index: " << std::distance(numbers.begin(), it) << std::endl;
    }

    // 3. Accumulating Sum with std::accumulate
    std::cout << "\n--- 3. ACCUMULATE (SUM) ---" << std::endl;
    int totalSum = std::accumulate(numbers.begin(), numbers.end(), 0);
    std::cout << "Total Sum of Elements: " << totalSum << std::endl;

    // 4. Transforming Elements (Doubling every value using lambda)
    std::cout << "\n--- 4. TRANSFORMING ---" << std::endl;
    std::vector<int> doubledNumbers(numbers.size());
    std::transform(numbers.begin(), numbers.end(), doubledNumbers.begin(), [](int x) {
        return x * 2;
    });

    std::cout << "Doubled Numbers: ";
    for (int val : doubledNumbers) {
        std::cout << val << " ";
    }
    std::cout << std::endl;

    return 0;
}
```

---

## 🔍 Code Breakdown

- `numbers.begin()`, `numbers.end()`: Iterators pointing to the start and end boundary of the container.
- `std::accumulate(..., 0)`: Starts accumulating with initial seed value `0`.
- `[](int x) { return x * 2; }`: A C++ Lambda function passed directly into `std::transform`.

---

## 👀 Output

```text
--- 1. SORTING ---
Sorted Numbers: 12 12 32 45 67 85 89 

--- 2. SEARCHING ---
Found target 85 at index: 5

--- 3. ACCUMULATE (SUM) ---
Total Sum of Elements: 342

--- 4. TRANSFORMING ---
Doubled Numbers: 24 24 64 90 134 170 178 
```

---

## ⚠️ Common Mistakes

- **Writing Custom Loops Instead of STL Algorithms**: Handwritten loops are longer, bug-prone, and often less optimized than STL algorithms.
- **Forgetting `<numeric>` Header for `accumulate`**: `std::accumulate` is inside `<numeric>`, NOT `<algorithm>`!

---

## 🛡️ Best Practices

- Use `std::sort` with custom comparators or lambdas to sort objects by specific fields: `std::sort(v.begin(), v.end(), [](const Item& a, const Item& b) { return a.price < b.price; });`.

---

## 🧪 Try It Yourself

1. Sort a `std::vector<int>` in **descending order** using `std::greater<int>()`.
2. Count how many times the number `12` appears in a vector using `std::count()`.

---

## 🎯 Mini Challenge

Write a program that uses `std::remove_if` and vector `.erase()` (Erase-Remove Idiom) to remove all odd numbers from a `std::vector<int>`.

---

## 🔗 Related Topics

- [STL Containers](15-stl-containers.html)
- [Lambda Expressions](18-lambdas.html)

---

## 🧭 Navigation

[← C++ Home](./) | [← Previous: STL Containers](15-stl-containers.html) | [Next: Templates →](17-templates.html)

