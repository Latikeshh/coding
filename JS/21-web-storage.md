# Web Storage (`localStorage` & `sessionStorage`)

> 🟡 Intermediate

## 📖 Definition

Web Storage APIs allow web applications to store key-value data directly in the user's browser:
- `localStorage`: Data persists indefinitely until explicitly cleared (even after closing browser).
- `sessionStorage`: Data lasts only for the duration of the current browser tab session.

---

## 📝 `localStorage` Syntax & Operations

Data in Web Storage must be stored as **strings**. Complex objects must be serialized using `JSON.stringify()`.

```javascript
// 1. Saving simple string data
localStorage.setItem("theme", "dark");

// 2. Retrieving data
const savedTheme = localStorage.getItem("theme");
console.log(savedTheme); // "dark"

// 3. Storing objects/arrays
const userSettings = { fontSize: 16, notifications: true };
localStorage.setItem("settings", JSON.stringify(userSettings));

// 4. Retrieving and parsing objects
const settingsObj = JSON.parse(localStorage.getItem("settings"));
console.log(settingsObj.fontSize); // 16

// 5. Removing data
localStorage.removeItem("theme");

// 6. Clearing all stored items
// localStorage.clear();
```

---

## 💡 Practical Use Case: Persistent Theme Selector

```javascript
// Apply saved theme on page load
const currentTheme = localStorage.getItem("preferredTheme") || "light";
document.body.className = currentTheme;

// Function to update theme
function toggleTheme() {
  const newTheme = document.body.className === "light" ? "dark" : "light";
  document.body.className = newTheme;
  localStorage.setItem("preferredTheme", newTheme);
}
```

---

## 🧪 Try It Yourself

Store your name in `localStorage`. Reload the page and retrieve it using `getItem()`.

## 🎯 Mini Challenge

Create a simple page counter that increments and saves to `localStorage` every time the page refreshes.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Event Delegation](20-event-delegation-and-web-apis.md) | [Next: Error Handling →](22-error-handling.md)
