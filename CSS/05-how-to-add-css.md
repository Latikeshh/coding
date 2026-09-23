# How to Add CSS

> 🟢 Beginner

## 📖 Definition

CSS is connected to an HTML page so the browser knows which styles to apply to which elements.

## 🤔 Why Do We Use It?

Without connecting the HTML and CSS files, the browser will not know how to style the page.

## 🧠 Simple Explanation

HTML gives the content, and CSS gives the design. The connection is made with a `<link>` tag in the HTML file.

```text
HTML
  ↓
CSS file connected using <link>
  ↓
Browser reads both
  ↓
CSS styles HTML elements
```

## 📝 Syntax

```html
<link rel="stylesheet" href="style.css">
```

## 💡 Example

### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My CSS Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Hello, CSS!</h1>
  <p>This text is styled using an external stylesheet.</p>
</body>
</html>
```

### style.css

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

h1 {
  color: darkblue;
}
```

## 👀 What You Will See

The page loads with the browser applying the styles from the CSS file. The heading becomes blue, and the page background is light gray.

## 🔍 What do these attributes mean?

- `link` tells the browser that a stylesheet is being connected.
- `rel` means relationship. Here it tells the browser the file is a stylesheet.
- `stylesheet` is the type of file being linked.
- `href` is the path to the CSS file. It tells the browser where to find it.

## 🧪 Try It Yourself

Create a simple HTML page and a CSS file. Link them together and change the color of the heading.

## ⚠️ Common Mistakes

- Using the wrong file name in `href`.
- Placing the `<link>` tag in the wrong part of the HTML page.
- Forgetting to save both files before refreshing the browser.

## ✅ Remember

- The `<link>` tag connects HTML and CSS.
- `rel="stylesheet"` tells the browser it is a stylesheet.
- `href` points to the actual CSS file.

## 🧭 Navigation

[← Previous](04-types-of-css.md) | [CSS Home](00-README.md) | [Next →](06-css-syntax.md)
