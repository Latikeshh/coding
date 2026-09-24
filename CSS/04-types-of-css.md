# Types of CSS (Inline, Internal, External)

> 🟢 Beginner

## 📖 Definition

CSS can be applied to an HTML document using three distinct methods: **Inline CSS** (written directly inside HTML element `style` attributes), **Internal CSS** (written inside `<style>` tags in the HTML `<head>`), and **External CSS** (written in a separate `.css` file linked via `<link>`).

## 🌐 Multilingual Explanation

### English
External CSS (in a `.css` file) is the recommended best practice for production websites. Inline CSS is for single-element quick overrides, and Internal CSS is for single-page documents.

### Hindi
Projects ke liye External CSS (`.css` file) sabse accha tareeqa hai. Inline CSS sirf ek element ke liye aur Internal CSS ek hi page ke liye hota hai.

### Marathi
Mothya web projects sathi External CSS file (`.css`) vaparne sarvat yogya maantle jaate.

## 🤔 Why Do We Need Different Methods?

Different project requirements demand different approaches. A quick single-element test might use Inline CSS, a single HTML email template might use Internal CSS, but a multi-page production website should always use External CSS.

## 📝 Syntax & Comparison

| Method | Syntax Location | Reusability | Specificity Weight | Recommended Usage |
|---|---|---|---|---|
| **Inline CSS** | `style="..."` attribute inside HTML tag | Single Element Only | Highest (1,0,0,0) | Rare quick tests / HTML email templates |
| **Internal CSS** | `<style>` block in HTML `<head>` | Single Page Only | Moderate (0,1,0,0 or class) | Single standalone HTML files |
| **External CSS** | Separate `.css` file linked via `<link>` | Entire Website | Standard Cascade | **Production Best Practice** |

## 💻 Examples

### 1. Inline CSS
```html
<p style="color: red; font-weight: bold;">Inline Styled Text</p>
```

### 2. Internal CSS
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Internal CSS</title>
  <style>
    body {
      background-color: #f4f4f4;
    }
    h1 {
      color: darkblue;
    }
  </style>
</head>
<body>
  <h1>Internal Styled Page</h1>
</body>
</html>
```

### 3. External CSS (Recommended)

#### HTML File (`index.html`):
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>External CSS</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>External Styled Page</h1>
</body>
</html>
```

#### CSS File (`style.css`):
```css
body {
  background-color: #f0f8ff;
  color: #333333;
}

h1 {
  color: #000080;
}
```

## 👀 What You Will See

All three methods render styled elements in the browser, but External CSS keeps HTML source code clean, readable, and cached by browsers for fast page loads.

## 🧪 Try It Yourself

1. Create `index.html` with an `<h1>` element styled blue using Internal `<style>` tags.
2. Add an inline `style="color: red;"` attribute to the same `<h1>` and see which color wins! (Inline CSS wins due to higher specificity).

## ⚠️ Common Mistakes

- Overusing Inline CSS, making HTML bloated and impossible to update globally.
- Mixing up `<style>` tags (used for Internal CSS inside HTML `<head>`) with `.css` files (where `<style>` tags are invalid and should not be used).

## 💡 Real-World Usage

Professional developers use External CSS combined with build tools or modular stylesheets so changing a single color variable in `style.css` updates thousands of web pages instantly.

## 🔗 Related Topics

- [How to Add CSS](05-how-to-add-css.md)
- [Specificity, Cascade & Inheritance](09-specificity.md)

## ✅ Remember

- **External CSS** is the gold standard for production web development.
- Inline CSS has high specificity and clutter; avoid it when possible.
- Separate `.css` files enable browser caching and global reusability.

## 🧭 Navigation

[← Previous](03-history-of-css.md) | [CSS Home](00-README.md) | [Next →](05-how-to-add-css.md)
