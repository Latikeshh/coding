# Web Storage (`localStorage` & `sessionStorage`)

> 🟡 Intermediate

## 📖 Definition

Web Storage APIs persist key-value string data directly inside the user's browser:
- `localStorage`: Data persists permanently across browser restarts until cleared.
- `sessionStorage`: Data lasts only for the duration of the active browser tab session.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `localStorage` persists key-value data permanently. `sessionStorage` clears when tab closes. Use `JSON.stringify()` / `JSON.parse()` for objects.
> - **Hindi:** `localStorage` डेटा को ब्राउज़र बंद होने के बाद भी सुरक्षित रखता है। ऑब्जेक्ट्स स्टोर करने के लिए `JSON.stringify()` का प्रयोग करें।
> - **Marathi:** `localStorage` मधील डेटा ब्राउझर बंद केल्यावरही साठवलेला राहतो.
> - **Hinglish:** Persistent data (jaise user theme preferences) ke liye `localStorage` use karo. Objects store karte waqt `JSON.stringify()` aur `JSON.parse()` zaroori hai.

## 📝 Syntax & Operations

```javascript
// 1. Saving simple string
localStorage.setItem("theme", "dark");

// 2. Saving objects/arrays
const userSettings = { fontSize: 16, theme: "dark" };
localStorage.setItem("settings", JSON.stringify(userSettings));

// 3. Retrieving and parsing objects
const settings = JSON.parse(localStorage.getItem("settings"));
console.log(settings.fontSize); // 16

// 4. Removing items
localStorage.removeItem("theme");
```

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Event Delegation](20-event-delegation-and-web-apis.md) | [Next: Error Handling →](22-error-handling.md)
