# Media Queries & Container Queries

> 🟡 Intermediate

## 📖 Definition

- **Media Queries (`@media`):** Apply conditional CSS rules based on device features, viewport width, screen resolution, orientation, or user color preferences (`prefers-color-scheme`).
- **Container Queries (`@container`):** Modern CSS feature that applies styles based on the size of a parent container element rather than global viewport dimensions.

## 🌐 Multilingual Explanation

### English
Media Queries (`@media`) adapt layouts based on global screen viewport size. Container Queries (`@container`) adapt child component styles based on parent container width.

### Hindi
Media Queries (`@media`) global screen viewport size ke hisaab se styles badalti hain. Container Queries (`@container`) parent container box ki chaudaai ke hisaab se component ko responsive banati hain.

### Marathi
Media Queries (`@media`) screen size nusar style badaltat. Container Queries parent box chya akara var avlambun aastat.

## 🤔 Why Do We Use Media and Container Queries?

Web components (like cards or widgets) often appear in multiple places on a page: in a wide main section, or in a narrow sidebar.
- **Media Queries:** Reformat the layout based on global device screen width (Mobile vs. Desktop).
- **Container Queries:** Reformat a component based on how much width its immediate parent container gives it, making UI components truly modular and self-contained.

## 📝 Common Viewport Breakpoints Guide

While breakpoints should ideally fit content needs, standard device category thresholds include:

| Device Category | Min-Width Breakpoint | Target Devices |
|---|---|---|
| **Mobile Devices** | Default Base Styles (No Query) | Smartphones (Portrait / Landscape) |
| **Tablets** | `@media (min-width: 640px)` or `768px` | iPads, Android tablets, large foldables |
| **Laptops / Desktops** | `@media (min-width: 1024px)` | Laptops, desktop monitors |
| **Large Screens** | `@media (min-width: 1280px)` | Ultrawide monitors, TV displays |

## 💻 Code Examples

### 1. Viewport Media Queries (`@media`)

```css
/* Base Mobile Styles (1 Column) */
.card-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
}

/* Tablet Breakpoint (2 Columns) */
@media (min-width: 640px) {
  .card-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop Breakpoint (4 Columns) */
@media (min-width: 1024px) {
  .card-list {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### 2. Container Queries (`@container`)

To use container queries, declare a container context on the parent using `container-type`:

```css
/* 1. Declare container context on parent */
.widget-wrapper {
  container-type: inline-size;
  container-name: widget;
}

/* 2. Base component style (Stacked) */
.card-item {
  display: flex;
  flex-direction: column;
}

/* 3. Container query triggers when parent width >= 400px */
@container widget (min-width: 400px) {
  .card-item {
    flex-direction: row; /* Switch to horizontal layout when parent box is wide enough */
    align-items: center;
  }
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Media &amp; Container Queries Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="header">
    <h1>Responsive Breakpoints Demo</h1>
  </header>

  <!-- Parent Container -->
  <div class="card-container">
    <div class="profile-card">
      <img src="https://via.placeholder.com/100" alt="Profile Avatar" class="profile-img">
      <div class="profile-info">
        <h3>Sarah Jenkins</h3>
        <p>Lead UI/UX Designer &amp; Frontend Architect</p>
      </div>
    </div>
  </div>

</body>
</html>
```

```css
/* style.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
  background-color: #f3f4f6;
}

.header {
  text-align: center;
  color: #1f2937;
}

/* Container Query Context Declaration */
.card-container {
  container-type: inline-size;
  container-name: card-box;
  width: 90%;
  max-width: 800px;
  margin: 0 auto;
}

/* Base Component Styling (Vertical Stack) */
.profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  gap: 15px;
}

.profile-img {
  border-radius: 50%;
}

/* Container Query: Activates when .card-container width >= 450px */
@container card-box (min-width: 450px) {
  .profile-card {
    flex-direction: row;
    text-align: left;
  }
}
```

## 👀 What You Will See

When `.card-container` width is less than 450px, the profile card renders as a vertical stack. Once the container width expands to 450px or wider, it seamlessly transitions into a horizontal side-by-side row layout.

## 🧪 Try It Yourself

1. Resize your browser window and watch the card transition smoothly.
2. Put the same `.profile-card` inside a narrow sidebar (`width: 300px`) and watch it remain gracefully in vertical stacked mode regardless of screen width!

## ⚠️ Common Mistakes

- **Forgetting `container-type: inline-size` on the parent:** Container queries require `container-type` declared on the parent element.
- **Overusing desktop-first `max-width` queries:** Mobile-first `min-width` queries lead to cleaner, less repetitive stylesheets.

## 💡 Real-World Usage

Media queries format mobile navigation drawers, while Container Queries allow design systems (like Material Design or Shopify storefronts) to distribute self-contained UI components into sidebars or main feeds automatically.

## 🔗 Related Topics

- [Responsive Web Design Principles](22-responsive-design.md)
- [CSS Architecture & Dark Mode](41-css-architecture-and-dark-mode.md)

## ✅ Remember

- `@media (min-width: 768px)` targets global viewport window width.
- `@container (min-width: 400px)` targets immediate parent element container width.
- Always declare `container-type: inline-size` on container query parent elements.

## 🧭 Navigation

[← Previous](22-responsive-design.md) | [CSS Home](00-README.md) | [Next →](24-pseudo-classes.md)
