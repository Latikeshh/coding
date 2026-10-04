---
layout: default
title: "Exceptions and Validation"
---

# Exceptions and Validation in Java

> 🟡 Intermediate

## 📖 Definition

An **Exception** is an abnormal event occurring during program execution that disrupts the normal flow of instructions. Java provides a robust Exception Handling framework using `try`, `catch`, `finally`, `throw`, `throws`, and automatic resource management via **Try-with-Resources**.

## 🇮🇳 Hindi

Program crash hone se bachane ke liye **Exception Handling** ka use hota hai. Runtime errors ko `try...catch` block mein handle kiya jata hai. **Checked Exceptions** compile time par check hote hain (jaise `IOException`), jabki **Unchecked Exceptions** (`RuntimeException`) program execution ke dauran aate hain.

## 🚩 Marathi

Application crash hone pasun vachvanyasathi `try...catch` block vaparatat. Custom exception tayar karnyasathi `extends Exception` cha wapar hoto.

## 📝 1. The `Throwable` Class Hierarchy Tree

```text
                     +--------------------+
                     |  java.lang.Object  |
                     +---------+----------+
                               |
                     +---------+----------+
                     |    Throwable       |
                     +----+----------+----+
                          |          |
            +-------------+          +------------+
            |                                     |
  +---------+----------+                +---------+----------+
  |      Error         |                |    Exception       |
  +--------------------+                +----+---------------+
  (JVM OutOfMemory,                          |
   StackOverflow)         +------------------+------------------+
                          |                                     |
                +---------+----------+                +---------+----------+
                | Checked Exception  |                | RuntimeException   |
                +--------------------+                +--------------------+
                (IOException,                         (NullPointerException,
                 SQLException)                         IllegalArgumentException)
```

- **Checked Exceptions:** Checked by compiler at compile time. Must be caught (`try-catch`) or declared (`throws`).
- **Unchecked Exceptions (`RuntimeException`):** Logical or programming bugs (`NullPointerException`, `ArrayIndexOutOfBoundsException`, `IllegalArgumentException`).

## 📝 2. Exception Handling Blocks

- `try {}`: Contains risky code that might throw an exception.
- `catch (ExceptionType e) {}`: Catches and handles specific exception types.
- `finally {}`: **Always executes** (whether an exception occurred or not) for cleanup operations.
- **Try-with-Resources (Java 7+):** Automatically closes resources implementing `AutoCloseable` (e.g. Streams, Database Connections).

```java
// Multi-Catch Block (Java 7+)
try {
    // Risky I/O or Math operations
} catch (IOException | NumberFormatException e) {
    System.err.println("Handled multiple error types: " + e.getMessage());
}
```

## 📝 3. Creating Custom Exceptions

```java
// Custom Unchecked Exception
public class InsufficientBalanceException extends RuntimeException {
    public InsufficientBalanceException(String message) {
        super(message);
    }
}
```

## 💡 Complete Example: Account Withdrawal & Input Validation

```java
public class ExceptionMaster {

    // Custom Exception
    public static class InvalidAmountException extends Exception {
        public InvalidAmountException(String message) {
            super(message);
        }
    }

    public static class InsufficientFundsException extends RuntimeException {
        public InsufficientFundsException(String message) {
            super(message);
        }
    }

    // Business Method declaring Checked Exception via 'throws'
    public static double processWithdrawal(double balance, String amountStr) 
            throws InvalidAmountException {
        
        // 1. Validation & Parsing
        double amount;
        try {
            amount = Double.parseDouble(amountStr);
        } catch (NumberFormatException e) {
            throw new InvalidAmountException("Amount must be a valid numeric number.");
        }

        // 2. Business Rule Validation
        if (amount <= 0) {
            throw new InvalidAmountException("Withdrawal amount must be greater than zero.");
        }

        if (amount > balance) {
            throw new InsufficientFundsException(
                String.format("Requested ₹%.2f exceeds balance ₹%.2f", amount, balance));
        }

        return balance - amount;
    }

    public static void main(String[] args) {
        double currentBalance = 5000.00;

        // Test Case 1: Invalid Non-numeric String
        try {
            processWithdrawal(currentBalance, "abc");
        } catch (InvalidAmountException e) {
            System.err.println("[TEST 1 ERROR] " + e.getMessage());
        }

        // Test Case 2: Insufficient Funds (Unchecked)
        try {
            processWithdrawal(currentBalance, "7500.00");
        } catch (InvalidAmountException e) {
            System.err.println("[ERROR] " + e.getMessage());
        } catch (InsufficientFundsException e) {
            System.err.println("[TEST 2 ERROR] " + e.getMessage());
        } finally {
            System.out.println("Test Case 2 Audit Completed.");
        }
    }
}
```

## 👀 Output

```text
[TEST 1 ERROR] Amount must be a valid numeric number.
[TEST 2 ERROR] Requested ₹7500.00 exceeds balance ₹5000.00
Test Case 2 Audit Completed.
```

## ⚠️ Common Mistakes

- Silently swallowing exceptions with an empty catch block (`catch (Exception e) {}`). Always log exceptions!
- Catching generic `Throwable` or `Error` (e.g. `OutOfMemoryError` cannot be recovered from gracefully!).
- Using exceptions for ordinary control flow logic instead of explicit validation checks (`if` statements).

## 🛡️ Safety / Important Notes

Always use **Try-with-Resources** when working with file readers, writers, database connections, or socket streams to prevent resource leaks.

## 🌍 Real-World Usage

Validating API request payloads, handling database connection timeouts, catching invalid payment card numbers, and processing missing file inputs.

## 🧪 Try It Yourself

1. Write a method `parseAge(String text)` that throws `IllegalArgumentException` if age is less than `0` or greater than `120`.
2. Test the method with `"25"`, `"-5"`, and `"abc"`.

## 🎯 Mini Challenge

Create a custom exception `InvalidEmailException` and write a validation method `validateEmail(String email)` that throws it if the email does not contain `@` or `.`.

## 🔗 Related Topics

- [Input and Output](04-input-and-output.md)
- [File Input and Output](20-file-input-and-output.md)

## 🧭 Navigation

[← Java Home](00-README.md) | [← Previous: Interfaces](17-interfaces-and-abstract-classes.md) | [Next: Packages and Project Organization →](19-packages-and-project-organization.md)
