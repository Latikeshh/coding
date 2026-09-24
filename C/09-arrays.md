# Arrays in C

> 🟡 Intermediate

## 📖 Definition

An array is a fixed-size sequence of elements of the same data type stored in contiguous memory. Accessing indices beyond array bounds causes undefined behavior.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Array elements sit in contiguous memory. Indexing starts at `0`. Never access out-of-bounds indices (`0` to `size - 1`).
> - **Hindi:** एरे मेमोरी में लगातार जगह लेता है। इंडेक्स `0` से शुरू होता है। बाउंड्स से बाहर एक्सेस करने पर सिस्टम क्रैश हो सकता है।
> - **Marathi:** एरेचे सर्व घटक सलग मेमरीत असतात. इंडेक्स `0` पासून सुरू होतो.
> - **Hinglish:** Array fixed-size contiguous memory blocks hote hain. Valid index range `0` se `size - 1` tak hi hoti hai.

## 📝 Syntax

```c
#include <stdio.h>

int main(void) {
    int scores[4] = {88, 95, 70, 84};
    int total = 0;

    for (int i = 0; i < 4; i++) {
        total += scores[i];
    }

    printf("Total: %d | Average: %.2f\n", total, (float)total / 4);
    return 0;
}
```

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Functions](08-functions.md) | [Next: Pointers Basics →](10-pointers-basics.md)
