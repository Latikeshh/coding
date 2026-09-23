# Semantic HTML

> 🟡 Intermediate

## 📖 Definition

Semantic HTML uses tags that describe what their content means, such as `<header>`, `<main>`, and `<footer>`.

## 🤔 Why Do We Use It?

Meaningful tags make code easier to understand and help search engines and screen readers navigate a page.

## 🧠 Simple Explanation

Instead of labeling every room in a building “box,” use labels such as entrance, kitchen, and exit. Semantic tags do the same for a page.

## 📝 Syntax

```html
<header>My Garden Blog</header>
<main>
  <article>How to grow basil</article>
</main>
<footer>© 2026</footer>
```

## 💡 Practical Example

On a news page, use `<nav>` for menu links, `<main>` for the central content, and `<article>` for each news story. The code then reads like a simple description of the page.

## ✅ Remember

Semantic tags often look like ordinary blocks at first. Their main value is the meaning they add, which CSS can style later.

- `<header>` introduces a page or section.
- `<main>` contains the main content once per page.
- `<footer>` contains closing information.

## 💻 Example

```html
<header>
  <h1>City Walks</h1>
</header>
<main>
  <article>
    <h2>Riverside Route</h2>
    <p>A calm two-kilometre walk.</p>
  </article>
</main>
<footer>Contact: walks@example.com</footer>
```

## 👀 Output

The page has a title area, one main article, and contact information at the end.

## 🔍 How It Works

Each element names its job. A screen reader can use those landmarks to move quickly to the main content or page header.

## ⚠️ Common Mistakes

- Do not use more than one `<main>` on a page.
- Do not use semantic tags only because they sound modern; choose the one that matches the content.

## 🧪 Try It Yourself

Replace three generic page sections with `header`, `main`, and `footer` where appropriate.

## 🎯 Mini Challenge

Create a blog post outline using `header`, `nav`, `main`, `article`, and `footer`.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Iframes](21-iframes.md) | [Next: HTML5 Features →](23-html5-features.md)
