# Flexbox

> 🟢 Beginner

## 📖 Definition

Flexbox is a layout model used to arrange items in a row or column easily.

## 🤔 Why Do We Use It?

It makes alignment, spacing, and responsive layouts much simpler than older layout techniques.

## 🧠 Simple Explanation

A flex container places its children in a flexible layout that can grow, shrink, and wrap.

## Common flex properties

- `display: flex` → turns an element into a flex container
- `flex-direction` → row, column, row-reverse, column-reverse
- `justify-content` → aligns items horizontally
- `align-items` → aligns items vertically
- `gap` → adds space between items

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
.nav {
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
  <nav class="nav">
    <div>Home</div>
    <div>About</div>
    <div>Contact</div>
  </nav>
</body>
</html>
```

```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #f2f2f2;
}
```

## 👀 What You Will See

The menu items spread out across the navigation bar with equal spacing.

## 🧪 Try It Yourself

Change `justify-content: space-between` to `center` and observe the difference.

## ⚠️ Common Mistakes

- Forgetting to set `display: flex` on the parent.
- Using too many nested flex containers.
- Mixing layout logic without understanding row vs column flow.

## ✅ Remember

- Flexbox is best for one-dimensional layouts.
- It is excellent for nav bars and simple responsive layouts.
- It keeps alignment and spacing easy to manage.

## 🧭 Navigation

[← Previous](19-float-and-clear.md) | [CSS Home](00-README.md) | [Next →](21-grid.md)
