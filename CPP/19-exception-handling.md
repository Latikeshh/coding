# Exception Handling (`try`, `catch`, `throw`)

> 🟡 Intermediate

## 📖 Definition

Exception handling (`try`, `catch`, `throw`) catches runtime errors (like division by zero, failed allocations, file failures) without abruptly terminating program execution.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Throw exceptions with `throw` and handle them inside `try {} catch (const std::exception& e) {}` blocks.
> - **Hindi:** रनटाइम एरर्स को संभालने के लिए `throw` करें और `try...catch` ब्लॉक में कैच करें।
> - **Marathi:** रनटाईम एरर्स हाताळण्यासाठी `try...catch` वापरले जाते.
> - **Hinglish:** App crash hone se bachane ke liye runtime errors ko `try...catch` block mein handle karo.

## 📝 Syntax

```cpp
#include <iostream>
#include <stdexcept>
using namespace std;

double divide(double a, double b) {
    if (b == 0) throw runtime_error("Division by zero!");
    return a / b;
}

int main() {
    try {
        cout << divide(10, 0) << endl;
    } catch (const exception& e) {
        cerr << "Caught: " << e.what() << endl;
    }
    return 0;
}
```

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Lambdas](18-lambdas.md) | [Next: File Streams →](20-file-streams.md)
