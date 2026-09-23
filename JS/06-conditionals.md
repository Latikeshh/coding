# Conditionals in JavaScript

> 🟢 Beginner

## 📖 Definition

**Conditional statements** allow your code to make decisions and execute different blocks of code depending on whether a condition is `true` or `false`.

## 📝 Syntax

### `if ... else if ... else`
```javascript
if (condition1) {
  // Runs if condition1 is true
} else if (condition2) {
  // Runs if condition2 is true
} else {
  // Runs if no conditions are true
}
```

## 💡 Practical Example

```javascript
let hour = 14;

if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}
```

## 👀 Output

```text
Good afternoon!
```

## 💡 Switch Statement Example

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week!");
    break;
  case "Friday":
    console.log("Weekend is almost here!");
    break;
  default:
    console.log("Just another day!");
}
```

## ⚠️ Common Mistakes

- Forgetting curly braces `{}` around multi-line blocks.
- Forgetting `break` in `switch` cases, which causes execution to fall through to the next case.

## 🧪 Try It Yourself

Write an `if/else` block that checks if a variable `temperature` is above `30` (print "Hot"), between `15` and `30` (print "Pleasant"), or below `15` (print "Cold").

## 🎯 Mini Challenge

Create a simple grading system where marks `>= 90` gives `"A"`, `>= 75` gives `"B"`, and lower gives `"C"`.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Operators](05-operators.md) | [Next: Loops →](07-loops.md)
