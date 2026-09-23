# Pseudo-elements

> 🟡 Intermediate

## 📖 Definition

A pseudo-element targets a part of an element, such as the first letter or the content before or after an element.

## 🤔 Why Do We Use It?

Pseudo-elements are useful for decorative details and helpful text markers without changing the HTML structure.

## 🧠 Simple Explanation

Pseudo-elements let you style a part of an element. For example, you can make the first letter of a paragraph bigger or add text before a heading.

## 📝 Syntax

```css
p::first-letter {
  font-size: 28px;
  font-weight: bold;
}
```

## 💡 Example

```css
h2::before {
  content: "★ ";
  color: gold;
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
  <h2>Featured Item</h2>
  <p>This paragraph begins with a large first letter.</p>
</body>
</html>
```

```css
h2::before {
  content: "★ ";
  color: gold;
}

p::first-letter {
  font-size: 28px;
  font-weight: bold;
}
```

## 👀 What You Will See

The heading has a star before it, and the first letter of the paragraph is larger and bolder.

## 🧪 Try It Yourself

Add a `::after` pseudo-element to a heading and show a small label such as `New`.

## ✅ Remember

- `::before` inserts content before an element.
- `::after` inserts content after an element.
- `::first-letter` styles just the first letter of a paragraph.

## 🧭 Navigation

[← Previous](21-pseudo-classes.md) | [CSS Home](00-README.md) | [Next →](23-transitions.md)
