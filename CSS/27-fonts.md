# Fonts

> 🟢 Beginner

## 📖 Definition

Fonts control the typeface used for text on a page.

## 🤔 Why Do We Use It?

Font choice affects readability, tone, and overall visual design.

## 🧠 Simple Explanation

Fonts determine how letters look: bold, modern, classic, playful, or readable.

## Common font properties

- `font-family` → the typeface
- `font-size` → how large the text is
- `font-weight` → boldness
- `font-style` → italic, normal, oblique

## 📝 Syntax

```css
p {
  font-family: Arial, sans-serif;
  font-size: 18px;
  font-weight: 600;
}
```

## 💡 Example

```css
body {
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Fonts Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Course Notes</h1>
  <p>Choose fonts that are easy to read.</p>
</body>
</html>
```

```css
body {
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2.5rem;
  font-weight: 700;
}
```

## 👀 What You Will See

The page uses a clean sans-serif typeface and a strong heading style.

## 🧪 Try It Yourself

Try `font-family: Georgia, serif;` and see how the page feels different.

## ⚠️ Common Mistakes

- Using too many font families in one design.
- Choosing decorative fonts for paragraphs.
- Forgetting fallback fonts.

## ✅ Remember

- Font choice affects readability and branding.
- Use system fonts or common web-safe fonts first.
- Combine carefully for a clean visual style.

## 🧭 Navigation

[← Previous](26-text-styling.md) | [CSS Home](00-README.md) | [Next →](28-transitions.md)
