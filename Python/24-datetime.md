---
layout: default
title: "Datetime"
---

# Working with Dates and Time in Python (`datetime` Module)

> 🟡 Intermediate

## 📖 Definition

The **`datetime`** standard library module provides classes (`date`, `time`, `datetime`, `timedelta`, `timezone`) for parsing, formatting, calculating, and manipulating calendar dates, clock times, durations, and time zone timestamps.

## 🇮🇳 Hindi

Date aur Time tracking ke liye `datetime` module ka use hota hai. Current date-time ke liye `datetime.now()`, date differences calculate karne ke liye `timedelta`, date ko string mein format karne ke liye `.strftime()`, aur string ko date mein parse karne ke liye `.strptime()` ka use hota hai.

## 🚩 Marathi

Date aani time sathi `datetime` module vaparatat. Formatting sathi `.strftime()` aani String parsing sathi `.strptime()` cha wapar kela jato.

## 📝 1. Core `datetime` Classes

- **`date(year, month, day)`:** Models calendar date (Year, Month, Day).
- **`time(hour, minute, second)`:** Models clock time.
- **`datetime(year, month, day, hour, minute)`:** Combines date and time.
- **`timedelta(days, seconds, ...)`:** Represents duration difference between two dates or times.

```python
from datetime import datetime, date, timedelta

now = datetime.now() # Current date and time
today = date.today() # Current date only

# Adding 14 days duration using timedelta
due_date = today + timedelta(days=14)
```

## 📝 2. Formatting (`strftime`) & Parsing (`strptime`)

- **`strftime(format)`:** Converts datetime object -> Formatted String (**"String Format Time"**).
- **`strptime(string, format)`:** Parses String -> datetime object (**"String Parse Time"**).

### Common Directive Codes:
- `%Y`: 4-digit year (e.g. `2026`)
- `%m`: 2-digit month (`01`-`12`)
- `%d`: 2-digit day (`01`-`31`)
- `%H`: 24-hour hour (`00`-`23`)
- `%M`: Minute (`00`-`59`)
- `%S`: Second (`00`-`59`)
- `%A`: Full weekday name (`Sunday`)

```python
now = datetime.now()
formatted_str = now.strftime("%Y-%m-%d %H:%M:%S")

# Parsing
date_obj = datetime.strptime("2026-10-04", "%Y-%m-%d")
```

## 💡 Complete Example: Subscription Due Date & Duration Tracker

```python
from datetime import datetime, date, timedelta

print("=== SUBSCRIPTION RENEWAL ENGINE ===")

# 1. Current Date
today = date.today()
subscription_start = date(2026, 10, 1)

# 2. Calculating Expiration Date (30 Days Validity)
subscription_validity = timedelta(days=30)
expiration_date = subscription_start + subscription_validity

# 3. Calculating Remaining Days
days_remaining = (expiration_date - today).days

# 4. Custom Formatting with strftime
formatter = "%d-%b-%Y (%A)"

print(f"Start Date     : {subscription_start.strftime(formatter)}")
print(f"Today's Date   : {today.strftime(formatter)}")
print(f"Expiration Date: {expiration_date.strftime(formatter)}")
print(f"Status         : {days_remaining} Days Remaining")

if days_remaining <= 5:
    print("WARNING        : Subscription renewal due soon!")
```

## 👀 Output

```text
=== SUBSCRIPTION RENEWAL ENGINE ===
Start Date     : 01-Oct-2026 (Thursday)
Today's Date   : 04-Oct-2026 (Sunday)
Expiration Date: 31-Oct-2026 (Saturday)
Status         : 27 Days Remaining
```

## ⚠️ Common Mistakes

- Confusing `strftime()` (format object to string) with `strptime()` (parse string to object).
- Adding or subtracting integers directly from dates (`today + 5` causes a `TypeError`; use `today + timedelta(days=5)`!).

## 🛡️ Safety / Important Notes

For global multi-region applications, work with UTC timestamps using `datetime.now(timezone.utc)` or explicit timezone libraries (`zoneinfo` in Python 3.9+) to avoid daylight saving time bugs.

## 🌍 Real-World Usage

Subscription renewal calculations, audit log timestamps, scheduling tasks, SLA expiration timers, and calendar applications.

## 🧪 Try It Yourself

1. Print today's date formatted as `"Day Month Year"` (e.g. `"04 October 2026"`).
2. Calculate the date 100 days from today using `timedelta(days=100)`.

## 🎯 Mini Challenge

Write a program that takes a birthdate string `"2000-05-15"`, parses it with `.strptime()`, and calculates the total age in years relative to today.

## 🔗 Related Topics

- [Variables and Data Types](03-variables-and-data-types.md)
- [Testing and Debugging](28-testing-and-debugging.md)

## 🧭 Navigation

[← Python Home](00-README.md) | [← Previous: Regular Expressions](23-regular-expressions.md) | [Next: JSON and Data Serialization →](25-json-and-data-serialization.md)
