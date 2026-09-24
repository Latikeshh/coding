# Set Up CSS Environment

> 🟢 Beginner

## 📖 Definition

Setting up CSS involves creating a `.css` file and linking it to an HTML document using the `<link rel="stylesheet" href="style.css">` tag inside `<head>`.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Connect CSS to HTML using `<link rel="stylesheet" href="style.css">` inside the HTML `<head>` tag.
> - **Hindi:** HTML से CSS जोड़ने के लिए `<head>` में `<link rel="stylesheet" href="style.css">` का प्रयोग करें।
> - **Marathi:** HTML ला CSS जोडण्यासाठी `<head>` मध्ये `<link>` टॅग वापरतात.
> - **Hinglish:** External CSS file ko HTML ke `<head>` section mein `<link rel="stylesheet" href="style.css">` se connect karo.

## 📝 Syntax

```html
<!-- Inside index.html head section -->
<head>
  <meta charset="UTF-8">
  <title>My Styled Page</title>
  <link rel="stylesheet" href="style.css">
</head>
```

```css
/* Inside style.css */
body {
  font-family: sans-serif;
  background-color: #f4f4f4;
  color: #333;
}
```

## ⚠️ Common Mistakes

- Incorrect file path inside `href="style.css"` (e.g. spelling or folder path errors).
- Placing the `<link>` tag inside `<body>` instead of `<head>`.

## 🧭 Navigation

[← CSS Home](00-README.md) | [Next: Introduction to CSS →](02-introduction-to-css.md)
