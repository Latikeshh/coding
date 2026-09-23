# Arrays and Vectors in C++

> 🟡 Intermediate

## 📖 Definition

While fixed C-style arrays have fixed sizes, C++ provides `std::vector`—a dynamic array that can grow and shrink automatically during runtime.

## 📝 `std::vector` Basics (`<vector>`)

```cpp
#include <vector>

std::vector<int> numbers = {10, 20, 30};
numbers.push_back(40); // Adds 40 to the end
numbers.pop_back();    // Removes last element
cout << "Size: " << numbers.size() << endl;
```

## 💡 Practical Example

```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    vector<string> shoppingList;

    // Adding elements
    shoppingList.push_back("Apples");
    shoppingList.push_back("Milk");
    shoppingList.push_back("Bread");

    cout << "Shopping List (" << shoppingList.size() << " items):" << endl;
    for (int i = 0; i < shoppingList.size(); i++) {
        cout << (i + 1) << ". " << shoppingList[i] << endl;
    }

    return 0;
}
```

## 👀 Output

```text
Shopping List (3 items):
1. Apples
2. Milk
3. Bread
```

## ⚠️ Common Mistakes

- Trying to access vector indices out of bounds (use `.at(index)` for bounds-checked access).

## 🧪 Try It Yourself

Create a `vector<double>` for test scores, add 4 scores using `.push_back()`, and calculate the average score.

## 🎯 Mini Challenge

Write a program that takes numbers from the user until they enter `-1`, stores them in a `vector<int>`, and prints the sum.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Functions](08-functions.md) | [Next: Classes & OOP →](10-classes-and-oops.md)
