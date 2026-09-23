# Loops in JavaScript

> 🟢 Beginner

## 📖 Definition

**Loops** are used to repeat a block of code multiple times until a specified condition becomes `false`.

## 📝 Types of Loops

### 1. `for` Loop (Used when you know how many times to repeat)
```javascript
for (let i = 1; i <= 5; i++) {
  console.log("Iteration number:", i);
}
```

### 2. `while` Loop (Used when repeating until a condition changes)
```javascript
let count = 3;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}
```

## 💡 Practical Example

```javascript
// Printing even numbers from 2 to 10
for (let i = 2; i <= 10; i += 2) {
  console.log("Even number:", i);
}
```

## 👀 Output

```text
Even number: 2
Even number: 4
Even number: 6
Even number: 8
Even number: 10
```

## ⚠️ Common Mistakes

- Creating an **infinite loop** by forgetting to update the loop counter (e.g. forgetting `i++` or `count--`).

## 🧪 Try It Yourself

Write a `for` loop that prints the numbers from `1` to `10` in reverse order (`10` down to `1`).

## 🎯 Mini Challenge

Use a loop to print the 5 times table (`5`, `10`, `15`, ..., `50`).

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Conditionals](06-conditionals.md) | [Next: Functions →](08-functions.md)
