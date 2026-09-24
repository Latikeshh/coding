# History & Standards of CSS

> 🟢 Beginner

## 📖 Definition

**CSS** was proposed by Norwegian computer scientist **Håkon Wium Lie** on October 10, 1994, while working with Tim Berners-Lee at CERN. It was developed in collaboration with Bert Bos and standardized by the **World Wide Web Consortium (W3C)** to separate HTML document structure from visual presentation.

## 🌐 Multilingual Explanation

### English
CSS was invented to separate HTML markup structure from visual styling. Today, CSS is developed as modular specifications maintained by W3C working groups.

### Hindi
CSS ki khoj 1994 mein HTML structure aur design ko alag-alag rakhne ke liye hui thi. Aaj W3C ise modular standards ke roop mein develop karta hai.

### Marathi
HTML madhil content ani design vegle thevnyasathi CSS chi nirmiti 1994 madhye zali.

## 🤔 Why Was CSS Created?

In early Web history (early 1990s), HTML tags like `<font>`, `<center>`, and `color` attributes were added directly into HTML documents to control styling. This created messy, repetitive code that was extremely difficult to maintain across multi-page websites. CSS solved this by extracting all styling into reusable stylesheets.

## 🧠 Simple Explanation

Imagine if every page of a 500-page textbook required manual printing instructions on every sentence. CSS acts like a centralized master style guide that applies styling rules across all 500 pages automatically from one location.

## 📜 Historical Milestones Timeline

```text
1994 ──► Proposed by Håkon Wium Lie at CERN
1996 ──► CSS Level 1 W3C Recommendation published (basic font, color, margin rules)
1998 ──► CSS Level 2 published (positioning, z-index, media types)
2011 ──► CSS2.1 standardized as a refined Recommendation
2010s+ ──► CSS3 introduced modular specifications (Flexbox, Grid, Animations, Custom Properties)
Present ──► CSS is developed in individual evolving modules (Selectors L4, Grid L2, Color L4/L5)
```

## 📚 Major CSS Generations Compared

| Version / Standard | Introduced Capabilities | Key Innovations |
|---|---|---|
| **CSS1 (1996)** | Basic styling | Font properties, text alignment, basic margins/padding |
| **CSS2 / CSS2.1 (1998/2011)** | Advanced layouts | Absolute/Relative Positioning, `z-index`, media types |
| **CSS3 (2011+)** | Modular evolution | Flexbox, CSS Grid, Transitions, Transforms, `@keyframes`, Variables |
| **Modern Modular CSS** | Living specifications | Container Queries, `:has()`, Fluid Sizing (`clamp()`), Logical Properties |

## 💻 Example

Modern CSS allows clean modular rules that adapt to user theme preferences:

```css
/* Modern CSS with custom properties & prefers-color-scheme */
:root {
  --bg-color: #ffffff;
  --text-color: #222222;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #121212;
    --text-color: #e0e0e0;
  }
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: system-ui, sans-serif;
}
```

## 👀 What You Will See

The webpage automatically toggles between a light and dark theme based on the user's operating system dark mode settings!

## 🧪 Try It Yourself

Look up the `prefers-color-scheme` media feature in browser DevTools and toggle dark mode simulation to observe instant CSS theme adaptation.

## ⚠️ Common Mistakes

- Thinking CSS3 is a single monolithic release—CSS is now updated as independent individual modules.
- Using obsolete HTML presentational tags (`<font>`, `<center>`) instead of modern CSS stylesheets.

## 💡 Real-World Usage

Modern web standards managed by W3C working groups ensure that CSS code written today works seamlessly across Chrome, Firefox, Safari, and Edge on billions of mobile devices and computers.

## 🔗 Related Topics

- [Introduction to CSS](02-introduction-to-css.md)
- [Types of CSS](04-types-of-css.md)
- [CSS Architecture & Dark Mode](41-css-architecture-and-dark-mode.md)

## ✅ Remember

- Håkon Wium Lie proposed CSS in 1994 at CERN.
- CSS separates HTML content from visual presentation.
- W3C maintains modern CSS through modular specifications.

## 🧭 Navigation

[← Previous](02-introduction-to-css.md) | [CSS Home](00-README.md) | [Next →](04-types-of-css.md)
