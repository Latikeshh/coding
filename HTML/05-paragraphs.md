# Paragraphs (`<p>`)

> 🟢 Beginner

## 📖 Definition

The **`<p>`** element defines a paragraph of text. Browsers automatically treat paragraphs as block-level elements, adding vertical margin spacing before and after each paragraph to group text into readable paragraphs.

## 🌍 Multilingual Summary

### English
`<p>` tags group body text into distinct paragraphs. Browsers automatically add vertical margin spacing above and below every paragraph element.

### Hindi
`<p>` tags text ko distinct paragraphs mein baant-te hain. Browser har paragraph ke pehle aur baad mein automatic spacing (margin) add karta hai.

### Marathi
`<p>` tags text che alag-alag paragraphs tayar kartat. Browser pratyek paragraph chya aadhi ani nantar aapne aap spacing add karto.

## 🤔 Why Do We Use Paragraphs?

Unformatted wall-of-text blocks are exhausting to read on desktop and mobile screens. Paragraphs break ideas into manageable, readable chunks, improving readability and user engagement.

## 📐 Syntax & Basic Usage

```html
<p>This is a standard paragraph of body text in HTML.</p>
```

## 🛑 `<p>` vs. `<br>` (Line Breaks)

- **`<p>` (Paragraph Element):** Used for complete thoughts and blocks of text. Adds structural vertical spacing around content.
- **`<br>` (Line Break Void Element):** Used ONLY when a line break is part of the content itself (e.g., postal addresses, poem verses, or song lyrics).

```html
<!-- Correct usage of <br> inside <p> for postal address formatting -->
<p>
  Coding Learning Center<br>
  123 Tech Street, Suite 4<br>
  Mumbai, Maharashtra - 400001
</p>
```

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Central Library Announcement</title>
</head>
<body>

  <h1>Central Library Examination Hours</h1>

  <p>The Central Library will remain open during weekend hours for semester examination preparation starting this Saturday.</p>

  <p>Students must bring their valid student identity cards to enter the quiet study halls. Group discussion rooms must be reserved online 24 hours in advance.</p>

  <p>For inquiries, contact the desk:<br>
  Main Library Desk<br>
  Email: library@college.edu</p>

</body>
</html>
```

## 👀 Output / What You Will See

The page displays an `<h1>` heading followed by two distinct paragraphs separated by comfortable vertical margin gaps, followed by a third paragraph with formatted address line breaks.

## 🧪 Try It Yourself

1. Create an HTML file with an `<h1>` heading.
2. Write three separate paragraphs describing three hobbies or skills you want to learn.
3. Add a postal address block using `<p>` and `<br>` elements.

## ⚠️ Common Mistakes

- **Using multiple `<br>` tags for layout spacing:** Inserting `<br><br><br>` to create visual gaps between elements is bad practice. Use CSS margins or proper `<p>` tags instead.
- **Nesting block elements inside `<p>`:** Placing `<div>`, `<table>`, or headings inside a `<p>` tag is invalid HTML.

## 🌐 Real-World Usage

Every blog post, news article, documentation page, and web application uses `<p>` elements to present body text clearly to visitors and screen readers.

## 🔗 Related Topics

- [Headings](04-headings.md)
- [Text Formatting](06-text-formatting.md)

## 💡 Remember

- `<p>` is a block-level element.
- Browsers automatically add top and bottom margin spacing around `<p>`.
- Use `<br>` only for meaningful inline line breaks (addresses, poetry).

## 🧭 Navigation

[← Previous: Headings](04-headings.md) | [HTML Home](00-README.md) | [Next: Text Formatting →](06-text-formatting.md)
