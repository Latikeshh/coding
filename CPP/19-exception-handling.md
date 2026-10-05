---
layout: default
title: "19 exception handling"
---

# Exception Handling in C++ (`try`, `catch`, `throw`, `std::exception`)

> 🟡 Intermediate

---

## 📖 Definition

**Exception Handling** is a mechanism in C++ that isolates runtime error detection from error recovery logic. When an abnormal runtime situation occurs (such as division by zero, invalid input, or out-of-memory errors), the program **`throw`s** an exception. The execution control jumps to a matching **`catch`** block wrapped in a **`try`** block.

---

## 🇮🇳 Hindi Explanation

Runtime errors (jaise file na milna, ya zero se divide karna) ko handle karne ke liye `try-catch` blocks ka use hota hai:
- **`try`**: Us code ko wrap karta hai jisme error aane ki sambhavna ho.
- **`throw`**: Anomaly ya error milne par exception throw karta hai.
- **`catch`**: Thrown exception ko catch karta hai aur program ko crash hone se bachata hai.

---

## 🚩 Marathi Explanation

Runtime errors mule program crash hou naye mhanun Exception Handling cha vapar ke la jato.
- **`try`**: Zyathaat error yeu shakto to code `try` block madhye thevla jato.
- **`throw`**: Error aalyas exception feknyasathi (`throw`).
- **`catch`**: Anomaly/Error catch karun program surakshitapane saambhalnyasathi.

---

## 📝 Syntax & Exception Hierarchy

```cpp
try {
    // Code that might throw an exception
    if (errorCondition) {
        throw std::runtime_error("Error description");
    }
} catch (const std::runtime_error& e) {
    // Handle specific runtime_error
    std::cerr << "Caught Error: " << e.what() << std::endl;
} catch (const std::exception& e) {
    // Fallback handler for standard exceptions
} catch (...) {
    // Catch-all handler for unknown non-standard exceptions
}
```

---

## 💡 Practical Example

```cpp
#include <iostream>
#include <stdexcept> // Standard exceptions header
#include <string>

// Custom Function that validates and divides numbers
double divide(double numerator, double denominator) {
    if (denominator == 0.0) {
        throw std::invalid_argument("Division by Zero is undefined!");
    }
    return numerator / denominator;
}

// Custom Function that validates user age
void verifyAge(int age) {
    if (age < 0) {
        throw std::out_of_range("Age cannot be negative!");
    }
    if (age < 18) {
        throw std::runtime_error("Access Denied: User is under 18.");
    }
    std::cout << "Access Granted. Welcome!" << std::endl;
}

int main() {
    std::cout << "--- 1. SAFE DIVISION DEMO ---" << std::endl;
    try {
        std::cout << "10 / 2 = " << divide(10.0, 2.0) << std::endl;
        std::cout << "10 / 0 = " << divide(10.0, 0.0) << std::endl; // Throws exception!
    } catch (const std::invalid_argument& e) {
        std::cerr << "[CAUGHT ERROR] " << e.what() << std::endl;
    }

    std::cout << "\n--- 2. AGE VERIFICATION DEMO ---" << std::endl;
    try {
        verifyAge(15);
    } catch (const std::out_of_range& e) {
        std::cerr << "[OUT OF RANGE] " << e.what() << std::endl;
    } catch (const std::exception& e) {
        std::cerr << "[EXCEPTION] " << e.what() << std::endl;
    }

    std::cout << "\nProgram execution continued safely without crashing!" << std::endl;
    return 0;
}
```

---

## 🔍 Code Breakdown

- `throw std::invalid_argument(...)`: Creates an exception object containing an error message string (`.what()`).
- `catch (const std::exception& e)`: Catches any exception derived from `std::exception` by const reference to avoid slice copying.
- `e.what()`: Returns the C-style string error message stored in the exception object.

---

## 👀 Output

```text
--- 1. SAFE DIVISION DEMO ---
10 / 2 = 5
[CAUGHT ERROR] Division by Zero is undefined!

--- 2. AGE VERIFICATION DEMO ---
[EXCEPTION] Access Denied: User is under 18.

Program execution continued safely without crashing!
```

---

## ⚠️ Common Mistakes

- **Throwing Plain Primitives Instead of `std::exception` Derived Types**: Writing `throw 404;` or `throw "Error";` makes exception handling inconsistent. Always derive or use classes from `<stdexcept>` (`std::runtime_error`, `std::invalid_argument`, `std::out_of_range`).
- **Throwing Exceptions Inside Destructors**: If a destructor throws an exception while stack unwinding is already in progress, C++ immediately terminates the program (`std::terminate()`)! Mark destructors `noexcept`.

---

## 🛡️ Best Practices

- Catch exceptions by **`const` reference** (`catch (const std::exception& e)`).
- Use `noexcept` keyword on functions that are guaranteed never to throw exceptions (`void safeFunc() noexcept`).

---

## 🧪 Try It Yourself

1. Write a function `checkArrayAccess(int index)` that throws `std::out_of_range` if the requested index exceeds valid array boundaries.
2. Catch `std::bad_alloc` when attempting to allocate an unrealistically huge dynamic array.

---

## 🎯 Mini Challenge

Write a bank withdrawal function `withdrawMoney(double balance, double amount)` that throws `std::runtime_error("Insufficient Balance")` if amount exceeds balance and `std::invalid_argument("Invalid Amount")` if amount $\le 0$. Test it inside a `try-catch` block.

---

## 🔗 Related Topics

- [Input & Output in C++](04-input-output.md)
- [File I/O Streams](20-file-streams.md)

---

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Lambdas](18-lambdas.md) | [Next: File Streams →](20-file-streams.md)
