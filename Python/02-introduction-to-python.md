---
layout: default
title: "Introduction to Python"
---

# Introduction to Python 3

> 🟢 Beginner

## 📖 Definition

**Python** is a high-level, general-purpose, dynamically-typed, interpreted programming language known for its clean syntax, readability, and vast standard library ecosystem.

## 🇮🇳 Hindi

Python ek beginner-friendly aur easy-to-read programming language hai. Python mein code blocks curly braces `{}` ke bajaye **Indentation (4 spaces)** se define hote hain. Python code line-by-line interpret hota hai, jisse debugging bahut aasan ho jaati hai.

## 🚩 Marathi

Python chi syntax sopi aani vachnyasathi ekdam swachha aste. Code blocks sathi curly braces aivaji **Indentation** cha wapar kela jato.

## 🤔 Why Do We Use It?

Python prioritizes developer productivity and code readability (**"Readability Counts"**). Tasks that require 30 lines of code in C or Java can often be expressed in just 5 lines of Python code.

## 🧠 Simple Explanation

If traditional programming languages like C++ or Java are like writing formal legal contracts with semicolons and strict brackets, Python is like writing plain English instructions with clear paragraphs (indentation).

## 📝 Key Python Syntax Rules

1. **Indentation-Sensitive:** Python uses whitespace (4 spaces per indentation level) instead of `{}` braces to define code blocks.
2. **Case-Sensitive:** `Name`, `name`, and `NAME` are three completely distinct variables.
3. **No Semicolons Required:** Statements end automatically at the end of a newline (semicolons `;` are optional and rarely used).
4. **Comments:** Single-line comments start with `#`. Multi-line strings can be enclosed in `""" ... """`.

```python
# Single-line comment in Python

"""
Multi-line comment string
Explaining application logic
"""

user_name = "Aarav"
if user_name == "Aarav":
    print("Welcome, Aarav!") # Indented 4 spaces inside the if block
```

## 💡 Complete Example: Indentation & Basic Logic

```python
# Employee Welcome Script
company_name = "TechCorp Global"
employee_name = "Priya Sharma"
experience_years = 3

print("==================================")
print(f"       WELCOME TO {company_name}")
print("==================================")
print(f"Employee Name : {employee_name}")
print(f"Experience    : {experience_years} Years")

# Indentation Block
if experience_years >= 2:
    status = "Senior Associate"
    print(f"Designation   : {status}")
else:
    status = "Junior Trainee"
    print(f"Designation   : {status}")

print("==================================")
```

## 👀 Output

```text
==================================
       WELCOME TO TechCorp Global
==================================
Employee Name : Priya Sharma
Experience    : 3 Years
Designation   : Senior Associate
==================================
```

## ⚠️ Common Mistakes

- **`IndentationError`:** Mixing tabs and spaces, or using inconsistent spacing across code blocks (always stick to 4 spaces per indentation level!).
- Capitalization typos: Writing `Print("Hello")` instead of lowercase `print("Hello")`.

## 🛡️ Safety / Important Notes

Type `import this` in the Python REPL to read **The Zen of Python**—a collection of 19 guiding principles for writing clean Pythonic software.

## 🌍 Real-World Usage

Web development (Django, Flask, FastAPI), Artificial Intelligence & Machine Learning (PyTorch, TensorFlow), Data Analysis (Pandas, NumPy), DevOps automation scripts, and Web Scraping (BeautifulSoup).

## 🧪 Try It Yourself

1. Create a Python script declaring `student_name` and `marks = 85`.
2. Print a message using an f-string: `f"{student_name} scored {marks}%"`.

## 🎯 Mini Challenge

Write a Python script that calculates the area of a rectangle with `length = 12` and `width = 5`, and prints the result cleanly formatted.

## 🔗 Related Topics

- [Set Up Python](01-setup-python.md)
- [Variables and Data Types](03-variables-and-data-types.md)

## 🧭 Navigation

[← Python Home](00-README.md) | [← Previous: Set Up Python](01-setup-python.md) | [Next: Variables and Data Types →](03-variables-and-data-types.md)
