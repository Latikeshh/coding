# Functions in JavaScript

> 🟢 Beginner

## 📖 Definition

A **function** is a reusable block of code designed to perform a specific task. Functions take inputs called **parameters**, process logic, and send back a output using the `return` statement.

## 🇮🇳 Hindi

Function code ka ek reusable block hota hai jo specific kaam karta hai. Logics ko functions mein wrap karne se code duplication nahi hoti (**DRY Principle:** Don't Repeat Yourself).

## 🚩 Marathi

Function mhanje पुन्हा-पुन्हा (reusable) वापरता येणारा कोड ब्लॉक. Inputs ghenyasathi parameters ahet aani result parat dhenyasathi `return` cha wapar kela jato.

## 🤔 Why Do We Use Them?

Without functions, you would have to write the same calculations or logic repeatedly across your project. Functions make code clean, modular, testable, and maintainable.

## 📝 Function Syntaxes

### 1. Function Declaration (Hoisted)
```javascript
function calculateArea(width, height) {
  return width * height;
}

let area = calculateArea(10, 5); // 50
```

### 2. Function Expression (Not Hoisted)
```javascript
const greetUser = function(name) {
  return `Welcome, ${name}!`;
};
```

### 3. Arrow Function (Modern ES6 Concise Syntax)
```javascript
// Arrow function with implicit return for single expressions
const multiply = (a, b) => a * b;

console.log(multiply(4, 6)); // 24
```

### 4. Default & Rest Parameters (`...args`)
```javascript
// Default parameter value (taxRate = 0.05)
function calculateTotal(price, taxRate = 0.05) {
  return price + (price * taxRate);
}

// Rest parameters bundle multiple arguments into an array
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(10, 20, 30, 40)); // 100
```

## 💡 Complete Example

```javascript
function generateInvoice(customerName, itemsCount, pricePerItem, discountRate = 0) {
  let subtotal = itemsCount * pricePerItem;
  let discountAmount = subtotal * (discountRate / 100);
  let finalPrice = subtotal - discountAmount;

  return {
    customer: customerName,
    subtotal: subtotal,
    discount: discountAmount,
    total: finalPrice
  };
}

let invoice = generateInvoice("Priya Sharma", 3, 500, 10);
console.log("Invoice Summary:", invoice);
```

## 👀 Output

```text
Invoice Summary: { customer: 'Priya Sharma', subtotal: 1500, discount: 150, total: 1350 }
```

## 🧪 Try It Yourself

1. Write a function `isAdult(age)` that returns `true` if age is 18 or above, otherwise `false`.
2. Convert it into a single-line Arrow function.

## ⚠️ Common Mistakes

- Forgetting the `return` keyword: Functions without a `return` statement evaluate to `undefined` by default!
- Confusing parameters (variables defined in function header) with arguments (actual values passed during execution).

## 🌍 Real-World Usage

Event handlers, API fetching methods, score calculators, string formatters, and authentication utilities.

## 💡 Remember

Keep functions focused on a single responsibility. Master Arrow functions as they are widely used in modern JavaScript frameworks.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Loops](07-loops.md) | [Next: Arrays →](09-arrays.md)
