# Operators in C++

> 🟢 Beginner

## 📖 Definition

**Operators** in C++ perform arithmetic, comparison, logical, and assignment operations.

## 📝 Operators Summary

1. **Arithmetic:** `+`, `-`, `*`, `/`, `%`
2. **Relational:** `==`, `!=`, `>`, `<`, `>=`, `<=`
3. **Logical:** `&&` (AND), `||` (OR), `!` (NOT)
4. **Compound Assignment:** `+=`, `-=`, `*=`, `/=`

## 💡 Practical Example

```cpp
#include <iostream>
using namespace std;

int main() {
    int x = 20, y = 6;

    cout << "Addition: " << (x + y) << endl;
    cout << "Division (integer): " << (x / y) << endl;
    cout << "Remainder: " << (x % y) << endl;

    x += 5; // x is now 25
    cout << "Updated x: " << x << endl;

    bool result = (x > 20) && (y < 10);
    cout << "Logical Check: " << (result ? "True" : "False") << endl;

    return 0;
}
```

## 👀 Output

```text
Addition: 26
Division (integer): 3
Remainder: 2
Updated x: 25
Logical Check: True
```

## ⚠️ Common Mistakes

- Confusing assignment `=` with equality comparison `==`.

## 🧪 Try It Yourself

Write a C++ program that checks if a user-entered number is between `1` and `100` using `&&`.

## 🎯 Mini Challenge

Write a program that calculates the compound assignment score of a game after 3 rounds (`score += roundPoints`).

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Input/Output](04-input-output.md) | [Next: Conditionals →](06-conditionals.md)
