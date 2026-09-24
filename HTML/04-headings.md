# Headings (`<h1>` to `<h6>`)

> 🟢 Beginner

## 📖 Definition

HTML provides six heading elements, `<h1>` through `<h6>`, which represent different levels of section hierarchy in a document outline. `<h1>` represents the main section heading, while `<h2>` through `<h6>` represent sub-headings of decreasing structural level.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
HTML headings (`<h1>` to `<h6>`) define document hierarchy. Choose heading levels based on document structure rather than visual font size.

### Hindi
HTML हेडिंग्स (`<h1>` से `<h6>`) डॉक्यूमेंट का पदानुक्रम (hierarchy) तय करते हैं। हेडिंग का चुनाव टेक्स्ट के साइज़ के आधार पर नहीं, बल्कि डॉक्यूमेंट के स्ट्रक्चर के आधार पर करें।

### Marathi
HTML हेडिंग्ज (`<h1>` ते `<h6>`) मजकुराचा आराखडा आणि लेव्हल ठरवतात. अक्षरांच्या आकाराऐवजी माहितीच्या रचनेनुसार हेडिंग निवडावे.

### Hinglish
Headings (`<h1>` se `<h6>`) document hierarchy define karti hain. Heading level text size ke bajaye content ke structural outline ke according choose karna chahiye.

## 🧠 Structural Hierarchy vs. Visual Font Size

A common misconception among beginners is choosing headings based on how big they look on screen:
- **Incorrect approach:** Using `<h3>` because you want smaller text.
- **Correct approach:** Use CSS (`font-size`) to control text size. Choose HTML heading tags purely based on **document structure**.

```text
<h1> Document Main Title (Level 1)
 ├── <h2> Major Section Heading (Level 2)
 │    ├── <h3> Subsection Title (Level 3)
 │    └── <h3> Subsection Title (Level 3)
 └── <h2> Another Major Section (Level 2)
```

## 🔍 Why Heading Structure Matters

1. **Readability:** Helps visitors scan and understand the organization of your webpage quickly.
2. **Accessibility (a11y):** Screen reader users navigate directly between section headings to skim content.
3. **Search Engine Indexing:** Search engine crawlers use heading outlines to understand page topics and relationships.

## 📝 Syntax & Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student Portfolio - Headings Example</title>
</head>
<body>

  <h1>Developer Portfolio</h1>

  <h2>About Me</h2>
  <p>I am a computer science student learning web development.</p>

  <h2>My Web Projects</h2>

  <h3>1. Student Portal</h3>
  <p>A web application built for college course registration.</p>

  <h3>2. E-Commerce Store</h3>
  <p>A frontend prototype for an online bookstore.</p>

  <h2>Contact Information</h2>
  <p>Email me at contact@example.com.</p>

</body>
</html>
```

## 👀 Output

The browser displays a clear heading hierarchy with **Developer Portfolio** as the main page title, followed by major sections (**About Me**, **My Web Projects**, **Contact Information**) and subsections under projects.

## 💡 Can You Use Multiple `<h1>` Elements or Skip Levels?

- **Multiple `<h1>` Elements:** Modern HTML specifications do not make using multiple `<h1>` elements technically invalid. However, using **one `<h1>` for the primary page title** followed by `<h2>`–`<h6>` for sub-sections creates the cleanest outline for screen readers and users.
- **Skipping Heading Levels:** Skipping levels (e.g. jumping from `<h1>` directly to `<h3>`) is valid HTML, but maintaining a sequential structure makes page navigation more logical.

## ⚠️ Common Mistakes

- **Using headings purely for bold text:** Wrapping a sentence in `<h4>` just to make it bold (use `<strong>` or CSS instead).
- **Choosing heading tags based on default browser font size:** Always use CSS for visual font sizing.

## 🧪 Try It Yourself

Create an HTML page for a recipe or blog post using:
- `<h1>` for the main recipe title.
- `<h2>` for Ingredients and Instructions.
- `<h3>` for preparation steps or sub-ingredients.

## 🎯 Mini Challenge

Take a news article topic and outline it using one `<h1>`, two `<h2>` headings, and two `<h3>` subheadings under one of the sections.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Document Structure](03-html-document-structure.md) | [Next: Paragraphs →](05-paragraphs.md)
