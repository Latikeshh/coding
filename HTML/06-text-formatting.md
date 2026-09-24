# Text Formatting (`<strong>`, `<em>`, `<b>`, `<i>`, etc.)

> 🟢 Beginner

## 📖 Definition

HTML provides semantic text-formatting tags that add visual style and semantic meaning to words, phrases, or characters inside body text.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
Use `<strong>` for strong importance (bold) and `<em>` for emphasized text (italic). Use `<b>` and `<i>` when you want visual formatting without implying semantic importance.

### Hindi
महत्वपूर्ण शब्दों के लिए `<strong>` (बोल्ड) और जोर देने के लिए `<em>` (इटैलिक) का प्रयोग करें। केवल दिखने में बोल्ड या इटैलिक करने के लिए `<b>` और `<i>` का इस्तेमाल होता है।

### Marathi
महत्वाच्या शब्दांसाठी `<strong>` आणि भर देण्यासाठी `<em>` वापरा. फक्त दिसायला बोल्ड किंवा इटॅलिक करण्यासाठी `<b>` व `<i>` टॅग्ज वापरतात.

### Hinglish
Important text ke liye `<strong>` (bold) aur emphasis ke liye `<em>` (italic) use karo. Bina extra importance ke sirf visual style ke liye `<b>` aur `<i>` tags hote hain.

## 🔑 Semantic Tags vs. Visual Tags

| Tag | Purpose & Semantic Meaning | Default Appearance |
|---|---|---|
| `<strong>` | Strong importance, urgency, or warning. Screen readers emphasize this text. | **Bold** |
| `<b>` | Draws attention visually without implying extra semantic importance (e.g. key terms). | **Bold** |
| `<em>` | Stress emphasis that changes sentence meaning when spoken aloud. | *Italic* |
| `<i>` | Alternate voice, technical terms, foreign phrases, thoughts, or book titles. | *Italic* |
| `<mark>` | Highlighted text for relevance or reference. | <mark>Yellow Highlight</mark> |
| `<small>` | Side comments, disclaimers, copyright notices, or legal fine print. | Small text |
| `<del>` | Deleted or outdated text (e.g., original price before discount). | ~~Strikethrough~~ |
| `<ins>` | Newly inserted text (e.g., discounted sale price). | <u>Underlined</u> |
| `<sub>` | Subscript characters (e.g., chemical formula H<sub>2</sub>O). | Subscript |
| `<sup>` | Superscript characters (e.g., math formula X<sup>2</sup> or 1<sup>st</sup> place). | Superscript |
| `<code>` | Inline computer code snippets (displayed in monospace font). | `Monospace` |
| `<hr>` | Thematic break or horizontal divider between topics. | Horizontal Line |

## 📝 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>E-Commerce Product Offer</title>
</head>
<body>

  <h1>Wireless Headphones Deal</h1>

  <p><strong>Warning:</strong> Limited stock available!</p>

  <p>Original Price: <del>$99.99</del> <ins>$49.99</ins> (<mark>50% OFF</mark>)</p>

  <p>Uses Bluetooth <i>5.3</i> technology for stable connectivity.</p>

  <p>Formula for kinetic energy: <code>E<sub>k</sub> = ½mv<sup>2</sup></code></p>

  <hr>

  <p><small>© 2026 TechStore Inc. All rights reserved. Terms and conditions apply.</small></p>

</body>
</html>
```

## 👀 Output

- **"Warning:"** renders bold with strong semantic importance.
- **"$99.99"** renders strikethrough and **"$49.99"** renders underlined.
- **"50% OFF"** renders with a yellow highlight.
- **"E<sub>k</sub> = ½mv<sup>2</sup>"** displays subscript `k` and superscript `2`.
- **"© 2026..."** renders as smaller fine-print text below a horizontal line.

## ⚠️ Common Mistakes

- **Confusing `<b>`/`<i>` with `<strong>`/`<em>`:** Use `<strong>` and `<em>` when the meaning matters for screen readers and search engines.
- **Using `<ins>` instead of CSS for underline:** Do not use `<ins>` purely to underline text; use CSS `text-decoration: underline`.

## 🧪 Try It Yourself

Write a paragraph for a bookstore promotion featuring:
1. A book title in `<i>`.
2. A warning message in `<strong>`.
3. An original price in `<del>` and sale price in `<ins>`.

## 🎯 Mini Challenge

Write out two chemical formulas (like H<sub>2</sub>SO<sub>4</sub>) using `<sub>` and two mathematical powers (like 10<sup>3</sup>) using `<sup>`.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Paragraphs](05-paragraphs.md) | [Next: Links →](07-links.md)
