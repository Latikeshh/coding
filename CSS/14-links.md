# Links

> 🟢 Beginner

## 📖 Definition

CSS can style links so they look consistent and clear. Links are usually styled with different colors and hover states.

## 🤔 Why Do We Use It?

Links need to be easy to notice and easy to click. Styling them well improves navigation and user experience.

## 🧠 Simple Explanation

A link is like a sign that tells a user, “Go to this page.” CSS helps it stand out and respond when the user moves their mouse over it.

## 📝 Syntax

```css
a {
  color: blue;
  text-decoration: none;
}

 a:hover {
  color: darkblue;
}
```

## 💡 Example

```css
a {
  color: #0066cc;
  text-decoration: none;
}

 a:hover {
  color: #003d99;
  text-decoration: underline;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Links Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <a href="https://example.com">Visit Example</a>
</body>
</html>
```

```css
a {
  color: #0066cc;
  text-decoration: none;
}

 a:hover {
  color: #003d99;
  text-decoration: underline;
}
```

## 👀 What You Will See

The link appears in blue and changes color when the mouse moves over it.

## 🧪 Try It Yourself

Style a link with a different color and add an underline only on hover.

## ✅ Remember

- `a` targets all links.
- `text-decoration` can remove or add underlines.
- Hover states give feedback to users.

## 🧭 Navigation

[← Previous](13-fonts.md) | [CSS Home](00-README.md) | [Next →](15-lists.md)
