# Input and Output in C

> 🟢 Beginner

## 📖 Definition

Input and output (I/O) functions enable programs to interact with users and shell streams via standard libraries (`<stdio.h>`).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `printf` outputs formatted data to terminal. `scanf` reads formatted input and requires the address-of operator `&`. Use `fgets` for strings with spaces.
> - **Hindi:** `printf` आउटपुट देता है और `scanf` यूज़र इनपुट पढ़ता है। `scanf` में वेरिएबल के साथ `&` लगाना जरूरी होता है।
> - **Marathi:** `printf` टर्मिनलवर प्रिंट करते आणि `scanf` इनपुट वाचते. `scanf` वापरताना `&` आवश्यक आहे.
> - **Hinglish:** `printf` terminal output ke liye hai aur `scanf` user input padhta hai. `scanf` mein `&` miss mat karo.

## 📝 Reading Input with `scanf()` and `fgets()`

- `scanf("%d", &variable)` reads formatted numbers/characters. The `&` (address-of) operator tells `scanf` where in memory to store the entered value.
- For strings containing spaces, prefer `fgets(buffer, sizeof(buffer), stdin)` over `scanf("%s", buffer)` to prevent buffer overflows!

## 💡 Practical Example

```c
#include <stdio.h>

int main(void) {
    int age;
    float score;

    printf("Enter your age: ");
    if (scanf("%d", &age) != 1) {
        printf("Invalid age input!\n");
        return 1;
    }

    printf("Enter your score: ");
    if (scanf("%f", &score) != 1) {
        printf("Invalid score input!\n");
        return 1;
    }

    printf("\n--- Summary ---\n");
    printf("Age: %d | Score: %.2f\n", age, score);

    return 0;
}
```

## 👀 Output

```text
Enter your age: 24
Enter your score: 88.5

--- Summary ---
Age: 24 | Score: 88.50
```

## ⚠️ Common Mistakes

- Forgetting the address-of operator `&` in `scanf("%d", &age)`. This attempts to write to an uninitialized address and causes segmentation fault crashes!
- Using `scanf("%s", str)` for strings without bounds limits, leading to security buffer overflows. Use `fgets()` instead.

## 🧪 Try It Yourself

Write a program that asks the user for two integers, adds them together, and prints the total sum.

## 🎯 Mini Challenge

Ask the user to enter temperature in Celsius and convert it to Fahrenheit using `(Celsius * 9/5) + 32`.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Variables](03-variables-and-data-types.md) | [Next: Operators →](05-operators.md)
