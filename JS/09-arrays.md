# Arrays in JavaScript

> 🟡 Intermediate

## 📖 Definition

An **Array** is an ordered list of elements stored sequentially under a single variable reference. Array indexing is zero-based (`0` to `length - 1`).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Arrays store ordered items. Indexing starts at `0`. Use `.push()` to add items and `.length` to check size.
> - **Hindi:** एरे (Array) आइटम्स की लिस्ट है। इंडेक्स `0` से शुरू होता है। आइटम जोड़ने के लिए `.push()` का प्रयोग करें।
> - **Marathi:** एरेमध्ये माहिती क्रमवार साठवली जाते. इंडेक्स `0` पासून सुरू होतो.
> - **Hinglish:** Array ordered items ki collection hoti hai. First item `arr[0]` par aur last item `arr[arr.length - 1]` par hota hai.

## 📝 Syntax & Common Operations

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]); // "Apple"
fruits.push("Orange");  // Adds "Orange" to end
fruits.pop();           // Removes last element
console.log(fruits.length); // 3

// Array iteration
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}: ${fruit}`);
});
```

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Functions](08-functions.md) | [Next: Objects →](10-objects.md)
