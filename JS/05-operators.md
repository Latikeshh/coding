# Operators in JavaScript

> 🟢 Beginner

## 📖 Definition

Operators perform calculations, assignments, logical checks, and value comparisons.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Always use strict equality `===` (checks value and type) instead of loose equality `==` to avoid automatic type conversion errors.
> - **Hindi:** हमेशा स्ट्रिक्ट इक्वैलिटी `===` का प्रयोग करें, जो वैल्यू और डेटा टाइप दोनों की जांच करता है।
> - **Marathi:** ऑपरेटर तुलना करण्यासाठी `===` (स्ट्रिक्ट इक्वॅलिटी) वापरणे सुरक्षित असते.
> - **Hinglish:** Hamesha strict equality `===` (value + type check) use karo. Loose `==` se type coercion bugs aate hain.

## 📝 Categories of Operators

```javascript
// 1. Arithmetic Operators
console.log(10 + 3);  // 13
console.log(10 % 3);  // 1 (Modulus remainder)

// 2. Strict Comparison Operators
console.log(10 === 10);    // true
console.log(10 === "10");  // false (Types do not match!)
console.log(10 == "10");   // true (Avoid loose equality!)

// 3. Logical Operators
let isAdult = true;
let hasTicket = true;
console.log(isAdult && hasTicket); // true (AND operator)
```

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Data Types](04-data-types.md) | [Next: Conditionals →](06-conditionals.md)
