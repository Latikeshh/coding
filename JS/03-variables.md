# Variables in JavaScript (`let`, `const`, `var`)

> 🟢 Beginner

## 📖 Definition

A **variable** is a named container in computer memory used to store data values. In JavaScript, variables are declared using `const`, `let`, or the legacy keyword `var`.

## 🇮🇳 Hindi

Variable memory mein ek named box ki tarah hota hai jisme hum data store karte hain taaki usko pooray program mein dobara use ya update kar sakein. Modern JavaScript mein constant values ke liye `const` aur changeable values ke liye `let` use kiya jata hai.

## 🚩 Marathi

Variable mhanje memory madhye data store karnya sathi dilele naav. Unchanging values sathi `const` aani badalnaraya values sathi `let` cha wapar kela jato. Legacy `var` cha wapar aajkal kela jaat nahi.

## 🤔 Why Do We Use Them?

Instead of hardcoding values like user names, prices, or calculations multiple times in code, you store them in descriptive variables. This makes code clean, maintainable, and reusable.

## 🧠 Simple Explanation

Think of a variable as a labeled container in your kitchen. The label is the variable name (e.g., `userScore`), and what you put inside is the value (e.g., `100`).

## 📝 Syntax & Keyword Rules

| Keyword | Scope | Reassignable? | Redeclarable? | Hoisted? |
|---|---|---|---|---|
| `const` | Block Scope | ❌ No | ❌ No | Yes (TDZ) |
| `let` | Block Scope | ✅ Yes | ❌ No | Yes (TDZ) |
| `var` | Function Scope | ✅ Yes | ✅ Yes | Yes (`undefined`) |

```javascript
// 1. const (Use by default for values that won't change)
const birthYear = 2002;

// 2. let (Use for variables whose value will change later)
let currentAge = 22;
currentAge = 23; // Reassignment allowed

// 3. var (Legacy - avoid in modern JavaScript code)
var legacyVar = "Old way";
```

## 💡 Complete Example

```javascript
const productName = "Wireless Mouse";
const unitPrice = 499;
let quantity = 2;

let totalCost = unitPrice * quantity;
console.log("Product:", productName);
console.log("Quantity:", quantity);
console.log("Total Cost:", totalCost);

// Updating quantity
quantity = 3;
totalCost = unitPrice * quantity;
console.log("Updated Quantity:", quantity);
console.log("Updated Total Cost:", totalCost);
```

## 👀 Output

```text
Product: Wireless Mouse
Quantity: 2
Total Cost: 998
Updated Quantity: 3
Updated Total Cost: 1497
```

## 🎯 Variable Naming Rules

- Use `camelCase` for variable names (`userScore`, `totalAmount`).
- Names can contain letters, numbers, underscores (`_`), and dollar signs (`$`).
- Names **cannot start with a number**.
- Cannot use reserved keywords (`let`, `class`, `function`, `return`).

## 🧪 Try It Yourself

1. Declare a `const` variable for your country name.
2. Declare a `let` variable for your current savings balance.
3. Update the savings balance variable and print both values.

## ⚠️ Common Mistakes

- Reassigning a `const` variable:
  ```javascript
  const pi = 3.14;
  pi = 3.14159; // TypeError: Assignment to constant variable.
  ```
- Using `var` inside loops, leading to unintended variable leakage outside the block.

## 🌍 Real-World Usage

Variables store shopping cart items, user session information, form inputs, score counters in games, and UI toggles.

## 💡 Remember

Default to `const` for all variable declarations. Switch to `let` only when you know the value will be reassigned. Avoid `var`.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Introduction](02-introduction-to-js.md) | [Next: Data Types →](04-data-types.md)
