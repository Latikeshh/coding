# Text Styling & Typography

> 🟢 Beginner

## 📖 Definition

**Text Styling** properties format text alignment, spacing, transformation, decoration, line heights, and letter spacing to build readable typography hierarchy across web pages.

## 🌐 Multilingual Explanation

### English
Style text with `color`, `font-size`, `line-height` (spacious body text readability), `text-align`, `text-decoration`, `text-transform`, and `letter-spacing`.

### Hindi
Text styling se padhne ki kshamta (readability) badhti hai. `line-height: 1.5` se lines ke beech ki doori tay hoti hai. `text-align` se alignment set karein.

### Marathi
Vachniyata vadhvnyasathi `line-height` (1.5 te 1.6) ani `text-align` vapartat.

## 🤔 Why Is Typography Styling Crucial?

Websites are over 90% text content. Poorly spaced text with tight line heights or bad color contrast strains visitors' eyes and drives them away. Proper typography hierarchy guides readers naturally through articles.

## 📚 Essential Text Properties Reference Table

| Property | Purpose & Value Options | Example |
|---|---|---|
| `color` | Sets text color (Hex, RGB, HSL) | `color: #1f2937;` |
| `text-align` | Horizontal alignment (`left`, `center`, `right`, `justify`) | `text-align: center;` |
| `text-decoration` | Decorative lines (`none`, `underline`, `line-through`) | `text-decoration: none;` (Removes link underlines) |
| `text-transform` | Letter casing (`uppercase`, `lowercase`, `capitalize`) | `text-transform: uppercase;` |
| `line-height` | Vertical spacing between line boxes | `line-height: 1.6;` (Recommended `1.5`–`1.6` for body text) |
| `letter-spacing` | Horizontal spacing between characters | `letter-spacing: 0.05em;` |
| `word-spacing` | Horizontal spacing between words | `word-spacing: 0.1em;` |
| `text-shadow` | Drop shadow behind text characters | `text-shadow: 1px 1px 2px rgba(0,0,0,0.2);` |
| `white-space` | Controls line wrapping (`normal`, `nowrap`, `pre-wrap`) | `white-space: nowrap;` |

## 💻 Examples

```css
/* Body typography defaults for high readability */
body {
  color: #222222;
  font-size: 1rem;       /* 16px */
  line-height: 1.6;     /* 1.6 multiplier creates comfortable line height */
}

/* Category Badge Styling */
.badge {
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.75rem;   /* 12px */
  font-weight: bold;
}

/* Clean Un-underlined Navigation Links */
.nav-link {
  text-decoration: none;
  color: #2563eb;
}

.nav-link:hover {
  text-decoration: underline;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Typography Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <article class="article-box">
    <span class="category-badge">WEB DEVELOPMENT</span>
    <h1>Mastering CSS Typography</h1>
    <p class="lead-text">Spacious line height and high contrast typography make body text enjoyable to read on both mobile and desktop screens.</p>
    <p>Good typography establishes clear visual hierarchy. Use larger font weights for headings and comfortable 1.5 to 1.6 line heights for paragraph text blocks.</p>
    <a href="#" class="read-more">Read Full Article &rarr;</a>
  </article>

</body>
</html>
```

```css
/* style.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f3f4f6;
  padding: 30px;
  display: flex;
  justify-content: center;
}

.article-box {
  background: white;
  padding: 35px;
  border-radius: 12px;
  max-width: 600px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.category-badge {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.75rem;
  font-weight: bold;
  color: #2563eb;
  background-color: #eff6ff;
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 12px;
}

h1 {
  margin-top: 0;
  color: #111827;
  line-height: 1.25;
}

.lead-text {
  font-size: 1.125rem;
  color: #374151;
  line-height: 1.6;
  font-weight: 500;
}

p {
  color: #4b5563;
  line-height: 1.6;
}

.read-more {
  display: inline-block;
  margin-top: 15px;
  color: #2563eb;
  text-decoration: none;
  font-weight: bold;
}

.read-more:hover {
  text-decoration: underline;
}
```

## 👀 What You Will See

A beautifully formatted article card with uppercase category badge, clean headline line height, and spacious paragraph text.

## 🧪 Try It Yourself

1. Remove `line-height: 1.6` from `p` elements and notice how cramped and difficult paragraphs become to read.
2. Add `text-transform: uppercase` to `h1` to transform heading letters into all capitals automatically.

## ⚠️ Common Mistakes

- **Tight line heights on paragraph body text:** Using `line-height: 1` or omitting `line-height` causes text lines to touch vertically. Always set `line-height: 1.5` to `1.6` on body text.
- **Justifying paragraph body text (`text-align: justify`):** Causes irregular gaps ("rivers of white space") between words on web screens. Keep body text aligned left (`text-align: left`).

## 💡 Real-World Usage

Designers use `text-decoration: none` to strip default underlines from links, adding custom animated underline effects on `:hover` for modern UI aesthetics.

## 🔗 Related Topics

- [Web Fonts & `@font-face`](27-fonts.md)
- [CSS Functions (`clamp()`)](32-functions.md)

## ✅ Remember

- Use `line-height: 1.5` to `1.6` for readable body paragraphs.
- Use `text-decoration: none` to remove default link underlines.
- Use `text-transform: uppercase` and `letter-spacing` for category badges and buttons.

## 🧭 Navigation

[← Previous](25-pseudo-elements.md) | [CSS Home](00-README.md) | [Next →](27-fonts.md)
