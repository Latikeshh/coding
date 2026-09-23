# Responsive Design

> 🟡 Intermediate

## 📖 Definition

Responsive design is the practice of making a website look good on different screen sizes, such as mobile phones, tablets, and desktops.

## 🤔 Why Do We Use It?

People use websites on many devices. A responsive design helps content remain readable and usable everywhere.

## 🧠 Simple Explanation

A page should adapt to the screen it is being viewed on. The layout may change slightly on a phone so that it is easier to read and scroll.

## 📝 Syntax

```css
.card {
  width: 100%;
}

@media (max-width: 600px) {
  .card {
    width: 100%;
  }
}
```

## 💡 Example

```css
.container {
  display: flex;
  gap: 20px;
}

@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Responsive Design</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <div>Card 1</div>
    <div>Card 2</div>
  </div>
</body>
</html>
```

```css
.container {
  display: flex;
  gap: 20px;
}

@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
```

## 👀 What You Will See

On a wide screen, the cards sit side by side. On a small screen, they stack vertically so the page remains easy to read.

## 🧪 Try It Yourself

Create a `@media` rule that changes a layout from rows to a column at a smaller width.

## ✅ Remember

- Responsive design helps pages work on different devices.
- Media queries are used to detect screen size.
- Real content should remain readable and easy to use on mobile screens.

## 🧭 Navigation

[← Previous](19-grid.md) | [CSS Home](00-README.md) | [Next →](21-pseudo-classes.md)
