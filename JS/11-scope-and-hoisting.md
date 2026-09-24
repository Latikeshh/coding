# Scope, Hoisting & Temporal Dead Zone

> 🟡 Intermediate

## 📖 Definition

- **Scope:** Defines where variables are accessible in your code.
- **Hoisting:** JavaScript's behavior of lifting function and variable declarations to the top of their scope during compilation.
- **Temporal Dead Zone (TDZ):** The time gap between entering scope and variable initialization where accessing `let`/`const` throws a `ReferenceError`.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `let` and `const` are block-scoped. Accessing `let`/`const` before initialization triggers Temporal Dead Zone (TDZ) errors.
> - **Hindi:** `let` और `const` ब्लॉक-स्कोप्ड होते हैं। डिक्लेरेशन से पहले एक्सेस करने पर TDZ एरर आता है।
> - **Marathi:** `let` आणि `const` ब्लॉक-स्कोप्ड असतात. डिक्लेअर करण्यापूर्वी वापरल्यास एरर येतो.
> - **Hinglish:** `let`/`const` block-scoped hote hain. Unhe initialize karne se pehle access karne par TDZ `ReferenceError` aata hai.

## 📝 Types of Scope

1. **Global Scope:** Accessible everywhere.
2. **Function Scope:** Variables declared with `var`, `let`, or `const` inside a function are local to that function.
3. **Block Scope:** Variables declared with `let` or `const` inside `{}` (e.g. `if`, `for`) cannot be accessed outside the block.

```javascript
{
  var x = 10;   // Function or globally scoped
  let y = 20;   // Block-scoped
  const z = 30; // Block-scoped
}

console.log(x); // 10
// console.log(y); // ReferenceError: y is not defined
```

## 🧠 Simple Explanation of Hoisting & TDZ

When JavaScript executes your code, it scans for declarations first:
- Function declarations are fully hoisted (you can call them before they are written).
- `var` declarations are hoisted and initialized as `undefined`.
- `let` and `const` declarations are hoisted but remain uninitialized in the **Temporal Dead Zone (TDZ)** until execution reaches their declaration line.

```javascript
// Function hoisting works:
sayHello(); // Output: "Hello!"

function sayHello() {
  console.log("Hello!");
}

// var hoisting gives undefined:
console.log(a); // Output: undefined
var a = 5;

// let/const in TDZ throws Error:
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

## 👀 Output

```text
Hello!
undefined
```

## ⚠️ Common Mistakes

- Polluting the global scope by omitting variable declarations (`num = 100` creates a global property).
- Expecting `var` to respect `if` or `for` block boundaries.

## 🧪 Try It Yourself

Predict what happens when you log a variable before its `let` declaration vs before its `var` declaration in the browser console.

## 🎯 Mini Challenge

Fix this code so it prints `1`, `2`, `3` instead of printing `4`, `4`, `4` three times:
```javascript
for (var i = 1; i <= 3; i++) {
  setTimeout(() => console.log(i), 100);
}
```
*(Hint: Change `var` to `let` so `i` is block-scoped!)*

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Objects](10-objects.md) | [Next: ES6 Features →](12-es6-features.md)
