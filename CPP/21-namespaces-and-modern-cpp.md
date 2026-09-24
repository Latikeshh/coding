# Namespaces & Modern C++ (C++17 to C++20)

> 🔴 Advanced

## 📖 Definition

- **Namespaces:** Prevent global name collisions by scoping identifiers under named boundaries.
- **Modern C++ Library Types:** Standard types like `std::optional` (nullable values), `std::variant` (type-safe union), `std::tuple` (heterogeneous fixed-size collection), and `std::filesystem`.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Namespaces avoid name conflicts. Modern C++ provides `std::optional` (nullable value), `std::variant` (type-safe union), and `std::tuple`.
> - **Hindi:** नेमस्पेस से ग्लोबल नाम टकराने (collision) से बचते हैं। मॉडर्न C++ में `std::optional` और `std::variant` टाइप-सेफ डाटा हैंडलिंग प्रदान करते हैं।
> - **Marathi:** नेमस्पेसमुळे ग्लोबल नावांचे टक्करे टळतात. `std::optional` आणि `std::variant` टाइप-सेफ डाटा हाताळतात.
> - **Hinglish:** Namespaces name collision rokte hain. Modern C++ mein `std::optional` (optional return values) aur `std::variant` (type-safe union) use karte hain.

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

## 2. Key Modern C++ Features & Library Types

```cpp
#include <iostream>
#include <vector>
#include <tuple>
#include <optional>
#include <variant>
#include <string>

using namespace std;

// 1. Compile-time constants
constexpr int square(int x) { return x * x; }

// 2. Enum classes (Strongly typed enums)
enum class Status { SUCCESS, ERROR, PENDING };

// 3. std::optional (C++17)
optional<string> findUser(int id) {
    if (id == 1) return "Alice";
    return nullopt; // Represents absence of value
}

// 4. std::variant (C++17 Type-Safe Union)
using DataValue = variant<int, double, string>;

int main() {
    // Structured Bindings (C++17)
    auto [x, y, z] = make_tuple(10, 20.5, "Text");
    cout << "Tuple: " << x << ", " << y << ", " << z << endl;

    // std::optional usage
    auto user = findUser(1);
    if (user.has_value()) {
        cout << "Found: " << user.value() << endl;
    }

    // std::variant usage
    DataValue val = 100;
    val = "Type Safe String";
    cout << "Variant holds: " << get<string>(val) << endl;

    return 0;
}
```

---

## 🧪 Try It Yourself

Create a custom namespace `MathConstants` with `constexpr double PI = 3.14159265;`.

## 🎯 Mini Challenge

Use `std::variant<int, std::string>` to represent a function response that can return an integer error code or a success message string.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: File Streams](20-file-streams.md) | [Next: Move Semantics →](22-move-semantics.md)
