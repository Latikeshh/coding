# Functions in JavaScript

> 🟢 Beginner

## 📖 Definition

A **function** is a reusable block of code designed to perform a specific task when called.

## 🤔 Why Do We Use Them?

Functions prevent code duplication (**DRY principle:** Don't Repeat Yourself). You write the logic once and call it whenever needed.

## 📝 Syntax

### Standard Function Declaration
```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

// Function call / execution
let message = greet("Sarah");
console.log(message);
```

### Arrow Function (Modern ES6 syntax)
```javascript
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 7)); // 12
```

## 💡 Practical Example

```javascript
function calculateTotal(price, taxRate = 0.05) {
  let tax = price * taxRate;
  return price + tax;
}

let laptopTotal = calculateTotal(1000, 0.10);
console.log("Total Price:", laptopTotal);
```

## 👀 Output

```text
Total Price: 1100
```

## ⚠️ Common Mistakes

- Forgetting to `return` a value when you need the result outside the function (functions return `undefined` by default without a `return` statement).

## 🧪 Try It Yourself

Write a function `square(number)` that returns the square of any number passed to it.

## 🎯 Mini Challenge

Write a function `isEven(num)` that returns `true` if a number is even and `false` if it is odd.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Loops](07-loops.md) | [Next: Arrays →](09-arrays.md)
