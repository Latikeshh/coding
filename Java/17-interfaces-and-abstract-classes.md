---
layout: default
title: "Interfaces and Abstract Classes"
---

# Interfaces and Abstract Classes in Java

> 🔴 Advanced

## 📖 Definition

- **Abstract Class (`abstract class`):** A restricted parent class that **cannot be directly instantiated** using `new`. It provides partial implementation (can have instance state fields, constructors, concrete methods, and `abstract` methods).
- **Interface (`interface`):** A 100% contract specification defined using the `interface` keyword. Multiple interfaces can be implemented by a single class (`implements InterfaceA, InterfaceB`).

## 🇮🇳 Hindi

Abstract Class partial abstraction deti hai (isme fields, constructors, aur concrete methods ho sakte hain). Interface full contract specification deta hai (0% instance state). Java mein ek class multiple interfaces implement kar sakti hai (`implements A, B`), jo Multiple Inheritance achieve karne ka clean tareeqa hai.

## 🚩 Marathi

Abstract Class bhagashaha implementation deto. Interface ekapeksha jast interfaces implement karto (`implements A, B`).

## 📝 1. Comparison Matrix: Abstract Class vs Interface

| Feature | Abstract Class | Interface (Modern Java 8/9+) |
|---|---|---|
| Instantiation | ❌ Cannot be instantiated | ❌ Cannot be instantiated |
| Multiple Inheritance | ❌ Single Class (`extends`) | ✅ Multiple Interfaces (`implements`) |
| Fields | Any fields (`private`, `static`, mutable) | Only `public static final` constants |
| Constructors | ✅ Has constructors | ❌ No constructors |
| Methods | Abstract & Concrete methods | Abstract, `default`, `static`, `private` |
| Default Keyword | `extends` | `implements` |

## 📝 2. Modern Interface Features (Java 8, 9 & 11)

1. **`default` Methods (Java 8+):** Allows adding new methods to interfaces with default concrete implementation without breaking existing implementing classes!
2. **`static` Methods (Java 8+):** Utility methods associated with the interface itself.
3. **`private` Methods (Java 9+):** Helper methods used internally inside `default` interface methods.
4. **`@FunctionalInterface`:** Interface with **exactly one abstract method** (used in Lambda expressions).

```java
@FunctionalInterface
public interface Validator<T> {
    boolean validate(T input); // Single Abstract Method (SAM)
    
    // Default method (Java 8+)
    default Validator<T> and(Validator<T> other) {
        return input -> validate(input) && other.validate(input);
    }
}
```

## 💡 Complete Example: Pluggable Notification & Auditing Architecture

```java
import java.util.List;

// 1. Interface Contract 1
interface NotificationChannel {
    void sendNotification(String recipient, String message);
}

// 2. Interface Contract 2
interface AuditLoggable {
    default void logAudit(String event) {
        System.out.println("[AUDIT LOG] " + System.currentTimeMillis() + " : " + event);
    }
}

// 3. Abstract Parent Class
abstract class BaseNotifier implements NotificationChannel, AuditLoggable {
    protected String serviceName;

    public BaseNotifier(String serviceName) {
        this.serviceName = serviceName;
    }

    // Concrete shared method
    public void printServiceHeader() {
        System.out.println("=== Service: " + serviceName + " ===");
    }
}

// 4. Concrete Implementation Class 1
class EmailNotifier extends BaseNotifier {
    public EmailNotifier() { super("Email Service"); }

    @Override
    public void sendNotification(String recipient, String message) {
        printServiceHeader();
        System.out.println("Sending Email to " + recipient + " : " + message);
        logAudit("EMAIL_SENT to " + recipient);
    }
}

// 5. Concrete Implementation Class 2
class SmsNotifier extends BaseNotifier {
    public SmsNotifier() { super("SMS Gateway"); }

    @Override
    public void sendNotification(String recipient, String message) {
        printServiceHeader();
        System.out.println("Dispatching SMS to " + recipient + " : " + message);
        logAudit("SMS_DISPATCHED to " + recipient);
    }
}

public class InterfaceMaster {
    public static void main(String[] args) {
        List<NotificationChannel> channels = List.of(
            new EmailNotifier(),
            new SmsNotifier()
        );

        String user = "user@example.com";
        String alertMsg = "Your security OTP is 982104";

        for (NotificationChannel channel : channels) {
            channel.sendNotification(user, alertMsg);
            System.out.println();
        }
    }
}
```

## 👀 Output

```text
=== Service: Email Service ===
Sending Email to user@example.com : Your security OTP is 982104
[AUDIT LOG] 1728038000000 : EMAIL_SENT to user@example.com

=== Service: SMS Gateway ===
Dispatching SMS to user@example.com : Your security OTP is 982104
[AUDIT LOG] 1728038000000 : SMS_DISPATCHED to user@example.com
```

## ⚠️ Common Mistakes

- Forgetting that interface methods are implicitly `public abstract`, so implementing methods must be declared `public` (reducing visibility causes a compilation error!).
- Instantiating an Abstract Class or Interface directly using `new AbstractClass()` (must use an implementing subclass or anonymous class!).
- Declaring instance mutable state fields inside an interface (interface fields are implicitly `public static final` constants!).

## 🛡️ Safety / Important Notes

Use **Interfaces** when defining "Can-Do" capabilities across unrelated classes (`Serializable`, `Comparable`, `AutoCloseable`). Use **Abstract Classes** when subclasses share close structural state and code implementation.

## 🌍 Real-World Usage

JDBC Driver APIs (`java.sql.Connection`, `Statement`), Spring Framework service contracts, Jackson JSON custom serializers, and reactive event listeners.

## 🧪 Try It Yourself

1. Create a `Printable` interface with method `print()`.
2. Implement `Printable` across two distinct classes: `Invoice` and `ShippingLabel`.

## 🎯 Mini Challenge

Create an abstract class `DatabaseConnector` with an abstract `connect()` method, and implement concrete `MySQLConnector` and `PostgreSQLConnector` subclasses.

## 🔗 Related Topics

- [Inheritance and Polymorphism](16-inheritance-and-polymorphism.md)
- [Testing and Debugging](23-testing-and-debugging.md)

## 🧭 Navigation

[← Java Home](00-README.md) | [← Previous: Inheritance](16-inheritance-and-polymorphism.md) | [Next: Exceptions and Validation →](18-exceptions-and-validation.md)
