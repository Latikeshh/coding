# Operator Overloading

> 🔴 Advanced

## 📖 Definition

Operator Overloading customizes built-in C++ operators (`+`, `-`, `==`, `<<`, `[]`) for custom user-defined classes.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Customize operators (`+`, `==`, `<<`) for custom class objects (`Complex c3 = c1 + c2;`).
> - **Hindi:** कस्टम क्लास ऑब्जेक्ट्स पर मैथ या कम्पेरिजन ऑपरेटर (`+`, `==`) चलाने के लिए ऑपरेटर ओवरलोडिंग का उपयोग होता है।
> - **Marathi:** कस्टम क्लासच्या ऑब्जेक्ट्सवर ऑपरेटर चालवण्यासाठी ऑपरेटर ओव्हरलोडिंग वापरतात.
> - **Hinglish:** Custom classes par builtin operators (`+`, `==`, `<<`) apply karne ke liye operator functions (`Complex operator+(const Complex& other)`) write kiye jaate hain.

## 📝 Syntax

```cpp
#include <iostream>
using namespace std;

class Complex {
private:
    double real, imag;
public:
    Complex(double r = 0, double i = 0) : real(r), imag(i) {}

    Complex operator+(const Complex& other) const {
        return Complex(real + other.real, imag + other.imag);
    }
};
```

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Polymorphism](12-inheritance-and-polymorphism.md) | [Next: Smart Pointers →](14-smart-pointers.md)
