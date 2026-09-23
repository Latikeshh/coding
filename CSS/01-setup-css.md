# Set Up CSS

> 🟢 Beginner

## 📖 Definition

CSS stands for Cascading Style Sheets. It is used to style HTML elements and control how a page looks.

## 🤔 Why Do We Use It?

HTML gives a page structure, but CSS gives it color, spacing, fonts, and layout. Without CSS, a page would look plain and difficult to read.

## 🧠 Simple Explanation

Think of HTML as the wall, and CSS as the paint, furniture, and decoration. Your browser reads the HTML and then applies the CSS rules you write.

## 📝 Syntax

```css
selector {
  property: value;
}
```

## 💡 Example

```css
h1 {
  color: blue;
  font-size: 32px;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Styled Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Welcome to My Page</h1>
  <p>This text is styled with CSS.</p>
</body>
</html>
```

```css
h1 {
  color: blue;
  font-size: 32px;
}

p {
  color: #333;
  font-size: 18px;
}
```

## 👀 What You Will See

The heading becomes blue and larger, while the paragraph keeps a readable dark gray color.

## 🧪 Try It Yourself

Create a `style.css` file and link it to an `index.html` file. Change the heading color to green and increase the font size.

## ✅ Remember

- CSS is written in separate files or inside the HTML file.
- The browser reads CSS rules and applies them to matching elements.
- A small change in a property can improve the whole page.

## 🧭 Navigation

[← CSS Home](00-README.md) | [Next: Introduction to CSS →] | (02-introduction-to-css.md)
