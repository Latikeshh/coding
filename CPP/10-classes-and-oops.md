# Classes and OOP in C++

> 🟡 Intermediate

## 📖 Definition

**Object-Oriented Programming (OOP)** is a design paradigm built around **classes** (blueprints) and **objects** (instances of classes).

## 📝 Core Concepts

1. **Class:** User-defined template with attributes (data) and methods (functions).
2. **Access Specifiers:** `public` (accessible anywhere), `private` (accessible only inside class).
3. **Constructor:** Special method invoked automatically when an object is created.

## 💡 Practical Example

```cpp
#include <iostream>
#include <string>
using namespace std;

class Car {
private:
    string brand;
    int year;

public:
    // Constructor
    Car(string b, int y) {
        brand = b;
        year = y;
    }

    // Member function / Method
    void displayInfo() {
        cout << "Car Brand: " << brand << ", Year: " << year << endl;
    }
};

int main() {
    // Creating Objects
    Car car1("Tesla", 2023);
    Car car2("Ford", 2020);

    car1.displayInfo();
    car2.displayInfo();

    return 0;
}
```

## 👀 Output

```text
Car Brand: Tesla, Year: 2023
Car Brand: Ford, Year: 2020
```

## ⚠️ Common Mistakes

- Trying to access `private` members directly outside the class:
  ```cpp
  car1.brand = "BMW"; // Error: 'brand' is private!
  ```

## 🧪 Try It Yourself

Create a `Student` class with private members `name` and `age`, a constructor, and a public `introduce()` method.

## 🎯 Mini Challenge

Create a `BankAccount` class with `deposit(amount)` and `withdraw(amount)` methods with balance checks.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Vectors](09-arrays-and-vectors.md) | [Next: Inheritance & Polymorphism →](11-inheritance-and-polymorphism.md)
