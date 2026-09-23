# CSS Variables

> 🟢 Beginner

## 📖 Definition

CSS variables let you store reusable values like colors, spacing, and sizes.

## 🤔 Why Do We Use It?

They make large stylesheets easier to maintain and update.

## 🧠 Simple Explanation

A CSS variable is like a named container for a value. You can change it once and reuse it many times.

## 📝 Syntax

```css
:root {
  --primary-color: #0066cc;
  --spacing: 16px;
}

.button {
  background-color: var(--primary-color);
  padding: var(--spacing);
}
```

## 💡 Example

```css
:root {
  --main-bg: #f5f5f5;
  --card-padding: 20px;
}

.card {
  background: var(--main-bg);
  padding: var(--card-padding);
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Variables</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">Theme card</div>
</body>
</html>
```

```css
:root {
  --main-bg: #f5f5f5;
  --card-padding: 20px;
}

.card {
  background: var(--main-bg);
  padding: var(--card-padding);
}
```

## 👀 What You Will See

The card uses the same variables for consistent styling.

## 🧪 Try It Yourself

Change `--main-bg` to a different color and see the card update automatically.

## ⚠️ Common Mistakes

- Forgetting the `var()` function around the variable name.
- Making variable names hard to understand.
- Overusing variables without a plan.

## ✅ Remember

- Variables improve maintainability.
- They are especially useful in design systems.
- `:root` is the common place for global variables.

## 🧭 Navigation

[← Previous](30-animations.md) | [CSS Home](00-README.md) | [Next →](32-functions.md)
