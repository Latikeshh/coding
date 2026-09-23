# Advanced Array Methods (`map`, `filter`, `reduce`)

> 🟡 Intermediate

Modern JavaScript provides powerful array iteration methods that allow functional transformation without writing manual `for` loops.

---

## 1. `.map()` — Transform Every Element
Creates a **new array** by applying a transformation function to every element:
```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]
```

---

## 2. `.filter()` — Filter Elements
Creates a **new array** containing only elements that pass a boolean condition:
```javascript
const ages = [12, 18, 25, 8, 30];
const adults = ages.filter(age => age >= 18);

console.log(adults); // [18, 25, 30]
```

---

## 3. `.reduce()` — Accumulate Array Values
Executes a reducer function on each element to condense the array down to a **single value** (e.g. sum, total, object):
```javascript
const cart = [15, 25, 10];
const totalPrice = cart.reduce((accumulator, itemPrice) => accumulator + itemPrice, 0);

console.log(totalPrice); // 50
```

---

## 4. `.find()` and `.some()` / `.every()`
```javascript
const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false }
];

// .find() returns first matching element
const alice = users.find(user => user.id === 1); // { id: 1, name: "Alice", active: true }

// .some() checks if AT LEAST ONE matches
const hasInactive = users.some(user => !user.active); // true

// .every() checks if ALL match
const allActive = users.every(user => user.active); // false
```

---

## 💡 Chaining Array Methods

```javascript
const products = [
  { name: "Laptop", price: 1000, category: "Tech" },
  { name: "Phone", price: 500, category: "Tech" },
  { name: "Shirt", price: 40, category: "Apparel" }
];

// Total cost of all Tech items
const totalTechCost = products
  .filter(p => p.category === "Tech")
  .map(p => p.price)
  .reduce((sum, price) => sum + price, 0);

console.log(totalTechCost); // 1500
```

---

## 🧪 Try It Yourself

Given an array `[5, 12, 8, 130, 44]`, use `.filter()` to get numbers greater than `10`.

## 🎯 Mini Challenge

Use `.map()` on an array of names `["alice", "bob", "charlie"]` to convert all names to UPPERCASE (`["ALICE", "BOB", "CHARLIE"]`).

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: ES6 Features](12-es6-features.md) | [Next: Closures & Callbacks →](14-closures-and-callbacks.md)
