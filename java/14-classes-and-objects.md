---
layout: default
title: "14 classes and objects"
---

# Classes and Objects

## Definition

A class defines a type and its behavior; an object is a particular instance of that class.

## Hindi Explanation

Class object banane ka design hai. Object us design ke hisaab se bani ek actual instance hai.

## Marathi Explanation

Class hi object tayar karnyachi rachana aahe. Object mhanje tya rachanechi ek vastavik instance.

## Hinglish Explanation

Class blueprint hai, object us blueprint se bana usable instance.

## Why Use It?

Classes group related state and operations under a meaningful type.

## Syntax and Example

```java
class BankAccount {
    private final String owner;
    private double balance;

    BankAccount(String owner, double openingBalance) {
        this.owner = owner;
        this.balance = openingBalance;
    }

    void deposit(double amount) {
        balance += amount;
    }

    double balance() {
        return balance;
    }
}
```

## Code Breakdown

Fields store per-object state. The constructor initializes a new account; `this.owner` refers to the field while `owner` is the parameter. Methods define behavior. Create and use an instance with `new BankAccount("Mira", 100.0)`.

## Another Practical Example

```java
BankAccount account = new BankAccount("Mira", 100.0);
account.deposit(25.0);
System.out.println(account.balance());
```

## Output

```text
125.0
```

## Common Mistakes

- Confusing a class declaration with an object instance.
- Leaving fields uninitialized when the class requires meaningful state.
- Exposing mutable fields publicly without considering invariants.
- Assuming each object has separate static fields; static fields belong to the class.

## Important Notes

Java is pass-by-value. For an object parameter, the copied value is a reference: a method can call mutating methods on that object, while assigning the parameter to another object does not change the caller's variable. Constructors have no return type.

## Real-World Usage

Domain classes represent accounts, products, orders, users, and other application concepts.

## Try It Yourself

Create a `Book` class with title, author, and a method that prints a description.

## Mini Challenge

Create two independent accounts and verify that depositing into one does not change the other's balance.

## Related Topics

[Encapsulation](15-encapsulation-and-composition.md) · [Generics](13-generics.md)

## Navigation

[Previous: Generics](13-generics.md) | [Home](00-README.md) | [Next: Encapsulation](15-encapsulation-and-composition.md)

