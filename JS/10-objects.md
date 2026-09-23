# Objects in JavaScript

> 🟡 Intermediate

## 📖 Definition

An **object** is a collection of key-value pairs used to store structured, related data.

## 📝 Syntax

```javascript
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  start: function() {
    console.log("Engine started!");
  }
};

// Accessing properties (Dot notation or Bracket notation)
console.log(car.brand);        // "Toyota"
console.log(car["model"]);    // "Corolla"
car.start();                   // Runs the function
```

## 💡 Practical Example

```javascript
let student = {
  name: "Emily",
  age: 20,
  subjects: ["Math", "Physics", "Computer Science"],
  isEnrolled: true
};

console.log(student.name + " is studying " + student.subjects[0]);
```

## 👀 Output

```text
Emily is studying Math
```

## ⚠️ Common Mistakes

- Forgetting commas between key-value pairs inside an object literal.

## 🧪 Try It Yourself

Create a `book` object with properties for `title`, `author`, `pages`, and `isRead`. Log the title and author.

## 🎯 Mini Challenge

Add a method `summary()` to your `book` object that returns `"The book [title] was written by [author]."`.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Arrays](09-arrays.md) | [Next: DOM Manipulation →](11-dom-manipulation.md)
