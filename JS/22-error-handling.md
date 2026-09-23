# Error Handling (`try...catch...finally`)

> 🟡 Intermediate

## 📖 Definition

Error handling prevents your application from crashing when unexpected runtime errors or network failures occur.

---

## 📝 Syntax & Custom Errors

```javascript
function divide(a, b) {
  if (b === 0) {
    // Throwing a custom Error object
    throw new Error("Division by zero is not allowed!");
  }
  return a / b;
}

try {
  console.log("Attempting division...");
  let result = divide(10, 0);
  console.log("Result:", result);
} catch (error) {
  // Catch and handle error
  console.error("Caught an error:", error.name, "-", error.message);
} finally {
  // Always executes regardless of error or success
  console.log("Cleanup: Division attempt finished.");
}
```

---

## 👀 Output

```text
Attempting division...
Caught an error: Error - Division by zero is not allowed!
Cleanup: Division attempt finished.
```

---

## 💡 Custom Error Classes

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAge(age) {
  if (age < 0) {
    throw new ValidationError("Age cannot be negative.");
  }
  return true;
}
```

---

## 🧪 Try It Yourself

Write a function `parseJSON(str)` that uses `try/catch` to safely parse JSON strings and returns `null` if parsing fails.

## 🎯 Mini Challenge

Create a custom error `AuthenticationError` and throw it when a user's password length is less than 8 characters.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Web Storage](21-web-storage.md) | [Next: JS Modules →](23-modules.md)
