---
layout: default
title: "Decorators"
---

# Decorators in Python

> 🔴 Advanced

## 📖 Definition

A **Decorator** is a Higher-Order Function that accepts another function as an argument, wraps it inside an inner function to extend or modify its behavior, and returns the wrapped function **without modifying the original function's source code**. Decorators use the **`@decorator_name`** syntax.

## 🇮🇳 Hindi

Decorator ek higher-order function hota hai jo kisi doosre function ka behavior extend karta hai bina uske source code ko change kiye. Decorator ka use logging, execution timing, aur authentication checks ke liye sabse jyada hota hai. Syntax: `@decorator_name`.

## 🚩 Marathi

Decorator function cha behavior badalnyasathi kiva extend karnyasathi vaparatat. `@decorator_name` syntax cha wapar hoto.

## 🤔 Why Do We Use Them?

Decorators enforce the **Dry Principle (Don't Repeat Yourself)** by separating cross-cutting concerns (like logging, authentication, execution timing, input caching) from core business logic functions.

## 🧠 Simple Explanation

Think of a decorator as a gift wrapping service. You give them a gift (the target function). They wrap the gift in fancy paper and add a bow (extend behavior with logging/timing) before handing you back the wrapped package. The gift inside remains unchanged.

## 📝 1. Decorator Blueprint & `functools.wraps`

> ⚠️ **CRITICAL RULE:** Always use **`@functools.wraps(func)`** inside your decorator wrapper function!
> Without `@wraps`, the decorated function loses its original `__name__` and `__doc__` metadata attributes (they get overwritten by `wrapper`)!

```python
from functools import wraps

def my_decorator(func):
    @wraps(func) # Preserves target function metadata (__name__, __doc__)
    def wrapper(*args, **kwargs):
        # 1. Code executed BEFORE target function runs
        print("Before function execution...")
        
        # 2. Executing target function
        result = func(*args, **kwargs)
        
        # 3. Code executed AFTER target function runs
        print("After function execution...")
        
        return result
    return wrapper

# Applying Decorator using @ syntax
@my_decorator
def greet(name):
    print(f"Hello, {name}!")

greet("Aarav")
```

## 💡 Complete Example: Execution Timer & Audit Logger Decorators

```python
import time
from functools import wraps

# Decorator 1: Execution Time Benchmark
def time_benchmark(func):
    """Decorator that measures and logs function execution time."""
    @wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed_time = (time.perf_counter() - start_time) * 1000 # Convert to ms
        print(f"[BENCHMARK] Function '{func.__name__}' executed in {elapsed_time:.3f} ms")
        return result
    return wrapper

# Decorator 2: Security Role Checker
def require_admin(func):
    """Decorator that checks for admin privileges."""
    @wraps(func)
    def wrapper(user_role, *args, **kwargs):
        if user_role.upper() != "ADMIN":
            print(f"[SECURITY] Access Denied for role '{user_role}'. Admin required.")
            return None
        return func(user_role, *args, **kwargs)
    return wrapper

# Applying Multiple Decorators (Executed bottom-up!)
@require_admin
@time_benchmark
def delete_database_record(user_role, record_id):
    """Simulates database deletion operation."""
    time.sleep(0.05) # Simulate minor delay
    print(f"[DATABASE] Record #{record_id} deleted successfully.")
    return True

# Testing Decorators
print("=== DECORATOR AUDIT SYSTEM ===")

print("--- Case 1: Unauthorized User Attempt ---")
delete_database_record("GUEST", 501)

print("\n--- Case 2: Authorized Admin Execution ---")
delete_database_record("ADMIN", 501)
```

## 👀 Output

```text
=== DECORATOR AUDIT SYSTEM ===
--- Case 1: Unauthorized User Attempt ---
[SECURITY] Access Denied for role 'GUEST'. Admin required.

--- Case 2: Authorized Admin Execution ---
[DATABASE] Record #501 deleted successfully.
[BENCHMARK] Function 'delete_database_record' executed in 51.234 ms
```

## ⚠️ Common Mistakes

- Forgetting to include `*args` and `**kwargs` in the inner wrapper function signature, causing decorated functions with arguments to fail with `TypeError`.
- Forgetting to return the result of `func(*args, **kwargs)` inside the wrapper function, causing the decorated function to return `None`!
- Omitting `@functools.wraps(func)`, which breaks documentation tools and debugging.

## 🛡️ Safety / Important Notes

When chaining multiple decorators (`@decorator_a` over `@decorator_b`), remember that decorators are applied from the **bottom-up** (nearest function first).

## 🌍 Real-World Usage

Authentication and permission gates in Web Frameworks (`@login_required` in Django/Flask), execution timing logs, caching/memoization (`@functools.lru_cache`), and input validation.

## 🧪 Try It Yourself

1. Write a decorator `@log_call` that prints `"Executing function..."` before running any target function.
2. Apply `@log_call` to a function `add(a, b)` and test it.

## 🎯 Mini Challenge

Write a decorator `@repeat_three_times` that executes the target function 3 times whenever it is invoked.

## 🔗 Related Topics

- [Functions Advanced](15-functions-advanced.md)
- [Iterators and Generators](20-iterators-and-generators.md)

## 🧭 Navigation

[← Python Home](00-README.md) | [← Previous: Iterators and Generators](20-iterators-and-generators.md) | [Next: Lambda, Map, Filter, Reduce →](22-lambda-map-filter-reduce.md)
