---
layout: default
title: "24 datetime"
---

# Date and Time

## Definition

datetime/date/time/timedelta, format/parse, timezone awareness, naive vs aware, zoneinfo introduction.

## Hindi Explanation

Naive datetime me timezone nahi hota; aware datetime me hota hai.

## Marathi Explanation

Naive datetime madhye timezone naste; aware madhye aste.

## Hinglish Explanation

datetime/date/time/timedelta, format/parse, timezone awareness, naive vs aware, zoneinfo introduction.. Is concept ko chhote code me use karke result dekhein.

## Why Use It?

datetime/date/time/timedelta, format/parse, timezone awareness, naive vs aware, zoneinfo introduction.. Isse practical programs banana aur unka behavior samajhna aasaan hota hai.

## Simple Explanation

Naive datetime me timezone nahi hota; aware datetime me hota hai.

## Syntax

```python
from datetime import datetime,timezone,timedelta
now=datetime.now(timezone.utc); print((now+timedelta(days=1)).isoformat())
```

## Example

```python
from datetime import datetime,timezone,timedelta
now=datetime.now(timezone.utc); print((now+timedelta(days=1)).isoformat())
```

## Code Breakdown

datetime/date/time/timedelta, format/parse, timezone awareness, naive vs aware, zoneinfo introduction.. Example ko line by line padhein, input aur output identify karein, phir ek value badal kar dobara run karein.

## Output

```text
UTC timestamp
```

## Another Practical Example

Parse a known date string and calculate days until an event.

## Common Mistakes

datetime/date/time/timedelta, format/parse, timezone awareness, naive vs aware, zoneinfo introduction.. Inputs aur boundary cases check karein.

## Important Notes

datetime/date/time/timedelta, format/parse, timezone awareness, naive vs aware, zoneinfo introduction.

## Real-World Usage

Yeh concept scripts, automation, tools, backend aur data applications me milta hai.

## Try It Yourself

Format a date for display and create an aware UTC timestamp.

## Mini Challenge

Compare naive and aware datetimes; use zoneinfo for a named local zone.

## Related Topics

[Python Curriculum Home](00-README.md) aur pichhle/agale lesson ko dekhein.

## Navigation

[Previous: 23 Regular Expressions](23-regular-expressions.md)  
[Home](00-README.md)  
[Next: 25 JSON and Data Serialization](25-json-and-data-serialization.md)

