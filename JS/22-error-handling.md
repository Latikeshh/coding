# Error Handling (`try...catch...finally`)

> 🟡 Intermediate

## 📖 Definition

Error handling blocks (`try`, `catch`, `finally`) safely intercept and handle runtime errors, network failures, or invalid inputs without crashing application execution.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Wrap unsafe or async code inside `try {} catch (err) {}`. Code inside `finally {}` runs regardless of success or failure.
> - **Hindi:** ऐप को क्रैश होने से बचाने के लिए रिस्की कोड को `try...catch` ब्लॉक में रखें।
> - **Marathi:** ॲप्लिकेशन क्रॅश होण्यापासून वाचवण्यासाठी `try...catch` ब्लॉक वापरला जातो.
> - **Hinglish:** App crash rokne ke liye network/parse operations ko `try...catch` mein wrap karo. `finally` block hamesha execute hota hai.

## 📝 Syntax

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed!");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log("Result:", result);
} catch (error) {
  console.error("Caught error:", error.message);
} finally {
  console.log("Operation attempt complete.");
}
```

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Web Storage](21-web-storage.md) | [Next: JS Modules →](23-modules.md)
