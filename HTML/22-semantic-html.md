# Semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`, etc.)

> 🟡 Intermediate

## 📖 Definition

**Semantic HTML** means using HTML tags that clearly describe the structural meaning and role of their content to web browsers, search engines (SEO), and accessibility screen readers, rather than wrapping everything inside meaningless generic `<div>` containers.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
Semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<time>`) describe their structural content role to search engines and screen readers.

### Hindi
सिमेंटिक टैग्स (जैसे `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`) कंटेंट के अर्थ को स्पष्ट करते हैं, जिससे SEO और एक्सेसिबिलिटी बेहतर होती है।

### Marathi
सिमेंटिक टॅग्ज मजकुराचा अर्थ स्पष्ट करतात, ज्यामुळे सर्च इंजिन (SEO) आणि स्क्रीन रीडर्सना समजणे सोपे जाते.

### Hinglish
Semantic tags generic `<div>` ke bajaye page layout sections ko meaningful names dete hain, jo SEO aur accessibility (a11y) ke liye essential hain.

## 🧱 Key Semantic Layout Tags Reference

| Semantic Tag | Structural Meaning & Role | Best Practice Rule |
|---|---|---|
| **`<header>`** | Introductory header block for a page or section (contains logo, site title, search bar, navigation). | Can appear at top of page or top of `<article>`. |
| **`<nav>`** | Major navigation link blocks. | Use for main site menus, table of contents, or pagination links. |
| **`<main>`** | Unique central content of the webpage. | **Strict Rule: Only ONE `<main>` tag per HTML page.** |
| **`<section>`** | Standalone thematic grouping of content, usually with its own heading. | Use for chapters, major feature sections, or tabbed panels. |
| **`<article>`** | Self-contained, independently reusable content unit (blog post, news article, forum comment, product review). | Should make sense even if syndicated outside the site. |
| **`<aside>`** | Tangentially related side content (sidebar links, author bio, related posts, ads). | Positioned alongside main content. |
| **`<footer>`** | Footer block containing copyright notices, privacy policy links, or contact info. | Positioned at bottom of page or section. |
| **`<time>`** | Machine-readable date/time stamp using `datetime="YYYY-MM-DD"`. | Helps search engines parse publication dates. |

## 🌟 Benefits of Semantic HTML

1. **Accessibility (a11y):** Screen reader users navigate using landmark shortcuts (jumping directly to `<main>` or `<nav>`).
2. **SEO (Search Engine Optimization):** Google crawlers prioritize content inside `<article>` and `<main>` over footers or sidebars.
3. **Clean Code Maintainability:** Developers can read `<article>` and `<nav>` instantly without deciphering `<div class="box-12">`.

## 📝 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Tech Blog - Semantic Layout</title>
</head>
<body>

  <!-- Site Header & Main Navigation -->
  <header>
    <h1>Tech Insights Blog</h1>
    <nav>
      <a href="index.html">Home</a> |
      <a href="articles.html">Articles</a> |
      <a href="about.html">About</a>
    </nav>
  </header>

  <!-- Unique Central Page Content -->
  <main>

    <!-- Self-Contained Blog Post Article -->
    <article>
      <header>
        <h2>Getting Started with Semantic HTML5</h2>
        <p>Published on <time datetime="2026-09-24">September 24, 2026</time> by Latikesh</p>
      </header>

      <section>
        <h3>Why Semantics Matter</h3>
        <p>Semantic markup provides meaning to search engines and screen readers alike.</p>
      </section>

      <section>
        <h3>Core Principles</h3>
        <p>Replace generic containers with meaningful elements whenever possible.</p>
      </section>
    </article>

    <!-- Related Sidebar -->
    <aside>
      <h3>Related Topics</h3>
      <ul>
        <li><a href="css-flexbox.html">CSS Flexbox Guide</a></li>
        <li><a href="accessibility.html">Web Accessibility 101</a></li>
      </ul>
    </aside>

  </main>

  <!-- Page Footer -->
  <footer>
    <p>© 2026 Tech Insights Blog. All rights reserved.</p>
  </footer>

</body>
</html>
```

## ⚠️ Common Mistakes

- **Using multiple `<main>` tags on a single page:** Invalid HTML.
- **Using `<section>` without a heading:** A `<section>` should almost always contain an `<h2>`–`<h6>` heading.
- **Using `<div>` for everything ("Div Soup"):** Prevents screen readers from discovering landmark navigation shortcuts.

## 🧪 Try It Yourself

Structure a simple personal blog layout using:
1. `<header>` with an `<h1>` blog title and `<nav>` links.
2. `<main>` containing one `<article>` and one `<aside>` sidebar.
3. `<footer>` with copyright information.

## 🎯 Mini Challenge

Take a layout that uses generic `<div id="header">`, `<div id="nav">`, `<div id="main">`, and `<div id="footer">` tags, and refactor it into clean semantic HTML5.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Iframes](21-iframes.md) | [Next: HTML5 Features →](23-html5-features.md)
