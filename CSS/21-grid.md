# CSS Grid Layout

> 🟢 Beginner

## 📖 Definition

CSS Grid Layout is a 2-dimensional grid-based layout system designed to arrange content into rows and columns simultaneously.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** CSS Grid (`display: grid`) manages 2D layouts with rows and columns. Use `grid-template-columns: repeat(3, 1fr)` to define fractional responsive columns.
> - **Hindi:** ग्रिड (`display: grid`) 2D लेआउट के लिए होता है (रो और कॉलम दोनों)। `grid-template-columns` से कॉलम साइज तय होते हैं।
> - **Marathi:** सीएसएस ग्रिड 2D लेआउट (रो आणि कॉलम) साठी वापरला जातो. `gap` मुळे बॉक्सेसमध्ये समान जागा राहते.
> - **Hinglish:** CSS Grid 2D layouts (rows + columns) ke liye ultimate tool hai. Dashboard aur card grids ke liye `display: grid` use karo.

## 🤔 Why Do We Use It?

CSS Grid makes building complex 2D web page layouts, dashboards, image galleries, and card grids simple, clean, and responsive without complex nested containers.

## 🧠 Simple Explanation

Think of CSS Grid as an empty graph paper layout where you define row lines and column lines, then place elements into specific cells or spanned areas.

## Common grid properties

- `display: grid` → Creates a grid container
- `grid-template-columns` → Defines column count and sizes (e.g. `repeat(3, 1fr)`)
- `grid-template-rows` → Defines row sizes
- `gap` → Sets spacing between rows and columns

## 📝 Syntax

```css
.grid-container {
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
  <title>CSS Grid Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="gallery">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
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

.card {
  background: #e0e0e0;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}
```

## 👀 What You Will See

Three cards sit side by side in three equal-width columns with `20px` spacing between them.

## 🧪 Try It Yourself

Change `repeat(3, 1fr)` to `repeat(auto-fit, minmax(200px, 1fr))` to create an automatically responsive card layout!

## ⚠️ Common Mistakes

- Confusing 1D Flexbox layouts with 2D Grid layouts.
- Forgetting that `1fr` represents one fraction of free space in the grid container.

## ✅ Remember

- Use Flexbox for 1D alignment (single row/column). Use CSS Grid for 2D layouts (rows + columns).
- `gap` manages spacing without needing margin hacks on child items.

## 🧭 Navigation

[← Previous](20-flexbox.md) | [CSS Home](00-README.md) | [Next →](22-responsive-design.md)
