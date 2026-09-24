# HTML SEO & Open Graph Metadata

> 🟡 Intermediate

## 📖 Definition

**HTML SEO (Search Engine Optimization)** and **Open Graph (OG)** metadata involve structuring your HTML markup, head tags, semantic elements, and social card properties so search engine crawlers (Google, Bing) and social media platforms (WhatsApp, LinkedIn, X/Twitter, Facebook) can accurately index, rank, and preview your web pages.

## 🌍 Multilingual Summary

### English
Structure HTML for SEO using descriptive `<title>`, `<meta name="description">`, canonical URLs, semantic tags, heading hierarchy, image `alt` attributes, and Open Graph metadata for rich social sharing cards.

### Hindi
HTML ko SEO aur social sharing ke liye optimize karne ke liye descriptive `<title>`, `<meta name="description">`, canonical URLs, semantic tags (`<main>`, `<article>`), heading hierarchy (`<h1>`-`<h6>`), image `alt` text, aur Open Graph tags (`og:title`, `og:image`) use karein.

### Marathi
HTML la SEO ani social sharing sathi optimize karanyasathi descriptive `<title>`, `<meta name="description">`, canonical URLs, semantic tags (`<main>`, `<article>`), heading hierarchy (`<h1>`-`<h6>`), image `alt` text, ani Open Graph tags (`og:title`, `og:image`) vaprtat.

## 🤔 Why Do We Need HTML SEO & Open Graph Metadata?

1. **Search Engine Rankings:** Search engine crawlers use page title tags, meta descriptions, semantic tags, and headings to understand what your page is about and rank it in search results.
2. **Click-Through Rate (CTR):** Compelling meta descriptions and social preview cards increase clicks from search engines and social media feeds.
3. **Preventing Duplicate Content:** Canonical URLs prevent search engines from penalizing duplicate page URLs.

## 🧱 7 Technical HTML SEO Best Practices

1. **Descriptive `<title>` Tag:** Keep titles under 60 characters with primary keywords placed near the beginning (`<title>Learn HTML Meta Tags & SEO - Coding Notes</title>`).
2. **Compelling `<meta name="description">`:** Summarize page content in 150–160 characters to serve as the search result snippet.
3. **Canonical Link (`<link rel="canonical">`):** Specifies the authoritative original URL of a page.
4. **Single `<h1>` & Sequential Headings:** Maintain a logical heading outline (`<h1>` → `<h2>` → `<h3>`).
5. **Semantic Structural Tags:** Wrap primary content inside `<main>` and `<article>` instead of unlabelled `<div>` tags.
6. **Descriptive Image `alt` Text:** Provides search engines and screen readers with context about images.
7. **Accessible Hyperlinks:** Use descriptive anchor text (`<a href="course.html">Explore Web Course</a>`) instead of generic *"click here"*.

## 📱 Open Graph & Twitter Card Metadata Reference

```html
<head>
  <!-- Page Title & Primary Meta Description -->
  <title>Complete HTML5 & Web Fundamentals Guide</title>
  <meta name="description" content="Master modern HTML5, semantic elements, forms, accessibility, and SEO best practices in this complete step-by-step tutorial.">
  
  <!-- Canonical URL -->
  <link rel="canonical" href="https://example.com/html/learn-html">

  <!-- Open Graph Protocol (Facebook, WhatsApp, LinkedIn) -->
  <meta property="og:site_name" content="Coding Notes">
  <meta property="og:title" content="Complete HTML5 & Web Fundamentals Guide">
  <meta property="og:description" content="Master modern HTML5, semantic elements, forms, and SEO best practices.">
  <meta property="og:image" content="https://example.com/images/og-html-banner.jpg">
  <meta property="og:url" content="https://example.com/html/learn-html">
  <meta property="og:type" content="article">

  <!-- Twitter / X Card Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Complete HTML5 & Web Fundamentals Guide">
  <meta name="twitter:description" content="Master modern HTML5, semantic elements, and SEO best practices.">
  <meta name="twitter:image" content="https://example.com/images/og-html-banner.jpg">
</head>
```

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Learn HTML SEO fundamentals and Open Graph social card optimization.">
  <link rel="canonical" href="https://example.com/html/32-html-seo-and-open-graph">

  <!-- Open Graph Tags -->
  <meta property="og:title" content="HTML SEO & Open Graph Tutorial">
  <meta property="og:description" content="Optimize web pages for search engines and social sharing.">
  <meta property="og:image" content="https://example.com/images/seo-banner.jpg">
  <meta property="og:type" content="article">

  <title>HTML SEO & Open Graph Metadata - Coding Notes</title>
</head>
<body>

  <header>
    <h1>HTML Search Engine Optimization (SEO) Guide</h1>
  </header>

  <main>
    <article>
      <h2>Optimizing Web Pages for Search Engines</h2>
      <p>Semantic HTML5 elements like <code>&lt;main&gt;</code> and <code>&lt;article&gt;</code> signal primary content to search engine crawlers.</p>
    </article>
  </main>

  <footer>
    <p>&copy; 2026 Coding Notes</p>
  </footer>

</body>
</html>
```

## 👀 Output / What You Will See

- Search engine crawlers parse title and meta description snippets for search results.
- Social media platforms render rich image preview cards when the page link is shared on WhatsApp, Twitter, or LinkedIn.

## 🧪 Try It Yourself

1. Add Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`) to an HTML file.
2. Add a `<link rel="canonical">` tag pointing to your canonical page URL.
3. Verify your heading outline follows a strict `<h1>` → `<h2>` sequence.

## ⚠️ Common Mistakes

- **Duplicate `<title>` or meta descriptions across pages:** Prevents search engines from indexing pages distinctly.
- **Using relative image URLs in `og:image`:** Social sharing platforms require absolute image URLs (`https://domain.com/image.jpg`).

## 🌐 Real-World Usage

All e-commerce stores, news portals, blogs, and marketing websites rely on HTML SEO and Open Graph metadata to maximize search engine visibility and social media share engagement.

## 🔗 Related Topics

- [Document Structure](03-html-document-structure.md)
- [Semantic HTML](22-semantic-html.md)
- [Meta Tags & Head Metadata](27-meta-tags.md)

## 💡 Remember

- Keep `<title>` under 60 characters and `<meta name="description">` under 160 characters.
- Use canonical URLs (`<link rel="canonical">`) to prevent duplicate content issues.
- `og:image` MUST use absolute URLs (`https://...`).
- Combine semantic HTML5 structure with Open Graph metadata for maximum SEO and shareability.

## 🧭 Navigation

[← Previous: Global Attributes](31-global-and-data-attributes.md) | [HTML Home](00-README.md)
