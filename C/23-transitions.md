# Transitions

> 🟡 Intermediate

## 📖 Definition

Transitions let an element change smoothly from one style to another over a short time.

## 🤔 Why Do We Use It?

Transitions make interfaces feel smoother and more professional. They help users see that an interactive element has changed state.

## 🧠 Simple Explanation

Instead of a button changing instantly, it can slowly change color or size. This smooth change feels more natural.

## 📝 Syntax

```css
button {
  transition: background-color 0.3s ease;
}
```

## 💡 Example

```css
button {
  background-color: #3b82f6;
  color: white;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #1d4ed8;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Transition Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <button>Buy Now</button>
</body>
</html>
```

```css
button {
  background-color: #3b82f6;
  color: white;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #1d4ed8;
}
```

## 👀 What You Will See

When the mouse hovers over the button, the color shifts smoothly instead of changing instantly.

## 🧪 Try It Yourself

Add a transition for `transform` and make the button slightly grow on hover.

## ✅ Remember

- `transition` controls smooth change over time.
- `ease` is a common timing function.
- Smooth effects improve user experience without being distracting.

## 🧭 Navigation

[← Previous](22-pseudo-elements.md) | [CSS Home](00-README.md) | [Next →](24-transform-and-animation.md)
