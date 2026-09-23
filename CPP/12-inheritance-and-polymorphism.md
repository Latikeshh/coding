# Inheritance & Polymorphism (`virtual`, `override`)

> 🔴 Advanced

## 📖 Definition

- **Inheritance:** Class mechanism to inherit fields and methods from parent base classes.
- **Polymorphism:** Allows base class pointers or references to invoke derived class implementations at runtime using `virtual` and `override`.

---

## 📝 Virtual Functions & Pure Virtual Classes (Abstract Classes)

A class containing at least one **pure virtual function** (`virtual void func() = 0;`) is an **Abstract Class** and cannot be directly instantiated.

```cpp
#include <iostream>
#include <vector>
#include <memory>
using namespace std;

// Abstract Base Class
class Shape {
public:
    // Pure virtual function
    virtual double getArea() const = 0;

    // Virtual Destructor (Crucial for proper cleanup in derived objects!)
    virtual ~Shape() {
        cout << "Shape Destructor" << endl;
    }
};

class Circle : public Shape {
private:
    double radius;
public:
    Circle(double r) : radius(r) {}

    double getArea() const override {
        return 3.14159 * radius * radius;
    }

    ~Circle() override {
        cout << "Circle Destructor" << endl;
    }
};

class Rectangle : public Shape {
private:
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}

    double getArea() const override {
        return width * height;
    }
};

int main() {
    // Array of base pointers holding derived objects (Polymorphism)
    vector<Shape*> shapes;
    shapes.push_back(new Circle(5.0));
    shapes.push_back(new Rectangle(4.0, 6.0));

    for (const Shape* shape : shapes) {
        cout << "Area: " << shape->getArea() << endl;
    }

    // Cleanup
    for (Shape* shape : shapes) delete shape;

    return 0;
}
```

---

## 👀 Output

```text
Area: 78.5398
Area: 24
Circle Destructor
Shape Destructor
Shape Destructor
```

---

## 🧪 Try It Yourself

Create an abstract base class `Employee` with a pure virtual `calculatePay()` method. Derive `SalariedEmployee` and `HourlyEmployee`.

## 🎯 Mini Challenge

Explain why polymorphic base classes must always declare a `virtual ~Base()` destructor.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Constructors](11-constructors-and-destructors.md) | [Next: Operator Overloading →](13-operator-overloading.md)
