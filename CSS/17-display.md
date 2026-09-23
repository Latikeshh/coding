# Display Property

> 🟢 Beginner

## 📖 Definition

The `display` property controls how an element behaves in layout.

## 🤔 Why Do We Use It?

It decides whether an element is block, inline, flex, or grid.

## 🧠 Simple Explanation

Some elements take the whole line, while others sit next to other elements.

## Common display values

- `block` → takes full width and starts on a new line
- `inline` → flows with text and does not break the line
- `inline-block` → behaves like inline but keeps box dimensions
- `none` → hides the element completely

## 📝 Syntax

```css
p {
  display: block;
}

span {
  display: inline-block;
}
```

## 💡 Example

```css
.block-element {
  display: block;
  background: #f1f1f1;
}

.inline-element {
  display: inline-block;
  width: 100px;
  background: #dff0ff;
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
  <div class="block-element">Block element</div>
  <span class="inline-element">Inline block</span>
  <span class="inline-element">Another inline block</span>
</body>
</html>
```

```css
.block-element {
  display: block;
  background: #f1f1f1;
}

.inline-element {
  display: inline-block;
  width: 100px;
  background: #dff0ff;
}
```

## 👀 What You Will See

One element fills a line, and the other elements sit beside each other like boxes.

## 🧪 Try It Yourself

Change `display: inline-block` to `display: block` and see how the layout changes.

## ⚠️ Common Mistakes

- Using `display: none` accidentally and hiding content.
- Expecting inline elements to accept width and height the same as block elements.
- Ignoring flex and grid, which are used frequently in modern layouts.

## ✅ Remember

- `display` controls layout behavior.
- Block and inline are the core starting points.
- Flex and grid also use `display`.

## 🧭 Navigation

[← Previous](16-box-model.md) | [CSS Home](00-README.md) | [Next →](18-positioning.md)
