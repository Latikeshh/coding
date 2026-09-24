# Navigation Bar Components

> 🟢 Beginner

## 📖 Definition

A **Navigation Bar (Navbar)** is a core user interface component positioned at the top of a webpage that contains brand logos, primary navigation links, search bars, and call-to-action buttons aligned horizontally using Flexbox (`display: flex`).

## 🌐 Multilingual Explanation

### English
Build responsive navbars using `display: flex` with `justify-content: space-between` and `align-items: center`.

### Hindi
Navbar banane ke liye Flexbox (`display: flex`) ka use karein. Logo ko left side aur links ko right side align karne ke liye `justify-content: space-between` ka use hota hai.

### Marathi
Navigation bar sathi Flexbox layout vaprun `space-between` mule brand logo ani links yogya antaravar align hotat.

## 🤔 Why Are Navbars Critical?

The navigation bar is the first UI element visitors interact with when arriving on a site. A well-designed navbar communicates brand identity and enables users to explore key site pages effortlessly.

## 🧱 Standard Navbar Flexbox Layout Pattern

```text
+-------------------------------------------------------------------+
|  [BRAND LOGO]            [Link 1]  [Link 2]  [Link 3]   [CTA BTN] |
+-------------------------------------------------------------------+
| <------------------- justify-content: space-between ------------> |
```

## 📝 Syntax & CSS Pattern

```css
.navbar {
  display: flex;
  justify-content: space-between; /* Spaces logo to left, menu to right */
  align-items: center;            /* Aligns items vertically in center */
  padding: 1rem 2rem;
  background-color: #111827;
  color: #ffffff;
  position: sticky;
  top: 0;
  z-index: 1000; /* Stays above body content during scroll */
}

.nav-menu {
  display: flex;
  gap: 1.5rem;                   /* Equal spacing between link items */
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: #d1d5db;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #ffffff;
}
```

## 💻 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Navbar Component Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Sticky Flexbox Navbar -->
  <nav class="navbar">
    <a href="#" class="brand-logo">DevPortal</a>
    <ul class="nav-links">
      <li><a href="#" class="nav-link">Home</a></li>
      <li><a href="#" class="nav-link">Courses</a></li>
      <li><a href="#" class="nav-link">Docs</a></li>
      <li><a href="#" class="nav-link">Community</a></li>
    </ul>
    <a href="#" class="btn-cta">Get Started</a>
  </nav>

  <main class="content">
    <h2>Page Content</h2>
    <p>Scroll down to test the sticky navigation bar staying pinned to the top of the browser viewport.</p>
  </main>

</body>
</html>
```

```css
/* style.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  background-color: #f3f4f6;
  min-height: 150vh; /* Extra height to test sticky navbar scrolling */
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #0f172a;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.brand-logo {
  font-size: 1.25rem;
  font-weight: bold;
  color: #38bdf8;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: #94a3b8;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #ffffff;
}

.btn-cta {
  background-color: #0284c7;
  color: white;
  text-decoration: none;
  padding: 8px 18px;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
  transition: background-color 0.2s;
}

.btn-cta:hover {
  background-color: #0369a1;
}

.content {
  padding: 40px 30px;
  max-width: 800px;
  margin: 0 auto;
}
```

## 👀 What You Will See

A dark, modern navigation bar with logo on the left, navigation links centered with `24px` gaps, a CTA button on the right, and sticky positioning pinned to the top of the browser window during scroll.

## 🧪 Try It Yourself

1. Add `@media (max-width: 640px) { .nav-links { display: none; } }` to hide navigation links on small mobile screens.
2. Observe how the navbar layout automatically adjusts using Flexbox!

## ⚠️ Common Mistakes

- **Forgetting `align-items: center`:** Causes logo text, link list items, and buttons to stretch vertically or misalign along the top edge.
- **Forgetting `position: sticky; top: 0;` requires `top` value:** `position: sticky` will NOT stick unless an explicit threshold (e.g. `top: 0`) is specified.

## 💡 Real-World Usage

Flexbox navbars form the header foundation for SaaS landing pages, documentation platforms (like MDN), news portals, and e-commerce applications.

## 🔗 Related Topics

- [Positioning & `z-index`](18-positioning.md)
- [Flexbox Layout](20-flexbox.md)
- [CSS Mini Projects](38-mini-projects.md)

## ✅ Remember

- Use `display: flex; justify-content: space-between; align-items: center;` on the navbar parent.
- Use `display: flex; gap: 20px;` on the link list `<ul>`.
- Use `position: sticky; top: 0; z-index: 1000;` for sticky header bars.

## 🧭 Navigation

[← Previous](36-card-layout.md) | [CSS Home](00-README.md) | [Next →](38-mini-projects.md)
