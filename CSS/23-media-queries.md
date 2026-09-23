# Media Queries

> 🟢 Beginner

## 📖 Definition

Media queries let CSS apply different rules depending on screen size, resolution, or device type.

## 🤔 Why Do We Use It?

They are the heart of responsive design.

## 🧠 Simple Explanation

A media query is a condition: “If the screen is smaller than this, do this.”

## 📝 Syntax

```css
@media (max-width: 768px) {
  .nav {
    flex-direction: column;
  }
}
```

## 💡 Example

```css
.card {
  width: 100%;
}

@media (min-width: 700px) {
  .card {
    width: 50%;
  }
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Media Queries</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">
    Responsive card
  </div>
</body>
</html>
```

```css
.card {
  width: 100%;
  padding: 20px;
}

@media (min-width: 700px) {
  .card {
    width: 50%;
  }
}
```

## 👀 What You Will See

At larger widths, the card becomes narrower and more centered.

## 🧪 Try It Yourself

Change the breakpoint from `700px` to `500px` and observe the layout changing earlier.

## ⚠️ Common Mistakes

- Using too many breakpoints.
- Not testing on real devices.
- Overusing media queries without a clear mobile-first plan.

## ✅ Remember

- Media queries help adapt layouts by conditions.
- Breakpoints are screen-size thresholds.
- They are essential in modern responsive design.

## 🧭 Navigation

[← Previous](22-responsive-design.md) | [CSS Home](00-README.md) | [Next →](24-pseudo-classes.md)
