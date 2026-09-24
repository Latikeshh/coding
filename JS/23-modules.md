# JavaScript Modules (`import` / `export`)

> 🟡 Intermediate

## 📖 Definition

**ES Modules (ESM)** allow developers to break large JavaScript codebases into separate, organized, reusable files. Modules use `export` directives to expose functions, objects, or variables, and `import` directives to load them into other files.

## 🇮🇳 Hindi

Large applications ko manageable banane ke liye code ko multiple modular `.js` files mein divide kiya jata hai. Code share karne ke liye `export` aur access karne ke liye `import` ka use hota hai. HTML script tag mein `type="module"` specify karna zaroori hota hai.

## 🚩 Marathi

Large applications madhye code soppa aani vargikrut (modular) thevnyasathi ES Modules cha wapar hoto. File madhun values dhenyasathi `export` aani ghenyasathi `import` cha wapar kela jato.

## 📝 Types of Exports

### 1. Named Exports (Multiple per file)
You must import named exports using exact matching variable names inside curly braces `{}`.

### 2. Default Exports (Only ONE per file)
Can be imported without curly braces using any name you choose.

## 💡 Complete Example Structure

### File 1: `mathUtils.js`
```javascript
// Named Exports
export const PI = 3.14159;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Default Export (One per module)
export default class Calculator {
  square(n) {
    return n * n;
  }
}
```

### File 2: `main.js`
```javascript
// Importing default and named exports together
import Calculator, { add, multiply, PI } from './mathUtils.js';

const calc = new Calculator();

console.log("PI Value:", PI);
console.log("Add:", add(10, 5));
console.log("Multiply:", multiply(4, 3));
console.log("Square:", calc.square(6));
```

### File 3: `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ES Modules</title>
  <!-- type="module" is REQUIRED for ES module scripts -->
  <script type="module" src="main.js"></script>
</head>
<body>
  <h1>Check console for module execution output</h1>
</body>
</html>
```

## 👀 Output

```text
PI Value: 3.14159
Add: 15
Multiply: 12
Square: 36
```

## 🧪 Try It Yourself

1. Create a module file `formatter.js` exporting a named function `capitalize(str)`.
2. Import it into `app.js` and test it with a string input.

## ⚠️ Common Mistakes

- Forgetting `type="module"` in the HTML `<script>` tag, causing `Uncaught SyntaxError: Cannot use import statement outside a module`.
- Trying to export multiple `default` items from a single file.

## 🌍 Real-World Usage

All modern frontend frameworks (React, Vue, Angular, Svelte) and Node.js environments rely on ES Modules to structure application code cleanly.

## 💡 Remember

Use named exports for utility libraries and default exports for main component or class definitions. Always include `type="module"` in HTML script tags.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Error Handling](22-error-handling.md) | [Next: Comprehensive Mini Projects →](24-mini-projects.md)
