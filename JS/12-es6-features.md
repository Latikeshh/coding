# Modern ES6+ Features

> 🟡 Intermediate

## 📖 Definition

ES6 (ECMAScript 2015) and subsequent modern JavaScript standards introduced features that improve developer productivity, code conciseness, and safety: **Template Literals**, **Destructuring**, **Spread & Rest Operators**, **Default Parameters**, **Optional Chaining (`?.`)**, and **Nullish Coalescing (`??`)**.

## 🇮🇳 Hindi

Modern ES6+ features se JavaScript code bahut clean, short, aur safe ban jaata hai. Array aur Object Destructuring, Spread/Rest operators (`...`), Template Literals, aur Optional Chaining modern frontend development (React, Vue, Node.js) mein compulsory use hote hain.

## 🚩 Marathi

Modern ES6+ features mule JavaScript code swachha (clean) aani samjayla sopa hoto. Destructuring, Spread/Rest operators (`...`), aani Optional Chaining sarakhe features modern development madhye khup mahatvache ahet.

## 📝 Modern Features Breakdown

### 1. Template Literals (`` `${variable}` ``)
Allows multi-line strings and expression interpolation directly without messy string concatenation.

### 2. Destructuring (Objects & Arrays)
Extracts properties from objects or values from arrays directly into distinct variables.

```javascript
// Object Destructuring
const user = { name: "Sneha", age: 24, location: "Delhi" };
const { name, location } = user;

// Array Destructuring
const rgb = [255, 128, 0];
const [red, green] = rgb;
```

### 3. Spread Operator (`...`)
Expands arrays or objects into individual elements.

```javascript
const fruits = ["Apple", "Banana"];
const allFruits = [...fruits, "Cherry", "Mango"]; // Copies & merges

const baseConfig = { theme: "dark" };
const userConfig = { ...baseConfig, fontSize: 16 };
```

### 4. Rest Parameters (`...`)
Bundles remaining arguments into an array.

```javascript
function calculateScore(player, ...scores) {
  let total = scores.reduce((sum, s) => sum + s, 0);
  return `${player}'s Total Score: ${total}`;
}
```

### 5. Optional Chaining (`?.`) & Nullish Coalescing (`??`)
Safely navigates nested objects without throwing runtime errors.

```javascript
const userProfile = { details: { email: "sneha@example.com" } };
console.log(userProfile?.address?.city ?? "City Not Specified"); // "City Not Specified"
```

## 💡 Complete Example

```javascript
const employee = {
  id: 501,
  personal: {
    first: "Amit",
    last: "Kumar"
  },
  roles: ["Developer", "Mentor"]
};

// Destructuring with renaming and nested extraction
const { personal: { first: firstName }, roles: [primaryRole] } = employee;

// Spread to copy and update
const updatedEmployee = {
  ...employee,
  department: "Engineering",
  roles: [...employee.roles, "Team Lead"]
};

console.log(`Employee: ${firstName}, Primary Role: ${primaryRole}`);
console.log("Updated Roles:", updatedEmployee.roles);
console.log("Optional ZipCode Check:", employee.address?.zipCode ?? "No Zipcode Found");
```

## 👀 Output

```text
Employee: Amit, Primary Role: Developer
Updated Roles: [ 'Developer', 'Mentor', 'Team Lead' ]
Optional ZipCode Check: No Zipcode Found
```

## 🧪 Try It Yourself

1. Given `const person = { name: "Ravi", age: 28, city: "Pune" }`, extract `name` and `city` using object destructuring.
2. Merge two arrays `[1, 2]` and `[3, 4]` using the Spread operator.

## ⚠️ Common Mistakes

- Trying to destructure `undefined` or `null` objects (`const { a } = null` throws `TypeError`).
- Confusing Spread (expands array into items) with Rest (collects multiple items into array).

## 🌍 Real-World Usage

Handling API responses in React props, state updates in Redux, default parameter configuration in libraries, and clean payload construction.

## 💡 Remember

Use destructuring for cleaner parameter handling, spread for immutable state copies, and optional chaining to prevent `Cannot read properties of undefined` errors.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Scope & Hoisting](11-scope-and-hoisting.md) | [Next: Advanced Array Methods →](13-advanced-array-methods.md)
