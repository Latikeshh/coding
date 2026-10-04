---
layout: default
title: "26 working with csv"
---

# Working with CSV

## Definition

csv reader/writer/DictReader/DictWriter, headers, newline handling, student examples; use module not split.

## Hindi Explanation

csv quoted commas sahi sambhalta hai; newline="" ke saath kholen.

## Marathi Explanation

csv quoted commas yogya hatalto; newline="" ne ughada.

## Hinglish Explanation

csv reader/writer/DictReader/DictWriter, headers, newline handling, student examples; use module not split.. Is concept ko chhote code me use karke result dekhein.

## Why Use It?

csv reader/writer/DictReader/DictWriter, headers, newline handling, student examples; use module not split.. Isse practical programs banana aur unka behavior samajhna aasaan hota hai.

## Simple Explanation

csv quoted commas sahi sambhalta hai; newline="" ke saath kholen.

## Syntax

```python
import csv
with open("students.csv",newline="",encoding="utf-8") as f:
    for row in csv.DictReader(f): print(row["name"],row["score"])
```

## Example

```python
import csv
with open("students.csv",newline="",encoding="utf-8") as f:
    for row in csv.DictReader(f): print(row["name"],row["score"])
```

## Code Breakdown

csv reader/writer/DictReader/DictWriter, headers, newline handling, student examples; use module not split.. Example ko line by line padhein, input aur output identify karein, phir ek value badal kar dobara run karein.

## Output

```text
Prints student columns
```

## Another Practical Example

Read student marks from CSV, average them, and write a report.

## Common Mistakes

csv reader/writer/DictReader/DictWriter, headers, newline handling, student examples; use module not split.. Inputs aur boundary cases check karein.

## Important Notes

csv reader/writer/DictReader/DictWriter, headers, newline handling, student examples; use module not split.

## Real-World Usage

Yeh concept scripts, automation, tools, backend aur data applications me milta hai.

## Try It Yourself

Use DictReader and DictWriter with headers and newline="".

## Mini Challenge

Handle missing columns and malformed numeric cells.

## Related Topics

[Python Curriculum Home](00-README.md) aur pichhle/agale lesson ko dekhein.

## Navigation

[Previous: 25 JSON and Data Serialization](25-json-and-data-serialization.md)  
[Home](00-README.md)  
[Next: 27 Type Hints and Dataclasses](27-type-hints-and-dataclasses.md)

