---
layout: default
title: "File Handling"
---

# File Handling in Python

> 🟡 Intermediate

## 📖 Definition

**File Handling** allows Python programs to create, read, update, write, and append data files on disk storage. Python provides the **`open()`** built-in function and the **`with` context manager** (`with open(...) as file:`) which guarantees that files are automatically closed when operations complete, even if errors occur.

## 🇮🇳 Hindi

Disk par stored files ko read aur write karne ke liye File Handling ka use hota hai. Hamesha **`with open(...) as file:`** Context Manager ka use karein—isse file operations complete hone par file automatically close ho jaati hai, jisse memory/resource leaks nahi hote.

## 🚩 Marathi

File madhun data vachnyasathi aani lihinyasathi `open()` function vaparatat. Automatic file close honyasathi `with open(...) as file:` cha wapar kara.

## 📝 1. File Access Modes

| Mode | Meaning | What It Does |
|---|---|---|
| `'r'` | Read (Default) | Opens file for reading. Raises `FileNotFoundError` if file is missing. |
| `'w'` | Write | Opens file for writing. **Truncates (overwrites)** file if it exists, creates if missing! |
| `'a'` | Append | Opens file for appending. Preserves existing content and appends at the end. |
| `'r+'` | Read/Write | Opens file for both reading and writing. |
| `'b'` | Binary | Appended for binary files (`'rb'`, `'wb'`) like images, PDFs, or audio files. |

## 📝 2. File Reading Methods

- `file.read()`: Reads entire file content as a single string.
- `file.readline()`: Reads a single line from the file.
- `file.readlines()`: Reads all lines into a list of strings (`['line1\n', 'line2\n']`).
- **Iterating File Directly (Best Memory Practice):** Streams line by line without loading the entire file into memory!

```python
# Memory-Efficient Line-by-Line Iteration
with open("large_file.txt", "r", encoding="utf-8") as file:
    for line in file:
        print(line.strip()) # Process each line
```

## 💡 Complete Example: Writing & Reading Application Logs

```python
import os

log_file_path = "app_activity.log"

print("=== FILE HANDLING DEMO ===")

# 1. Writing / Appending to Log File using Context Manager
log_entries = [
    "USER_LOGIN: User 'Aarav' logged in successfully.",
    "DB_QUERY: Fetched 25 records from 'users' table.",
    "USER_LOGOUT: User 'Aarav' logged out."
]

# Append entries to file
with open(log_file_path, "a", encoding="utf-8") as file:
    for entry in log_entries:
        file.write(entry + "\n")
        
print(f"Appended {len(log_entries)} log entries to '{log_file_path}'.")

# 2. Reading and Parsing Logs Line-by-Line
print("\n--- READING LOG FILE CONTENT ---")

if os.path.exists(log_file_path):
    with open(log_file_path, "r", encoding="utf-8") as file:
        for line_num, line in enumerate(file, start=1):
            print(f"Line #{line_num}: {line.strip()}")
            
    # Cleanup log file after demo
    os.remove(log_file_path)
    print(f"\nCleaned up demo file '{log_file_path}'.")
```

## 👀 Output

```text
=== FILE HANDLING DEMO ===
Appended 3 log entries to 'app_activity.log'.

--- READING LOG FILE CONTENT ---
Line #1: USER_LOGIN: User 'Aarav' logged in successfully.
Line #2: DB_QUERY: Fetched 25 records from 'users' table.
Line #3: USER_LOGOUT: User 'Aarav' logged out.

Cleaned up demo file 'app_activity.log'.
```

## ⚠️ Common Mistakes

- Opening files with `f = open('file.txt')` without using `with open()`, which leaves unclosed file handles open and causes resource leaks!
- Opening an existing file in `'w'` (write) mode when you intended to append (`'a'`), causing all previous content to be **permanently wiped out**!
- Forgetting to specify `encoding="utf-8"`, causing platform-dependent encoding crashes when reading non-ASCII characters on Windows.

## 🛡️ Safety / Important Notes

Always use `encoding="utf-8"` explicitly when calling `open()` to guarantee cross-platform text rendering consistency across Windows, macOS, and Linux.

## 🌍 Real-World Usage

Writing application log files, saving configuration settings, processing CSV/JSON data files, generating text reports, and reading database dumps.

## 🧪 Try It Yourself

1. Create a script that creates a file `notes.txt` and writes 3 lines into it.
2. Read `notes.txt` using `with open()` and print the total number of lines present.

## 🎯 Mini Challenge

Write a program that reads a text file, counts how many times the word `"python"` appears in the file (case-insensitive), and prints the count.

## 🔗 Related Topics

- [Working with CSV](26-working-with-csv.html)
- [JSON Data Serialization](25-json-and-data-serialization.html)

## 🧭 Navigation

[← Python Home](./) | [← Previous: Modules and Packages](16-modules-and-packages.html) | [Next: Exception Handling →](18-exception-handling.html)

