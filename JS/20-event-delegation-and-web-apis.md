# Event Bubbling, Delegation & Web APIs

> 🔴 Advanced

## 📖 Definition

- **Event Listener:** A function attached to a DOM node that executes when a specific event (like `click`, `submit`, `keydown`) occurs.
- **Event Bubbling:** The process where an event triggered on a deeply nested child node bubbles up through parent ancestor nodes in the DOM tree.
- **Event Delegation:** High-performance pattern where a single event listener is attached to a parent container to handle events triggered by current or future child elements.

## 🇮🇳 Hindi

DOM Events bottom se top parent elements tak bubble hote hain (**Event Bubbling**). Sabhi child buttons par alag-alag listeners lagane ke bajaye unke parent container par ek single listener lagana **Event Delegation** kehlata hai. Isse app performance aur memory optimization dono imrpove hote hain.

## 🚩 Marathi

Event trigger jhalyavar to varcha parent elements kade sarakto (**Event Bubbling**). Pratyek chhotya element varti listener lavnya peksha parent element varti ekach listener lavne mhanje **Event Delegation**.

## 🧠 Event Bubbling vs Capturing

1. **Capturing Phase:** Event travels down from `window` to target element.
2. **Target Phase:** Event reaches the target element.
3. **Bubbling Phase (Default):** Event bubbles up from target back up to `window`.

```javascript
// Stopping propagation
element.addEventListener("click", (event) => {
  event.stopPropagation(); // Stops event from bubbling up to parent
});

// Preventing default action (e.g. form submission page reload)
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevents page refresh
});
```

## 💡 Complete Example: High-Performance Event Delegation

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Event Delegation</title>
</head>
<body>
  <h2>Interactive Todo List</h2>
  <ul id="todo-container">
    <li class="todo-item">Task 1 <button class="delete-btn">Delete</button></li>
    <li class="todo-item">Task 2 <button class="delete-btn">Delete</button></li>
  </ul>

  <script>
    const container = document.querySelector("#todo-container");

    // Single listener on PARENT <ul> container instead of individual items!
    container.addEventListener("click", (event) => {
      // event.target is the exact element clicked
      if (event.target.classList.contains("delete-btn")) {
        const itemToRemove = event.target.closest(".todo-item");
        itemToRemove.remove();
        console.log("Task deleted efficiently!");
      }
    });
  </script>
</body>
</html>
```

## 🧠 `event.target` vs `event.currentTarget`

- `event.target`: The actual element that triggered the event (e.g., specific `<button>` clicked inside a container).
- `event.currentTarget`: The element to which the event listener is attached (e.g., parent `<ul>` container).

## 🧪 Try It Yourself

1. Add a form with a text input and submit button.
2. Use `event.preventDefault()` inside the submit event listener to prevent page reloads and log the input text.

## ⚠️ Common Mistakes

- Attaching hundreds of individual event listeners inside loops on dynamic lists, causing memory bloat and memory leaks.
- Confusing `event.target` (clicked child node) with `event.currentTarget` (listening parent node).

## 🌍 Real-World Usage

Dynamic list deletions, infinite scroll feeds, data tables, form validations, and keyboard navigation listeners.

## 💡 Remember

Use Event Delegation for dynamic lists to keep memory lightweight and code simple.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: DOM Manipulation](19-dom-manipulation.md) | [Next: Web Storage →](21-web-storage.md)
