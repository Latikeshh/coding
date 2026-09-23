# Transform and Animation

> 🟡 Intermediate

## 📖 Definition

The `transform` property changes the shape or position of an element, and animation adds motion over time.

## 🤔 Why Do We Use It?

Transform and animation can create polished interfaces, highlight content, and make simple UI effects more engaging.

## 🧠 Simple Explanation

Instead of moving an element with JavaScript, CSS can make it rotate, scale, or move gradually. This is useful for smooth visual feedback.

## 📝 Syntax

```css
.box {
  transform: rotate(10deg);
  animation: move 2s ease-in-out infinite;
}
```

## 💡 Example

```css
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Transform Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">Featured Course</div>
</body>
</html>
```

```css
.card {
  background: #eef2ff;
  padding: 20px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}
```

## 👀 What You Will See

When the mouse moves over the card, it gently grows in size and becomes more noticeable.

## 🧪 Try It Yourself

Use `transform: rotate(5deg)` on a card and see how it changes its angle.

## ✅ Remember

- `transform` changes the visual shape or position of an element.
- `animation` can make changes happen repeatedly or over time.
- Motion should be subtle and improve clarity, not distract from the page.

## 🧭 Navigation

[← Previous](23-transitions.md) | [CSS Home](00-README.md) | [Next →](25-mini-projects.md)
