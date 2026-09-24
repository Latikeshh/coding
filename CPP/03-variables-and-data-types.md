# Variables and Primitive Data Types in C++

> 🟢 Beginner

## 📖 Definition

Variables store typed values in computer memory. C++ is statically and strongly typed (`int`, `float`, `double`, `bool`, `char`, `std::string`).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Declare C++ variables with explicit data types (`int`, `double`, `bool`, `std::string`). Include `<string>` for strings.
> - **Hindi:** C++ में वेरिएबल का डेटा टाइप (`int`, `double`, `string`) लिखना ज़रूरी है। स्ट्रिंग के लिए `<string>` शामिल करें।
> - **Marathi:** C++ मध्ये प्रत्येक व्हॅरियबलचा प्रकार आधीच डिक्लेअर करावा लागतो.
> - **Hinglish:** C++ statically typed language hai. Strings ke liye `#include <string>` aur `std::string` use hota hai.

## 📝 Syntax & Example

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string playerName = "Aria";
    int score = 250;
    double health = 98.5;
    bool isAlive = true;

    cout << "Player: " << playerName << " | Score: " << score << endl;
    return 0;
}
```

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Introduction](02-introduction-to-cpp.md) | [Next: Input & Output →](04-input-output.md)
