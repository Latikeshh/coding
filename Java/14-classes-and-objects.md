---
layout: default
title: "Classes and Objects"
---

# Classes and Objects in Java

> 🟢 Beginner

## 📖 Definition

In Java's Object-Oriented Programming (OOP) model:
- A **Class** is an abstract blueprint, template, or user-defined data type that defines fields (state) and methods (behavior).
- An **Object** is a concrete instance of a class allocated in Heap memory using the `new` keyword.

## 🇮🇳 Hindi

Class ek blueprint/design hoti hai, aur Object us blueprint se bana ek actual instance hota hai jo Heap memory mein jagah leta hai. Fields object ka State (data) hold karte hain aur Methods object ka Behavior (logic) define karte hain.

## 🚩 Marathi

Class mhanje blueprint aani Object mhanje Heap memory madhye tayar jalele instance.

## 🤔 Why Do We Use Them?

Procedural programming stores data and functions separately, leading to fragmented code. Object-Oriented design packages state (data variables) and behavior (methods) together into self-contained objects that mirror real-world entities.

## 🧠 Simple Explanation

Think of a **Class** as an architectural blueprint for a sports car. The blueprint specifies variables (`color`, `maxSpeed`) and methods (`accelerate()`, `brake()`). An **Object** is the actual physical car built from that blueprint. You can build 1,000 distinct cars (objects) from one single blueprint.

## 📝 1. Instance vs Static Members

- **Instance Fields/Methods:** Belong to a specific object instance. Every object has its own separate copy of instance variables.
- **Static Fields/Methods:** Belong to the **Class itself**. Shared globally across all object instances (`ClassName.staticMethod()`).

## 📝 2. Constructors & Initializer Blocks

Constructors are special methods invoked automatically during object instantiation via `new` to initialize instance fields.

- **Default Constructor:** Provided automatically by compiler if no constructor is written.
- **Parameterized Constructor:** Accepts custom arguments.
- **Constructor Chaining (`this(...)`):** Calling one constructor from another inside the same class.
- **Static Initializer Block (`static { ... }`):** Runs **ONCE** when the class is first loaded into JVM memory.

```java
public class Car {
    private String model; // Instance field
    private static int totalCarsManufactured = 0; // Static field

    // Static Initializer
    static {
        System.out.println("Car Class Loaded in JVM.");
    }

    // Parameterized Constructor
    public Car(String model) {
        this.model = model;
        totalCarsManufactured++;
    }
}
```

## 🧠 3. Memory Model: Stack vs Heap

- **Stack Memory:** Stores short-lived local variables and method call frames. Holds object reference pointers.
- **Heap Memory:** Stores actual object instances created with `new`. Garbage Collection automatically reclaims unreachable heap memory objects.

```text
STACK MEMORY                     HEAP MEMORY
+-----------------------+        +-----------------------------------+
| main() frame          |        |                                   |
| account1 reference ----------> | BankAccount Object Instance #1    |
| account2 reference ----------> | BankAccount Object Instance #2    |
+-----------------------+        +-----------------------------------+
```

## 💡 Complete Example: Bank Account Management Engine

```java
public class BankAccount {
    // Instance Fields (State)
    private final String accountNumber;
    private final String accountHolder;
    private double balance;

    // Static Class Field
    private static double interestRate = 4.5; // Shared across all accounts

    // Constructor Chaining
    public BankAccount(String accountNumber, String accountHolder) {
        this(accountNumber, accountHolder, 0.0); // Chaining to 3-arg constructor
    }

    public BankAccount(String accountNumber, String accountHolder, double initialBalance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = Math.max(0.0, initialBalance);
    }

    // Instance Methods (Behavior)
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.printf("Deposited ₹%.2f. New Balance: ₹%.2f%n", amount, balance);
        }
    }

    public boolean withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            balance -= amount;
            System.out.printf("Withdrew ₹%.2f. Remaining Balance: ₹%.2f%n", amount, balance);
            return true;
        }
        System.out.println("Withdrawal Failed: Insufficient funds or invalid amount.");
        return false;
    }

    // Static Utility Method
    public static void setInterestRate(double newRate) {
        if (newRate >= 0) {
            interestRate = newRate;
        }
    }

    public void displayAccountInfo() {
        System.out.printf("Acc #%s | Holder: %s | Balance: ₹%.2f | Interest: %.1f%%%n",
                accountNumber, accountHolder, balance, interestRate);
    }

    public static void main(String[] args) {
        BankAccount acc1 = new BankAccount("ACC-101", "Aarav Sharma", 10000.00);
        BankAccount acc2 = new BankAccount("ACC-102", "Priya Verma", 5000.00);

        acc1.deposit(2500.00);
        acc2.withdraw(1500.00);

        // Updating static interest rate affects all instances!
        BankAccount.setInterestRate(5.0);

        System.out.println("\n--- FINAL ACCOUNT STATES ---");
        acc1.displayAccountInfo();
        acc2.displayAccountInfo();
    }
}
```

## 👀 Output

```text
Deposited ₹2500.00. New Balance: ₹12500.00
Withdrew ₹1500.00. Remaining Balance: ₹3500.00

--- FINAL ACCOUNT STATES ---
Acc #ACC-101 | Holder: Aarav Sharma | Balance: ₹12500.00 | Interest: 5.0%
Acc #ACC-102 | Holder: Priya Verma | Balance: ₹3500.00 | Interest: 5.0%
```

## ⚠️ Common Mistakes

- Invoking instance methods on a `null` reference variable, triggering a `NullPointerException`.
- Accessing instance variables directly inside a `static` method without an object instance (`static` contexts cannot access `this`).
- Forgetting to write `this.` when parameter names match instance field names (shadowing!).

## 🛡️ Safety / Important Notes

Always initialize instance fields inside constructors to maintain valid class invariants before any methods are called on the object.

## 🌍 Real-World Usage

Domain modeling across software applications: User entities, Product catalogs, Order records, Shopping carts, and Database entities.

## 🧪 Try It Yourself

1. Create a `Book` class with `title`, `author`, `price`, and a method `getDetails()`.
2. Instantiate two distinct `Book` objects and display their details.

## 🎯 Mini Challenge

Add a static variable `totalBooksCreated` to the `Book` class that increments automatically every time any constructor is called.

## 🔗 Related Topics

- [Methods](08-methods.md)
- [Encapsulation and Composition](15-encapsulation-and-composition.md)

## 🧭 Navigation

[← Java Home](00-README.md) | [← Previous: Generics](13-generics.md) | [Next: Encapsulation and Composition →](15-encapsulation-and-composition.md)
