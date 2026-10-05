---
layout: default
title: "Input and Output"
---

# Input and Output in Java

> 🟢 Beginner

## 📖 Definition

**Console Input and Output (I/O)** allows Java applications to interact with users. Output is displayed using standard output streams (`System.out.print`, `System.out.println`, `System.out.printf`), while user input is captured from the terminal using the `java.util.Scanner` class or high-performance `java.io.BufferedReader`.

## 🇮🇳 Hindi

Terminal par output dikhane ke liye `System.out.println()` ya formatted output ke liye `System.out.printf()` ka use hota hai. User se terminal input lene ke liye `Scanner` class ka use kiya jata hai.

## 🚩 Marathi

Terminal varti output dakhvanyasathi `System.out.println()` vaparatat. User kadun input ghenyasathi `Scanner` class cha wapar hoto.

## 🤔 Why Do We Use It?

Interactive applications require user input (like usernames, passwords, quantities, search queries) to compute dynamic results rather than relying on hardcoded static values.

## 🧠 Simple Explanation

Think of `System.out` as a loudspeaker that broadcasts messages from your application to the user screen. Think of `Scanner` as a microphone that listens to what the user types into the keyboard and sends it to the application memory.

## 📝 1. Output Streams & Format Specifiers

- `System.out.print()`: Prints text without appending a new line.
- `System.out.println()`: Prints text and appends a line break.
- `System.out.printf()`: Formats text using C-style format specifiers (`%s` string, `%d` integer, `%.2f` float/double with 2 decimals, `%n` platform line break).

```java
String item = "Coffee";
double price = 150.75;
System.out.printf("Item: %s | Price: ₹%.2f%n", item, price);
```

## 📝 2. Reading Input with `Scanner`

The `Scanner` class parses tokens and primitive types from `System.in`:

```java
import java.util.Scanner;

// Wrap Scanner inside try-with-resources for automatic resource closing
try (Scanner scanner = new Scanner(System.in)) {
    System.out.print("Enter your name: ");
    String name = scanner.nextLine(); // Reads full line text
    
    System.out.print("Enter your age: ");
    int age = Integer.parseInt(scanner.nextLine()); // Safe numeric parsing
}
```

## 🧠 The `Scanner` Buffer Trap (`nextInt()` vs `nextLine()`)

When you call `scanner.nextInt()` followed by `scanner.nextLine()`, `nextInt()` reads the integer value but leaves the newline character `\n` in the input buffer. The subsequent `nextLine()` immediately consumes the leftover `\n` and appears to "skip" user input!

> 💡 **Best Practice Solution:** Read full lines using `scanner.nextLine()` and parse numbers explicitly using `Integer.parseInt()` or `Double.parseDouble()`.

## 💡 Complete Example: Interactive Order Console

```java
import java.util.Scanner;

public class ConsoleOrderSystem {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.println("=== TECH STORE ORDER CONSOLE ===");
            
            System.out.print("Enter Customer Name: ");
            String customerName = scanner.nextLine();
            
            System.out.print("Enter Product Name: ");
            String productName = scanner.nextLine();
            
            System.out.print("Enter Unit Price (₹): ");
            double unitPrice = Double.parseDouble(scanner.nextLine());
            
            System.out.print("Enter Quantity: ");
            int quantity = Integer.parseInt(scanner.nextLine());
            
            double totalCost = unitPrice * quantity;
            double taxAmount = totalCost * 0.18; // 18% GST
            double finalPayable = totalCost + taxAmount;
            
            System.out.println("\n--------------------------------");
            System.out.println("         ORDER RECEIPT          ");
            System.out.println("--------------------------------");
            System.out.printf("Customer : %s%n", customerName);
            System.out.printf("Product  : %s (x%d)%n", productName, quantity);
            System.out.printf("Subtotal : ₹%.2f%n", totalCost);
            System.out.printf("Tax (18%): ₹%.2f%n", taxAmount);
            System.out.printf("Total    : ₹%.2f%n", finalPayable);
            System.out.println("--------------------------------");
        } catch (NumberFormatException e) {
            System.err.println("Error: Invalid numeric input entered!");
        }
    }
}
```

## 👀 Output

```text
=== TECH STORE ORDER CONSOLE ===
Enter Customer Name: Rahul Verma
Enter Product Name: Wireless Mouse
Enter Unit Price (₹): 750.50
Enter Quantity: 2

--------------------------------
         ORDER RECEIPT          
--------------------------------
Customer : Rahul Verma
Product  : Wireless Mouse (x2)
Subtotal : ₹1501.00
Tax (18%): ₹270.18
Total    : ₹1771.18
--------------------------------
```

## ⚠️ Common Mistakes

- Forgetting to import `java.util.Scanner;`.
- Entering non-numeric letters when `scanner.nextInt()` or `Integer.parseInt()` expects digits (throws `NumberFormatException` or `InputMismatchException`).
- Not closing `Scanner` instances or leaving unclosed system input streams open.

## 🛡️ Safety / Important Notes

In high-throughput competitive programming or large log processing, use `BufferedReader` + `InputStreamReader` instead of `Scanner` because `BufferedReader` uses a significantly larger buffer (8KB vs 1KB) and performs faster raw string reading.

## 🌍 Real-World Usage

Command-line setup wizards, interactive CLI tools, administrative maintenance scripts, and automated installer prompts.

## 🧪 Try It Yourself

1. Write a program that prompts the user for two integers and prints their sum, difference, product, and average.
2. Use `System.out.printf()` to format the average to 2 decimal places.

## 🎯 Mini Challenge

Build a currency converter CLI that asks for an amount in USD ($) and converts it to INR (₹) using an exchange rate of `1 USD = 86.50 INR`.

## 🔗 Related Topics

- [Variables and Data Types](03-variables-and-data-types.html)
- [Exceptions and Validation](18-exceptions-and-validation.html)

## 🧭 Navigation

[← Java Home](./) | [← Previous: Variables](03-variables-and-data-types.html) | [Next: Operators and Expressions →](05-operators-and-expressions.html)

