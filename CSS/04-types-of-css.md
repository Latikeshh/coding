# Types of CSS (Inline, Internal, External)

> 🟢 Beginner

## 📖 Definition

CSS can be added to an HTML document using three methods: **Inline CSS** (inside HTML tags), **Internal CSS** (inside `<style>` tags in `<head>`), and **External CSS** (in a separate `.css` file).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** External CSS (in a `.css` file) is the best practice for production websites. Inline CSS is for single-element overrides.
> - **Hindi:** एक्सटर्नल CSS (`.css` फाइल) सबसे सही तरीका है। इनलाइन CSS केवल एक एलीमेंट के लिए होता है।
> - **Marathi:** मोठ्या प्रोजेक्ट्ससाठी एक्सटर्नल CSS फाइल वापरणे योग्य मानले जाते.
> - **Hinglish:** Web development mein External CSS (`.css` file) use karna best practice hai. Inline CSS ko avoid karna chahiye.

## 📝 Comparison Table

| Type | Syntax Location | Best Used For | Reusability |
|---|---|---|---|
| **Inline** | `style="..."` attribute inside HTML element | Small single-element testing | Low |
| **Internal** | `<style>` block inside HTML `<head>` | Single-page HTML document | Moderate |
| **External** | External `.css` file linked via `<link>` | Production multi-page websites | High |

```html
<!-- 1. Inline CSS -->
<p style="color: red;">Inline Text</p>

<!-- 2. Internal CSS -->
<head>
  <style>
    p { color: blue; }
  </style>
</head>

<!-- 3. External CSS (Recommended) -->
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

## 🧭 Navigation

[← Previous](03-history-of-css.md) | [CSS Home](00-README.md) | [Next →](05-how-to-add-css.md)
