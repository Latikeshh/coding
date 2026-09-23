# Width and Height

> 🟢 Beginner

## 📖 Definition

The `width` and `height` properties control the size of an element.

## 🤔 Why Do We Use It?

You use width and height to create cards, buttons, menus, and other layout blocks with a consistent size.

## 🧠 Simple Explanation

Every box on a page has a width and height. CSS lets you decide how large the box should be.

## 📝 Syntax

```css
.box {
  width: 300px;
  height: 150px;
}
```

## 💡 Example

```css
.card {
  width: 280px;
  height: 180px;
  background-color: #efefef;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Card Layout</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">
    <h2>Recipe of the Week</h2>
    <p>Easy pasta and tomato sauce.</p>
  </div>
</body>
</html>
```

```css
.card {
  width: 280px;
  height: 180px;
  background-color: #efefef;
  padding: 20px;
}
```

## 👀 What You Will See

The card has a fixed size and sits neatly in the page, making the content easier to read.

## 🧪 Try It Yourself

Change the card width and height. Notice how the content may wrap when the box becomes smaller.

## ✅ Remember

- Width decides how wide an element is.
- Height decides how tall an element is.
- Fixed sizes can be useful, but flexible layouts are often better on different screens.

## 🧭 Navigation

[← Previous](09-specificity.md) | [CSS Home](00-README.md) | [Next →](11-css-units.md)
