# Introduction to CSS

> 🟢 Beginner

## 📖 Definition

**CSS** stands for **Cascading Style Sheets**. It is a style sheet language used to describe the presentation, visual styling, colors, typography, spacing, and layout of a document written in HTML.

## 🌐 Multilingual Explanation

### English
CSS styles HTML content by controlling colors, typography, margins, padding, layout positioning, and responsive design across different screen sizes.

### Hindi
CSS web page ko sundar aur attractive banata hai - jaise colors, fonts, spacing (margin/padding), alignment, aur layout design karna.

### Marathi
CSS mule HTML content la colors, fonts, spacing (margin/padding), layout ani animations deun attractive banvle jaate.

## 🤔 Why Do We Use It?

Without CSS, web pages would appear as unstyled black text and bulleted lists on a white background. CSS allows developers to:
- Transform raw HTML text into attractive, branded user interfaces.
- Build flexible layouts that adapt to desktop, tablet, and mobile screens.
- Maintain consistent styling across hundreds of pages using a single stylesheet.

## 🧠 Simple Explanation & House Analogy

Think of building a website like building a house:
- **HTML** is the wooden or concrete structure (walls, doors, windows).
- **CSS** is the interior design and paint (wall colors, tile patterns, carpet texture, window curtain styling).
- **JavaScript** is the electrical and plumbing system (switches that turn lights on or off).

## 📝 Syntax

```css
selector {
  property: value;
}
```

```css
body {
  background-color: #f8f9fa;
  color: #212529;
  font-family: Arial, sans-serif;
}

h1 {
  color: #0d6efd;
  text-align: center;
}
```

## 📚 Core CSS Rule Components

| Component | Description | Example |
|---|---|---|
| **Selector** | Targets the HTML element(s) to style | `h1`, `.card`, `#logo` |
| **Property** | The visual feature you want to change | `color`, `font-size`, `margin` |
| **Value** | The setting assigned to the property | `blue`, `18px`, `20px` |
| **Declaration** | Property and value pair ended by a semicolon `;` | `color: blue;` |

## 💻 Examples

### HTML (`index.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Introduction</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h1>Student Learning Portal</h1>
  <p>CSS makes web development fun and creative!</p>

</body>
</html>
```

### CSS (`style.css`)
```css
body {
  background-color: #f0f4f8;
  color: #102a43;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding: 30px;
}

h1 {
  color: #0b69a3;
  border-bottom: 2px solid #bcccdc;
  padding-bottom: 10px;
}

p {
  font-size: 18px;
  line-height: 1.6;
}
```

## 👀 What You Will See

The browser renders a soft blue-gray webpage with a deep blue title heading featuring an underline border, followed by comfortable body text with spacious line height.

## 🧪 Try It Yourself

Change `color: #0b69a3` to `color: #d9e2ec` or `color: darkred` in your `style.css` file and watch the heading title color update instantly.

## ⚠️ Common Mistakes

- **Forgetting the semicolon `;`:** Missing semicolons between declarations breaks following CSS rules.
- **Forgetting curly braces `{}`:** CSS rules must be wrapped inside `{}` braces.
- **Not linking the CSS file in HTML:** Forgetting `<link rel="stylesheet" href="style.css">` inside HTML `<head>`.

## 💡 Real-World Usage

Every modern site (Google, YouTube, Amazon, Wikipedia) uses CSS to format branding colors, grid layouts, mobile navigation drawers, and dark mode themes.

## 🔗 Related Topics

- [Set Up CSS Environment](01-setup-css.md)
- [History & Standards of CSS](03-history-of-css.md)
- [CSS Syntax & Rules](06-css-syntax.md)

## ✅ Remember

- HTML provides structure; CSS provides style and presentation.
- CSS property declarations consist of `property: value;`.
- Semicolons `;` at the end of each declaration are required.

## 🧭 Navigation

[← Previous](01-setup-css.md) | [CSS Home](00-README.md) | [Next →](03-history-of-css.md)
