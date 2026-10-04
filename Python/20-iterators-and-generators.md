---
layout: default
title: "Iterators and Generators"
---

# Iterators and Generators in Python

> 🔴 Advanced

## 📖 Definition

- **Iterator:** An object representing a stream of data that returns one element at a time using the `next()` method until raising `StopIteration`.
- **Generator (`yield`):** A special, memory-efficient function that uses the **`yield`** keyword to stream data values **lazily on-demand**, rather than calculating and storing entire datasets in RAM memory.

## 🇮🇳 Hindi

Large datasets ko memory efficiency ke saath process karne ke liye Generators ka use hota hai. Normal function `return` se saare results ek saath deta hai, jabki **Generator Function (`yield`)** ek waqt par sirf ek value lazily produce karta hai. Isse RAM memory consume nahi hoti.

## 🚩 Marathi

Generators **`yield`** keyword cha wapar karun data memory madhye ekasathi na thevta ek-ek item laazily produce kartat.

## 🤔 Why Do We Use Them?

If you need to process 10 million log lines or stream a 5GB CSV file, building a list of 10 million items in memory will crash Python with a `MemoryError`. Generators stream items one by one without memory overhead.

## 🧠 Simple Explanation

Think of a list as buying 1,000 canned sodas and storing all 1,000 cans in your small refrigerator at once (huge memory footprint). Think of a **Generator** as a vending machine: it manufactures and dispenses **one cold soda on-demand** only when you press the button (`next()`).

## 📝 1. Generator Functions (`yield` vs `return`)

- `return`: Exits the function permanently and returns a single value.
- `yield`: Suspends function execution, saves local state, and yields a value. When `next()` is called again, execution resumes immediately after the `yield` line!

```python
def simple_generator():
    yield "First Item"
    yield "Second Item"
    yield "Third Item"

gen = simple_generator()
print(next(gen)) # "First Item"
print(next(gen)) # "Second Item"
```

## 📝 2. Generator Expressions `(expression for item in iterable)`

Constructs a generator using tuple-like parentheses syntax:

```python
# List Comprehension: Evaluates ALL 1,000,000 items in RAM immediately!
huge_list = [x * 2 for x in range(1000000)] # Consumes ~8MB RAM

# Generator Expression: Evaluates ITEMS LAZILY ON-DEMAND!
huge_gen = (x * 2 for x in range(1000000))  # Consumes ~120 Bytes RAM!
```

## 💡 Complete Example: Large Data Streaming & Infinite Sequence

```python
import sys

# 1. Generator Function for Fibonacci Sequence
def fibonacci_generator(limit):
    """Yields Fibonacci numbers up to limit."""
    a, b = 0, 1
    count = 0
    while count < limit:
        yield a
        a, b = b, a + b
        count += 1

# 2. Comparing Memory Usage: List vs Generator
def square_list(n):
    return [i ** 2 for i in range(n)]

def square_generator(n):
    for i in range(n):
        yield i ** 2

print("=== GENERATOR MEMORY COMPARISON ===")

N = 100000
list_data = square_list(N)
gen_data = square_generator(N)

print(f"List Memory Usage     : {sys.getsizeof(list_data):,} Bytes")
print(f"Generator Memory Usage: {sys.getsizeof(gen_data):,} Bytes")

print("\n--- STREAMING FIBONACCI GENERATOR ---")
for fib in fibonacci_generator(8):
    print(fib, end=" -> ")
print("END")
```

## 👀 Output

```text
=== GENERATOR MEMORY COMPARISON ===
List Memory Usage     : 824,456 Bytes
Generator Memory Usage: 112 Bytes

--- STREAMING FIBONACCI GENERATOR ---
0 -> 1 -> 1 -> 2 -> 3 -> 5 -> 8 -> 13 -> END
```

## ⚠️ Common Mistakes

- Attempting to index a generator directly (`gen[0]` causes `TypeError: 'generator' object is not subscriptable`; use `next(gen)` or iterate with a `for` loop instead!).
- Attempting to re-use an exhausted generator. Once a generator finishes yielding all items, calling `next()` raises `StopIteration`. You must instantiate a new generator!

## 🛡️ Safety / Important Notes

All generators are iterators, but not all iterators are generators. Generators implement the iterator protocol (`__iter__()` and `__next__()`) automatically under the hood.

## 🌍 Real-World Usage

Processing massive CSV/log files line-by-line, streaming large database query rows, generating infinite sequence IDs, and processing audio/video frame pipelines.

## 🧪 Try It Yourself

1. Create a generator function `even_numbers(n)` that yields even numbers from `0` up to `n`.
2. Iterate through the generator using a `for` loop and print each number.

## 🎯 Mini Challenge

Write a generator function `countdown(start)` that yields numbers counting down from `start` to `1`, then yields `"Liftoff!"`.

## 🔗 Related Topics

- [List Comprehensions](14-list-comprehensions.md)
- [Decorators](21-decorators.md)

## 🧭 Navigation

[← Python Home](00-README.md) | [← Previous: Object-Oriented Programming](19-object-oriented-programming.md) | [Next: Decorators →](21-decorators.md)
