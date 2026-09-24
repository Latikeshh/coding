# Display Property (`block`, `inline`, `inline-block`, `none`)

> 🟢 Beginner

## 📖 Definition

The **`display`** property is the most fundamental layout property in CSS. It determines the outer layout behavior of an HTML element (`block`, `inline`, `inline-block`, `none`) and how its child elements are formatted (`flex`, `grid`).

## 🌐 Multilingual Explanation

### English
`block` takes 100% full width and starts on a new line. `inline` sits in text flow and ignores custom width/height. `inline-block` sits inline while allowing custom width/height sizing. `none` removes the element completely from layout rendering.

### Hindi
`block` poori chaudaai aur nayi line leta hai (`<div>`, `<p>`). `inline` line mein rehta hai aur width/height ko ignore karta hai (`<span>`). `inline-block` inline rehte hue width/height accept karta hai. `display: none` element ko poori tarah chhupa deta hai.

### Marathi
`display` mule element layout madhye kasa disel te tharte (`block`, `inline`, `inline-block`, `none`, `flex`, `grid`).

## 📚 Core Display Values Reference

| Value | Line Behavior | Width / Height Respect | Default HTML Examples |
|---|---|---|---|
| **`block`** | Always starts on a **new line**; spans 100% available width | Fully respects `width` & `height` | `<div>`, `<p>`, `<h1>`–`<h6>`, `<header>`, `<section>` |
| **`inline`** | Sits on **same line** alongside surrounding text | Ignores `width`, `height`, & vertical margins | `<span>`, `<a>`, `<strong>`, `<em>` |
| **`inline-block`** | Sits on **same line** in text flow | Fully respects `width`, `height`, & padding | `<button>`, `<input>`, `<img>` |
| **`none`** | **Removes element completely** from DOM layout flow | Unrendered (takes 0 space) | Used for toggling dropdowns / modals |
| **`flex`** | Enables 1D Flexbox container layout | Child flex items align in row/column | Navigation bars, toolbars, cards |
| **`grid`** | Enables 2D Grid container layout | Child grid items align in rows & columns | Page layouts, photo galleries, card grids |

## ⚔️ `display: none` vs. `visibility: hidden`

- **`display: none`:** Removes the element completely from layout calculation. Neighboring elements collapse into its space.
- **`visibility: hidden`:** Hides the element visually, but **reserves its empty box space** in the document layout.

## 💻 Examples

```css
/* Making inline links behave like block buttons */
.nav-link {
  display: inline-block;
  padding: 10px 20px;
  width: 120px; /* Fully respected because of inline-block */
  background-color: #007bff;
  color: white;
  text-decoration: none;
  text-align: center;
}

/* Hiding modal overlay */
.modal-overlay {
  display: none; /* Shown dynamically via JS by changing to display: flex */
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Display Property Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h2>Inline-Block Badges Example</h2>
  <p>Status badges sit inside sentence text: 
    <span class="badge badge-success">Active</span>
    <span class="badge badge-warning">Pending</span>
  </p>

</body>
</html>
```

```css
/* style.css */
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f8f9fa;
}

.badge {
  display: inline-block; /* Sits in text flow but allows width/padding sizing */
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  color: white;
}

.badge-success {
  background-color: #28a745;
}

.badge-warning {
  background-color: #ffc107;
  color: #212529;
}
```

## 👀 What You Will See

Status badges ("Active" and "Pending") sit inline inside sentence text while respecting custom padding, rounded borders, and font sizing.

## 🧪 Try It Yourself

1. Change `display: inline-block` on `.badge` to `display: block`.
2. Notice how each status badge now forces a new line and expands to 100% container width!

## ⚠️ Common Mistakes

- **Attempting to set `width` or `height` on `display: inline` elements:** Setting `width: 200px` on a plain `<span>` or `<a>` is ignored by browsers unless changed to `display: inline-block` or `display: block`.
- **Confusing `display: none` with `opacity: 0`:** `opacity: 0` leaves the element invisible but fully interactive and taking up layout space.

## 💡 Real-World Usage

Converting `<a>` anchor elements into `display: inline-block` or `display: flex` allows styling them with padding and background colors as clickable buttons and navigation links.

## 🔗 Related Topics

- [Generic Containers (`<div>` and `<span>`)](14-div-and-span.md)
- [Flexbox Layout](20-flexbox.md)
- [CSS Grid Layout](21-grid.md)

## ✅ Remember

- `block` = New line + 100% full width.
- `inline` = Same line + ignores custom width/height.
- `inline-block` = Same line + respects width/height/padding.
- `display: none` = Completely removes element from DOM rendering space.

## 🧭 Navigation

[← Previous](16-box-model.md) | [CSS Home](00-README.md) | [Next →](18-positioning.md)
