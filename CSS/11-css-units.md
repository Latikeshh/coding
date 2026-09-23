# CSS Units

> 🟢 Beginner

## 📖 Definition

CSS units are used to define sizes such as font size, width, height, spacing, and more.

## 🤔 Why Do We Use It?

Without units, the browser would not know how large or small something should be.

## 🧠 Simple Explanation

Units help CSS answer questions like: “How wide should this box be?” or “How large should this text be?”

## Absolute vs relative units

### Absolute units

- `px` is a fixed size
- It does not change based on the parent or browser font size

### Relative units

- `%` is relative to the parent element
- `em` is relative to the current font size
- `rem` is relative to the root font size
- `vw` and `vh` are relative to the viewport dimensions
- `vmin` and `vmax` are relative to the smaller or larger viewport dimension

## Common units

```css
p {
  font-size: 16px;
  width: 50%;
  margin: 1.5em;
}
```

## Examples

```css
.title {
  font-size: 2rem;
}

.card {
  width: 80%;
}

.box {
  width: 25vw;
  height: 50vh;
}
```

## 💡 Example

```css
body {
  font-size: 16px;
}

h1 {
  font-size: 2rem;
}

.card {
  width: 80%;
  padding: 1.5em;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Units</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">
    <h1>Course Card</h1>
  </div>
</body>
</html>
```

```css
body {
  font-size: 16px;
}

h1 {
  font-size: 2rem;
}

.card {
  width: 80%;
  padding: 1.5em;
}
```

## 👀 What You Will See

The heading is larger, the card takes most of the page width, and the content has extra spacing.

## 🧪 Try It Yourself

Change `2rem` to `1.5rem` and change `80%` to `60%` to see how the layout changes.

## ⚠️ Common Mistakes

- Mixing units without knowing what they are relative to.
- Using `px` when a responsive value would be better.
- Forgetting that `em` depends on the current element.

## ✅ Remember

- `px` is fixed.
- `%`, `em`, `rem`, `vw`, and `vh` are relative.
- Relative units are often better for responsive layouts.

## 🧭 Navigation

[← Previous](10-width-and-height.md) | [CSS Home](00-README.md) | [Next →](12-backgrounds.md)
