# Objects, `Map`, `Set`, `Date` & RegExp

> 🟡 Intermediate

## 📖 Definition

- **Object:** Key-value data structure (keys are strings or symbols).
- **`Map`:** Key-value structure where keys can be **any data type** (objects, functions, primitives) and insertion order is preserved.
- **`Set`:** Collection of **unique values** (duplicates are automatically filtered out).
- **`Date`:** Built-in object for handling calendar dates and timestamps.
- **RegExp:** Regular Expressions used for text pattern matching and validation.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Objects store key-value pairs. `Map` allows keys of any data type. `Set` enforces unique values. `Date` manages timestamps, and `RegExp` validates text patterns.
> - **Hindi:** ऑब्जेक्ट्स की-वैल्यू डेटा स्टोर करते हैं। `Map` में किसी भी टाइप की 'की' हो सकती है। `Set` में डुप्लिकेट वैल्यूज़ नहीं होतीं।
> - **Marathi:** ऑब्जेक्ट्स की-व्हॅल्यू डाटा साठवतात. `Set` मध्ये डुप्लिकेट व्हॅल्यू राहू शकत नाहीत.
> - **Hinglish:** Objects key-value pairs store karte hain. `Set` duplicate values auto-remove kar deta hai aur `Map` kisi bhi data type ki keys allow karta hai.

---

## 📝 Syntax & Examples

### 1. Object Literal
```javascript
const user = {
  name: "Sophia",
  age: 25,
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
};
user.greet();
```

### 2. `Set` (Unique Values Collection)
```javascript
const uniqueIDs = new Set([101, 102, 101, 103]);
uniqueIDs.add(104);
console.log(uniqueIDs.size); // 4 (101 duplicate was ignored)
console.log(uniqueIDs.has(102)); // true
```

### 3. `Map` (Key-Value with Any Data Type as Keys)
```javascript
const userRoles = new Map();
const keyObj = { id: 1 };

userRoles.set(keyObj, "Admin");
console.log(userRoles.get(keyObj)); // "Admin"
```

### 4. `Date` Object
```javascript
const now = new Date();
console.log(now.getFullYear()); // e.g. 2026
console.log(now.toISOString()); // e.g. "2026-09-24T09:15:00.000Z"
```

### 5. Regular Expressions (`RegExp`)
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test("user@example.com")); // true
console.log(emailRegex.test("invalid-email"));     // false
```

---

## ⚠️ Common Mistakes

- Trying to access `Map` values using dot notation (`map.key`) instead of `map.get(key)`.
- Forgetting that months in `Date` object are 0-indexed (`0` = January, `11` = December).

## 🧪 Try It Yourself

Create a `Set` of 5 numbers containing duplicates and print its unique size.

## 🎯 Mini Challenge

Write a function `validatePhone(str)` using a Regular Expression to check if a string contains a valid 10-digit phone number.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Arrays](09-arrays.md) | [Next: Scope & Hoisting →](11-scope-and-hoisting.md)
