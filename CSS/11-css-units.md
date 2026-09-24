# CSS Units (`px`, `rem`, `em`, `%`, `vw`, `vh`)

> 🟢 Beginner

## 📖 Definition

**CSS Units** specify measurement values for properties like `font-size`, `width`, `height`, `margin`, and `padding`. Units are categorized into **Absolute Units** (fixed measurements like `px`) and **Relative Units** (dynamic measurements like `rem`, `em`, `%`, `vw`, `vh`) that scale based on browser defaults or parent containers.

## 🌐 Multilingual Explanation

### English
`px` is a fixed absolute unit. `rem` is relative to the root `<html>` font size (default `1rem = 16px`). `%` is relative to parent container dimensions. `vw`/`vh` are relative to 1% of viewport width/height.

### Hindi
`px` fixed absolute unit hai. `rem` root `<html>` font size ke hisaab se badalta hai. `%` parent element ke size aur `vw`/`vh` viewport (screen) size ke hisaab se badalte hain.

### Marathi
`px` fixed unit aahe. `rem` root font var ani `%` parent box chya akara var avlambun aste.

## 🤔 Why Are Relative Units Essential?

If you set all font sizes in fixed `px` (pixels), users with visual impairments who increase their browser default font size in accessibility settings will find your text stuck at small fixed sizes. Using relative units like `rem` respects user accessibility preferences and ensures responsive scaling across screens.

## 🧠 Simple Explanation

Think of measurements:
- **`px` (Pixel):** Like a fixed wooden ruler marked in millimeters. It never expands or shrinks regardless of environment.
- **`rem` (Root EM):** Like a rubber band relative to the house foundation (`<html>` root size). Change the foundation, and all `rem` measurements scale proportionally.
- **`vw` / `vh` (Viewport Width/Height):** Like a percentage of the window glass size.

## 📚 CSS Units Reference Table

| Unit Type | Unit Name | Reference Base | Best Used For |
|---|---|---|---|
| **Absolute** | `px` (Pixels) | Fixed screen hardware pixels (`1px`) | Borders (`1px solid`), small precise shadows |
| **Relative** | `rem` (Root EM) | Relative to `<html>` root font size (`1rem = 16px` default) | **Typography, Padding, Margins, Component Sizing** |
| **Relative** | `em` | Relative to parent element font size | Sub-component elements that must scale with local font size |
| **Relative** | `%` (Percent) | Relative to parent container's dimensions | Responsive column widths, container wrappers |
| **Relative** | `vw` (Viewport Width) | 1% of total browser window width | Hero section banners, fluid typography |
| **Relative** | `vh` (Viewport Height)| 1% of total browser window height | Full-screen hero sections (`min-height: 100vh`) |

## 💻 Code Examples

```css
/* Setting root font size explicitly (Optional, browser defaults to 16px) */
html {
  font-size: 16px; 
}

/* Typography using rem */
h1 {
  font-size: 2.25rem; /* 2.25 * 16px = 36px */
  margin-bottom: 1rem; /* 16px */
}

p {
  font-size: 1rem;    /* 16px */
  line-height: 1.5;
}

/* Responsive container using % and vh */
.hero-banner {
  width: 90%;          /* 90% of parent width */
  min-height: 80vh;    /* 80% of current browser window height */
  padding: 2rem;       /* 32px */
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Units Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="card">
    <h2>Accessible Typography (`rem`)</h2>
    <p>This component uses <code>rem</code> for font sizes and padding, ensuring that if a user changes their browser font scale settings, the component scales gracefully.</p>
  </div>

</body>
</html>
```

```css
/* style.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f6f8;
  margin: 0;
  padding: 2rem;
}

.card {
  width: 100%;
  max-width: 35rem; /* 35 * 16px = 560px */
  margin: 0 auto;
  padding: 1.5rem; /* 24px */
  background-color: #ffffff;
  border-radius: 0.5rem; /* 8px */
  box-shadow: 0 0.25rem 0.75rem rgba(0,0,0,0.08);
}

h2 {
  font-size: 1.5rem; /* 24px */
  color: #0056b3;
  margin-top: 0;
}

p {
  font-size: 1rem; /* 16px */
  color: #333333;
}
```

## 👀 What You Will See

A clean card container scaled proportionally using `rem` units. If you increase your browser's default font size from `16px` to `20px` in settings, the card font size, padding, and maximum width scale up harmoniously.

## 🧪 Try It Yourself

1. Open your browser settings (`Settings → Appearance → Font size`) and change default font size from **Medium (16px)** to **Very Large (24px)**.
2. Observe how pages built with `rem` scale up text cleanly while fixed `px` pages stay tiny and unreadable!

## ⚠️ Common Mistakes

- **Using `px` for body typography:** Hardcoding `font-size: 14px` on `body` overrides user accessibility settings. Use `rem` for typography.
- **Confusing `rem` with `em`:** `rem` is always relative to the root `<html>` font size, whereas `em` compounds relative to its immediate parent font size (which can lead to unintended shrinking or growing when nested).

## 💡 Real-World Usage

Modern web design systems (like Tailwind CSS) use `rem` for all spacing scales (`p-4` = `1rem`, `m-6` = `1.5rem`) and typography to ensure complete accessibility compliance (WCAG).

## 🔗 Related Topics

- [Width and Height](10-width-and-height.md)
- [Responsive Web Design Principles](22-responsive-design.md)
- [CSS Functions (`calc()`, `clamp()`)](32-functions.md)

## ✅ Remember

- Use `rem` for typography, padding, margins, and component sizing.
- Use `%`, `vw`, and `vh` for responsive layouts.
- Use `px` sparingly for thin borders (`1px solid`) or fixed subtle box shadows.

## 🧭 Navigation

[← Previous](10-width-and-height.md) | [CSS Home](00-README.md) | [Next →](12-backgrounds.md)
