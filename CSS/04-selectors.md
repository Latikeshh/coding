# Selectors

> 🟢 Beginner

## 📖 Definition

A selector tells CSS which HTML element or group of elements to style.

## 🤔 Why Do We Use It?

Selectors let you apply styling only where you want it. You can style all headings, one button, or one section without changing unrelated content.

## 🧠 Simple Explanation

A selector is like pointing at a specific item in a classroom and saying, “This one gets a red notebook.”

## 📝 Syntax

```css
p {
  color: black;
}

.card {
  background: #f0f0f0;
}

#main-title {
  font-size: 32px;
}
```

## 💡 Example

```css
p {
  color: #333;
}

.highlight {
  background-color: yellow;
}

#intro {
  font-weight: bold;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Selectors Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <p id="intro">This is the introduction.</p>
  <p class="highlight">This paragraph is highlighted.</p>
</body>
</html>
```

```css
p {
  color: #333;
}

.highlight {
  background-color: yellow;
}

#intro {
  font-weight: bold;
}
```

## 👀 What You Will See

The introduction paragraph is bold, and the second paragraph has a yellow background.

## 🧪 Try It Yourself

Style a class called `button` and a paragraph with `id="note"` using different colors.

## ✅ Remember

- `element` selector styles all matching elements.
- `.class` styles all elements with that class.
- `#id` styles one unique element.

## 🧭 Navigation

[← Previous](03-css-syntax.md) | [CSS Home](00-README.md) | [Next →](05-colors.md)
