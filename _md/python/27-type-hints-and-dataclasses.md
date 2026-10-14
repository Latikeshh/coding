---
layout: default
title: "Type Hints and Dataclasses"
---

# Type Hints and Dataclasses in Python

> 🟡 Intermediate

## 📖 Definition

- **Type Hints (PEP 484):** Optional annotations `param: type -> return_type` that document expected variable and function types to improve IDE auto-completion and static analysis tools (`mypy`).
- **Dataclasses (`@dataclass` - PEP 557):** A decorator introduced in Python 3.7 that automatically generates `__init__()`, `__repr__()`, `__eq__()`, and comparison methods for data-oriented classes.

## 🇮🇳 Hindi

Code readability aur IDE auto-completion ke liye **Type Hints** (`name: str -> int`) ka use hota hai. Plain data storage classes ke boilerplate code ko hatane ke liye Python 3.7+ mein **`@dataclass`** decorator ka use kiya jata hai.

## 🚩 Marathi

Type Hints (`name: str -> int`) mule IDE la types kalatat. Data storage classes saathi `@dataclass` decorator boilerplate code kami karto.

## 📝 1. Type Hints (`typing` Module)

Type hints do NOT enforce types at runtime (Python remains dynamically typed), but static type checkers (`mypy`) and IDEs use them to catch bugs:

```python
from typing import List, Dict, Optional, Union

# Primitive and Collection Type Hints
def calculate_average(scores: List[float]) -> float:
    return sum(scores) / len(scores)

# Optional (Can be String or None)
def find_user(user_id: int) -> Optional[str]:
    if user_id == 501:
        return "Aarav"
    return None
```

## 📝 2. Modern Dataclasses (`@dataclass`)

Replaces boilerplate `__init__`, `__repr__`, and `__eq__` implementations:

```python
from dataclasses import dataclass, field

@dataclass(frozen=True) # frozen=True makes instance immutable!
class Product:
    id: int
    name: str
    price: float
    tags: List[str] = field(default_factory=list) # Mutable default factory

p1 = Product(101, "Mouse", 1200.0)
print(p1) # Output: Product(id=101, name='Mouse', price=1200.0, tags=[])
```

## 💡 Complete Example: Employee Inventory System

```python
from dataclasses import dataclass, field
from typing import List, Optional

@dataclass
class Employee:
    emp_id: int
    name: str
    department: str
    salary: float
    skills: List[str] = field(default_factory=list)

    def apply_raise(self, percent: float) -> None:
        """Applies a salary raise percentage."""
        if percent > 0:
            self.salary += self.salary * (percent / 100)

@dataclass
class DepartmentSummary:
    dept_name: str
    employees: List[Employee] = field(default_factory=list)

    def get_total_payroll(self) -> float:
        return sum(e.salary for e in self.employees)

# Testing Dataclasses
e1 = Employee(101, "Aarav Mehta", "Engineering", 85000.0, ["Python", "SQL"])
e2 = Employee(102, "Sneha Kapoor", "Engineering", 95000.0, ["Java", "Docker"])

dept = DepartmentSummary("Engineering", [e1, e2])

print("=== DATACLASS DEPARTMENT SUMMARY ===")
print("Department    :", dept.dept_name)
print("Employee 1    :", e1)
print(f"Total Payroll : ₹{dept.get_total_payroll():.2f}")

e1.apply_raise(10.0)
print(f"After 10% Raise: {e1.name} -> ₹{e1.salary:.2f}")
```

## 👀 Output

```text
=== DATACLASS DEPARTMENT SUMMARY ===
Department    : Engineering
Employee 1    : Employee(emp_id=101, name='Aarav Mehta', department='Engineering', salary=85000.0, skills=['Python', 'SQL'])
Total Payroll : ₹180000.00
After 10% Raise: Aarav Mehta -> ₹93500.00
```

## ⚠️ Common Mistakes

- Assuming type hints prevent invalid assignments at runtime (`age: int = "twenty"` will run in Python without raising a runtime error unless checked with `mypy`!).
- Using mutable defaults directly in dataclasses (`tags: List[str] = []` causes a `ValueError`; use `field(default_factory=list)` instead!).

## 🛡️ Safety / Important Notes

Pass `frozen=True` to `@dataclass` when creating immutable data transfer objects (DTOs) or domain value objects that need to be hashable and usable in sets or dictionary keys.

## 🌍 Real-World Usage

Data Transfer Objects (DTOs) in API frameworks (FastAPI), data modeling in data science applications, and domain entities.

## 🧪 Try It Yourself

1. Write a function `add_numbers(a: int, b: int) -> int` with type hints.
2. Create a `@dataclass` named `Book` with attributes `title: str`, `author: str`, `price: float`.

## 🎯 Mini Challenge

Create a `@dataclass(frozen=True)` named `GeoPoint` with `latitude: float` and `longitude: float`, and instantiate it inside a set.

## 🔗 Related Topics

- [Object-Oriented Programming](19-object-oriented-programming.html)
- [Project Structure](30-project-structure-and-best-practices.html)

## 🧭 Navigation

[← Python Home](./) | [← Previous: Working with CSV](26-working-with-csv.html) | [Next: Testing and Debugging →](28-testing-and-debugging.html)

