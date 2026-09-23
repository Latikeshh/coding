# Display

> 🟡 Intermediate

## 📖 Definition

The `display` property controls how an element is shown on the page, such as block, inline, or flex.

## 🤔 Why Do We Use It?

Display helps you decide how content should flow and whether elements sit in a row or on separate lines.

## 🧠 Simple Explanation

Some elements naturally take a whole line, while others sit beside other elements. Display tells the browser which layout behavior to use.

## 📝 Syntax

```css
p {
  display: block;
}

span {
  display: inline;
}
```

## 💡 Example

```css
.block-element {
  display: block;
  background: #dfeeff;
  padding: 10px;
}

.inline-element {
  display: inline;
  color: blue;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Display Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <p class="block-element">This is a block element.</p>
  <span class="inline-element">This is inline text.</span>
</body>
</html>
```

```css
.block-element {
  display: block;
  background: #dfeeff;
  padding: 10px;
}

.inline-element {
  display: inline;
  color: blue;
}
```

## 👀 What You Will See

The paragraph appears on its own line, while the span sits inline with the surrounding text.

## 🧪 Try It Yourself

Change an element from `block` to `inline` and see how the layout changes.

## ✅ Remember

- `block` elements usually start on a new line.
- `inline` elements stay in the same line as surrounding content.
- `display` is one of the most important layout tools in CSS.

## 🧭 Navigation

[← Previous](15-lists.md) | [CSS Home](00-README.md) | [Next →](17-position.md)
