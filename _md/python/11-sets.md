---
layout: default
title: "Sets"
---

# Sets in Python

> 🟢 Beginner

## 📖 Definition

A **Set** in Python is an **unordered, mutable collection of unique, hashable elements** enclosed in curly braces `{}`. Sets automatically discard duplicate values and support high-performance $O(1)$ lookup operations and mathematical set theory operations (Union, Intersection, Difference).

## 🇮🇳 Hindi

Set unique values ka an unordered collection hota hai. Set mein duplicates automatic remove ho jaate hain (`{1, 2, 2, 3}` -> `{1, 2, 3}`). Set ka primary use fast membership testing (`item in set`) aur duplicates remove karne ke liye hota hai.

## 🚩 Marathi

Set mhanje **Unique** items cha unordered collection. Set madhye duplicates nahi astat. Empty Set tayar karnyasathi `set()` vaparatat (`{}` mhanje empty Dictionary aste!).

## 📝 1. Set Creation & The Empty Set Trap

> ⚠️ **CRITICAL SYNTAX TRAP:** Writing `{}` creates an **empty Dictionary**, NOT a Set! To create an empty Set, you MUST call `set()`!

```python
# Creates an empty Dictionary (NOT a set!)
empty_dict = {}     # type is dict

# Creates an empty Set
empty_set = set()   # type is set

# Direct Set Creation (Duplicates automatically discarded)
unique_ids = {101, 102, 101, 103, 102}
print(unique_ids)   # {101, 102, 103}
```

## 📝 2. Mathematical Set Operations

Python provides operator shortcuts and methods for mathematical set operations:

```python
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

# Union (Combines all items from both sets)
print(a | b)              # {1, 2, 3, 4, 5, 6}
print(a.union(b))

# Intersection (Items present in BOTH sets)
print(a & b)              # {3, 4}
print(a.intersection(b))

# Difference (Items in 'a' but NOT in 'b')
print(a - b)              # {1, 2}
print(a.difference(b))

# Symmetric Difference (Items in either set, but NOT in both)
print(a ^ b)              # {1, 2, 5, 6}
```

## 📝 3. Adding & Removing Set Items

- `.add(item)`: Adds a single item.
- `.update(iterable)`: Adds multiple items from a list or set.
- `.remove(item)`: Removes item; **raises `KeyError` if item is missing!**
- `.discard(item)`: Removes item safely; **does NOT raise error if missing!**

## 💡 Complete Example: Customer Tag Analytics & Deduplication

```python
# User Skill Set Analysis System

skills_applicant_a = {"Python", "SQL", "Git", "Docker"}
skills_applicant_b = {"Python", "Java", "Linux", "Git"}

print("=== APPLICANT SKILL COMPARISON ===")
print("Applicant A Skills :", skills_applicant_a)
print("Applicant B Skills :", skills_applicant_b)

# 1. Common Skills (Intersection)
common_skills = skills_applicant_a & skills_applicant_b
print("\nShared Skills (A & B)   :", common_skills)

# 2. Unique Skills in A (Difference)
unique_to_a = skills_applicant_a - skills_applicant_b
print("Skills Unique to A      :", unique_to_a)

# 3. All Combined Skills (Union)
all_skills = skills_applicant_a | skills_applicant_b
print("Total Combined Skill Set:", all_skills)

# 4. Deduplicating a List using set()
raw_tags = ["python", "sql", "html", "python", "css", "sql"]
clean_tags = list(set(raw_tags))
print("\nDeduplicated Tag List   :", clean_tags)
```

## 👀 Output

```text
=== APPLICANT SKILL COMPARISON ===
Applicant A Skills : {'Python', 'Git', 'SQL', 'Docker'}
Applicant B Skills : {'Python', 'Git', 'Java', 'Linux'}

Shared Skills (A & B)   : {'Python', 'Git'}
Skills Unique to A      : {'Docker', 'SQL'}
Total Combined Skill Set: {'Python', 'Git', 'SQL', 'Docker', 'Java', 'Linux'}

Deduplicated Tag List   : ['python', 'sql', 'html', 'css']
```

## ⚠️ Common Mistakes

- Using `{}` to initialize an empty set (creates a `dict` instead).
- Trying to add a mutable object (like a `list`) into a set (`set.add([1, 2])` causes `TypeError: unhashable type: 'list'`).
- Using `.remove()` on a missing item instead of safe `.discard()`.

## 🛡️ Safety / Important Notes

If you need an **immutable set** that cannot be modified and can be used as a dictionary key or inside another set, use **`frozenset([1, 2, 3])`**.

## 🌍 Real-World Usage

Filtering unique visitor IP addresses, calculating common social media friends/followers, fast membership checks (`item in set`), and tag deduplication.

## 🧪 Try It Yourself

1. Deduplicate a list of numbers `[10, 20, 10, 30, 20, 40]` using `set()`.
2. Find the common elements between `{1, 2, 3}` and `{2, 3, 4}` using `&`.

## 🎯 Mini Challenge

Write a program that takes two customer interest sets and finds interests present in Customer A but missing from Customer B using the `-` difference operator.

## 🔗 Related Topics

- [Lists](09-lists.html)
- [Dictionaries](12-dictionaries.html)

## 🧭 Navigation

[← Python Home](./) | [← Previous: Tuples](10-tuples.html) | [Next: Dictionaries →](12-dictionaries.html)

