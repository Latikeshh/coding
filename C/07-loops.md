# Loops in C

> 🟢 Beginner

## 📖 Definition

Loops (`for`, `while`, `do-while`) repeat C statements automatically as long as a control condition stays `true`.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `for` loops repeat fixed counts. `do-while` loops guarantee at least one execution before condition testing.
> - **Hindi:** `for` लूप निश्चित गिनती के लिए और `do-while` लूप कम से कम एक बार जरूर चलता है।
> - **Marathi:** `for` लूप गणनेसाठी आणि `do-while` लूप किमान एकदा नक्की चालतो.
> - **Hinglish:** Fixed iteration ke liye `for` loop aur post-condition check ke liye `do-while` loop use karte hain.

## 📝 Syntax

```c
#include <stdio.h>

int main(void) {
    // For loop
    for (int i = 1; i <= 3; i++) {
        printf("Count: %d\n", i);
    }

    // Do-while loop (Runs at least once)
    int count = 1;
    do {
        printf("Executing do-while\n");
    } while (count == 0);

    return 0;
}
```

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Conditionals](06-conditionals.md) | [Next: Functions →](08-functions.md)
