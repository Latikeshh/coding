# Generic Programming & Templates

> 🔴 Advanced

## 📖 Definition

**Templates** enable generic programming in C++, allowing functions and classes to work with any data type (`template <typename T>`) without code duplication.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Templates (`template <typename T>`) write generic functions and classes that work with any data type.
> - **Hindi:** टेम्पलेट्स (`template <typename T>`) से जेनेरिक फंक्शन और क्लासेस बनती हैं जो किसी भी डेटा टाइप पर काम करती हैं।
> - **Marathi:** टेम्पलेट्समुळे एकाच कोडद्वारे कोणत्याही डेटा टाईपवर काम करता येते.
> - **Hinglish:** Reusable generic functions aur classes likhne ke liye `template <typename T>` use karo.

## 📝 Syntax

```cpp
#include <iostream>
using namespace std;

template <typename T>
T getMin(T a, T b) {
    return (a < b) ? a : b;
}

int main() {
    cout << getMin(10, 20) << endl;     // Works with int
    cout << getMin(3.14, 1.5) << endl;  // Works with double
    return 0;
}
```

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: STL Algorithms](16-stl-algorithms.md) | [Next: Lambdas →](18-lambdas.md)
