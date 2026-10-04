---
layout: default
title: "List Comprehensions"
---

# List Comprehensions in Python

> 🟡 Intermediate

## 📖 Definition

A **List Comprehension** is a concise, expressive Pythonic construct used to create a new list by transforming or filtering elements from an existing iterable in a single line of code.

## 🇮🇳 Hindi

List Comprehension ek chhota aur fast tareeqa hai nayi list banane ka. traditional `for` loop aur `append()` likhne ke bajaye aap ek hi line mein transformation aur filtering kar sakte hain: `[expression for item in list if condition]`.

## 🚩 Marathi

List Comprehension mule `for` loop peksha ekach line madhye navin list tayar karta yete.

## 🤔 Why Do We Use Them?

Traditional `for` loops require 4 to 5 lines of boilerplate code (creating empty list, loop header, `if` condition, `.append()`). List comprehensions reduce boilerplate to a single readable line and execute faster at the CPython bytecode level.

## 🧠 Simple Explanation

Think of a list comprehension as a factory conveyor belt fitted with an automated filter and paint sprayer. As raw items pass along the belt (`for item in iterable`), the filter selector (`if condition`) discards flawed items, and the sprayer (`expression`) instantly modifies the remaining items before dropping them into a new collection box.

## 📝 1. Syntax Blueprint

```text
new_list = [expression for item in iterable if condition]
```

```python
numbers = [1, 2, 3, 4, 5, 6]

# Traditional For Loop (4 lines)
evens_traditional = []
for n in numbers:
    if n % 2 == 0:
        evens_traditional.append(n * 2)

# List Comprehension (1 line!)
evens_comprehension = [n * 2 for n in numbers if n % 2 == 0]
```

## 📝 2. Set and Dictionary Comprehensions

The same comprehension syntax applies to Sets `{}` and Dictionaries `{k: v}`:

```python
# Set Comprehension (Deduplicates transformed items)
unique_lengths = {len(word) for word in ["apple", "banana", "apple", "fig"]}

# Dictionary Comprehension
word_lengths = {word: len(word) for word in ["python", "java", "sql"]}
# Result: {"python": 6, "java": 4, "sql": 3}
```

## 💡 Complete Example: E-Commerce Product Filter & Discounting

```python
# E-Commerce Product Filter Pipeline

products = [
    {"name": "Gaming Laptop", "price": 75000.00, "in_stock": True},
    {"name": "Wireless Mouse", "price": 1200.00, "in_stock": True},
    {"name": "Desk Lamp", "price": 800.00, "in_stock": False}, # Out of stock
    {"name": "Mechanical Keyboard", "price": 4500.00, "in_stock": True}
]

print("=== PRODUCT COMPREHENSION PIPELINE ===")

# 1. Filter in-stock products and apply 10% discount to prices
discounted_prices = [p["price"] * 0.90 for p in products if p["in_stock"]]

# 2. Extract product names in uppercase for in-stock items costing > ₹1,000
premium_items = [p["name"].upper() for p in products if p["in_stock"] and p["price"] > 1000]

# 3. Dictionary Comprehension: Mapping product names to discounted prices
price_map = {p["name"]: p["price"] * 0.90 for p in products if p["in_stock"]}

print("Discounted Prices :", discounted_prices)
print("Premium Items     :", premium_items)
print("Discount Price Map:", price_map)
```

## 👀 Output

```text
=== PRODUCT COMPREHENSION PIPELINE ===
Discounted Prices : [67500.0, 1080.0, 4050.0]
Premium Items     : ['GAMING LAPTOP', 'WIRELESS MOUSE', 'MECHANICAL KEYBOARD']
Discount Price Map: {'Gaming Laptop': 67500.0, 'Wireless Mouse': 1080.0, 'Mechanical Keyboard': 4050.0}
```

## ⚠️ Common Mistakes

- Writing overly complex nested list comprehensions with multiple `for` loops and `if...else` logic that becomes unreadable. If a comprehension spans more than 2 lines, convert it back to a standard `for` loop!
- Confusing the `if` filter placement (placed at the end) with `if...else` ternary expressions (placed before the `for` clause: `[x if x > 0 else 0 for x in items]`).

## 🛡️ Safety / Important Notes

If you are dealing with **massive datasets** with millions of items, do not build huge list comprehensions in memory—use a **Generator Expression** `(x for x in huge_iterable)` to stream items lazily one by one!

## 🌍 Real-World Usage

Data transformation in Pandas/data science pipelines, parsing CSV rows, filtering database search results, and transforming REST API payloads.

## 🧪 Try It Yourself

1. Given `numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`, write a list comprehension to square only odd numbers.
2. Given `words = ["hello", "world", "python"]`, create a list of capitalized strings `["HELLO", "WORLD", "PYTHON"]`.

## 🎯 Mini Challenge

Given a list of temperatures in Celsius `celsius = [0, 12, 25, 34, 40]`, write a single-line comprehension that converts them to Fahrenheit `(c * 9/5) + 32` for temperatures above `20°C`.

## 🔗 Related Topics

- [Lists](09-lists.md)
- [Dictionaries](12-dictionaries.md)
- [Iterators and Generators](20-iterators-and-generators.md)

## 🧭 Navigation

[← Python Home](00-README.md) | [← Previous: Strings](13-strings.md) | [Next: Advanced Functions →](15-functions-advanced.md)
