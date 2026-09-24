# Advanced Array Methods (`map`, `filter`, `reduce`)

> 🟡 Intermediate

## 📖 Definition

Functional array iteration methods (`map`, `filter`, `reduce`, `find`, `some`, `every`) allow array transformations and filtering without manual `for` loops.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `.map()` transforms elements. `.filter()` selects elements matching a condition. `.reduce()` condenses array values into a single result.
> - **Hindi:** `.map()` हर एलिमेंट को बदलता है। `.filter()` शर्त के अनुसार छांटता है। `.reduce()` एरे को एक सिंगल वैल्यू में बदलता है।
> - **Marathi:** `.map()` नवीन एरे तयार करतो, तर `.filter()` ठराविक घटक निवडतो.
> - **Hinglish:** `.map()` array transform karne ke liye, `.filter()` conditions ke basis par filter karne ke liye, aur `.reduce()` single total value calculate karne ke liye use hota hai.

## 📝 Syntax & Chaining

```javascript
const products = [
  { name: "Laptop", price: 1000, category: "Tech" },
  { name: "Phone", price: 500, category: "Tech" },
  { name: "Shirt", price: 40, category: "Apparel" }
];

// Calculate total cost of Tech items using chaining
const totalTechCost = products
  .filter(p => p.category === "Tech")
  .map(p => p.price)
  .reduce((sum, price) => sum + price, 0);

console.log(totalTechCost); // 1500
```

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: ES6 Features](12-es6-features.md) | [Next: Closures & Callbacks →](14-closures-and-callbacks.md)
