# Variables and Data Types in C

> 🟢 Beginner

## 📖 Definition

In C, variables are typed locations in computer memory used to store data values. C is a statically typed language; variable types must be declared at compile time.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Every variable in C must be declared with a data type (`int`, `float`, `double`, `char`). Use format specifiers (`%d`, `%f`, `%c`) in `printf`.
> - **Hindi:** सी भाषा में हर वेरिएबल का डेटा टाइप लिखना ज़रूरी होता है। आउटपुट के लिए फॉर्मेट स्पेसिफायर (`%d`, `%f`, `%c`) का इस्तेमाल होता है।
> - **Marathi:** C मध्ये प्रत्येक व्हॅरियबलचा डेटा टाईप ठरवणे आवश्यक असते. आउटपुटसाठी फॉरमॅट स्पेसिफायर्स वापरतात.
> - **Hinglish:** C mein har variable ka data type declare karna padta hai. `printf` ke saath format specifiers (`%d`, `%f`, `%c`) match karne chahiye.

## 📝 Primitive Data Types (ISO C Standard)

| Data Type | Keyword | Typical Size | Format Specifier | Range / Example |
|---|---|---|---|---|
| Integer | `int` | 4 bytes | `%d` or `%i` | `-2,147,483,648` to `2,147,483,647` |
| Floating point | `float` | 4 bytes | `%f` | `3.14159f` (6 decimal precision) |
| Double precision | `double` | 8 bytes | `%lf` | `99.9999` (15 decimal precision) |
| Character | `char` | 1 byte | `%c` | `'A'` (Stores ASCII integer value) |

## 💡 Practical Example

```c
#include <stdio.h>

int main(void) {
    int age = 21;
    float gpa = 3.8f;
    double exactValue = 99.999999;
    char grade = 'A';

    printf("Age: %d\n", age);
    printf("GPA: %.1f\n", gpa);
    printf("Exact: %.6lf\n", exactValue);
    printf("Grade: %c (ASCII code: %d)\n", grade, grade);

    return 0;
}
```

## 👀 Output

```text
Age: 21
GPA: 3.8
Exact: 99.999999
Grade: A (ASCII code: 65)
```

## ⚠️ Common Mistakes

- Using wrong format specifiers in `printf` (e.g. `%d` for a `float` instead of `%f`).
- Using double quotes `"` for single characters instead of single quotes `'` (e.g. `char c = "A";` stores a pointer, not a `char`!).

## 🧪 Try It Yourself

Declare an `int` for `birthYear` and a `double` for `height` in meters. Print both formatted cleanly.

## 🎯 Mini Challenge

Calculate the perimeter of a rectangle with `length = 12` and `width = 5` using `int` variables and print the result.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Introduction](02-introduction-to-c.md) | [Next: Input & Output →](04-input-output.md)
