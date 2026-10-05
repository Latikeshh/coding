---
layout: default
title: "Enums and Records"
---

# Enums and Records in Java

> 🟡 Intermediate

## 📖 Definition

- **`enum` (Enumeration):** A special Java class type used to define a fixed, type-safe set of named constants.
- **`record` (Java 16+):** A concise syntax for declaring transparent, **immutable data-carrier classes** where the compiler automatically generates private final component fields, accessors, `equals()`, `hashCode()`, `toString()`, and constructors.

## 🇮🇳 Hindi

Fixed choices represent karne ke liye `enum` ka use hota hai (jaise `OrderStatus.PAID`). Unchangeable data carry karne waali plain data classes ke boilerplate code ko hatane ke liye modern Java 16+ mein `record` ka use kiya jata hai.

## 🚩 Marathi

Tharavik choices sathi `enum` vaparatat. Data carrier classes saathi modern Java madhye `record` cha wapar hoto.

## 📝 1. Type-Safe Enums with Fields & Methods

Enums are more than simple integer flags—in Java, enums can have fields, custom constructors, and methods:

```java
public enum OrderStatus {
    PENDING("Order placed, awaiting payment", 100),
    PROCESSING("Payment confirmed, packing order", 200),
    SHIPPED("Package handed to courier", 300),
    DELIVERED("Package delivered to customer", 400);

    private final String description;
    private final int statusCode;

    // Enum Constructor (implicitly private)
    OrderStatus(String description, int statusCode) {
        this.description = description;
        this.statusCode = statusCode;
    }

    public String getDescription() { return description; }
    public int getStatusCode() { return statusCode; }
}
```

## 📝 2. Immutable Data Records (`record`)

Traditional Java Data Transfer Objects (DTOs) require hundreds of lines of boilerplate getters, `equals()`, `hashCode()`, `toString()`, and constructors. A `record` eliminates boilerplate completely:

```java
// Replaces 60+ lines of traditional JavaBean DTO boilerplate!
public record EmployeeRecord(int id, String name, double salary) {
    
    // Compact Constructor for input validation
    public EmployeeRecord {
        if (id <= 0) {
            throw new IllegalArgumentException("Employee ID must be positive");
        }
        if (salary < 0) {
            throw new IllegalArgumentException("Salary cannot be negative");
        }
    }
}
```

- Component Accessors use field names directly: `emp.name()` (NOT `emp.getName()`).
- Records are **final** and cannot extend other classes.

## 💡 Complete Example: E-Commerce Order Fulfillment System

```java
import java.util.List;

public class OrderSystemMaster {

    // Enum Declaration
    public enum PaymentMethod { CREDIT_CARD, UPI, NET_BANKING, CASH_ON_DELIVERY }

    // Record Declarations
    public record Customer(int customerId, String name, String email) {}
    public record OrderItem(String productName, int quantity, double price) {}
    
    public record Order(
        String orderId, 
        Customer customer, 
        List<OrderItem> items, 
        PaymentMethod paymentMethod
    ) {
        // Custom Helper Method in Record
        public double calculateOrderTotal() {
            double total = 0.0;
            for (OrderItem item : items) {
                total += item.price() * item.quantity();
            }
            return total;
        }
    }

    public static void main(String[] args) {
        Customer customer = new Customer(501, "Aarav Sharma", "aarav@example.com");
        
        List<OrderItem> items = List.of(
            new OrderItem("Wireless Headphones", 1, 2999.00),
            new OrderItem("USB-C Cable", 2, 499.00)
        );

        Order order = new Order("ORD-9821", customer, items, PaymentMethod.UPI);

        System.out.println("=== ORDER SUMMARY ===");
        System.out.println("Order ID       : " + order.orderId());
        System.out.println("Customer Name  : " + order.customer().name());
        System.out.println("Payment Method : " + order.paymentMethod());
        System.out.printf("Total Payable  : ₹%.2f%n", order.calculateOrderTotal());
        System.out.println("Record toString: " + order);
    }
}
```

## 👀 Output

```text
=== ORDER SUMMARY ===
Order ID       : ORD-9821
Customer Name  : Aarav Sharma
Payment Method : UPI
Total Payable  : ₹3997.00
Record toString: Order[orderId=ORD-9821, customer=Customer[customerId=501, name=Aarav Sharma, email=aarav@example.com], items=[OrderItem[productName=Wireless Headphones, quantity=1, price=2999.0], OrderItem[productName=USB-C Cable, quantity=2, price=499.0]], paymentMethod=UPI]
```

## ⚠️ Common Mistakes

- Using raw String literals (`"PAID"`, `"PENDING"`) instead of `enum` constants, leading to silent typo bugs.
- Trying to add `getName()` getter JavaBean names on Records instead of generated component methods `record.name()`.
- Attempting to extend a `record` class (`records` implicitly extend `java.lang.Record` and are `final`).

## 🛡️ Safety / Important Notes

While `record` component references are `final`, if a record component holds a reference to a **mutable object** (like a `List` or `Date`), callers can still mutate the internal state of that component! Always store unmodifiable copies (`List.copyOf()`) inside records.

## 🌍 Real-World Usage

Enums model user roles, HTTP status codes, workflow states, and transaction types. Records model API JSON DTOs, database query rows, microservice request payloads, and immutable event messages.

## 🧪 Try It Yourself

1. Create a `Priority` enum (`LOW`, `MEDIUM`, `HIGH`, `CRITICAL`).
2. Create a `Task` record containing `int taskId`, `String title`, and `Priority priority`.

## 🎯 Mini Challenge

Create an `Enum` representing `Currency` (`USD`, `EUR`, `INR`) with conversion rates relative to USD, and add a method `convertToUSD(double amount)`.

## 🔗 Related Topics

- [Classes and Objects](14-classes-and-objects.html)
- [Collections](11-collections.html)

## 🧭 Navigation

[← Java Home](./) | [← Previous: Collections](11-collections.html) | [Next: Generics →](13-generics.html)

