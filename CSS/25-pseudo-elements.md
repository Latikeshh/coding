# Pseudo-elements (`::before`, `::after`)

> 🟡 Intermediate

## 📖 Definition

A **Pseudo-element** is a keyword added to a selector (prefixed by double colons `::`) that styles a specific sub-part of an element (such as `::first-line`, `::selection`) or inserts virtual decorative content into the document before or after an element's content using `::before` and `::after`.

## 🌐 Multilingual Explanation

### English
Pseudo-elements style specific parts of an element (`::first-line`, `::selection`). `::before` and `::after` insert virtual decorative elements without cluttering HTML (always require `content: ""`).

### Hindi
Pseudo-elements (`::before`, `::after`) bina extra HTML likhe virtual decorative content ya icons jodne ka kaam karte hain (`content: ""` likhna zaroori hai).

### Marathi
`::before` ani `::after` mule HTML na badalta design kiwa icons jodta yetat.

## 🤔 Why Do We Use Pseudo-elements?

Pseudo-elements allow adding decorative icons, accent underlines, blockquote quotation marks, or tooltips directly via CSS without cluttering HTML source code with meaningless `<span>` tags.

## 📚 Essential Pseudo-elements Reference Table

| Pseudo-element | Target Sub-Part / Function | Example |
|---|---|---|
| **`::before`** | Inserts virtual child element **before** content | `h2::before { content: "★ "; }` |
| **`::after`** | Inserts virtual child element **after** content | `h2::after { content: ""; display: block; }` |
| **`::first-line`** | Styles only the **first line** of paragraph text | `p::first-line { font-weight: bold; }` |
| **`::first-letter`** | Styles only the **first letter** (Drop Cap effect) | `p::first-letter { font-size: 2rem; }` |
| **`::selection`** | Styles text when highlighted/selected by user | `::selection { background: #ffc107; }` |
| **`::placeholder`** | Styles input placeholder hint text | `input::placeholder { color: #888; }` |

## 🔑 Crucial Rule for `::before` and `::after`

`::before` and `::after` generate inline pseudo-elements by default. **They will NOT render unless the `content` property is explicitly specified** (even if set to an empty string `content: ""`):

```css
/* Animated Accent Underline below Headings */
h2 {
  position: relative;
}

h2::after {
  content: "";            /* MANDATORY PROPERTY! */
  display: block;
  width: 60px;
  height: 4px;
  background-color: #2563eb;
  margin-top: 8px;
  border-radius: 2px;
}
```

## 💻 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pseudo-elements Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <article class="quote-card">
    <blockquote>
      Simplicity is the soul of efficiency.
    </blockquote>
    <cite>— Austin Freeman</cite>
  </article>

</body>
</html>
```

```css
/* style.css */
body {
  font-family: Arial, sans-serif;
  padding: 40px;
  background-color: #f3f4f6;
  display: flex;
  justify-content: center;
}

/* Text Selection Styling */
::selection {
  background-color: #3b82f6;
  color: white;
}

.quote-card {
  background: white;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  max-width: 500px;
  position: relative;
}

blockquote {
  margin: 0;
  font-size: 1.25rem;
  color: #1f2937;
  font-style: italic;
  position: relative;
}

/* Decorative Large Quote Mark using ::before */
blockquote::before {
  content: "“";
  font-size: 5rem;
  color: #93c5fd;
  position: absolute;
  top: -30px;
  left: -35px;
  font-family: Georgia, serif;
  line-height: 1;
}

cite {
  display: block;
  margin-top: 15px;
  color: #6b7280;
  font-style: normal;
  font-weight: bold;
}
```

## 👀 What You Will See

A quote card with a large, subtle blue decorative quotation mark (`“`) positioned automatically behind the blockquote text using `::before`, without any extra quote tags in HTML!

## 🧪 Try It Yourself

Highlight paragraph text on your page with your mouse to observe the custom `::selection` background color!

## ⚠️ Common Mistakes

- **Forgetting `content: ""`:** `::before` and `::after` remain completely invisible if `content` is missing.
- **Using single colon `:`:** While older browsers tolerated `:before`, modern CSS specifications require double colons `::before` and `::after` to distinguish pseudo-elements from pseudo-classes.

## 💡 Real-World Usage

Pseudo-elements power CSS-only icons, custom checkboxes/radios, animated underline link effects, tooltip arrows, and decorative banner ribbon accents.

## 🔗 Related Topics

- [Pseudo-classes](24-pseudo-classes.md)
- [CSS Transitions](28-transitions.md)
- [CSS Transforms (2D & 3D)](29-transforms.md)

## ✅ Remember

- Pseudo-elements use double colons `::`.
- `::before` and `::after` MANDATORILY require `content: ""`.
- `::selection` styles text when highlighted by users.

## 🧭 Navigation

[← Previous](24-pseudo-classes.md) | [CSS Home](00-README.md) | [Next →](26-text-styling.md)
