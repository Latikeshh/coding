---
layout: default
title: "23 modules"
---

# 📦 JavaScript Modules (ESM `import` / `export` & CommonJS)

> 🟡 Intermediate

## 📖 Definition

**JavaScript Modules (ES Modules / ESM)** are self-contained, scoped files that encapsulate code (variables, functions, classes, and objects) and selectively expose specific parts using `export` directives. Other JavaScript files load these exported entities using `import` directives.

---

## 🌐 Multilingual Explanation

### English
Before ES Modules (ES6 in 2015), JavaScript lacked a native module system, relying on global scope pollution or script tags. ES Modules provide static file scoping, strict mode execution by default, tree-shaking support, and clean code organization across frontend frameworks (React, Vue) and Node.js backend servers.

### Hindi (Roman Script)
Large JavaScript applications ko modular aur manageable banane ke liye code ko multiple reusable `.js` files mein divide kiya jata hai. Ek file se functions ya variables share karne ke liye `export` aur dusri file mein use karne ke liye `import` use karte hain. HTML mein `<script type="module" src="...">` likhna zaroori hai.

### Marathi (Roman Script)
Large web applications madhye code vargikrut (modular) thevnyasathi ES Modules cha wapar hoto. Eka file madhun components dhenyasathi `export` aani ghenyasathi `import` cha wapar kela jato. ESM ne global variable conflict sanpasto.

### Hinglish
Modern frontend libraries (React, Next.js, Vue) aur backend (Node.js) ESM modules par depend karte hain. Modules ke do main types hote hain: **Named Exports** (multiple per file) aur **Default Export** (sirf 1 per file). Module scripts automated strict mode (`"use strict"`) mein chalte hain.

---

## 📝 Named Exports vs Default Exports

| Feature | Named Exports (`export const x = 1;`) | Default Export (`export default class App {}`) |
| :--- | :--- | :--- |
| **Quantity Per File** | Unlimited named exports per module. | **Only 1** default export per module. |
| **Import Syntax** | Must use curly braces `{ x, y }`. | Imported WITHOUT curly braces (`import App`). |
| **Import Naming** | Must match exact exported identifier name. | Can be assigned any local alias name when importing. |
| **Renaming Syntax** | `import { x as myX } from './mod.js'` | `import CustomName from './mod.js'` |

---

## 💡 Practical Production Examples

### Example 1: Creating Utility Module (`mathUtils.js`)

```javascript
// mathUtils.js - Utility Module

// 1. Named Exports
export const PI = 3.14159265359;
export const E = 2.71828182845;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Renamed Export
function internalSecret() {
  return "Secret Key";
}
export { internalSecret as getApiKey };

// 2. Default Export (Single main entity)
export default class Calculator {
  constructor(initialValue = 0) {
    this.value = initialValue;
  }

  square() {
    this.value = this.value * this.value;
    return this.value;
  }
}
```

---

### Example 2: Importing and Consuming Modules (`app.js`)

```javascript
// app.js - Main Application Entry Point

// Importing Default Export alongside Named Exports
import Calculator, { add, multiply, PI, getApiKey } from './mathUtils.js';

// Import All Named Exports as a Namespace Object
import * as MathLib from './mathUtils.js';

console.log("PI Constant:", PI); // 3.14159265359
console.log("Addition:", add(15, 30)); // 45
console.log("Multiplication:", multiply(6, 7)); // 42
console.log("API Key:", getApiKey()); // "Secret Key"

const calc = new Calculator(5);
console.log("Square Value:", calc.square()); // 25

console.log("Access via Namespace Object:", MathLib.E); // 2.71828182845
```

---

### Example 3: Dynamic Module Import for Performance (`import()`)

Load heavy modules asynchronously on-demand (Code Splitting):

```javascript
const analyticsBtn = document.querySelector("#load-analytics-btn");

analyticsBtn.addEventListener("click", async () => {
  try {
    // Dynamic import loads the module script over the network only when clicked
    const analyticsModule = await import('./analytics.js');
    analyticsModule.trackEvent("BUTTON_CLICKED", { user: "Rohan" });
  } catch (error) {
    console.error("Failed to dynamically load analytics module:", error);
  }
});
```

---

### Example 4: Connecting ES Modules in HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ES Modules Demo</title>
  <!-- IMPORTANT: type="module" is REQUIRED for ES module script loading -->
  <script type="module" src="app.js"></script>
</head>
<body>
  <h1>Check Developer Console (F12) for Execution Output</h1>
  <button id="load-analytics-btn">Load Analytics</button>
</body>
</html>
```

---

## 🆚 ES Modules (ESM) vs CommonJS (CJS) in Node.js

| Module System | Syntax | Execution Environment | Loading Behavior |
| :--- | :--- | :--- | :--- |
| **ES Modules (ESM)** | `import x from './x.js'` / `export default` | Modern Browsers, Node.js (with `"type": "module"`) | Asynchronous, Static parsing |
| **CommonJS (CJS)** | `const x = require('./x')` / `module.exports` | Legacy Node.js backend default | Synchronous, Dynamic runtime loading |

---

## ⚠️ Common Mistakes & Pitfalls

- **Missing `type="module"` in HTML**: Including `<script src="app.js"></script>` without `type="module"` throws `Uncaught SyntaxError: Cannot use import statement outside a module`.
- **Forgetting File Extension in Browsers**: Modern browser ESM spec requires explicit file extensions in relative path imports (`import { add } from './mathUtils.js';` — specifying `.js` is required!).
- **Multiple Default Exports**: Attempting to include `export default` twice in a single module file causes a compilation syntax error.
- **CORS Errors when Running via `file://`**: Opening HTML files directly from local disk via `file:///` blocks ESM fetching due to CORS security policies. Always run local module projects via a local web server (e.g. VS Code Live Server or `npx serve`).

---

## 🧪 Try It Yourself & Practice Exercises

1. Create a module `stringUtils.js` with a named export function `capitalize(str)` and default export function `reverse(str)`.
2. Create an `index.js` file importing both functions and testing them with sample strings.

---

## 🎯 Mini Challenge

Create a modular weather dashboard structure:
- `api.js`: Exports an async function `fetchWeatherData(city)` returning mock temperature data.
- `ui.js`: Exports a function `renderWeatherCard(city, temp)` that updates a DOM element.
- `app.js`: Imports `fetchWeatherData` and `renderWeatherCard` and connects them to a button click event handler.

---

## 🔗 Related Topics

- [Functions, Scope & Higher-Order Functions](08-functions.html)
- [Asynchronous JS, Promises & Async/Await](15-promises-and-async-await.html)
- [Fetch API & Working with JSON](16-fetch-api-and-json.html)

---

## 🧭 Navigation

[← JS Home](./) | [← Previous: Error Handling](22-error-handling.html) | [Next: Comprehensive Mini Projects →](24-mini-projects.html)
