# Loops & Range-Based For in C++

> 🟢 Beginner

## 📖 Definition

Loops repeat C++ statements automatically. Modern C++ (C++11+) includes **Range-Based `for` Loops** for easy container iteration.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Use standard `for`/`while` loops or modern C++ Range-Based `for (auto item : container)` for clean collection iteration.
> - **Hindi:** मॉडर्न C++ में एरे और वेक्टर्स को आसानी से पढ़ने के लिए रेंज-बेस्ड फॉर लूप `for (auto x : vec)` का प्रयोग करें।
> - **Marathi:** मॉडर्न C++ मधील रेंज-बेस्ड फॉर लूपमुळे एरे आणि व्हेक्टर्स वाचणे सोपे जाते.
> - **Hinglish:** Range-based `for` loop `for (const auto &item : vec)` se vectors aur arrays easily iterate hote hain.

## 📝 Syntax

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> nums = {10, 20, 30};

    // Range-based for loop
    for (int n : nums) {
        cout << "Item: " << n << endl;
    }
    return 0;
}
```

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Conditionals](06-conditionals.md) | [Next: Functions →](08-functions.md)
