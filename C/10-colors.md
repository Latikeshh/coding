# Colors

> 🟢 Beginner

## 📖 Definition

Colors in CSS are used to change the appearance of text, backgrounds, borders, and other elements.

## 🤔 Why Do We Use It?

Color helps a page look organized, readable, and visually appealing.

## 🧠 Simple Explanation

A page without color can feel flat. Color helps people understand which information is important and makes the design more pleasant.

## Ways to write colors

### 1. Color names

```css
p {
  color: red;
}
```

### 2. HEX values

```css
h1 {
  color: #ff6600;
}
```

### 3. RGB

```css
button {
  background-color: rgb(0, 128, 255);
}
```

### 4. RGBA

```css
.card {
  background-color: rgba(0, 0, 0, 0.5);
}
```

### 5. HSL

```css
section {
  background-color: hsl(210, 50%, 50%);
}
```

### 6. HSLA

```css
.box {
  background-color: hsla(120, 60%, 50%, 0.6);
}
```

## 💡 Example

```css
body {
  background-color: #f5f5f5;
}

h1 {
  color: darkblue;
}

button {
  background-color: rgb(255, 153, 0);
  color: white;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Colors Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Student Profile</h1>
  <button>View Details</button>
</body>
</html>
```

```css
body {
  background-color: #f5f5f5;
}

h1 {
  color: darkblue;
}

button {
  background-color: rgb(255, 153, 0);
  color: white;
}
```

## 👀 What You Will See

The background is light, the heading is blue, and the button stands out with orange and white text.

## 🧪 Try It Yourself

Try writing the same color as a name, HEX, and RGB. See which format feels easiest for you.

## ⚠️ Common Mistakes

- Forgetting that HEX uses `#`.
- Using RGB without commas.
- Confusing transparency values in RGBA and HSLA.

## ✅ Remember

- There are many ways to write colors in CSS.
- `rgba()` and `hsla()` include transparency.
- Use colors consistently for readability and design.

## 🧭 Navigation

[← Previous](09-specificity.md) | [CSS Home](00-README.md) | [Next →](11-css-units.md)
