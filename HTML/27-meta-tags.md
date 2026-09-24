# Meta Tags & Head Metadata

> 🟡 Intermediate

## 📖 Definition

**Meta tags** are `<meta>` elements placed inside the `<head>` section of an HTML document. They provide structured machine-readable metadata about the webpage—such as character encoding, viewport settings, search engine descriptions, author information, and social media preview properties—to browsers, search engine crawlers, and web services.

## 🌍 Multilingual Summary

### English
Meta tags inside `<head>` configure character encoding, mobile viewport scaling, SEO page descriptions, canonical URLs, and social media preview metadata.

### Hindi
`<head>` section ke andar `<meta>` tags character encoding, mobile viewport settings, search engine description (SEO), aur social media preview cards define karne ke liye hote hain.

### Marathi
`<head>` madhye aasnare `<meta>` tags character encoding, mobile screen settings, SEO description, ani social media preview metadata configure kartat.

## 🤔 Why Do We Use Meta Tags?

1. **Mobile Responsiveness:** Ensures webpages render correctly scaled on smartphones and tablets.
2. **Search Engine Optimization (SEO):** Helps search engine crawlers index your page content and display informative summary snippets in search results.
3. **Social Media Cards:** Controls how links look when shared on platforms like X (Twitter), LinkedIn, and WhatsApp.
4. **Security & Browser Instructions:** Configures content security policies, refresh rates, and character encodings.

## 📐 Essential Meta Tags Reference

```html
<head>
  <!-- 1. Character Encoding (UTF-8 supports all languages, symbols, and emojis) -->
  <meta charset="UTF-8">

  <!-- 2. Mobile Viewport (Essential for responsive CSS layouts) -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- 3. Search Engine Page Description (SEO snippet in search results) -->
  <meta name="description" content="A comprehensive guide to HTML meta tags, viewport settings, and head metadata for web developers.">

  <!-- 4. Keywords (Legacy search metadata; lower priority today) -->
  <meta name="keywords" content="HTML, meta tags, head metadata, web development, SEO">

  <!-- 5. Page Author -->
  <meta name="author" content="Latikesh Sharma">

  <!-- 6. Search Engine Crawling Instructions (index, follow) -->
  <meta name="robots" content="index, follow">

  <!-- 7. Favicon Icon Link -->
  <link rel="icon" href="favicon.ico" type="image/x-icon">

  <!-- 8. Canonical URL (Prevents duplicate content penalties) -->
  <link rel="canonical" href="https://example.com/html/27-meta-tags">

  <!-- Document Title -->
  <title>Meta Tags & Head Metadata - HTML Course</title>
</head>
```

## 🔍 Open Graph & Social Media Sharing Metadata

When users share your webpage link on WhatsApp, Facebook, LinkedIn, or Twitter, social platforms parse **Open Graph (`og:`)** and **Twitter Card (`twitter:`)** meta tags to generate rich visual card previews:

```html
<!-- Open Graph Metadata for Facebook, WhatsApp, LinkedIn -->
<meta property="og:title" content="Master HTML Meta Tags & Head Metadata">
<meta property="og:description" content="Learn how to configure viewport, character encoding, SEO snippets, and social media cards in HTML.">
<meta property="og:image" content="https://example.com/images/meta-tags-banner.jpg">
<meta property="og:url" content="https://example.com/html/27-meta-tags">
<meta property="og:type" content="article">

<!-- Twitter Card Metadata -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Master HTML Meta Tags & Head Metadata">
<meta name="twitter:description" content="Learn how to configure viewport and SEO snippets in HTML.">
<meta name="twitter:image" content="https://example.com/images/meta-tags-banner.jpg">
```

## 💻 Complete HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn all about HTML meta tags and head metadata structure.">
  <meta name="author" content="Coding Notes">

  <!-- Open Graph -->
  <meta property="og:title" content="HTML Meta Tags Guide">
  <meta property="og:description" content="Step-by-step tutorial on meta tags for responsive design and SEO.">
  <meta property="og:type" content="website">

  <title>HTML Meta Tags Tutorial</title>
</head>
<body>

  <header>
    <h1>HTML Head Metadata Guide</h1>
  </header>

  <main>
    <p>Meta tags inside the head section configure how search engines and social platforms view your site.</p>
  </main>

</body>
</html>
```

## 👀 Output / What You Will See

- The browser tab displays: **"HTML Meta Tags Tutorial"**.
- Search engine crawlers index the page description summary.
- Mobile devices scale the layout responsively to match device width.
- Social media apps display a rich card banner when the link is shared.

## 🧪 Try It Yourself

1. Create an HTML file and add a custom `<meta name="description">` summary.
2. Add `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.
3. Add Open Graph tags (`og:title`, `og:description`, `og:image`) and test sharing link previews.

## ⚠️ Common Mistakes

- **Omitting the viewport tag:** Causes mobile screens to render desktop pages zoomed-out.
- **Writing overly long meta descriptions:** Search engines truncate descriptions longer than ~160 characters.
- **Placing `<meta>` tags inside `<body>`:** Meta tags belong strictly inside the `<head>` section.

## 🌐 Real-World Usage

All professional websites, e-commerce stores, and blog platforms use `<meta>` tags for mobile scaling, SEO rankings, and rich social media link sharing.

## 🔗 Related Topics

- [Document Structure](03-html-document-structure.md)
- [HTML SEO & Open Graph Metadata](32-html-seo-and-open-graph.md)

## 💡 Remember

- Place all `<meta>` tags inside `<head>`.
- `<meta name="viewport">` is required for mobile responsiveness.
- Open Graph tags (`og:`) customize social media link previews.

## 🧭 Navigation

[← Previous: HTML History](26-html-history.md) | [HTML Home](00-README.md) | [Next: Advanced Form Controls →](28-advanced-form-controls.md)
