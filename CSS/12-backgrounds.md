# Backgrounds & Gradients

> 🟢 Beginner

## 📖 Definition

CSS **Background** properties control the visual background layers behind HTML elements. They allow setting solid colors (`background-color`), image files (`background-image`), image scaling and repeating, attachment behavior, and smooth multi-color transitions using CSS gradients (`linear-gradient()`, `radial-gradient()`).

## 🌐 Multilingual Explanation

### English
Style backgrounds using `background-color`, `background-image`, `background-size: cover`, and gradients (`linear-gradient()`). Use `background-size: cover` to fill hero containers without stretching distorting images.

### Hindi
`background-color` se color, `background-image` se photo aur `linear-gradient()` se do ya jyada colors ka gradient set kiya jaata hai. Image ko sahi fit karne ke liye `background-size: cover` use karein.

### Marathi
Background sathi colors, images ani `linear-gradient()` vapartat. Image neet basvnyasathi `background-size: cover` vapartat.

## 🤔 Why Do We Use Backgrounds?

Backgrounds create visual depth, establish brand aesthetics, highlight card containers, and build engaging hero banner sections for landing pages.

## 📚 Background Properties Reference Table

| Property | Purpose & Values | Example |
|---|---|---|
| `background-color` | Sets solid color (Hex, RGB, RGBA, Named) | `background-color: #f8f9fa;` |
| `background-image` | Specifies image URL or gradient function | `background-image: url("hero.jpg");` |
| `background-repeat` | Controls tile repeating (`repeat`, `no-repeat`) | `background-repeat: no-repeat;` |
| `background-position` | Positions image alignment (`center`, `top left`) | `background-position: center center;` |
| `background-size` | Scales image (`cover`, `contain`, `100%`) | `background-size: cover;` |
| `background-attachment` | Controls scroll attachment (`scroll`, `fixed`) | `background-attachment: fixed;` (Parallax) |
| `background` (Shorthand) | Combines all background properties into one line | `background: #000 url("hero.jpg") no-repeat center/cover;` |

## 🎨 CSS Gradients

Gradients allow blending two or more colors smoothly without loading image files:
- **`linear-gradient(angle, color1, color2)`:** Transitions colors along a straight directional line.
- **`radial-gradient(shape, color1, color2)`:** Transitions colors outward from a central focal point.

```css
/* Linear Gradient (45 degree angle) */
.gradient-banner {
  background-image: linear-gradient(135deg, #007bff, #6610f2);
}

/* Semi-transparent dark overlay over background image for text contrast */
.hero-overlay {
  background-image: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("hero.jpg");
  background-size: cover;
  background-position: center;
}
```

## 💻 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Backgrounds Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="hero-section">
    <h1>Web Development Bootcamp</h1>
    <p>Master modern HTML5, CSS3, and JavaScript from scratch.</p>
  </header>

</body>
</html>
```

```css
/* style.css */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.hero-section {
  min-height: 60vh;
  /* Dark linear gradient overlay combined with background color fallback */
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.hero-section p {
  font-size: 1.2rem;
  color: #d1d5db;
}
```

## 👀 What You Will See

A dark, gradient hero section filling `60vh` height with centered text.

## 🧪 Try It Yourself

Change `linear-gradient(135deg, #0f2027, #203a43, #2c5364)` to `linear-gradient(to right, #ff416c, #ff4b2b)` and observe the vibrant orange-pink gradient.

## ⚠️ Common Mistakes

- **Forgetting fallback `background-color`:** If a `background-image` fails to load or loads slowly, dark text over an unstyled transparent background becomes unreadable. Always specify a fallback `background-color`.
- **Forgetting `no-repeat`:** Large background images default to repeating like small floor tiles across the screen if `background-repeat: no-repeat` is omitted.

## 💡 Real-World Usage

Landing pages combine dark gradient overlays over hero background images (`background-size: cover`) to ensure white headline text remains high-contrast and readable over any image background.

## 🔗 Related Topics

- [Borders, Border Radius & Box Shadows](13-borders.md)
- [CSS Variables (Custom Properties)](31-variables.md)

## ✅ Remember

- Use `background-size: cover` and `background-position: center` for full-width banner images.
- Use `linear-gradient()` for modern multi-color card or banner accents.
- Always provide a solid fallback `background-color` when using background images.

## 🧭 Navigation

[← Previous](11-css-units.md) | [CSS Home](00-README.md) | [Next →](13-borders.md)
