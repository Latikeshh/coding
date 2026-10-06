---
layout: default
title: "19 dom manipulation"
---

# 🌳 DOM Selection, Modification & Dynamic Node Manipulation

> 🟡 Intermediate

## 📖 Definition

The **Document Object Model (DOM)** is an object-oriented representation of an HTML document structured as a logical tree of nodes in memory. JavaScript interacts with the DOM API to dynamically select nodes, update text and HTML content, modify CSS styles, handle attributes, and create or destroy elements in response to user actions.

---

## 🌐 Multilingual Explanation

### English
When a browser loads an HTML page, it parses the markup and constructs an in-memory **DOM Tree**. JavaScript can query any node in this tree (such as `<h1 id="title">`), read or modify its properties, toggle CSS utility classes, and append new elements dynamically without requiring a full web page refresh.

### Hindi (Roman Script)
DOM HTML page ka ek Object Tree representation hai. JavaScript se hum Webpage ke kisi bhi element ko select kar sakte hain (`querySelector`), uska text change kar sakte hain (`textContent`), CSS styles badal sakte hain (`classList.toggle`), aur naye HTML elements create aur append kar sakte hain (`document.createElement`).

### Marathi (Roman Script)
DOM mhanje HTML document cha tree structure. JavaScript cha wapar karun HTML elements badalne, navin elements tayar karne (`document.createElement`), aani CSS styles badalne shakya hote. `textContent` cha wapar karun safe text inject karta yete.

### Hinglish
Dynamic web applications (jaise To-Do apps, shopping carts, live feeds) banane ke liye DOM manipulation sabse important concept hai. Elements ko select karke unme event listeners lagana aur output render karna DOM API se hota hai. `innerHTML` se bachen kyunki yeh XSS attacks ka khatra paida karta hai.

---

## 🌳 The DOM Tree Hierarchy

```text
[ document ]
    │
    ▼
[ <html> ]
    ├── [ <head> ] ──► [ <title> ] ──► "Page Title"
    └── [ <body> ]
          ├── [ <header> ] ──► [ <h1> ] ──► "Welcome"
          └── [ <main> ]   ──► [ <ul id="list"> ]
                                  ├── [ <li class="item"> ] ──► "Item 1"
                                  └── [ <li class="item"> ] ──► "Item 2"
```

---

## 📝 Element Selection Methods Compared

| Selection Method | Description | Return Type | Performance |
| :--- | :--- | :--- | :--- |
| `document.querySelector(selector)` | Returns first matching CSS selector. | Single `Element` or `null` | Fast & Universal |
| `document.querySelectorAll(selector)` | Returns all matching CSS selectors. | Static `NodeList` | Universal |
| `document.getElementById(id)` | Returns element with exact ID. | Single `Element` or `null` | Fastest |
| `document.getElementsByClassName(cls)` | Returns elements with matching class name. | Live `HTMLCollection` | Legacy |

---

## 💡 Practical Production Examples

### Example 1: Safe Content & Class Manipulation

```javascript
// 1. Select elements
const mainHeading = document.querySelector("#main-heading");
const cardContainer = document.querySelector(".card");

// 2. Modify content safely using textContent (Prevents XSS Security Vulnerabilities)
mainHeading.textContent = "Updated Dynamic Dashboard";

// 3. Manipulate Attributes
mainHeading.setAttribute("data-status", "verified");
console.log(mainHeading.getAttribute("data-status")); // "verified"

// 4. Manipulate CSS Classes cleanly via classList
cardContainer.classList.add("active-card", "shadow-lg");
cardContainer.classList.remove("old-theme");
cardContainer.classList.toggle("dark-mode"); // Toggles on/off automatically
```

---

### Example 2: Creating, Appending & Removing Nodes Dynamically

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dynamic Task List</title>
  <style>
    .task-item { padding: 8px; margin: 4px 0; background: #1e293b; color: #38bdf8; border-radius: 4px; }
    .completed { text-decoration: line-through; opacity: 0.6; }
  </style>
</head>
<body>
  <h1>Task Manager</h1>
  <ul id="task-list"></ul>
  <button id="add-task-btn">Add New Task</button>

  <script>
    const taskList = document.querySelector("#task-list");
    const addBtn = document.querySelector("#add-task-btn");

    function createTask(taskText) {
      // Step 1: Create element in memory
      const li = document.createElement("li");

      // Step 2: Configure content & classes
      li.textContent = taskText;
      li.classList.add("task-item");

      // Step 3: Add click-to-remove feature
      li.addEventListener("click", () => {
        li.remove(); // Removes node from DOM
      });

      // Step 4: Append to parent DOM container
      taskList.appendChild(li);
    }

    addBtn.addEventListener("click", () => {
      createTask(`Task item created at ${new Date().toLocaleTimeString()}`);
    });
  </script>
</body>
</html>
```

---

### Example 3: Optimized Bulk Insertion using DocumentFragment

Inserting 1,000 DOM items individually causes 1,000 browser reflows. Use `DocumentFragment` to perform a single batch insertion:

```javascript
const listContainer = document.querySelector("#large-list");

// Create an in-memory light container (causes ZERO browser reflows)
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 1000; i++) {
  const li = document.createElement("li");
  li.textContent = `User Record #${i}`;
  li.classList.add("user-row");
  fragment.appendChild(li); // Appends to in-memory fragment
}

// Perform a single reflow/repaint operation on the live DOM
listContainer.appendChild(fragment);
```

---

## ⚠️ Common Mistakes & Security Vulnerabilities

- **XSS Attacks via `innerHTML`**: Using `element.innerHTML = userInput;` allows attackers to inject malicious `<script>` tags or inline `onload` events. Always use `.textContent` or sanitize inputs.
- **`textContent` vs `innerText` vs `innerHTML`**:
  - `.textContent`: Returns/sets raw text content (Fast & Safe).
  - `.innerText`: Returns human-readable text respecting CSS styling/visibility (Slower due to reflow).
  - `.innerHTML`: Parses string as HTML elements (Security risk if unsanitized).
- **Selecting Before DOM Ready**: Running DOM selection scripts in `<head>` before HTML has parsed results in `null` errors. Solution: Place scripts at bottom of `<body>` or use `<script defer src="...">`.

---

## 🧪 Try It Yourself & Practice Exercises

1. Use `document.querySelector` to select an element by class name, then change its background color to `#2563eb` using `.style.backgroundColor`.
2. Write a script that creates a new `<button>` element with text `"Delete"`, adds class `"btn-danger"`, and appends it to a `<div>`.

---

## 🎯 Mini Challenge

Build a simple interactive counter web page containing:
- An `<h1>` element displaying count `0`.
- An "Increment" button that increases the count by 1 and changes text color to green.
- A "Decrement" button that decreases the count by 1 and changes text color to red if count goes below 0.
- A "Reset" button that resets count back to 0.

---

## 🔗 Related Topics

- [ES6 Classes & Object-Oriented JS](18-classes-and-oop.html)
- [Event Bubbling, Delegation & Web APIs](20-event-delegation-and-web-apis.html)
- [Web Storage (localStorage & sessionStorage)](21-web-storage.html)

---

## 🧭 Navigation

[← JS Home](./) | [← Previous: Classes & OOP](18-classes-and-oop.html) | [Next: Event Delegation →](20-event-delegation-and-web-apis.html)
