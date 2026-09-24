# Selectors

> 🟢 Beginner

## 📖 Definition

A CSS selector tells the browser which HTML element or elements to apply specific style rules to.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Selectors target HTML elements. Element selectors target tags (`p`), class selectors target `.class`, and ID selectors target `#id`.
> - **Hindi:** सेलेक्टर HTML एलीमेंट्स को टारगेट करते हैं। एलिमेंट सेलेक्टर टैग (`p`), क्लास सेलेक्टर `.class`, और ID सेलेक्टर `#id` को स्टाइल करते हैं।
> - **Marathi:** सेलेक्टर्स HTML एलिमेंट्सना टार्गेट करतात. क्लाससाठी `.class` आणि ID साठी `#id` वापरतात.
> - **Hinglish:** Selectors HTML tags ko target karte hain. Class target karne ke liye `.class_name` aur ID ke liye `#id_name` use karte hain.

## 🤔 Why Do We Use It?

Without selectors, CSS would not know where to apply styles. Selectors link CSS rules directly to HTML elements.

## 🧠 Simple Explanation

A selector is like pointing at a specific item in a room: "This one gets blue paint," "These ones get borders," or "This specific card gets extra padding."

## Types of selectors

### Universal selector (`*`)
```css
* {
  margin: 0;
  box-sizing: border-box;
}
```

### Element selector (`p`, `h1`)
```css
p {
  color: green;
}
```

### Class selector (`.className`)
```css
.card {
  border: 1px solid #333;
}
```

### ID selector (`#idName`)
```css
#main-title {
  font-size: 30px;
}
```

### Grouping selector (`h1, h2`)
```css
h1, h2, h3 {
  color: navy;
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
  padding: 15px;
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

The heading is styled in dark blue and the card paragraph receives a light background with padding.

## 🧪 Try It Yourself

Create a class `.highlight` and an ID `#special`. Style both with different background colors and compare the result.

## ⚠️ Common Mistakes

- Using `#` for a class name instead of `.`.
- Using identical IDs on multiple HTML elements (IDs must be unique per page).

## ✅ Remember

- `.` selects classes (can be reused on multiple elements).
- `#` selects IDs (unique per page element).
- Selector target precision determines style applicability.

## 🧭 Navigation

[← Previous](07-css-comments.md) | [CSS Home](00-README.md) | [Next →](09-specificity.md)
