# Lambdas & Function Objects

> 🔴 Advanced

## 📖 Definition

A **Lambda Expression** is an anonymous function defined inline inside local scope with a capture clause (`[capture](params) { body }`).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Lambdas `[capture](params) { body }` define inline anonymous functions. Capture local variables by value `[=]` or by reference `[&]`.
> - **Hindi:** लैम्ब्डा (`[capture](params) { body }`) एक इनलाइन अनाम (anonymous) फंक्शन है।
> - **Marathi:** लॅम्ब्डा द्वारे इनलाईन अनॉनिमस फंक्शन्स बनवता येतात.
> - **Hinglish:** STL algorithms mein custom logic pass karne ke liye lambdas `[](int x) { return x % 2 == 0; }` best hote hain.

## 📝 Syntax

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {1, 2, 3, 4, 5};
    int evens = count_if(v.begin(), v.end(), [](int x) { return x % 2 == 0; });
    cout << "Evens: " << evens << endl;
    return 0;
}
```

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Templates](17-templates.md) | [Next: Exception Handling →](19-exception-handling.md)
