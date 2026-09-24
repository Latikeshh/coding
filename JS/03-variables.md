# Variables in JavaScript

> 🟢 Beginner

## 📖 Definition

A **variable** is a named container used to store data values in computer memory so they can be referenced, reused, and updated throughout a program.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Use `const` by default for variables that do not change, and `let` for values that will be reassigned later. Avoid `var`.
> - **Hindi:** जो वैल्यू बदलनी नहीं है उसके लिए `const` और जिसे बदलना है उसके लिए `let` का उपयोग करें। `var` का इस्तेमाल न करें।
> - **Marathi:** न बदलणाऱ्या व्हॅल्यूसाठी `const` आणि बदलणाऱ्या व्हॅल्यूसाठी `let` वापरा.
> - **Hinglish:** Unchanging values ke liye `const` aur reassigned values ke liye `let` use karo. Legacy `var` ko avoid karo.

## 🤔 Why Do We Use Them?

Instead of repeating values like prices, user names, or scores throughout your program, you store them in variables with descriptive names.

## 🧠 Simple Explanation

Think of a variable as a labeled box on a shelf. The label is the variable name (e.g. `age`), and what you place inside the box is the value (e.g. `25`).

## 📝 Syntax

JavaScript provides three keywords to declare variables:

1. `const`: Use for values that **will not change** (constant).
2. `let`: Use for values that **can be reassigned later**.
3. `var`: Legacy scope rules (avoid in modern ES6+ JS code).

```javascript
const birthYear = 2000;
let score = 10;
score = 15; // Value reassigned
```

## 💡 Practical Example

```javascript
const userName = "Alex";
let userAge = 22;

console.log(userName);
console.log(userAge);

// Updating variable
userAge = 23;
console.log("Updated Age:", userAge);
```

## 👀 Output

```text
Alex
22
Updated Age: 23
```

## ⚠️ Common Mistakes

- Trying to reassign a `const` variable:
  ```javascript
  const pi = 3.14;
  pi = 3.15; // TypeError: Assignment to constant variable!
  ```
- Using spaces or hyphens in variable names (use camelCase instead: `userScore`, `totalAmount`).

## 🧪 Try It Yourself

Declare a `const` variable for your country's name and a `let` variable for your current age. Print both.

## 🎯 Mini Challenge

Declare a variable `price = 100` and `tax = 18`. Calculate and print the total price (`price + tax`).

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Introduction](02-introduction-to-js.md) | [Next: Data Types →](04-data-types.md)
