---
layout: default
title: "Lambda, Map, Filter, and Reduce"
---

# Functional Programming: Lambda, Map, Filter, and Reduce

> 🔴 Advanced

## 📖 Definition

Functional programming in Python involves using **Lambda Expressions** (anonymous inline single-expression functions) alongside higher-order built-in functional tools:
- **`map()`:** Applies a function transformation to every element in an iterable.
- **`filter()`:** Selects elements from an iterable that satisfy a boolean predicate condition.
- **`functools.reduce()`:** Repeatedly applies a binary function to aggregate a sequence into a single cumulative value.

## 🇮🇳 Hindi

Lambda anonymous single-line functions hote hain: `lambda args: expression`. Data list ko transform karne ke liye `map()`, condition ke aadhar par filter karne ke liye `filter()`, aur single total value (jaise sum ya product) calculate karne ke liye `reduce()` ka use hota hai.

## 🚩 Marathi

Lambda mhanje ekach oolit lihilele anonymous function. Data rupantar sathi `map()`, gaalnyasathi (filter) `filter()`, aani eka value madhye combine karnyasathi `reduce()` vaparatat.

## 📝 1. Anonymous Lambda Functions (`lambda args: expr`)

Syntax: `lambda arg1, arg2: expression` (implicitly returns the expression result!).

```python
# Standard function
def square(x): return x ** 2

# Equivalent Lambda function
square_lambda = lambda x: x ** 2
print(square_lambda(5)) # 25
```

## 📝 2. `map()`, `filter()`, and `functools.reduce()`

```python
from functools import reduce

numbers = [1, 2, 3, 4, 5, 6]

# 1. map(): Double each number -> [2, 4, 6, 8, 10, 12]
doubled = list(map(lambda x: x * 2, numbers))

# 2. filter(): Keep only even numbers -> [2, 4, 6]
evens = list(filter(lambda x: x % 2 == 0, numbers))

# 3. reduce(): Accumulate sum of all numbers -> 21
total_sum = reduce(lambda acc, num: acc + num, numbers, 0)
```

## 🧠 Readability Comparison: Loops vs Comprehensions vs Map/Filter

> 💡 **Pythonic Readability Rule:** In modern Python, **List Comprehensions** are usually preferred over `map()` and `filter()` because they are easier to read!

```python
# List Comprehension (Preferred for readability in Python!)
doubled_comp = [x * 2 for x in numbers if x % 2 == 0]

# Equivalent map() + filter()
doubled_map = list(map(lambda x: x * 2, filter(lambda x: x % 2 == 0, numbers)))
```

## 💡 Complete Example: E-Commerce Product Data Processing

```python
from functools import reduce

# Product Dataset
products = [
    {"name": "Gaming Laptop", "price": 75000.00, "category": "Tech"},
    {"name": "Wireless Mouse", "price": 1200.00, "category": "Tech"},
    {"name": "Coffee Mug", "price": 350.00, "category": "Home"},
    {"name": "Mechanical Keyboard", "price": 4500.00, "category": "Tech"}
]

print("=== FUNCTIONAL DATA PROCESSING PIPELINE ===")

# 1. filter(): Get Tech category products
tech_products = list(filter(lambda p: p["category"] == "Tech", products))

# 2. map(): Extract prices of Tech products
tech_prices = list(map(lambda p: p["price"], tech_products))

# 3. reduce(): Calculate total value of Tech inventory
total_tech_value = reduce(lambda acc, price: acc + price, tech_prices, 0.0)

print(f"Filtered Tech Products Count : {len(tech_products)}")
print(f"Tech Prices List             : {tech_prices}")
print(f"Total Tech Inventory Value   : ₹{total_tech_value:.2f}")

# Sorting with Lambda Key
sorted_by_price = sorted(products, key=lambda p: p["price"], reverse=True)
print("\nHighest Price First:", sorted_by_price[0]["name"])
```

## 👀 Output

```text
=== FUNCTIONAL DATA PROCESSING PIPELINE ===
Filtered Tech Products Count : 3
Tech Prices List             : [75000.0, 1200.0, 4500.0]
Total Tech Inventory Value   : ₹80700.00

Highest Price First: Gaming Laptop
```

## ⚠️ Common Mistakes

- Forgetting that `map()` and `filter()` return **lazy iterator objects** in Python 3! You must pass them to `list()` or iterate over them to view elements!
- Using complex multi-statement lambdas (Lambdas in Python are strictly restricted to a **single expression**!).
- Over-using nested `map()` and `filter()` where a clean list comprehension or `for` loop is much easier to read.

## 🛡️ Safety / Important Notes

Always provide an explicit initial value parameter (e.g. `0` or `0.0`) as the 3rd argument to `functools.reduce()` to prevent a `TypeError` if the input sequence is empty.

## 🌍 Real-World Usage

Data transformation in PySpark / Pandas pipelines, custom sorting keys in `sorted(key=lambda x: ...)` / `list.sort()`, and data aggregation.

## 🧪 Try It Yourself

1. Given `numbers = [5, 12, 8, 20, 15]`, use `filter()` to select numbers greater than `10`.
2. Given a list of words `["apple", "banana", "kiwi"]`, use `sorted(words, key=lambda w: len(w))` to sort words by length.

## 🎯 Mini Challenge

Write a program that uses `reduce()` to find the maximum number in a list `[14, 82, 35, 91, 56]` without using the built-in `max()` function.

## 🔗 Related Topics

- [List Comprehensions](14-list-comprehensions.html)
- [Decorators](21-decorators.html)

## 🧭 Navigation

[← Python Home](./) | [← Previous: Decorators](21-decorators.html) | [Next: Regular Expressions →](23-regular-expressions.html)

