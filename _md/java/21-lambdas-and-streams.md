---
layout: default
title: "Lambdas and Streams"
---

# Lambdas and Streams in Java

> 🔴 Advanced

## 📖 Definition

- **Lambda Expression:** A concise, anonymous function syntax `(parameters) -> { body }` introduced in Java 8 that implements a Functional Interface (`@FunctionalInterface`).
- **Stream API (`java.util.stream`):** A declarative, functional processing pipeline for filtering, mapping, sorting, aggregating, and collecting sequences of elements from data sources (like Collections or Arrays).

## 🇮🇳 Hindi

Lambda expressions code ko short aur readable banati hain. **Stream API** data collections par declarative functional processing (jaise `.filter()`, `.map()`, `.sorted()`, `.collect()`) karne ke liye use hoti hai, bina manual `for` loops likhe.

## 🚩 Marathi

Lambda mhanje lahan anonymous function. Stream API mulamajhi collections varti `.filter()`, `.map()`, `.collect()` sarkhya declarative kriya karta yetat.

## 📝 1. Core Built-In Functional Interfaces

Java provides 4 primary built-in functional interfaces in `java.util.function`:

| Interface | Method Signature | Purpose | Example Lambda |
|---|---|---|---|
| `Predicate<T>` | `boolean test(T t)` | Evaluates a condition | `x -> x > 50` |
| `Function<T, R>` | `R apply(T t)` | Transforms input `T` to output `R` | `s -> s.length()` |
| `Consumer<T>` | `void accept(T t)` | Consumes input (no return) | `x -> System.out.println(x)` |
| `Supplier<T>` | `T get()` | Generates/supplies a value | `() -> Math.random()` |

## 📝 2. Method References (`Class::method`)

Shorthand syntax for lambdas that simply pass arguments directly to an existing method:

- `String::toUpperCase` (Replaces `s -> s.toUpperCase()`)
- `System.out::println` (Replaces `x -> System.out.println(x)`)
- `Integer::parseInt` (Replaces `str -> Integer.parseInt(str)`)

## 📝 3. Stream Processing Pipeline Pipeline

A Stream pipeline consists of 3 stages:

1. **Source:** `list.stream()`
2. **Intermediate Operations (Lazy):** `.filter()`, `.map()`, `.sorted()`, `.distinct()`, `.limit()`
3. **Terminal Operation (Eager Trigger):** `.collect()`, `.reduce()`, `.count()`, `.forEach()`, `.anyMatch()`

```text
Collection Data Source
         │
         ▼
  stream()
         │
         ▼
.filter(p -> p.isStock())  <-- Intermediate Operation (Lazy)
         │
         ▼
  .map(p -> p.getPrice())  <-- Intermediate Operation (Lazy)
         │
         ▼
 .collect(toList())        <-- Terminal Operation (Executes Pipeline!)
```

## 💡 Complete Example: Employee Salary Analytics with Streams

```java
import java.util.*;
import java.util.stream.Collectors;

public class StreamMaster {

    record Employee(int id, String name, String department, double salary) {}

    public static void main(String[] args) {
        List<Employee> employees = List.of(
            new Employee(101, "Aarav Sharma", "Engineering", 95000.00),
            new Employee(102, "Sneha Kapoor", "Marketing", 65000.00),
            new Employee(103, "Rahul Verma", "Engineering", 85000.00),
            new Employee(104, "Priya Nair", "HR", 55000.00),
            new Employee(105, "Kiran Deshmukh", "Engineering", 110000.00)
        );

        System.out.println("=== STREAM PROCESSING PIPELINE ===");

        // 1. Filter Engineering employees earning > 80,000 & Extract Names
        List<String> highPaidEngineers = employees.stream()
                .filter(e -> e.department().equals("Engineering"))
                .filter(e -> e.salary() > 80000.00)
                .map(Employee::name)
                .sorted()
                .toList(); // Java 16+ Stream.toList()

        System.out.println("High Paid Engineers : " + highPaidEngineers);

        // 2. Aggregate Total Salary Expense for Engineering
        double totalEngSalary = employees.stream()
                .filter(e -> e.department().equals("Engineering"))
                .mapToDouble(Employee::salary) // Primitive DoubleStream
                .sum();

        System.out.printf("Total Engineering Payroll : ₹%.2f%n", totalEngSalary);

        // 3. Group Employees by Department
        Map<String, List<Employee>> employeesByDept = employees.stream()
                .collect(Collectors.groupingBy(Employee::department));

        System.out.println("\n--- Employees Grouped By Department ---");
        employeesByDept.forEach((dept, empList) -> {
            System.out.println("Department: " + dept);
            empList.forEach(e -> System.out.println("   - " + e.name() + " (₹" + e.salary() + ")"));
        });
    }
}
```

## 👀 Output

```text
=== STREAM PROCESSING PIPELINE ===
High Paid Engineers : [Aarav Sharma, Kiran Deshmukh, Rahul Verma]
Total Engineering Payroll : ₹290000.00

--- Employees Grouped By Department ---
Department: HR
   - Priya Nair (₹55000.0)
Department: Marketing
   - Sneha Kapoor (₹65000.0)
Department: Engineering
   - Aarav Sharma (₹95000.0)
   - Rahul Verma (₹85000.0)
   - Kiran Deshmukh (₹110000.0)
```

## ⚠️ Common Mistakes

- Reusing a Stream object after a terminal operation has already been executed (`IllegalStateException: stream has already been operated upon or closed`).
- Forgetting a Terminal Operation (like `.collect()` or `.sum()`). Intermediate stream operations are **lazy** and will NOT execute unless triggered by a terminal operation!
- Mutating shared external state variables inside stream lambda operations. Streams must remain pure and side-effect free.

## 🛡️ Safety / Important Notes

Use Primitive Streams (`IntStream`, `LongStream`, `DoubleStream`) when performing heavy numerical aggregations to avoid performance overhead from Wrapper Object Autoboxing.

## 🌍 Real-World Usage

Filtering REST API query datasets, calculating financial order totals, mapping database entity models to DTOs, and grouping data for analytical reporting.

## 🧪 Try It Yourself

1. Create a list of numbers `List.of(12, 45, 8, 23, 76, 19)`.
2. Filter numbers greater than `20`, double each number using `.map()`, and collect the result into a new list.

## 🎯 Mini Challenge

Write a stream pipeline that reads a list of customer names, filters names starting with `'A'`, converts them to uppercase, joins them with `, ` using `Collectors.joining(", ")`.

## 🔗 Related Topics

- [Collections](11-collections.html)
- [Enums and Records](12-enums-and-records.html)

## 🧭 Navigation

[← Java Home](./) | [← Previous: File Input and Output](20-file-input-and-output.html) | [Next: Dates and Time →](22-dates-and-time.html)

