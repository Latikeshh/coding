# Arrays in C

> 🟡 Intermediate

## 📖 Definition

An **array** is a fixed-size sequence of elements of the **same data type** stored in contiguous memory locations.

## 📝 Syntax

```c
int numbers[5] = {10, 20, 30, 40, 50};

// Accessing element at index 0
printf("%d\n", numbers[0]); // 10
```

## 💡 Practical Example

```c
#include <stdio.h>

int main() {
    int scores[4] = {88, 95, 70, 84};
    int total = 0;

    for (int i = 0; i < 4; i++) {
        total += scores[i];
    }

    float average = (float)total / 4;
    printf("Total Score: %d\n", total);
    printf("Average Score: %.2f\n", average);

    return 0;
}
```

## 👀 Output

```text
Total Score: 337
Average Score: 84.25
```

## ⚠️ Common Mistakes

- Out-of-bounds access: Accessing an index outside `0` to `size - 1` (e.g. `scores[4]` when array size is `4`) causes undefined behavior or memory corruption!

## 🧪 Try It Yourself

Create an array of 5 integers and write a loop to print all elements in reverse order.

## 🎯 Mini Challenge

Write a program that finds the maximum value in an integer array.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Functions](08-functions.md) | [Next: Pointers Basics →](10-pointers-basics.md)
