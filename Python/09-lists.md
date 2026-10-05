---
layout: default
title: "Lists"
---

# Lists in Python

> 🟢 Beginner

## 📖 Definition

A **List** in Python is an ordered, **mutable** (modifiable) collection of elements enclosed in square brackets `[]`. Lists can store elements of mixed data types (integers, strings, floats, nested lists) and allow duplicate values.

## 🇮🇳 Hindi

List Python ki sabse popular mutable ordered collection hai. List mein elements square brackets `[]` ke andar hote hain. Indexing `0` se start hoti hai, aur last element ke liye negative indexing `-1` ka use kiya jata hai.

## 🚩 Marathi

List mutable ahe (tyat badal karta yeto). Indexing `0` pasun suru hote aani shevatcha item ghenyasathi `-1` Indexing vaparatat.

## 📝 1. Indexing & Slicing (`list[start:stop:step]`)

- **Zero-Based Indexing:** First item `list[0]`, second item `list[1]`.
- **Negative Indexing:** Last item `list[-1]`, second to last `list[-2]`.
- **Slicing (`list[start:stop:step]`):** Extracts a sub-list from `start` up to (but **excluding**) `stop`.

```python
colors = ["Red", "Green", "Blue", "Yellow", "Orange"]

print(colors[0])       # "Red"
print(colors[-1])      # "Orange"
print(colors[1:4])     # ["Green", "Blue", "Yellow"] (index 1, 2, 3)
print(colors[::-1])    # Reverses list: ["Orange", "Yellow", "Blue", "Green", "Red"]
```

## 📝 2. Essential List Methods

| Method | What It Does | Mutates List? |
|---|---|---|
| `.append(item)` | Adds single item to the **end** | ✅ Yes |
| `.extend(iterable)`| Appends all elements from another list | ✅ Yes |
| `.insert(index, item)`| Inserts item at specific index | ✅ Yes |
| `.pop(index)` | Removes & returns item at index (default last) | ✅ Yes |
| `.remove(item)` | Removes first occurrence of matching item | ✅ Yes |
| `.sort(reverse=True)`| Sorts elements in-place | ✅ Yes |
| `.reverse()` | Reverses elements in-place | ✅ Yes |
| `.copy()` | Creates a shallow copy of the list | ❌ No |

## 🧠 3. Aliasing (`b = a`) vs Shallow Copying (`b = a.copy()`)

> ⚠️ **CRITICAL PITFALL:** Writing `list_b = list_a` does **NOT** copy the list! It creates two variable names pointing to the **same underlying list in memory**. Modifying `list_b` WILL modify `list_a`!

```python
a = [1, 2, 3]
b = a          # Alias (Same reference in memory!)
c = a.copy()   # Shallow Copy (Independent new list!)

b.append(99)
print("a:", a) # [1, 2, 3, 99] (Modified!)
print("c:", c) # [1, 2, 3]     (Unchanged!)
```

## 💡 Complete Example: Student Score Analytics

```python
# Student Test Score Analytics

scores = [78, 92, 45, 88, 63, 95, 52]

print("=== STUDENT SCORE ANALYTICS ===")
print("Original Scores :", scores)

# 1. Modifying Elements
scores.append(82)           # Adding new score to end
scores.insert(0, 90)         # Inserting score at index 0
scores.remove(45)           # Removing failing score 45

# 2. Statistical Analysis
total_students = len(scores)
highest_score = max(scores)
lowest_score = min(scores)
average_score = sum(scores) / total_students

# 3. Sorting Scores (Non-destructive copy using sorted())
sorted_scores = sorted(scores, reverse=True)

print(f"Updated Scores  : {scores}")
print(f"Total Students  : {total_students}")
print(f"Highest Score   : {highest_score}")
print(f"Lowest Score    : {lowest_score}")
print(f"Average Score   : {average_score:.2f}")
print(f"Sorted Top-Down : {sorted_scores}")
```

## 👀 Output

```text
=== STUDENT SCORE ANALYTICS ===
Original Scores : [78, 92, 45, 88, 63, 95, 52]
Updated Scores  : [90, 78, 92, 88, 63, 95, 52, 82]
Total Students  : 8
Highest Score   : 95
Lowest Score    : 52
Average Score   : 78.75
Sorted Top-Down : [95, 92, 90, 88, 82, 78, 63, 52]
```

## ⚠️ Common Mistakes

- **`IndexError: list index out of range`:** Attempting to access an index that doesn't exist (e.g., `list[len(list)]`).
- Calling `.sort()` or `.append()` and expecting it to return the new list (`result = my_list.sort()` sets `result` to `None` because `.sort()` modifies the list in-place and returns `None`!).

## 🛡️ Safety / Important Notes

If a list contains nested mutable objects (e.g. lists inside lists `[[1, 2], [3, 4]]`), use `copy.deepcopy()` to create a fully independent recursive copy.

## 🌍 Real-World Usage

Shopping cart items, search result sets, message queues, time-series data, and batch record processing.

## 🧪 Try It Yourself

1. Create a list of 5 product prices `[120, 450, 80, 990, 230]`.
2. Add a new price to the end using `.append()` and remove the lowest price using `.remove(min(prices))`.

## 🎯 Mini Challenge

Write a program that takes a list with duplicate numbers `[10, 20, 10, 30, 20, 40]` and creates a new list with duplicates removed while preserving the original element order.

## 🔗 Related Topics

- [Tuples](10-tuples.html)
- [List Comprehensions](14-list-comprehensions.html)

## 🧭 Navigation

[← Python Home](./) | [← Previous: Functions](08-functions.html) | [Next: Tuples →](10-tuples.html)

