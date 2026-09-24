# DOM Selection & Manipulation

> 🟡 Intermediate

## 📖 Definition

The **Document Object Model (DOM)** represents an HTML document as a logical node tree in memory. JavaScript manipulates DOM nodes to dynamically change text content, update CSS styles, alter attributes, and create or remove elements in real time.

## 🇮🇳 Hindi

DOM ek object tree hota hai jo Webpage ki HTML document ko representation deta hai. JavaScript ka use karke hum elements ko select kar sakte hain (`querySelector`), text badal sakte hain (`textContent`), styling aur classes control kar sakte hain (`classList`), aur naye elements add ya remove kar sakte hain.

## 🚩 Marathi

DOM mhanje HTML document cha tree structure. JavaScript cha wapar karun HTML elements badalne, navin elements tayar karne (`document.createElement`), aani CSS styles badalne shakya hote.

## 📝 Common Selection Methods

| Method | What It Selects | Return Type |
|---|---|---|
| `document.querySelector(selector)` | First element matching CSS selector | Element or `null` |
| `document.querySelectorAll(selector)`| All elements matching CSS selector | Static `NodeList` |
| `document.getElementById(id)` | Single element with specified ID | Element or `null` |

## 📝 Modification Operations

```javascript
// Selecting elements
const heading = document.querySelector("#main-title");
const items = document.querySelectorAll(".list-item");

// Modifying Content (.textContent is safer than .innerHTML)
heading.textContent = "Dynamic JavaScript Title";

// Modifying Attributes & Classes
heading.setAttribute("data-status", "active");
heading.classList.add("highlight");
heading.classList.remove("old-class");
heading.classList.toggle("dark-mode");

// Modifying Styles directly
heading.style.color = "deepskyblue";
heading.style.fontSize = "24px";
```

## 💡 Complete Example: Creating & Appending DOM Nodes

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM Practice</title>
</head>
<body>
  <h1 id="app-heading">Shopping List</h1>
  <ul id="item-list">
    <li class="item">Apples</li>
  </ul>
  <button id="add-btn">Add Item</button>

  <script>
    const listContainer = document.querySelector("#item-list");

    function addNewItem(itemName) {
      // 1. Create element
      const newLi = document.createElement("li");

      // 2. Add text & class
      newLi.textContent = itemName;
      newLi.classList.add("item");

      // 3. Append to parent container
      listContainer.appendChild(newLi);
    }

    addNewItem("Bananas");
    addNewItem("Oranges");
  </script>
</body>
</html>
```

## 🧪 Try It Yourself

1. Use `document.querySelector` to select a button by its ID.
2. Change its text content to `"Clicked!"` and background color to green using JavaScript.

## ⚠️ Common Mistakes

- Using `innerHTML` with user-supplied inputs without sanitization (exposes application to Cross-Site Scripting / **XSS attacks**!). Prefer `.textContent` for text.
- Trying to select elements before the DOM has loaded (solution: place script at bottom of body or use `defer`).

## 🌍 Real-World Usage

Dynamic UI rendering, notification alerts, dynamic drop-down menus, modal popups, and tab navigation interfaces.

## 💡 Remember

Prefer `querySelector` for flexibility and `.textContent` for safe text injection.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Classes & OOP](18-classes-and-oop.md) | [Next: Event Delegation →](20-event-delegation-and-web-apis.md)
