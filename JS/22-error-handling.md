# Error Handling (`try...catch...finally`)

> 🟡 Intermediate

## 📖 Definition

**Error Handling** allows JavaScript programs to intercept, handle, and recover from runtime errors, network failures, or invalid inputs safely without crashing application execution.

## 🇮🇳 Hindi

Program execution ke dauran aane wale unexpected errors ko sambhalne ke liye `try...catch...finally` block ka use hota hai. Risky code ko `try` mein rakha jata hai, error aane par `catch` block execute hota hai, aur `finally` block hamesha run hota hai (error aaye ya na aaye).

## 🚩 Marathi

Application crash honyapasun vachvanyasathi `try...catch...finally` cha wapar kela jato. Custom error dhenyasathi `throw` keyword cha wapar hoto.

## 📝 Error Block Mechanics

1. **`try` Block:** Encloses code that might throw an exception.
2. **`catch(error)` Block:** Executes only if an exception is thrown in `try`.
3. **`finally` Block:** **Always executes**, regardless of whether an error occurred or not (ideal for cleanup tasks like closing spinners).
4. **`throw` Keyword:** Generates a custom user-defined error exception.

## 💡 Complete Example: Custom Error Handling

```javascript
function processPayment(amount, userBalance) {
  try {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Invalid payment amount specified.");
    }

    if (amount > userBalance) {
      throw new Error("Insufficient account balance for transaction.");
    }

    console.log(`Payment of ₹${amount} processed successfully!`);
    return { success: true, remaining: userBalance - amount };

  } catch (error) {
    console.error("Payment Error Caught:", error.name, "-", error.message);
    return { success: false, reason: error.message };

  } finally {
    console.log("Transaction audit log recorded.");
  }
}

// Valid Transaction
processPayment(500, 2000);

// Invalid Transaction (Throws error caught by catch block)
processPayment(3000, 2000);
```

## 👀 Output

```text
Payment of ₹500 processed successfully!
Transaction audit log recorded.
Payment Error Caught: Error - Insufficient account balance for transaction.
Transaction audit log recorded.
```

## 🧪 Try It Yourself

1. Write a function `parseJSON(jsonStr)` that attempts to parse a string using `JSON.parse()`.
2. Wrap it in a `try...catch` block to handle invalid JSON syntax gracefully without crashing.

## ⚠️ Common Mistakes

- Leaving `catch` blocks empty (`catch (err) {}`), which silently hides errors and makes debugging impossible!
- Throwing plain strings (`throw "Error"`) instead of proper Error instances (`throw new Error("Message")`).

## 🌍 Real-World Usage

Validating API network payloads, handling invalid user input forms, catching file upload limits, and database connection retries.

## 💡 Remember

Always throw `new Error("descriptive message")` and log errors inside `catch` blocks.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Web Storage](21-web-storage.md) | [Next: JS Modules →](23-modules.md)
