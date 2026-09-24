# Introduction to CSS

> 🟢 Beginner

## 📖 Definition

CSS (Cascading Style Sheets) is a style language used to describe how HTML elements should look, be styled, and be arranged on a webpage.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** CSS styles HTML content by adding colors, fonts, margins, padding, animations, and responsive layouts.
> - **Hindi:** CSS वेब पेज को स्टाइल करता है - जैसे रंग, फ़ॉन्ट, स्पेसिंग (माजिर्न/पैडिंग), लेआउट और एनीमेशन जोडना।
> - **Marathi:** CSS द्वारे HTML मजकुराला रंग, फॉन्ट, जागा (spacing), लेआउट आणि एनीमेशन्स देऊन आकर्षक बनवले जाते.
> - **Hinglish:** CSS HTML page ko styling deta hai, jaise colors, fonts, spacing, alignment, aur animations apply karna.

## 🤔 Why Do We Use It?

Without CSS, websites would be plain black text and basic structure. CSS makes pages easier to read, visually attractive, and organized across different screens.

## 🧠 Simple Explanation

HTML is the content and frame. CSS is the paint and decoration. A page with only HTML is like a house with walls but no paint or interior design.

## 📝 Syntax

```css
body {
  background-color: white;
  color: black;
  font-family: Arial, sans-serif;
}
```

## 💡 Example

```css
body {
  background-color: #f8f8f8;
  color: #222;
  font-family: Arial, sans-serif;
}

h2 {
  color: navy;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Simple introduction page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>My Study Notes</h2>
  <p>I am learning CSS.</p>
</body>
</html>
```

```css
body {
  background-color: #f8f8f8;
  color: #222;
  font-family: Arial, sans-serif;
}

h2 {
  color: navy;
}
```

## 👀 What You Will See

The page is cleaner because it has a light background, readable dark text, and a navy heading color.

## 🧪 Try It Yourself

Change the background color and the heading color. Observe how the page design changes.

## ⚠️ Common Mistakes

- Writing CSS without connecting it to the HTML file via `<link rel="stylesheet" href="style.css">`.
- Mixing HTML tags and CSS rules incorrectly.
- Forgetting that CSS uses lowercase property names.

## ✅ Remember

- CSS works with HTML to create the final webpage.
- CSS handles styling, color, layout, and spacing.
- Writing CSS in a separate `.css` file keeps code clean and maintainable.

## 🧭 Navigation

[← Previous](01-setup-css.md) | [CSS Home](00-README.md) | [Next →](03-history-of-css.md)
