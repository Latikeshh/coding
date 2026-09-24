# CSS Comments

> 🟢 Beginner

## 📖 Definition

**CSS Comments** are explanatory notes written inside stylesheets using **`/* comment text */`** syntax. Web browsers ignore comments completely during layout rendering, making them invisible on the rendered web page.

## 🌐 Multilingual Explanation

### English
Write CSS comments using `/* comment text */`. Comments explain code structure, document design sections, or temporarily disable CSS rules during debugging.

### Hindi
CSS mein comments ke liye `/* text */` ka use hota hai. Ye browser par render nahi hote aur code explain karne ya debugging ke liye use hote hain.

### Marathi
CSS madhye comments sathi `/* text */` vapartat. Ye browser var render hot nahit ani stylesheet code explain karnyasaathi vapartat.

## 🤔 Why Do We Use Comments?

As stylesheets grow from 20 lines to 2,000 lines, comments help developers:
- Organize code into logical sections (Header, Navigation, Sidebar, Footer, Dark Mode).
- Explain complex calculations (`calc()`) or z-index stacking layers.
- Temporarily disable rules during debugging without deleting the code.

## 📝 Syntax

```css
/* Single-line CSS comment */

/*
  Multi-line CSS comment
  spanning across
  several lines
*/
```

## 💻 Examples

```css
/* ==========================================================================
   1. GLOBAL RESET & BASE TYPOGRAPHY
   ========================================================================== */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  line-height: 1.6; /* Optimal body readability line spacing */
}

/* ==========================================================================
   2. HEADER & NAVIGATION COMPONENTS
   ========================================================================== */

.navbar {
  background-color: #1a1a1a;
  color: #ffffff;
  padding: 15px 30px;
}

/* Temporarily disabled outline for testing */
/* .navbar-brand { outline: 2px solid red; } */
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Comments Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="header">
    <h1>CSS Comments Example</h1>
  </header>

</body>
</html>
```

```css
/* style.css */

/* Primary header banner styling */
.header {
  background-color: #007bff;
  color: white;
  text-align: center;
  padding: 40px 20px;
}

/* Note: h1 margin is reset to 0 to prevent extra whitespace */
.header h1 {
  margin: 0;
}
```

## 👀 What You Will See

The browser displays the blue header banner cleanly. The comments inside `style.css` are ignored during rendering and do not appear on screen.

## 🧪 Try It Yourself

1. Highlight any CSS rule in VS Code and press `Ctrl + /` (or `Cmd + /` on Mac).
2. VS Code automatically wraps or unwraps the line with `/* ... */` comments!

## ⚠️ Common Mistakes

- **Using HTML comment syntax in CSS:** Writing `<!-- comment -->` in CSS is invalid syntax and breaks stylesheet rules.
- **Nesting comments:** Nesting `/* /* comment */ */` is invalid in standard CSS and breaks parsing.

## 💡 Real-World Usage

Production design systems use structured section headers in comments (`/* --- BUTTONS COMPONENT --- */`) to separate CSS components into manageable, clean maintainable architectures.

## 🔗 Related Topics

- [CSS Syntax & Rules](06-css-syntax.md)
- [Browser Developer Tools for CSS](34-devtools.md)
- [CSS Architecture (BEM) & Dark Mode](41-css-architecture-and-dark-mode.md)

## ✅ Remember

- Use `/* comment */` for CSS comments.
- Keyboard shortcut in VS Code: `Ctrl + /` (`Cmd + /`).
- Comments are invisible on page layout.

## 🧭 Navigation

[← Previous](06-css-syntax.md) | [CSS Home](00-README.md) | [Next →](08-selectors.md)
