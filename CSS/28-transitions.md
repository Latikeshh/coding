# Transitions

> 🟢 Beginner

## 📖 Definition

Transitions make CSS changes happen smoothly over time.

## 🤔 Why Do We Use It?

They improve user experience by making hover effects and state changes feel polished.

## 🧠 Simple Explanation

Instead of changing immediately, an element can animate from one style to another over a short time.

## 📝 Syntax

```css
button {
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0055aa;
}
```

## 💡 Example

```css
button {
  background: #eee;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  background: #dbeeff;
  transform: translateY(-2px);
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Transitions Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <button>Hover me</button>
</body>
</html>
```

```css
button {
  background: #eee;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

button:hover {
  background: #dbeeff;
  transform: translateY(-2px);
}
```

## 👀 What You Will See

The button changes color and lifts slightly on hover.

## 🧪 Try It Yourself

Change the duration from `0.3s` to `1s` to make the effect slower.

## ⚠️ Common Mistakes

- Using transitions on too many elements.
- Making the animation feel distracting.
- Forgetting to declare the property being transitioned.

## ✅ Remember

- Transitions create smooth visual changes.
- They are simple and effective for UI polish.
- Use them to support the user experience, not distract from it.

## 🧭 Navigation

[← Previous](27-fonts.md) | [CSS Home](00-README.md) | [Next →](29-transforms.md)
