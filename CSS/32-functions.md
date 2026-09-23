# CSS Functions

> 🟢 Beginner

## 📖 Definition

CSS functions perform operations or return values used in property declarations.

## 🤔 Why Do We Use It?

They help create flexible styles, especially with colors, sizes, and calculations.

## 🧠 Simple Explanation

Functions are reusable instructions, such as `rgb()`, `rgba()`, `calc()`, and `var()`.

## Common functions

- `rgb()` / `rgba()` → set colors
- `hsl()` / `hsla()` → set colors in hue, saturation, lightness format
- `calc()` → perform math between values
- `var()` → use a CSS variable

## 📝 Syntax

```css
.card {
  width: calc(100% - 40px);
  background: rgba(0, 0, 0, 0.1);
}
```

## 💡 Example

```css
.container {
  width: calc(100% - 2rem);
  padding: 20px;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Functions</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">Use calc for flexible widths.</div>
</body>
</html>
```

```css
.container {
  width: calc(100% - 2rem);
  padding: 20px;
}
```

## 👀 What You Will See

The container fits the page while leaving space from the edges.

## 🧪 Try It Yourself

Change `2rem` to `3rem` and see how the width changes.

## ⚠️ Common Mistakes

- Forgetting spaces inside `calc()`.
- Using unsupported color formats without knowing the browser support.
- Overcomplicating with functions when plain values work fine.

## ✅ Remember

- Functions add flexibility to CSS.
- `calc()` is especially useful for responsive sizing.
- Functions are a big part of modern CSS workflows.

## 🧭 Navigation

[← Previous](31-variables.md) | [CSS Home](00-README.md) | [Next →](33-important.md)
