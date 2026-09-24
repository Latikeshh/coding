# Generic Containers (`<div>` and `<span>`)

> 🟡 Intermediate

## 📖 Definition

**`<div>`** (Division) is a generic **block-level** container used to group elements for layout styling or scripting. **`<span>`** is a generic **inline-level** container used to wrap small snippets of text or elements within a sentence without forcing a line break.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
`<div>` is a generic block container (starts on a new line and takes full width). `<span>` is a generic inline container (stays in the same line). Prefer semantic tags when available.

### Hindi
`<div>` एक ब्लॉक-लेवल कंटेनर (नया पैराग्राफ/लाइन लेता है) है। `<span>` एक इनलाइन कंटेनर (लाइन के अंदर शब्द या टेक्स्ट ग्रुप करने के लिए) है। जहाँ संभव हो, सिमेंटिक टैग्स का इस्तेमाल करें।

### Marathi
`<div>` हा ब्लॉक कंटेनर (नवीन ओळीवर सुरू होतो) आहे, तर `<span>` इनलाइन कंटेनर आहे. जिथे शक्य असेल तिथे सिमेंटिक टॅग्ज वापरा.

### Hinglish
`<div>` block element hai jo container sections banata hai. `<span>` inline element hai jo line ke andar text styling ke liye use hota hai. Generic `<div>` ke bajaye semantic tags prefer karo.

## 🧱 Block vs. Inline Elements Explained

Understanding block vs. inline display behavior is essential in web development:

| Property | Block-Level (`<div>`, `<p>`, `<h1>`, `<header>`) | Inline-Level (`<span>`, `<a>`, `<strong>`, `<em>`) |
|---|---|---|
| **Line Behavior** | Always starts on a **new line** in the layout. | Stays in the **same line** alongside neighboring content. |
| **Width Behavior** | Expands automatically to take up **100% full available width**. | Takes up only as much width as its content requires. |
| **Nesting Rules** | Can contain both block and inline elements. | Should only contain other inline elements or plain text. |

## 📝 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Div and Span Demonstration</title>
</head>
<body>

  <!-- Block container grouping a card unit -->
  <div class="product-card">
    <h2>Wireless Gaming Mouse</h2>
    <p>High precision optical sensor with customizable RGB lighting.</p>
    <p>Price: <span class="highlight-price">$29.99</span> <span class="badge">In Stock</span></p>
  </div>

</body>
</html>
```

## 👀 Output

A block division container (`<div>`) wrapping a card component where the price **"$29.99"** and status **"In Stock"** are styled inside inline `<span>` elements on the same line.

## ⚖️ When to Use `<div>` and `<span>` vs. Semantic HTML

Because `<div>` and `<span>` have no inherent semantic meaning, they should be used **only when no suitable semantic HTML tag exists**:

- **Use `<header>`** instead of `<div class="header">`.
- **Use `<nav>`** instead of `<div class="navigation">`.
- **Use `<main>`** instead of `<div class="content">`.
- **Use `<article>`** instead of `<div class="post">`.
- **Use `<div>` or `<span>`** for purely visual styling containers (e.g. wrapper grids, flex cards, icon wrappers) where no semantic tag applies.

## ⚠️ Common Mistakes

- **"Div Soup":** Nesting dozens of unlabelled `<div>` containers instead of using semantic structural tags (`<header>`, `<section>`, `<article>`, `<footer>`).
- **Wrapping whole block paragraphs inside `<span>`:** `<span>` should only wrap inline text fragments.

## 🧪 Try It Yourself

Create an HTML snippet featuring:
1. One `<div>` wrapping a product card component.
2. A sentence inside the card using `<span>` to highlight the product discount price.

## 🎯 Mini Challenge

Refactor a layout that uses `<div class="header">`, `<div class="nav">`, and `<div class="footer">` to use semantic HTML tags (`<header>`, `<nav>`, `<footer>`).

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Buttons](13-buttons.md) | [Next: Attributes →](15-html-attributes.md)
