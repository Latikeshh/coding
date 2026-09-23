# STL Algorithms & Iterators

> 🟡 Intermediate

## 📖 Definition

The C++ `<algorithm>` library provides over 100 template functions to sort, search, transform, and manipulate ranges of data using **Iterators**.

---

## 📝 Essential STL Algorithms

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int main() {
    vector<int> nums = {40, 10, 50, 20, 30};

    // 1. std::sort (Ascending order)
    sort(nums.begin(), nums.end());
    // nums is now: {10, 20, 30, 40, 50}

    // 2. std::binary_search (Requires sorted container)
    bool exists = binary_search(nums.begin(), nums.end(), 30);
    cout << "30 exists: " << (exists ? "Yes" : "No") << endl;

    // 3. std::find
    auto it = find(nums.begin(), nums.end(), 20);
    if (it != nums.end()) {
        cout << "Found 20 at index: " << distance(nums.begin(), it) << endl;
    }

    // 4. std::accumulate (Sum of elements from <numeric>)
    int sum = accumulate(nums.begin(), nums.end(), 0);
    cout << "Sum: " << sum << endl;

    // 5. Custom Sort with Lambda (Descending)
    sort(nums.begin(), nums.end(), [](int a, int b) { return a > b; });

    return 0;
}
```

---

## 👀 Output

```text
30 exists: Yes
Found 20 at index: 1
Sum: 150
```

---

## 🧪 Try It Yourself

Create a `vector<string>` of names and sort them in reverse alphabetical order using `std::sort`.

## 🎯 Mini Challenge

Use `std::count_if` to count how many even numbers exist in a `vector<int>`.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: STL Containers](15-stl-containers.md) | [Next: Templates →](17-templates.md)
