# Lists

> 🟢 Beginner

## 📖 Definition

CSS can style lists by changing their spacing, bullet style, color, and layout.

## 🤔 Why Do We Use It?

Lists are common in websites, such as menus, steps, and navigation. Styling them helps people read them more easily.

## 🧠 Simple Explanation

A list is like a set of items in a queue. CSS helps you decide how those items should look and how much space they should have.

## 📝 Syntax

```css
ul {
  list-style-type: square;
  padding-left: 20px;
}
```

## 💡 Example

```css
ul {
  list-style-type: square;
  color: #333;
}

li {
  margin-bottom: 8px;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>List Styling</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <ul>
    <li>Read notes</li>
    <li>Practice examples</li>
    <li>Build a small page</li>
  </ul>
</body>
</html>
```

```css
ul {
  list-style-type: square;
  color: #333;
}

li {
  margin-bottom: 8px;
}
```

## 👀 What You Will See

The list uses square bullet points and has spacing between each item.

## 🧪 Try It Yourself

Change `list-style-type` to `circle` or `disc` and see how the list looks.

## ✅ Remember

- `list-style-type` changes the bullet or number style.
- `padding-left` creates space for the list.
- `margin-bottom` adds space between list items.

## 🧭 Navigation

[← Previous](14-links.md) | [CSS Home](00-README.md) | [Next →](16-display.md)
