---
layout: default
title: "JSON and Data Serialization"
---

# Working with JSON in Python (`json` Module)

> 🟡 Intermediate

## 📖 Definition

**JSON (JavaScript Object Notation)** is a lightweight, human-readable, text-based data format used to exchange structured data between client web applications, mobile apps, and backend servers. Python provides the built-in **`json`** module for serializing and deserializing data.

## 🇮🇳 Hindi

Server aur client ke beech data share karne ke liye **JSON** format ka use hota hai. Python Dictionary ko JSON string mein convert karne ke liye `json.dumps()` (**Serialization**) aur JSON string ko Python Dictionary mein convert karne ke liye `json.loads()` (**Deserialization**) ka use hota hai.

## 🚩 Marathi

JSON format server sobat data share karnyasathi vaparatat. Python Dictionary la JSON string madhye convert karnyasathi `json.dumps()` aani parat dict madhye sathi `json.loads()` vaparatat.

## 📝 1. Python Datatypes vs JSON Equivalent Mapping

| Python Datatype | Equivalent JSON Type |
|---|---|
| `dict` | Object `{}` |
| `list`, `tuple` | Array `[]` |
| `str` | String `""` |
| `int`, `float` | Number |
| `True` / `False` | `true` / `false` |
| `None` | `null` |

## 📝 2. Serialization & Deserialization Methods

- **`json.dumps(obj)`:** Converts Python dict/object -> JSON **String** in memory.
- **`json.dump(obj, file)`:** Serializes Python dict -> Writes directly into a **File**.
- **`json.loads(json_str)`:** Parses JSON **String** -> Python dict in memory.
- **`json.load(file)`:** Reads JSON **File** -> Parses directly into Python dict.

```python
import json

data_dict = {"name": "Aarav", "age": 25, "active": True}

# Serialization (Python Dict -> JSON String)
json_string = json.dumps(data_dict, indent=4)

# Deserialization (JSON String -> Python Dict)
parsed_dict = json.loads(json_string)
```

## 💡 Complete Example: REST API Payload Serialization & File Storage

```python
import json
import os

# Python Nested Dictionary Payload
user_profile = {
    "user_id": 501,
    "full_name": "Rahul Verma",
    "email": "rahul@example.com",
    "is_premium": True,
    "roles": ["DEVELOPER", "ADMIN"],
    "address": {
        "city": "Mumbai",
        "zipcode": "400001"
    }
}

file_path = "user_payload.json"

print("=== JSON SERIALIZATION ENGINE ===")

# 1. Serializing to File with pretty formatting (indent=4)
with open(file_path, "w", encoding="utf-8") as file:
    json.dump(user_profile, file, indent=4)
    
print(f"Successfully serialized data to '{file_path}'.")

# 2. Deserializing back from File
print("\n--- DESERIALIZING JSON FROM FILE ---")

with open(file_path, "r", encoding="utf-8") as file:
    loaded_data = json.load(file)

print(f"Loaded Name   : {loaded_data['full_name']}")
print(f"Is Premium?   : {loaded_data['is_premium']}")
print(f"City          : {loaded_data['address']['city']}")
print(f"Primary Role  : {loaded_data['roles'][0]}")

# Cleanup demo file
if os.path.exists(file_path):
    os.remove(file_path)
```

## 👀 Output

```text
=== JSON SERIALIZATION ENGINE ===
Successfully serialized data to 'user_payload.json'.

--- DESERIALIZING JSON FROM FILE ---
Loaded Name   : Rahul Verma
Is Premium?   : True
City          : Mumbai
Primary Role  : DEVELOPER
```

## ⚠️ Common Mistakes

- Confusing `json.dumps()` (string serialization) with `json.dump()` (file serialization).
- Attempting to serialize non-standard custom Python objects (like custom class instances or `datetime` objects) without providing a custom `default` serializer function.

## 🛡️ Safety / Important Notes

Always pass `indent=4` to `json.dumps()` or `json.dump()` when creating JSON configuration files to make them human-readable.

## 🌍 Real-World Usage

REST API endpoints (FastAPI/Django), configuration files (`config.json`), web scraping output storage, and microservice messaging payloads.

## 🧪 Try It Yourself

1. Create a dictionary with your name, age, and list of favorite programming languages.
2. Convert it into a formatted JSON string using `json.dumps(data, indent=2)`.

## 🎯 Mini Challenge

Write a program that reads a JSON string `{"items": [10, 20, 30], "status": "ok"}`, calculates the sum of items, and outputs `{"sum": 60, "status": "ok"}` as a new JSON string.

## 🔗 Related Topics

- [File Handling](17-file-handling.html)
- [Working with CSV](26-working-with-csv.html)

## 🧭 Navigation

[← Python Home](./) | [← Previous: Datetime](24-datetime.html) | [Next: Working with CSV →](26-working-with-csv.html)

