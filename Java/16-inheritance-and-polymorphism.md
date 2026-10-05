---
layout: default
title: "Inheritance and Polymorphism"
---

# Inheritance and Polymorphism in Java

> 🔴 Advanced

## 📖 Definition

- **Inheritance:** An OOP mechanism where a child subclass derives fields and methods from a parent superclass using the `extends` keyword (**"Is-A" Relationship**).
- **Polymorphism:** The ability of an object reference to take on many forms. **Runtime Polymorphism (Dynamic Method Dispatch)** allows a parent superclass reference variable to invoke overridden methods defined in specific child subclasses at runtime.

## 🇮🇳 Hindi

Inheritance se Child Class, Parent Class ke fields aur methods ko inherit karti hai (`extends`). Polymorphism se hum Parent class ka reference variable declare karte hain, lekin call hone par Runtime par actual Subclass ka overridden method execute hota hai.

## 🚩 Marathi

Inheritance madhye Child Class Parent Class kadun गुणधर्म (properties) ghete. Polymorphism mule Parent class reference varti call kelya varti Subclass cha method run hoto.

## 📝 1. Method Overriding vs Overloading

| Feature | Method Overloading | Method Overriding |
|---|---|---|
| Type | Compile-Time Polymorphism | Runtime Polymorphism |
| Location | Same Class | Parent & Child Classes |
| Method Signature | **Must vary** (different parameter list) | **Must match exactly** (same name & params) |
| Inheritance Required? | ❌ No | ✅ Yes |

## 📝 2. The `super` Keyword

- `super()`: Calls parent superclass constructor (must be the first line in child constructor).
- `super.method()`: Calls parent superclass method implementation.

## 📝 3. Pattern Matching for `instanceof` (Java 16+)

Eliminates manual downcasting boilerplate:

```java
// Traditional Downcasting
if (animal instanceof Dog) {
    Dog d = (Dog) animal; // Manual downcast
    d.bark();
}

// Modern Pattern Matching for instanceof (Java 16+)
if (animal instanceof Dog d) {
    d.bark(); // 'd' is automatically downcast and available in scope!
}
```

## 🧠 4. Why Multiple Class Inheritance Is Not Allowed (The Diamond Problem)

Java does **NOT** support extending multiple classes (`class C extends A, B` is INVALID!). If Class A and Class B declare the same method `execute()`, Class C would not know which parent implementation to inherit (**The Diamond Problem**). Java solves this by allowing single class inheritance with multiple **Interface** implementation!

```text
       +------------------+

       |   SuperClass A   |
       +--------+---------+

                |
       +--------+---------+
       |   SubClass B     |  <-- Overrides execute()
       +--------+---------+

                |
       +--------+---------+
       |   SubClass C     |  <-- Overrides execute()
       +------------------+
```

## 💡 Complete Example: Payment Gateway Polymorphism

```java
// Parent Superclass
abstract class PaymentGateway {
    protected String gatewayName;

    public PaymentGateway(String gatewayName) {
        this.gatewayName = gatewayName;
    }

    // Overridden Method
    public abstract boolean processPayment(double amount);
}

// Subclass 1
class CreditCardGateway extends PaymentGateway {
    private final String cardNumber;

    public CreditCardGateway(String cardNumber) {
        super("Credit Card Gateway");
        this.cardNumber = cardNumber;
    }

    @Override
    public boolean processPayment(double amount) {
        System.out.printf("[%s] Processing ₹%.2f via CardEnding #%s%n",
                gatewayName, amount, cardNumber.substring(cardNumber.length() - 4));
        return true;
    }
}

// Subclass 2
class UpiGateway extends PaymentGateway {
    private final String upiId;

    public UpiGateway(String upiId) {
        super("UPI Gateway");
        this.upiId = upiId;
    }

    @Override
    public boolean processPayment(double amount) {
        System.out.printf("[%s] Processing ₹%.2f via VPA %s%n", gatewayName, amount, upiId);
        return true;
    }
}

public class PolymorphismMaster {
    // Polymorphic Method: Accepts ANY PaymentGateway subclass!
    public static void executeCheckout(PaymentGateway gateway, double orderTotal) {
        System.out.println("\nInitiating Checkout...");
        boolean success = gateway.processPayment(orderTotal);
        if (success) {
            System.out.println("Checkout Complete: Payment Received.");
        }
    }

    public static void main(String[] args) {
        PaymentGateway cardPayment = new CreditCardGateway("4532111122228921");
        PaymentGateway upiPayment = new UpiGateway("rahul@upi");

        // Runtime Polymorphism in Action
        executeCheckout(cardPayment, 2499.00);
        executeCheckout(upiPayment, 1250.00);
    }
}
```

## 👀 Output

```text
Initiating Checkout...
[Credit Card Gateway] Processing ₹2499.00 via CardEnding #8921
Checkout Complete: Payment Received.

Initiating Checkout...
[UPI Gateway] Processing ₹1250.00 via VPA rahul@upi
Checkout Complete: Payment Received.
```

## ⚠️ Common Mistakes

- Forgetting `@Override` annotation when overriding methods (causes compiler to miss typo errors in method signatures).
- Attempting to downcast an object without checking `instanceof` first, triggering a `ClassCastException`.
- Attempting to extend a class marked `final` (`final class SecurityManager` cannot be extended!).

## 🛡️ Safety / Important Notes

Always use `@Override` annotations so the compiler verifies that your method signature matches the superclass method exactly.

## 🌍 Real-World Usage

Payment gateway integrations, database driver frameworks (`java.sql.Driver`), UI event frameworks, and pluggable export processors.

## 🧪 Try It Yourself

1. Create a parent class `Employee` with method `calculateBonus()`.
2. Create subclasses `Manager` (20% bonus) and `Developer` (10% bonus) overriding `calculateBonus()`.

## 🎯 Mini Challenge

Write a method `processSalaries(List<Employee> staff)` that polymorphically calculates total bonus payouts across mixed manager and developer instances.

## 🔗 Related Topics

- [Encapsulation and Composition](15-encapsulation-and-composition.html)
- [Interfaces and Abstract Classes](17-interfaces-and-abstract-classes.html)

## 🧭 Navigation

[← Java Home](./) | [← Previous: Encapsulation](15-encapsulation-and-composition.html) | [Next: Interfaces and Abstract Classes →](17-interfaces-and-abstract-classes.html)

