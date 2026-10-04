---
layout: default
title: "15 encapsulation and composition"
---

# Encapsulation and Composition

## Definition

Encapsulation protects an object's valid state behind methods. Composition builds a larger object from smaller collaborating objects.

## Hindi Explanation

Encapsulation object ke data ko niyamon ke through badalne deta hai. Composition mein ek object doosre objects ka istemal karta hai.

## Marathi Explanation

Encapsulation object cha data niyamanusar badalnyachi soy deto. Composition madhye ek object itar objects cha vapar karto.

## Hinglish Explanation

Fields ko direct chhedne ke bajay object se valid operation karvao; larger behavior ke liye objects ko compose karo.

## Why Use It?

Encapsulation keeps invariants enforceable; composition separates responsibilities and makes pieces reusable.

## Syntax and Example

```java
class BankAccount {
    private double balance;

    BankAccount(double openingBalance) {
        if (openingBalance < 0) throw new IllegalArgumentException("negative opening balance");
        balance = openingBalance;
    }

    void deposit(double amount) {
        if (amount <= 0) throw new IllegalArgumentException("amount must be positive");
        balance += amount;
    }

    double balance() { return balance; }
}
```

## Code Breakdown

`private` limits direct field access. Public or package-visible methods become the controlled operations. A getter is useful when callers need a value; setters are not automatically required.

## Another Practical Example

```java
class ShoppingCart {
    private final java.util.List<String> items = new java.util.ArrayList<>();
    void addItem(String item) { items.add(item); }
    int itemCount() { return items.size(); }
}
```

The cart contains a list and delegates storage to it: that is composition.

## Common Mistakes

- Making every field public.
- Adding trivial getters and setters without deciding the object's rules.
- Returning a mutable internal collection directly and allowing callers to bypass validation.

## Important Notes

Return immutable views or copies when exposing collections. Access modifiers include `private`, package-private (no modifier), `protected`, and `public`; use the narrowest access that serves the design.

## Real-World Usage

Encapsulation protects balances and order state; composition combines services, repositories, and value objects.

## Try It Yourself

Add a withdrawal method that rejects non-positive amounts and withdrawals above the current balance.

## Mini Challenge

Build a `Playlist` that contains `Song` objects and exposes add, remove, and read-only listing operations.

## Related Topics

[Classes](14-classes-and-objects.md) · [Inheritance](16-inheritance-and-polymorphism.md)

## Navigation

[Previous: Classes](14-classes-and-objects.md) | [Home](00-README.md) | [Next: Inheritance](16-inheritance-and-polymorphism.md)

