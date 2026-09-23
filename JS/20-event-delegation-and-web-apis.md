# Event Bubbling, Delegation & Web APIs

> 🔴 Advanced

## 📖 Definition

- **Event Bubbling:** When an event triggers on an element, it bubbles up through its ancestors (parent, grandparent, `document`) in the DOM tree.
- **Event Delegation:** A design pattern that attaches a single event listener to a parent container to manage events for all existing and dynamically added child elements.

---

## 🌊 Event Bubbling & Capturing

```html
<div id="parent" style="padding: 20px; background: lightgray;">
  <button id="child">Click Me</button>
</div>

<script>
  const parent = document.querySelector("#parent");
  const child = document.querySelector("#child");

  parent.addEventListener("click", () => {
    console.log("Parent clicked!");
  });

  child.addEventListener("click", (event) => {
    console.log("Child clicked!");
    // Stop event from bubbling up to parent:
    // event.stopPropagation();
  });
</script>
```

When clicking `#child`, console outputs:
1. `Child clicked!`
2. `Parent clicked!` (due to bubbling)

---

## 🎯 Event Delegation Pattern

Instead of adding event listeners to hundreds of list items individually, add **one** listener to the container `<ul id="todo-list">`:

```javascript
const todoList = document.querySelector("#todo-list");

todoList.addEventListener("click", (event) => {
  // Check if click target is a delete button
  if (event.target.classList.contains("delete-btn")) {
    const itemToRemove = event.target.closest("li");
    itemToRemove.remove();
    console.log("Task deleted!");
  }
});
```

---

## 🧪 Try It Yourself

Create an HTML list with 3 items. Add a single event listener on the parent `<ul>` that logs the text of whichever `<li>` is clicked.

## 🎯 Mini Challenge

Add a "Delete" button inside each dynamically generated list item and use event delegation to remove the corresponding list item when clicked.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: DOM Manipulation](19-dom-manipulation.md) | [Next: Web Storage →](21-web-storage.md)
