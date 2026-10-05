---
layout: default
title: "Conditionals"
---

# Conditional Decision Making in Python

> 🟢 Beginner

## 📖 Definition

**Conditional Statements** allow Python programs to execute specific blocks of code based on whether a boolean condition evaluates to `True` or `False`. Python uses `if`, `elif` (else if), `else`, and ternary conditional expressions. Code blocks are defined strictly using **4-space Indentation**.

## 🇮🇳 Hindi

Decision making ke liye `if`, `elif` (else if), aur `else` ka use hota hai. Python mein `{}` braces nahi hote, isliye `if` block ka code **Indentation (4 spaces)** se structured hota hai.

## 🚩 Marathi

Decision-making sathi `if`, `elif`, aani `else` vaparatat. Code block saathi 4-space **Indentation** aavashyak ahe.

## 🤔 Why Do We Use Them?

Real-world software adapts dynamically based on data—verifying if an account balance is sufficient before withdrawing cash, checking login passwords, or applying discount rules based on order totals.

## 🧠 Simple Explanation

Think of conditionals as a traffic signal. If the light is green (`if`), go. If the light is yellow (`elif`), slow down. Otherwise (`else`), stop. Only one track runs based on the signal condition.

## 📝 1. Truthy and Falsy Values in Python

In Python, every object evaluates to either `True` or `False` in a boolean context.

### The Falsy Values in Python:
- `False`
- `None`
- `0`, `0.0`, `0j`
- Empty sequences: `""` (string), `[]` (list), `()` (tuple)
- Empty collections: `{}` (dictionary), `set()`

*Everything else is **Truthy*** (including `"0"`, `[0]`, `True`).

## 📝 2. Conditional Syntaxes

```python
# 1. Standard if...elif...else Chain
score = 85

if score >= 90:
    print("Grade: A+")
elif score >= 75:
    print("Grade: A")
elif score >= 50:
    print("Grade: B")
else:
    print("Grade: F")

# 2. Ternary Conditional Expression (Single-line binary decision)
age = 20
status = "Allowed" if age >= 18 else "Denied"
```

## 💡 Complete Example: Role & Balance Verification System

```python
# Bank Transaction Approval System
account_balance = 50000.00
withdrawal_request = 12000.00
user_role = "PREMIUM_USER"
is_account_active = True

print("=== TRANSACTION DECISION ENGINE ===")

# 1. Guard Clause Check
if not is_account_active:
    print("Transaction Failed: Account is deactivated.")
else:
    # 2. Nested Role Check & Limit
    max_daily_limit = 100000.00 if user_role == "PREMIUM_USER" else 25000.00
    
    if withdrawal_request > max_daily_limit:
        print(f"Declined: Exceeds daily limit of ₹{max_daily_limit:.2f}")
    elif withdrawal_request > account_balance:
        print("Declined: Insufficient account balance.")
    else:
        account_balance -= withdrawal_request
        print(f"Approved: Withdrew ₹{withdrawal_request:.2f}")
        print(f"Remaining Balance: ₹{account_balance:.2f}")
```

## 👀 Output

```text
=== TRANSACTION DECISION ENGINE ===
Approved: Withdrew ₹12000.00
Remaining Balance: ₹38000.00
```

## ⚠️ Common Mistakes

- Forgetting the colon `:` at the end of `if`, `elif`, or `else` statement lines.
- **`IndentationError`:** Mixing tabs and spaces, or un-indenting code incorrectly inside `if` blocks.
- Using assignment `=` instead of relational equality `==` inside conditions (`if x = 5:` causes a `SyntaxError` in Python!).

## 🛡️ Safety / Important Notes

In Python, you do not need explicit comparisons like `if len(items) > 0:`—you can use Pythonic truthiness directly: `if items:` (since an empty list `[]` is Falsy!).

## 🌍 Real-World Usage

Role-based authorization gates, form field validations, discount coupon rules, API routing, and game logic rules.

## 🧪 Try It Yourself

1. Write an `if...elif...else` block that classifies a temperature in Celsius as freezing (`<= 0`), comfortable (`18` to `28`), or hot (`> 30`).
2. Rewrite a simple binary decision using a single-line ternary expression.

## 🎯 Mini Challenge

Write a program that takes an input year and checks whether it is a Leap Year (divisible by 4, but not by 100 unless also divisible by 400).

## 🔗 Related Topics

- [Operators and Expressions](05-operators.html)
- [Loops](07-loops.html)

## 🧭 Navigation

[← Python Home](./) | [← Previous: Operators](05-operators.html) | [Next: Loops →](07-loops.html)

