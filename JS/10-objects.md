# Objects, `Map`, `Set`, `Date` & RegExp

> 🟡 Intermediate

## 📖 Definition

- **Object:** Key-value data structure where keys are strings or symbols.
- **`Map`:** Key-value collection where keys can be **any data type** (objects, functions, primitives) and insertion order is preserved.
- **`Set`:** Collection of **unique values** where duplicates are automatically removed.
- **`Date`:** Built-in object for managing timestamps, dates, and time calculations.
- **RegExp:** Regular Expressions used for text pattern matching and string validation.

## 🇮🇳 Hindi

Objects JavaScript ke fundamental building blocks hain. Structured key-value data ke liye Object aur `Map` use karein, unique items store karne ke liye `Set`, calendar dates ke liye `Date`, aur string validations ke liye `RegExp` ka use hota hai.

## 🚩 Marathi

Objects madhye data key-value pair स्वरूपात saathavla jato. Duplicate values kadhnyasathi `Set` cha wapar kara, badalnaraya keys sathi `Map`, tareekh ani vele sathi `Date` aani validation sathi `RegExp` cha wapar kara.

## 📝 Structures & Features

### 1. Objects (Dot vs Bracket Notation)
```javascript
const userProfile = {
  id: 101,
  fullName: "Ananya Roy",
  role: "Engineer",
  skills: ["JS", "React"],
  greet() {
    return `Hi, I am ${this.fullName}`;
  }
};

console.log(userProfile.fullName);       // Dot notation
console.log(userProfile["role"]);        // Bracket notation

// Utility methods
console.log(Object.keys(userProfile));   // ['id', 'fullName', 'role', 'skills', 'greet']
console.log(Object.values(userProfile)); // [101, 'Ananya Roy', 'Engineer', ...]
```

### 2. `Set` (Collection of Unique Values)
```javascript
const numbers = [10, 20, 10, 30, 20, 40];
const uniqueNumbers = new Set(numbers);
uniqueNumbers.add(50);

console.log("Unique Size:", uniqueNumbers.size); // 5 (Duplicates ignored)
console.log("Has 20?", uniqueNumbers.has(20));    // true
```

### 3. `Map` (Any Data Type as Key)
```javascript
const userRoles = new Map();
const keyObject = { id: 1 };

userRoles.set(keyObject, "Administrator");
console.log(userRoles.get(keyObject)); // "Administrator"
```

### 4. `Date` Object
```javascript
const now = new Date();
console.log("Current Year:", now.getFullYear());
console.log("ISO Format:", now.toISOString());
```

### 5. Regular Expressions (`RegExp`)
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test("user@domain.com")); // true
console.log(emailRegex.test("invalid-email"));   // false
```

## 💡 Complete Example

```javascript
// Clean user input by removing duplicate tags and validating email
function processUserRegistration(emailInput, tagsArray) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = emailPattern.test(emailInput);

  const cleanTags = Array.from(new Set(tagsArray));

  return {
    email: emailInput,
    valid: isValidEmail,
    tags: cleanTags,
    registeredAt: new Date().toLocaleDateString()
  };
}

let result = processUserRegistration("dev@example.com", ["js", "html", "js", "css", "html"]);
console.log(result);
```

## 👀 Output

```text
{
  email: 'dev@example.com',
  valid: true,
  tags: [ 'js', 'html', 'css' ],
  registeredAt: '9/24/2026'
}
```

## 🧪 Try It Yourself

1. Create an object `car` with `make`, `model`, `year`, and a `drive()` method.
2. Create an array containing numbers with duplicates and convert it to a `Set` to remove duplicates.

## ⚠️ Common Mistakes

- Forgetting that months in JavaScript `Date` object are 0-indexed (`0` = January, `11` = December!).
- Accessing `Map` entries with dot notation (`map.key`) instead of using `.get(key)`.

## 🌍 Real-World Usage

Managing user profile state, filtering unique tags/categories in e-commerce, formatting timestamps, and validating email/password fields in registration forms.

## 💡 Remember

Use `Object` for fixed structured records, `Set` for deduplication, `Map` when keys are dynamic or non-strings, and `Date` for calendar tracking.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Arrays](09-arrays.md) | [Next: Scope & Hoisting →](11-scope-and-hoisting.md)
