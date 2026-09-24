# HTML Document Structure & Metadata

> 🟢 Beginner

## 📖 Definition

Every standard HTML5 document follows a mandatory structural boilerplate. The document is split into two primary sections: the **`<head>`** section (which holds page metadata, title, favicons, character encoding, and settings invisible to users) and the **`<body>`** section (which contains all visible content shown on screen).

## 🌍 Multilingual Summary

### English
An HTML document is structured using `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`. Metadata in `<head>` assists web browsers and search engines, while `<body>` contains all visible content.

### Hindi
HTML document `<!DOCTYPE html>`, `<html>`, `<head>`, aur `<body>` se milkar banta hai. `<head>` mein metadata aur title hota hai, jabki `<body>` mein user ko dikhne wala sabhi content hota hai.

### Marathi
HTML document `<!DOCTYPE html>`, `<html>`, `<head>`, ani `<body>` ne banlele aste. `<head>` madhye page chi mahiti (metadata) aste ani `<body>` madhye screen var disnara sarva content asto.

## 🤔 Why Do We Use It?

Without a standardized document structure, web browsers would struggle to parse text encodings, render responsive layouts on mobile screens, or display tab titles correctly. Proper metadata ensures high search engine visibility (SEO) and smooth social media link previews.

## 🧱 The Standard HTML Boilerplate

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="A complete guide to HTML document structure and metadata for web developers.">
  <link rel="icon" href="favicon.ico" type="image/x-icon">
  <title>HTML Document Structure - Coding Notes</title>
</head>
<body>
  <h1>Welcome to Web Development</h1>
  <p>This paragraph is visible inside the main browser window.</p>
</body>
</html>
```

## 🔍 Detailed Breakdown of Boilerplate Elements

1. **`<!DOCTYPE html>`:**
   - **Crucial Rule:** This is a document type declaration, **NOT an HTML tag**.
   - Instructs the web browser that the document is written in standard modern **HTML5**.
2. **`<html lang="en">`:**
   - The root element wrapping all HTML code on the webpage.
   - The `lang="en"` attribute declares the primary language of the document, aiding accessibility screen readers and translation tools.
3. **`<head>`:**
   - Contains machine-readable metadata, title tags, viewport settings, favicons, stylesheets, and scripts.
   - Content inside `<head>` is not rendered directly inside the main browser viewing area (except the page title on the browser tab).
4. **`<meta charset="UTF-8">`:**
   - Specifies UTF-8 character encoding, which supports almost all written human languages, mathematical symbols, and emojis (`😊`, `🚀`).
5. **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`:**
   - Sets the viewport width to match the screen width of the device. Essential for mobile responsiveness. Without this tag, mobile devices render pages zoomed-out as wide desktop views.
6. **`<meta name="description" content="...">`:**
   - Provides a concise summary of the page for search engines. Search engines display this snippet below the page title in search results.
7. **`<link rel="icon" href="favicon.ico">`:**
   - Links a small favicon image displayed on browser tab headers next to the page title.
8. **`<title>`:**
   - Sets the title text displayed on browser tab headers, browser bookmarks, and search engine results.
9. **`<body>`:**
   - Contains all visible user content: headings, text, images, buttons, forms, tables, audio, and video.

## 💻 Complete HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn web development with structured HTML lessons.">
  <title>Web Development Course</title>
</head>
<body>
  <header>
    <h1>HTML5 Document Structure</h1>
  </header>
  <main>
    <p>Understanding head and body tags is essential for every developer.</p>
  </main>
</body>
</html>
```

## 👀 Output / What You Will See

- Browser tab displays: **"Web Development Course"**.
- Main page displays a large heading **"HTML5 Document Structure"** and paragraph text **"Understanding head and body tags is essential for every developer."**.

## 🧪 Try It Yourself

1. Create an `index.html` file in VS Code.
2. Customize the `<title>` tag with your project name.
3. Add a custom summary in `<meta name="description">`.
4. Add an `<h1>` heading and `<p>` paragraph inside `<body>`.
5. Open Developer Tools in your browser (`F12`) to inspect the rendered `<head>` and `<body>` tags.

## ⚠️ Common Mistakes

- **Placing visible content inside `<head>`:** Placing `<p>` or `<h1>` tags inside `<head>` is invalid and breaks DOM parsing.
- **Omitting the viewport meta tag:** Causes mobile screens to render desktop pages zoomed-out.
- **Forgetting `<title>`:** Leaves browser tab headers displaying raw file paths (e.g., `file:///C:/index.html`).

## 🌐 Real-World Usage

Every professional website on the internet includes boilerplate metadata to ensure search engine indexability, mobile device responsiveness, and social media card previews.

## 🔗 Related Topics

- [Introduction to HTML](02-introduction.md)
- [Headings](04-headings.md)
- [Meta Tags & Head Metadata](27-meta-tags.md)

## 💡 Remember

- `<head>` holds metadata and browser settings (invisible on page).
- `<body>` holds all visible content.
- Always include `<meta name="viewport">` for mobile responsiveness.

## 🧭 Navigation

[← Previous: Introduction](02-introduction.md) | [HTML Home](00-README.md) | [Next: Headings →](04-headings.md)
