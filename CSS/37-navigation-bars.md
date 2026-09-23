# Navigation Bars

> 🟢 Beginner

## 📖 Definition

Navigation bars are the menus at the top of a webpage that help users move around the site.

## 🤔 Why Do We Use It?

A clear navigation bar makes the website easier to use and improves user experience.

## 🧠 Simple Explanation

Navigation bars are usually horizontal sections containing links such as Home, About, and Contact.

## Common navbar styles

- `display: flex`
- `justify-content: space-between`
- `padding`
- `background-color`
- `gap`

## 📝 Syntax

```css
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  background: #f4f4f4;
}
```

## 💡 Example

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f6f6f6;
  padding: 15px 20px;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Navbar Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="navbar">
    <div>Brand</div>
    <div>Home | About | Contact</div>
  </nav>
</body>
</html>
```

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f6f6f6;
  padding: 15px 20px;
}
```

## 👀 What You Will See

The brand sits on one side and the menu links on the other side.

## 🧪 Try It Yourself

Change `space-between` to `center` and see how the layout changes.

## ⚠️ Common Mistakes

- Making the menu too wide or too crowded.
- Not making the navigation responsive for mobile screens.
- Ignoring hover states for links.

## ✅ Remember

- Navigation bars are one of the most common page elements.
- Keep them clear and easy to scan.
- Flexbox is a natural fit for this layout.

## 🧭 Navigation

[← Previous](36-card-layout.md) | [CSS Home](00-README.md) | [Next →](38-mini-projects.md)
