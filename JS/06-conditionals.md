# Conditionals in JavaScript (`if`, `switch`, Ternary)

> 🟢 Beginner

## 📖 Definition

**Conditional statements** direct the flow of execution in a program based on whether specified expressions evaluate to `true` or `false`.

## 🇮🇳 Hindi

Conditionals ka use decision-making ke liye hota hai. Jab humein alag-alag conditions ke basis par alag-alag code execution karwana hota hai, tab hum `if`, `else if`, `else`, `switch`, aur Ternary operator ka use karte hain.

## 🚩 Marathi

Conditionals cha wapar nirnay ghenyasathi (decision making) kela jato. Condition `true` ahe ki `false` yavrun konta code block run hoiil he tharle jate.

## 🤔 Why Do We Use Them?

Real-world applications adapt based on data—for example, showing "Welcome Admin" if the user is an admin, or "Access Denied" if they are logged out.

## 🧠 Truthy and Falsy Values

In JavaScript, every value evaluates to either `true` or `false` when placed in a boolean context.

### The 6 Falsy Values in JavaScript:
1. `false`
2. `0` (and `-0`, `0n`)
3. `""` (empty string)
4. `null`
5. `undefined`
6. `NaN` (Not a Number)

*Everything else is **Truthy*** (including `"0"`, `"false"`, `[]`, `{}`).

## 📝 Syntax & Conditional Types

### 1. `if...else if...else`
```javascript
let mark = 82;

if (mark >= 90) {
  console.log("Grade: A+");
} else if (mark >= 75) {
  console.log("Grade: A");
} else if (mark >= 50) {
  console.log("Grade: B");
} else {
  console.log("Grade: F");
}
```

### 2. Ternary Operator (`condition ? expressionIfTrue : expressionIfFalse`)
```javascript
let userAge = 20;
let accessStatus = (userAge >= 18) ? "Allowed" : "Denied";
console.log(accessStatus); // "Allowed"
```

### 3. `switch` Statement (Best for checking fixed discrete values)
```javascript
let dayNumber = 3;

switch (dayNumber) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other Day");
}
```

## 💡 Complete Example

```javascript
const cartTotal = 1200;
const isVIPMember = true;
let discountPercent = 0;

if (isVIPMember) {
  discountPercent = 20;
} else if (cartTotal >= 1000) {
  discountPercent = 10;
} else {
  discountPercent = 0;
}

let finalAmount = cartTotal - (cartTotal * (discountPercent / 100));
console.log(`Discount Applied: ${discountPercent}%`);
console.log(`Final Payable Amount: ₹${finalAmount}`);
```

## 👀 Output

```text
Discount Applied: 20%
Final Payable Amount: ₹960
```

## 🧪 Try It Yourself

1. Write an `if...else` statement that checks if a given number is even or odd using `% 2 === 0`.
2. Rewrite it using a single-line Ternary operator.

## ⚠️ Common Mistakes

- Forgetting `break;` statements in a `switch` block, causing execution to "fall through" into subsequent cases.
- Confusing single `=` (assignment) with `===` (comparison) inside an `if` statement condition.

## 🌍 Real-World Usage

Role-based authorization checks, form validation logic, checkout discounts, and light/dark theme toggles.

## 💡 Remember

Use `if...else` for range checks, `switch` for multiple fixed values, and Ternary for simple binary choices.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Operators](05-operators.md) | [Next: Loops →](07-loops.md)
