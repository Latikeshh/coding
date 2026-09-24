# CSS Architecture (BEM), `@supports` & Dark Mode

> 🔴 Advanced

## 📖 Definition

**CSS Architecture & Dark Mode** covers structuring maintainable production stylesheets at scale:
- **BEM (Block Element Modifier):** A naming convention methodology (`.block__element--modifier`) that keeps CSS selectors flat, modular, and reusable without specificity collisions.
- **`@supports` Feature Queries:** Conditional CSS rules that test whether a browser supports specific CSS features before applying them.
- **Dark Mode Architecture:** Implementing dark themes seamlessly using CSS Custom Properties and `@media (prefers-color-scheme: dark)` or class-based theme toggling.

## 🌐 Multilingual Explanation

### English
BEM naming (`.card__title--active`) keeps selector specificity flat and maintainable. `@supports (display: grid)` tests browser feature support. Dark Mode uses CSS variables with `@media (prefers-color-scheme: dark)`.

### Hindi
BEM naming (`.card__title--active`) se code clean, modular, aur re-usable rehta hai. `@supports` se browser feature support test hota hai. Dark mode ko CSS variables aur `prefers-color-scheme` dware manage kiya jaata hai.

### Marathi
BEM padhdati mule code neetnetka rahto. `@supports` dware browser features tapasya yetat ani CSS variables ne dark mode banavla jaato.

## 🧱 The BEM Naming Methodology Explained

BEM stands for **Block**, **Element**, **Modifier**:

```text
.block__element--modifier
```

1. **Block (`.card`):** Standalone, meaningful component entity.
2. **Element (`.card__title`, `.card__img`):** A sub-part inside the Block that depends on the Block context (separated by double underscores `__`).
3. **Modifier (`.card--featured`, `.card__title--large`):** A flag that modifies appearance or state (separated by double hyphens `--`).

```css
/* BEM Naming Convention Example */
.card { ... }                /* Block */
.card__image { ... }         /* Element */
.card__title { ... }         /* Element */
.card__button { ... }        /* Element */
.card__button--primary { ... } /* Modifier */
```

## 🛠️ `@supports` Feature Queries

`@supports` allows progressive enhancement by checking browser capability before applying modern CSS:

```css
/* Fallback for older browsers */
.container {
  display: flex;
}

/* Progressive enhancement if browser supports CSS Grid */
@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
```

## 🌙 Dark Mode Architecture Pattern

The most clean method to support Dark Mode is combining CSS Variables with `@media (prefers-color-scheme: dark)` and attribute overrides:

```css
/* 1. Default Light Theme Variables */
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --text-primary: #0f172a;
  --text-muted: #64748b;
  --border-color: #e2e8f0;
}

/* 2. Automatic OS Dark Mode Preference */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-primary: #0f172a;
    --bg-secondary: #1e293b;
    --text-primary: #f8fafc;
    --text-muted: #94a3b8;
    --border-color: #334155;
  }
}

/* 3. Manual JavaScript Toggle Override */
[data-theme="dark"] {
  --bg-primary: #0f172a;
  --bg-secondary: #1e293b;
  --text-primary: #f8fafc;
  --text-muted: #94a3b8;
  --border-color: #334155;
}
```

## 💻 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BEM &amp; Dark Mode Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <article class="article-card article-card--featured">
    <h2 class="article-card__title">BEM &amp; Dark Theme Card</h2>
    <p class="article-card__excerpt">This component uses BEM class naming conventions and respects your system OS Dark Mode preferences automatically!</p>
    <button class="article-card__btn article-card__btn--primary">Read Article</button>
  </article>

</body>
</html>
```

```css
/* style.css */
*, *::before, *::after {
  box-sizing: border-box;
}

/* Light Theme Defaults */
:root {
  --bg-page: #f1f5f9;
  --bg-surface: #ffffff;
  --text-main: #0f172a;
  --text-sub: #475569;
  --border-main: #e2e8f0;
  --accent-blue: #2563eb;
  --accent-hover: #1d4ed8;
}

/* OS Dark Mode Preference */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-page: #020617;
    --bg-surface: #0f172a;
    --text-main: #f8fafc;
    --text-sub: #94a3b8;
    --border-main: #1e293b;
    --accent-blue: #38bdf8;
    --accent-hover: #0284c7;
  }
}

body {
  font-family: Arial, sans-serif;
  background-color: var(--bg-page);
  color: var(--text-main);
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  transition: background-color 0.3s, color 0.3s;
}

/* BEM Component: Block (.article-card) */
.article-card {
  background-color: var(--bg-surface);
  border: 1px solid var(--border-main);
  border-radius: 12px;
  padding: 30px;
  max-width: 450px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: background-color 0.3s, border-color 0.3s;
}

/* BEM Modifier (.article-card--featured) */
.article-card--featured {
  border-top: 4px solid var(--accent-blue);
}

/* BEM Element (.article-card__title) */
.article-card__title {
  margin-top: 0;
  color: var(--text-main);
}

/* BEM Element (.article-card__excerpt) */
.article-card__excerpt {
  color: var(--text-sub);
  line-height: 1.6;
}

/* BEM Element + Modifier (.article-card__btn--primary) */
.article-card__btn {
  padding: 10px 20px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s;
}

.article-card__btn--primary {
  background-color: var(--accent-blue);
  color: white;
}

.article-card__btn--primary:hover {
  background-color: var(--accent-hover);
}
```

## 👀 What You Will See

- BEM classes keep the stylesheet organized into component blocks.
- If your system operating system theme is set to Dark Mode, the page automatically switches to dark surface background colors with high-contrast text!

## 🧪 Try It Yourself

Toggle your computer's OS theme setting between Light Mode and Dark Mode to watch the page switch themes instantly!

## ⚠️ Common Mistakes

- **Deep nesting in BEM:** Writing `.card__body__title__text` (keep BEM flat: `.card__title`).
- **Hardcoding hex colors inside component rules when building dark mode:** Hardcoding `color: #000000` prevents dark mode variables from overriding text colors.

## 💡 Real-World Usage

Major tech companies (GitHub, Twitter/X, Slack, Stripe) structure design systems with BEM class conventions and CSS variables to support Dark Mode, Light Mode, and high-contrast themes cleanly.

## 🔗 Related Topics

- [CSS Variables (Custom Properties)](31-variables.md)
- [Media Queries & Container Queries](23-media-queries.md)
- [Overflow & Visibility](42-overflow-and-visibility.md)

## ✅ Remember

- BEM format: `.block__element--modifier`.
- Use `:root` variables for dark mode theme color tokens.
- Use `@media (prefers-color-scheme: dark)` for native OS theme preferences.

## 🧭 Navigation

[← Previous](40-modern-css-features.md) | [CSS Home](00-README.md) | [Next →](42-overflow-and-visibility.md)
