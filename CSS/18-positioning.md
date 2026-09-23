# Positioning

> 🟢 Beginner

## 📖 Definition

The `position` property controls how an element is placed in the page layout.

## 🤔 Why Do We Use It?

It helps create advanced layouts, overlays, sticky headers, and fixed navigation.

## 🧠 Simple Explanation

Positioning tells the browser whether an element should stay in the normal flow or be moved around.

## Position values

- `static` → default position
- `relative` → moves relative to its original position
- `absolute` → positioned relative to the nearest positioned ancestor
- `fixed` → stays in the same place even when the page scrolls
- `sticky` → behaves like relative until a threshold is reached, then becomes fixed

## 📝 Syntax

```css
.box {
  position: relative;
  top: 20px;
  left: 10px;
}
```

## 💡 Example

```css
.nav {
  position: sticky;
  top: 0;
  background: #fff;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Positioning Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="nav">Navigation</nav>
  <div class="content">Some long content...</div>
</body>
</html>
```

```css
.nav {
  position: sticky;
  top: 0;
  background: #fff;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}
```

## 👀 What You Will See

The navigation stays visible at the top while the rest of the page scrolls.

## 🧪 Try It Yourself

Change `sticky` to `fixed` and open the page. Compare the behavior.

## ⚠️ Common Mistakes

- Forgetting that `absolute` needs a positioned parent.
- Overusing `position: fixed` for everything.
- Confusing `relative` with `absolute`.

## ✅ Remember

- `position` changes how an element sits in the page.
- Different values have different layout behavior.
- Use it carefully for clean layouts.

## 🧭 Navigation

[← Previous](17-display.md) | [CSS Home](00-README.md) | [Next →](19-float-and-clear.md)
