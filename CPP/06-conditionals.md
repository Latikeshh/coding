# Conditionals in C++

> 🟢 Beginner

## 📖 Definition

Conditional statements (`if`, `else if`, `else`, `switch`) route program execution flow based on boolean expressions.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `if...else` statements execute code blocks based on conditions. Always include `break` in `switch` cases.
> - **Hindi:** डिसीजन मेकिंग के लिए `if...else` का प्रयोग करें। `switch` स्टेटमेंट में हर केस में `break` लगाना न भूलें।
> - **Marathi:** अटींनुसार कोड चालवण्यासाठी `if...else` वापरले जाते.
> - **Hinglish:** Conditionals execution path decide karte hain. `switch` statement cases ke end par `break;` na bhoolen.

## 📝 Syntax

```cpp
#include <iostream>
using namespace std;

int main() {
    int score = 85;
    if (score >= 90) cout << "A+" << endl;
    else if (score >= 75) cout << "B" << endl;
    else cout << "C" << endl;
    return 0;
}
```

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Operators](05-operators.md) | [Next: Loops →](07-loops.md)
