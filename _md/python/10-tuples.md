---
layout: default
title: "Tuples"
---

# Tuples in Python

> 🟢 Beginner

## 📖 Definition

A **Tuple** is an ordered, **immutable** (unchangeable) sequence of elements enclosed in round parentheses `()`. Once a tuple is created, its elements cannot be modified, added, or removed.

## 🇮🇳 Hindi

Tuple ek immutable (jo change nahi ho sakti) collection hai jiske elements round brackets `()` mein hote hain. Tuple create hone ke baad aap usme items add, remove, ya modify nahi kar sakte. Tuple execution fast hoti hai aur ise dictionary keys ke roop mein bhi use kiya ja sakta hai.

## 🚩 Marathi

Tuple **Immutable** aste (tyat items badalta, add kiva remove karta yet nahit). Parentheses `()` cha wapar kela jato.

## 🤔 Why Do We Use Them?

1. **Data Protection:** Ensures sensitive data (like database credentials or geographic coordinates) cannot be accidentally overwritten or mutated by other functions.
2. **Performance:** Tuples consume less memory and execute faster than lists.
3. **Dictionary Keys:** Because tuples are immutable and hashable, they can be used as keys in Python dictionaries (unlike mutable lists!).

## 📝 1. Tuple Creation & Single-Element Syntax Trap

> ⚠️ **CRITICAL SYNTAX TRAP:** To create a tuple with **a single element**, you MUST include a trailing comma `,`! Without the comma, Python treats `(5)` as a plain integer in parentheses, NOT a tuple!

```python
# Single element integer (NOT a tuple!)
not_a_tuple = (5)     # type is int

# Single element Tuple (Comma is mandatory!)
single_tuple = (5,)   # type is tuple

# Standard tuple
coordinates = (19.0760, 72.8777) # (Latitude, Longitude)
```

## 📝 2. Tuple Unpacking & Variable Swapping

Python allows extracting tuple elements directly into individual variables:

```python
point = (10, 20, 30)
x, y, z = point # Unpacking elements

print(f"X: {x}, Y: {y}, Z: {z}")

# Pythonic Variable Swapping (Implicit Tuple Unpacking!)
a, b = 5, 10
a, b = b, a # Swaps values in one clean line!
print(f"a: {a}, b: {b}") # a: 10, b: 5
```

## 📝 3. Extended Unpacking with `*` Operator

```python
numbers = (1, 2, 3, 4, 5, 6)
first, *middle, last = numbers

print(first)  # 1
print(middle) # [2, 3, 4, 5] (Captured as list)
print(last)   # 6
```

## 💡 Complete Example: GPS Location & Database Configuration

```python
# Database Configuration Tuple (Immutable Record)
db_config = ("localhost", 5432, "admin_user", "db_production")

# Unpacking Database Config
host, port, user, db_name = db_config

print("=== DATABASE CONNECTION SETUP ===")
print(f"Host Server : {host}")
print(f"Port        : {port}")
print(f"User        : {user}")
print(f"Database    : {db_name}")

# Tuple Methods: .count() and .index()
sample_data = (10, 20, 10, 30, 10, 40)
print(f"\nCount of 10 in Tuple  : {sample_data.count(10)}")
print(f"First Index of 30     : {sample_data.index(30)}")
```

## 👀 Output

```text
=== DATABASE CONNECTION SETUP ===
Host Server : localhost
Port        : 5432
User        : admin_user
Database    : db_production

Count of 10 in Tuple  : 3
First Index of 30     : 3
```

## ⚠️ Common Mistakes

- Attempting to modify or assign a value to a tuple element (`tuple[0] = 5` causes a `TypeError: 'tuple' object does not support item assignment`).
- Forgetting the trailing comma when creating a single-element tuple (`a = ("admin")` is a `str`, whereas `a = ("admin",)` is a `tuple`).

## 🛡️ Safety / Important Notes

If a tuple contains a **mutable object** (like a `list` inside a tuple `([1, 2], [3, 4])`), the internal list elements CAN still be mutated! The tuple only protects the reference pointer from being reassigned to a different list.

## 🌍 Real-World Usage

Returning multiple values from functions, storing database connection settings, fixed RGB color tuples `(255, 128, 0)`, and GPS coordinates `(lat, lon)`.

## 🧪 Try It Yourself

1. Create a tuple `dimensions = (1920, 1080)`. Unpack it into variables `width` and `height`.
2. Verify that `(100)` is an `int` while `(100,)` is a `tuple` using `type()`.

## 🎯 Mini Challenge

Write a function `get_circle_metrics(radius)` that returns a tuple containing area (`3.14159 * r**2`) and circumference (`2 * 3.14159 * r`), and unpack the returned values.

## 🔗 Related Topics

- [Lists](09-lists.html)
- [Dictionaries](12-dictionaries.html)

## 🧭 Navigation

[← Python Home](./) | [← Previous: Lists](09-lists.html) | [Next: Sets →](11-sets.html)

