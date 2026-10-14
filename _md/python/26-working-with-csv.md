---
layout: default
title: "Working with CSV"
---

# Working with CSV Files in Python (`csv` Module)

> 🟡 Intermediate

## 📖 Definition

**CSV (Comma-Separated Values)** is a universal, tabular text format used to store table data where each row represents a record and columns are separated by commas or delimiters. Python's built-in **`csv`** module provides `csv.reader`, `csv.writer`, `csv.DictReader`, and `csv.DictWriter` for processing tabular spreadsheet datasets.

## 🇮🇳 Hindi

Tabular spreadsheet data (Excel files) process karne ke liye **`csv` module** ka use hota hai. Dictionaries ke saath kaam karne ke liye `csv.DictReader` aur `csv.DictWriter` sabse best aur clean tools hain. File open karte waqt `newline=""` compulsory set karein.

## 🚩 Marathi

Tabular data (Excel CSV) read aani write karnyasathi `csv` module vaparatat. `DictReader` aani `DictWriter` sope padtat.

## 📝 1. `csv.reader` vs `csv.DictReader`

- **`csv.reader`:** Reads each CSV row as a **list of strings** (`['101', 'Aarav', '95']`).
- **`csv.DictReader` (Best Practice):** Reads each CSV row as a **dictionary** mapping header column names to values (`{"id": "101", "name": "Aarav", "marks": "95"}`).

```python
import csv

# Reading with DictReader
with open("students.csv", "r", encoding="utf-8") as file:
    reader = csv.DictReader(file)
    for row in reader:
        print(row["name"], row["marks"])
```

## 📝 2. Writing CSV Files (`newline=""`)

> ⚠️ **CRITICAL RULE:** Always specify **`newline=""`** when opening a CSV file for writing!
> Without `newline=""`, Windows operating systems will insert blank extra newline rows between every single record line!

```python
import csv

fieldnames = ["id", "name", "salary"]
data = [{"id": 1, "name": "Rahul", "salary": 85000}]

with open("output.csv", "w", newline="", encoding="utf-8") as file:
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader() # Writes "id,name,salary" header row
    writer.writerows(data)
```

## 💡 Complete Example: Student CSV Report Generator

```python
import csv
import os

csv_file = "student_report.csv"

# Sample Student Dataset
students = [
    {"student_id": "STU-101", "name": "Aarav Mehta", "score": 85, "status": "PASS"},
    {"student_id": "STU-102", "name": "Sneha Kapoor", "score": 92, "status": "PASS"},
    {"student_id": "STU-103", "name": "Rohan Sharma", "score": 42, "status": "FAIL"}
]

headers = ["student_id", "name", "score", "status"]

print("=== CSV REPORT GENERATOR ===")

# 1. Writing Data using DictWriter
with open(csv_file, "w", newline="", encoding="utf-8") as file:
    writer = csv.DictWriter(file, fieldnames=headers)
    writer.writeheader()
    writer.writerows(students)

print(f"Successfully generated CSV file '{csv_file}'.")

# 2. Reading & Parsing Data using DictReader
print("\n--- PARSING CSV REPORT ---")

with open(csv_file, "r", encoding="utf-8") as file:
    reader = csv.DictReader(file)
    for row in reader:
        score_val = int(row["score"])
        print(f"ID: {row['student_id']} | Name: {row['name']:<15} | Score: {score_val} | Status: {row['status']}")

# Cleanup demo file
if os.path.exists(csv_file):
    os.remove(csv_file)
```

## 👀 Output

```text
=== CSV REPORT GENERATOR ===
Successfully generated CSV file 'student_report.csv'.

--- PARSING CSV REPORT ---
ID: STU-101 | Name: Aarav Mehta     | Score: 85 | Status: PASS
ID: STU-102 | Name: Sneha Kapoor    | Score: 92 | Status: PASS
ID: STU-103 | Name: Rohan Sharma    | Score: 42 | Status: FAIL
```

## ⚠️ Common Mistakes

- Omitting `newline=""` when writing CSV files on Windows, creating extra empty blank lines.
- Treating numeric CSV column fields as integers automatically (`DictReader` returns all column values as **strings**; you must explicitly parse them using `int()` or `float()`).

## 🛡️ Safety / Important Notes

For advanced data analysis or multi-gigabyte CSV datasets with complex transformations, use the **Pandas** library (`import pandas as pd`).

## 🌍 Real-World Usage

Exporting database tables to Excel spreadsheets, downloading invoice reports, reading user batch import files, and data processing.

## 🧪 Try It Yourself

1. Create a script that writes 3 contacts (`name`, `phone`) to a `contacts.csv` file using `DictWriter`.
2. Read `contacts.csv` using `DictReader` and print each contact.

## 🎯 Mini Challenge

Write a program that reads a CSV file containing employee salaries, calculates the average salary across all records, and prints the result.

## 🔗 Related Topics

- [File Handling](17-file-handling.html)
- [JSON Data Serialization](25-json-and-data-serialization.html)

## 🧭 Navigation

[← Python Home](./) | [← Previous: JSON Data Serialization](25-json-and-data-serialization.html) | [Next: Type Hints and Dataclasses →](27-type-hints-and-dataclasses.html)

