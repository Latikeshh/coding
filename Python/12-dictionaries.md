---
layout: default
title: "Dictionaries"
---

# Dictionaries in Python

> 🟢 Beginner

## 📖 Definition

A **Dictionary** in Python is a **mutable, key-value mapping collection** enclosed in curly braces `{}` with the syntax `{"key": "value"}`. Dictionary keys must be unique and immutable/hashable (strings, numbers, tuples), while values can be any data type.

## 🇮🇳 Hindi

Dictionary key-value pairs ka structure hota hai (`{"name": "Aarav", "age": 25}`). Index position ke bajaye data Key ke dwara search kiya jata hai (`dict["key"]`). Key missing rehne par error se bachne ke liye safe method `.get("key", default)` ka use karein.

## 🚩 Marathi

Dictionary madhye data **Key-Value** स्वरूपात (pair) saathavla jato. Key missing aslyas error yenaypasun vachnyasathi `.get()` method vapara.

## 🧠 Simple Explanation

Think of a Python dictionary as a real physical language dictionary. When you want to find the meaning of `"algorithm"`, you don't read page by page from the beginning—you directly look up the key word `"algorithm"` to instantly fetch its associated definition value.

## 📝 1. Accessing & Modifying Dictionary Entries

```python
user = {
    "id": 101,
    "name": "Rahul Verma",
    "role": "Developer",
    "is_active": True
}

# 1. Direct Bracket Access (Raises KeyError if key doesn't exist!)
print(user["name"]) # "Rahul Verma"

# 2. Safe .get() Access (Returns default fallback if key is missing)
location = user.get("location", "Not Specified") # "Not Specified"

# 3. Adding or Updating Entries
user["location"] = "Mumbai" # Adds new key-value pair
user["role"] = "Lead Developer" # Updates existing key

# 4. Deleting Entries
removed_role = user.pop("role") # Removes and returns value
```

## 📝 2. Iterating Dictionaries (`.keys()`, `.values()`, `.items()`)

```python
scores = {"Aarav": 92, "Priya": 88, "Rohan": 95}

# Iterating Keys
for name in scores.keys():
    print(name)

# Iterating Values
for score in scores.values():
    print(score)

# Iterating Key-Value Pairs simultaneously (Best Practice)
for name, score in scores.items():
    print(f"{name} -> {score}")
```

## 💡 Complete Example: Student Grade Management Engine

```python
# Student Record System
student_database = {
    "STU-101": {"name": "Aarav Mehta", "marks": 85, "city": "Mumbai"},
    "STU-102": {"name": "Sneha Kapoor", "marks": 92, "city": "Delhi"},
    "STU-103": {"name": "Rohan Sharma", "marks": 48, "city": "Bengaluru"}
}

print("=== STUDENT DATABASE MANAGER ===")

# Adding a new student record
new_student_id = "STU-104"
student_database[new_student_id] = {
    "name": "Ananya Roy",
    "marks": 78,
    "city": "Kolkata"
}

# Searching student record safely using .get()
target_id = "STU-102"
student = student_database.get(target_id)

if student:
    print(f"\nRecord Found for ID '{target_id}':")
    print(f" - Name  : {student['name']}")
    print(f" - Marks : {student['marks']}")
    print(f" - City  : {student['city']}")

# Iterating all students and updating pass status
print("\n--- CLASS ACADEMIC SUMMARY ---")
for student_id, details in student_database.items():
    status = "PASSED" if details["marks"] >= 50 else "FAILED"
    print(f"ID: {student_id} | Name: {details['name']:<15} | Marks: {details['marks']} | Status: {status}")
```

## 👀 Output

```text
=== STUDENT DATABASE MANAGER ===

Record Found for ID 'STU-102':
 - Name  : Sneha Kapoor
 - Marks : 92
 - City  : Delhi

--- CLASS ACADEMIC SUMMARY ---
ID: STU-101 | Name: Aarav Mehta     | Marks: 85 | Status: PASSED
ID: STU-102 | Name: Sneha Kapoor    | Marks: 92 | Status: PASSED
ID: STU-103 | Name: Rohan Sharma    | Marks: 48 | Status: FAILED
ID: STU-104 | Name: Ananya Roy      | Marks: 78 | Status: PASSED
```

## ⚠️ Common Mistakes

- **`KeyError`:** Accessing a non-existent key directly via `dict["missing_key"]` (use `dict.get("missing_key", default)` instead!).
- Trying to use a mutable object (like a `list`) as a dictionary key (`{"tags": ["a", "b"]}` as key causes `TypeError: unhashable type: 'list'`).

## 🛡️ Safety / Important Notes

In Python 3.7+, dictionaries are guaranteed to **preserve insertion order**. Iterating through dictionary keys or items will yield elements in the exact order they were inserted.

## 🌍 Real-World Usage

JSON REST API data payloads, database user record objects, configuration file settings, caches, and fast lookup tables ($O(1)$ key lookups).

## 🧪 Try It Yourself

1. Create a dictionary `inventory = {"apples": 10, "bananas": 5}`. Add `"oranges": 8` and update `"apples": 12`.
2. Retrieve `"mangoes"` using `.get("mangoes", 0)` and print the result.

## 🎯 Mini Challenge

Write a program that takes a list of words `["apple", "banana", "apple", "cherry", "banana", "apple"]` and builds a dictionary word-frequency count table.

## 🔗 Related Topics

- [Sets](11-sets.md)
- [List Comprehensions](14-list-comprehensions.md)

## 🧭 Navigation

[← Python Home](00-README.md) | [← Previous: Sets](11-sets.md) | [Next: Strings →](13-strings.md)
