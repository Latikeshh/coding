# Width and Height (`min-width`, `max-width`)

> 🟢 Beginner

## 📖 Definition

The **`width`** and **`height`** properties define the dimensions of block-level and inline-block HTML elements. **`min-width`**, **`max-width`**, **`min-height`**, and **`max-height`** set responsive lower and upper size constraints.

## 🌐 Multilingual Explanation

### English
`width` and `height` set element dimensions. Use `max-width: 100%` or `max-width: 1200px` with `margin: 0 auto` for responsive layouts that adapt gracefully to smaller mobile screens.

### Hindi
`width` (chaudaai) aur `height` (oonchaai) element ka size decide karte hain. Mobile layouts ke liye `max-width` ka use karein taaki element screen se bahar na jaaye.

### Marathi
`width` ani `height` mule box chi lambi ani rundi tharte. Mobile var layout vyavasthit disnyasathi `max-width` vaprava.

## 🤔 Why Do We Need Dimension Constraints?

Hardcoding fixed pixel widths (like `width: 800px`) causes website boxes to overflow smaller mobile screens (375px), forcing unpleasant horizontal scrollbars. Using `max-width` allows elements to shrink on mobile while capping their growth on wide desktop monitors.

## 🧠 Simple Explanation

Imagine an expandable suitcase:
- `width: 100%`: Expands to fill whatever room is available.
- `max-width: 500px`: Expands freely on mobile, but stops expanding once it reaches 500 pixels wide on desktop monitors.
- `min-height: 200px`: Reserves at least 200 pixels height, but allows growing taller if extra content is added inside.

## 📝 Dimension Properties Reference

| Property | Purpose & Behavior | Responsive Usage Example |
|---|---|---|
| `width` | Sets fixed or relative element width | `width: 100%;` |
| `max-width` | Prevents element from exceeding maximum width | `max-width: 1200px;` |
| `min-width` | Guarantees minimum width threshold | `min-width: 250px;` |
| `height` | Sets element height (`auto` recommended for text boxes) | `height: 300px;` |
| `max-height` | Limits maximum vertical expansion | `max-height: 500px; overflow-y: auto;` |
| `min-height` | Ensures minimum vertical height | `min-height: 100vh;` |

## 💻 Examples

```css
/* Responsive container pattern */
.container {
  width: 100%;           /* Spans full width on mobile screens */
  max-width: 1140px;     /* Caps width at 1140px on large desktop monitors */
  margin: 0 auto;        /* Horizontally centers container on page */
}

/* Full-viewport hero banner */
.hero-section {
  width: 100%;
  min-height: 100vh;     /* Fills at least 100% of the viewport height */
  background-color: #1a1a1a;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Width and Height Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="responsive-card">
    <h2>Responsive Width Card</h2>
    <p>Resize your browser window. On wide screens, this card stops growing at 500px. On small mobile screens, it shrinks smoothly without causing horizontal scrolling.</p>
  </div>

</body>
</html>
```

```css
/* style.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  padding: 20px;
}

.responsive-card {
  width: 100%;
  max-width: 500px;
  min-height: 150px;
  margin: 40px auto;
  padding: 25px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

h2 {
  color: #1a73e8;
  margin-top: 0;
}
```

## 👀 What You Will See

A clean white card component centered horizontally. When you narrow your browser viewport down to mobile width (320px), the card contracts smoothly to `100%` viewport width instead of breaking off screen.

## 🧪 Try It Yourself

1. Change `max-width: 500px` to `width: 800px` in `style.css`.
2. Shrink your browser window below 800px and observe how horizontal scrollbars appear!
3. Switch back to `max-width: 800px; width: 100%;` to fix the layout.

## ⚠️ Common Mistakes

- **Hardcoding fixed `height` on text containers:** Setting `height: 100px` on a text card causes text overflow when font sizes change or content grows. Use `min-height` or `height: auto` instead.
- **Using fixed pixel widths for main page containers:** Writing `width: 1200px` breaks mobile responsiveness.

## 💡 Real-World Usage

Every modern responsive framework (Bootstrap, Tailwind, Grid systems) uses `max-width` paired with `width: 100%` and `margin: 0 auto` to build centered page wrappers that adapt seamlessly to mobile devices.

## 🔗 Related Topics

- [CSS Units (`px`, `rem`, `em`, `%`, `vw`, `vh`)](11-css-units.md)
- [The CSS Box Model](16-box-model.md)
- [Responsive Web Design Principles](22-responsive-design.md)

## ✅ Remember

- Prefer `max-width` over fixed `width` for responsive layouts.
- Use `min-height` rather than fixed `height` for text containers.
- Pair `width: 100%; max-width: 1200px; margin: 0 auto;` to create centered responsive layout wrappers.

## 🧭 Navigation

[← Previous](09-specificity.md) | [CSS Home](00-README.md) | [Next →](11-css-units.md)
