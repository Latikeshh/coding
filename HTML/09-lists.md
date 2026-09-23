# Lists

> 🟢 Beginner

## 📖 Definition

Lists group related items. Use an unordered list for items with no order and an ordered list for steps.

## 🤔 Why Do We Use It?

Lists make information such as shopping items, features, and instructions easy to scan.

## 🧠 Simple Explanation

Use bullets for a grocery list. Use numbers for a recipe where the order matters.

## 📝 Syntax

```html
<ol>
  <li>Boil water</li>
  <li>Add pasta</li>
</ol>
```

Use `<ul>` instead of `<ol>` when the items do not need numbers.

## 💡 Practical Example

A packing list for a trip works well as a `<ul>` because you can pack items in any order. Directions for making tea work better as an `<ol>` because people should follow the steps in sequence.

## ✅ Remember

Every list item goes inside `<li>`. Do not type hyphens by hand when the content is truly a list—the HTML list gives it proper structure.

- Use `<ul>` for unordered items.
- Use `<ol>` when sequence matters.
- Use `<li>` for every item.

## 💻 Example

```html
<h2>Pack for a Day Trip</h2>
<ul>
  <li>Water bottle</li>
  <li>Sun hat</li>
  <li>Map</li>
</ul>
```

## 👀 Output

The browser shows a heading followed by three bullet points.

## 🔍 How It Works

`<ul>` creates the bullet list. Each `<li>` is one item inside that list. Change `<ul>` to `<ol>` if the items must be numbered.

## ⚠️ Common Mistakes

- Do not place `<li>` items outside a `<ul>` or `<ol>`.
- Do not use an ordered list for items that have no required order.

## 🧪 Try It Yourself

Create an unordered list of three things you need for school or work.

## 🎯 Mini Challenge

Write a four-step ordered list for making your favourite drink.

## 🧭 Navigation

[← First: HTML Home](README.md) | [← Previous: Images](08-images.md) | [Next: Tables →](10-tables.md)
