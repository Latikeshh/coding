# Operators in C

> 🟢 Beginner

## 📖 Definition

Operators perform mathematical calculations, relational comparisons, and logical checks. In C, integer division (`int / int`) truncates decimal values.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Dividing two integers produces an integer (truncates decimal). Cast to `float` or `double` for decimal division (`(float)a / b`).
> - **Hindi:** दो इंटीजर को भाग देने पर दशमलव का हिस्सा हट जाता है। सही भागफल के लिए `(float)a / b` में कास्ट करें।
> - **Marathi:** दोन इंटीजर्सचा भागाकार इंटीजरच मिळतो. दशांश उत्तरासाठी टाइप कास्टिंग वापरतात.
> - **Hinglish:** Integer division (`5 / 2 = 2`) decimal part truncate kar deta hai. Decimal output ke liye `(float)5 / 2` cast karo.

## 📝 Syntax & Examples

```c
#include <stdio.h>

int main(void) {
    int a = 15, b = 4;

    printf("Sum: %d\n", a + b);               // 19
    printf("Integer Division: %d\n", a / b);    // 3 (Truncates .75!)
    printf("Decimal Division: %.2f\n", (float)a / b); // 3.75 (Casted)
    printf("Remainder: %d\n", a % b);          // 3 (Modulus)

    return 0;
}
```

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Input/Output](04-input-output.md) | [Next: Conditionals →](06-conditionals.md)
