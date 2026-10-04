---
layout: default
title: "Project Structure"
---

# Project Structure and PEP 8 Best Practices in Python

> 🟡 Intermediate

## 📖 Definition

- **PEP 8:** The official **Style Guide for Python Code** that defines formatting conventions (indentation, naming styles, line length, docstrings) to ensure maximum code readability across the Python community.
- **Python Project Structure:** Organizing source code, tests, documentation, dependencies, and configuration files into standardized professional directory layouts.

## 🇮🇳 Hindi

Clean aur maintainable Python projects banane ke liye **PEP 8 Style Guide** follow ki jaati hai. 4-space indentation, `snake_case` variable/function names, `PascalCase` class names, Docstrings (`"""Docstring"""`), aur modular project folder structures maintenance ko aasan banate hain.

## 🚩 Marathi

Professional Python projects saathi **PEP 8 Style Guide** aani standardized directory structure vaparatat.

## 📝 1. PEP 8 Core Naming & Formatting Rules

| Code Element | PEP 8 Naming Style | Example |
|---|---|---|
| Variables & Functions | `snake_case` | `user_age`, `calculate_total()` |
| Classes | `PascalCase` / `CamelCase` | `BankAccount`, `UserProfile` |
| Constants | `ALL_CAPS` | `MAX_CONNECTIONS = 10` |
| Modules & Packages | `snake_case` (short) | `calculator.py`, `utils` |
| Indentation | **4 Spaces** (NO Tabs!) | 4 spaces per block level |
| Line Length | Max 79–88 characters | Black formatter standard |

## 📝 2. Writing Clean Python Docstrings (PEP 257)

Use triple-quoted strings `""" ... """` directly under function and class declarations to document intent, parameters, and return types:

```python
def calculate_bmi(weight_kg: float, height_m: float) -> float:
    """Calculates Body Mass Index (BMI).

    Args:
        weight_kg (float): Weight in kilograms.
        height_m (float): Height in meters.

    Returns:
        float: Calculated BMI value.
    """
    if height_m <= 0:
        raise ValueError("Height must be positive.")
    return weight_kg / (height_m ** 2)
```

## 📝 3. Standard Professional Project Layout

```text
my_python_project/
├── .gitignore                      # Git ignore patterns (venv/, __pycache__/)
├── README.md                       # Project documentation & setup guide
├── requirements.txt                # Dependency package manifest
├── setup.py / pyproject.toml       # Package build configuration
├── src/                            # Source code directory
│   └── my_project/
│       ├── __init__.py             # Package marker
│       ├── main.py                 # CLI/App Entry point
│       ├── models.py               # Data models / Dataclasses
│       └── utils.py                # Helper utilities
└── tests/                          # Unit tests directory
    ├── __init__.py
    └── test_models.py
```

## 💡 Complete Example: Well-Structured Clean Code Module

```python
# src/my_project/models.py
from dataclasses import dataclass
from typing import Optional

CONSTANT_TAX_RATE = 0.18 # PEP 8 Constant

@dataclass
class InvoiceItem:
    """Represents an individual item in an e-commerce invoice."""
    product_name: str
    unit_price: float
    quantity: int = 1

    def calculate_subtotal(self) -> float:
        """Computes subtotal for the item."""
        return self.unit_price * self.quantity

def format_currency(amount: float) -> str:
    """Formats floating-point amount as currency string."""
    return f"₹{amount:.2f}"

if __name__ == "__main__":
    item = InvoiceItem("Wireless Keyboard", 1499.00, 2)
    print(f"Item: {item.product_name}")
    print(f"Subtotal: {format_currency(item.calculate_subtotal())}")
```

## 👀 Output

```text
Item: Wireless Keyboard
Subtotal: ₹2998.00
```

## ⚠️ Common Mistakes

- Mixing tabs and spaces for indentation, leading to `TabError` crashes.
- Writing monolithic 1,000-line single script files instead of breaking logic into modular package files.
- Committing compiled bytecode folders (`__pycache__/`, `.pyc` files) into Git repositories.

## 🛡️ Safety / Important Notes

Use automated code linting and formatting tools like **`black`** (`pip install black`) and **`flake8`** (`pip install flake8`) to auto-format your code to PEP 8 standards before pushing changes.

## 🌍 Real-World Usage

All open-source Python libraries, enterprise backend repositories, and production software teams enforce PEP 8 linting and clean project structures.

## 🧪 Try It Yourself

1. Install `black` using `pip install black` in your virtual environment.
2. Auto-format a Python file using command `black my_script.py`.

## 🎯 Mini Challenge

Re-structure an unformatted Python script by renaming variable names to `snake_case`, class names to `PascalCase`, adding 4-space indentation, and adding a function docstring.

## 🔗 Related Topics

- [Virtual Environments and Pip](29-virtual-environments-and-pip.md)
- [Capstones & Mini Projects](31-mini-projects.md)

## 🧭 Navigation

[← Python Home](00-README.md) | [← Previous: Virtual Environments and Pip](29-virtual-environments-and-pip.md) | [Next: Mini Projects →](31-mini-projects.md)
