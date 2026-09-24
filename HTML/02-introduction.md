# Introduction to HTML

> 🟢 Beginner

## 📖 Definition

**HTML** stands for **HyperText Markup Language**. It is the standard markup language used to create, structure, and define the content displayed on web pages across the World Wide Web.

## 🌍 Multilingual Summary

### English
HTML provides web pages with structure and content. Web browsers read HTML tags like `<h1>` and `<p>` to render headings, body text, links, images, and forms on screen.

### Hindi
HTML webpage ko content aur structure deta hai. Web browser `<h1>` aur `<p>` jaise tags ko padhkar screen par headings, text, links, aur images display karte hain.

### Marathi
HTML webpage la content ani structure dete. Web browser `<h1>` ani `<p>` sarakhe tags vachun screen var headings, text, links, ani images dakhavtat.

## 🤔 Why Do We Use It?

Every website on the internet—from simple blogs to platforms like Google, YouTube, and Wikipedia—uses HTML as its foundation. Web browsers (Chrome, Firefox, Safari, Edge) receive HTML files from servers and parse them to display structured information to users. Without HTML, browsers would not know what content to display or how it should be organized.

## 🧠 Simple Explanation & House Analogy

Think of constructing a website like building a house:
- **HTML** is the wooden or concrete structural framework (walls, rooms, doors, windows).
- **CSS** is the interior design and paint (colors, fonts, layout spacing, visual styling).
- **JavaScript** is the electrical and plumbing functionality (interactive features, buttons that trigger actions).

## 🧱 Key Concepts: Tags, Elements, and Attributes

Understanding the distinction between tags, elements, and attributes is fundamental to learning web development:

1. **Tag:** A keyword enclosed in angle brackets, such as `<p>` (opening tag) or `</p>` (closing tag).
2. **Element:** The complete structure comprising the opening tag, the content inside, and the closing tag:
   ```html
   <h1>Welcome to My Web Site</h1>
   ```
3. **Attribute:** Additional settings or properties written inside the opening tag as `name="value"` pairs to configure the element:
   ```html
   <a href="https://example.com">Visit Example Web Site</a>
   ```
4. **Void Elements (Self-closing tags):** Elements that do not contain content or closing tags:
   ```html
   <br>
   <hr>
   <img src="photo.jpg" alt="A sunny beach">
   ```

## 📝 Code Examples

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Fresh Daily Bakery</title>
</head>
<body>

  <h1>Fresh Daily Bakery</h1>
  <p>We bake fresh sourdough bread, artisan pastries, and custom cakes every morning.</p>

  <h2>Our Specialities</h2>
  <p>Visit our bakery or order online for home delivery.</p>

</body>
</html>
```

## 👀 Output / What You Will See

**Fresh Daily Bakery** (Large main heading)  
We bake fresh sourdough bread, artisan pastries, and custom cakes every morning. (Paragraph text)  
**Our Specialities** (Medium section heading)  
Visit our bakery or order online for home delivery. (Paragraph text)

## 🧪 Try It Yourself

1. Open VS Code and create a file named `restaurant.html`.
2. Write an HTML page containing:
   - One main heading (`<h1>`) with your favorite restaurant's name.
   - One section heading (`<h2>`) titled "Popular Menu Items".
   - Two paragraphs (`<p>`) describing their best dishes.
3. Save and open the file in your browser.

## ⚠️ Common Mistakes

- **Forgetting the closing slash:** Writing `<h1>Title<h1>` instead of `<h1>Title</h1>`.
- **Mismatched nesting:** Writing `<p><strong>Text</p></strong>` instead of `<p><strong>Text</strong></p>`.
- **Confusing HTML with programming languages:** HTML is a markup language for structuring content, not a programming language with logic or loops.

## 🌐 Real-World Usage

HTML forms the core content layer of every single web application, mobile web view, email newsletter, and web platform on the internet.

## 🔗 Related Topics

- [Set Up VS Code for HTML](01-setup-vs-code.md)
- [HTML Document Structure & Metadata](03-html-document-structure.md)
- [Headings](04-headings.md)

## 💡 Remember

- HTML tags use angle brackets `<tagname>`.
- Always close element tags properly (`</tagname>`).
- HTML handles structure, CSS handles styling, and JavaScript handles behavior.

## 🧭 Navigation

[← Previous: VS Code Setup](01-setup-vs-code.md) | [HTML Home](00-README.md) | [Next: Document Structure →](03-html-document-structure.md)
