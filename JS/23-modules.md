# JavaScript Modules (`import` / `export`)

> 🟡 Intermediate

## 📖 Definition

**ES Modules (ESM)** allow you to split your JavaScript code into separate reusable files. Each module has its own scope and exports specific functions, objects, or primitive values.

---

## 📝 Module Syntax

To use ES Modules in browsers, include `type="module"` in your HTML script tag:
```html
<script type="module" src="app.js"></script>
```

---

### 1. Named Exports (`utils.js`)
```javascript
// Exporting functions individually
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export const PI = 3.14159;
```

### 2. Importing Named Exports (`app.js`)
```javascript
import { add, multiply, PI } from './utils.js';

console.log(add(5, 10)); // 15
console.log(PI);         // 3.14159
```

---

### 3. Default Exports (`User.js`)
A file can have **one** default export:
```javascript
export default class User {
  constructor(name) {
    this.name = name;
  }
}
```

### 4. Importing Default Exports (`main.js`)
```javascript
// Default exports do not require curly braces {} and can be renamed freely
import CustomUser from './User.js';

const u = new CustomUser("Marcus");
console.log(u.name); // "Marcus"
```

---

## 🧪 Try It Yourself

Create a file `math.js` that exports a function `square(n)`. Import and use it in `main.js`.

## 🎯 Mini Challenge

Create a `Logger` class as a default export in `Logger.js` and import it into `app.js` to log application messages.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Error Handling](22-error-handling.md) | [Next: Comprehensive Mini Projects →](24-mini-projects.md)
