# Prototypes, `this` Keyword & Explicit Binding

> 🔴 Advanced

## 📖 Definition

- **`this` Keyword:** Refers to the execution context object that calls the current function. Its value is determined by **how** the function is invoked at runtime.
- **Prototypes:** Every JavaScript object has an internal link (`__proto__`) to a prototype object from which it inherits methods and properties.

## 🇮🇳 Hindi

`this` keyword ka scope is baat par depend karta hai ki function kis object ke dwara call kiya gaya hai. Arrow functions ka apna `this` nahi hota (wo lexical `this` inherit karte hain). Explicitly `this` set karne ke liye `.call()`, `.apply()`, aur `.bind()` ka use hota hai.

## 🚩 Marathi

`this` mhanje current execution context. Function kasha padhatine call kela ahe yavrun `this` chi value tharte. Arrow functions kade swatahcha `this` nasto.

## 📝 Rules of `this` Binding

1. **Method Call:** `this` refers to the object before the dot (`user.greet()` -> `this` = `user`).
2. **Standalone Function:** `this` refers to `window` (browser) or `global` (Node.js) in non-strict mode, or `undefined` in strict mode.
3. **Arrow Functions:** Do not have their own `this`. They capture `this` from the enclosing outer lexical scope.
4. **Explicit Binding:** `.call()`, `.apply()`, and `.bind()` force `this` to point to a specific object.

## 📝 Explicit Binding Methods

- `.call(thisArg, arg1, arg2)`: Calls function immediately with specified `this` and comma-separated arguments.
- `.apply(thisArg, [argsArray])`: Calls function immediately with specified `this` and an array of arguments.
- `.bind(thisArg, arg1)`: Returns a **new function** with `this` permanently bound.

## 💡 Complete Example: Explicit Binding & Prototypes

```javascript
// 1. Prototype inheritance
function Person(name, role) {
  this.name = name;
  this.role = role;
}

// Adding method to Prototype (Shared across all instances)
Person.prototype.describe = function(city) {
  return `${this.name} works as a ${this.role} in ${city}`;
};

const user1 = new Person("Meera", "UI Designer");
const user2 = { name: "Dev", role: "Backend Developer" };

// Direct call on instance
console.log(user1.describe("Mumbai"));

// Explicit Binding using .call() on plain object user2
console.log(Person.prototype.describe.call(user2, "Bengaluru"));

// Explicit Binding using .bind()
const describeDev = Person.prototype.describe.bind(user2, "Pune");
console.log(describeDev());
```

## 👀 Output

```text
Meera works as a UI Designer in Mumbai
Dev works as a Backend Developer in Bengaluru
Dev works as a Backend Developer in Pune
```

## 🧠 Arrow Function `this` Behavior

```javascript
const counter = {
  count: 0,
  startRegular() {
    setTimeout(function() {
      // Regular function inside setTimeout loses object context!
      console.log("Regular setTimeout count:", this.count); // undefined
    }, 100);
  },
  startArrow() {
    setTimeout(() => {
      // Arrow function captures 'this' lexically from startArrow()!
      console.log("Arrow setTimeout count:", this.count); // 0
    }, 100);
  }
};

counter.startRegular();
counter.startArrow();
```

## 🧪 Try It Yourself

1. Create a function `introduce(greeting)` that logs `` `${greeting}, my name is ${this.name}` ``.
2. Use `.call()` to invoke it on an object `{ name: "Siddharth" }`.

## ⚠️ Common Mistakes

- Saying "`this` always refers to the object where the function was written". It depends on **how** the function is invoked!
- Using arrow functions for object methods when you need access to the object's properties via `this`.

## 🌍 Real-World Usage

Event listener callbacks, class component method binding, custom library creation, and utility inheritance.

## 💡 Remember

Method call -> `this` = object. Arrow function -> `this` = lexical parent scope. `.bind()` -> permanently bound function.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Fetch API & JSON](16-fetch-api-and-json.md) | [Next: Classes & OOP →](18-classes-and-oop.md)
