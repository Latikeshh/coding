# CSS Syntax

> 🟢 Beginner

## 📖 Definition

CSS syntax is the way we write CSS rules. A CSS rule contains a selector and one or more declarations.

## 🤔 Why Do We Use It?

Every CSS style must follow a correct structure so the browser can understand it. A missing semicolon or curly brace can stop the style from working.

## 🧠 Simple Explanation

A CSS rule says: “Find this element, then apply these styles.” The browser reads the rule and changes the matching element.

## 📝 Syntax

```css
selector {
  property: value;
  property: value;
}
```

## 💡 Example

```css
p {
  color: darkslategray;
  font-size: 18px;
  line-height: 1.6;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Syntax Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <p>Good design helps people read content easily.</p>
</body>
</html>
```

```css
p {
  color: darkslategray;
  font-size: 18px;
  line-height: 1.6;
}
```

## 👀 What You Will See

The paragraph becomes darker and easier to read, with more spacing between the lines.

## 🧪 Try It Yourself

Write a rule for `h2` and set the font size to `28px` and color to `navy`.

## ✅ Remember

- Each declaration ends with a semicolon.
- Braces `{}` wrap the declarations.
- The selector tells CSS which element to style.

## 🧭 Navigation

[← Previous](02-introduction.md) | [CSS Home](00-README.md) | [Next →](04-selectors.md)
