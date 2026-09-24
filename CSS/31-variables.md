# CSS Variables (Custom Properties)

> 🟢 Beginner

## 📖 Definition

**CSS Custom Properties (CSS Variables)** are user-defined entities that store reusable values (such as theme colors, font stacks, spacing values, or shadow levels) scoped to specific elements or globally on `:root`, and accessed using the **`var(--variable-name)`** function.

## 🌐 Multilingual Explanation

### English
Define global CSS variables on `:root` as `--variable-name: value;` and reference them using `var(--variable-name)`. Variables enable dynamic theme switching (Dark/Light mode) without code duplication.

### Hindi
`:root` mein `--primary-color: #007bff;` jaise variable banakar `var(--primary-color)` se re-use karein. CSS variables se Dark Mode aur theme change karna bohot aasaan ho jaata hai.

### Marathi
CSS variables mule theme badalne (Dark Mode) ani code manage karne sope jaate.

## 🤔 Why Do We Use CSS Variables?

Without variables, changing a primary brand color (`#2563eb`) across a 2,000-line stylesheet requires searching and replacing hundreds of individual property declarations. With CSS variables, you update the variable value once on `:root`, and the entire website updates instantly.

## 🧠 Simple Explanation

Think of a CSS variable like a named storage box in a workshop. You write the label `--brand-color` on the box and put blue paint inside. Whenever any painting task needs brand color, workers grab paint from `--brand-color`. If you decide to change brand color to green later, you simply replace the paint inside that single box.

## 📝 Syntax & Usage

```css
/* 1. Global Scope Definition on :root */
:root {
  --primary-color: #2563eb;
  --bg-color: #ffffff;
  --text-color: #1f2937;
  --card-radius: 12px;
  --base-padding: 1.5rem;
}

/* 2. Accessing Variables using var() */
body {
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: var(--base-padding);
}

.card {
  border-radius: var(--card-radius);
  border: 2px solid var(--primary-color);
}
```

## 🎨 Theme Switching with CSS Variables

Variables can be dynamically overridden under media queries or class toggles:

```css
/* Light Theme Defaults */
:root {
  --bg-main: #f8f9fa;
  --text-main: #111827;
  --card-bg: #ffffff;
}

/* Dark Theme Overrides */
[data-theme="dark"] {
  --bg-main: #111827;
  --text-main: #f9fafb;
  --card-bg: #1f2937;
}
```

## 💻 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Variables Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="theme-card">
    <h2>CSS Variables Component</h2>
    <p>All colors and spacing in this component are powered by reusable custom properties.</p>
    <button class="btn-primary">Primary Action</button>
  </div>

</body>
</html>
```

```css
/* style.css */
/* Global Design Tokens */
:root {
  --brand-blue: #2563eb;
  --brand-blue-hover: #1d4ed8;
  --surface-bg: #ffffff;
  --text-dark: #1f2937;
  --text-muted: #6b7280;
  --space-md: 1.5rem;
  --radius-lg: 12px;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f3f4f6;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.theme-card {
  background-color: var(--surface-bg);
  color: var(--text-dark);
  padding: var(--space-md);
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  max-width: 350px;
}

h2 {
  margin-top: 0;
  color: var(--text-dark);
}

p {
  color: var(--text-muted);
  line-height: 1.5;
}

.btn-primary {
  background-color: var(--brand-blue);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s ease;
}

.btn-primary:hover {
  background-color: var(--brand-blue-hover);
}
```

## 👀 What You Will See

A styled card component referencing centralized design tokens. Updating `--brand-blue` in `:root` changes the button color and accent highlights across the entire app instantly.

## 🧪 Try It Yourself

1. Change `--brand-blue: #2563eb` to `--brand-blue: #16a34a` (green) in `:root`.
2. Observe how the button and primary accents update to green across all component selectors automatically.

## ⚠️ Common Mistakes

- **Forgetting double dashes `--`:** Variable names MUST start with two dashes (e.g. `--primary-color`, NOT `primary-color`).
- **CSS Variable names are case-sensitive:** `--mainColor` and `--maincolor` are treated as two separate variables.
- **Forgetting `var()` wrapper:** Writing `color: --primary-color;` instead of `color: var(--primary-color);`.

## 💡 Real-World Usage

CSS Custom Properties power dark mode toggles, multi-tenant white-label branding themes, and responsive spacing scale tokens across professional design systems.

## 🔗 Related Topics

- [CSS Functions (`calc()`, `clamp()`)](32-functions.md)
- [CSS Architecture & Dark Mode](41-css-architecture-and-dark-mode.md)

## ✅ Remember

- Custom properties start with double dashes `--` (e.g. `--primary-color`).
- Declare global variables on `:root`.
- Access variables using `var(--variable-name)`.

## 🧭 Navigation

[← Previous](30-animations.md) | [CSS Home](00-README.md) | [Next →](32-functions.md)
