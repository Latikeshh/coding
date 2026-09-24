# CSS Grid Layout (2D Grids)

> 🟡 Intermediate

## 📖 Definition

**CSS Grid Layout** is a 2-dimensional grid-based layout model designed to structure content into rows and columns simultaneously. It provides powerful track sizing (`fr`, `minmax()`, `repeat()`), explicit area placement (`grid-template-areas`), and responsive grid column layouts without requiring media queries.

## 🌐 Multilingual Explanation

### English
CSS Grid (`display: grid`) is a 2D layout system (rows AND columns simultaneously). Use `grid-template-columns: repeat(3, 1fr)` for equal fraction columns and `minmax()` for auto-responsive card grids.

### Hindi
CSS Grid (`display: grid`) 2D layout system hai jo ek saath rows aur columns dono ko sambhalta hai. Auto-responsive cards ke liye `repeat(auto-fit, minmax(250px, 1fr))` ka use karein.

### Marathi
CSS Grid 2D layout (rows ani columns) sathi vaparla jaato. `grid-template-columns` dware columns cha size thartat.

## 🤔 Why Do We Use CSS Grid?

While Flexbox excels at 1D alignment along a single row or column, CSS Grid manages complex 2D web page layouts, dashboards, image galleries, and multi-column card layouts where elements must align across both horizontal columns and vertical rows.

## 🧠 Simple Explanation & Graph Paper Analogy

Think of CSS Grid as an empty sheet of graph paper:
- You draw horizontal and vertical grid lines.
- You specify how wide columns should be (`grid-template-columns`).
- You place content cards into specific grid cells or let them auto-fill the grid.

## 📚 Core Grid Properties Reference Table

| Property | Purpose & Value Format | Example |
|---|---|---|
| `display: grid` | Converts container into 2D Grid context | `display: grid;` |
| `grid-template-columns` | Defines column track count and sizing | `grid-template-columns: repeat(3, 1fr);` |
| `grid-template-rows` | Defines row track sizing | `grid-template-rows: auto 1fr auto;` |
| `gap` / `grid-gap` | Sets gutter spacing between rows & columns | `gap: 20px;` |
| `grid-column` | Spans a child across multiple columns | `grid-column: span 2;` |
| `grid-template-areas` | Named ASCII layout template map | `"header header" "sidebar main" "footer footer"` |

## 🌟 The Power of the `fr` Unit & Auto-Responsive Cards

The `fr` (Fraction) unit represents a fraction of available free space in the grid container. Combining `repeat()`, `auto-fit`, and `minmax()` creates **fully responsive card layouts without writing a single media query**:

```css
/* Responsive grid: creates as many columns as fit (min 250px, max 1 fraction) */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
```

## 💻 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Grid Layout Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h1>Photo &amp; Feature Card Gallery</h1>

  <!-- Auto-responsive card grid -->
  <div class="card-grid">
    <div class="card">
      <h3>Web Design</h3>
      <p>Building responsive and accessible UI components.</p>
    </div>
    <div class="card">
      <h3>Development</h3>
      <p>Clean semantic HTML5 and modular CSS3 stylesheets.</p>
    </div>
    <div class="card">
      <h3>SEO &amp; Performance</h3>
      <p>Optimizing fast loading speeds and accessibility.</p>
    </div>
  </div>

</body>
</html>
```

```css
/* style.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f2f5;
  padding: 30px;
  margin: 0;
}

h1 {
  text-align: center;
  color: #1f2937;
  margin-bottom: 30px;
}

/* 2D Auto-responsive Grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.card {
  background: white;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.card h3 {
  margin-top: 0;
  color: #2563eb;
}

.card p {
  color: #4b5563;
  margin-bottom: 0;
  line-height: 1.5;
}
```

## 👀 What You Will See

On desktop screens, the three cards render side-by-side in a 3-column layout. When you narrow the browser window to mobile width, the grid automatically reflows into a single column without needing `@media` query breakpoints!

## 🧪 Try It Yourself

1. Change `minmax(250px, 1fr)` to `minmax(350px, 1fr)`.
2. Notice how the grid wraps down into fewer columns sooner because each card requires at least 350px width.

## ⚠️ Common Mistakes

- **Using Grid when Flexbox is simpler:** Using 2D Grid for a simple 1D single-row navigation bar (Flexbox fits 1D alignment better).
- **Forgetting `gap`:** Adding outer margins on grid items instead of declaring `gap: 20px` on the grid parent container.

## 💡 Real-World Usage

CSS Grid powers complex web application dashboards (sidebar + main content + header widget area), photo galleries, e-commerce product grids, and pricing comparison tables.

## 🔗 Related Topics

- [Flexbox Layout](20-flexbox.md)
- [Responsive Web Design Principles](22-responsive-design.md)
- [Card Layout Components](36-card-layout.md)

## ✅ Remember

- Flexbox = 1D (rows OR columns); CSS Grid = 2D (rows AND columns).
- `1fr` = One fraction of available container space.
- `repeat(auto-fit, minmax(250px, 1fr))` creates responsive card grids automatically.

## 🧭 Navigation

[← Previous](20-flexbox.md) | [CSS Home](00-README.md) | [Next →](22-responsive-design.md)
