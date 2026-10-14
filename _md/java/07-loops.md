---
layout: default
title: "Loops"
---

# Loops in Java

> 🟢 Beginner

## 📖 Definition

**Loops** repeatedly execute a block of Java code as long as a specified control condition remains `true`. Java supports standard `for` loops, `while` loops (pre-test), `do-while` loops (post-test), enhanced `for-each` loops (iterating over arrays/collections), and control keywords (`break`, `continue`, **Labeled Loops**).

## 🇮🇳 Hindi

Repetitive tasks ko automate karne ke liye loops ka use hota hai. Counter-based iterations ke liye `for` loop, condition-based iteration ke liye `while` loop, kam se kam ek baar guaranteed execute karne ke liye `do-while` loop, aur arrays/collections iterate karne ke liye enhanced `for-each` loop use karein.

## 🚩 Marathi

Code punha punha chalavnyasathi loops vaparatat. Counter sathi `for`, condition sathi `while`, aani arrays sathi `for-each` loop cha wapar hoto.

## 📝 1. Loop Types & Syntaxes

### A. Standard Counter `for` Loop
```java
for (int i = 1; i <= 5; i++) {
    System.out.println("Iteration: " + i);
}
```

### B. Pre-Test `while` Loop
```java
int count = 3;
while (count > 0) {
    System.out.println("Countdown: " + count);
    count--;
}
```

### C. Post-Test `do-while` Loop (Guaranteed at least 1 execution)
```java
int attempts = 0;
do {
    System.out.println("Processing login attempt #" + (attempts + 1));
    attempts++;
} while (attempts < 1);
```

### D. Enhanced `for-each` Loop (Iterating Elements)
```java
String[] languages = {"Java", "Python", "SQL", "C++"};
for (String lang : languages) {
    System.out.println("Language: " + lang);
}
```

## 🧠 2. Control Statements & Labeled Loops

- `break`: Terminates the loop immediately.
- `continue`: Skips the rest of the current iteration and jumps to the next loop cycle.
- **Labeled Loops (`label:`):** Allows `break` or `continue` to exit outer nested loops directly.

```java
outerLoop:
for (int row = 1; row <= 3; row++) {
    for (int col = 1; col <= 3; col++) {
        if (row == 2 && col == 2) {
            break outerLoop; // Exits the outer loop directly!
        }
        System.out.println("Row: " + row + ", Col: " + col);
    }
}
```

## 💡 Complete Example: Processing Batch Transaction Data

```java
public class BatchProcessor {
    public static void main(String[] args) {
        double[] transactionAmounts = {1500.00, -200.00, 4500.50, 0.00, 8900.00, -9999.00};
        double validTotal = 0.0;
        int processedCount = 0;

        System.out.println("=== PROCESSING TRANSACTION BATCH ===");

        for (double amount : transactionAmounts) {
            // Guard clause: Skip invalid negative transactions
            if (amount < 0) {
                System.out.println("Warning: Invalid negative amount (" + amount + ") skipped.");
                continue;
            }

            // Exit condition if zero sentinel encountered
            if (amount == 0.0) {
                System.out.println("Notice: Zero sentinel value encountered. Stopping batch.");
                break;
            }

            validTotal += amount;
            processedCount++;
            System.out.printf("Processed Transaction #%d : ₹%.2f%n", processedCount, amount);
        }

        System.out.println("====================================");
        System.out.printf("Total Valid Processed Amount : ₹%.2f%n", validTotal);
        System.out.println("Total Valid Transactions     : " + processedCount);
    }
}
```

## 👀 Output

```text
=== PROCESSING TRANSACTION BATCH ===
Processed Transaction #1 : ₹1500.00
Warning: Invalid negative amount (-200.0) skipped.
Processed Transaction #2 : ₹4500.50
Notice: Zero sentinel value encountered. Stopping batch.
====================================
Total Valid Processed Amount : ₹6000.50
Total Valid Transactions     : 2
```

## ⚠️ Common Mistakes

- **Infinite Loops:** Forgetting to update loop counter variables inside `while` or `do-while` loops (e.g. omitting `i++`).
- **Off-By-One Errors:** Using `i <= array.length` instead of `i < array.length` when iterating indexed arrays.
- **Accidental Semicolon:** Writing `for (int i = 0; i < 5; i++);` puts an empty statement in the loop body. The subsequent block `{ ... }` executes only *once* after the loop finishes!

## 🛡️ Safety / Important Notes

Do NOT structurally add or remove items from a `java.util.Collection` inside an enhanced `for-each` loop; doing so will throw a `ConcurrentModificationException`! Use an `Iterator` or `removeIf()` method instead.

## 🌍 Real-World Usage

Batch database processing, streaming sensor records, rendering UI lists, retrying network connections, and traversing tree/graph data structures.

## 🧪 Try It Yourself

1. Write a `for` loop that prints all odd numbers from `1` to `20`.
2. Write a `while` loop that calculates the sum of numbers from `1` to `100`.

## 🎯 Mini Challenge

Write a program using nested `for` loops that prints a 5-by-5 multiplication grid table formatted cleanly with tab columns (`\t`).

## 🔗 Related Topics

- [Conditionals](06-conditionals.html)
- [Arrays](09-arrays.html)

## 🧭 Navigation

[← Java Home](./) | [← Previous: Conditionals](06-conditionals.html) | [Next: Methods →](08-methods.html)

