---
layout: default
title: "Variables and Data Types"
---

# Variables and Data Types in Python

> 🟢 Beginner

## 📖 Definition

In Python, a **Variable** is a named reference that points to an object in memory. Python is **dynamically typed**, meaning you do not need to declare variable data types explicitly—the Python interpreter automatically infers the data type at runtime based on the value assigned to it.

## 🇮🇳 Hindi

Python mein variables declare karte waqt datatype (`int`, `str`, etc.) nahi likhna padta. Python assignment ke aadhar par datatype khud determine kar leta hai. Datatype check karne ke liye `type()` function ka use hota hai.

## 🚩 Marathi

Python madhye variables saathi data type bolava lagat nahi (dynamic typing). Value kashi ahe tyavrun Python type tharavto. Type bghnyasathi `type()` vapara.

## 🤔 Why Do We Use Them?

Variables allow programs to store, reference, update, and manipulate dynamic data values—such as user inputs, shopping cart totals, API responses, and database records.

## 🧠 Simple Explanation

Think of a Python variable as a sticky name tag attached to a package in a warehouse. The name tag is the variable name (e.g., `user_age`), and the item inside the package is the object (e.g., `25`). You can easily peel off the sticky tag and attach it to a different package later.

## 📝 1. Core Primitive Data Types

Python provides built-in primitive data types:

| Data Type | Category | Description | Example |
|---|---|---|---|
| `int` | Integer | Whole numbers (arbitrary precision) | `age = 25` |
| `float` | Floating Point | Real numbers with decimals | `price = 999.50` |
| `bool` | Boolean | Logical state (`True` or `False`) | `is_active = True` |
| `str` | Text String | Sequence of Unicode characters | `name = "Rahul"` |
| `NoneType` | None | Represents absence of a value | `result = None` |

## 📝 2. Type Checking & Type Casting

- **`type(var)`:** Returns the exact class type of an object.
- **`isinstance(var, Type)`:** Returns `True` if variable matches specified type.
- **Type Conversion:** Explicitly converting values using `int()`, `float()`, `str()`, `bool()`.

```python
score_str = "95"
score_int = int(score_str)  # Converts string "95" to integer 95
price_float = float(100)    # Converts integer 100 to float 100.0
```

## 📝 3. Variable Naming Rules (snake_case)

- Use **`snake_case`** for Python variable names (`user_age`, `total_amount`).
- Names can contain letters, numbers, and underscores (`_`).
- Names **cannot start with a number**.
- Cannot use reserved Python keywords (`if`, `class`, `def`, `import`, `for`).

## 💡 Complete Example: Variables, Types & Conversion

```python
# Product E-Commerce Summary
product_name = "Wireless Headphones"  # str
unit_price = 2499.00                 # float
quantity_str = "2"                   # str (from input)
in_stock = True                      # bool
discount_code = None                 # NoneType

# Type Conversion: Parsing quantity string to integer
quantity = int(quantity_str)
total_cost = unit_price * quantity

print("=== PRODUCT DETAILS ===")
print(f"Product Name : {product_name} (Type: {type(product_name).__name__})")
print(f"Unit Price   : ₹{unit_price} (Type: {type(unit_price).__name__})")
print(f"Quantity     : {quantity} (Type: {type(quantity).__name__})")
print(f"In Stock?    : {in_stock}")
print(f"Total Cost   : ₹{total_cost:.2f}")

# Checking Type with isinstance()
print(f"Is Total Cost a float? : {isinstance(total_cost, float)}")
```

## 👀 Output

```text
=== PRODUCT DETAILS ===
Product Name : Wireless Headphones (Type: str)
Unit Price   : ₹2499.0 (Type: float)
Quantity     : 2 (Type: int)
In Stock?    : True
Total Cost   : ₹4998.00
Is Total Cost a float? : True
```

## ⚠️ Common Mistakes

- Trying to perform string concatenation with integers directly (`"Score: " + 95` causes `TypeError`; use f-string `f"Score: {95}"` or `str(95)`).
- Confusing the equality operator `==` (compares values) with the identity operator `is` (compares memory object ID).
- Using Python reserved words as variable names (e.g. naming a variable `list` or `type`).

## 🛡️ Safety / Important Notes

In Python, numbers (`int`, `float`), booleans, strings, and tuples are **immutable** (their values cannot be changed in-place; modified variables point to new objects in memory).

## 🌍 Real-World Usage

Data pipeline processing, handling REST API JSON responses, dynamic configuration settings, and data science dataframes.

## 🧪 Try It Yourself

1. Declare a variable `user_age = "24"`. Convert it to an integer, add `5` to it, and print `f"Age in 5 years: {user_age + 5}"`.
2. Check `type(None)` in your terminal REPL.

## 🎯 Mini Challenge

Write a program that declares a floating-point temperature in Fahrenheit `temp_f = 98.6`, converts it to Celsius using formula `(temp_f - 32) * 5/9`, and prints the result rounded to 1 decimal place.

## 🔗 Related Topics

- [Input and Output](04-input-output.md)
- [Operators and Expressions](05-operators.md)

## 🧭 Navigation

[← Python Home](00-README.md) | [← Previous: Introduction to Python](02-introduction-to-python.md) | [Next: Input and Output →](04-input-output.md)
