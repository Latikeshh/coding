---
layout: default
title: "Java Program Structure"
---

# Java Program Structure

> 🟢 Beginner

## 📖 Definition

A **Java Program** consists of structural building blocks organized into packages, class declarations, fields, methods, statements, and code blocks `{}`. Every standalone Java application requires a main execution entry point method.

## 🇮🇳 Hindi

Java mein saara code **Classes** ke andar likha jata hai. Program ka execution `main` method se shuru hota hai. Java statements semicolon `;` par khatam hote hain aur curly braces `{}` code blocks banate hain.

## 🚩 Marathi

Java madhye sarv code **Classes** chya aat lihila jato. Program chi suruvat `main` method pasun hote. Statements chya shevati semicolon `;` divya lagto aani braces `{}` block tayar kartat.

## 🤔 Why Use It?

Enforcing an explicit, class-based program structure prevents variable name collisions, keeps code modular, enforces type safety, and gives the compiler a predictable blueprint for memory allocation.

## 🧠 Simple Explanation

Think of a Java file as a company department building. The `class` is the building itself. The `main` method is the front entrance security door through which execution enters. The statements inside are the specific tasks performed inside that office.

## 📝 Dissecting `public static void main(String[] args)`

```java
public class ProgramStructure {
    // Application Entry Point
    public static void main(String[] args) {
        System.out.println("Deconstructing Main Method");
    }
}
```

| Keyword | Why It Is Used |
|---|---|
| `public` | Access modifier that makes the main method visible and callable from anywhere outside the class by the JVM runtime. |
| `static` | Allows the JVM to invoke `main()` directly on the class without needing to create an object instance first (`ProgramStructure.main()`). |
| `void` | Return type signifying that the main method returns no value to the caller upon completion. |
| `main` | The mandatory, standardized identifier name searched for by the JVM to begin application execution. |
| `String[] args` | Array of string parameters passed from the command line interface when launching the application. |

## 📝 Java Comment Types

```java
// 1. Single-line comment

/* 
   2. Multi-line comment block
*/

/**
 * 3. Javadoc documentation comment
 * @param args Command line arguments
 */
```

## 💡 Complete Example: Program Structure & Execution

```java
package com.example.basics;

public class EmployeeBadge {
    public static void main(String[] args) {
        // Variable declarations
        String companyName = "TechCorp Global";
        String employeeName = "Prathamesh Misar";
        int employeeId = 5021;
        
        // Output statements
        System.out.println("=================================");
        System.out.println("       " + companyName);
        System.out.println("=================================");
        System.out.println("Employee Name : " + employeeName);
        System.out.println("Employee ID   : #" + employeeId);
        System.out.println("Status        : ACTIVE");
        System.out.println("=================================");
    }
}
```

## 👀 Output

```text
=================================
       TechCorp Global
=================================
Employee Name : Prathamesh Misar
Employee ID   : #5021
Status        : ACTIVE
=================================
```

## ⚠️ Common Mistakes

- Forgetting semicolons `;` at the end of execution statements.
- Mismatched curly braces `{}` causing compilation errors.
- Misspelling `main` (e.g., `Main` or `mainMethod`) or omitting `static`.
- Placing executable code statements directly inside a class body outside of a method or initializer block.

## 🛡️ Safety / Important Notes

Indentation in Java does not affect syntax or execution (unlike Python), but using consistent 4-space indentation is critical for readability and team code reviews.

## 🌍 Real-World Usage

Standard program structures are used across command-line utilities, background service launchers, batch processing jobs, and microservice entry points.

## 🧪 Try It Yourself

1. Create a class `UserProfile` with a `main` method.
2. Print a user profile containing name, location, and favorite programming language.
3. Remove a semicolon deliberately and inspect the compiler error diagnostic.

## 🎯 Mini Challenge

Create a program `SystemDiagnostic` that prints your operating system name, Java vendor version (`System.getProperty("java.version")`), and processor core count (`Runtime.getRuntime().availableProcessors()`).

## 🔗 Related Topics

- [Set Up Java](01-setup-java.md)
- [Variables and Data Types](03-variables-and-data-types.md)

## 🧭 Navigation

[← Java Home](00-README.md) | [← Previous: Set Up Java](01-setup-java.md) | [Next: Variables and Data Types →](03-variables-and-data-types.md)
