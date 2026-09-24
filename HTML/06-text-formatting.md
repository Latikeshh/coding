# Text Formatting (`<strong>`, `<em>`, `<b>`, `<i>`, etc.)

> 🟢 Beginner

## 📖 Definition

HTML provides semantic text-formatting elements that add visual styling and structural meaning to specific words, phrases, or characters inside body text.

## 🌍 Multilingual Summary

### English
Use `<strong>` for strong importance (bold) and `<em>` for emphasized text (italic). Use `<b>` and `<i>` when you want visual styling without implying extra semantic importance.

### Hindi
Important words ke liye `<strong>` (bold) aur emphasis ke liye `<em>` (italic) use karein. Bina extra semantic importance ke sirf visual style ke liye `<b>` aur `<i>` tags use hote hain.

### Marathi
Mhatvachya shabdansathi `<strong>` ani bhar dinyasathi `<em>` vapra. Sirf visual style sathi `<b>` ani `<i>` tags vaparle jatat.

## 🔑 Semantic Tags vs. Visual Tags Reference

| Tag | Purpose & Semantic Meaning | Default Visual Appearance |
|---|---|---|
| **`<strong>`** | Strong importance, urgency, or warning. Screen readers emphasize this text verbally. | **Bold text** |
| **`<b>`** | Draws visual attention without implying semantic importance (e.g. key terms). | **Bold text** |
| **`<em>`** | Stress emphasis that changes sentence meaning when spoken aloud. | *Italic text* |
| **`<i>`** | Alternate voice, technical terms, foreign phrases, thoughts, or publication titles. | *Italic text* |
| **`<mark>`** | Highlighted text indicating relevance or active search matches. | <mark>Yellow background highlight</mark> |
| **`<small>`** | Side comments, copyright notices, legal fine print, or disclaimers. | Small text |
| **`<del>`** | Deleted or obsolete text (e.g., original price before discount). | ~~Strikethrough text~~ |
| **`<ins>`** | Newly inserted text (e.g., updated discounted price). | <u>Underlined text</u> |
| **`<sub>`** | Subscript characters (e.g., chemical formula H<sub>2</sub>O). | Lowered subscript text |
| **`<sup>`** | Superscript characters (e.g., math exponent X<sup>2</sup> or ordinal 1<sup>st</sup>). | Raised superscript text |
| **`<code>`** | Inline computer code snippets (displayed in monospace font). | `Monospace font` |
| **`<hr>`** | Thematic break or horizontal divider between topics. | Horizontal line divider |

## 📐 Syntax & Examples

```html
<p><strong>Warning:</strong> Limited tickets remaining!</p>
<p>Original Price: <del>$99</del> <ins>$49</ins> (<mark>50% OFF</mark>)</p>
<p>Water chemical formula: H<sub>2</sub>O</p>
<p>Pythagorean theorem: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup></p>
```

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>E-Commerce Product Offer</title>
</head>
<body>

  <h1>Wireless Headphones Super Sale</h1>

  <p><strong>Urgent Notice:</strong> Limited stock available at discounted pricing!</p>

  <p>Original Price: <del>$99.99</del> <ins>$49.99</ins> (<mark>50% OFF</mark>)</p>

  <p>Features active noise cancellation and Bluetooth <i>5.3</i> technology.</p>

  <p>Kinetic energy formula: <code>E<sub>k</sub> = ½mv<sup>2</sup></code></p>

  <hr>

  <p><small>&copy; 2026 TechStore Inc. All rights reserved. Terms and conditions apply.</small></p>

</body>
</html>
```

## 👀 Output / What You Will See

- **"Urgent Notice:"** renders in bold with strong importance.
- **"$99.99"** renders with strikethrough, and **"$49.99"** renders underlined.
- **"50% OFF"** renders with a bright yellow highlight background.
- **"E<sub>k</sub> = ½mv<sup>2</sup>"** displays subscript `k` and superscript `2`.
- **"© 2026..."** renders as fine-print text below a horizontal line.

## 🧪 Try It Yourself

Write a paragraph for a bookstore promotion featuring:
1. A book title wrapped in `<i>`.
2. A warning notice wrapped in `<strong>`.
3. An original price wrapped in `<del>` and a sale price wrapped in `<ins>`.
4. A chemical formula like H<sub>2</sub>SO<sub>4</sub> using `<sub>`.

## ⚠️ Common Mistakes

- **Confusing `<b>`/`<i>` with `<strong>`/`<em>`:** Use `<strong>` and `<em>` when the semantic meaning matters for screen readers and search engines.
- **Using `<ins>` instead of CSS for underline:** Do not use `<ins>` purely to underline plain text; use CSS `text-decoration: underline`.

## 🌐 Real-World Usage

E-commerce sites, technical blogs, news platforms, and documentation portals use semantic text formatting to highlight key terms, discount pricing, mathematical formulas, and legal disclaimers accessibly.

## 🔗 Related Topics

- [Paragraphs](05-paragraphs.md)
- [HTML Entities](18-html-entities.md)

## 💡 Remember

- `<strong>` = Important bold text.
- `<em>` = Emphasized italic text.
- `<sub>` = Subscript (lowered text).
- `<sup>` = Superscript (raised text).

## 🧭 Navigation

[← Previous: Paragraphs](05-paragraphs.md) | [HTML Home](00-README.md) | [Next: Links →](07-links.md)
