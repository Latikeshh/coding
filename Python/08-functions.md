---
layout: default
title: "Functions"
---

# Functions in Python

> 🟢 Beginner

## 📖 Definition

A **Function** is a named, reusable block of Python statements declared using the `def` keyword. Functions accept input **parameters**, process application logic, and return output results using the `return` statement (or return `None` if no return is specified).

## 🇮🇳 Hindi

Function code ka ek reusable block hota hai jo specific kaam karta hai. Reusable logic ko function mein wrap karne se code duplication nahi hoti (**DRY Principle:** Don't Repeat Yourself). Parameters inputs lene ke liye aur `return` statement result wapas bhejne ke liye use hota hai.

## 🚩 Marathi

Function mhanje punha-punha vaparta yenara code block. Parameters inputs ghenyasathi aani `return` result parat dhenyasathi vaparatat.

## 🤔 Why Do We Use Them?

Without functions, you would have to duplicate the same calculations, validations, and string formatting statements repeatedly across your codebase. Functions make programs modular, readable, maintainable, and unit-testable.

## 🧠 Simple Explanation

Think of a function as an automated juice blender. You pass inputs (the fruits you drop in), press start (invoke the function), it processes the blending internally, and gives you back the resulting glass of juice (`return` value).

## 📝 1. Function Syntax & Keyword Arguments

```python
# Function Definition with Default Parameter
def calculate_tax(amount, tax_rate=18.0):
    tax = amount * (tax_rate / 100)
    return tax

# Positional Argument Call
t1 = calculate_tax(1000)      # Uses default tax_rate=18.0 -> 180.0

# Keyword Argument Call (Explicitly naming parameters)
t2 = calculate_tax(tax_rate=10.0, amount=2000) # 200.0
```

## 📝 2. Returning Multiple Values (Tuple Packing)

Python functions can return multiple values simultaneously using commas (Python packs them into a tuple!):

```python
def get_min_max(numbers):
    return min(numbers), max(numbers) # Returns tuple (min_val, max_val)

# Unpacking returned tuple directly into separate variables
lowest, highest = get_min_max([45, 12, 89, 33, 95])
```

## 📝 3. Local vs Global Scope

- **Local Scope:** Variables created inside a function exist only while that function is executing.
- **Global Scope:** Variables declared outside functions. To modify a global variable inside a function, use the `global` keyword.

## 💡 Complete Example: E-Commerce Invoice Engine

```python
# E-Commerce Order Calculation Engine

def apply_discount(price, discount_percent=0.0):
    """Calculates discounted price given percentage."""
    if price < 0 or discount_percent < 0:
        return 0.0
    discount_amount = price * (discount_percent / 100)
    return price - discount_amount

def generate_invoice(customer_name, item_price, quantity=1, coupon="NONE"):
    """Generates complete order invoice metrics."""
    discount_rate = 0.0
    if coupon.upper() == "SAVE10":
        discount_rate = 10.0
    elif coupon.upper() == "SUPER20":
        discount_rate = 20.0
        
    discounted_unit_price = apply_discount(item_price, discount_rate)
    subtotal = discounted_unit_price * quantity
    gst_tax = subtotal * 0.18
    final_total = subtotal + gst_tax
    
    return subtotal, gst_tax, final_total # Returning multiple values

# Testing Function Invocation
cust = "Rahul Sharma"
price = 1500.00
qty = 2

sub, tax, total = generate_invoice(cust, price, quantity=qty, coupon="SUPER20")

print(f"=== INVOICE RECEIPT FOR {cust.upper()} ===")
print(f"Original Price : ₹{price:.2f} (x{qty})")
print(f"Coupon Applied : SUPER20 (20% OFF)")
print(f"Subtotal       : ₹{sub:.2f}")
print(f"GST Tax (18%)  : ₹{tax:.2f}")
print(f"Final Payable  : ₹{total:.2f}")
```

## 👀 Output

```text
=== INVOICE RECEIPT FOR RAHUL SHARMA ===
Original Price : ₹1500.00 (x2)
Coupon Applied : SUPER20 (20% OFF)
Subtotal       : ₹2400.00
GST Tax (18%)  : ₹432.00
Final Payable  : ₹2832.00
```

## ⚠️ Common Mistakes

- Forgetting to write `return` in a function when you need to use the computed result outside (functions without a `return` statement return `None` by default!).
- Placing required positional parameters **after** default parameters (`def func(a=10, b):` is invalid syntax!).
- Expecting a function to modify a primitive variable passed from outside (arguments are passed by assignment reference!).

## 🛡️ Safety / Important Notes

> ⚠️ **CRITICAL PYTHON PITFALL:** **Never use mutable default arguments like `def func(items=[])`!**
> Default arguments are evaluated **ONCE when the function is defined**, NOT every time it is called. A mutable list `[]` will persist state across separate function calls!
>
> **Correct Pattern:**
> ```python
> def func(items=None):
>     if items is None:
>         items = [] # Fresh list created every execution!
> ```

## 🌍 Real-World Usage

Data transformation routines, API request handlers, mathematical scoring algorithms, and string formatters.

## 🧪 Try It Yourself

1. Write a function `is_even(number)` that returns `True` if a number is even, otherwise `False`.
2. Write a function `calculate_area(length, width=5)` that calculates rectangle area.

## 🎯 Mini Challenge

Write a function `convert_temperature(celsius)` that returns two values in a tuple: Fahrenheit (`celsius * 9/5 + 32`) and Kelvin (`celsius + 273.15`).

## 🔗 Related Topics

- [Conditionals](06-conditionals.md)
- [Lists](09-lists.md)
- [Advanced Functions](15-functions-advanced.md)

## 🧭 Navigation

[← Python Home](00-README.md) | [← Previous: Loops](07-loops.md) | [Next: Lists →](09-lists.md)
