# Lambdas & Function Objects

> 🔴 Advanced

## 📖 Definition

- **Lambda Expression:** An anonymous function that can be defined inline inside function arguments or local scopes.
- **Capture Clause (`[...]`):** Specifies which local variables from surrounding scope are accessible inside the lambda.

---

## 📝 Lambda Syntax

```text
[capture](parameters) -> return_type {
    // Function body
}
```

### Capture Options:
- `[]`: Capture nothing.
- `[=]`: Capture all surrounding local variables by **value**.
- `[&]`: Capture all surrounding local variables by **reference**.
- `[x, &y]`: Capture `x` by value, `y` by reference.

---

## 💡 Practical Examples

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    int factor = 3;

    // Capture 'factor' by value
    auto multiplyByFactor = [factor](int num) {
        return num * factor;
    };

    cout << "5 * 3 = " << multiplyByFactor(5) << endl;

    // Using inline lambda with STL algorithms
    vector<int> numbers = {1, 2, 3, 4, 5, 6};

    // Filter and count evens using lambda
    int evenCount = count_if(numbers.begin(), numbers.end(), [](int n) {
        return n % 2 == 0;
    });

    cout << "Even count: " << evenCount << endl;

    return 0;
}
```

---

## 🧪 Try It Yourself

Write a lambda that takes two integers and returns their sum. Assign it to an `auto` variable and call it.

## 🎯 Mini Challenge

Use `std::for_each` and a capture-by-reference lambda to calculate the sum of all elements in a `std::vector<int>`.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Templates](17-templates.md) | [Next: Exception Handling →](19-exception-handling.md)
