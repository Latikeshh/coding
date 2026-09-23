# Loops in C++

> 🟢 Beginner

## 📖 Definition

Loops repeat code blocks automatically. C++ supports standard `for` loops, `while` loops, `do-while` loops, and C++11 **range-based `for` loops**.

## 📝 Types of Loops

### 1. `for` Loop
```cpp
for (int i = 1; i <= 5; i++) {
    cout << "Count: " << i << endl;
}
```

### 2. Range-Based `for` Loop (Modern C++)
```cpp
int nums[] = {10, 20, 30};
for (int num : nums) {
    cout << "Value: " << num << endl;
}
```

## 💡 Practical Example

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Multiplication Table of 3:" << endl;
    for (int i = 1; i <= 10; i++) {
        cout << "3 x " << i << " = " << (3 * i) << endl;
    }
    return 0;
}
```

## 👀 Output

```text
Multiplication Table of 3:
3 x 1 = 3
3 x 2 = 6
...
3 x 10 = 30
```

## ⚠️ Common Mistakes

- Off-by-one errors in loop boundaries (e.g. `i < size` vs `i <= size`).

## 🧪 Try It Yourself

Write a `while` loop that asks the user to enter a positive number and keeps asking until a positive number is entered.

## 🎯 Mini Challenge

Print all even numbers from `2` to `50` using a `for` loop.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Conditionals](06-conditionals.md) | [Next: Functions →](08-functions.md)
