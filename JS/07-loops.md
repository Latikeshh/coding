# Loops in JavaScript

> 🟢 Beginner

## 📖 Definition

Loops repeat a code block automatically as long as a specified condition evaluates to `true`.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `for` loops repeat code a fixed number of times. `while` loops repeat code as long as a condition stays `true`.
> - **Hindi:** कोड को बार-बार चलाने के लिए लूप्स (`for`, `while`) का उपयोग होता है।
> - **Marathi:** ठराविक वेळा कोड पुन्हा चालवण्यासाठी लूप्स वापरतात.
> - **Hinglish:** Code repeat karne ke liye `for` aur `while` loops use hote hain. Counter variable update karna na bhoolein (infinite loop risk).

## 📝 Syntax

```javascript
// 1. For Loop
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

// 2. While Loop
let timer = 3;
while (timer > 0) {
  console.log("Timer:", timer);
  timer--;
}
```

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Conditionals](06-conditionals.md) | [Next: Functions →](08-functions.md)
