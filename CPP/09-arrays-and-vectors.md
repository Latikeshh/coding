# Arrays & Dynamic Vectors (`std::vector`)

> 🟡 Intermediate

## 📖 Definition

While fixed C-style arrays have compile-time sizes, `std::vector` is a dynamic C++ STL container that resizes automatically at runtime.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `std::vector` provides dynamic resizable arrays (`.push_back()`, `.size()`). Use `.at(i)` for bounds-checked access.
> - **Hindi:** `std::vector` एक डायनामिक एरे है जो रनटाइम पर अपने आप बड़ा या छोटा होता है। एलिमेंट जोड़ने के लिए `.push_back()` यूज़ करें।
> - **Marathi:** `std::vector` हा रनटाईमवर आकार बदलणारा डायनामिक एरे आहे.
> - **Hinglish:** Dynamic size collections ke liye `std::vector` prefer karo. Items add karne ke liye `.push_back(val)` aur safe index access ke liye `.at(i)` use hota hai.

## 📝 Syntax

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> scores = {80, 90};
    scores.push_back(95); // Dynamic append

    for (size_t i = 0; i < scores.size(); i++) {
        cout << scores.at(i) << " "; // Bounds-checked access
    }
    cout << endl;
    return 0;
}
```

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Functions](08-functions.md) | [Next: Classes & OOP →](10-classes-and-oops.md)
