# Operator Overloading

> 🔴 Advanced

## 📖 Definition

**Operator Overloading** allows customization of built-in C++ operators (`+`, `-`, `==`, `<<`, `[]`, etc.) when applied to user-defined class objects.

---

## 📝 Syntax & Example

```cpp
#include <iostream>
using namespace std;

class Complex {
private:
    double real, imag;

public:
    Complex(double r = 0, double i = 0) : real(r), imag(i) {}

    // 1. Overloading binary '+' operator
    Complex operator+(const Complex& other) const {
        return Complex(real + other.real, imag + other.imag);
    }

    // 2. Overloading equality '==' operator
    bool operator==(const Complex& other) const {
        return (real == other.real) && (imag == other.imag);
    }

    // 3. Overloading '<<' stream insertion operator as friend function
    friend ostream& operator<<(ostream& os, const Complex& c) {
        os << c.real << " + " << c.imag << "i";
        return os;
    }
};

int main() {
    Complex c1(3.0, 4.0);
    Complex c2(1.5, 2.5);

    Complex c3 = c1 + c2; // Calls operator+
    cout << "c1 + c2 = " << c3 << endl;

    if (c1 == c2) {
        cout << "Equal" << endl;
    } else {
        cout << "Not Equal" << endl;
    }

    return 0;
}
```

---

## 👀 Output

```text
c1 + c2 = 4.5 + 6.5i
Not Equal
```

---

## 🧪 Try It Yourself

Create a `Point2D` class with `x` and `y` properties. Overload the `+` operator to add two points together.

## 🎯 Mini Challenge

Overload the `[]` array subscript operator in a custom `IntArrayWrapper` class to allow indexed element access with bounds checking.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Polymorphism](12-inheritance-and-polymorphism.md) | [Next: Smart Pointers →](14-smart-pointers.md)
