---
layout: default
title: "07 loops"
---

# Loops & Iteration in C++ (`for`, `while`, `do-while`, Range-based `for`)

> 🟢 Beginner

---

## 📖 Definition

**Loops** allow a block of C++ statements to execute repeatedly as long as a specified condition remains `true`. C++ supports four primary loop structures:
1. `for` Loop: Best when the number of iterations is known in advance.
2. `while` Loop: Best when iterating based on a condition until it becomes false.
3. `do-while` Loop: Guarantees execution at least **once** before checking the condition.
4. **Range-based `for` Loop** (C++11): Cleanly iterates over containers like `std::vector` and arrays.

---

## 🇮🇳 Hindi Explanation

Loop ka use ek hi code block ko baar-baar repeat karne ke liye hota hai. 
- `for` loop tab use hota hai jab pata ho ki loop kitni baar chalana hai (e.g. 1 se 10 tak).
- `while` loop pehle condition check karta hai, fir andar ka code chalata hai.
- `do-while` loop kam se kam ek baar zaroor chalta hai, chahe condition shuru mein hi false ho.
- **Range-based `for` loop** C++11 ka modern feature hai jo array ya vector ke har element par aasani se iterate karta hai.

---

## 🚩 Marathi Explanation

Loop mule aapan ekapeksha jast vela ekach code block punha punha run karu shakto.
- `for` loop: Iteration chi sankhya mahit aslyas.
- `while` loop: Condition true ahe tovar.
- `do-while` loop: Shart (condition) magun tapasli jate, mhanun ha loop kamit kami eka vela nakkich chaltos.
- Range-based `for` (C++11): Vector kiwa array madhil sarva elements varun iterate karnyasathi.

---

## 📝 Syntax Comparison

```cpp
// 1. Standard for Loop
for (int i = 0; i < 5; i++) { /* Statements */ }

// 2. while Loop
int j = 0;
while (j < 5) { /* Statements */ j++; }

// 3. do-while Loop
int k = 0;
do { /* Statements */ k++; } while (k < 5);

// 4. Range-based for Loop (C++11)
int numbers[] = {10, 20, 30};
for (int val : numbers) { /* Statements */ }
```

---

## 💡 Practical Example

```cpp
#include <iostream>
#include <vector>

int main() {
    // 1. Standard for Loop
    std::cout << "--- 1. STANDARD FOR LOOP (1 to 5) ---" << std::endl;
    for (int i = 1; i <= 5; i++) {
        std::cout << "Iteration Count: " << i << std::endl;
    }

    // 2. while Loop (Countdown)
    std::cout << "\n--- 2. WHILE LOOP (Countdown) ---" << std::endl;
    int count = 3;
    while (count > 0) {
        std::cout << "Countdown: " << count << "..." << std::endl;
        count--;
    }
    std::cout << "Blastoff! 🚀" << std::endl;

    // 3. do-while Loop (Guaranteed At Least 1 Run)
    std::cout << "\n--- 3. DO-WHILE LOOP ---" << std::endl;
    int choice = 0;
    do {
        std::cout << "Executed choice = " << choice << " (Condition checked after execution)" << std::endl;
        choice++;
    } while (choice < 1);

    // 4. Range-based for Loop (C++11)
    std::cout << "\n--- 4. RANGE-BASED FOR LOOP ---" << std::endl;
    std::vector<std::string> fruits = {"Apple", "Banana", "Cherry", "Mango"};
    for (const std::string& fruit : fruits) {
        std::cout << "Fruit Item: " << fruit << std::endl;
    }

    return 0;
}
```

---

## 🔍 Code Breakdown

- `for (int i = 1; i <= 5; i++)`: Initializes `i = 1`, checks `i <= 5`, runs body, then increments `i++`.
- `const std::string& fruit`: Range-based for loop uses a `const` reference (`&`) to avoid copying strings in memory during iteration.

---

## 👀 Output

```text
--- 1. STANDARD FOR LOOP (1 to 5) ---
Iteration Count: 1
Iteration Count: 2
Iteration Count: 3
Iteration Count: 4
Iteration Count: 5

--- 2. WHILE LOOP (Countdown) ---
Countdown: 3...
Countdown: 2...
Countdown: 1...
Blastoff! 🚀

--- 3. DO-WHILE LOOP ---
Executed choice = 0 (Condition checked after execution)

--- 4. RANGE-BASED FOR LOOP ---
Fruit Item: Apple
Fruit Item: Banana
Fruit Item: Cherry
Fruit Item: Mango
```

---

## ⚠️ Common Mistakes & Infinite Loops

- **Infinite Loop Bug**: Forgetting to update loop variables (`count--` or `i++`) causes the condition to remain `true` forever, freezing terminal execution!
- **Off-By-One Errors**: Writing `i <= 5` when `i < 5` was intended, leading to 1 extra iteration.
- **Modifying Range-based `for` Targets Without Reference**:
  Writing `for (int x : vec) x *= 2;` modifies the local copy `x`, NOT the vector elements! Write `for (int& x : vec) x *= 2;` (with reference `&`) to modify vector elements directly.

---

## 🛡️ Best Practices

- Prefer Range-based `for` loops when reading or modifying C++ containers like `std::vector`.
- Use `break` to exit loops early and `continue` to skip the remainder of the current iteration.

---

## 🧪 Try It Yourself

1. Print all Even numbers between 1 and 20 using a `for` loop.
2. Calculate the factorial of 5 ($5! = 5 \times 4 \times 3 \times 2 \times 1 = 120$) using a `while` loop.

---

## 🎯 Mini Challenge

Write a program that uses a loop to prompt the user to guess a secret passcode number (e.g. `1234`). Keep looping until the user enters the correct passcode!

---

## 🔗 Related Topics

- [Conditionals in C++](06-conditionals.md)
- [Arrays & Vectors](09-arrays-and-vectors.md)

---

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Conditionals](06-conditionals.md) | [Next: Functions →](08-functions.md)
