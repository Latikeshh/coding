---
layout: default
title: "Advanced Functions"
---

# Advanced Functions in Python (`*args`, `**kwargs`, Closures & Scope)

> 🟡 Intermediate

## 📖 Definition

Advanced Python function features include variable-length positional arguments (**`*args`**), variable-length keyword arguments (**`**kwargs`**), First-Class Functions, closures, and variable scope resolution rules (**LEGB Rule: Local, Enclosing, Global, Built-in**).

## 🇮🇳 Hindi

Python mein `*args` se aap arbitrary number of positional arguments (as a tuple) pass kar sakte hain, aur `**kwargs` se arbitrary keyword arguments (as a dictionary) pass hote hain. Python mein Functions **First-Class Citizens** hain, yani unhe variables mein store kiya ja sakta hai aur doosre functions mein argument ki tarah pass kiya ja sakta hai.

## 🚩 Marathi

`*args` tuple chya roopat multiple inputs gheto, tar `**kwargs` dictionary chya roopat keyword inputs gheto.

## 📝 1. Variable-Length Arguments (`*args` & `**kwargs`)

- **`*args` (Positional Argument Packing):** Gathers extra positional arguments into a `tuple`.
- **`**kwargs` (Keyword Argument Packing):** Gathers extra keyword arguments into a `dict`.

```python
def flex_logger(log_level, *args, **kwargs):
    print(f"[{log_level}] Extra Positional Args:", args)
    print(f"[{log_level}] Extra Keyword Args   :", kwargs)

# Call
flex_logger("INFO", "User Logged In", "IP: 192.168.1.1", user_id=501, status="SUCCESS")
```

## 📝 2. Variable Scope & The LEGB Rule

Python searches for variable names in strict sequential order:

1. **L - Local:** Inside the current executing function.
2. **E - Enclosing:** Inside outer enclosing functions (for nested closures).
3. **G - Global:** Declared at the top level of the module script.
4. **B - Built-in:** Built-in Python functions (`len`, `range`, `print`).

```python
x = "GLOBAL"

def outer():
    x = "ENCLOSING"
    def inner():
        nonlocal x # Modifies outer enclosing variable 'x'
        x = "MODIFIED_ENCLOSING"
    inner()
    print("Outer x:", x) # "MODIFIED_ENCLOSING"

outer()
```

## 📝 3. Closures & Function Factories

A **Closure** occurs when an inner nested function retains access to variables in its outer enclosing scope even after the outer function has finished execution.

```python
def make_multiplier(factor):
    # 'factor' is trapped inside the inner closure environment!
    def multiply(number):
        return number * factor
    return multiply

double = make_multiplier(2)
triple = make_multiplier(3)

print(double(5)) # 10
print(triple(5)) # 15
```

## 💡 Complete Example: Dynamic Configuration & Logging Factory

```python
# Flexible Event Auditing System

def build_event_logger(system_component):
    """Function factory returning a custom logger closure."""
    event_count = 0 # Enclosing state variable
    
    def log_event(event_type, *details, **metadata):
        nonlocal event_count
        event_count += 1
        
        detail_msg = " | ".join(details)
        print(f"[{system_component}] Event #{event_count}: {event_type}")
        if detail_msg:
            print(f"   Details : {detail_msg}")
        if metadata:
            print(f"   Metadata: {metadata}")
        print("-" * 40)
        
    return log_event

# Instantiate closures for separate components
auth_logger = build_event_logger("AUTH_SERVICE")
db_logger = build_event_logger("DATABASE")

# Logging events with args and kwargs
auth_logger("LOGIN_SUCCESS", "User IP 10.0.0.1", user="Aarav", attempts=1)
auth_logger("PASSWORD_CHANGE", user="Aarav", forced=False)
db_logger("QUERY_EXECUTE", "SELECT * FROM users", duration_ms=12)
```

## 👀 Output

```text
[AUTH_SERVICE] Event #1: LOGIN_SUCCESS
   Details : User IP 10.0.0.1
   Metadata: {'user': 'Aarav', 'attempts': 1}
----------------------------------------
[AUTH_SERVICE] Event #2: PASSWORD_CHANGE
   Metadata: {'user': 'Aarav', 'forced': False}
----------------------------------------
[DATABASE] Event #1: QUERY_EXECUTE
   Details : SELECT * FROM users
   Metadata: {'duration_ms': 12}
----------------------------------------
```

## ⚠️ Common Mistakes

- Incorrect order of parameter declarations in functions! The strict required parameter order is:
  `def func(positional, *args, default_param=val, **kwargs):`
- Modifying a global variable inside a function without declaring `global var_name` first, causing an `UnboundLocalError`.

## 🛡️ Safety / Important Notes

When unpacking lists or dictionaries into function calls, use `*` for list/tuple positional unpacking and `**` for dictionary keyword unpacking: `func(*my_list, **my_dict)`.

## 🌍 Real-World Usage

Writing custom decorators, middleware functions in web frameworks (Django/Flask), event listeners, and flexible API wrappers.

## 🧪 Try It Yourself

1. Write a function `sum_all(*numbers)` that calculates and returns the sum of any quantity of numbers passed to it.
2. Create a closure `make_counter()` that returns a function that increments and returns a private count variable starting from `0`.

## 🎯 Mini Challenge

Write a function `build_user_profile(first_name, last_name, **attributes)` that returns a dictionary containing the full name and any arbitrary extra keyword metadata passed in.

## 🔗 Related Topics

- [Functions Basics](08-functions.html)
- [Decorators](21-decorators.html)

## 🧭 Navigation

[← Python Home](./) | [← Previous: List Comprehensions](14-list-comprehensions.html) | [Next: Modules and Packages →](16-modules-and-packages.html)

