# How to Add CSS (`<link>` Tag)

> 🟢 Beginner

## 📖 Definition

Adding external CSS involves placing a `<link>` element inside the `<head>` section of an HTML document, specifying `rel="stylesheet"` and the file path in `href="style.css"`.

## 🌐 Multilingual Explanation

### English
The `<link rel="stylesheet" href="style.css">` element connects HTML pages to external CSS stylesheets.

### Hindi
`<link rel="stylesheet" href="style.css">` tag HTML aur CSS files ko aapas mein jodta hai.

### Marathi
`<link>` tag vaprun HTML ani CSS files ekmekanshi jodlya jaatat.

## 🤔 Why Is Proper Linking Important?

If the `<link>` tag is omitted or has a broken file path, the browser will render plain unstyled HTML without applying any colors, fonts, or layouts.

## 📝 Syntax & Attributes Breakdown

```html
<link rel="stylesheet" href="css/style.css">
```

| Attribute | Meaning & Function | Required Value |
|---|---|---|
| `rel` | Specifies relationship between HTML and linked resource | `rel="stylesheet"` |
| `href` | Specifies relative or absolute URL path to `.css` file | `href="style.css"` or `href="css/main.css"` |
| `type` | (Optional) Specifies MIME type | `type="text/css"` (Optional in HTML5) |
| `media` | (Optional) Specifies media condition for loading stylesheet | `media="all"` or `media="print"` |

## 💻 Examples

### Scenario 1: HTML and CSS in the same folder
```text
my-project/
├── index.html
└── style.css
```

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

### Scenario 2: CSS inside a `css` subfolder (Recommended Project Structure)
```text
my-project/
├── index.html
└── css/
    └── style.css
```

```html
<head>
  <link rel="stylesheet" href="css/style.css">
</head>
```

## 🌐 Complete HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>How to Add CSS Example</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <div class="card">
    <h2>CSS Connected Properly!</h2>
    <p>The layout and styling rules are loaded from css/style.css.</p>
  </div>

</body>
</html>
```

```css
/* css/style.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h2 {
  color: #28a745;
}
```

## 👀 What You Will See

A centered white card component on a soft light-gray screen with a green heading title confirming that CSS loaded successfully.

## 🧪 Try It Yourself

1. Create a `css` subfolder in your project.
2. Move `style.css` inside `css/style.css`.
3. Update `href="style.css"` to `href="css/style.css"` in `index.html` and verify browser loading.

## ⚠️ Common Mistakes

- **Incorrect file paths:** Writing `href="style.css"` when the file is located inside `css/style.css`.
- **Misspelling file extensions:** Saving the stylesheet as `style.css.txt` instead of `style.css`.
- **Typo in `rel` attribute:** Writing `rel="styles"` or `rel="stylesheet.css"`.

## 💡 Real-World Usage

Production websites often link multiple stylesheets (e.g. `reset.css`, `typography.css`, `components.css`, `main.css`) inside `<head>` to maintain modular, scalable web design.

## 🔗 Related Topics

- [Set Up CSS Environment](01-setup-css.md)
- [Types of CSS](04-types-of-css.md)
- [Browser Developer Tools for CSS](34-devtools.md)

## ✅ Remember

- Place `<link rel="stylesheet" href="...">` inside `<head>`.
- Double-check file subfolder paths in `href="..."`.
- Open DevTools Network tab (`F12`) to verify if `style.css` returns HTTP status `200 OK`.

## 🧭 Navigation

[← Previous](04-types-of-css.md) | [CSS Home](00-README.md) | [Next →](06-css-syntax.md)
