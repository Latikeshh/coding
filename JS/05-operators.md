# Operators in JavaScript

> 🟢 Beginner

## 📖 Definition

**Operators** are special symbols used to perform calculations, compare values, and execute logical evaluations.

## 📝 Categories of Operators

### 1. Arithmetic Operators
Used for mathematical operations:
- `+` (Addition)
- `-` (Subtraction)
- `*` (Multiplication)
- `/` (Division)
- `%` (Modulus / Remainder)

### 2. Comparison Operators
Used to compare two values (returns `true` or `false`):
- `===` (Strict equality: value AND type must match)
- `!==` (Strict inequality)
- `>` (Greater than)
- `<` (Less than)
- `>=` (Greater than or equal)
- `<=` (Less than or equal)

### 3. Logical Operators
Used to combine conditions:
- `&&` (AND: both conditions must be true)
- `||` (OR: at least one condition must be true)
- `!` (NOT: reverses a boolean value)

## 💡 Practical Example

```javascript
let a = 10;
let b = 3;

console.log("Sum:", a + b);       // 13
console.log("Remainder:", a % b); // 1

let age = 20;
let hasLicense = true;

let canDrive = age >= 18 && hasLicense;
console.log("Can Drive:", canDrive); // true
```

## 👀 Output

```text
Sum: 13
Remainder: 1
Can Drive: true
```

## ⚠️ Common Mistakes

- Using `=` (assignment) instead of `===` (comparison):
  ```javascript
  // Wrong comparison:
  if (x = 5) { ... } // Assigns 5 to x!
  
  // Correct comparison:
  if (x === 5) { ... }
  ```
- Using loose equality `==` instead of strict equality `===`: always prefer `===` to prevent unexpected type coercion.

## 🧪 Try It Yourself

Test `10 === "10"` vs `10 == "10"` in your browser console and observe the difference.

## 🎯 Mini Challenge

Write a comparison that checks if a number is between `10` and `50` (inclusive).

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Data Types](04-data-types.md) | [Next: Conditionals →](06-conditionals.md)
