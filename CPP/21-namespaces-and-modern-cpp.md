# Namespaces & Modern C++ (C++11 to C++20)

> 🔴 Advanced

## 📖 Definition

- **Namespaces:** Prevent global name collisions by scoping identifiers under named boundaries.
- **Modern C++ Features:** Syntax additions from C++11, C++14, C++17, and C++20 that improve type safety, performance, and readability.

---

## 1. Custom Namespaces

```cpp
#include <iostream>

namespace AudioEngine {
    void init() { std::cout << "Audio initialized" << std::endl; }
}

namespace PhysicsEngine {
    void init() { std::cout << "Physics initialized" << std::endl; }
}

int main() {
    AudioEngine::init();
    PhysicsEngine::init();
    return 0;
}
```

---

## 2. Key Modern C++ Features

```cpp
#include <iostream>
#include <vector>
#include <tuple>
#include <optional>
using namespace std;

// 1. Compile-time constants
constexpr int square(int x) { return x * x; }

// 2. Enum classes (Strongly typed enums)
enum class Status { SUCCESS, ERROR, PENDING };

// 3. std::optional (C++17) for optional returns
optional<string> findUser(int id) {
    if (id == 1) return "Alice";
    return nullopt; // Represents absence of value
}

int main() {
    // 4. Structured Bindings (C++17)
    auto [x, y, z] = make_tuple(10, 20.5, "Text");
    cout << "Tuple: " << x << ", " << y << ", " << z << endl;

    // 5. std::optional usage
    auto user = findUser(1);
    if (user.has_value()) {
        cout << "Found: " << user.value() << endl;
    }

    return 0;
}
```

---

## 🧪 Try It Yourself

Create a custom namespace `MathConstants` with `constexpr double PI = 3.14159265;`.

## 🎯 Mini Challenge

Use `enum class Color { RED, GREEN, BLUE };` inside a `switch` statement with static casting.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: File Streams](20-file-streams.md) | [Next: Move Semantics →](22-move-semantics.md)
