# Selectors

> 🟢 Beginner

## 📖 Definition

A selector tells CSS which HTML element or elements to style.

## 🤔 Why Do We Use It?

Without selectors, CSS would not know where to apply styles. Selectors are the connection between HTML and CSS.

## 🧠 Simple Explanation

A selector is like pointing at a specific item in a room: “This one is blue,” “These ones are red,” or “This section is special.”

## Types of selectors

### Universal selector

```css
* {
  margin: 0;
}
```

### Element selector

```css
p {
  color: green;
}
```

### Class selector

```css
.card {
  border: 1px solid #333;
}
```

### ID selector

```css
#main-title {
  font-size: 30px;
}
```

### Grouping selector

```css
h1, h2, h3 {
  color: navy;
}
```

### Descendant selector

```css
nav a {
  color: black;
}
```

### Child selector

```css
ul > li {
  list-style: none;
}
```

### Attribute selector

```css
a[href] {
  text-decoration: underline;
}
```

## 💡 Example

```css
* {
  box-sizing: border-box;
}

h1, h2 {
  color: darkblue;
}

.card {
  background: #f5f5f5;
}

#intro {
  font-weight: bold;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Selectors Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1 id="main-title">My Page</h1>
  <p class="card">This card is special.</p>
</body>
</html>
```

```css
#main-title {
  color: darkblue;
}

.card {
  background: #f5f5f5;
  padding: 15px;
}
```

## 👀 What You Will See

The heading is blue and the card text gets a light background.

## 🧪 Try It Yourself

Create a class and an ID. Style both with different colors and compare the result.

## ⚠️ Common Mistakes

- Using `#` for a class instead of `.`.
- Expecting one selector to style all elements automatically.
- Forgetting that selectors target matching elements only.

## ✅ Remember

- `.` selects classes.
- `#` selects IDs.
- Use selectors carefully so the right elements are styled.

## 🧭 Navigation

[← Previous](07-css-comments.md) | [CSS Home](00-README.md) | [Next →](09-specificity.md)
