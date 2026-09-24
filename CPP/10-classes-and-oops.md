# Classes & Objects (OOP Basics)

> 🟡 Intermediate

## 📖 Definition

**Object-Oriented Programming (OOP)** is a design paradigm based on **Classes** (blueprints/user-defined types) and **Objects** (instances of classes holding data and methods).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Classes encapsulate data (private members) and behavior (public methods). Encapsulation protects object state from unauthorized modification.
> - **Hindi:** क्लास एक ब्लू-प्रिंट है और ऑब्जेक्ट उसका इंस्टेंस है। एन्कैप्सुलेशन से डेटा को `private` रखकर सुरक्षित किया जाता है।
> - **Marathi:** क्लास म्हणजे ब्लू-प्रिंट आणि ऑब्जेक्ट म्हणजे त्याचे रूप. एन्कॅप्स्युलेशनमुळे डेटा सुरक्षित राहतो.
> - **Hinglish:** Class ek blueprint hai aur object uski real copy. Data security ke liye members ko `private` rakha jaata hai.

## 📝 Core Concepts

1. **Class:** User-defined template containing state attributes (member variables) and behavior (member functions/methods).
2. **Access Specifiers:**
   - `private`: Accessible only inside class member functions (Encapsulation).
   - `public`: Accessible from anywhere outside the class.
   - `protected`: Accessible inside class and derived inheritance classes.
3. **Constructor:** Special initialization function executed automatically upon object instantiation.

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
    Car(string b, int y) : brand(b), year(y) {}

    // Member function / Method
    void displayInfo() const {
        cout << "Car Brand: " << brand << " | Year: " << year << endl;
    }
};

int main() {
    // Instantiating Objects
    Car car1("Tesla", 2023);
    Car car2("Ford", 2020);

    car1.displayInfo();
    car2.displayInfo();

    return 0;
}
```

## 👀 Output

```text
Car Brand: Tesla | Year: 2023
Car Brand: Ford | Year: 2020
```

## ⚠️ Common Mistakes

- Attempting to modify `private` fields directly from outside class scope (`car1.brand = "BMW";` triggers a compilation error!). Use public getter/setter methods instead.

## 🧪 Try It Yourself

Create a `Student` class with private members `name` and `age`, a constructor, and a public `introduce()` method.

## 🎯 Mini Challenge

Create a `BankAccount` class with `deposit(amount)` and `withdraw(amount)` methods containing balance validation checks.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Vectors](09-arrays-and-vectors.md) | [Next: Constructors & Destructors →](11-constructors-and-destructors.md)
