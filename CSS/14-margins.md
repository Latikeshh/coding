# Margins

> 🟢 Beginner

## 📖 Definition

Margins create space outside an element.

## 🤔 Why Do We Use It?

Margins help separate elements from other content on the page.

## 🧠 Simple Explanation

If an element is a box, the margin is the blank space around the outside of that box.

## 📝 Syntax

```css
.box {
  margin: 20px;
}
```

## 💡 Example

```css
.card {
  margin: 30px;
  padding: 20px;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Margins Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">Welcome to the course.</div>
</body>
</html>
```

```css
.card {
  margin: 30px;
  padding: 20px;
  background-color: #f4f4f4;
}
```

## 👀 What You Will See

The card sits away from the page edge because of the margin.

## 🧪 Try It Yourself

Change the margin to `10px` or `50px` and see how the spacing changes.

## ⚠️ Common Mistakes

- Using too much margin, causing awkward spacing.
- Forgetting that margin adds space outside the box.
- Confusing margin with padding.

## ✅ Remember

- `margin` is outside the element.
- `padding` is inside the element.
- Space is important for readability.

## 🧭 Navigation

[← Previous](13-borders.md) | [CSS Home](00-README.md) | [Next →](15-padding.md)
