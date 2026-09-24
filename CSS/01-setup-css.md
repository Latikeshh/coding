# Set Up CSS Environment

> 🟢 Beginner

## 📖 Definition

Setting up CSS involves creating a standalone `.css` file (such as `style.css`) and linking it to an HTML document using the `<link rel="stylesheet" href="style.css">` tag placed inside the `<head>` section of the HTML file.

## 🌐 Multilingual Explanation

### English
Connect CSS to HTML using `<link rel="stylesheet" href="style.css">` inside the HTML `<head>` tag.

### Hindi
HTML se CSS ko jodne ke liye HTML ke `<head>` tag ke andar `<link rel="stylesheet" href="style.css">` ka use karein.

### Marathi
HTML la CSS jodnyasathi HTML chya `<head>` tag madhye `<link rel="stylesheet" href="style.css">` vapartat.

## 🤔 Why Do We Use It?

Keeping CSS code in a separate `.css` file separates page content (HTML) from visual presentation (CSS). This makes code cleaner, easier to maintain, and allows a single CSS file to style multiple HTML pages across a website.

## 🧠 Simple Explanation

Think of HTML as a plain text document and CSS as a design template. Linking `style.css` in `<head>` is like telling the browser: *"Before displaying this text, open `style.css` and apply all colors, fonts, and layouts specified inside it."*

## 📝 Syntax

```html
<!-- Inside index.html head section -->
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Styled Page</title>
  <link rel="stylesheet" href="style.css">
</head>
```

```css
/* Inside style.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333333;
}
```

## 📚 Related Attributes

| Attribute | Purpose | Example |
|---|---|---|
| `rel` | Defines relationship between HTML and linked resource | `rel="stylesheet"` |
| `href` | Specifies relative or absolute path to CSS file | `href="css/style.css"` |

## 💻 Examples

### HTML File (`index.html`)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Setup CSS Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Welcome to CSS Setup</h1>
  <p>This paragraph is styled using an external CSS file.</p>
</body>
</html>
```

### CSS File (`style.css`)
```css
body {
  background-color: #e3f2fd;
  color: #0d47a1;
  font-family: Arial, sans-serif;
  padding: 20px;
}

h1 {
  color: #1565c0;
}
```

## 👀 What You Will See

The browser displays a light blue background page with deep blue headings and body text formatted in a clean sans-serif font.

## 🧪 Try It Yourself

1. Create a project folder named `css-setup-practice`.
2. Inside it, create `index.html` and `style.css`.
3. Link `style.css` in `index.html`.
4. Change the `background-color` in `style.css` to `#fff3e0` (light orange) and preview in your browser.

## ⚠️ Common Mistakes

- **Incorrect file path:** Writing `href="style.css"` when the file is inside a subfolder (`href="css/style.css"`).
- **Placing `<link>` in `<body>`:** Placing `<link>` inside `<body>` causes layout re-renders. Always place it inside `<head>`.
- **Typo in `rel` attribute:** Writing `rel="style"` or omitting `rel="stylesheet"`.

## 💡 Real-World Usage

Every professional production website connects modular external CSS stylesheets in the `<head>` section to style global navigation bars, footers, typography, and page layouts.

## 🔗 Related Topics

- [Introduction to CSS](02-introduction-to-css.md)
- [Types of CSS](04-types-of-css.md)
- [How to Add CSS](05-how-to-add-css.md)

## ✅ Remember

- Always save your CSS file as `.css`.
- Place `<link rel="stylesheet" href="style.css">` inside `<head>`.
- Press `Ctrl + S` in VS Code to save both HTML and CSS files before refreshing your browser.

## 🧭 Navigation

[← CSS Home](00-README.md) | [Next: Introduction to CSS →](02-introduction-to-css.md)
