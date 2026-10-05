---
layout: default
title: "Variables and Data Types"
---

# Variables and Data Types

> 🟢 Beginner

## 📖 Definition

A **Variable** is a named location in memory used to store data values. Java is a **statically and strongly typed** programming language, meaning every variable must have a declared data type that determines what kind of values it can store and what operations can be performed on it.

## 🇮🇳 Hindi

Java mein har variable ka Data Type declare karna zaroori hota hai. Data Types do categories mein hote hain: **Primitive Types** (`int`, `double`, `boolean`, `char`, etc.) jo raw values store karte hain, aur **Reference Types** (`String`, Arrays, Objects) jo memory address hold karte hain.

## 🚩 Marathi

Java madhye pratyek variable cha Data Type sangava lagto. Data types don prakarat ahet: **Primitive Types** (raw values) aani **Reference Types** (memory reference).

## 🤔 Why Do We Use Them?

Statically typed variables allow the Java compiler (`javac`) to catch type mismatch errors, invalid operations, and potential buffer overflows at compile time before your code ever runs in production.

## 🧠 Simple Explanation

Think of a variable as a labeled storage box. The Data Type is the box shape (e.g., a round slot for numbers, a square slot for text). You cannot force a square text box into a round number slot without explicitly re-casting it.

## 📝 1. The 8 Primitive Data Types

Primitives store raw binary values directly in stack memory:

| Type | Size | Range / Values | Default Value | Example |
|---|---|---|---|---|
| `byte` | 1 byte | -128 to 127 | `0` | `byte age = 25;` |
| `short` | 2 bytes | -32,768 to 32,767 | `0` | `short year = 2026;` |
| `int` | 4 bytes | -2^31 to 2^31-1 (~2 Billion) | `0` | `int distance = 150000;` |
| `long` | 8 bytes | -2^63 to 2^63-1 | `0L` | `long views = 9500000000L;` |
| `float` | 4 bytes | Single-precision floating point | `0.0f` | `float pi = 3.14159f;` |
| `double` | 8 bytes | Double-precision floating point | `0.0d` | `double price = 999.99;` |
| `char` | 2 bytes | Single 16-bit Unicode character | `'\u0000'` | `char grade = 'A';` |
| `boolean` | 1 bit | `true` or `false` | `false` | `boolean active = true;` |

## 📝 2. Type Casting (Widening vs Narrowing)

- **Widening (Implicit):** Converting smaller type to larger type automatically (`byte` -> `short` -> `int` -> `long` -> `float` -> `double`).
- **Narrowing (Explicit):** Converting larger type to smaller type manually with potential data loss.

```java
// Widening Casting (Automatic)
int numInt = 100;
double numDouble = numInt; // 100.0

// Narrowing Casting (Explicit)
double price = 99.95;
int roundedPrice = (int) price; // 99 (fractional part truncated!)
```

## 📝 3. Wrapper Classes & Autoboxing

Primitives have corresponding Object Wrapper classes (`Byte`, `Short`, `Integer`, `Long`, `Float`, `Double`, `Character`, `Boolean`).

```java
// Autoboxing: Primitive to Wrapper Object
Integer boxedNum = 50; 

// Unboxing: Wrapper Object to Primitive
int unboxedNum = boxedNum;
```

## 📝 4. Local Variable Type Inference (`var`)

Introduced in Java 10, `var` infers local variable types automatically from the assignment initializer:

```java
var username = "Sneha"; // Inferred as String
var userScore = 98;     // Inferred as int
```

## 💡 Complete Example: Data Types, Casting & Wrappers

```java
public class DataTypeMaster {
    public static void main(String[] args) {
        // Primitive Variables
        int itemQuantity = 3;
        double pricePerUnit = 499.50;
        char currencySymbol = '₹';
        boolean isAvailable = true;

        // Calculated Expression
        double subtotal = itemQuantity * pricePerUnit;
        
        // Explicit Type Casting (Double to Int)
        int roundedTotal = (int) subtotal;

        // Wrapper Class Usage
        String numberStr = "1250";
        int parsedNumber = Integer.parseInt(numberStr);

        System.out.println("Currency        : " + currencySymbol);
        System.out.println("In Stock?       : " + isAvailable);
        System.out.println("Subtotal        : " + subtotal);
        System.out.println("Rounded Total   : " + roundedTotal);
        System.out.println("Parsed Number   : " + parsedNumber);
    }
}
```

## 👀 Output

```text
Currency        : ₹
In Stock?       : true
Subtotal        : 1498.5
Rounded Total   : 1498
Parsed Number   : 1250
```

## ⚠️ Common Mistakes

- Forgetting the `L` suffix for `long` literals (`long val = 9000000000L;`) or `f` suffix for `float` literals (`float f = 3.14f;`).
- Using `float` or `double` for financial currency calculations (use `java.math.BigDecimal` instead to prevent floating-point rounding errors!).
- Reading uninitialized local variables before assigning a value.

## 🛡️ Safety / Important Notes

Primitives are compared by value (`==`), while Objects and `String` references are compared by memory address (use `.equals()` for string content comparison!).

## 🌍 Real-World Usage

Banking systems use `BigDecimal` for ledger accuracy, `long` for epoch timestamps, `boolean` for account status flags, and Wrapper classes for database Object-Relational Mapping (ORM).

## 🧪 Try It Yourself

1. Declare a `double` variable `temperature = 36.6`. Cast it explicitly to an `int` and observe the result.
2. Use `Integer.parseInt()` to parse string `"500"` and add `100` to it.

## 🎯 Mini Challenge

Write a program that calculates student test percentage from `48` marks out of `60` without integer division truncation (ensure floating-point division using `48 * 100.0 / 60`).

## 🔗 Related Topics

- [Java Program Structure](02-java-program-structure.html)
- [Input and Output](04-input-and-output.html)

## 🧭 Navigation

[← Java Home](./) | [← Previous: Program Structure](02-java-program-structure.html) | [Next: Input and Output →](04-input-and-output.html)

