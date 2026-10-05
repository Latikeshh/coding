---
layout: default
title: "Modules and Packages"
---

# Modules and Packages in Python

> 🟡 Intermediate

## 📖 Definition

- **Module:** A single Python source file (`.py`) containing functions, classes, and variables that can be re-used across other files.
- **Package:** A directory containing multiple related Python module files and an `__init__.py` file (optional in modern Python 3.3+, but standard best practice).

## 🇮🇳 Hindi

Large programs ko simple aur clean rakhne ke liye code ko multiple `.py` files mein divide kiya jata hai. Code import karne ke liye `import module_name` ya `from module import function` ka use hota hai. File ko directly run kar rahe hain ya import karke use kar rahe hain—yeh check karne ke liye `if __name__ == "__main__":` idiom ka use hota hai.

## 🚩 Marathi

Code la alag `.py` files madhye organize karnyasathi Modules vaparatat. Import karnyasathi `import` keyword vaparatat.

## 📝 1. Import Statements & Aliasing

```python
# 1. Importing complete module
import math
print(math.sqrt(16)) # 4.0

# 2. Importing specific functions with aliasing
from math import pi as PI_VAL, pow as power
print(PI_VAL) # 3.141592653589793

# 3. Importing custom module from package directory
from my_package.utils import format_currency
```

## 📝 2. The `if __name__ == "__main__":` Idiom

When Python runs a `.py` file:
- If the file is executed **directly from terminal**, Python sets the hidden `__name__` variable to `"__main__"`.
- If the file is **imported as a module** into another script, Python sets `__name__` to the file's actual module name (e.g. `"utils"`).

> 💡 **Why It Matters:** Wrapping execution code inside `if __name__ == "__main__":` prevents testing code from executing automatically whenever another script imports your file!

```python
def add(a, b):
    return a + b

# Runs ONLY when executed directly, NOT when imported!
if __name__ == "__main__":
    print("Testing add function:", add(10, 5))
```

## 📝 3. Essential Standard Library Modules

Python comes with a rich **Standard Library ("Batteries Included")**:

- **`math`:** Trigonometry, logarithms, roots, constants (`pi`, `e`).
- **`random`:** Random numbers (`randint`, `choice`, `shuffle`).
- **`sys`:** System arguments (`sys.argv`), exit (`sys.exit()`), Python path.
- **`os`:** Operating system files, directory creation, environment variables.
- **`time` / `datetime`:** Time tracking and performance benchmarking.

## 💡 Complete Example: Custom Module & Package Architecture

### File 1: `calculator.py`
```python
# Module: calculator.py
import math

def add(a, b):
    return a + b

def square_root(x):
    if x < 0:
        raise ValueError("Cannot calculate square root of negative number.")
    return math.sqrt(x)

# Executable entry point check
if __name__ == "__main__":
    print("=== RUNNING CALCULATOR DIRECT MODULE TESTS ===")
    print("Add Test        :", add(10, 20))
    print("Square Root Test:", square_root(25))
```

### File 2: `main_app.py`
```python
# Main Application Script
import calculator as calc

print("=== MAIN APPLICATION LAUNCH ===")

val1 = 15
val2 = 25
sum_result = calc.add(val1, val2)
sqrt_result = calc.square_root(sum_result)

print(f"Sum of {val1} + {val2} = {sum_result}")
print(f"Square Root of {sum_result} = {sqrt_result:.2f}")
```

## 👀 Output

Running `python3 main_app.py`:

```text
=== MAIN APPLICATION LAUNCH ===
Sum of 15 + 25 = 40
Square Root of 40 = 6.32
```

*(Notice how the `=== RUNNING CALCULATOR DIRECT MODULE TESTS ===` block from `calculator.py` did NOT execute because of `if __name__ == "__main__":`!)*

## ⚠️ Common Mistakes

- **Circular Imports:** Module A imports Module B, and Module B imports Module A simultaneously, resulting in `ImportError: cannot import name`.
- Naming custom Python files the exact same name as standard library modules (e.g., naming your test file `math.py` or `random.py`), which shadows the built-in library!

## 🛡️ Safety / Important Notes

Avoid using `from module import *` because it pollutes your current namespace with unknown variable names and increases the risk of accidental variable shadowing bugs.

## 🌍 Real-World Usage

All professional software architectures organize code into separate domain packages (`models/`, `views/`, `controllers/`, `services/`, `utils/`).

## 🧪 Try It Yourself

1. Use Python's built-in `random` module to pick a random item from a list `["Apple", "Banana", "Cherry"]` using `random.choice()`.
2. Use `math.pi` to calculate the area of a circle with radius 7.

## 🎯 Mini Challenge

Create a custom module file `string_utils.py` containing a function `reverse_and_capitalize(text)`. Import and use it in a separate `app.py` file.

## 🔗 Related Topics

- [Functions Basics](08-functions.html)
- [Virtual Environments and Pip](29-virtual-environments-and-pip.html)

## 🧭 Navigation

[← Python Home](./) | [← Previous: Advanced Functions](15-functions-advanced.html) | [Next: File Handling →](17-file-handling.html)

