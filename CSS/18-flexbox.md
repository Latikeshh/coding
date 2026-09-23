# Flexbox

> 🟡 Intermediate

## 📖 Definition

Flexbox is a layout tool that helps arrange items in rows or columns with flexible spacing.

## 🤔 Why Do We Use It?

Flexbox makes it easier to create navigation bars, product cards, and center-aligned layouts.

## 🧠 Simple Explanation

Flexbox gives you a simple way to arrange content side by side or in a stack, while keeping the spacing and alignment controlled.

## 📝 Syntax

```css
.container {
  display: flex;
  justify-content: center;
  gap: 20px;
}
```

## 💡 Example

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flexbox Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <div>Home</div>
    <div>About</div>
    <div>Contact</div>
  </div>
</body>
</html>
```

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
```

## 👀 What You Will See

The items are placed in a row with space between them, creating a neat horizontal layout.

## 🧪 Try It Yourself

Change `justify-content` to `center` or `flex-start` and observe the effect.

## ✅ Remember

- `display: flex` turns a container into a flexible layout.
- `justify-content` controls horizontal spacing.
- `align-items` controls vertical alignment.

## 🧭 Navigation

[← Previous](17-position.md) | [CSS Home](00-README.md) | [Next →](19-grid.md)
