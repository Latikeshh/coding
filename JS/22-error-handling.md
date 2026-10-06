---
layout: default
title: "22 error handling"
---

# 🛡️ Error Handling in JavaScript (`try...catch...finally` & Custom Errors)

> 🟡 Intermediate

## 📖 Definition

**Error Handling** in JavaScript is a defensive programming mechanism that allows applications to gracefully intercept, process, and recover from runtime exceptions, network request failures, and invalid user inputs without terminating script execution or crashing the application UI.

---

## 🌐 Multilingual Explanation

### English
In JavaScript, unexpected runtime exceptions (such as network timeouts, invalid JSON payloads, or accessing properties on `undefined`) interrupt the standard Call Stack execution. The `try...catch...finally` block intercepts these exceptions. Custom errors can be manually triggered using the `throw` keyword.

### Hindi (Roman Script)
Jab JavaScript code run hota hai, toh runtime par aane wale errors app ko crash kar sakte hain. Unhe handle karne ke liye `try...catch...finally` use karte hain. Risky code `try` mein hota hai, error aane par `catch` run hota hai, aur `finally` block hamesha execute hota hai (resource cleanup ke liye).

### Marathi (Roman Script)
JavaScript application crash honyapasun vachvanyasathi `try...catch...finally` cha wapar kela jato. Network API calls kiwa invalid input handle karnyasathi `throw new Error()` dwaare custom error raise karta yeto.

### Hinglish
JavaScript mein 6 standard built-in Error types hote hain (jaise `TypeError`, `ReferenceError`). Asynchronous code (`async/await`) mein API calls reject hone par `try...catch` block se error capture kiya jata hai taaki UI par friendly fallback error message dikhaya ja sake.

---

## 🧱 The Mechanics of `try...catch...finally`

```text
[ try Block ] ──► Executes code statements
       │
       ├──► No Exception ──────────────┐
       │                               ▼
       └──► Exception Thrown ──► [ catch(error) Block ] ──► Intercepts & logs error
                                       │
                                       ▼
                             [ finally Block ] ──► ALWAYS executes (Cleanup / Stop Spinner)
```

1. **`try` Block**: Encloses code statements that might throw an exception.
2. **`catch(error)` Block**: Executes ONLY if an exception occurs inside the `try` block. Receives the `Error` object containing `.name`, `.message`, and `.stack`.
3. **`finally` Block**: ALWAYS executes regardless of success or failure. Ideal for hiding loading spinners or closing file handles.
4. **`throw` Statement**: Generates a user-defined custom exception instance.

---

## 🏷️ Standard Built-in Error Types in JavaScript

| Error Type | Cause | Example Trigger |
| :--- | :--- | :--- |
| **`TypeError`** | Value is not of expected type or method call on `null`/`undefined`. | `null.toUpperCase()` |
| **`ReferenceError`** | Variable name is invalid or accessed in Temporal Dead Zone. | `console.log(x); // x unassigned` |
| **`SyntaxError`** | Invalid JavaScript code or malformed JSON payload. | `JSON.parse("invalid json")` |
| **`RangeError`** | Numeric value is out of valid range or infinite recursion. | `new Array(-5)` or Stack Overflow |
| **`URIError`** | Malformed URI encoding or decoding parameters. | `decodeURIComponent("%")` |

---

## 💡 Practical Production Examples

### Example 1: Custom Error Classes & Form Input Validation

```javascript
// 1. Custom Error Subclass
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

// 2. Validation Function
function registerUser(username, age) {
  try {
    if (!username || username.trim().length < 3) {
      throw new ValidationError("Username must be at least 3 characters.", "username");
    }

    if (typeof age !== "number" || age < 18) {
      throw new ValidationError("User must be 18 years or older.", "age");
    }

    console.log(`User ${username} registered successfully!`);
    return { status: "SUCCESS" };

  } catch (error) {
    if (error instanceof ValidationError) {
      console.error(`[Validation Failed] Field '${error.field}': ${error.message}`);
    } else {
      console.error(`[System Error]: ${error.message}`);
    }
    return { status: "FAILED", error: error.message };

  } finally {
    console.log("Registration attempt audit logged.");
  }
}

// Test cases
registerUser("Al", 22);     // Fails username validation
registerUser("Rohan", 16);  // Fails age validation
registerUser("Rohan", 24);  // Succeeds
```

---

### Example 2: Asynchronous Error Handling in Fetch API with `async/await`

```javascript
async function fetchUserProfile(userId) {
  const loadingSpinner = { visible: true };

  try {
    console.log(`Fetching user profile #${userId}...`);
    const response = await fetch(`https://api.example.com/users/${userId}`);

    // Fetch API does NOT reject HTTP 404/500 automatically; check response.ok!
    if (!response.ok) {
      throw new Error(`HTTP Request Failed with Status Code: ${response.status}`);
    }

    const userData = await response.json();
    console.log("User Profile Loaded:", userData);
    return userData;

  } catch (error) {
    console.error("Network or API Error:", error.message);
    // Display user-friendly UI fallback
    return { id: userId, name: "Anonymous Guest", isFallback: true };

  } finally {
    loadingSpinner.visible = false;
    console.log("Loading spinner hidden.");
  }
}
```

---

## ⚠️ Common Mistakes & Pitfalls

- **Silently Swallowing Errors**: Leaving `catch (err) {}` empty hides errors entirely, making application bugs impossible to track down.
- **Throwing Plain Strings**: Writing `throw "Something went wrong";` instead of `throw new Error("Something went wrong");` loses the Call Stack trace (`.stack`).
- **Ignoring Fetch API `response.ok`**: Assuming `fetch()` throws an error on HTTP 404 or 500 errors. `fetch()` only rejects on network disconnects. Always check `if (!response.ok) throw new Error(...)`.

---

## 🧪 Try It Yourself & Practice Exercises

1. Write a function `safeJsonParse(jsonString)` that attempts `JSON.parse()`. If valid, return the object; if invalid JSON, catch the error and return `null`.
2. Write a function `divideNumbers(a, b)` that throws a custom error if `b === 0` ("Division by zero is undefined").

---

## 🎯 Mini Challenge

Build a secure password validator function `validatePassword(password)`:
- `try` block checks if password length is at least 8 characters, contains at least one digit, and contains at least one special symbol.
- If any check fails, `throw` a `ValidationError` with a descriptive message.
- Use `catch` to log the failure and `finally` to record an authentication attempt log.

---

## 🔗 Related Topics

- [Asynchronous JS, Promises & Async/Await](15-promises-and-async-await.html)
- [Fetch API & Working with JSON](16-fetch-api-and-json.html)
- [Web Storage & Session Management](21-web-storage.html)

---

## 🧭 Navigation

[← JS Home](./) | [← Previous: Web Storage](21-web-storage.html) | [Next: JS Modules →](23-modules.html)
