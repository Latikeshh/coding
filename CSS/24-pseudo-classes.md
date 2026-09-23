# Pseudo-classes

> 🟢 Beginner

## 📖 Definition

Pseudo-classes style elements based on their state or position.

## 🤔 Why Do We Use It?

They help make interfaces interactive without extra HTML.

## 🧠 Simple Explanation

A pseudo-class adds styling when the element is hovered, focused, visited, or active.

## Common pseudo-classes

- `:hover` → when the mouse is over an element
- `:focus` → when an input is focused
- `:active` → when the element is being clicked
- `:visited` → links that were visited
- `:first-child` → first child of a parent

## 📝 Syntax

```css
a:hover {
  color: #0055aa;
}

button:focus {
  outline: 2px solid #0055aa;
}
```

## 💡 Example

```css
a:hover {
  text-decoration: underline;
}

input:focus {
  border-color: #0055aa;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pseudo-classes</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <a href="#">Click me</a>
  <input type="text" placeholder="Type here">
</body>
</html>
```

```css
a:hover {
  text-decoration: underline;
}

input:focus {
  border-color: #0055aa;
}
```

## 👀 What You Will See

The link underlines on hover, and the input shows a focus state when selected.

## 🧪 Try It Yourself

Hover the link and click into the input to see the states.

## ⚠️ Common Mistakes

- Forgetting that pseudo-classes need the correct selector.
- Overusing hover for important content.
- Not testing keyboard focus for accessibility.

## ✅ Remember

- Pseudo-classes respond to state.
- They are useful for interactive styling.
- Focus states matter for accessibility.

## 🧭 Navigation

[← Previous](23-media-queries.md) | [CSS Home](00-README.md) | [Next →](25-pseudo-elements.md)
