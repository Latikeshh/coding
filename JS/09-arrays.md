# Arrays & Essential Methods in JavaScript

> 🟡 Intermediate

## 📖 Definition

An **Array** is an ordered, zero-indexed collection of elements stored under a single variable name. Arrays can store mixed data types including numbers, strings, objects, and even other arrays.

## 🇮🇳 Hindi

Array ek ordered list hoti hai jisme multiple values store ki ja sakti hain. Indexing `0` se start hoti hai (`array[0]` pehla item hota hai). Elements add/remove karne aur manipulate karne ke liye built-in array methods hote hain.

## 🚩 Marathi

Array madhye anek values kramawar (ordered list) saathavlya jaatat. Array chi suruvat index `0` pasun hote. Values add karnya sathi `.push()` aani kadhnyasathi `.pop()` cha wapar hota.

## 🤔 Why Do We Use Them?

Storing 100 student names in 100 separate variables is unmanageable. An array lets you store, sort, filter, and iterate through 100 student names effortlessly.

## 📝 Essential Array Methods

| Method | Description | Mutates Original Array? |
|---|---|---|
| `push(item)` | Adds item to the **end** | ✅ Yes |
| `pop()` | Removes item from the **end** | ✅ Yes |
| `unshift(item)` | Adds item to the **beginning** | ✅ Yes |
| `shift()` | Removes item from the **beginning** | ✅ Yes |
| `slice(start, end)` | Copies a portion of array | ❌ No |
| `splice(start, count)`| Adds/Removes items at specific index | ✅ Yes |
| `includes(item)` | Checks if item exists (`true`/`false`)| ❌ No |
| `indexOf(item)` | Finds index position of item | ❌ No |
| `join(separator)` | Combines array elements into string | ❌ No |

## 💡 Complete Example

```javascript
let shoppingCart = ["Laptop", "Mouse", "Keyboard"];

// Adding & Removing Items
shoppingCart.push("Monitor");        // ["Laptop", "Mouse", "Keyboard", "Monitor"]
shoppingCart.unshift("USB Cable");   // ["USB Cable", "Laptop", "Mouse", "Keyboard", "Monitor"]
let removedItem = shoppingCart.pop(); // Removes "Monitor"

console.log("Current Cart:", shoppingCart);
console.log("Cart Size:", shoppingCart.length); // 4

// Checking Existence & Index
console.log("Has Mouse?", shoppingCart.includes("Mouse")); // true
console.log("Index of Laptop:", shoppingCart.indexOf("Laptop")); // 1

// Slice (Non-mutating copy) vs Splice (Mutating edit)
let copyTwo = shoppingCart.slice(1, 3); // Copies index 1 and 2
console.log("Sliced Copy:", copyTwo);

// Splice: Remove 1 item at index 0 and insert "HDMI Adapter"
shoppingCart.splice(0, 1, "HDMI Adapter");
console.log("Cart after Splice:", shoppingCart);
```

## 👀 Output

```text
Current Cart: [ 'USB Cable', 'Laptop', 'Mouse', 'Keyboard' ]
Cart Size: 4
Has Mouse? true
Index of Laptop: 1
Sliced Copy: [ 'Laptop', 'Mouse' ]
Cart after Splice: [ 'HDMI Adapter', 'Laptop', 'Mouse', 'Keyboard' ]
```

## 🧪 Try It Yourself

1. Create an array of your top 4 cities.
2. Add a new city to the end using `.push()`.
3. Use `.slice()` to create a new array with the middle two cities.

## ⚠️ Common Mistakes

- Confusing `slice()` (safe copy) with `splice()` (modifies original array directly!).
- Off-by-one errors when accessing the last item: use `arr[arr.length - 1]` or modern `arr.at(-1)`.

## 🌍 Real-World Usage

Product catalogs, shopping cart contents, message histories, search result sets, and tab navigation lists.

## 💡 Remember

Arrays are zero-indexed (`0` to `length - 1`). Use `slice()` when you want a copy without altering the original array.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Functions](08-functions.md) | [Next: Objects →](10-objects.md)
