# Event Bubbling, Delegation & Web APIs

> 🔴 Advanced

## 📖 Definition

- **Event Bubbling:** Events triggered on child elements bubble up through parent ancestor DOM elements.
- **Event Delegation:** Attaching a single event listener to a parent container to manage events for all current and future child elements.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Event bubbling triggers parent handlers as events float up. Event delegation uses one parent listener to manage dynamic child elements efficiently.
> - **Hindi:** इवेंट बब्लिंग (Event Bubbling) में इवेंट नीचे से ऊपर पैरेंट टैग्स तक जाता है। इवेंट डेलीगेशन से पैरेंट पर एक ही लिसनर लगाकर काम हो जाता है।
> - **Marathi:** इव्हेंट बबलिंगमुळे इव्हेंट वरच्या पॅरेंट एलिमेंटकडे सरकतो.
> - **Hinglish:** Performance optimization ke liye event delegation best hai: Har child par alag listener lagane ke bajaye parent par single listener lagao.

## 📝 Event Delegation Syntax

```javascript
// Single listener on parent <ul> container
document.querySelector("#todo-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.closest("li").remove(); // Removes target list item
  }
});
```

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: DOM Manipulation](19-dom-manipulation.md) | [Next: Web Storage →](21-web-storage.md)
