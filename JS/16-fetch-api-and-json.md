# Fetch API & Working with JSON

> 🔴 Advanced

## 📖 Definition

- **JSON (JavaScript Object Notation):** A lightweight, text-based data format used to transmit structured data between client web applications and backend servers.
- **Fetch API:** A modern browser API that provides an interface for making asynchronous HTTP requests (`GET`, `POST`, `PUT`, `DELETE`).

## 🇮🇳 Hindi

Server aur browser ke beech data transmit karne ke liye **JSON** format ka use hota hai. `JSON.stringify()` JS object ko JSON string mein convert karta hai aur `JSON.parse()` JSON string ko object mein convert karta hai. Web API se data fetch karne ke liye `fetch()` method ka use hota hai.

## 🚩 Marathi

Server kadun data annyasathi kiva dhenyasathi **JSON** format cha wapar kela jato. Browser madhun network request pathvanyasathi `fetch()` API cha wapar hoto.

## 📝 Essential JSON Methods

```javascript
const userObj = { name: "Kavita", role: "Developer" };

// Object -> JSON String (Sending to server or saving in storage)
const jsonString = JSON.stringify(userObj);
console.log(typeof jsonString); // "string"

// JSON String -> JS Object (Parsing received data)
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj.name); // "Kavita"
```

## 🧠 CRITICAL: `fetch()` Error Handling Rules

A common mistake is assuming HTTP 404 or 500 errors cause `fetch()` to reject.

> ⚠️ **Important:** `fetch()` Promises **ONLY reject on network failures** (e.g., lost internet connection or DNS failure). For HTTP error codes (like 404 Not Found or 500 Server Error), `fetch()` resolves normally, and you must check `response.ok` or `response.status`!

## 💡 Complete Example: Modern `async/await` Fetch Request

```javascript
async function fetchPostDetails(postId) {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  try {
    const response = await fetch(url);

    // Manual status check for HTTP 404/500 errors
    if (!response.ok) {
      throw new Error(`HTTP Error Status: ${response.status} (${response.statusText})`);
    }

    const postData = await response.json();
    console.log("Post Title:", postData.title);
    console.log("Post Body:", postData.body);

  } catch (error) {
    // Handles network failure OR manually thrown HTTP errors
    console.error("Fetch Request Failed:", error.message);
  }
}

fetchPostDetails(1);
```

## 💡 Making POST Requests with Body Data

```javascript
async function createNewPost(newPostData) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPostData)
    });

    if (!response.ok) throw new Error("Failed to create post");

    const result = await response.json();
    console.log("Created Post ID:", result.id);
  } catch (err) {
    console.error("POST Error:", err.message);
  }
}

createNewPost({ title: "Learning JS", body: "Fetch API is great!", userId: 1 });
```

## 👀 Output

```text
Post Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit
Post Body: quia et suscipit...
Created Post ID: 101
```

## 🧪 Try It Yourself

1. Fetch user data from `https://jsonplaceholder.typicode.com/users/1` and log the user's name and company name.
2. Add a `try...catch` block and check `response.ok`.

## ⚠️ Common Mistakes

- Forgetting `await response.json()` is an asynchronous operation itself that returns a Promise!
- Forgetting to check `if (!response.ok)` and assuming a 404 response automatically goes to the `catch` block.

## 🌍 Real-World Usage

Loading news feeds, submitting login forms, fetching weather updates, sending analytics events, and e-commerce checkout.

## 💡 Remember

Check `response.ok` before calling `response.json()` to handle HTTP errors cleanly.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Promises & Async/Await](15-promises-and-async-await.md) | [Next: Prototypes & `this` →](17-prototypes-and-this.md)
