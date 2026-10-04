---
layout: default
title: "Loops"
---

# Loops in Python (`for`, `while`, `range`, `else`)

> 🟢 Beginner

## 📖 Definition

**Loops** repeatedly execute a block of code as long as a condition holds true or for each item in a sequence (like a list, string, or range). Python supports `for` loops (sequence iteration), `while` loops (pre-test condition), `break`, `continue`, `pass`, and a unique **`for...else` / `while...else`** clause.

## 🇮🇳 Hindi

Repeated tasks ko automate karne ke liye `for` aur `while` loops ka use hota hai. Counter sequences ke liye `range(start, stop, step)` use karein. Python mein `for...else` block tabhi chalta hai jab loop bina `break` hit kiye naturally complete hota hai.

## 🚩 Marathi

Code punha punha chalavnyasathi `for` aani `while` loops vaparatat. Sequences sathi `range()` aani loop skip sathi `continue` vapara.

## 📝 1. Sequence Iteration & `range()`

The `range(start, stop, step)` function generates a sequence of numbers (the `stop` number is **excluded**!).

```python
# Iterates 1, 2, 3, 4 (5 is excluded)
for i in range(1, 5):
    print("Count:", i)

# Step sequence: 0, 2, 4, 6, 8
for even in range(0, 10, 2):
    print("Even:", even)
```

## 📝 2. Loop Control Keywords

- `break`: Exits the loop immediately.
- `continue`: Skips the rest of the current iteration and jumps to the next cycle.
- `pass`: Placeholder statement that does nothing (used when syntax requires a statement).

## 📝 3. Unique Python Feature: `for...else`

In Python, an `else` block attached to a loop executes **ONLY if the loop finishes all iterations naturally without hitting a `break` statement!**

```python
numbers = [1, 3, 5, 7]
target = 4

for num in numbers:
    if num == target:
        print("Found target!")
        break
else:
    # Runs ONLY if target was not found and loop didn't break!
    print("Target not found in list.")
```

## 💡 Complete Example: Searching & Batch Processing

```python
# Batch Processing & Inventory Search System
inventory = [
    {"name": "Laptop", "stock": 15, "price": 55000.00},
    {"name": "Mouse", "stock": 0, "price": 499.00},   # Out of stock
    {"name": "Keyboard", "stock": 25, "price": 1499.00},
    {"name": "Monitor", "stock": 8, "price": 12500.00}
]

print("=== INVENTORY BATCH SUMMARY ===")

# 1. Processing Inventory with for loop & continue
for item in inventory:
    if item["stock"] == 0:
        print(f"Skipping {item['name']}: Out of Stock!")
        continue  # Skip out-of-stock items
        
    print(f"Item: {item['name']:<10} | Stock: {item['stock']:<3} | Value: ₹{item['stock'] * item['price']:.2f}")

# 2. Search Target Item with for...else
search_name = "Keyboard"
print(f"\nSearching for '{search_name}'...")

for item in inventory:
    if item["name"].lower() == search_name.lower():
        print(f"FOUND: {item['name']} - ₹{item['price']} ({item['stock']} in stock)")
        break
else:
    print(f"NOT FOUND: '{search_name}' is not in inventory.")
```

## 👀 Output

```text
=== INVENTORY BATCH SUMMARY ===
Item: Laptop     | Stock: 15  | Value: ₹825000.00
Skipping Mouse: Out of Stock!
Item: Keyboard   | Stock: 25  | Value: ₹37475.00
Item: Monitor    | Stock: 8   | Value: ₹100000.00

Searching for 'Keyboard'...
FOUND: Keyboard - ₹1499.0 (25 in stock)
```

## ⚠️ Common Mistakes

- **Infinite Loops:** Forgetting to update counter variables inside a `while` loop.
- **Off-By-One Errors:** Forgetting that `range(1, 10)` generates numbers from 1 to 9 (10 is excluded!).
- Modifying a list structurally (adding or removing items) while iterating over it with a `for` loop.

## 🛡️ Safety / Important Notes

When you need both element indices and values during list iteration, use `enumerate(sequence)` instead of manual index counters:

```python
fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits, start=1):
    print(f"{index}. {fruit}")
```

## 🌍 Real-World Usage

Traversing database query results, retrying network requests, reading text log files line-by-line, and rendering list UI templates.

## 🧪 Try It Yourself

1. Write a `for` loop using `range()` that prints all multiples of 5 from `5` to `50`.
2. Write a `while` loop that calculates the sum of digits of `1234`.

## 🎯 Mini Challenge

Write a program that uses `for...else` to check whether a given integer is a Prime Number (divisible only by 1 and itself).

## 🔗 Related Topics

- [Conditionals](06-conditionals.md)
- [Lists](09-lists.md)

## 🧭 Navigation

[← Python Home](00-README.md) | [← Previous: Conditionals](06-conditionals.md) | [Next: Functions →](08-functions.md)
