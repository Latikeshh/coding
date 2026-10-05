---
layout: default
title: "21 namespaces and modern cpp"
---

# Namespaces, `auto`, `constexpr` & `std::optional` in Modern C++

> 🔴 Advanced

---

## 📖 Definition

Modern C++ (C++11 through C++20) introduced major productivity features to write cleaner, safer, and faster code:
1. **Namespaces (`namespace`)**: Prevent naming collisions by scoping functions and classes.
2. **Type Deduction (`auto`)**: Deduces variable types automatically at compile time.
3. **Compile-Time Constants (`constexpr`)**: Forces expression evaluation during compilation rather than runtime!
4. **Optional Values (`std::optional`)** (C++17): Represents a value that may or may not be present without resorting to `NULL` or error codes.

---

## 🇮🇳 Hindi Explanation

- **Namespaces**: Jab alag-alag libraries mein same naam ke functions hon (jaise do `display()` functions), toh collision se bachne ke liye `namespace Audio { void display(); }` aur `namespace Video { void display(); }` likhte hain.
- **`constexpr`**: Compiler ko kehta hai ki calculation runtime par karne ke bajaye program compile hone ke waqt hi kar le.
- **`std::optional`**: C++17 ka feature jo aisi value return karta hai jo ho bhi sakti hai aur nahi bhi (`std::nullopt`). Isse null pointer crashes nahi hote.

---

## 🚩 Marathi Explanation

- **Namespaces**: Name collisions taalnyasathi variables kiwa functions la eka scope madhye grouped karne.
- **`constexpr`**: Calculations compile-time laas poorna krun thevane, jyamule runtime vishwasane वेगwan (fast) hoto.
- **`std::optional`**: Value asu shakte kiwa nasu shakte (`nullopt`), jyamule null pointer crash hot nahit.

---

## 💡 Practical Example

```cpp
#include <iostream>
#include <string>
#include <optional> // C++17

// 1. Custom Namespaces
namespace AudioEngine {
    void init() {
        std::cout << "[AudioEngine] Speaker subsystem initialized." << std::endl;
    }
}

namespace GraphicsEngine {
    void init() {
        std::cout << "[GraphicsEngine] GPU DirectX/Vulkan subsystem initialized." << std::endl;
    }
}

// 2. Compile-time constant evaluation (C++11/C++14)
constexpr int calculateSquare(int x) {
    return x * x; // Evaluated at compile time!
}

// 3. Helper function returning std::optional (C++17)
std::optional<std::string> findUserById(int userId) {
    if (userId == 101) {
        return "Rahul Sharma";
    }
    return std::nullopt; // Indicates no user found safely!
}

int main() {
    std::cout << "--- 1. NAMESPACES DEMO ---" << std::endl;
    AudioEngine::init();
    GraphicsEngine::init();

    std::cout << "\n--- 2. CONSTEXPR DEMO ---" << std::endl;
    constexpr int sq = calculateSquare(12); // Computed by compiler!
    std::cout << "Compile-time calculated square of 12: " << sq << std::endl;

    std::cout << "\n--- 3. std::optional DEMO (C++17) ---" << std::endl;
    auto user1 = findUserById(101);
    auto user2 = findUserById(999);

    if (user1.has_value()) {
        std::cout << "User 101 Found: " << user1.value() << std::endl;
    }

    if (!user2) { // Evaluate directly as boolean
        std::cout << "User 999 Not Found (Returned std::nullopt safely)." << std::endl;
    }

    return 0;
}
```

---

## 🔍 Code Breakdown

- `AudioEngine::init()` vs `GraphicsEngine::init()`: Scope resolution operator `::` disambiguates identically named functions across different namespaces.
- `constexpr int sq`: Value `144` is computed at compile time by the compiler, incurring zero execution overhead at runtime!
- `std::nullopt`: Type-safe alternative to returning null pointers or magic error numbers (`-1`).

---

## 👀 Output

```text
--- 1. NAMESPACES DEMO ---
[AudioEngine] Speaker subsystem initialized.
[GraphicsEngine] GPU DirectX/Vulkan subsystem initialized.

--- 2. CONSTEXPR DEMO ---
Compile-time calculated square of 12: 144

--- 3. std::optional DEMO (C++17) ---
User 101 Found: Rahul Sharma
User 999 Not Found (Returned std::nullopt safely).
```

---

## ⚠️ Common Mistakes

- **Polluting Global Scope with `using namespace std;` in Header Files**:
  Writing `using namespace std;` in header files (`.h`) forces every file including that header to pull the entire `std` namespace into global scope, leading to unexpected name conflicts!
- **Accessing `std::optional` Without Checking `.has_value()`**:
  Calling `.value()` on an empty `std::optional` throws a `std::bad_optional_access` exception. Always verify `.has_value()` or `if (opt)` first.

---

## 🛡️ Best Practices

- Use `constexpr` for constants and pure mathematical lookup functions.
- Use `std::optional<T>` for functions where a lookup or search operation might fail gracefully.

---

## 🧪 Try It Yourself

1. Define a `MathPhysics` namespace containing a `constexpr double GRAVITY = 9.81;`.
2. Write a function `findFirstEvenNumber(const std::vector<int>& numbers)` that returns `std::optional<int>`.

---

## 🎯 Mini Challenge

Create a configuration manager that reads settings by key (e.g. `"theme"`, `"fontsize"`) and returns `std::optional<std::string>`. If key exists, print the value; otherwise print `"Setting Not Configured"`.

---

## 🔗 Related Topics

- [Functions in C++](08-functions.md)
- [Move Semantics](22-move-semantics.md)

---

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: File Streams](20-file-streams.md) | [Next: Move Semantics →](22-move-semantics.md)
