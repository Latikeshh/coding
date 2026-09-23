# Inheritance and Polymorphism in C++

> 🟡 Intermediate

## 📖 Definition

- **Inheritance:** Allows a derived class to inherit properties and methods from a base class.
- **Polymorphism:** Allows methods to behave differently based on the object calling them (via `virtual` functions).

## 📝 Syntax

```cpp
class Base {
public:
    virtual void show() { cout << "Base" << endl; }
};

class Derived : public Base {
public:
    void show() override { cout << "Derived" << endl; }
};
```

## 💡 Practical Example

```cpp
#include <iostream>
using namespace std;

// Base class
class Animal {
public:
    virtual void makeSound() {
        cout << "Some generic animal sound" << endl;
    }
};

// Derived class 1
class Dog : public Animal {
public:
    void makeSound() override {
        cout << "Woof! Woof!" << endl;
    }
};

// Derived class 2
class Cat : public Animal {
public:
    void makeSound() override {
        cout << "Meow!" << endl;
    }
};

int main() {
    Animal* a1 = new Dog();
    Animal* a2 = new Cat();

    a1->makeSound(); // Polymorphic call: Woof! Woof!
    a2->makeSound(); // Polymorphic call: Meow!

    delete a1;
    delete a2;
    return 0;
}
```

## 👀 Output

```text
Woof! Woof!
Meow!
```

## ⚠️ Common Mistakes

- Forgetting `virtual` in the base class declaration, which prevents dynamic runtime polymorphism.

## 🧪 Try It Yourself

Create a base class `Shape` with a `virtual void draw()` method and derived classes `Circle` and `Square`.

## 🎯 Mini Challenge

Add a `getArea()` virtual method to `Shape` and implement specific area formulas in `Rectangle` and `Circle`.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Classes & OOP](10-classes-and-oops.md) | [Next: Mini Projects →](12-mini-projects.md)
