---
layout: default
title: "Exception Handling"
---

# Exception Handling in Python

> 🟡 Intermediate

## 📖 Definition

**Exception Handling** is a mechanism that allows Python programs to intercept, process, and recover from runtime errors (like division by zero, invalid input parsing, or missing files) gracefully without crashing application execution.

## 🇮🇳 Hindi

Program crash hone se bachane ke liye **Exception Handling** ka use hota hai. Risky code ko `try` block mein rakha jata hai, error aane par `except` block chalta hai, `else` block tabhi chalta hai jab koi error na ho, aur `finally` block **hamesha** execute hota hai (cleanup ke liye).

## 🚩 Marathi

Application crash hone pasun vachvanyasathi `try...except` block vaparatat. Cleanup sathi `finally` block hamesha run hoto.

## 📝 1. Exception Handling Architecture

- `try:` Encloses code that might raise an exception during execution.
- `except ExceptionType as err:` Catches and handles specific exception types.
- `else:` Executes **ONLY if no exception occurred** in the `try` block.
- `finally:` **ALWAYS executes** (whether an exception occurred or not) for resource cleanup.
- `raise ExceptionType("message")`: Manually triggers/raises an exception.

```text
       +------------------------------------+

       | try: Risky Operation Execution      |
       +-----------------+------------------+

                         |
           Has Exception?|
          +--------------+--------------+

          |                             |
          ▼ YES                         ▼ NO
+-------------------------+   +-------------------------+

| except ExceptionType:   |   | else:                   |
| Handles Error           |   | Executes if NO exception|
+------------+------------+   +------------+------------+

             |                             |
             +--------------+--------------+

                            |
                            ▼
               +--------------------------+

               | finally: ALWAYS Runs!    |
               +--------------------------+
```

## 📝 2. Common Built-In Python Exceptions

- `ValueError`: Invalid value passed to function (e.g. `int("abc")`).
- `TypeError`: Invalid operation on incompatible types (e.g. `"2" + 2`).
- `ZeroDivisionError`: Division by zero (`10 / 0`).
- `KeyError`: Non-existent dictionary key accessed.
- `IndexError`: Sequence index out of bounds.
- `FileNotFoundError`: Trying to open a missing file.

## 💡 Complete Example: Robust Order Processing System

```python
# Custom Exception Definition
class InsufficientBalanceError(Exception):
    """Raised when account balance is less than transaction amount."""
    pass

def process_withdrawal(account_balance, withdrawal_amount_str):
    """Processes withdrawal with comprehensive error handling & validation."""
    try:
        # 1. Parsing numeric input (Can raise ValueError)
        amount = float(withdrawal_amount_str)
        
        # 2. Input Validation
        if amount <= 0:
            raise ValueError("Withdrawal amount must be greater than zero.")
            
        if amount > account_balance:
            raise InsufficientBalanceError(
                f"Requested ₹{amount:.2f} exceeds available balance ₹{account_balance:.2f}."
            )
            
        account_balance -= amount
        
    except ValueError as err:
        print(f"[VAL_ERROR] Invalid Input : {err}")
        return account_balance, False
        
    except InsufficientBalanceError as err:
        print(f"[FUND_ERROR] Balance Issue: {err}")
        return account_balance, False
        
    except Exception as err:
        print(f"[UNEXPECTED_ERROR] Unexpected: {err}")
        return account_balance, False
        
    else:
        # Runs ONLY if withdrawal succeeded without errors!
        print(f"[SUCCESS] Withdrew ₹{amount:.2f}. Remaining: ₹{account_balance:.2f}")
        return account_balance, True
        
    finally:
        # Always runs for audit trail logging!
        print("[AUDIT LOG] Withdrawal processing attempt complete.")

# Testing Test Cases
print("=== TESTING EXCEPTION HANDLING SYSTEM ===")

current_balance = 5000.00

print("\n--- Test Case 1: Non-numeric String Input ---")
current_balance, _ = process_withdrawal(current_balance, "abc")

print("\n--- Test Case 2: Insufficient Funds ---")
current_balance, _ = process_withdrawal(current_balance, "7500.00")

print("\n--- Test Case 3: Valid Transaction ---")
current_balance, _ = process_withdrawal(current_balance, "1200.00")
```

## 👀 Output

```text
=== TESTING EXCEPTION HANDLING SYSTEM ===

--- Test Case 1: Non-numeric String Input ---
[VAL_ERROR] Invalid Input : could not convert string to float: 'abc'
[AUDIT LOG] Withdrawal processing attempt complete.

--- Test Case 2: Insufficient Funds ---
[FUND_ERROR] Balance Issue: Requested ₹7500.00 exceeds available balance ₹5000.00.
[AUDIT LOG] Withdrawal processing attempt complete.

--- Test Case 3: Valid Transaction ---
[SUCCESS] Withdrew ₹1200.00. Remaining: ₹3800.00
[AUDIT LOG] Withdrawal processing attempt complete.
```

## ⚠️ Common Mistakes

- Using bare `except:` without specifying an exception class (catches ALL exceptions including `KeyboardInterrupt` and `SystemExit`, making terminal cancellation impossible!).
- Swallowing exceptions silently with `except Exception: pass` without logging error context, making debugging impossible!

## 🛡️ Safety / Important Notes

Always catch specific exception types (`ValueError`, `FileNotFoundError`) before catching broader parent exceptions (`Exception`).

## 🌍 Real-World Usage

Handling API network connection timeouts, catching invalid JSON payload parsing, handling database connection retries, and validating user input forms.

## 🧪 Try It Yourself

1. Write a program that prompts the user for two numbers and divides them inside a `try...except` block, catching `ZeroDivisionError` and `ValueError`.
2. Add a `finally` block printing `"Calculation attempted."`.

## 🎯 Mini Challenge

Create a custom exception `InvalidEmailError` and write a function `validate_email(email)` that raises it if the email string does not contain `@` or `.`.

## 🔗 Related Topics

- [File Handling](17-file-handling.html)
- [Testing and Debugging](28-testing-and-debugging.html)

## 🧭 Navigation

[← Python Home](./) | [← Previous: File Handling](17-file-handling.html) | [Next: Object-Oriented Programming →](19-object-oriented-programming.html)

