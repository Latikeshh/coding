# Conditionals in C++

> 🟢 Beginner

## 📖 Definition

Conditionals evaluate expressions to decide which branch of execution to take.

## 📝 Syntax

```cpp
if (condition) {
    // Executes if condition is true
} else if (anotherCondition) {
    // Executes if anotherCondition is true
} else {
    // Default fallback
}
```

## 💡 Practical Example

```cpp
#include <iostream>
using namespace std;

int main() {
    int temperature = 32;

    if (temperature > 30) {
        cout << "It's hot outside! Stay hydrated." << endl;
    } else if (temperature >= 18) {
        cout << "Weather is pleasant." << endl;
    } else {
        cout << "It's cold outside! Wear a jacket." << endl;
    }

    return 0;
}
```

## 👀 Output

```text
It's hot outside! Stay hydrated.
```

## ⚠️ Common Mistakes

- Missing break statements in `switch` blocks causing unintended fallthrough.

## 🧪 Try It Yourself

Write an `if/else` block that checks whether an entered integer is positive, negative, or zero.

## 🎯 Mini Challenge

Create a grade classifier where score `>= 90` is `"A"`, `>= 80` is `"B"`, `>= 70` is `"C"`, and below `70` is `"F"`.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Operators](05-operators.md) | [Next: Loops →](07-loops.md)
