# Positioning, `z-index` & Stacking Context

> 🟡 Intermediate

## 📖 Definition

The **`position`** property specifies how an element is placed within the document flow using offset properties (`top`, `right`, `bottom`, `left`). The **`z-index`** property controls vertical front-to-back layer stacking order of overlapping positioned elements within a **Stacking Context**.

## 🌐 Multilingual Explanation

### English
`position` controls layout placement (`static`, `relative`, `absolute`, `fixed`, `sticky`). `absolute` positions relative to its nearest non-static ancestor. `z-index` controls layer stacking order.

### Hindi
`position` elements ko jagah dene ke kaam aati hai. `absolute` apne sabse paas wale `relative` parent ke hisaab se set hota hai. Overlap hone wale elements ki layering ko `z-index` control karta hai.

### Marathi
`position` mule element halavta yeto. Overlap zaleleya elements madhye `z-index` mule konta element var disel te tharte.

## 📚 Position Values Reference Table

| Value | Document Flow | Positioned Relative To | Common Use Cases |
|---|---|---|---|
| **`static`** (Default) | In normal flow | Normal document flow (`top`/`left` ignored) | Default browser element layout |
| **`relative`** | In normal flow | Its own normal starting position | Parent container anchor for `absolute` children |
| **`absolute`** | **Removed from flow** | **Nearest non-static ancestor element** | Badge overlays, dropdown menus, modal popups |
| **`fixed`** | **Removed from flow** | **Browser Viewport Window** | Fixed header bars, floating chat widgets |
| **`sticky`** | In flow until scroll threshold | Scroll container parent | Sticky navigation bars, table header titles |

## 🔑 Absolute Positioning Pattern: Parent `relative` + Child `absolute`

To position an `absolute` child element precisely inside a container, you **must set `position: relative` on the parent container**. Otherwise, the child positions relative to the entire `<body>` page!

```css
/* Parent Container Anchor */
.card {
  position: relative; /* Establishes positioning anchor boundary */
  width: 300px;
}

/* Child Overlay Badge */
.card-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ff3b30;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
}
```

## 🔍 `z-index` & Stacking Context

`z-index` controls layer overlap along the Z-axis (towards or away from the viewer). Higher `z-index` values render in front of lower values.

> [!IMPORTANT]
> **Stacking Context Rule:** `z-index` works ONLY on positioned elements (`relative`, `absolute`, `fixed`, `sticky`). A child element with `z-index: 9999` inside a parent with lower stacking context **cannot appear above** an element in a higher parent stacking context!

A new Stacking Context is created by:
1. Positioned elements (`relative`/`absolute`) with `z-index` other than `auto`.
2. `position: fixed` or `position: sticky`.
3. Elements with `opacity` less than `1`.
4. Elements with `transform`, `filter`, or `perspective` properties applied.

## 💻 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Positioning Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="sticky-nav">
    <span>Sticky Header Bar</span>
  </header>

  <div class="product-card">
    <span class="badge">SALE</span>
    <h2>Wireless Headphones</h2>
    <p>Premium noise-cancelling headphones.</p>
  </div>

</body>
</html>
```

```css
/* style.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  background-color: #f4f6f8;
  height: 200vh; /* Extra height to test sticky scroll */
  padding-top: 20px;
}

.sticky-nav {
  position: sticky;
  top: 0;
  z-index: 1000; /* Stays above body content during scroll */
  background-color: #111827;
  color: white;
  padding: 15px 30px;
}

.product-card {
  position: relative; /* Anchor for absolute badge */
  width: 300px;
  margin: 40px auto;
  padding: 25px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.badge {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #ef4444;
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
}
```

## 👀 What You Will See

- The navigation bar stays pinned to the top of the browser window as you scroll down (`position: sticky`).
- The red "SALE" badge floats at the top-right corner of the product card (`position: absolute` relative to `.product-card`).

## 🧪 Try It Yourself

1. Remove `position: relative` from `.product-card` in `style.css`.
2. Notice how the "SALE" badge jumps to the top-right corner of the entire `<body>` page instead of staying attached to the card!

## ⚠️ Common Mistakes

- **Forgetting `position: relative` on parent container:** Causes `position: absolute` children to align to the document root instead of the card.
- **Applying `z-index` to `position: static` elements:** `z-index` is ignored on `position: static` elements.
- **Using `position: fixed` for main layout columns:** Destroys document layout flow and causes overlapping text.

## 💡 Real-World Usage

Positioning powers essential UI patterns: fixed header bars, notification badges on shopping cart icons, modal popup windows, and floating support chat widgets.

## 🔗 Related Topics

- [Display Property](17-display.md)
- [Flexbox Layout](20-flexbox.md)
- [CSS Grid Layout](21-grid.md)

## ✅ Remember

- Use `position: relative` on parent containers to anchor `position: absolute` children.
- `position: fixed` attaches to the browser window.
- `position: sticky` toggles pinning based on scroll position.
- `z-index` requires a non-static positioned element.

## 🧭 Navigation

[← Previous](17-display.md) | [CSS Home](00-README.md) | [Next →](19-float-and-clear.md)
