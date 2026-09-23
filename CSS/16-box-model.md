# Box Model

> 🟢 Beginner

## 📖 Definition

The CSS box model explains how every element is treated as a box with content, padding, border, and margin.

## 🤔 Why Do We Use It?

It helps us control how large an element appears and how much space it takes on the page.

## 🧠 Simple Explanation

Think of every element as a box:

- Content: text or child elements inside
- Padding: space inside the box
- Border: line around the box
- Margin: space outside the box

## 📝 Syntax

```css
.box {
  width: 200px;
  padding: 20px;
  border: 2px solid #333;
  margin: 10px;
}
```

## 💡 Example

```css
.card {
  width: 250px;
  padding: 20px;
  border: 2px solid #999;
  margin: 15px;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Box Model Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">
    This is a card with a box model.
  </div>
</body>
</html>
```

```css
.card {
  width: 250px;
  padding: 20px;
  border: 2px solid #999;
  margin: 15px;
}
```

## 👀 What You Will See

The overall size of the element includes content + padding + border + margin.

## 🧪 Try It Yourself

Increase padding and watch the element look larger even if width stays the same.

## ⚠️ Common Mistakes

- Forgetting that width does not include padding and border in the default box model.
- Confusing margin and padding.
- Expecting the box to stay the same size after changing padding.

## ✅ Remember

- The box model is a core part of CSS layout.
- Every element has these four layers.
- Understanding it makes layout easier.

## 🧭 Navigation

[← Previous](15-padding.md) | [CSS Home](00-README.md) | [Next →](17-display.md)
