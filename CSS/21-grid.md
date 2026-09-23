# CSS Grid

> 🟢 Beginner

## 📖 Definition

CSS Grid is a two-dimensional layout system that lets you place items into rows and columns.

## 🤔 Why Do We Use It?

It is perfect for dashboard layouts, card layouts, and full-page designs.

## 🧠 Simple Explanation

Instead of arranging items one by one, grid lets you define rows and columns and position elements across them.

## Common grid properties

- `display: grid` → turns an element into a grid container
- `grid-template-columns` → defines the column structure
- `grid-template-rows` → defines the row structure
- `gap` → adds spacing between grid items

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

Three card items align neatly in a three-column layout.

## 🧪 Try It Yourself

Change `repeat(3, 1fr)` to `repeat(2, 1fr)` and see how the columns update.

## ⚠️ Common Mistakes

- Using `display: grid` without thinking about the number of columns.
- Forgetting that grid is 2D, not just a row layout.
- Overcomplicating layouts before using simple grid definitions.

## ✅ Remember

- Grid is excellent for 2D layouts.
- It is often better than floats for modern page layouts.
- Use grid for complex design structures.

## 🧭 Navigation

[← Previous](20-flexbox.md) | [CSS Home](00-README.md) | [Next →](22-responsive-design.md)
