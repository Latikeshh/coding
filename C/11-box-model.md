# Box Model

> 🟢 Beginner

## 📖 Definition

The CSS box model describes the structure of every element: content, padding, border, and margin.

## 🤔 Why Do We Use It?

The box model explains why elements have different sizes and spacing. It helps you understand layout and debug styling problems.

## 🧠 Simple Explanation

Every HTML element is like a box. The inside holds content, then there is space, then a border, and then space outside the box.

## 📝 Syntax

```css
.box {
  width: 250px;
  padding: 20px;
  border: 2px solid #333;
  margin: 15px;
}
```

## 💡 Example

```css
.card {
  width: 250px;
  padding: 20px;
  border: 2px solid #333;
  margin: 15px;
  background-color: #fff;
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
    <h2>My Portfolio</h2>
    <p>Front-end developer learning CSS.</p>
  </div>
</body>
</html>
```

```css
.card {
  width: 250px;
  padding: 20px;
  border: 2px solid #333;
  margin: 15px;
  background-color: #fff;
}
```

## 👀 What You Will See

The card has reading space inside, a visible border, and a margin separating it from nearby content.

## 🧪 Try It Yourself

Increase the padding and margin values and observe how the card changes position and size.

## ✅ Remember

- Content is the inside of the box.
- Padding adds space around the content.
- Border creates the visible outline.
- Margin separates one box from another.

## 🧭 Navigation

[← Previous](10-width-and-height.md) | [CSS Home](00-README.md) | [Next →](12-text.md)
