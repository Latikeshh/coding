# Lists (`<ul>`, `<ol>`, `<dl>`)

> 🟢 Beginner

## 📖 Definition

HTML provides three types of list elements to group related items:
1. **Unordered Lists (`<ul>`):** Bulleted list items where sequence order does not matter.
2. **Ordered Lists (`<ol>`):** Numbered list items where sequence order is important (e.g., step-by-step instructions).
3. **Description Lists (`<dl>`):** Term-definition pairs used for glossaries, metadata, or term definitions.

## 🌍 Multilingual Summary

### English
Use `<ul>` for bulleted lists, `<ol>` for numbered sequential steps, and `<dl>` for key-value terms (`<dt>` for term name, `<dd>` for term description).

### Hindi
Bulleted lists ke liye `<ul>`, numbered steps ke liye `<ol>`, aur term-definition pairs ke liye `<dl>` (`<dt>` + `<dd>`) tag use hota hai. Har list item `<li>` tag mein likha jata hai.

### Marathi
Bulleted list sathi `<ul>`, numbered sequential steps sathi `<ol>`, ani definition pairs sathi `<dl>` (`<dt>` + `<dd>`) vaprtat. Pratyek ghatak `<li>` madhye asto.

## 🤔 Why Do We Use Lists?

Lists organize related information into structured, easy-to-read bullet points or numbered steps. Screen readers announce list item counts to visually impaired users (e.g., "List of 4 items"), enhancing accessibility.

## 📐 List Types & Syntax

### 1. Unordered Bulleted List (`<ul>`)
Used when item order is interchangeable:
```html
<h2>Grocery List</h2>
<ul>
  <li>Fresh milk</li>
  <li>Whole wheat bread</li>
  <li>Organic eggs</li>
</ul>
```

### 2. Ordered Numbered List (`<ol>`)
Used when exact step order is required:
```html
<h2>How to Bake Pancakes</h2>
<ol>
  <li>Mix dry ingredients in a large bowl.</li>
  <li>Pour milk, egg, and melted butter into the mix.</li>
  <li>Cook on a hot skillet until golden brown.</li>
</ol>
```

### 3. Description List (`<dl>`)
Pairs a term name (`<dt>`) with its description (`<dd>`):
```html
<h2>Web Development Concepts</h2>
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language — structures web content.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets — formats visual presentation and layout.</dd>
</dl>
```

## 🌲 Nested Lists Example

Lists can be nested inside one another to create multi-level navigation menus or detailed outlines:

```html
<h2>College Course Curriculum</h2>
<ul>
  <li>Frontend Web Development
    <ol>
      <li>HTML5 Document Structure</li>
      <li>CSS3 Flexbox and Grid</li>
      <li>JavaScript ES6 Fundamentals</li>
    </ol>
  </li>
  <li>Backend Development
    <ol>
      <li>Node.js & Express</li>
      <li>Database Management</li>
    </ol>
  </li>
</ul>
```

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Lists Practice</title>
</head>
<body>

  <h1>Web Developer Roadmap</h1>

  <h2>Core Technologies (Unordered List)</h2>
  <ul>
    <li>HTML5</li>
    <li>CSS3</li>
    <li>JavaScript</li>
  </ul>

  <h2>Learning Steps (Ordered List)</h2>
  <ol>
    <li>Master HTML structure and semantic tags.</li>
    <li>Style pages with modern CSS Flexbox and Grid.</li>
    <li>Add interactivity using JavaScript.</li>
  </ol>

  <h2>Glossary (Description List)</h2>
  <dl>
    <dt>DOM</dt>
    <dd>Document Object Model — the tree structure of an HTML page.</dd>
  </dl>

</body>
</html>
```

## 👀 Output / What You Will See

- Core Technologies displayed as bullet points (`• HTML5`).
- Learning Steps displayed as numbered steps (`1. Master HTML...`).
- Glossary displayed with bold terms and indented descriptions.

## 🧪 Try It Yourself

1. Create an unordered list (`<ul>`) of 4 skills you want to learn.
2. Create an ordered list (`<ol>`) of 3 steps in your morning routine.
3. Create a description list (`<dl>`) defining 2 technical terms.

## ⚠️ Common Mistakes

- **Placing non-`<li>` elements directly inside `<ul>` or `<ol>`:** Writing `<ul><p>Item</p></ul>` is invalid HTML. Only `<li>` tags can be direct children of `<ul>` and `<ol>`.
- **Forgetting `<dt>` and `<dd>` inside `<dl>`:** Placing raw text directly inside `<dl>` breaks accessibility.

## 🌐 Real-World Usage

Lists form the underlying structural foundation of navigation menus, article table of contents, recipe ingredients, checkout steps, and footer link sections.

## 🔗 Related Topics

- [Headings](04-headings.md)
- [Tables](10-tables.md)
- [Semantic HTML](22-semantic-html.md)

## 💡 Remember

- `<ul>` = Unordered bullet points.
- `<ol>` = Ordered numbers (1, 2, 3).
- Direct children of `<ul>` and `<ol>` MUST be `<li>` elements.

## 🧭 Navigation

[← Previous: Images](08-images.md) | [HTML Home](00-README.md) | [Next: Tables →](10-tables.md)
