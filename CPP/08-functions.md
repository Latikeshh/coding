# Functions & Pass-by-Reference in C++

> 🟢 Beginner

## 📖 Definition

Functions organize code into modular, reusable blocks. C++ allows passing function parameters by **Value** (copies value) or by **Reference** (`&`), which avoids expensive copies and allows direct caller variable modification.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Pass-by-reference (`&`) allows a function to modify the caller's variable directly and avoids making data copies. Use `const T&` to prevent unwanted modification.
> - **Hindi:** पास-बाय-रेफरेंस (`&`) से फंक्शन ओरिजिनल वेरिएबल को सीधे बदल सकता है। बिना बदलाव के फ़ास्ट परफॉरमेंस के लिए `const T&` का इस्तेमाल करें।
> - **Marathi:** `&` (रेफरन्स) मुळे मूळ व्हॅरियबलमध्ये थेट बदल करता येतो आणि कॉपी करण्याचा खर्च वाचतो.
> - **Hinglish:** Pass-by-reference (`&`) se unnecessary variable copying avoid hoti hai. Modifying stop karne ke saath speed chahiye toh `const T&` pass karo.

## 📝 Syntax & Pass-by-Reference

```cpp
// Pass-by-reference using &
void doubleValue(int &num) {
    num *= 2; // Directly modifies original variable
}

// Pass-by-const-reference (Fast & Read-only)
void printMessage(const std::string &msg) {
    std::cout << msg << std::endl;
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

- Accidentally modifying caller variables when passing by reference: use `const int &num` if you want reference performance without allowing caller variable mutation.

## 🧪 Try It Yourself

Write a function `void square(int &n)` that squares the variable passed to it by reference.

## 🎯 Mini Challenge

Write an overloaded function `area(int side)` for square area and `area(int length, int width)` for rectangle area.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Loops](07-loops.md) | [Next: Arrays & Vectors →](09-arrays-and-vectors.md)
