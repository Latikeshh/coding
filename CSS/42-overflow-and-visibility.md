# Overflow & Visibility (`overflow`, `clip-path`)

> 🟢 Beginner

## 📖 Definition

The **`overflow`** property specifies how content that exceeds an element's container boundary box is handled (`visible`, `hidden`, `scroll`, `auto`). The **`visibility`** property controls whether an element is visible or hidden while preserving its space in the document layout flow.

## 🌐 Multilingual Explanation

### English
`overflow` controls content spilling outside box boundaries (`visible`, `hidden`, `scroll`, `auto`). `visibility: hidden` hides elements while preserving their reserved layout space (unlike `display: none`).

### Hindi
`overflow` decide karta hai ki agar content box se bahar nikle toh kya hoga (`visible`, `hidden`, `scroll`, `auto`). `visibility: hidden` element ko chhupata hai lekin uski khali space layout mein reserved rakhta hai.

### Marathi
`overflow` mule box baher janara content kasa sambhalaycha te tharte. `visibility: hidden` mule element distat nahi pan tyachi jaga layout madhye rahte.

## 📚 Property Reference Table

| Property | Purpose & Values | Example |
|---|---|---|
| `overflow` | Shorthand for horizontal (`overflow-x`) and vertical (`overflow-y`) content clipping | `overflow: hidden;` |
| `overflow: visible` | Default value; content spills outside the box without scrollbars | `overflow: visible;` |
| `overflow: hidden` | Clips extra content; hides scrollbars | `overflow: hidden;` |
| `overflow: auto` | Displays scrollbars **only when content overflows** | `overflow-y: auto;` (Scrollable modal body) |
| `overflow: scroll` | Always shows scrollbars (even if content fits) | `overflow-x: scroll;` |
| `visibility` | Controls element visibility (`visible`, `hidden`, `collapse`) | `visibility: hidden;` |
| `clip-path` | Creates custom geometric clip masks (`circle()`, `polygon()`) | `clip-path: circle(50%);` |

## ⚔️ `visibility: hidden` vs. `display: none` vs. `opacity: 0`

| Property | Visual Display | Document Layout Space Reserved | Interactive (Clickable) |
|---|---|---|---|
| **`display: none`** | Invisible | **No** (Space collapses) | No |
| **`visibility: hidden`** | Invisible | **Yes** (Space reserved) | No |
| **`opacity: 0`** | Invisible | **Yes** (Space reserved) | **Yes** (Receives clicks) |

## 💻 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Overflow &amp; Visibility Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Scrollable Box Container -->
  <div class="scroll-box">
    <h3>Scrollable Modal Body</h3>
    <p>Paragraph 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Paragraph 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Paragraph 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
    <p>Paragraph 4: Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
  </div>

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

.scroll-box {
  width: 100%;
  max-width: 320px;
  max-height: 180px; /* Capped container height */
  overflow-y: auto;  /* Displays vertical scrollbar when text exceeds 180px */
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

h3 {
  margin-top: 0;
  color: #1d4ed8;
}

p {
  color: #4b5563;
  line-height: 1.5;
  font-size: 14px;
}
```

## 👀 What You Will See

A card box with a capped height of 180px. Because the text paragraphs exceed 180px, a clean vertical scrollbar appears automatically on the right side.

## 🧪 Try It Yourself

1. Change `overflow-y: auto` to `overflow: hidden` in `style.css`.
2. Notice how text paragraphs beyond 180px are clipped off completely without scrollbars.

## ⚠️ Common Mistakes

- **Using `overflow: scroll` instead of `overflow: auto`:** `scroll` forces inactive gray scrollbars on screen even when content fits inside the container. Use `overflow: auto`.
- **Forgetting that `overflow: hidden` clips absolute overlays:** Using `overflow: hidden` on a card container will clip tooltips or dropdown menus that stick outside the card border.

## 💡 Real-World Usage

`overflow-y: auto` formats scrollable modal popup bodies, chat message feeds, and code block snippets. `clip-path: polygon()` creates slanted hero banners and custom geometric image masks.

## 🔗 Related Topics

- [Display Property](17-display.md)
- [Positioning, z-index & Stacking Context](18-positioning.md)
- [Card Layout Components](36-card-layout.md)

## ✅ Remember

- Use `overflow: auto` to show scrollbars only when content exceeds container dimensions.
- Use `overflow: hidden` to clip content or clean up floated children.
- `visibility: hidden` hides elements while preserving their reserved layout space.

## 🧭 Navigation

[← Previous](41-css-architecture-and-dark-mode.md) | [CSS Home](00-README.md) | [Next →](43-css-lists-and-tables.md)
