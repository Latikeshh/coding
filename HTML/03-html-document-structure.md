# HTML Document Structure & Metadata

> 🟢 Beginner

## 📖 Definition

Every standard HTML document follows a required boilerplate structure. The document is divided into two primary sections: the **`<head>`** (which contains page metadata, title, favicons, and settings invisible to users) and the **`<body>`** (which contains all visible headings, text, images, and content).

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
An HTML page is structured with `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`. Metadata in `<head>` helps browsers and search engines, while `<body>` contains all visible content.

### Hindi
HTML पेज में `<!DOCTYPE html>`, `<html>`, `<head>` और `<body>` होते हैं। `<head>` में पेज की जानकारी (title, SEO, metadata) होती है, जबकि `<body>` में यूज़र को दिखने वाला सारा कंटेंट होता है।

### Marathi
HTML पेज `<!DOCTYPE html>`, `<html>`, `<head>` आणि `<body>` ने बनलेला असतो. `<head>` मध्ये पेजची माहिती (title, SEO) असते तर `<body>` मध्ये स्क्रीनवर दिसणारा सर्व मजकूर असतो.

### Hinglish
HTML document structure mein `<!DOCTYPE html>`, `<html>`, `<head>`, aur `<body>` hote hain. `<head>` section search engines aur metadata ke liye hota hai, jabki `<body>` mein actual visible content hota hai.

## 🧱 The Standard HTML Boilerplate

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="A beginner-friendly guide to learning HTML document structure and web fundamentals.">
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  <title>HTML Document Structure - Coding Notes</title>
</head>
<body>
  <h1>Welcome to Web Development</h1>
  <p>This paragraph is visible inside the browser body area.</p>
</body>
</html>
```

## 🔍 Detailed Breakdown of Boilerplate Elements

1. **`<!DOCTYPE html>`:**
   - **Important:** This is an information declaration, **NOT an HTML tag**.
   - Tells the web browser that the document is written in modern **HTML5**.
2. **`<html lang="en">`:**
   - The root element wrapping all HTML content on the page.
   - The `lang="en"` attribute specifies the document language, helping screen readers and search engines.
3. **`<head>`:**
   - Contains metadata (data about data), page titles, character encodings, viewport settings, external CSS links, and scripts.
   - None of the content inside `<head>` is directly displayed inside the main browser viewing area (except the title in the browser tab).
4. **`<meta charset="UTF-8">`:**
   - Specifies the character encoding format. UTF-8 supports almost all written human languages, symbols, and emojis.
5. **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`:**
   - Crucial for mobile responsiveness. Tells mobile browsers to render the page at the device's actual screen width rather than zooming out to a desktop layout.
6. **`<meta name="description" content="...">`:**
   - Provides a concise summary of the page for search engines (SEO). Google often displays this text snippet in search results.
7. **`<link rel="icon" href="favicon.ico">`:**
   - Links a small icon (favicon) displayed next to the page title on browser tabs.
8. **`<title>`:**
   - Sets the page title shown on browser tabs, bookmarks, and search engine result headings.
9. **`<body>`:**
   - Contains all visible content: headings, paragraphs, images, buttons, forms, tables, audio, and video.

## ⚠️ Common Mistakes

- **Placing visible content inside `<head>`:** Placing `<p>` or `<h1>` tags inside `<head>` causes layout issues.
- **Omitting the viewport meta tag:** Forgetting `<meta name="viewport">` breaks mobile responsiveness.
- **Forgetting `<title>`:** Leaving out `<title>` results in browser tabs showing raw file paths (e.g. `file:///C:/index.html`).

## 🧪 Try It Yourself

Create an `index.html` file in VS Code and customize:
1. The `<title>` tag with your project title.
2. The `<meta name="description">` with a custom summary.
3. Add an `<h1>` heading and a `<p>` paragraph inside `<body>`.

## 🎯 Mini Challenge

Open your saved HTML file in a browser, inspect the tab title, and open **Developer Tools** (`F12` or `Ctrl + Shift + I`) to view the rendered `<head>` and `<body>` structure.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Introduction](02-introduction.md) | [Next: Headings →](04-headings.md)
