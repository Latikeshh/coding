# Modern ES6+ Features

> 🟡 Intermediate

ES6 (ECMAScript 2015) and subsequent updates introduced modern features that make JavaScript code cleaner, concise, and easier to write.

---

## 1. Template Literals
Use backticks `` ` `` to interpolate variables and handle multi-line strings easily:
```javascript
const user = "David";
const age = 28;
console.log(`Hello, ${user}! Next year you will be ${age + 1}.`);
```

---

## 2. Destructuring Assignment
Unpack values from arrays or properties from objects into distinct variables:

### Object Destructuring:
```javascript
const person = { name: "Sarah", city: "London", role: "Developer" };
const { name, role } = person;
console.log(`${name} is a ${role}`); // "Sarah is a Developer"
```

### Array Destructuring:
```javascript
const colors = ["Red", "Green", "Blue"];
const [firstColor, secondColor] = colors;
console.log(firstColor, secondColor); // "Red Green"
```

---

## 3. Spread Operator (`...`)
Expands arrays or objects into individual elements/properties:
```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const userDetails = { name: "Alex" };
const userProfile = { ...userDetails, age: 30, location: "NYC" };
```

---

## 4. Rest Parameters (`...`)
Collects multiple arguments into a single array parameter inside a function:
```javascript
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(10, 20, 30, 40)); // 100
```

---

## 5. Default Parameters
Provide default fallback values for function arguments:
```javascript
function greetUser(name = "Guest") {
  console.log(`Welcome, ${name}!`);
}

greetUser();        // "Welcome, Guest!"
greetUser("Maya"); // "Welcome, Maya!"
```

---

## 🧪 Try It Yourself

Use object destructuring to extract `title` and `author` from a `book` object and print them using a template literal.

## 🎯 Mini Challenge

Write a function `combineArrays(arr1, arr2)` that uses the spread operator to return a single combined array.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Scope](11-scope-and-hoisting.md) | [Next: Advanced Array Methods →](13-advanced-array-methods.md)
