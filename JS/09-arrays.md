# Arrays in JavaScript

> 🟡 Intermediate

## 📖 Definition

An **array** is an ordered collection of values stored under a single variable name.

## 📝 Syntax & Common Methods

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

// Accessing items by index (starts at 0)
console.log(fruits[0]); // "Apple"

// Useful Methods:
fruits.push("Orange"); // Adds to the end
fruits.pop();           // Removes from the end
console.log(fruits.length); // Array length
```

## 💡 Practical Example

```javascript
let scores = [85, 92, 78, 90];

// Looping through an array
for (let i = 0; i < scores.length; i++) {
  console.log("Score " + (i + 1) + ": " + scores[i]);
}

// Using forEach
scores.forEach((score) => {
  console.log("Item:", score);
});
```

## 👀 Output

```text
Score 1: 85
Score 2: 92
Score 3: 78
Score 4: 90
Item: 85
Item: 92
Item: 78
Item: 90
```

## ⚠️ Common Mistakes

- Array indexing starts at `0`, not `1`. The last item is at index `array.length - 1`.

## 🧪 Try It Yourself

Create an array of 4 favorite colors. Add a new color using `.push()` and log the total number of colors using `.length`.

## 🎯 Mini Challenge

Write a function `findMax(arr)` that takes an array of numbers and returns the highest number in the array.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Functions](08-functions.md) | [Next: Objects →](10-objects.md)
