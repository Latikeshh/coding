# Introduction to HTML

> 🟢 Beginner

## 📖 Definition

**HTML** stands for **HyperText Markup Language**. It is the standard markup language used to structure web pages and define the content displayed on the web.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
HTML gives web pages content and structure. Web browsers read HTML tags like `<h1>` and `<p>` to render headings, text, links, and images on screen.

### Hindi
HTML वेब पेज को कंटेंट और स्ट्रक्चर देता है। वेब ब्राउज़र `<h1>` और `<p>` जैसे टैग्स पढ़कर स्क्रीन पर हेडिंग, पैराग्राफ, लिंक्स और इमेजेस दिखाते हैं।

### Marathi
HTML वेब पेजला मजकूर आणि रचना (structure) देते. ब्राउझर `<h1>` आणि `<p>` सारखे टॅग्ज वाचून स्क्रीनवर शीर्षके, परिच्छेद आणि चित्रे दाखवतात.

### Hinglish
HTML web page ko content aur structure deta hai. Browser tags padhkar screen par headings, text, links, aur images render karta hai.

## 🤔 Why Do We Use HTML?

Every website on the internet uses HTML as its backbone. Web browsers (Chrome, Firefox, Safari, Edge) receive HTML documents from web servers and interpret them to display text, buttons, forms, images, and videos.

Without HTML, web browsers would not know what content to display or how it is structured.

## 🧠 Simple Explanation & House Analogy

Think of building a website like constructing a house:
- **HTML** is the wooden or concrete framework (walls, rooms, doors).
- **CSS** is the interior design and paint (colors, fonts, layouts).
- **JavaScript** is the electrical and plumbing system (interactive features, buttons that perform actions).

## 🔑 Key Concepts: Tags, Elements, and Attributes

Understanding the difference between tags, elements, and attributes is fundamental:

1. **Tag:** A keyword enclosed in angle brackets, such as `<h1>` (opening tag) or `</h1>` (closing tag).
2. **Element:** The complete structure consisting of the opening tag, content inside, and closing tag.
   ```html
   <h1>Welcome to My Website</h1>
   ```
3. **Attribute:** Extra details provided inside the opening tag as `name="value"` pairs to configure the element.
   ```html
   <a href="https://example.com">Visit Example</a>
   ```
4. **Void Elements (Self-closing tags):** Elements that do not contain content or a closing tag.
   ```html
   <br>
   <hr>
   <img src="photo.jpg" alt="A sunny beach">
   ```

## 📝 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Fresh Bakery</title>
</head>
<body>
  <h1>Fresh Daily Bakery</h1>
  <p>We bake fresh sourdough bread, pastries, and cakes every morning.</p>
</body>
</html>
```

## 👀 Output

**Fresh Daily Bakery**

We bake fresh sourdough bread, pastries, and cakes every morning.

## ⚠️ Common Mistakes

- **Forgetting the closing slash:** Writing `<h1>Title<h1>` instead of `<h1>Title</h1>`.
- **Mismatched nesting:** Writing `<p><strong>Text</p></strong>` instead of `<p><strong>Text</strong></p>`.
- **Confusing HTML with programming languages:** HTML is a markup language for structuring content, not a programming language with loops or logic.

## 🧪 Try It Yourself

Write a simple HTML file containing:
1. One main heading (`<h1>`) with your favorite restaurant's name.
2. Two paragraphs (`<p>`) describing their best dishes.

## 🎯 Mini Challenge

Create an HTML snippet about your favorite movie, using `<h1>` for the title and two `<p>` elements for the plot summary and your review.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: VS Code Setup](01-setup-vs-code.md) | [Next: Document Structure →](03-html-document-structure.md)
