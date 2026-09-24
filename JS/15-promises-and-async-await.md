# Asynchronous JavaScript, Promises & Async/Await

> 🔴 Advanced

## 📖 Definition

JavaScript is single-threaded. To perform time-consuming operations (network API requests, timers, file access) without freezing the user interface, JavaScript uses **Asynchronous Programming** managed by the **Event Loop**.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Promises handle async operations (`Pending`, `Fulfilled`, `Rejected`). `async`/`await` makes async code look synchronous and clean.
> - **Hindi:** प्रॉमिस (Promise) और `async`/`await` का उपयोग नेटवर्क और टाइमर जैसे एसिंक्रोनस कार्यों को बिना यूआई फ्रीज किए संभालने के लिए होता है।
> - **Marathi:** प्रॉमिस आणि `async`/`await` मुळे नेटवर्क रिक्वेस्टसारखी कामे स्क्रीन गोठवल्याशिवाय (freeze न करता) होतात.
> - **Hinglish:** Promises aur `async`/`await` se asynchronous code (network calls, timers) clean aur predictable tareeqe se handle hota hai.

---

## 1. Promises

A **Promise** represents an asynchronous operation that will complete in the future:
1. `Pending`: Initial state.
2. `Fulfilled`: Successful completion (`resolve()`).
3. `Rejected`: Failed operation (`reject()`).

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

// Consuming a promise
myPromise
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
  .finally(() => console.log("Operation finished."));
```

---

## 2. Modern `async` / `await` Syntax

`async`/`await` is clean syntactic sugar built on Promises. It makes asynchronous code look synchronous and sequential.

```javascript
async function fetchData() {
  try {
    console.log("Fetching...");
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

## 🧪 Try It Yourself

Write a function `delay(ms)` that returns a Promise resolving after `ms` milliseconds. Use `await delay(2000)` inside an `async` function.

## 🎯 Mini Challenge

Create two promises that simulate fetching user profile (500ms) and user posts (1000ms). Use `Promise.all` to log both results once complete.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Closures](14-closures-and-callbacks.md) | [Next: Fetch API & JSON →](16-fetch-api-and-json.md)
