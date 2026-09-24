# Semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`, etc.)

> 🟡 Intermediate

## 📖 Definition

**Semantic HTML** means using HTML elements that clearly describe the structural meaning and role of their content to web browsers, search engines (SEO), developers, and assistive screen readers, rather than wrapping everything inside meaningless generic `<div>` containers.

## 🌍 Multilingual Summary

### English
Semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<time>`, `<details>`) describe their structural content role to search engines and screen readers.

### Hindi
Semantic tags generic `<div>` ke bajaye page layout sections ko meaningful names dete hain (jaise `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`), jo SEO aur accessibility (a11y) ke liye essential hain.

### Marathi
Semantic tags generic `<div>` peksha page layout sections na arthapurna nave detat, jyashamule SEO ani accessibility (a11y) changli hote.

## 🤔 Why Do We Use Semantic HTML?

1. **Accessibility Landmarks:** Screen reader users navigate pages by jumping directly between semantic landmarks (skipping straight to `<main>` or `<nav>`).
2. **SEO Optimization:** Search engine crawlers prioritize content inside `<article>` and `<main>` over footers or sidebars.
3. **Code Maintainability:** Developers can read `<article>` and `<nav>` instantly without deciphering unlabelled `<div>` soup.

## 🧱 Key Semantic Layout Tags Reference

| Semantic Tag | Structural Purpose & Role | Best Practice Rule |
|---|---|---|
| **`<header>`** | Introductory header block for a page or section (contains logo, site title, search bar, navigation). | Can appear at top of page or top of an `<article>`. |
| **`<nav>`** | Major navigation link blocks. | Use for main site menus, table of contents, or pagination links. |
| **`<main>`** | Unique central content of the webpage. | **Strict Rule: Only ONE `<main>` tag per HTML page.** |
| **`<section>`** | Standalone thematic grouping of content, usually with its own heading. | Use for chapters, major feature sections, or tabbed panels. |
| **`<article>`** | Self-contained, independently reusable content unit (blog post, news article, forum comment, product card). | Should make complete sense even if syndicated outside the site. |
| **`<aside>`** | Tangentially related side content (sidebar links, author bio, related posts, ads). | Positioned alongside main content. |
| **`<footer>`** | Footer block containing copyright notices, privacy policy links, or contact info. | Positioned at bottom of page or section. |
| **`<time>`** | Machine-readable date/time stamp using `datetime="YYYY-MM-DD"`. | Helps search engines parse publication dates. |
| **`<details>` & `<summary>`** | Native interactive collapsible widget (accordion/FAQ toggle). | `<summary>` defines the clickable header phrase. |

## 💻 Code Example

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
        <p>Published on <time datetime="2026-09-24">September 24, 2026</time></p>
      </header>

      <section>
        <h3>Why Semantics Matter</h3>
        <p>Semantic markup provides meaning to search engines and screen readers alike.</p>
      </section>

      <!-- Native Collapsible FAQ Section -->
      <details>
        <summary>Click here for Frequently Asked Questions</summary>
        <p>Semantic HTML tags are block-level elements by default and require no extra JavaScript to expand.</p>
      </details>
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
    <p>&copy; 2026 Tech Insights Blog. All rights reserved.</p>
  </footer>

</body>
</html>
```

## 👀 Output / What You Will See

A structured blog layout featuring a site header, navigation menu, main article post with publication date, native collapsible FAQ widget, related sidebar links, and a footer copyright bar.

## 🧪 Try It Yourself

1. Structure a personal blog layout using `<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, and `<footer>`.
2. Add a `<time datetime="YYYY-MM-DD">` publication timestamp inside the article.
3. Add a native collapsible `<details>` and `<summary>` FAQ element.

## ⚠️ Common Mistakes

- **Using multiple `<main>` tags on a single page:** Invalid HTML. Include exactly one `<main>` per document.
- **Using `<section>` without a heading:** A `<section>` should almost always contain an `<h2>`–`<h6>` heading.
- **Assuming semantic HTML solves all accessibility needs:** You still need proper form labels, keyboard focus, and high text contrast.

## 🌐 Real-World Usage

All modern websites and web applications use semantic HTML5 tags for clean architecture, SEO indexing, and screen reader accessibility.

## 🔗 Related Topics

- [Div and Span](14-div-and-span.md)
- [Modern HTML5 Features](23-html5-features.md)
- [Accessibility Basics](24-accessibility-basics.md)

## 💡 Remember

- `<main>` = Unique primary page content (only ONE per page).
- `<article>` = Self-contained post or card unit.
- `<header>`, `<nav>`, `<section>`, `<aside>`, `<footer>` define page architecture.

## 🧭 Navigation

[← Previous: Iframes](21-iframes.md) | [HTML Home](00-README.md) | [Next: HTML5 Features →](23-html5-features.md)
