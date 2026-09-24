# Operators in C++

> 🟢 Beginner

## 📖 Definition

Operators perform arithmetic calculations, relational comparisons, and logical checks (`&&`, `||`, `!`).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** C++ provides arithmetic (`+`, `-`, `*`, `/`), relational (`==`, `!=`), and logical (`&&`, `||`, `!`) operators.
> - **Hindi:** गणितीय गणना के लिए अरिथमेटिक और तुलना के लिए रिलेशनल एंव लॉजिकल ऑपरेटर यूज़ होते हैं।
> - **Marathi:** सी++ मधील ऑपरेटर गणिते आणि तुलना करण्यासाठी वापरतात.
> - **Hinglish:** Arithmetic math operations ke liye aur logical operators (`&&`, `||`) multiple conditions combine karne ke liye hote hain.

## 📝 Syntax

```cpp
#include <iostream>
using namespace std;

int main() {
    int x = 20, y = 6;
    cout << "Division: " << (x / y) << " | Remainder: " << (x % y) << endl;
    
    bool valid = (x > 10) && (y < 10);
    cout << "Check: " << (valid ? "Valid" : "Invalid") << endl;
    return 0;
}
```

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Input/Output](04-input-output.md) | [Next: Conditionals →](06-conditionals.md)
