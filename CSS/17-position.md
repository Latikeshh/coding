# Position

> 🟡 Intermediate

## 📖 Definition

The `position` property controls how an element is placed on the page relative to its normal flow or to other elements.

## 🤔 Why Do We Use It?

Positioning is useful for headers, menus, alerts, and elements that should stay in a specific place.

## 🧠 Simple Explanation

Sometimes you want a box to stay fixed in one spot, or move over another element. Positioning gives you that control.

## 📝 Syntax

```css
.box {
  position: relative;
  top: 20px;
  left: 30px;
}
```

## 💡 Example

```css
.card {
  position: relative;
  left: 20px;
  background-color: #eef6ff;
  padding: 20px;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Position Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">This card is slightly shifted.</div>
</body>
</html>
```

```css
.card {
  position: relative;
  left: 20px;
  background-color: #eef6ff;
  padding: 20px;
}
```

## 👀 What You Will See

The card moves a little to the right while staying in the normal flow of the page.

## 🧪 Try It Yourself

Try changing `left` to `50px` and `top` to `10px` to see how the element moves.

## ✅ Remember

- `position: static` is the default.
- `position: relative` moves an element from its original place.
- Positioning is useful, but overuse can make layouts harder to maintain.

## 🧭 Navigation

[← Previous](16-display.md) | [CSS Home](00-README.md) | [Next →](18-flexbox.md)
