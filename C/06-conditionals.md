# Conditionals in C

> 🟢 Beginner

## 📖 Definition

Conditional statements (`if`, `else if`, `else`, `switch`) evaluate logical expressions to determine execution branches.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Use `if (x == 10)` for comparison. Do not confuse assignment `=` with comparison `==`.
> - **Hindi:** शर्त चेक करने के लिए `if (x == 10)` का इस्तेमाल करें। गलत असाइनमेंट `if (x = 10)` से बचें।
> - **Marathi:** तुलना करण्यासाठी `==` वापरतात. `=` वापरल्यास व्हॅल्यू असाईन होते.
> - **Hinglish:** Comparison ke liye `==` use karo. `if (x = 10)` likhne par value assign ho jaati hai aur condition always `true` ho jaati hai.

## 📝 Syntax

```c
#include <stdio.h>

int main(void) {
    int score = 82;

    if (score >= 90) {
        printf("Grade: A+\n");
    } else if (score >= 75) {
        printf("Grade: B\n");
    } else {
        printf("Grade: C\n");
    }

    return 0;
}
```

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Operators](05-operators.md) | [Next: Loops →](07-loops.md)
