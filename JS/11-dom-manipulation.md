# DOM Manipulation in JavaScript

> 🟡 Intermediate

## 📖 Definition

The **Document Object Model (DOM)** is a programming interface for HTML documents. It represents the page so that JavaScript can change the document structure, style, and content dynamically.

## 📝 Selecting and Updating HTML Elements

```javascript
// Select elements
let heading = document.querySelector("#main-title");
let button = document.querySelector("#btn");

// Update text content
heading.textContent = "Welcome to Dynamic JS!";

// Update inline styles
heading.style.color = "blue";

// Handle click events
button.addEventListener("click", () => {
  alert("Button was clicked!");
});
```

## 💡 Practical HTML + JS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Example</title>
</head>
<body>
  <h1 id="greeting">Original Heading</h1>
  <button id="changeBtn">Change Text</button>

  <script>
    const title = document.getElementById("greeting");
    const btn = document.getElementById("changeBtn");

    btn.addEventListener("click", () => {
      title.textContent = "Text changed with JS!";
      title.style.color = "green";
    });
  </script>
</body>
</html>
```

## 👀 Output

When the user clicks the "Change Text" button, the heading changes to green text saying `"Text changed with JS!"`.

## ⚠️ Common Mistakes

- Trying to select DOM elements before the HTML page has finished loading (place `<script>` at the bottom of `<body>`).

## 🧪 Try It Yourself

Create an HTML page with a paragraph and a button. Write JS so that clicking the button toggles the text color between red and black.

## 🎯 Mini Challenge

Create a button that increments a score counter shown in an `<h1>` tag every time it is clicked.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Objects](10-objects.md) | [Next: Mini Projects →](12-mini-projects.md)
