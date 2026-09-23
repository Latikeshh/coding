# Backgrounds

> 🟢 Beginner

## 📖 Definition

Backgrounds set the appearance behind HTML elements, including solid colors and images.

## 🤔 Why Do We Use It?

Backgrounds help separate sections and make content easier to read.

## 🧠 Simple Explanation

A background is the layer behind the content of a box or page. It can be a simple color or an image.

## 📝 Syntax

```css
section {
  background-color: #eaf3ff;
  background-image: url("pattern.png");
}
```

## 💡 Example

```css
.banner {
  background-color: #dfefff;
  padding: 30px;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Background Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <section class="banner">
    <h1>Spring Sale</h1>
    <p>Big discounts this weekend.</p>
  </section>
</body>
</html>
```

```css
.banner {
  background-color: #dfefff;
  padding: 30px;
}
```

## 👀 What You Will See

The banner section gets a soft blue background and extra space around the text.

## 🧪 Try It Yourself

Change the background color to a softer yellow or a light green and compare the look.

## ⚠️ Common Mistakes

- Forgetting the file path when using an image background.
- Using colors that are too bright and hard to read.
- Ignoring contrast between text and background.

## ✅ Remember

- `background-color` sets a solid color.
- `background-image` can add a photo or pattern.
- Use contrast so text remains readable.

## 🧭 Navigation

[← Previous](11-css-units.md) | [CSS Home](00-README.md) | [Next →](13-borders.md)
