# Paragraphs (`<p>`)

> 🟢 Beginner

## 📖 Definition

The `<p>` element defines a paragraph of text. Browsers automatically treat paragraphs as block-level elements, adding default vertical margin space before and after each paragraph to keep body text organized and readable.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
`<p>` tags group body text into distinct paragraphs. Browsers automatically add vertical spacing before and after every paragraph.

### Hindi
`<p>` टैग्स टेक्स्ट को पैराग्राफ में बांटते हैं। ब्राउज़र हर पैराग्राफ के ऊपर और नीचे खुद-ब-खुद थोड़ा गैप (spacing) जोड़ देता है।

### Marathi
`<p>` टॅग्ज मजकुराचे परिच्छेद (paragraphs) तयार करतात. ब्राउझर प्रत्येक परिच्छेदाच्या मागे व पुढे आपोआप जागा सोडतो.

### Hinglish
`<p>` tag se text distinct paragraphs mein divide hota hai. Browsers har paragraph ke pehle aur baad mein automatic spacing add kar dete hain.

## 🤔 Why Do We Use Paragraphs?

Unformatted wall-of-text blocks are difficult to read on desktop and mobile screens. Paragraphs break ideas into logical chunks, making reading easier for visitors.

## 📝 Syntax & Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Library Notice</title>
</head>
<body>

  <h1>Central Library Announcement</h1>

  <p>The Central Library will remain open during weekend hours for semester examination preparation starting this Saturday.</p>

  <p>Students must bring their valid identity cards to enter the study halls. Group discussion rooms must be reserved online 24 hours in advance.</p>

</body>
</html>
```

## 👀 Output

A page heading followed by two clean paragraphs separated by comfortable vertical margin spacing.

## 🛑 `<p>` vs. `<br>` (Line Breaks)

- **`<p>` (Paragraph):** Used for complete blocks of text and thoughts. Adds structural spacing.
- **`<br>` (Line Break):** A void element used ONLY when a line break is part of the content itself (e.g., postal addresses, poem verses, or song lyrics).

```html
<!-- Correct use of <br> for postal address -->
<p>
  Coding Learning Center<br>
  123 Tech Street, Suite 4<br>
  Mumbai, Maharashtra - 400001
</p>
```

## ⚠️ Common Mistakes

- **Using multiple `<br>` tags for layout spacing:** Inserting `<br><br><br>` to create gaps between sections is a bad practice. Use CSS margins/padding or proper `<p>` tags instead.
- **Nesting block elements inside `<p>`:** Placing `<div>`, `<table>`, or headings inside a `<p>` tag is invalid HTML.

## 🧪 Try It Yourself

Write an HTML file with an `<h1>` heading and three paragraphs describing three hobbies or activities you enjoy.

## 🎯 Mini Challenge

Write a short college or work announcement containing two paragraphs and one formatted postal address block using `<p>` and `<br>`.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Headings](04-headings.md) | [Next: Text Formatting →](06-text-formatting.md)
