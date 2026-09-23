# Responsive Design

> 🟢 Beginner

## 📖 Definition

Responsive design means making a website look good on different screen sizes such as phones, tablets, and desktops.

## 🤔 Why Do We Use It?

People use the internet on many devices, so websites must adapt to different widths and heights.

## 🧠 Simple Explanation

A responsive layout changes its arrangement based on the screen width instead of staying fixed.

## Common techniques

- Use flexible units like `%`, `em`, `rem`, `vw`
- Use media queries
- Use flexible layouts with flexbox and grid
- Make images and content scale well

## 📝 Syntax

```css
.container {
  width: 100%;
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }
}
```

## 💡 Example

```css
.card {
  width: 100%;
  max-width: 500px;
}

@media (max-width: 600px) {
  .card {
    padding: 10px;
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
  <div class="card">
    <h1>Hello</h1>
    <p>This layout adapts on small screens.</p>
  </div>
</body>
</html>
```

```css
.card {
  width: 100%;
  max-width: 500px;
  padding: 20px;
}

@media (max-width: 600px) {
  .card {
    padding: 10px;
  }
}
```

## 👀 What You Will See

On desktops the card is larger, and on mobile it compresses to fit the screen.

## 🧪 Try It Yourself

Resize the browser width and see how the layout changes.

## ⚠️ Common Mistakes

- Designing only for desktop first.
- Forgetting to test on smaller screens.
- Using fixed widths for everything.

## ✅ Remember

- Responsive design is essential for modern websites.
- Mobile-first thinking is a great habit.
- Media queries help adapt the layout.

## 🧭 Navigation

[← Previous](21-grid.md) | [CSS Home](00-README.md) | [Next →](23-media-queries.md)
