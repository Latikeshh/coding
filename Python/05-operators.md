---
layout: default
title: "Operators"
---

# Operators and Expressions in Python

> 🟢 Beginner

## 📖 Definition

An **Operator** is a special symbol used to perform calculations, assign values, compare variables, check logical conditions, and inspect object membership or identity. An **Expression** combines variables, constants, and operators to evaluate a resulting value.

## 🇮🇳 Hindi

Operators calculations karne, values compare karne, aur logical conditions check karne ke kaam aate hain. Python mein special division operators hote hain: `/` (float division) aur `//` (floor/integer division). Membership checking ke liye `in` aur `not in` ka use hota hai.

## 🚩 Marathi

Operators cha wapar calculations, comparison, aani logical checks karnyasathi hoto. List kiva string madhye item shodhnyasathi `in` aani `not in` operator vaparatat.

## 📝 Operator Categories

### 1. Arithmetic Operators
- `+` (Add), `-` (Subtract), `*` (Multiply)
- `/` (Float Division): Returns float (`10 / 4` -> `2.5`)
- `//` (Floor / Integer Division): Truncates decimal part (`10 // 4` -> `2`)
- `%` (Modulus / Remainder): Returns remainder (`10 % 4` -> `2`)
- `**` (Exponentiation / Power): `2 ** 3` -> `8`

### 2. Relational / Comparison Operators
`==` (Equal), `!=` (Not Equal), `>` (Greater), `<` (Less), `>=` (Greater Equal), `<=` (Less Equal)

### 3. Logical Operators (Word-based)
- `and`: Returns `True` if **both** conditions are true (short-circuits).
- `or`: Returns `True` if **at least one** condition is true (short-circuits).
- `not`: Inverts boolean state (`not True` -> `False`).

### 4. Membership Operators (`in`, `not in`)
Checks if a value or substring exists inside a string, list, tuple, or set:

```python
fruits = ["apple", "banana", "cherry"]
print("banana" in fruits) # True
print("z" not in "python")  # True
```

### 5. Identity Operators (`is`, `is not`)
Checks if two variables refer to the **exact same object in memory** (compares `id()`, unlike `==` which compares value content).

## 💡 Complete Example: Operator Evaluation

```python
# Operator Evaluation Demo
total_items = 17
box_capacity = 5

# Division Comparison
boxes_filled = total_items // box_capacity  # 3 (Floor division)
remaining_items = total_items % box_capacity # 2 (Modulus)

print(f"Boxes Filled     : {boxes_filled}")
print(f"Remaining Items  : {remaining_items}")

# Logical & Membership Checking
user_role = "ADMIN"
active_roles = ["ADMIN", "MANAGER", "SUPERUSER"]
is_account_active = True

# Logical Evaluation
can_access_dashboard = (user_role in active_roles) and is_account_active
print(f"Access Allowed?  : {can_access_dashboard}")

# Chained Comparison Syntax (Pythonic Feature!)
age = 22
is_adult_working_age = 18 <= age <= 60 # Equivalent to (18 <= age and age <= 60)
print(f"Working Age?     : {is_adult_working_age}")
```

## 👀 Output

```text
Boxes Filled     : 3
Remaining Items  : 2
Access Allowed?  : True
Working Age?     : True
```

## ⚠️ Common Mistakes

- Using single assignment `=` instead of comparison `==` inside `if` statements.
- Confusing `==` (compares value equality) with `is` (compares memory object identity).
- Expecting integer division `/` in Python 3 to return an integer (in Python 3, `/` ALWAYS returns a `float`! Use `//` for integer division).

## 🛡️ Safety / Important Notes

Always use parentheses `()` when combining multiple `and` and `or` logical operations in a single expression to make evaluation order explicit and readable.

## 🌍 Real-World Usage

E-commerce discount eligibility checks, permission checks in web apps, searching strings/tags using `in`, and mathematical data analytics.

## 🧪 Try It Yourself

1. Test `print(10 / 3)` vs `print(10 // 3)`.
2. Test `"Py" in "Python"` vs `"Java" in "Python"`.

## 🎯 Mini Challenge

Write an expression using `% 2 == 0` that checks whether a given number is even, and combine it with `and` to check if it is also greater than `10`.

## 🔗 Related Topics

- [Variables and Data Types](03-variables-and-data-types.html)
- [Conditionals](06-conditionals.html)

## 🧭 Navigation

[← Python Home](./) | [← Previous: Input and Output](04-input-output.html) | [Next: Conditionals →](06-conditionals.html)

