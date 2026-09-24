# Web Storage (`localStorage` & `sessionStorage`)

> 🟡 Intermediate

## 📖 Definition

The **Web Storage API** allows web applications to store key-value string data directly inside the user's browser. It provides two persistent storage mechanisms:
- `localStorage`: Persists data indefinitely until explicitly cleared by user or script.
- `sessionStorage`: Persists data only for the duration of the current browser tab session.

## 🇮🇳 Hindi

Web Storage browser mein client-side data store karne ke liye use hota hai. `localStorage` mein data browser close hone ke baad bhi saved rehta hai, jabki `sessionStorage` mein browser tab close hote hi clear ho jata hai. Web Storage sirf string values store karta hai, isliye Objects store karne ke liye `JSON.stringify()` aur `JSON.parse()` ka use hota hai.

## 🚩 Marathi

Web Storage API cha wapar browser madhye data saathvanya sathi kela jato. `localStorage` madhil data permanently saathvla jato, tar `sessionStorage` tab band kelyanantar clear hoto.

## 📝 Storage API Methods

| Method | What It Does |
|---|---|
| `localStorage.setItem(key, value)` | Saves key-value pair in storage |
| `localStorage.getItem(key)` | Retrieves stored string value by key |
| `localStorage.removeItem(key)` | Removes specific key entry |
| `localStorage.clear()` | Deletes ALL stored items for the origin |

## ⚠️ Security & Limitation Rules

- **Strings Only:** Web Storage can ONLY store string data (~5MB per origin).
- **Plaintext Storage:** Never store passwords, credit card numbers, or unencrypted authentication tokens in `localStorage` as it is accessible via client-side JavaScript scripts (vulnerable to XSS attacks!).

## 💡 Complete Example: Storing Objects & Managing User Theme

```javascript
// Function to save user preference settings
function saveUserSettings(settingsObject) {
  // Convert JS object to JSON string before saving
  const serializedData = JSON.stringify(settingsObject);
  localStorage.setItem("app_user_settings", serializedData);
  console.log("Settings saved to localStorage successfully.");
}

// Function to load user settings
function loadUserSettings() {
  const savedData = localStorage.getItem("app_user_settings");

  if (!savedData) {
    return { theme: "light", fontSize: 14 }; // Default fallback
  }

  // Parse JSON string back into JS Object
  return JSON.parse(savedData);
}

// Usage
saveUserSettings({ theme: "dark", fontSize: 18, notifications: true });

const currentSettings = loadUserSettings();
console.log("Loaded Theme:", currentSettings.theme);
console.log("Loaded Font Size:", currentSettings.fontSize);
```

## 👀 Output

```text
Settings saved to localStorage successfully.
Loaded Theme: dark
Loaded Font Size: 18
```

## 🧪 Try It Yourself

1. Store your favorite user name in `localStorage.setItem("username", "yourName")`.
2. Retrieve it using `localStorage.getItem("username")` and display it in a `console.log()`.

## ⚠️ Common Mistakes

- Forgetting to serialize objects with `JSON.stringify()`, which results in storing the useless string `"[object Object]"`.
- Assuming `localStorage` data persists across different browser origins or different user devices.

## 🌍 Real-World Usage

Remembering user dark mode preferences, preserving unsubmitted form drafts, caching non-sensitive user settings, and saving client-side shopping cart state.

## 💡 Remember

Use `localStorage` for long-term user preferences and `sessionStorage` for temporary single-session workflows.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Event Delegation](20-event-delegation-and-web-apis.md) | [Next: Error Handling →](22-error-handling.md)
