---
layout: default
title: "Input and Output"
---

# Input and Output in Python

> 🟢 Beginner

## 📖 Definition

**Input and Output (I/O)** allows Python programs to communicate with users. Output is displayed on the screen using the **`print()`** function, while user input is captured from the terminal using the **`input()`** function.

## 🇮🇳 Hindi

Screen par result dikhane ke liye `print()` function ka use hota hai. User se terminal input lene ke liye `input()` function ka use kiya jata hai. Note karein ki `input()` function hamesha **String (`str`)** value return karta hai, isliye numbers ke liye type conversion (`int()` / `float()`) karna padta hai.

## 🚩 Marathi

Terminal varti output dakhvanyasathi `print()` vaparatat. User kadun input ghenyasathi `input()` function cha wapar hoto. `input()` hamesha String ch deto, mhanun numbers sathi `int()` vapara.

## 🤔 Why Do We Use It?

Interactive applications require user input (like names, passwords, amounts, search terms) to process calculations dynamically rather than relying on hardcoded static values.

## 🧠 Simple Explanation

Think of `print()` as a digital megaphone that broadcasts messages from Python onto the user's screen. Think of `input()` as a receptionist asking the user a question and handing their written answer over to Python.

## 📝 1. Output with `print()`

The `print()` function accepts multiple arguments and formatting options:

- **`sep` parameter:** Defines separator between printed items (default is space `' '`).
- **`end` parameter:** Defines ending character (default is newline `'\n'`).
- **f-strings (Formatted String Literals):** `f"Hello {variable}"` (Python 3.6+).

```python
name = "Aarav"
age = 22

# Using f-strings (Best Practice)
print(f"Name: {name} | Age: {age}")

# Custom Separator and End
print("Python", "Java", "C++", sep=" - ")
print("Processing...", end="") # Stays on same line!
print("Done!")
```

## 📝 2. Input with `input()` & Type Casting

The `input()` function pauses execution and waits for the user to type text and press `Enter`:

```python
# input() ALWAYS returns a string!
user_age_str = input("Enter your age: ") 

# Converting string to integer for calculations
user_age = int(user_age_str)
```

## 💡 Complete Example: Interactive Order Billing Console

```python
# E-Commerce Billing Console
print("=== TECH STORE ORDER CONSOLE ===")

# Capturing User Inputs
customer_name = input("Enter Customer Name : ")
product_name  = input("Enter Product Name  : ")

# Prompting and explicit numerical parsing
unit_price = float(input("Enter Unit Price (₹): "))
quantity   = int(input("Enter Quantity      : "))

# Calculating Financial Totals
subtotal = unit_price * quantity
tax_amount = subtotal * 0.18 # 18% GST
total_payable = subtotal + tax_amount

# Displaying Formatted Receipt
print("\n" + "="*35)
print("          ORDER RECEIPT          ")
print("="*35)
print(f"Customer Name : {customer_name}")
print(f"Product       : {product_name} (x{quantity})")
print(f"Unit Price    : ₹{unit_price:.2f}")
print(f"Subtotal      : ₹{subtotal:.2f}")
print(f"GST (18%)     : ₹{tax_amount:.2f}")
print("-" * 35)
print(f"Total Payable : ₹{total_payable:.2f}")
print("="*35)
```

## 👀 Output

```text
=== TECH STORE ORDER CONSOLE ===
Enter Customer Name : Rahul Verma
Enter Product Name  : Wireless Keyboard
Enter Unit Price (₹): 1499.50
Enter Quantity      : 2

===================================
          ORDER RECEIPT          
===================================
Customer Name : Rahul Verma
Product       : Wireless Keyboard (x2)
Unit Price    : ₹1499.50
Subtotal      : ₹2999.00
GST (18%)     : ₹539.82
-----------------------------------
Total Payable : ₹3538.82
===================================
```

## ⚠️ Common Mistakes

- Forgetting to convert `input()` to `int` or `float` when doing math calculations (`"25" + "5"` results in string concatenation `"255"`, not addition `30`!).
- Passing non-numeric text into `int()` or `float()`, causing a `ValueError: invalid literal for int()`.

## 🛡️ Safety / Important Notes

When formatting floating-point numbers in f-strings, use `:.2f` to round output neatly to 2 decimal places (e.g. `f"₹{amount:.2f}"`).

## 🌍 Real-World Usage

Command-line utilities, interactive setup wizards, installer prompts, terminal games, and user verification interfaces.

## 🧪 Try It Yourself

1. Write a program that asks for a user's name and birth year.
2. Calculate and print their current age assuming current year is 2026.

## 🎯 Mini Challenge

Build a currency converter script that asks the user for an amount in USD ($) and converts it to INR (₹) using rate `1 USD = 86.50 INR`, displaying output formatted to 2 decimals.

## 🔗 Related Topics

- [Variables and Data Types](03-variables-and-data-types.md)
- [Exception Handling](18-exception-handling.md)

## 🧭 Navigation

[← Python Home](00-README.md) | [← Previous: Variables](03-variables-and-data-types.md) | [Next: Operators and Expressions →](05-operators.md)
