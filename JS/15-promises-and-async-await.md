# Asynchronous JS, Promises & Async/Await

> 🔴 Advanced

## 📖 Definition

JavaScript is single-threaded. To prevent time-consuming operations (API calls, timers, file I/O) from freezing the user interface, JavaScript handles them asynchronously using the **Event Loop**, **Promises**, and **`async`/`await`** syntax.

## 🇮🇳 Hindi

JavaScript single-threaded hai, isliye heavy background operations (jaise network requests ya delay timers) asynchronous way mein handal hote hain. `Promise` ek future value represent karta hai (`Pending`, `Fulfilled`, `Rejected`). Modern `async/await` syntax asynchronous code ko synchronous ki tarah clean aur readable banati hai.

## 🚩 Marathi

JavaScript eka veli ekach kaam karu shakte (single-threaded). Network requests mule app freeze hou naye mhanun Asynchronous JS cha wapar kela jato. `async/await` mule promises waaparnya sathi sopa code lihita yeto.

## 🧠 The 3 States of a Promise

1. **Pending:** Initial state, operation in progress.
2. **Fulfilled (`resolve`):** Operation completed successfully.
3. **Rejected (`reject`):** Operation failed with an error.

## 📝 Syntax Comparison

### 1. Traditional Promises (`.then()` / `.catch()`)
```javascript
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isConnected = true;
      if (isConnected) {
        resolve({ id: 1, name: "Vikram" });
      } else {
        reject("Database connection failed!");
      }
    }, 1000);
  });
}

fetchUserData()
  .then(data => console.log("User Loaded:", data.name))
  .catch(err => console.error("Error:", err))
  .finally(() => console.log("Fetch attempt ended."));
```

### 2. Modern `async` / `await` Syntax
`async` functions automatically return a Promise. The `await` keyword pauses function execution until the promise settles.

```javascript
async function getUser() {
  try {
    console.log("Fetching user...");
    const user = await fetchUserData();
    console.log("User Name:", user.name);
  } catch (error) {
    console.error("Caught error:", error);
  } finally {
    console.log("Cleanup completed.");
  }
}

getUser();
```

### 3. Parallel Async Execution (`Promise.all`)
Runs multiple asynchronous operations simultaneously for maximum performance.

```javascript
const promiseA = new Promise(res => setTimeout(() => res("Data A"), 500));
const promiseB = new Promise(res => setTimeout(() => res("Data B"), 1000));

async function fetchAll() {
  const [resA, resB] = await Promise.all([promiseA, promiseB]);
  console.log("Both completed:", resA, resB);
}
fetchAll();
```

## 👀 Output

```text
Fetching user...
(1 second delay)
User Name: Vikram
Cleanup completed.
Both completed: Data A Data B
```

## 🧪 Try It Yourself

1. Create a function `delay(ms)` that returns a Promise resolving after `ms` milliseconds.
2. Use `await delay(2000)` inside an `async` function to simulate a 2-second loading timer.

## ⚠️ Common Mistakes

- Believing `async`/`await` makes JavaScript multi-threaded or truly synchronous. It is non-blocking syntax built on Promises!
- Forgetting `try...catch` around `await` calls, causing uncaught promise rejection errors.

## 🌍 Real-World Usage

Fetching REST API data, querying databases, handling file uploads, set timeouts, and smooth user loading spinners.

## 💡 Remember

Always wrap `await` calls in `try...catch` blocks for robust error handling.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Closures](14-closures-and-callbacks.md) | [Next: Fetch API & JSON →](16-fetch-api-and-json.md)
