# Fetch API & Working with JSON

> 🔴 Advanced

## 📖 Definition

- **JSON (JavaScript Object Notation):** A lightweight data format used for API communications.
- **Fetch API:** A built-in browser interface used to send HTTP requests (`GET`, `POST`, `PUT`, `DELETE`) to web servers and retrieve API data asynchronously.

---

## 📝 Working with JSON

Converting objects to JSON strings and parsing JSON strings back to objects:

```javascript
const user = { name: "Sophia", age: 26, role: "Designer" };

// 1. Serialize object to JSON string
const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Sophia","age":26,"role":"Designer"}'

// 2. Deserialize JSON string to JS object
const parsedObj = JSON.parse(jsonString);
console.log(parsedObj.name); // "Sophia"
```

---

## 🌐 Making HTTP GET Requests with `fetch()`

```javascript
async function getPosts() {
  try {
    // Make GET request to a public API
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    // Check if HTTP status code is OK (200-299)
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    // Parse response body as JSON
    const post = await response.json();
    console.log("Post Title:", post.title);
  } catch (error) {
    console.error("Fetch Error:", error.message);
  }
}

getPosts();
```

---

## 📤 Making HTTP POST Requests

Sending data to a server API:

```javascript
async function createPost() {
  const newPost = {
    title: "Learning Fetch API",
    body: "JavaScript makes networking easy!",
    userId: 1
  };

  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newPost)
  });

  const data = await response.json();
  console.log("Created Post ID:", data.id);
}

createPost();
```

---

## 🧪 Try It Yourself

Use `fetch("https://jsonplaceholder.typicode.com/users/1")` in your browser console and log the user's name and email address.

## 🎯 Mini Challenge

Fetch a list of 5 posts from `https://jsonplaceholder.typicode.com/posts?_limit=5` and render their titles as an unordered list `<ul>` on an HTML page.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Async & Promises](15-promises-and-async-await.md) | [Next: Prototypes & `this` →](17-prototypes-and-this.md)
