# Web Fonts (`font-family`, `@font-face`)

> 🟢 Beginner

## 📖 Definition

Font properties control typefaces, weights, styles, and web font loading using **`font-family`**, **`font-weight`**, **`font-style`**, Google Fonts `<link>`, or custom **`@font-face`** rules.

## 🌐 Multilingual Explanation

### English
Set typefaces with `font-family`. Always specify generic system fallback fonts (`sans-serif`, `serif`, `monospace`). Load custom web fonts using Google Fonts or `@font-face`.

### Hindi
`font-family` se font style tay karein. Font stack ke end mein fallback system font (jaise `sans-serif`) zaroor likhein. Google Fonts se naye fonts aasani se load kiye ja sakte hain.

### Marathi
`font-family` madhye main font ani shevati fallback font (jase `sans-serif`) lihava.

## 🤔 Why Do We Need Web Fonts & Fallbacks?

If you specify `font-family: 'Inter'`, but a visitor's computer does not have the "Inter" font installed locally, their browser will render the page in a default fallback font. Providing custom Web Fonts (via Google Fonts or `@font-face`) ensures your website looks identical on all devices.

## 🧠 Simple Explanation & Font Stack Concept

A **Font Stack** is a prioritized list of fallback fonts separated by commas:

```css
body {
  font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

1. **`'Inter'`:** The custom web font you want to display first.
2. **`system-ui`, `-apple-system`, `'Segoe UI'`:** High-quality system fonts pre-installed on macOS, Windows, and Android.
3. **`sans-serif`:** The universal generic fallback category if no specific font is found.

## 📚 Generic Font Families

- **`sans-serif`:** Clean fonts without end strokes/serifs (Arial, Helvetica, Inter, Roboto). Best for digital screens.
- **`serif`:** Traditional fonts with decorative end strokes (Times New Roman, Georgia). Best for print & editorial articles.
- **`monospace`:** Fixed-width character fonts (Courier New, Consolas, Fira Code). Best for code snippets.

## 📝 Loading Fonts with Google Fonts vs. `@font-face`

### Method 1: Google Fonts `<link>` (Easiest)
```html
<!-- Inside HTML <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
```

```css
/* Inside style.css */
body {
  font-family: 'Inter', sans-serif;
}
```

### Method 2: Custom `@font-face` Rule
Used when hosting self-hosted font files (`.woff2`, `.woff`):

```css
@font-face {
  font-family: 'CustomFont';
  src: url('fonts/custom-font.woff2') format('woff2'),
       url('fonts/custom-font.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap; /* Performance best practice: shows fallback font until custom font loads */
}

body {
  font-family: 'CustomFont', sans-serif;
}
```

## 💻 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Web Fonts Demo</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="card">
    <h1>Poppins Google Font</h1>
    <p>Loaded via Google Fonts API with font-display: swap for performance.</p>
  </div>

</body>
</html>
```

```css
/* style.css */
body {
  font-family: 'Poppins', system-ui, sans-serif;
  background-color: #f0f2f5;
  padding: 40px;
  display: flex;
  justify-content: center;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  max-width: 400px;
}

h1 {
  font-weight: 700;
  color: #1e293b;
  margin-top: 0;
}

p {
  font-weight: 400;
  color: #64748b;
  line-height: 1.6;
}
```

## 👀 What You Will See

The webpage renders styled typography using the custom Google Font **Poppins** with bold heading weights (`700`) and regular body weights (`400`).

## 🧪 Try It Yourself

1. Visit [fonts.google.com](https://fonts.google.com) and search for a font (e.g. `Roboto` or `Montserrat`).
2. Copy the generated `<link>` tags into your HTML `<head>` and update `font-family` in CSS.

## ⚠️ Common Mistakes

- **Forgetting generic fallback font:** Writing `font-family: 'MyFont'` without appending `, sans-serif` or `, serif`.
- **Forgetting multi-word quotes:** Font names containing spaces must be enclosed in quotes: `font-family: 'Open Sans', sans-serif;`.
- **Omitting `font-display: swap`:** Causes Flash of Invisible Text (FOIT) while font files download.

## 💡 Real-World Usage

Modern web design systems host self-hosted `.woff2` font files using `@font-face` with `font-display: swap` to maximize Core Web Vitals performance scores.

## 🔗 Related Topics

- [Text Styling & Typography](26-text-styling.md)
- [CSS Functions (`clamp()`)](32-functions.md)

## ✅ Remember

- Enclose font names with spaces in quotes (`'Open Sans'`).
- Always specify generic fallbacks (`sans-serif`, `serif`, `monospace`).
- Use `font-display: swap` in `@font-face` for performance.

## 🧭 Navigation

[← Previous](26-text-styling.md) | [CSS Home](00-README.md) | [Next →](28-transitions.md)
