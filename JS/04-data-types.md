# Data Types in JavaScript

> 🟢 Beginner

## 📖 Definition

A **data type** defines what kind of value a variable holds (such as numbers, text, or true/false values).

## 🤔 Why Do We Use Them?

JavaScript needs to know whether it is dealing with text, math calculations, or logic decisions.

## 🧠 Simple Explanation

Just like in real life where numbers are used for counting and letters are used for writing words, programming languages separate values into different types.

## 📝 Common Data Types

### Primitive Data Types:
1. **String:** Text wrapped in quotes (`"Hello"`, `'JS'`, `` `World` ``)
2. **Number:** Integers and decimals (`42`, `3.14`)
3. **Boolean:** Logical true or false (`true`, `false`)
4. **Undefined:** Variable declared but not assigned a value
5. **Null:** Intentionally empty value

## 💡 Practical Example

```javascript
let productName = "Wireless Mouse"; // String
let price = 29.99;                  // Number
let inStock = true;                 // Boolean
let discount;                       // Undefined
let promoCode = null;               // Null

console.log(typeof productName); // string
console.log(typeof price);       // number
console.log(typeof inStock);     // boolean
```

## 👀 Output

```text
string
number
boolean
```

## ⚠️ Common Mistakes

- Mixing strings and numbers in addition:
  ```javascript
  console.log("5" + 5); // "55" (String concatenation, not math addition!)
  console.log(5 + 5);   // 10
  ```

## 🧪 Try It Yourself

Create variables for your favorite movie (String), release year (Number), and whether you have watched it more than twice (Boolean).

## 🎯 Mini Challenge

Use `typeof` to check the data type of `100`, `"100"`, `false`, and `undefined`.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Variables](03-variables.md) | [Next: Operators →](05-operators.md)
