# CSS Syntax & Rules

> 🟢 Beginner

## 📖 Definition

A **CSS Rule Set** consists of a **Selector** pointing to HTML elements, followed by a **Declaration Block** enclosed in curly braces `{}` containing individual **Declarations** made of a **Property** and a **Value** ending with a semicolon `;`.

## 🌐 Multilingual Explanation

### English
CSS rule syntax: `selector { property: value; }`. Always end property declarations with a semicolon `;` and wrap rules inside `{}` braces.

### Hindi
CSS syntax structure: `selector { property: value; }`. Har declaration ke baad semicolon `;` lagana compulsory hai.

### Marathi
CSS syntax structure: `selector { property: value; }`. Pratyek declaration nantar semicolon `;` lavne avashyak aahe.

## 🤔 Why Is Correct Syntax Mandatory?

Computers and browser rendering engines require precise syntax rules. Missing a single semicolon or curly brace can break subsequent CSS declarations across an entire stylesheet.

## 📝 Anatomy of a CSS Rule

```css
selector {
  property: value;
  property: value;
}
```

```css
h1 {
  color: #007bff;
  font-size: 32px;
  text-align: center;
}
```

## 📚 Rule Components Breakdown

| Component | Definition | Example in `color: red;` |
|---|---|---|
| **Selector** | Identifies which HTML element(s) to style | `h1` |
| **Declaration Block** | Everything enclosed within `{}` braces | `{ color: red; margin: 10px; }` |
| **Property** | The visual style attribute being modified | `color` |
| **Value** | The setting assigned to the property | `red` |
| **Declaration** | Property name + colon + value + semicolon | `color: red;` |
| **Semicolon `;`** | Separates declarations | `;` |

## 💻 Examples

```css
/* Styling body defaults */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
}

/* Styling class card */
.card {
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 8px;
  padding: 20px;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Syntax Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="box">
    <h2>Correct CSS Syntax</h2>
    <p>Every declaration ends with a semicolon.</p>
  </div>

</body>
</html>
```

```css
/* style.css */
.box {
  width: 300px;
  margin: 40px auto;
  padding: 20px;
  background-color: #e8f5e9;
  border: 2px solid #4caf50;
  border-radius: 6px;
  text-align: center;
}

h2 {
  color: #2e7d32;
  margin-top: 0;
}
```

## 👀 What You Will See

A neatly formatted green box centered horizontally on the page containing styled heading and text.

## 🧪 Try It Yourself

1. Remove the semicolon `;` after `color: #2e7d32` in `style.css`.
2. Add another property `font-size: 24px;` immediately below it.
3. Observe how the missing semicolon breaks the syntax parsing in your browser!

## ⚠️ Common Mistakes

- **Omitting the semicolon `;`:** `color: red font-size: 20px;` breaks parsing for `font-size`.
- **Using equals `=` instead of colon `:`:** Writing `color = red;` instead of `color: red;`.
- **Forgetting closing brace `}`:** Causes all following CSS rules to be swallowed into the unclosed block.

## 💡 Real-World Usage

Developers format CSS rules with clean indentation and spacing (often automated using formatters like Prettier) to ensure syntax readability across engineering teams.

## 🔗 Related Topics

- [CSS Comments](07-css-comments.md)
- [Basic Selectors](08-selectors.md)
- [Specificity, Cascade & Inheritance](09-specificity.md)

## ✅ Remember

- Format: `selector { property: value; }`.
- Colons `:` separate property from value.
- Semicolons `;` terminate declarations.
- Curly braces `{}` group declaration blocks.

## 🧭 Navigation

[← Previous](05-how-to-add-css.md) | [CSS Home](00-README.md) | [Next →](07-css-comments.md)
