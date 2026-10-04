---
layout: default
title: "Strings"
---

# Strings and Text Processing in Python

> 🟢 Beginner

## 📖 Definition

A **String** in Python is an **immutable** sequence of Unicode characters enclosed in single quotes `'...'`, double quotes `"..."`, or triple quotes `"""..."""`. Because strings are immutable, operations that appear to modify a string actually return a brand-new string object in memory.

## 🇮🇳 Hindi

String textual data represent karti hai. Python mein String **Immutable** (non-changeable) hoti hai. String methods (jaise `.strip()`, `.replace()`) original string ko change karne ke bajaye nayi string return karte hain. Formatted output ke liye **f-strings** (`f"Hello {name}"`) sabse best practice hai.

## 🚩 Marathi

String **Immutable** aste (original string madhye badal hot nahi). Methods navin String object return kartat. Text formatting sathi f-strings vaparatat.

## 📝 1. Indexing, Slicing & Formatting

```python
text = "Python Programming"

# Slicing syntax: text[start:stop:step]
print(text[0:6])     # "Python" (index 0 to 5)
print(text[7:])      # "Programming"
print(text[::-1])    # Reverses string: "gnimmargorP nohtyP"

# Formatted f-string (Python 3.6+)
user = "Aarav"
score = 98.5
print(f"User {user} scored {score:.1f}%") # "User Aarav scored 98.5%"
```

## 📝 2. Essential String Methods

| Method | What It Does | Example Return |
|---|---|---|
| `.lower()` / `.upper()` | Converts case | `"PYTHON" -> "python"` |
| `.strip()` | Removes leading and trailing whitespace | `" hello "` -> `"hello"` |
| `.replace(old, new)` | Replaces substring occurrences | `"py" -> "js"` |
| `.split(delimiter)` | Splits string into list of substrings | `"a,b".split(",")` -> `['a', 'b']` |
| `delimiter.join(list)`| Joins list of strings with delimiter | `"-".join(['a','b'])` -> `"a-b"` |
| `.find(sub)` | Returns first index position or `-1` | `"cat".find("a")` -> `1` |
| `.startswith(prefix)` | Checks if string begins with prefix | `"http".startswith("http")` -> `True` |
| `.isdigit()` / `.isalpha()`| Validates numeric or alphabet content| `"123".isdigit()` -> `True` |

## 💡 Complete Example: Cleaning & Formatting User Inputs

```python
# User Profile Sanitization & Normalization

raw_csv_record = "  aarav_mehta ,  aarav@example.com ,  MUMBAI  "

print("=== RAW CSV SANITIZER ===")
print("Raw Input Record :", repr(raw_csv_record))

# 1. Cleaning whitespace & splitting
fields = raw_csv_record.split(",")
clean_fields = [f.strip() for f in fields] # List comprehension strip

username = clean_fields[0].lower()
email = clean_fields[1].lower()
city = clean_fields[2].title() # Capitalizes first letter

# 2. Re-joining into a clean CSV line
normalized_record = ", ".join([username, email, city])

# 3. String validation
is_valid_email = "@" in email and email.endswith(".com")

print("\n--- SANITIZED RESULT ---")
print(f"Username    : {username}")
print(f"Email       : {email} (Valid? {is_valid_email})")
print(f"City        : {city}")
print(f"Clean Record: {normalized_record}")
```

## 👀 Output

```text
=== RAW CSV SANITIZER ===
Raw Input Record : '  aarav_mehta ,  aarav@example.com ,  MUMBAI  '

--- SANITIZED RESULT ---
Username    : aarav_mehta
Email       : aarav@example.com (Valid? True)
City        : Mumbai
Clean Record: aarav_mehta, aarav@example.com, Mumbai
```

## ⚠️ Common Mistakes

- Expecting string modification methods to alter the string in-place without saving the return value (`text.strip()` does not change `text` unless assigned: `text = text.strip()`).
- Using `.strip()` to parse structured CSV files with quoted commas (use Python's built-in `csv` module instead!).

## 🛡️ Safety / Important Notes

In Python 3, all strings are Unicode sequences by default. For raw binary data (like images or network packets), use the `bytes` type (`b"binary data"`).

## 🌍 Real-World Usage

Sanitizing web form inputs, parsing log files, extracting domain names from email strings, generating CSV reports, and cleaning natural language text for NLP.

## 🧪 Try It Yourself

1. Create a string `text = "  python web development  "`. Strip its whitespace and convert it to uppercase.
2. Split `"apple,banana,orange"` by comma `,` and join them with ` | `.

## 🎯 Mini Challenge

Write a program that takes a sentence string and counts how many times the word `"python"` appears (case-insensitive) using `.lower()` and `.count()`.

## 🔗 Related Topics

- [Input and Output](04-input-output.md)
- [List Comprehensions](14-list-comprehensions.md)

## 🧭 Navigation

[← Python Home](00-README.md) | [← Previous: Dictionaries](12-dictionaries.md) | [Next: List Comprehensions →](14-list-comprehensions.md)
