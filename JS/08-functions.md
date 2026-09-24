# Functions in JavaScript

> 🟢 Beginner

## 📖 Definition

A **function** is a reusable block of code designed to perform a specific task when invoked.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Functions group logic into reusable blocks. Use parameters for input and `return` to send a result back.
> - **Hindi:** फंक्शन कोड को री-यूज़ करने योग्य बनाता है। यह इनपुट (parameters) लेता है और `return` से रिजल्ट वापस देता है।
> - **Marathi:** फंक्शनमुळे कोड पुन्हा वापरता येतो. ते इनपुट घेऊन `return` द्वारे उत्तर परत करते.
> - **Hinglish:** Function reusable code blocks hote hain. Code duplication se bachne ke liye logic ko functions mein wrap karo.

## 🤔 Why Do We Use Them?

Functions prevent code duplication (**DRY principle:** Don't Repeat Yourself). You write the logic once and execute it whenever needed.

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

- Forgetting to `return` a value when you need the calculated result outside the function (functions return `undefined` by default without a `return` statement).

## 🧪 Try It Yourself

Write a function `square(number)` that returns the square of any number passed to it.

## 🎯 Mini Challenge

Write a function `isEven(num)` that returns `true` if a number is even and `false` if it is odd.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Loops](07-loops.md) | [Next: Arrays →](09-arrays.md)
