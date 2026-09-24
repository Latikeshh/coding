# Loops in C

> 🟢 Beginner

## 📖 Definition

A **loop** repeatedly executes a block of C code as long as a specified control condition evaluates to **true** (non-zero). C provides three loop constructs: `for`, `while`, and `do-while`.

## 🌐 Multilingual Explanation

### English
Loops automate repetitive execution in C. Use `for` loops when the exact number of iterations is known in advance. Use `while` loops when looping depends on a dynamic condition. Use `do-while` loops when the code block must run at least once before checking the condition.

### Hindi
Repeated task ko automate karne ke liye C mein loops ka use hota hai. Jab iteration count pehle se pata ho toh `for` loop use karein. Jab condition ke aadhar par repeat karna ho toh `while` loop use karein. Code ko kam se kam ek baar chalane ke liye `do-while` loop ka upyog kiya jata hai.

### Marathi
Ekach gosht punha punha karanyasathi C madhye loops vaparale jatat. Jevha iterations chi sankhya mahit aste tevha `for` loop vaparatat. Condition varti avalambun aslyas `while` loop vaparatat. Code kamiat kami ekda chalavanyasathi `do-while` loop vaparatat.

### Hinglish
Iteration count fixed ho toh `for` loop best hai. Condition-based iteration ke liye `while` loop use hota hai. `do-while` loop post-condition check karta hai, isliye body kam se kam ek baar guaranteed execute hoti hai. `break` loop terminate karta hai aur `continue` current iteration skip karta hai.

## 🤔 Why Do We Use Them?

Writing repetitive code manually (like printing 100 invoice records or reading 1000 sensor readings) is inefficient and error-prone. Loops allow a few lines of code to process millions of records in milliseconds.

## 🧠 Simple Explanation

- **`for` loop:** "Run this code exactly 10 times."
- **`while` loop:** "Keep running this code as long as the battery is above 5%."
- **`do-while` loop:** "Ask the user for password first, then check if it's correct. Repeat if wrong."

## 📝 Loop Constructs & Syntax

### 1. `for` Loop
Best when counter limits are known:
```c
for (initialization; condition; increment/decrement) {
    // Code block executed repeatedly
}
```

### 2. `while` Loop (Pre-test Loop)
Evaluates condition **before** entering loop body:
```c
while (condition) {
    // Code block
    // Must modify loop control variable to avoid infinite loop!
}
```

### 3. `do-while` Loop (Post-test Loop)
Executes loop body **first**, then evaluates condition at the bottom (guarantees at least 1 execution):
```c
do {
    // Code block executed at least once
} while (condition);
```

## 💡 Practical Example

Here is a practical inventory processing script that demonstrates all three loop types, along with `break` and `continue`:

```c
#include <stdio.h>

int main(void) {
    // 1. FOR LOOP: Processing monthly inventory additions
    printf("--- 1. FOR LOOP: Monthly Inventory Summary ---\n");
    int weeklyStock[] = {120, 85, 0, 140}; // 0 indicates out-of-stock week
    int totalStock = 0;

    for (int week = 0; week < 4; week++) {
        if (weeklyStock[week] == 0) {
            printf("Week %d: Out of stock! Skipping calculation.\n", week + 1);
            continue; // Skip rest of current iteration
        }
        totalStock += weeklyStock[week];
        printf("Week %d: Stock Added = %d | Running Total = %d\n", week + 1, weeklyStock[week], totalStock);
    }

    // 2. WHILE LOOP: ATM Retry Attempts
    printf("\n--- 2. WHILE LOOP: User PIN Verification ---\n");
    int attempts = 0;
    int maxAttempts = 3;
    int enteredPin = 1234; // Simulated user PIN entry
    int correctPin = 9999;

    while (attempts < maxAttempts) {
        attempts++;
        printf("Attempt %d of %d: Testing PIN %d...\n", attempts, maxAttempts, enteredPin);
        
        if (enteredPin == correctPin) {
            printf("PIN Correct! Access granted.\n");
            break; // Exit loop immediately
        } else {
            printf("Incorrect PIN!\n");
        }
    }
    if (attempts == maxAttempts) {
        printf("Card Locked due to 3 failed attempts.\n");
    }

    // 3. DO-WHILE LOOP: Menu Loop (Runs at least once)
    printf("\n--- 3. DO-WHILE LOOP: User Confirmation ---\n");
    int userChoice = 0; // 0 = Exit
    int loopCount = 0;

    do {
        loopCount++;
        printf("Displaying Interactive Menu (Iteration %d)\n", loopCount);
        // Menu choice updated to 0 to simulate user exiting
        userChoice = 0; 
    } while (userChoice != 0);

    printf("Exited Menu Loop successfully.\n");

    return 0;
}
```

## 🔍 Code Breakdown

- `continue`: Skips remaining statements in the current iteration of the `for` loop and immediately moves to the next week increment (`week++`).
- `break`: Forces an immediate exit from the `while` loop when a specific condition (e.g. correct PIN entered or card locked) is met.
- `do { ... } while (userChoice != 0);`: Guarantees that the menu displays at least once even though `userChoice` starts at `0`.

## 👀 Output

```text
--- 1. FOR LOOP: Monthly Inventory Summary ---
Week 1: Stock Added = 120 | Running Total = 120
Week 2: Stock Added = 85 | Running Total = 205
Week 3: Out of stock! Skipping calculation.
Week 4: Stock Added = 140 | Running Total = 345

--- 2. WHILE LOOP: User PIN Verification ---
Attempt 1 of 3: Testing PIN 1234...
Incorrect PIN!
Attempt 2 of 3: Testing PIN 1234...
Incorrect PIN!
Attempt 3 of 3: Testing PIN 1234...
Incorrect PIN!
Card Locked due to 3 failed attempts.

--- 3. DO-WHILE LOOP: User Confirmation ---
Displaying Interactive Menu (Iteration 1)
Exited Menu Loop successfully.
```

## ⚠️ Common Mistakes

- **Infinite Loops:** Forgetting to update the loop control variable inside a `while` loop (e.g. forgetting `i++`) causes the loop to run forever, freezing the CPU or terminal.
- **Off-By-One Errors:** Loop boundary errors like using `<= size` instead of `< size` when iterating over array elements starting at index `0`.
- **Accidental Semicolon After Loop Header:** Writing `for (int i = 0; i < 10; i++);` puts an empty statement in the loop body. The code inside `{ ... }` executes only *once* after the loop completes!

## 🛡️ Safety / Important Notes

- Always ensure that every loop has a clear, reachable termination condition.
- When nesting loops (e.g. outer loop running 1,000 times, inner loop running 1,000 times), total executions equal `1,000 * 1,000 = 1,000,000`. Mind the computational complexity ($O(N^2)$)!

## 🌍 Real-World Usage

Loops iterate through database records, process pixels in image processing filters, handle game engine render loops (`while (!quit)`), and process hardware network packets.

## 🧪 Try It Yourself

1. Write a `for` loop that prints all even numbers from `2` to `20`.
2. Write a `while` loop that calculates the factorial of a number `N` (`e.g. 5! = 5 * 4 * 3 * 2 * 1 = 120`).

## 🎯 Mini Challenge

Write a program using nested `for` loops to print a multiplication table grid for numbers `1` through `5` formatted cleanly in columns using `\t`.

## 🔗 Related Topics

- [Conditionals](06-conditionals.md)
- [Functions](08-functions.md)
- [Arrays](09-arrays.md)

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Conditionals](06-conditionals.md) | [Next: Functions →](08-functions.md)
