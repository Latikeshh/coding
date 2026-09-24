# Functions in C

> 🟢 Beginner

## 📖 Definition

Functions break programs into modular, reusable procedures. Declare function prototypes at the top of the file before calling them in `main()`.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Declare function prototypes at top of file so the compiler recognizes parameters and return types before execution.
> - **Hindi:** फंक्शन को `main()` से पहले डिक्लेयर (प्रोटोटाइप) करना चाहिए ताकि कंपाइलर को उसका रिटर्न टाइप पता रहे।
> - **Marathi:** फंक्शन वापरण्यापूर्वी त्याचे प्रोटोटाइप डिक्लेअर करणे आवश्यक आहे.
> - **Hinglish:** Compiler errors se bachne ke liye `main()` ke upar Function Prototypes (`return_type name(params);`) declare karo.

## 📝 Syntax

```c
#include <stdio.h>

// Function Prototype Declaration
int addNumbers(int x, int y);

int main(void) {
    int sum = addNumbers(12, 28);
    printf("Sum: %d\n", sum);
    return 0;
}

// Function Definition
int addNumbers(int x, int y) {
    return x + y;
}
```

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Loops](07-loops.md) | [Next: Arrays →](09-arrays.md)
