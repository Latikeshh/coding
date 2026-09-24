# Data Types in JavaScript

> 🟢 Beginner

## 📖 Definition

JavaScript variables hold Primitive Data Types (`String`, `Number`, `Boolean`, `BigInt`, `Symbol`, `Undefined`, `Null`) and Object Data Types (`Object`, `Array`, `Function`, `Map`, `Set`).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Primitive types include `String`, `Number`, `Boolean`, `null`, and `undefined`. Use `typeof` to check a variable's data type.
> - **Hindi:** प्रिमिटिव डाटा टाइप्स: `String`, `Number`, `Boolean`, `null`, `undefined`| डाटा टाइप चेक करने के लिए `typeof` का उपयोग करें।
> - **Marathi:** डेटा टाईप तपासण्यासाठी `typeof` ऑपरेटर वापरतात.
> - **Hinglish:** Primitive data types (`string`, `number`, `boolean`, `null`, `undefined`) aur `typeof` operator se variable type check kiya jaata hai.

## 📝 Syntax & Examples

```javascript
let productName = "Wireless Mouse"; // String
let price = 29.99;                  // Number
let inStock = true;                 // Boolean
let discount;                       // Undefined (uninitialized)
let promoCode = null;               // Null (intentional empty value)

console.log(typeof productName);    // "string"
console.log(typeof price);          // "number"
console.log(typeof inStock);        // "boolean"
```

## ⚠️ Common Mistakes

- Unintended type coercion during string addition: `"5" + 5` produces `"55"` (string concatenation), while `5 + 5` produces `10`.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Variables](03-variables.md) | [Next: Operators →](05-operators.md)
