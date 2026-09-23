# Padding

> 🟢 Beginner

## 📖 Definition

Padding creates space inside an element.

## 🤔 Why Do We Use It?

Padding keeps text and other content away from the element’s edges.

## 🧠 Simple Explanation

If margin is space outside the box, padding is space inside the box.

## 📝 Syntax

```css
.box {
  padding: 20px;
}
```

## 💡 Example

```css
.card {
  padding: 25px;
  background-color: #f6f6f6;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Padding Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">
    <h2>Lesson Card</h2>
    <p>Learn CSS step by step.</p>
  </div>
</body>
</html>
```

```css
.card {
  padding: 25px;
  background-color: #f6f6f6;
}
```

## 👀 What You Will See

The text sits comfortably inside the card instead of touching the edges.

## 🧪 Try It Yourself

Set `padding: 5px` and then `padding: 40px`. Compare the difference.

## ⚠️ Common Mistakes

- Mixing padding and margin.
- Using too much padding on small elements.
- Forgetting that padding affects box size.

## ✅ Remember

- `padding` is inside the box.
- `margin` is outside the box.
- Padding improves readability and spacing.

## 🧭 Navigation

[← Previous](14-margins.md) | [CSS Home](00-README.md) | [Next →](16-box-model.md)
