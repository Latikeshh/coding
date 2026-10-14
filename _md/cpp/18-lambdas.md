---
layout: default
title: "18 lambdas"
---

# Lambda Expressions & Functional Programming in C++ (`[](){}`)

> 🔴 Advanced

---

## 📖 Definition

Introduced in C++11, a **Lambda Expression** is an anonymous (unnamed) inline function object that can be constructed right at its point of execution or passed directly as an argument to algorithms. Lambdas can capture local scope variables from their enclosing context using a **Capture Clause (`[...]`)**.

---

## 🇮🇳 Hindi Explanation

Lambda C++11 ka ek modern feature hai jo bina alag se function name banaye inline code likhne ki suvidha deta hai. Lambda ka basic syntax hota hai: `[capture](parameters) { body }`.
- `[]`: Empty capture list.
- `[=]`: Outer scope ki sabhi variables ko **by-value** (copy) capture karta hai.
- `[&]`: Outer scope ki sabhi variables ko **by-reference** capture karta hai.
- `[x, &y]`: `x` ko copy aur `y` ko reference se capture karta hai.

---

## 🚩 Marathi Explanation

Lambda expression mhanje inline aani anonymous (nav नसलेला) function. Ha `<algorithm>` mhanalelya functions sathi khup garjecha ahe.
Syntax: `[capture](parameters) -> return_type { body }`.
- `[=]`: Baheril variables copy swaroopat ghenyasathi.
- `[&]`: Baheril variables reference swaroopat ghenyasathi.

---

## 📝 Syntax & Anatomy

```cpp
[ capture_clause ] ( parameters ) -> return_type {
    // Lambda function body
}
```

### Capture Clause Options
- `[]`: Capture nothing.
- `[=]`: Capture all outer variables by value (read-only copies).
- `[&]`: Capture all outer variables by reference (mutable originals).
- `[factor]`: Capture specific variable `factor` by value.
- `[&count]`: Capture specific variable `count` by reference.

---

## 💡 Practical Example

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::cout << "--- 1. BASIC INLINE LAMBDA ---" << std::endl;
    // Defining a lambda assigned to auto
    auto greet = [](std::string name) {
        std::cout << "Hello " << name << " from C++ Lambda!" << std::endl;
    };
    greet("Aria");

    std::cout << "\n--- 2. LAMBDAS WITH STL ALGORITHMS ---" << std::endl;
    std::vector<int> scores = {12, 85, 45, 92, 33, 76};

    // Filter and count scores >= 50 using lambda inside std::count_if
    int passCount = std::count_if(scores.begin(), scores.end(), [](int score) {
        return score >= 50;
    });
    std::cout << "Students Passed (Score >= 50): " << passCount << std::endl;

    std::cout << "\n--- 3. CAPTURING OUTER SCOPE VARIABLES ---" << std::endl;
    int threshold = 80;
    int matchCount = 0;

    // Capture 'threshold' BY VALUE and 'matchCount' BY REFERENCE!
    std::for_each(scores.begin(), scores.end(), [threshold, &matchCount](int score) {
        if (score >= threshold) {
            matchCount++;
        }
    });

    std::cout << "High Scorers (Score >= " << threshold << ") : " << matchCount << std::endl;

    return 0;
}
```

---

## 🔍 Code Breakdown

- `[](int score) { return score >= 50; }`: A predicate lambda passed to `std::count_if` that returns `true` for passing scores.
- `[threshold, &matchCount]`: Captures `threshold` as a read-only value and `matchCount` as a mutable reference to count occurrences directly.

---

## 👀 Output

```text
--- 1. BASIC INLINE LAMBDA ---
Hello Aria from C++ Lambda!

--- 2. LAMBDAS WITH STL ALGORITHMS ---
Students Passed (Score >= 50): 4

--- 3. CAPTURING OUTER SCOPE VARIABLES ---
High Scorers (Score >= 80) : 2
```

---

## ⚠️ Common Mistakes

- **Dangling Reference in Capture `[&]`**:
  Capturing local variables by reference (`[&]`) inside a lambda that outlives the local scope causes dangling reference crashes! Use `[=]` (capture by value) if the lambda is stored or executed asynchronously.
- **Trying to Modify Value-Captured Variables**:
  Variables captured by value `[x]` are `const` inside the lambda body by default! Add the `mutable` keyword if you need to modify local value copies: `[x]() mutable { x++; }`.

---

## 🛡️ Best Practices

- Prefer explicit captures (`[x, &y]`) over default wildcard captures (`[=]` or `[&]`) for code clarity and safety.

---

## 🧪 Try It Yourself

1. Use `std::sort` with a custom lambda to sort a `std::vector<std::string>` by string length (shortest to longest).
2. Write a lambda that multiplies a number by a captured `multiplier` variable.

---

## 🎯 Mini Challenge

Write a program that uses `std::remove_if` and a lambda expression to strip all vowels (`a, e, i, o, u`) from a input string.

---

## 🔗 Related Topics

- [STL Algorithms](16-stl-algorithms.html)
- [Functions in C++](08-functions.html)

---

## 🧭 Navigation

[← C++ Home](./) | [← Previous: Templates](17-templates.html) | [Next: Exception Handling →](19-exception-handling.html)

