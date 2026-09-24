# Inheritance & Polymorphism (`virtual`, `override`)

> 🔴 Advanced

## 📖 Definition

- **Inheritance:** Derived classes inherit attributes and member functions from parent base classes.
- **Polymorphism:** Allows base pointers or references to trigger derived class method overrides dynamically at runtime using `virtual` and `override`.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Pure virtual functions (`virtual void f() = 0;`) create Abstract Classes. Derived classes use `override` for dynamic polymorphism.
> - **Hindi:** प्योर वर्चुअल फंक्शन (`virtual void f() = 0;`) से एब्स्ट्रैक्ट क्लास बनती है। चाइल्ड क्लास में `override` का प्रयोग करें।
> - **Marathi:** पॉलिमॉर्फिझममुळे बेस क्लास पॉइंटरद्वारे डिराईव्हड क्लासचे पद्धती (methods) चालवता येतात.
> - **Hinglish:** Base class pointers ke zariye runtime child class methods execute karne ke liye `virtual` function aur `override` keyword use karo.

## 📝 Syntax

```cpp
#include <iostream>
#include <vector>
using namespace std;

// Abstract Base Class
class Shape {
public:
    virtual double getArea() const = 0; // Pure virtual function
    virtual ~Shape() {} // Virtual destructor for safe cleanup
};

class Circle : public Shape {
private:
    double radius;
public:
    Circle(double r) : radius(r) {}
    double getArea() const override { return 3.14159 * radius * radius; }
};
```

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Constructors](11-constructors-and-destructors.md) | [Next: Operator Overloading →](13-operator-overloading.md)
