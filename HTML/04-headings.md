# Headings (`<h1>` to `<h6>`)

> 🟢 Beginner

## 📖 Definition

HTML provides six heading elements, **`<h1>`** through **`<h6>`**, which establish the document hierarchy and structural outline of a webpage. `<h1>` represents the primary top-level heading, while `<h2>` through `<h6>` represent sub-sections of decreasing structural importance.

## 🌍 Multilingual Summary

### English
HTML headings (`<h1>` to `<h6>`) define document structure and hierarchy. Choose heading levels based on content outline rather than visual font size.

### Hindi
HTML headings (`<h1>` se `<h6>`) document ka structural outline aur hierarchy define karte hain. Heading level font size ke bajaye document structure ke according choose karein.

### Marathi
HTML headings (`<h1>` te `<h6>`) document cha outline ani hierarchy tharavtat. Heading shodhnyasathi font size peksha mahitichya rachnevar laksh dya.

## 🤔 Why Do We Use Them?

Headings structure text content into readable sections. Browsers, search engine crawlers (SEO), and screen readers rely on heading outlines to understand page topics and content relationships:
1. **Readability:** Visitors scan headings to locate relevant information quickly.
2. **Accessibility (a11y):** Screen reader users navigate pages by jumping from heading to heading.
3. **SEO:** Search engines use heading tags to index main topics and keywords.

## 🧱 Structural Hierarchy vs. Visual Font Size

A common beginner mistake is choosing heading tags based on default visual font size:
- **Incorrect approach:** Using `<h3>` because you want smaller text.
- **Correct approach:** Use CSS (`font-size`) to adjust text sizing. Choose HTML heading tags strictly based on **content structure**:

```text
<h1> Page Main Title (Level 1)
 ├── <h2> Major Section Heading (Level 2)
 │    ├── <h3> Subsection Title (Level 3)
 │    └── <h3> Subsection Title (Level 3)
 └── <h2> Another Major Section (Level 2)
```

## 📐 Syntax & Heading Scale

```html
<h1>Heading Level 1 (Primary Page Title)</h1>
<h2>Heading Level 2 (Major Section)</h2>
<h3>Heading Level 3 (Subsection)</h3>
<h4>Heading Level 4 (Sub-subsection)</h4>
<h5>Heading Level 5 (Minor Section)</h5>
<h6>Heading Level 6 (Lowest Level Heading)</h6>
```

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Developer Portfolio - Headings Example</title>
</head>
<body>

  <h1>Developer Portfolio</h1>

  <h2>About Me</h2>
  <p>I am a computer science student passionate about frontend web development.</p>

  <h2>My Web Projects</h2>

  <h3>1. Student Learning Portal</h3>
  <p>A web application providing structured coding tutorials for beginners.</p>

  <h3>2. E-Commerce Store Prototype</h3>
  <p>An accessible frontend prototype for an online bookstore.</p>

  <h2>Contact Information</h2>
  <p>Email me at contact@example.com for inquiries.</p>

</body>
</html>
```

## 👀 Output / What You Will See

The browser renders a clear hierarchy: **Developer Portfolio** as the largest main heading, followed by major section headings (**About Me**, **My Web Projects**, **Contact Information**) and subsection headings (**1. Student Learning Portal**, **2. E-Commerce Store Prototype**).

## 💡 Best Practice Rules for Headings

- **One `<h1>` Per Page:** Use a single `<h1>` for the primary title of the page to maintain a clear outline for screen readers and search engines.
- **Sequential Hierarchy:** Avoid skipping heading levels (e.g., jumping directly from `<h1>` to `<h4>`). Always follow a logical order (`<h1>` → `<h2>` → `<h3>`).

## 🧪 Try It Yourself

1. Create a webpage for a recipe or blog article.
2. Use `<h1>` for the main title.
3. Use `<h2>` for major sections like "Ingredients" and "Instructions".
4. Use `<h3>` for individual sub-steps under instructions.

## ⚠️ Common Mistakes

- **Using headings purely for bold text:** Wrapping regular text in `<h4>` just to make it bold (use `<strong>` or CSS instead).
- **Choosing headings based on visual font size:** Always separate structural markup (HTML) from visual presentation (CSS).

## 🌐 Real-World Usage

All major websites (blogs, news outlets, e-commerce stores) use structured headings so users can skim content effortlessly and search engine crawlers can index pages correctly.

## 🔗 Related Topics

- [Document Structure](03-html-document-structure.md)
- [Paragraphs](05-paragraphs.md)
- [Text Formatting](06-text-formatting.md)

## 💡 Remember

- `<h1>` is the primary main heading.
- Heading tags define document structure, NOT font size.
- Maintain sequential order (`<h1>` → `<h2>` → `<h3>`).

## 🧭 Navigation

[← Previous: Document Structure](03-html-document-structure.md) | [HTML Home](00-README.md) | [Next: Paragraphs →](05-paragraphs.md)
