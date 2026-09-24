# Input and Output in C++

> 🟢 Beginner

## 📖 Definition

C++ manages stream I/O via `<iostream>`: `std::cout` (`<<` insertion) for output and `std::cin` (`>>` extraction) or `getline()` for input.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Output via `cout <<`. Input via `cin >>`. For multi-word text with spaces, use `getline(cin, str)`.
> - **Hindi:** आउटपुट के लिए `cout <<` और इनपुट के लिए `cin >>` का प्रयोग करें। स्पेस वाले सेंटेंस के लिए `getline()` यूज़ करें।
> - **Marathi:** आउटपुटसाठी `cout <<` आणि इनपुटसाठी `cin >>` वापरावे.
> - **Hinglish:** Console output ke liye `cout <<` aur input ke liye `cin >>` use karo. Full line text ke liye `getline(cin, string)` use hota hai.

## 📝 Syntax

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string fullName;
    cout << "Enter full name: ";
    getline(cin, fullName); // Reads full line including spaces

    cout << "Hello, " << fullName << "!" << endl;
    return 0;
}
```

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Variables](03-variables-and-data-types.md) | [Next: Operators →](05-operators.md)
