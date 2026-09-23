# Float and Clear

> 🟢 Beginner

## 📖 Definition

`float` is an older CSS property used to move elements left or right within a container. `clear` stops float effects.

## 🤔 Why Do We Use It?

It was commonly used for layouts before modern layout systems like flexbox and grid.

## 🧠 Simple Explanation

A floated element can wrap around other content, similar to text wrapping around an image.

## 📝 Syntax

```css
img {
  float: left;
}

.clearfix {
  clear: both;
}
```

## 💡 Example

```css
.image {
  float: left;
  margin-right: 15px;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Float Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <img class="image" src="example.jpg" alt="Example image" width="150">
  <p>This image is floated to the left, so the paragraph wraps around it.</p>
</body>
</html>
```

```css
.image {
  float: left;
  margin-right: 15px;
}
```

## 👀 What You Will See

The image sits to the left and the paragraph wraps around it.

## 🧪 Try It Yourself

Change `float: left` to `float: right` and see how the content responds.

## ⚠️ Common Mistakes

- Using floats when flexbox or grid is a better choice.
- Forgetting `clear` when needed.
- Using float for full-page layouts in modern projects.

## ✅ Remember

- Float is older but still useful in some cases.
- Modern layouts usually use flexbox and grid.
- `clear` helps control wrapping.

## 🧭 Navigation

[← Previous](18-positioning.md) | [CSS Home](00-README.md) | [Next →](20-flexbox.md)
