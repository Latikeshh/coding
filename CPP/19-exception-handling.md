# Exception Handling (`try`, `catch`, `throw`)

> 🟡 Intermediate

## 📖 Definition

Exception handling isolates runtime errors (out-of-bounds access, division by zero, failed memory allocations) from normal execution flow.

---

## 📝 Syntax & Custom Exceptions

```cpp
#include <iostream>
#include <stdexcept>
#include <string>
using namespace std;

double divide(double a, double b) {
    if (b == 0) {
        throw runtime_error("Math Error: Division by Zero!");
    }
    return a / b;
}

int main() {
    try {
        cout << "Result: " << divide(10.0, 2.0) << endl;
        cout << "Result: " << divide(5.0, 0.0) << endl; // Throws exception!
    } catch (const runtime_error& e) {
        cout << "Caught Exception: " << e.what() << endl;
    } catch (...) {
        cout << "Caught unknown exception!" << endl;
    }

    cout << "Program continues execution safely." << endl;
    return 0;
}
```

---

## 👀 Output

```text
Result: 5
Caught Exception: Math Error: Division by Zero!
Program continues execution safely.
```

---

## 🧪 Try It Yourself

Write a function `checkAge(int age)` that throws an `invalid_argument` exception if `age < 18`.

## 🎯 Mini Challenge

Create a custom exception class `OutOfBalanceException : public std::exception` and throw it inside a bank withdrawal function.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Lambdas](18-lambdas.md) | [Next: File Streams →](20-file-streams.md)
