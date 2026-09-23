# Asynchronous JavaScript, Promises & Async/Await

> 🔴 Advanced

## 📖 Definition

JavaScript is **single-threaded**, meaning it executes one task at a time. To prevent long-running tasks (like network calls, database queries, or timers) from freezing the UI, JavaScript uses **Asynchronous Operations** backed by the **Event Loop**.

---

## 1. Promises

A **Promise** represents an asynchronous operation that will complete in the future. It can be in one of three states:
1. `Pending`: Initial state, waiting for result.
2. `Fulfilled`: Operation completed successfully (`resolve()`).
3. `Rejected`: Operation failed (`reject()`).

```javascript
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Data loaded successfully!");
    } else {
      reject("Failed to load data.");
    }
  }, 1000);
});

// Consuming a promise with .then() and .catch()
myPromise
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log("Operation finished."));
```

---

## 2. Modern `async` / `await` Syntax

`async`/`await` is cleaner syntactic sugar built on top of Promises. It lets you write asynchronous code that looks synchronous and sequential.

```javascript
// Function marked as async returns a Promise automatically
async function fetchData() {
  try {
    console.log("Fetching...");
    // Pause execution until promise resolves
    let result = await myPromise;
    console.log("Result:", result);
  } catch (err) {
    console.error("Caught error:", err);
  } finally {
    console.log("Cleanup executed.");
  }
}

fetchData();
```

---

## 👀 Output

```text
Fetching...
(1 second pause)
Result: Data loaded successfully!
Cleanup executed.
```

---

## 💡 `Promise.all()` — Parallel Asynchronous Execution

Run multiple promises concurrently and wait for all to complete:

```javascript
const p1 = Promise.resolve(10);
const p2 = new Promise((res) => setTimeout(() => res(20), 500));
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3]).then((values) => {
  console.log(values); // [10, 20, 30]
});
```

---

## 🧪 Try It Yourself

Write a function `delay(ms)` that returns a Promise resolving after `ms` milliseconds. Use `await delay(2000)` inside an `async` function.

## 🎯 Mini Challenge

Create two promises that simulate fetching user profile (500ms) and user posts (1000ms). Use `Promise.all` to log both results once complete.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Closures](14-closures-and-callbacks.md) | [Next: Fetch API & JSON →](16-fetch-api-and-json.md)
