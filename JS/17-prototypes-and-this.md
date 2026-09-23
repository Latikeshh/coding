# Prototypes, `this` Keyword & Binding

> 🔴 Advanced

## 📖 Definition

- **`this` Keyword:** Refers to the execution context object executing the current function.
- **Prototypes:** Every JavaScript object has a private internal link to another object called its **prototype**. Objects inherit methods and properties from their prototype chain.

---

## 🔍 How `this` Binding Works

The value of `this` depends on **how** a function is invoked:

1. **Method Invocation:** `this` refers to the object calling the method.
2. **Simple Function Call:** `this` refers to `window` (or `undefined` in strict mode).
3. **Arrow Functions:** Arrow functions do **not** have their own `this`; they capture `this` lexically from their surrounding parent scope.

```javascript
const person = {
  name: "Marcus",
  greet: function() {
    console.log("Hello, I am " + this.name);
  },
  greetArrow: () => {
    console.log("Arrow this.name:", this.name); // undefined (lexical this)
  }
};

person.greet();      // "Hello, I am Marcus"
person.greetArrow(); // undefined
```

---

## 🔗 Explicit Binding: `call()`, `apply()`, and `bind()`

Explicitly set what `this` refers to when invoking a function:

```javascript
function introduce(city, country) {
  console.log(`I am ${this.name} from ${city}, ${country}.`);
}

const user1 = { name: "Elena" };
const user2 = { name: "Ken" };

// .call(thisArg, arg1, arg2...)
introduce.call(user1, "Paris", "France");

// .apply(thisArg, [argArray])
introduce.apply(user2, ["Tokyo", "Japan"]);

// .bind(thisArg) returns a NEW function with bound 'this'
const introduceElena = introduce.bind(user1, "Nice", "France");
introduceElena();
```

---

## 🧬 Prototype Chain

```javascript
function Animal(name) {
  this.name = name;
}

// Attach method to prototype so all instances share ONE copy in memory
Animal.prototype.makeSound = function() {
  console.log(`${this.name} makes a noise.`);
};

const dog = new Animal("Buddy");
dog.makeSound(); // "Buddy makes a noise."
```

---

## 🧪 Try It Yourself

Use `.bind()` to bind a function using `this.score` to a custom object `{ score: 100 }`.

## 🎯 Mini Challenge

Explain why arrow functions are preferred for array callback methods inside object methods when referencing `this`.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Fetch & JSON](16-fetch-api-and-json.md) | [Next: Classes & OOP →](18-classes-and-oop.md)
