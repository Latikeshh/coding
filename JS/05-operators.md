# Operators in JavaScript

> 🟢 Beginner

## 📖 Definition

**Operators** are special symbols used to perform computations, assign values, compare variables, and evaluate logical conditions.

## 🇮🇳 Hindi

Operators computer program mein calculations karne, values check karne, aur logic combine karne ke liye use hote hain. JavaScript mein strict equality (`===`) aur loose equality (`==`) ke beech ka difference samajhna sabse zaroori hai.

## 🚩 Marathi

Operators cha wapar calculations karne, values compare karne, aani logic check karnya sathi kela jato. Nehamhi strict equality (`===`) cha wapar kara, jyane value aani data type donhi check hotat.

## 🤔 Why Do We Use Them?

Without operators, a program cannot calculate totals, compare user inputs, evaluate true/false conditions, or control application flow.

## 📝 Categories of Operators

### 1. Arithmetic Operators
`+` (Add), `-` (Subtract), `*` (Multiply), `/` (Divide), `%` (Modulus / Remainder), `**` (Exponentiation)

### 2. Assignment Operators
`=`, `+=`, `-=`, `*=`, `/=`

### 3. Comparison Operators
- Strict Equality (`===`): Checks **Value AND Type**.
- Strict Inequality (`!==`): Checks **Value AND Type NOT equal**.
- Loose Equality (`==`): Performs type coercion before checking value (Avoid!).
- Greater / Less than: `>`, `<`, `>=`, `<=`

### 4. Logical Operators
- `&&` (AND): Returns `true` if ALL conditions are `true`.
- `||` (OR): Returns `true` if AT LEAST ONE condition is `true`.
- `!` (NOT): Inverts boolean state.

### 5. Modern Operators
- Nullish Coalescing (`??`): Returns right-hand side if left-hand side is `null` or `undefined`.
- Optional Chaining (`?.`): Safely accesses nested object properties without throwing error if `null`/`undefined`.

## 💡 Complete Example

```javascript
// Arithmetic & Modulus
let itemPrice = 250;
let taxRate = 0.18;
let totalPrice = itemPrice + (itemPrice * taxRate);
console.log("Total Price:", totalPrice); // 295

// Strict vs Loose Equality
console.log("10 === '10':", 10 === "10"); // false (Number vs String)
console.log("10 == '10':", 10 == "10");   // true (Loose - auto converted)

// Logical Operators
let userAge = 20;
let hasID = true;
let canEnterClub = (userAge >= 18) && hasID;
console.log("Can enter club:", canEnterClub); // true

// Nullish Coalescing (??)
let userSetting = null;
let defaultSetting = "Dark Mode";
let activeTheme = userSetting ?? defaultSetting;
console.log("Active Theme:", activeTheme); // "Dark Mode"
```

## 👀 Output

```text
Total Price: 295
10 === '10': false
10 == '10': true
Can enter club: true
Active Theme: Dark Mode
```

## 🧪 Try It Yourself

1. Test `console.log(5 == "5")` vs `console.log(5 === "5")` in your console.
2. Calculate the remainder when `17` is divided by `5` using `%`.

## ⚠️ Common Mistakes

- Using loose equality `==` which leads to unexpected type coercion bugs:
  ```javascript
  0 == ""      // true!
  0 == false   // true!
  null == undefined // true!
  ```
- Confusing single assignment `=` with comparison `===`.

## 🌍 Real-World Usage

Shopping cart totals, discount calculations, age gate validations, and theme preference fallbacks.

## 💡 Remember

Always use strict equality (`===` and `!==`) to prevent hidden type conversion bugs in your JavaScript code.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Data Types](04-data-types.md) | [Next: Conditionals →](06-conditionals.md)
