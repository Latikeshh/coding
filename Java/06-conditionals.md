---
layout: default
title: "Conditionals"
---

# Conditional Decision Making in Java

> 🟢 Beginner

## 📖 Definition

**Conditional Statements** allow Java programs to execute specific blocks of code based on whether a boolean expression evaluates to `true` or `false`. Java supports `if...else if...else` decision chains, classic `switch` statements, modern **Switch Expressions** (`switch` with arrow `->` syntax and `yield`), and Ternary operators.

## 🇮🇳 Hindi

Decision making ke liye `if...else` aur `switch` ka use hota hai. Note karein ki Java mein `if` condition hamesha explicit `boolean` (`true`/`false`) honi chahiye; numbers (`0` ya `1`) ya strings automatically boolean mein convert nahi hote.

## 🚩 Marathi

Decision-making sathi `if...else` aani `switch` vaparatat. Java madhye condition hamesha `boolean` pahije.

## 🤔 Why Do We Use Them?

Applications adapt dynamically based on data—for example, verifying if an account balance is sufficient before authorizing a transaction, or routing user requests based on user roles (`ADMIN`, `USER`, `GUEST`).

## 🧠 Simple Explanation

Think of conditionals as a railway track switch. Depending on the signal color (the boolean condition), the train is routed down Track A (`if`), Track B (`else if`), or the fallback siding (`else`).

## 📝 1. `if...else if...else` Decision Chains

```java
int score = 82;

if (score >= 90) {
    System.out.println("Grade: A+");
} else if (score >= 75) {
    System.out.println("Grade: A");
} else if (score >= 50) {
    System.out.println("Grade: B");
} else {
    System.out.println("Grade: F");
}
```

## 📝 2. Modern Switch Expressions (Java 14+)

Modern Java features arrow syntax `->` in `switch` expressions that automatically eliminate fall-through bugs and do not require `break` statements.

```java
String day = "WEDNESDAY";

// Switch Expression returning a value
String dayType = switch (day) {
    case "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY" -> "Weekday";
    case "SATURDAY", "SUNDAY" -> "Weekend";
    default -> {
        System.out.println("Validating unknown day...");
        yield "Invalid Day"; // yield returns a value from a multi-line block
    }
};
```

## 💡 Complete Example: Role-Based Authorization Engine

```java
public class AuthorizationSystem {
    public static void main(String[] args) {
        String userRole = "MANAGER";
        double transactionAmount = 75000.00;
        boolean isAccountActive = true;

        // 1. Explicit Boolean Guard Clause
        if (!isAccountActive) {
            System.out.println("Access Denied: Account is deactivated.");
            return;
        }

        // 2. Modern Switch Expression for Role Approval Thresholds
        double maxApprovalLimit = switch (userRole) {
            case "ADMIN" -> 500000.00;
            case "MANAGER" -> 100000.00;
            case "CLERK" -> 25000.00;
            default -> 0.00;
        };

        System.out.println("User Role           : " + userRole);
        System.out.println("Transaction Amount  : ₹" + transactionAmount);
        System.out.println("Approval Threshold  : ₹" + maxApprovalLimit);

        // 3. Conditional Decision
        if (transactionAmount <= maxApprovalLimit) {
            System.out.println("Status              : APPROVED");
        } else {
            System.out.println("Status              : REQUIRES HIGHER APPROVAL");
        }
    }
}
```

## 👀 Output

```text
User Role           : MANAGER
Transaction Amount  : ₹75000.0
Approval Threshold  : ₹100000.0
Status              : APPROVED
```

## ⚠️ Common Mistakes

- Writing `if (x = 5)` instead of `if (x == 5)`. In Java, `x = 5` evaluates to an integer, which causes a compilation error because Java requires a `boolean`!
- Forgetting `break;` statements in classic `switch` statements, leading to accidental "fall-through" into subsequent cases.
- Reversing condition order in range checks (e.g., checking `score >= 50` before `score >= 90`).

## 🛡️ Safety / Important Notes

Always use curly braces `{}` for `if` and `else` blocks, even if the block contains only a single line statement, to avoid dangling `else` bugs.

## 🌍 Real-World Usage

Role-based authorization checks, payment gateway decision engines, HTTP status code routers (`200 OK`, `404 NOT FOUND`, `500 ERROR`), and game state handlers.

## 🧪 Try It Yourself

1. Write an `if...else` block that checks if a temperature in Celsius is below freezing (`<= 0`), comfortable (`18` to `28`), or hot (`> 30`).
2. Convert it into a modern `switch` expression checking temperature status codes.

## 🎯 Mini Challenge

Write a program that takes an integer month (1 to 12) and uses a modern `switch` expression to return the number of days in that month (handle leap years for month 2).

## 🔗 Related Topics

- [Operators and Expressions](05-operators-and-expressions.html)
- [Loops](07-loops.html)

## 🧭 Navigation

[← Java Home](./) | [← Previous: Operators](05-operators-and-expressions.html) | [Next: Loops →](07-loops.html)

