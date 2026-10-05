---
layout: default
title: "12 inheritance and polymorphism"
---

# Inheritance, Virtual Functions & Polymorphism (`virtual`, `override`, `= 0`)

> 🔴 Advanced

---

## 📖 Definition

- **Inheritance**: Allows a **Derived (Child) Class** to inherit properties and member functions from a **Base (Parent) Class**, promoting code reuse.
- **Polymorphism**: The ability of a single interface (such as a Base Class pointer or reference) to execute different overridden implementations in Derived classes at runtime.
- **Virtual Functions (`virtual`)**: Functions marked `virtual` in a base class enable **Dynamic Runtime Dispatch**.
- **Pure Virtual Functions (`= 0`)**: A virtual function declared with `= 0` turns the base class into an **Abstract Class** (which cannot be instantiated directly).

---

## 🇮🇳 Hindi Explanation

- **Inheritance**: Parents ki properties child class ko milna (jaise `Vehicle` base class se `Car` aur `Bike` banana).
- **Polymorphism**: Parent class ke pointer ke zariye child class ka custom method run hona.
- **`virtual` Keyword**: Bataney ke liye ki is function ko child class override kar sakti hai.
- **`override` Keyword**: Child class mein likha jata hai taaki compiler check kare ki parent function sahi se override ho raha hai.
- **Pure Virtual Function (`virtual void speak() = 0;`)**: Aisi method jiski koi body parent class mein nahi hoti. Child class ko ise compulsory implement karna padta hai.

---

## 🚩 Marathi Explanation

- **Inheritance**: Base class madhil attributes Derived class ne swikaarne.
- **Polymorphism**: Base class pointer cha vapar karun Derived class ce methods runtime la chalaavne.
- **`virtual` Keyword**: Runtime binding sathi vaparla jato.
- **`override` Keyword**: Derived class madhye function override zale ahe he spasht karnyansathi.

---

## 🏗️ Abstract Base Class Structure

```text
               [ Abstract Shape Class ]
              (virtual getArea() = 0)
                          |
         +----------------+----------------+
         |                                 |
  [ Circle Class ]               [ Rectangle Class ]
(override getArea())            (override getArea())
```

---

## 💡 Practical Example

```cpp
#include <iostream>
#include <vector>
#include <memory>

// 1. Abstract Base Class
class Shape {
public:
    // Pure Virtual Function (Forces derived classes to implement getArea)
    virtual double getArea() const = 0; 

    // Virtual Destructor IS MANDATORY for abstract base classes!
    virtual ~Shape() {
        std::cout << "[Shape Destructor] Base cleanup." << std::endl;
    }
};

// 2. Derived Class: Circle
class Circle : public Shape {
private:
    double radius;
public:
    Circle(double r) : radius(r) {}

    double getArea() const override {
        return 3.14159265 * radius * radius;
    }

    ~Circle() override {
        std::cout << "[Circle Destructor] Destroyed Circle." << std::endl;
    }
};

// 3. Derived Class: Rectangle
class Rectangle : public Shape {
private:
    double width, height;
public:
    Rectangle(double w, double h) : width(w), height(h) {}

    double getArea() const override {
        return width * height;
    }

    ~Rectangle() override {
        std::cout << "[Rectangle Destructor] Destroyed Rectangle." << std::endl;
    }
};

int main() {
    std::cout << "--- POLYMORPHISM DEMO WITH SMART POINTERS ---" << std::endl;

    // Vector storing base class unique_ptrs pointing to derived objects!
    std::vector<std::unique_ptr<Shape>> shapes;
    shapes.push_back(std::make_unique<Circle>(5.0));
    shapes.push_back(std::make_unique<Rectangle>(4.0, 6.0));

    // Dynamic Runtime Polymorphism in action!
    for (const auto& shape : shapes) {
        std::cout << "Calculated Area: " << shape->getArea() << " sq units" << std::endl;
    }

    std::cout << "\n--- CLEANING UP SHAPES ---" << std::endl;
    // Memory and destructors are automatically handled safely by unique_ptr!
    return 0;
}
```

---

## 🔍 Code Breakdown

- `virtual double getArea() const = 0;`: Pure virtual function turning `Shape` into an Abstract Class. You cannot write `Shape s;`.
- `double getArea() const override`: The `override` keyword ensures signature matching with the base class. If parameters mismatch, compiler raises an error immediately!
- `virtual ~Shape()`: Essential for avoiding memory leaks when deleting derived objects through base class pointers.

---

## 👀 Output

```text
--- POLYMORPHISM DEMO WITH SMART POINTERS ---
Calculated Area: 78.5398 sq units
Calculated Area: 24 sq units

--- CLEANING UP SHAPES ---
[Circle Destructor] Destroyed Circle.
[Shape Destructor] Base cleanup.
[Rectangle Destructor] Destroyed Rectangle.
[Shape Destructor] Base cleanup.
```

---

## ⚠️ Common Mistakes

- **Forgetting Virtual Destructor in Base Class**: If the base class destructor is NOT `virtual`, deleting a derived object via a base pointer invokes only the base destructor, causing memory leaks for derived class fields!
- **Instantiation Error on Abstract Classes**: Trying to write `Shape shapeObj;` triggers `'cannot declare variable of abstract type'` because of the pure virtual function `= 0`.

---

## 🛡️ Best Practices

- Always use the `override` keyword when overriding virtual methods in derived classes.
- Always make base class destructors `virtual`.

---

## 🧪 Try It Yourself

1. Create an abstract base class `Animal` with `virtual void makeSound() = 0;`. Create derived classes `Dog` and `Cat` that override `makeSound()`.

---

## 🎯 Mini Challenge

Create an `Employee` base class with a virtual `calculatePay()` method. Inherit `FullTimeEmployee` (salary based) and `Contractor` (hourly rate based). Render payroll totals using polymorphism.

---

## 🔗 Related Topics

- [Classes & Objects](10-classes-and-oops.html)
- [Smart Pointers](14-smart-pointers.html)

---

## 🧭 Navigation

[← C++ Home](./) | [← Previous: Constructors](11-constructors-and-destructors.html) | [Next: Operator Overloading →](13-operator-overloading.html)

