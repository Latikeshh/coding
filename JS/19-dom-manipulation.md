# DOM Selection & Manipulation

> 🟡 Intermediate

## 📖 Definition

The **Document Object Model (DOM)** represents HTML documents as a tree structure of objects that JavaScript can inspect, modify, create, and remove.

---

## 🔍 Selecting DOM Elements

```javascript
// Single element selectors
const mainTitle = document.getElementById("main-heading");
const submitBtn = document.querySelector(".btn-submit");

// Multiple element selectors (returns NodeList or HTMLCollection)
const listItems = document.querySelectorAll("ul.tasks > li");
listItems.forEach(item => console.log(item.textContent));
```

---

## 🎨 Modifying Content, Attributes & Styles

```javascript
const box = document.querySelector(".card");

// Updating text and HTML content
box.textContent = "New Card Content";
box.innerHTML = "<h3>Updated Card</h3><p>With subtext</p>";

// Modifying CSS classes (Recommended over inline styles)
box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("highlight");

// Modifying attributes
box.setAttribute("data-status", "completed");
console.log(box.getAttribute("data-status"));
```

---

## ➕ Creating & Appending New Elements

```javascript
// 1. Create element
const newLi = document.createElement("li");

// 2. Set content and classes
newLi.textContent = "Learn DOM Manipulation";
newLi.className = "task-item";

// 3. Append to parent container in document
const taskList = document.querySelector("#task-list");
taskList.appendChild(newLi);

// Removing an element
// newLi.remove();
```

---

## 🧪 Try It Yourself

Create a button in HTML. Write JS that changes the background color of the body to `#f0f0f0` when the button is clicked.

## 🎯 Mini Challenge

Create an empty `<ul>` in HTML. Write a function `addFruit(name)` that creates a new `<li>` with the fruit name and appends it to the list.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Classes & OOP](18-classes-and-oop.md) | [Next: Event Delegation →](20-event-delegation-and-web-apis.md)
