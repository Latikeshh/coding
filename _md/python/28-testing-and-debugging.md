---
layout: default
title: "Testing and Debugging"
---

# Testing and Debugging in Python (`unittest` & `pdb`)

> 🟡 Intermediate

## 📖 Definition

- **Unit Testing:** Automating the verification of individual isolated functions or modules using Python's built-in **`unittest`** framework.
- **Debugging:** Isolating, inspecting, and fixing runtime bugs and logical errors using **`breakpoint()`** / **`pdb` (Python Debugger)** or IDE debuggers.

## 🇮🇳 Hindi

Automated testing ke liye built-in **`unittest`** framework ka use hota hai. Code ko runtime par step-by-step debug karne ke liye Python 3.7+ mein **`breakpoint()`** function ka use kiya jata hai, jisse terminal par `pdb` interactive console open ho jata hai.

## 🚩 Marathi

Automated testing sathi `unittest` framework vaparatat. Code debug karnyasathi `breakpoint()` vapara.

## 📝 1. Built-in `unittest` Framework

```python
import unittest

def add(a, b):
    return a + b

class TestMathOperations(unittest.TestCase):
    def test_add_positive_numbers(self):
        self.assertEqual(add(2, 3), 5)
        
    def test_add_negative_numbers(self):
        self.assertEqual(add(-1, -1), -2)

if __name__ == "__main__":
    unittest.main()
```

### Key Assertions in `unittest.TestCase`:
- `self.assertEqual(a, b)`
- `self.assertTrue(condition)` / `self.assertFalse(condition)`
- `self.assertIsNone(obj)` / `self.assertIsNotNone(obj)`
- `self.assertRaises(ExceptionType, func, *args)`

## 📝 2. Programmatic Debugging with `breakpoint()` (Python 3.7+)

Placing `breakpoint()` pauses execution and opens the **`pdb` (Python Debugger)** interactive shell:

### Key `pdb` Debugger Commands:
- `n` (next): Executes current line and moves to next line.
- `s` (step): Steps inside the called function.
- `c` (continue): Resumes normal execution until next breakpoint.
- `p variable`: Prints current variable value.
- `q` (quit): Exits debugger.

```python
def calculate_discount(price, percent):
    discount = price * (percent / 100)
    breakpoint() # Pauses execution here in terminal!
    return price - discount
```

## 💡 Complete Example: Function & Unit Test Module

```python
import unittest

# 1. Code Module to Test
def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("Cannot divide by zero.")
    return a / b

def is_palindrome(text):
    if not isinstance(text, str):
        raise TypeError("Input must be a string.")
    clean_text = "".join(c.lower() for c in text if c.isalnum())
    return clean_text == clean_text[::-1]

# 2. Unit Test Suite
class TestUtilityFunctions(unittest.TestCase):
    
    def test_valid_division(self):
        self.assertEqual(divide(10, 2), 5.0)
        self.assertAlmostEqual(divide(1, 3), 0.3333333, places=4)
        
    def test_division_by_zero_raises_exception(self):
        with self.assertRaises(ZeroDivisionError):
            divide(10, 0)
            
    def test_palindrome_valid(self):
        self.assertTrue(is_palindrome("A man, a plan, a canal: Panama"))
        self.assertFalse(is_palindrome("Python"))
        
    def test_palindrome_invalid_type(self):
        with self.assertRaises(TypeError):
            is_palindrome(12321)

# 3. Test Execution Runner
if __name__ == "__main__":
    print("=== RUNNING UNITTEST SUITE ===")
    unittest.main()
```

## 👀 Output

```text
=== RUNNING UNITTEST SUITE ===
....
----------------------------------------------------------------------
Ran 4 tests in 0.002s

OK
```

## ⚠️ Common Mistakes

- Writing unit tests that depend on execution order or external state (tests MUST remain independent!).
- Leaving `breakpoint()` statements in production deployment code!
- Asserting only happy-path inputs while ignoring edge cases and boundary conditions (e.g. `None`, `0`, negative numbers).

## 🛡️ Safety / Important Notes

In modern Python development, **`pytest`** (`pip install pytest`) is widely used alongside `unittest` for cleaner test syntax and rich assertion failure diffs.

## 🌍 Real-World Usage

CI/CD deployment pipelines (GitHub Actions, Jenkins), regression testing during codebase refactoring, and debugging API issues.

## 🧪 Try It Yourself

1. Write a function `square(x)` and a `unittest.TestCase` verifying `square(4) == 16`.
2. Add a test asserting that `square(-3) == 9`.

## 🎯 Mini Challenge

Write a unit test for a `BankAccount` class verifying that withdrawing an amount greater than balance raises an `InsufficientBalanceError`.

## 🔗 Related Topics

- [Exception Handling](18-exception-handling.html)
- [Project Structure](30-project-structure-and-best-practices.html)

## 🧭 Navigation

[← Python Home](./) | [← Previous: Type Hints and Dataclasses](27-type-hints-and-dataclasses.html) | [Next: Virtual Environments and Pip →](29-virtual-environments-and-pip.html)

