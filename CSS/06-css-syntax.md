# CSS Syntax

> 🟢 Beginner

## 📖 Definition

CSS syntax is the correct structure used to write CSS rules.

## 🤔 Why Do We Use It?

The browser can only understand CSS when it follows the correct rule format.

## 🧠 Simple Explanation

A CSS rule says: “Find this element and apply these styles.”

```css
selector {
  property: value;
}
```

### Each part means:

- `selector` → what you want to style
- `property` → what you want to change
- `value` → how you want to change it

## 📝 Syntax

```css
p {
  color: blue;
  font-size: 18px;
}
```

## 💡 Example

```css
h1 {
  color: darkgreen;
  font-size: 32px;
  text-align: center;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Syntax</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Welcome</h1>
</body>
</html>
```

```css
h1 {
  color: darkgreen;
  font-size: 32px;
  text-align: center;
}
```

## 👀 What You Will See

The heading becomes dark green, larger, and centered on the page.

## 🧪 Try It Yourself

Change the `color` and `font-size` values and reload the page.

## ⚠️ Common Mistakes

- Forgetting the semicolon after each declaration.
- Missing closing braces.
- Writing CSS rules outside the selector block.

## ✅ Remember

- CSS rules always use braces.
- Each property ends with a semicolon.
- The selector decides what gets styled.

## 🧭 Navigation

[← Previous](05-how-to-add-css.md) | [CSS Home](00-README.md) | [Next →](07-css-comments.md)
