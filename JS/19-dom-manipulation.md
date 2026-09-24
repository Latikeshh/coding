# DOM Selection & Manipulation

> 🟡 Intermediate

## 📖 Definition

The **Document Object Model (DOM)** represents HTML documents as an object tree structure that JavaScript can manipulate to dynamically update content, styles, and elements.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Select DOM nodes with `querySelector()`. Modify content via `.textContent`, styles via `.classList`, and create nodes via `document.createElement()`.
> - **Hindi:** `document.querySelector()` से HTML एलीमेंट्स चुने जाते हैं और `classList` से CSS क्लासेस बदली जाती हैं।
> - **Marathi:** DOM द्वारे जावास्क्रिप्ट वापरून HTML एलिमेंट्स बदलता येतात.
> - **Hinglish:** DOM manipulation se JS HTML text, classes, aur CSS styles live change kar sakta hai. New elements ke liye `createElement()` use karo.

## 📝 Syntax

```javascript
const heading = document.querySelector("#title");
heading.textContent = "Updated Title";
heading.classList.add("active");

// Creating and appending new DOM nodes
const newLi = document.createElement("li");
newLi.textContent = "New Task Item";
document.querySelector("#list").appendChild(newLi);
```

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Classes & OOP](18-classes-and-oop.md) | [Next: Event Delegation →](20-event-delegation-and-web-apis.md)
