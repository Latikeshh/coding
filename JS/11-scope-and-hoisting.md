# Scope, Hoisting & Temporal Dead Zone (TDZ)

> 🟡 Intermediate

## 📖 Definition

- **Scope:** Determines accessibility/visibility of variables in different parts of your code.
- **Hoisting:** JavaScript engine's behavior of hoisting variable and function declarations to the top of their enclosing scope during compilation.
- **Temporal Dead Zone (TDZ):** The period between entering scope and variable initialization where accessing a `let` or `const` variable throws a `ReferenceError`.

## 🇮🇳 Hindi

Scope yeh decide karta hai ki variable kahan accessible hai. Hoisting se JavaScript declarations ko scope ke top par process karta hai. `let` aur `const` hoist hote hain par initialize hone tak **Temporal Dead Zone (TDZ)** mein rehte hain, isliye unhe declaration se pehle access karne par error aata hai.

## 🚩 Marathi

Scope mule ठरते ki variable kuthe vaparta yeto. Hoisting mule declarations varti move hotat. `let` aani `const` declare karnya purvi vaparlyas TDZ mule `ReferenceError` yeto.

## 📝 Types of Scope

1. **Global Scope:** Variables declared outside any function or block. Accessible anywhere in the script.
2. **Function / Local Scope:** Variables declared inside a function (with `var`, `let`, or `const`). Accessible only inside that function.
3. **Block Scope:** Variables declared inside `{}` (like `if` statements or `for` loops) using `let` or `const`. Cannot be accessed outside the block.

```javascript
{
  var globalVar = "I leak out of block!";
  let blockLet = "I am block scoped!";
  const blockConst = "I am also block scoped!";
}

console.log(globalVar);  // "I leak out of block!"
// console.log(blockLet); // ReferenceError: blockLet is not defined
```

## 🧠 Hoisting & Temporal Dead Zone Behavior

### Function Declaration Hoisting (Fully Hoisted)
```javascript
// Works fine! Function declarations are fully hoisted.
sayHello();

function sayHello() {
  console.log("Hello World!");
}
```

### `var` Hoisting (Hoisted with `undefined`)
```javascript
console.log(a); // Output: undefined (no error, but value is not yet assigned)
var a = 10;
```

### `let` and `const` Hoisting (TDZ Protection)
```javascript
// TDZ starts at beginning of scope
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20; // TDZ ends here
```

## 💡 Complete Example

```javascript
let globalVal = 100;

function testScope() {
  let localVal = 200;

  if (true) {
    let blockVal = 300;
    var functionVal = 400; // var ignores block scope!
    console.log("Inside Block:", globalVal, localVal, blockVal);
  }

  console.log("Outside Block - functionVal:", functionVal); // 400
  // console.log(blockVal); // Uncaught ReferenceError
}

testScope();
```

## 👀 Output

```text
Inside Block: 100 200 300
Outside Block - functionVal: 400
```

## 🧪 Try It Yourself

1. Predict what happens when you log a variable before declaring it with `var` vs with `let`.
2. Fix this loop so it prints `1`, `2`, `3` instead of `4`, `4`, `4`:
   ```javascript
   for (var i = 1; i <= 3; i++) {
     setTimeout(() => console.log(i), 100);
   }
   ```
   *(Hint: Change `var` to `let` so `i` gets a fresh block scope for each iteration!).*

## ⚠️ Common Mistakes

- Assuming hoisting physically moves your code to the top of the file. It is a compilation phase memory allocation.
- Accidental global variable creation by omitting declaration keywords (`x = 10` inside a function creates a global property in non-strict mode).

## 🌍 Real-World Usage

Block scope prevents variable collisions in loops, module functions, and component event handlers.

## 💡 Remember

`var` is function-scoped and hoisted as `undefined`. `let` and `const` are block-scoped and protected by the Temporal Dead Zone (TDZ).

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Objects](10-objects.md) | [Next: Modern ES6+ Features →](12-es6-features.md)
