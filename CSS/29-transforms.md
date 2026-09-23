# Transforms

> 🟢 Beginner

## 📖 Definition

Transforms change the appearance of an element in 2D or 3D space without affecting the normal document flow.

## 🤔 Why Do We Use It?

They are useful for movement, rotation, scaling, and creative effects.

## 🧠 Simple Explanation

A transform changes how an element looks, such as rotating it or making it larger.

## Common transform functions

- `translate()` → moves the element
- `rotate()` → rotates the element
- `scale()` → increases or decreases size
- `skew()` → slants the element

## 📝 Syntax

```css
.box {
  transform: rotate(10deg) scale(1.1);
}
```

## 💡 Example

```css
.card {
  transform: rotate(5deg);
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Transforms Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">Transform me</div>
</body>
</html>
```

```css
.card {
  transform: rotate(5deg);
  transition: transform 0.3s ease;
}
```

## 👀 What You Will See

The card rotates a little and can be visually emphasized.

## 🧪 Try It Yourself

Replace `rotate(5deg)` with `scale(1.2)` and observe how the card changes.

## ⚠️ Common Mistakes

- Using transforms without thinking about readability.
- Applying too many transforms at once.
- Using transforms for layout changes instead of CSS layout tools.

## ✅ Remember

- Transforms change appearance, not structure.
- They are helpful for subtle visual effects.
- Use them carefully so the page feels polished, not noisy.

## 🧭 Navigation

[← Previous](28-transitions.md) | [CSS Home](00-README.md) | [Next →](30-animations.md)
