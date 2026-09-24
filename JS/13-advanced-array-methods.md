# Advanced Array Methods (`map`, `filter`, `reduce`)

> 🟡 Intermediate

## 📖 Definition

Functional array methods (`map`, `filter`, `reduce`, `find`, `findIndex`, `some`, `every`, `sort`) allow declarative transformation, filtering, and aggregation of array datasets without writing manual imperative `for` loops.

## 🇮🇳 Hindi

`map()`, `filter()`, aur `reduce()` functional programming ke essential methods hain. `.map()` array ke har item ko transform karta hai, `.filter()` conditional search karta hai, aur `.reduce()` pooray array ko single value (jaise sum ya object) mein condense karta hai.

## 🚩 Marathi

`.map()` navin array tayar karto, `.filter()` tharavik kramacha data gaalun (filter) deto, aani `.reduce()` sarv values pasun ekach final value tayar karto.

## 📝 Method Summary Table

| Method | What It Does | Return Value | Mutates Array? |
|---|---|---|---|
| `map(fn)` | Transforms every element | New array of same length | ❌ No |
| `filter(fn)`| Filters items matching condition | New array of matching items | ❌ No |
| `reduce(fn, init)`| Accumulates array into single value | Single value (number/object) | ❌ No |
| `find(fn)` | Finds FIRST element matching condition | Single element or `undefined` | ❌ No |
| `findIndex(fn)`| Finds index of FIRST matching element | Index number or `-1` | ❌ No |
| `some(fn)` | Checks if AT LEAST ONE item matches | `true` or `false` | ❌ No |
| `every(fn)`| Checks if ALL items match condition | `true` or `false` | ❌ No |
| `sort(fn)` | Sorts array elements | Sorted array | ✅ **Yes!** |

## 💡 Complete Example (Method Chaining)

```javascript
const products = [
  { id: 1, name: "Gaming Laptop", price: 75000, inStock: true, category: "Tech" },
  { id: 2, name: "Wireless Earbuds", price: 3000, inStock: true, category: "Tech" },
  { id: 3, name: "Coffee Mug", price: 400, inStock: false, category: "Home" },
  { id: 4, name: "Mechanical Keyboard", price: 4500, inStock: true, category: "Tech" }
];

// 1. Filter only in-stock Tech products
const inStockTech = products.filter(p => p.inStock && p.category === "Tech");

// 2. Map to extract product price list
const prices = inStockTech.map(p => p.price);

// 3. Reduce to calculate total cart price
const totalInventoryValue = inStockTech.reduce((sum, p) => sum + p.price, 0);

console.log("Filtered Products Count:", inStockTech.length);
console.log("Tech Prices:", prices);
console.log("Total Inventory Value:", totalInventoryValue);

// 4. Sorting Numbers accurately (Requires comparator function!)
const sortedPrices = [...prices].sort((a, b) => a - b);
console.log("Sorted Prices (Ascending):", sortedPrices);
```

## 👀 Output

```text
Filtered Products Count: 3
Tech Prices: [ 75000, 3000, 4500 ]
Total Inventory Value: 82500
Sorted Prices (Ascending): [ 3000, 4500, 75000 ]
```

## 🧪 Try It Yourself

Given `const numbers = [5, 12, 8, 130, 44]`:
1. Use `.filter()` to get numbers greater than `10`.
2. Use `.map()` to double each number.
3. Use `.reduce()` to calculate the sum of all numbers.

## ⚠️ Common Mistakes

- Forgetting that `.sort()` sorts items **alphabetically as strings by default** unless a comparator function `(a, b) => a - b` is provided! (`[10, 2, 5].sort()` gives `[10, 2, 5]` without comparator!).
- Forgetting to provide an initial value (`0`) as the second argument to `.reduce()`.

## 🌍 Real-World Usage

Filtering product listings in e-commerce apps, calculating invoice subtotals, mapping database results to UI React components, and sorting leaderboard rankings.

## 💡 Remember

Method chaining (`.filter().map().reduce()`) allows powerful, clean, single-statement data transformations.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: ES6 Features](12-es6-features.md) | [Next: Closures & Callbacks →](14-closures-and-callbacks.md)
