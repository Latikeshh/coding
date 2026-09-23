# Grid

> 🟡 Intermediate

## 📖 Definition

CSS Grid is a layout system for arranging items in rows and columns.

## 🤔 Why Do We Use It?

Grid is useful when you want a page or section to have a structured layout, such as a gallery, dashboard, or product row.

## 🧠 Simple Explanation

Think of CSS Grid like a table without needing actual table tags. It helps you place boxes in neat columns and rows.

## 📝 Syntax

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

## 💡 Example

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Grid Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="gallery">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
  </div>
</body>
</html>
```

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

## 👀 What You Will See

The items are arranged in three columns with consistent spacing between them.

## 🧪 Try It Yourself

Change the column count from 3 to 2 and observe the layout.

## ✅ Remember

- Grid is best for structured layouts.
- `grid-template-columns` controls column count.
- `gap` adds space between grid items.

## 🧭 Navigation

[← Previous](18-flexbox.md) | [CSS Home](00-README.md) | [Next →](20-responsive-design.md)
