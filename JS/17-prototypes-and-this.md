# Prototypes, `this` Keyword & Binding

> 🔴 Advanced

## 📖 Definition

- **`this` Keyword:** Refers to the current execution context object calling the function.
- **Prototypes:** Every JavaScript object inherits properties and methods from its prototype chain link (`Object.prototype`).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `this` refers to the calling object context. Explicitly bind `this` using `.call()`, `.apply()`, or `.bind()`. Arrow functions capture lexical `this`.
> - **Hindi:** `this` उस ऑब्जेक्ट को दर्शाता है जिसने फंक्शन कॉल किया है। एर्रो फंक्शन्स का अपना `this` नहीं होता।
> - **Marathi:** `this` मुळे करंट ऑब्जेक्ट मिळतो. एरो फंक्शन्समध्ये लेक्सिकल `this` असतो.
> - **Hinglish:** Method calls mein `this` calling object ko point karta hai. `.bind(thisArg)` se `this` context explicitly bind kiya jaata hai.

## 📝 Syntax

```javascript
function introduce(city) {
  console.log(`I am ${this.name} from ${city}`);
}

const user = { name: "Elena" };

// Explicit binding using .call() and .bind()
introduce.call(user, "Paris");

const boundFunc = introduce.bind(user, "Tokyo");
boundFunc();
```

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Fetch & JSON](16-fetch-api-and-json.md) | [Next: Classes & OOP →](18-classes-and-oop.md)
