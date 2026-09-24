# Borders, Border Radius & Box Shadows

> 🟢 Beginner

## 📖 Definition

- **`border`:** Draws boundary lines around an element's padding and content area (`width`, `style`, `color`).
- **`border-radius`:** Rounds the sharp outer corners of an element's border box.
- **`box-shadow`:** Applies 3D drop-shadow effects around an element's frame to create visual depth and elevation.

## 🌐 Multilingual Explanation

### English
Define borders using `border: width style color`. Round corners with `border-radius: 8px` and add elevation drop shadows using `box-shadow: offset-x offset-y blur color`.

### Hindi
`border` se boundary line banti hai, `border-radius` se corners round hote hain, aur `box-shadow` se element ke neeche shadow (parchaai) banti hai.

### Marathi
`border` mule boundary line aakhli jaate, `border-radius` mule corners round hotat ani `box-shadow` mule shadow diyanaya sathi vapartaat.

## 🤔 Why Do We Use Borders & Shadows?

Borders and shadows group related UI elements, highlight card boundaries, indicate clickable buttons, and create visual depth hierarchy across web interfaces.

## 📝 Syntax & Properties Breakdown

### 1. Border Shorthand Syntax
```css
element {
  /* border: border-width border-style border-color; */
  border: 2px solid #007bff;
}
```
- **Border Styles:** `solid`, `dashed`, `dotted`, `double`, `none`.

### 2. Border Radius (Rounded Corners)
```css
.card {
  border-radius: 12px; /* All 4 corners */
}

.avatar-circle {
  border-radius: 50%; /* Perfect circle for square elements */
}
```

### 3. Box Shadow (Elevation)
```css
/* box-shadow: offset-x offset-y blur-radius spread-radius color; */
.card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

## 📚 Property Reference Table

| Property | Purpose | Example |
|---|---|---|
| `border` | Shorthand for width, style, and color | `border: 1px solid #e0e0e0;` |
| `border-top` / `border-bottom` | Styles specific border edge only | `border-bottom: 2px solid #007bff;` |
| `border-radius` | Rounds outer box corners | `border-radius: 8px;` |
| `box-shadow` | Adds drop shadow elevation | `box-shadow: 0 8px 24px rgba(0,0,0,0.12);` |
| `outline` | Draws line outside border (does not take box model space) | `outline: 2px solid #007bff;` |

## 💻 Examples

```css
/* Modern elevated card component */
.ui-card {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.ui-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Borders and Shadows Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="card">
    <img src="https://via.placeholder.com/80" alt="Avatar" class="avatar">
    <h2>Alex Kumar</h2>
    <p>Frontend Engineer &amp; UI Designer</p>
  </div>

</body>
</html>
```

```css
/* style.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f3f4f6;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.card {
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 16px;
  padding: 30px;
  text-align: center;
  width: 300px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%; /* Circle avatar */
  border: 3px solid #3b82f6;
}

h2 {
  margin: 15px 0 5px 0;
  color: #1f2937;
}

p {
  margin: 0;
  color: #6b7280;
  font-size: 14px;
}
```

## 👀 What You Will See

A card component featuring a circular profile image with a blue border ring and subtle 3D drop shadow elevation.

## 🧪 Try It Yourself

1. Add `border-radius: 50%` to a square image element to create a circular user avatar.
2. Change the `box-shadow` rgba alpha value from `0.08` to `0.25` and see how the card elevation shadow becomes darker and heavier.

## ⚠️ Common Mistakes

- **Forgetting border style:** Writing `border: 2px #000;` without specifying `solid` or `dashed` renders no visible border!
- **Using harsh black box-shadows:** Writing `box-shadow: 0 5px 10px #000000;` creates an unnatural dark smudge. Use semi-transparent RGBA shadows like `rgba(0, 0, 0, 0.08)` for realistic elevation.

## 💡 Real-World Usage

Material Design and modern web interfaces use structured `box-shadow` elevation levels (`shadow-sm`, `shadow-md`, `shadow-lg`) to represent spatial layers (cards, dropdown menus, modals, tooltips).

## 🔗 Related Topics

- [The CSS Box Model](16-box-model.md)
- [CSS Transitions](28-transitions.md)
- [Card Layout Components](36-card-layout.md)

## ✅ Remember

- Border shorthand format: `border: width style color;`.
- Use `border-radius: 50%` on equal width/height squares to create circles.
- Soft semi-transparent RGBA `box-shadow` values create realistic 3D elevation.

## 🧭 Navigation

[← Previous](12-backgrounds.md) | [CSS Home](00-README.md) | [Next →](14-margins.md)
