# Variables and Data Types in C++

> 🟢 Beginner

## 📖 Definition

Variables in C++ store typed data in memory locations. C++ is a strongly typed language, meaning every variable must be declared with a specific data type.

## 📝 Data Types Overview

| Data Type | Keyword | Description | Example |
|---|---|---|---|
| Integer | `int` | Whole numbers | `42` |
| Floating Point | `float` / `double` | Decimals | `3.14159` |
| Boolean | `bool` | `true` or `false` | `true` |
| Character | `char` | Single character | `'Z'` |
| String | `std::string` | Sequence of text | `"C++ Rules"` |

## 💡 Practical Example

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string playerName = "Aria";
    int score = 250;
    double health = 98.5;
    bool isAlive = true;

    cout << "Player: " << playerName << endl;
    cout << "Score: " << score << endl;
    cout << "Health: " << health << "%" << endl;
    cout << "Active: " << (isAlive ? "Yes" : "No") << endl;

    return 0;
}
```

## 👀 Output

```text
Player: Aria
Score: 250
Health: 98.5%
Active: Yes
```

## ⚠️ Common Mistakes

- Forgetting `#include <string>` when using the `std::string` data type.

## 🧪 Try It Yourself

Declare a `string` variable `item` and a `double` variable `price`. Print `"The [item] costs $[price]"`.

## 🎯 Mini Challenge

Declare variables for student name, total marks, and pass/fail boolean status, then display a summary card.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Introduction](02-introduction-to-cpp.md) | [Next: Input & Output →](04-input-output.md)
