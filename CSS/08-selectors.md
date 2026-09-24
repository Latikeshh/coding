# Basic Selectors (Element, Class, ID, Grouping)

> 🟢 Beginner

## 📖 Definition

A **CSS Selector** is the part of a CSS rule set that targets specific HTML elements on a webpage so that property declarations can be applied to them.

## 🌐 Multilingual Explanation

### English
Selectors target HTML elements. Element selectors target HTML tags (`p`), Class selectors target `.class_name`, ID selectors target `#id_name`, and Grouping selectors target multiple tags (`h1, h2, p`).

### Hindi
Selectors HTML elements ko target karte hain. Element selector tag name (`p`), Class selector `.class_name`, aur ID selector `#id_name` ko style karte hain.

### Marathi
Selectors HTML elements na target kartat. Class sathi `.class` ani ID sathi `#id` vapartat.

## 🤔 Why Do We Use Selectors?

Without selectors, CSS would have no way of knowing which paragraph, button, heading, or container you want to format. Selectors provide exact target control.

## 🧠 Simple Explanation

Think of selectors like addressing mail:
- **Universal Selector (`*`):** "Deliver to everyone in the building."
- **Element Selector (`p`):** "Deliver to all apartment doors."
- **Class Selector (`.special`):** "Deliver to all apartments with a 'VIP' sticker."
- **ID Selector (`#main-header`):** "Deliver exclusively to Apartment 401."

## 📚 Basic Selector Types Reference

| Selector Type | Syntax Format | Target Description | Example | Specificity Score |
|---|---|---|---|---|
| **Universal** | `*` | Targets **all** elements on the page | `* { box-sizing: border-box; }` | 0,0,0,0 |
| **Element / Type** | `element` | Targets all elements with matching tag name | `p { color: #333; }` | 0,0,0,1 |
| **Class** | `.classname` | Targets elements with matching `class="..."` | `.btn { padding: 10px; }` | 0,0,1,0 |
| **ID** | `#idname` | Targets single unique element with matching `id="..."` | `#main-logo { width: 150px; }` | 0,1,0,0 |
| **Grouping** | `sel1, sel2` | Applies same rules to multiple comma-separated selectors | `h1, h2, h3 { color: navy; }` | Varies per selector |

## 💻 Examples

```css
/* Universal Reset */
* {
  box-sizing: border-box;
}

/* Element Selectors */
body {
  font-family: Arial, sans-serif;
}

p {
  color: #444444;
}

/* Class Selector (Reusable across multiple elements) */
.card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
}

/* ID Selector (Unique to one element per page) */
#hero-title {
  color: #0056b3;
  font-size: 36px;
}

/* Grouping Selector */
h1, h2, h3 {
  font-family: 'Georgia', serif;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Basic Selectors Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h1 id="hero-title">Welcome to Our Store</h1>
  
  <p class="highlight-box">Special seasonal discount available today!</p>
  <p>Standard paragraph body text.</p>

  <div class="card">
    <p>This text is inside a card container.</p>
  </div>

</body>
</html>
```

```css
/* style.css */
#hero-title {
  color: #007bff;
  text-align: center;
}

.highlight-box {
  background-color: #fff3cd;
  border-left: 4px solid #ffc107;
  padding: 12px;
}

.card {
  background-color: #f8f9fa;
  border: 1px solid #dee2e6;
  padding: 20px;
  margin-top: 15px;
}
```

## 👀 What You Will See

- `#hero-title` renders as a centered blue heading.
- `.highlight-box` renders as an alert box with a yellow background and left accent border.
- `.card` renders as a light-gray bordered box container.

## 🧪 Try It Yourself

1. Add a second paragraph in HTML with `class="highlight-box"`.
2. Notice how both elements receive the same yellow alert box styling automatically!

## ⚠️ Common Mistakes

- **Swapping Class and ID symbols:** Writing `#card` for a class or `.hero-title` for an ID.
- **Reusing the same ID on multiple HTML elements:** IDs must be completely unique per page. Use classes for reusable styles.

## 💡 Real-World Usage

Developers build UI component systems (like Bootstrap or Tailwind) using class selectors (`.btn`, `.card`, `.modal`) so visual styles can be reused cleanly across thousands of pages.

## 🔗 Related Topics

- [Specificity, Cascade & Inheritance](09-specificity.md)
- [Pseudo-classes](24-pseudo-classes.md)
- [Advanced Selectors (`:is()`, `:where()`, `:has()`)](39-advanced-selectors.md)

## ✅ Remember

- Class selectors start with a dot `.`.
- ID selectors start with a hash `#`.
- Use classes for reusable styles; use IDs sparingly for unique target anchors.

## 🧭 Navigation

[← Previous](07-css-comments.md) | [CSS Home](00-README.md) | [Next →](09-specificity.md)
