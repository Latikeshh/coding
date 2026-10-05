---
layout: default
title: "Regular Expressions"
---

# Regular Expressions in Python (`re` Module)

> 🟡 Intermediate

## 📖 Definition

**Regular Expressions (Regex)** are special character search patterns used to match, extract, validate, and replace complex text sequences inside strings using Python's built-in **`re`** module.

## 🇮🇳 Hindi

Text mein complex patterns (jaise Emails, Phone numbers, ZIP codes) search, validate, aur replace karne ke liye **Regular Expressions (`re` module)** ka use hota hai. Escape issues se bachne ke liye hamesha Raw Strings (`r"pattern"`) ka use karein.

## 🚩 Marathi

Text patterns (Emails, Phone numbers) validate aani replace karnyasathi `re` module cha wapar kela jato. Pattern sathi Raw Strings (`r"pattern"`) vapara.

## 📝 1. Core Regex Metacharacters

| Symbol | What It Matches | Example |
|---|---|---|
| `\d` | Any digit (`0-9`) | `r"\d{3}"` matches 3 digits |
| `\w` | Word character (`a-z`, `A-Z`, `0-9`, `_`) | `r"\w+"` matches word |
| `\s` | Whitespace character (space, tab, newline) | `r"\s+"` matches spaces |
| `.` | Any single character except newline | `r"a.c"` matches `"abc"` |
| `^` / `$` | Start / End of string | `r"^Hello$"` |
| `+` | 1 or more occurrences | `r"\d+"` |
| `*` | 0 or more occurrences | `r"\d*"` |
| `?` | 0 or 1 occurrence (optional) | `r"colou?r"` |
| `[a-z]` | Character set range | `r"[A-Za-z]+"` |

## 📝 2. Key `re` Module Functions

- **`re.search(pattern, text)`:** Searches entire string for FIRST match. Returns `Match` object or `None`.
- **`re.findall(pattern, text)`:** Searches string and returns a **list of all matching substrings**.
- **`re.match(pattern, text)`:** Matches pattern starting at the **very beginning** of string.
- **`re.sub(pattern, replacement, text)`:** Replaces all pattern matches with replacement string.

```python
import re

text = "Call us at 987-654-3210 or 912-345-6789"
pattern = r"\d{3}-\d{3}-\d{4}"

# Extracting all phone numbers
phones = re.findall(pattern, text)
print(phones) # ['987-654-3210', '912-345-6789']
```

## 💡 Complete Example: Email & Phone Number Validation Engine

```python
import re

def validate_user_input(email, phone):
    """Validates email and Indian phone number formats using Regex."""
    
    # 1. Email Regex Pattern
    email_pattern = r"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    
    # 2. Indian Phone Number Pattern (10 digits starting with 6,7,8,9)
    phone_pattern = r"^[6-9]\d{9}$"
    
    is_valid_email = bool(re.match(email_pattern, email))
    is_valid_phone = bool(re.match(phone_pattern, phone))
    
    return is_valid_email, is_valid_phone

def mask_sensitive_emails(text):
    """Replaces email addresses with '[REDACTED]' using re.sub()."""
    email_pattern = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
    return re.sub(email_pattern, "[REDACTED_EMAIL]", text)

# Testing Regex Engine
print("=== REGEX VALIDATION & SANITIZATION ===")

email_test = "aarav.verma@example.com"
phone_test = "9876543210"

v_email, v_phone = validate_user_input(email_test, phone_test)

print(f"Testing Email: '{email_test}' -> Valid? {v_email}")
print(f"Testing Phone: '{phone_test}' -> Valid? {v_phone}")

sample_log = "User Rahul (rahul@company.org) raised ticket #501."
masked_log = mask_sensitive_emails(sample_log)
print("\nOriginal Log :", sample_log)
print("Masked Log   :", masked_log)
```

## 👀 Output

```text
=== REGEX VALIDATION & SANITIZATION ===
Testing Email: 'aarav.verma@example.com' -> Valid? True
Testing Phone: '9876543210' -> Valid? True

Original Log : User Rahul (rahul@company.org) raised ticket #501.
Masked Log   : User Rahul ([REDACTED_EMAIL]) raised ticket #501.
```

## ⚠️ Common Mistakes

- Forgetting to use Raw Strings `r"pattern"` (writing `"\\d+"` instead of `r"\d+"`), leading to backslash escape syntax conflicts.
- Confusing `re.match()` (matches ONLY at start of string) with `re.search()` (searches anywhere across entire string!).

## 🛡️ Safety / Important Notes

Avoid overly complex nested regex patterns on untrusted user inputs to prevent **Catastrophic Backtracking** (ReDoS - Regular Expression Denial of Service attacks).

## 🌍 Real-World Usage

Form validation (Email, Password strength, Phone), web scraping data extraction, log file parsing, and data masking/redaction.

## 🧪 Try It Yourself

1. Write a regex pattern `r"\d+"` and use `re.findall()` to extract all numbers from `"Order #501 with 3 items costing $450"`.
2. Replace all spaces in `"Hello  World  Python"` with a single hyphen `-` using `re.sub()`.

## 🎯 Mini Challenge

Write a function `extract_hashtags(text)` using `re.findall()` that extracts all Twitter-style hashtags starting with `#` (e.g. `"#python #coding"`).

## 🔗 Related Topics

- [Strings](13-strings.html)
- [Exception Handling](18-exception-handling.html)

## 🧭 Navigation

[← Python Home](./) | [← Previous: Lambda, Map, Filter, Reduce](22-lambda-map-filter-reduce.html) | [Next: Datetime →](24-datetime.html)

