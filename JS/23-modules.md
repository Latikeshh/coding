# JavaScript Modules (`import` / `export`)

> 🟡 Intermediate

## 📖 Definition

ES Modules (ESM) organize JavaScript codebases into separate, scoped files using `export` (named or default) and `import` directives.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Split JS into modular files using `export` and `import`. Include `type="module"` in HTML script tags.
> - **Hindi:** कोड को अलग-अलग फाइलों में बांटने के लिए `export` और `import` का प्रयोग करें। HTML में `<script type="module">` लिखना होता है।
> - **Marathi:** कोड सोपा आणि व्यवस्थित ठेवण्यासाठी ES Modules (`import`/`export`) वापरतात.
> - **Hinglish:** Modular code structure ke liye `export` aur `import` use karo. HTML script tag mein `type="module"` specify karna zaroori hai.

## 📝 Syntax

```javascript
// Inside mathUtils.js (Named Export)
export function add(a, b) { return a + b; }
export const PI = 3.14159;

// Inside app.js (Importing Named Exports)
import { add, PI } from './mathUtils.js';
console.log(add(10, 5)); // 15
```

```javascript
// Inside User.js (Default Export)
export default class User {
  constructor(name) { this.name = name; }
}

// Inside main.js (Importing Default Export)
import User from './User.js';
```

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Error Handling](22-error-handling.md) | [Next: Comprehensive Mini Projects →](24-mini-projects.md)
