# Functions & Pass-by-Reference in C++

> 🟢 Beginner

## 📖 Definition

Functions organize code into modular blocks. C++ allows passing parameters by **value** (makes a copy) or by **reference** using `&` (modifies original variable directly).

## 📝 Syntax & Pass-by-Reference

```cpp
// Pass-by-reference using &
void doubleValue(int &num) {
    num *= 2; // Directly modifies caller variable
}
```

## 💡 Practical Example

```cpp
#include <iostream>
using namespace std;

// Function prototype with default argument
int multiply(int a, int b = 1);

void swapValues(int &x, int &y) {
    int temp = x;
    x = y;
    y = temp;
}

int main() {
    int a = 5, b = 10;

    cout << "Before swap: a = " << a << ", b = " << b << endl;
    swapValues(a, b);
    cout << "After swap: a = " << a << ", b = " << b << endl;

    cout << "Multiply(4, 3): " << multiply(4, 3) << endl;
    cout << "Multiply(7) [using default]: " << multiply(7) << endl;

    return 0;
}

int multiply(int a, int b) {
    return a * b;
}
```

## 👀 Output

```text
Before swap: a = 5, b = 10
After swap: a = 10, b = 5
Multiply(4, 3): 12
Multiply(7) [using default]: 7
```

## ⚠️ Common Mistakes

- Modifying arguments unintendedly when passing by reference: use `const int &num` if you want reference performance without allowing modification.

## 🧪 Try It Yourself

Write a function `void square(int &n)` that squares the variable passed to it by reference.

## 🎯 Mini Challenge

Write an overloaded function `area(int side)` for square area and `area(int length, int width)` for rectangle area.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Loops](07-loops.md) | [Next: Arrays & Vectors →](09-arrays-and-vectors.md)
