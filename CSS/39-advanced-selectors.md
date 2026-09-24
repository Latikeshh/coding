# Advanced Selectors (`:is()`, `:where()`, `:has()`, Combinators)

> 🔴 Advanced

## 📖 Definition

**Advanced CSS Selectors** allow targeting HTML elements based on complex relationships, attribute matching (`[attr="val"]`), combinators (`>`, `+`, `~`), and modern functional pseudo-classes:
- **`:is()`:** Matches any selector in a list with normal specificity.
- **`:where()`:** Matches any selector in a list with **zero specificity (`0,0,0,0`)**.
- **`:has()`:** The **"parent selector"** in CSS that styles an element based on its descendant children or condition.

## 🌐 Multilingual Explanation

### English
Combinators (`>`, `+`, `~`) target child, sibling, and descendant relationships. `:is()` groups selectors cleanly. `:where()` groups selectors with 0 specificity. `:has()` is the powerful parent selector that styles parents based on child presence.

### Hindi
Combinators tags ke aapas ke rishton (Child, Sibling) ko target karte hain. `:is()` aur `:where()` code ko chhota karte hain. `:has()` pehla "parent selector" hai jo child element ke hone par parent ko style karta hai.

### Marathi
Combinators ani `:is()`, `:where()`, `:has()` sarakhe modern selectors kami code madhye advance design targeting karnyasaathi vaparle jaatat.

## 📚 Combinators Reference Table

| Combinator | Name | Description | Example |
|---|---|---|---|
| `A B` | Descendant Selector | Matches any `B` inside `A` (at any depth) | `.card p { color: blue; }` |
| `A > B` | Direct Child Selector | Matches `B` that is an **immediate direct child** of `A` | `ul > li { list-style: none; }` |
| `A + B` | Adjacent Sibling | Matches `B` that is immediately after `A` | `h2 + p { font-size: 1.2rem; }` |
| `A ~ B` | General Sibling | Matches all `B` elements following `A` | `h2 ~ p { color: gray; }` |
| `[attr="val"]` | Attribute Selector | Matches elements with specific attribute value | `input[type="email"] { border-color: blue; }` |

## 🚀 Modern Functional Pseudo-classes

### 1. `:is()` vs. `:where()`
Both group multiple selectors into a single line, reducing repetitive code:

```css
/* Old Repetitive Code */
header h1, header h2, header h3, footer h1, footer h2, footer h3 {
  color: #1e293b;
}

/* Modern Clean Code with :is() */
:is(header, footer) :is(h1, h2, h3) {
  color: #1e293b; /* Retains highest matching specificity */
}

/* Zero Specificity with :where() */
:where(header, footer) :is(h1, h2, h3) {
  color: #1e293b; /* Specificity is 0,0,0,0! Extremely easy to override elsewhere */
}
```

### 2. The Game-Changing Parent Selector: `:has()`
`:has()` selects an element if any selector passed to it matches inside or after the element:

```css
/* Style card parent container ONLY if it contains an image */
.card:has(img) {
  grid-column: span 2;
}

/* Style form label ONLY if the input inside is invalid */
.form-group:has(input:invalid) {
  border-left: 4px solid #ef4444;
}
```

## 💻 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Advanced Selectors Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="card-grid">
    <!-- Card 1: Plain Text -->
    <div class="card">
      <h3>Plain Text Card</h3>
      <p>This card contains text only.</p>
    </div>

    <!-- Card 2: Contains Image -->
    <div class="card">
      <img src="https://via.placeholder.com/300x120" alt="Card Graphic">
      <h3>Image Feature Card</h3>
      <p>Targeted via .card:has(img) parent selector!</p>
    </div>
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
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

/* :has() Parent Selector: Styles card ONLY if it contains an <img> */
.card:has(img) {
  border: 2px solid #2563eb;
  background-color: #eff6ff;
}

/* Direct Child Selector for images inside card */
.card > img {
  width: 100%;
  border-radius: 6px;
  margin-bottom: 10px;
}
```

## 👀 What You Will See

Card 2 automatically receives a blue border and soft blue background tint because the `:has(img)` parent selector detected an `<img>` tag inside it!

## 🧪 Try It Yourself

Add `:has(input:focus)` to a form container: `.form-group:has(input:focus) { background-color: #f0fdf4; }` and watch the form field parent container highlight when focused!

## ⚠️ Common Mistakes

- **Confusing `:is()` and `:where()` specificity:** `:is()` takes the specificity of its highest weighting argument, whereas `:where()` always has a specificity score of `0,0,0,0`.
- **Using direct child `>` when descendant space is intended:** `ul > li` only targets immediate children.

## 💡 Real-World Usage

`:has()` eliminates the need for JavaScript class-toggling scripts when styling parent cards based on child states (like checked checkboxes, invalid inputs, or active thumbnails).

## 🔗 Related Topics

- [Basic Selectors](08-selectors.md)
- [Specificity, Cascade & Inheritance](09-specificity.md)
- [Modern CSS Features](40-modern-css-features.md)

## ✅ Remember

- `A > B` = Direct child only; `A + B` = Next immediate sibling.
- `:is()` groups selectors cleanly; `:where()` groups selectors with zero specificity.
- `:has()` is the native CSS parent selector.

## 🧭 Navigation

[← Previous](38-mini-projects.md) | [CSS Home](00-README.md) | [Next →](40-modern-css-features.md)
