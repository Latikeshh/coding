# Pseudo-elements

> 🟢 Beginner

## 📖 Definition

Pseudo-elements let you style parts of an element, such as the first letter or part of text before or after content.

## 🤔 Why Do We Use It?

They help add decorative details or extra content without changing the HTML structure.

## 🧠 Simple Explanation

Pseudo-elements are like virtual child elements inside a selector.

## Common pseudo-elements

- `::before` → inserts content before an element
- `::after` → inserts content after an element
- `::first-letter` → styles the first letter of a text block
- `::selection` → styles selected text

## 📝 Syntax

```css
p::first-letter {
  font-size: 2em;
  color: #333;
}
```

## 💡 Example

```css
h2::after {
  content: " ✨";
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pseudo-elements</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Welcome</h2>
</body>
</html>
```

```css
h2::after {
  content: " ✨";
}
```

## 👀 What You Will See

The heading gets a small decorative sparkle after the text.

## 🧪 Try It Yourself

Replace the text after the heading with a different symbol or word.

## ⚠️ Common Mistakes

- Forgetting the `content` property when using `::before` or `::after`.
- Using pseudo-elements as a substitute for proper HTML structure.
- Styling content that should be added in HTML instead.

## ✅ Remember

- Pseudo-elements are for styling parts of an element.
- `::before` and `::after` require `content`.
- Keep them simple and purposeful.

## 🧭 Navigation

[← Previous](24-pseudo-classes.md) | [CSS Home](00-README.md) | [Next →](26-text-styling.md)
