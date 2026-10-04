---
layout: default
title: "Methods"
---

# Methods in Java

> 🟢 Beginner

## 📖 Definition

A **Method** is a reusable, named block of Java statements declared within a class that performs a specific task. Methods accept input **parameters**, process application logic, and can optionally return a single value to the caller using the `return` keyword.

## 🇮🇳 Hindi

Method code ka ek reusable block hota hai jo specific kaam karta hai. Method create karne se code duplication nahi hoti (**DRY Principle:** Don't Repeat Yourself). Parameters inputs lene ke liye aur `return` statement result wapas bhejne ke liye use hota hai.

## 🚩 Marathi

Method mhanje punha-punha vaparta yenara code block. Parameters inputs ghenyathi aani `return` statement result parat dhenyasathi vaparatat.

## 🤔 Why Do We Use Them?

Without methods, you would have to duplicate the same math calculations, validation checks, and string formatting routines repeatedly throughout your application. Methods make code modular, readable, maintainable, and unit-testable.

## 🧠 Simple Explanation

Think of a method as a kitchen microwave oven. You give it inputs (the food plate and time parameter), press start (invoke the method), it performs processing internally, and gives you back the resulting hot meal (`return` value).

## 📝 1. Anatomy of a Method Declaration

```text
[access_modifier] [static] [return_type] [method_name]([parameter_list]) {
    // Method body
    return result; // Required if return_type is not void
}
```

```java
public static double calculateTax(double price, double taxRate) {
    double taxAmount = price * (taxRate / 100);
    return taxAmount;
}
```

## 📝 2. Method Overloading (Compile-Time Polymorphism)

Java allows multiple methods in the same class to share the **same method name**, provided their parameter list differs in parameter type, number of parameters, or parameter order.

```java
public class MathUtils {
    // Overload 1: Two integers
    public static int add(int a, int b) { return a + b; }
    
    // Overload 2: Three integers
    public static int add(int a, int b, int c) { return a + b + c; }
    
    // Overload 3: Two doubles
    public static double add(double a, double b) { return a + b; }
}
```

## 📝 3. Variable Arguments / Varargs (`Type... args`)

Varargs allow a method to accept zero or a variable number of arguments as an array:

```java
public static int sumAll(int... numbers) {
    int sum = 0;
    for (int n : numbers) {
        sum += n;
    }
    return sum;
}

// Invocation
int total = sumAll(10, 20, 30, 40); // 100
```

## 📝 4. Pass-By-Value Mechanics in Java

> ⚠️ **CRITICAL RULE:** **Java is ALWAYS Pass-By-Value!**
> - For primitive arguments, a copy of the primitive value is passed. Modifying the parameter inside the method does NOT alter the caller's variable!
> - For object reference arguments, a copy of the **reference memory address** is passed. The method can modify the internal state of the referenced object, but reassigning the parameter variable itself to a new object does NOT affect the caller's reference variable!

## 💡 Complete Example: E-Commerce Price Calculation Engine

```java
public class DiscountEngine {

    // Method 1: Calculate discounted price
    public static double applyDiscount(double originalPrice, double discountPercent) {
        if (originalPrice < 0 || discountPercent < 0) {
            return 0.0;
        }
        double discountAmount = originalPrice * (discountPercent / 100.0);
        return originalPrice - discountAmount;
    }

    // Overloaded Method 2: Apply fixed coupon discount
    public static double applyDiscount(double originalPrice, String couponCode) {
        double discountPercent = switch (couponCode.toUpperCase()) {
            case "SAVE10" -> 10.0;
            case "SUPER20" -> 20.0;
            case "MEGA30" -> 30.0;
            default -> 0.0;
        };
        return applyDiscount(originalPrice, discountPercent); // Calling Method 1
    }

    // Method 3: Recursive Factorial Calculation Example
    public static long calculateFactorial(int n) {
        if (n <= 1) return 1; // Base case prevents StackOverflowError
        return n * calculateFactorial(n - 1); // Recursive case
    }

    public static void main(String[] args) {
        double laptopPrice = 85000.00;

        double priceAfterPercent = applyDiscount(laptopPrice, 15.0);
        double priceAfterCoupon = applyDiscount(laptopPrice, "SUPER20");
        long factorialVal = calculateFactorial(5);

        System.out.printf("Original Price     : ₹%.2f%n", laptopPrice);
        System.out.printf("After 15%% Discount : ₹%.2f%n", priceAfterPercent);
        System.out.printf("After 'SUPER20'    : ₹%.2f%n", priceAfterCoupon);
        System.out.println("Factorial of 5     : " + factorialVal);
    }
}
```

## 👀 Output

```text
Original Price     : ₹85000.00
After 15% Discount : ₹72250.00
After 'SUPER20'    : ₹68000.00
Factorial of 5     : 120
```

## ⚠️ Common Mistakes

- Forgetting to provide a `return` statement along every possible execution path in a non-void method.
- Overloading methods by changing ONLY the return type (Java overloading requires parameter list differences; changing return type alone causes a compilation error!).
- Writing recursive methods without a valid **Base Case**, resulting in a `java.lang.StackOverflowError`.

## 🛡️ Safety / Important Notes

Keep methods small and focused on doing **one single responsibility well** (Single Responsibility Principle).

## 🌍 Real-World Usage

Validation services, financial tax computation routines, security hashing functions, and domain entity helper methods.

## 🧪 Try It Yourself

1. Write a static method `isEven(int number)` that returns `true` if a number is even, otherwise `false`.
2. Write an overloaded method `isEven(double number)` that checks if the integer portion is even.

## 🎯 Mini Challenge

Write a static method `calculateCompoundInterest(double principal, double rate, int years)` that computes compound interest using `Math.pow()`.

## 🔗 Related Topics

- [Loops](07-loops.md)
- [Arrays](09-arrays.md)
- [Classes and Objects](14-classes-and-objects.md)

## 🧭 Navigation

[← Java Home](00-README.md) | [← Previous: Loops](07-loops.md) | [Next: Arrays →](09-arrays.md)
