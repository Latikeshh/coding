# Flexbox Layout

> 🟢 Beginner

## 📖 Definition

Flexible Box Layout (Flexbox) is a 1-dimensional CSS layout model designed to distribute space and align items along a row or a column.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Flexbox (`display: flex`) aligns items easily along a row or column. Use `justify-content` for main-axis alignment and `align-items` for cross-axis alignment.
> - **Hindi:** फ्लेक्सबॉक्स (`display: flex`) आइटम्स को रो या कॉलम में अलाइन करता है। `justify-content` हॉरिजॉन्टल और `align-items` वर्टिकल अलाइनमेंट के लिए होता है।
> - **Marathi:** फ्लेक्सबॉक्समुळे घटक एका ओळीत किंवा कॉलममध्ये सहज लावले जातात. `justify-content` आणि `align-items` द्वारे अलाईनमेंट सुलभ होते.
> - **Hinglish:** Flexbox 1D layout ke liye best hai. Parent container par `display: flex` lagao, aur `justify-content` & `align-items` se alignment control karo.

## 🤔 Why Do We Use It?

Flexbox eliminates old, fragile techniques (like floats and absolute positioning) for centering content, building navigation bars, and making flexible UI components.

## 🧠 Simple Explanation

A flex container acts like an elastic tray. When you place items in it, the tray automatically adjusts their size and spacing to fit the available space.

## Common flex properties

- `display: flex` → Converts an element into a flex container
- `flex-direction` → Direction of items (`row`, `column`)
- `justify-content` → Main-axis alignment (`flex-start`, `center`, `space-between`, `space-around`)
- `align-items` → Cross-axis alignment (`flex-start`, `center`, `stretch`)
- `gap` → Spacing between flex items

## 📝 Syntax

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Flexbox Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="navbar">
    <div class="logo">BrandLogo</div>
    <div class="nav-links">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>
  </nav>
</body>
</html>
```

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background: #222;
  color: white;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: white;
  text-decoration: none;
}
```

## 👀 What You Will See

The logo aligns to the left and navigation links align to the right, perfectly centered vertically inside the navigation bar.

## 🧪 Try It Yourself

Change `justify-content: space-between` to `justify-content: center` and see how the brand logo and nav items center together.

## ⚠️ Common Mistakes

- Setting `justify-content` on flex child items instead of the parent flex container.
- Forgetting to declare `display: flex` on the container.

## ✅ Remember

- Flexbox is ideal for 1D layouts (single rows or single columns).
- Align main-axis items with `justify-content` and cross-axis items with `align-items`.

## 🧭 Navigation

[← Previous](19-float-and-clear.md) | [CSS Home](00-README.md) | [Next →](21-grid.md)
