# Fetch API & Working with JSON

> 🔴 Advanced

## 📖 Definition

JSON is a lightweight data format for client-server communication. The browser **Fetch API** sends asynchronous HTTP network requests (`GET`, `POST`, `PUT`, `DELETE`) to server REST APIs.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `JSON.stringify()` converts objects to strings; `JSON.parse()` converts strings to objects. `fetch()` handles HTTP network requests.
> - **Hindi:** `JSON.stringify()` ऑब्जेक्ट को स्ट्रिंग में बदलता है और `JSON.parse()` वापस ऑब्जेक्ट में। नेटवर्क रिक्वेस्ट के लिए `fetch()` का इस्तेमाल होता है।
> - **Marathi:** सर्वरवरून डेटा मागवण्यासाठी `fetch()` आणि JSON फॉरमॅट वापरला जातो.
> - **Hinglish:** API requests ke liye `fetch(url)` use karo. JSON data parse karne ke liye `await response.json()` calls use hoti hain.

## 📝 Syntax & Examples

```javascript
// Making asynchronous GET request with fetch()
async function fetchUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    
    const user = await response.json();
    console.log("User Name:", user.name);
  } catch (error) {
    console.error("Network Error:", error.message);
  }
}

fetchUserData();
```

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Async & Promises](15-promises-and-async-await.md) | [Next: Prototypes & `this` →](17-prototypes-and-this.md)
