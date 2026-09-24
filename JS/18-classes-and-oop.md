# ES6 Classes & Object-Oriented JS

> 🔴 Advanced

## 📖 Definition

ES6 Classes provide clean syntactic sugar over prototype-based inheritance, supporting constructors, private fields (`#`), methods, and inheritance (`extends`/`super`).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** ES6 `class` supports constructors, methods, private fields (`#privateVar`), and subclassing using `extends` and `super()`.
> - **Hindi:** ES6 क्लास में `constructor`, प्राइवेट वेरिएबल्स (`#`), और `extends` से इनहेरिटेंस होता है।
> - **Marathi:** क्लासमध्ये ऑब्जेक्ट तयार करण्यासाठी `constructor` आणि इनहेरिटन्ससाठी `extends` वापरतात.
> - **Hinglish:** ES6 Classes OOP patterns follow karti hain. Subclasses ke constructor mein `super()` call karna mandatory hota hai.

## 📝 Syntax

```javascript
class User {
  #secretKey; // Private field

  constructor(username, key) {
    this.username = username;
    this.#secretKey = key;
  }

  getProfile() {
    return `User: ${this.username}`;
  }
}

class Admin extends User {
  constructor(username, key, role) {
    super(username, key); // Calls parent constructor
    this.role = role;
  }
}
```

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Prototypes & this](17-prototypes-and-this.md) | [Next: DOM Selection →](19-dom-manipulation.md)
