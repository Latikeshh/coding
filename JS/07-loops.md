# Loops in JavaScript (`for`, `while`, `for...of`, `for...in`)

> 🟢 Beginner

## 📖 Definition

**Loops** repeat a block of code automatically as long as a specified condition evaluates to `true`. JavaScript supports `for`, `while`, `do...while`, `for...of` (for arrays/strings), and `for...in` (for object properties).

## 🇮🇳 Hindi

Loops ka use kisi code block ko bar-bar execute karne ke liye hota hai jab tak specified condition true rehti hai. Array items iterate karne ke liye `for...of` aur object properties ke liye `for...in` best hai.

## 🚩 Marathi

Loops mule ekach code block punha punha run kela jaat. Condition `true` asel toparyant loop firto. Array iterate karnya sathi `for...of` waparala jato.

## 🤔 Why Do We Use Them?

Instead of writing `console.log()` 100 times manually, a loop can iterate through thousands of database items or render UI lists in milliseconds.

## 📝 Loop Types & Syntax

### 1. Standard `for` Loop
```javascript
for (let i = 1; i <= 5; i++) {
  console.log("Iteration:", i);
}
```

### 2. `while` Loop (Runs while condition is true)
```javascript
let count = 3;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}
```

### 3. `do...while` Loop (Guaranteed to run at least ONCE)
```javascript
let num = 10;
do {
  console.log("Runs once even if condition is false!");
} while (num < 5);
```

### 4. `for...of` Loop (Iterates over Values in iterable arrays or strings)
```javascript
const colors = ["Red", "Green", "Blue"];
for (const color of colors) {
  console.log("Color:", color);
}
```

### 5. `for...in` Loop (Iterates over Keys/Properties in objects)
```javascript
const car = { brand: "Toyota", model: "Corolla", year: 2022 };
for (const key in car) {
  console.log(`${key}: ${car[key]}`);
}
```

## 🧠 `break` vs `continue`

- `break`: Exits the loop immediately.
- `continue`: Skips the rest of the current iteration and moves to the next one.

## 💡 Complete Example

```javascript
// Processing test scores
const testScores = [45, 88, 92, 30, 76];
let passingCount = 0;

for (let i = 0; i < testScores.length; i++) {
  if (testScores[i] < 50) {
    continue; // Skip failing score from passing count
  }
  passingCount++;
}

console.log(`Total Students Passed: ${passingCount} / ${testScores.length}`);
```

## 👀 Output

```text
Total Students Passed: 3 / 5
```

## 🧪 Try It Yourself

1. Write a `for` loop that prints even numbers from `2` to `20`.
2. Use a `for...of` loop to iterate through an array of your top 3 favorite movies.

## ⚠️ Common Mistakes

- Forgetting to increment counter variable in `while` loops, causing an **Infinite Loop** that freezes the browser!
- Using `for...in` on arrays instead of `for...of` (`for...in` returns array indices as strings instead of element values).

## 🌍 Real-World Usage

Rendering lists of items on web pages, calculating order totals, searching through datasets, and retrying network connections.

## 💡 Remember

Use `for...of` for Array values and `for...in` for Object property keys.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Conditionals](06-conditionals.md) | [Next: Functions →](08-functions.md)
