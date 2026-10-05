---
layout: default
title: "Object-Oriented Programming"
---

# Object-Oriented Programming (OOP) in Python

> 🔴 Advanced

## 📖 Definition

**Object-Oriented Programming (OOP)** is a paradigm that structures software around **Classes** (blueprints) and **Objects** (instances created from blueprints). OOP encapsulates state (data attributes) and behavior (methods) into reusable objects, supporting **Encapsulation**, **Inheritance**, and **Polymorphism**.

## 🇮🇳 Hindi

OOP mein **Class** ek design/blueprint hoti hai aur **Object** us design se bane actual instances hote hain. Instance variables initialize karne ke liye `__init__()` constructor method ka use hota hai, aur `self` parameter current object instance ko point karta hai.

## 🚩 Marathi

Class mhanje blueprint aani Object mhanje instance. Objects create honyasathi `__init__()` constructor vaparatat, aani `self` current instance la point karto.

## 🤔 Why Do We Use It?

Procedural programming keeps data variables and functions separated, leading to fragmented code as applications grow. OOP packages data and functions together into self-contained objects, reflecting real-world entities.

## 🧠 Simple Explanation

Think of a **Class** as a factory architectural blueprint for a smartphone. The blueprint defines attributes (`model`, `storage`, `battery_level`) and methods (`make_call()`, `charge()`). An **Object** is the actual physical phone manufactured from that blueprint.

## 📝 1. The `__init__` Constructor & `self` Parameter

- **`__init__(self, ...)`:** Automatically invoked when an object instance is created with `new_obj = ClassName()`.
- **`self`:** Explicit parameter representing the **current instance of the object** (must be the first parameter in instance methods!).

```python
class BankAccount:
    # Constructor
    def __init__(self, owner, balance=0.0):
        self.owner = owner          # Instance attribute
        self.balance = balance      # Instance attribute

    # Instance Method
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"Deposited ₹{amount:.2f}. New Balance: ₹{self.balance:.2f}")
```

## 📝 2. Class Attributes vs Instance Attributes

- **Instance Attributes (`self.attr`):** Unique to each individual object instance.
- **Class Attributes:** Defined directly in class body; shared globally across **ALL** object instances!

```python
class Student:
    school_name = "Delhi Public School" # Class attribute (shared)

    def __init__(self, name):
        self.name = name # Instance attribute (unique)
```

## 📝 3. Inheritance (`super()`) & Encapsulation Conventions

- **Inheritance:** `class SubClass(ParentClass):` inherits parent methods.
- **`super().__init__()`:** Calls parent class constructor.
- **Protected Convention (`_attr`):** Single underscore signals internal use.
- **Private Name Mangling (`__attr`):** Double underscore mangles name to prevent external access.

## 💡 Complete Example: E-Commerce Product & Electronics Subclass

```python
# OOP E-Commerce System

class Product:
    """Parent Superclass representing general store items."""
    def __init__(self, product_id, name, price):
        self.product_id = product_id
        self.name = name
        self._price = max(0.0, price) # Protected attribute
        
    def get_price(self):
        return self._price

    def display_details(self):
        return f"[{self.product_id}] {self.name} - ₹{self._price:.2f}"

# Subclass Inheriting from Product
class ElectronicsProduct(Product):
    """Subclass adding warranty attributes and method overriding."""
    def __init__(self, product_id, name, price, warranty_months):
        # Calling parent constructor using super()
        super().__init__(product_id, name, price)
        self.warranty_months = warranty_months

    # Overriding Parent Method (Polymorphism)
    def display_details(self):
        base_details = super().display_details()
        return f"{base_details} | Warranty: {self.warranty_months} Months"

# Testing OOP Classes
if __name__ == "__main__":
    p1 = Product("P-101", "Coffee Mug", 350.00)
    p2 = ElectronicsProduct("E-201", "Gaming Mouse", 1800.00, 24)

    print("=== E-COMMERCE PRODUCT CATALOG ===")
    print(p1.display_details())
    print(p2.display_details())
```

## 👀 Output

```text
=== E-COMMERCE PRODUCT CATALOG ===
[P-101] Coffee Mug - ₹350.00
[E-201] Gaming Mouse - ₹1800.00 | Warranty: 24 Months
```

## ⚠️ Common Mistakes

- Forgetting to include `self` as the first parameter in instance methods (`def my_method():` causes `TypeError: my_method() takes 0 positional arguments but 1 was given` when called on an instance!).
- Modifying a class attribute on an instance (`instance.class_attr = val`), which creates a new instance attribute instead of updating the shared class variable!

## 🛡️ Safety / Important Notes

Python relies on **Duck Typing** ("If it walks like a duck and quacks like a duck, it's a duck"). Polymorphism in Python does not require strict interface inheritance—any object that provides the required method name can be used polymorphically.

## 🌍 Real-World Usage

Django database models, custom exception classes, UI widget hierarchies, API response wrappers, and machine learning pipelines.

## 🧪 Try It Yourself

1. Create a `Car` class with attributes `brand` and `model`, and a method `drive()`.
2. Instantiate two distinct `Car` objects and invoke `drive()` on both.

## 🎯 Mini Challenge

Create a `BankAccount` class with private attribute `__balance`, and provide `deposit(amount)`, `withdraw(amount)`, and `get_balance()` methods with input validation.

## 🔗 Related Topics

- [Functions Advanced](15-functions-advanced.html)
- [Decorators](21-decorators.html)

## 🧭 Navigation

[← Python Home](./) | [← Previous: Exception Handling](18-exception-handling.html) | [Next: Iterators and Generators →](20-iterators-and-generators.html)

