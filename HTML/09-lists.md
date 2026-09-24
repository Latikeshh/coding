# Lists (`<ul>`, `<ol>`, `<dl>`)

> 🟢 Beginner

## 📖 Definition

HTML provides three types of lists to group related items:
1. **Unordered Lists (`<ul>`):** Bulleted items where sequence order does not matter.
2. **Ordered Lists (`<ol>`):** Numbered items where sequence order is crucial (e.g. step-by-step instructions).
3. **Description Lists (`<dl>`):** Key-value term pairs used for glossaries, metadata, or term definitions.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
Use `<ul>` for bulleted lists, `<ol>` for numbered sequential steps, and `<dl>` for key-value terms (`<dt>` for term name, `<dd>` for term description).

### Hindi
बुलेट पॉइंट्स की सूची के लिए `<ul>`, नंबर वाली चरणबद्ध सूची के लिए `<ol>` और शब्द-परिभाषा की सूची के लिए `<dl>` का प्रयोग करें। हर लिस्ट आइटम `<li>` में लिखा जाता है।

### Marathi
अनऑर्डर्ड बुलेट लिस्टसाठी `<ul>`, नंबर असलेल्या लिस्टसाठी `<ol>` आणि व्याख्या किंवा संज्ञांच्या जोड्यांसाठी `<dl>` वापरतात. प्रत्येक घटक `<li>` मध्ये असतो.

### Hinglish
Bulleted lists ke liye `<ul>`, numbered steps ke liye `<ol>`, aur term-definition pairs ke liye `<dl>` (`<dt>` + `<dd>`) tag use hota hai.

## 📝 List Types & Syntax

### 1. Unordered Bulleted List (`<ul>`)
Used when item order is interchangeable:
```html
<h2>Shopping List</h2>
<ul>
  <li>Fresh milk</li>
  <li>Whole wheat bread</li>
  <li>Organic eggs</li>
</ul>
```

### 2. Ordered Numbered List (`<ol>`)
Used when exact step order is required:
```html
<h2>How to Bake a Cake</h2>
<ol>
  <li>Preheat oven to 350°F (175°C).</li>
  <li>Mix dry ingredients in a large bowl.</li>
  <li>Bake for 25 to 30 minutes.</li>
</ol>
```

### 3. Description List (`<dl>`)
Pairs a term (`<dt>`) with its definition (`<dd>`):
```html
<h2>Web Development Terms</h2>
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language — structures web content.</dd>

  <dt>CSS</dt>
  <dd>Cascading Style Sheets — formats visual presentation and layout.</dd>
</dl>
```

## 🌲 Nested Lists Example

Lists can be nested inside one another to create multi-level navigation menus or nested outlines:

```html
<h2>College Course Outline</h2>
<ul>
  <li>Frontend Web Development
    <ol>
      <li>HTML5 Document Structure</li>
      <li>CSS3 Flexbox and Grid</li>
      <li>JavaScript ES6 Basics</li>
    </ol>
  </li>
  <li>Backend Development
    <ol>
      <li>Node.js Fundamentals</li>
      <li>Database Management</li>
    </ol>
  </li>
</ul>
```

## ⚠️ Common Mistakes

- **Placing non-`<li>` elements directly inside `<ul>` or `<ol>`:** Writing `<ul><p>Item</p></ul>` is invalid HTML. Only `<li>` tags can be direct children of `<ul>` and `<ol>`.
- **Forgetting `<dt>` and `<dd>` inside `<dl>`:** Placing raw text directly inside `<dl>` breaks accessibility.

## 🧪 Try It Yourself

Create an HTML file containing:
1. An unordered list (`<ul>`) of 4 skills you want to learn.
2. An ordered list (`<ol>`) of 3 steps in your daily morning routine.
3. A description list (`<dl>`) defining 2 technical terms.

## 🎯 Mini Challenge

Create a nested recipe list where the main steps are an `<ol>`, and one step contains a nested `<ul>` of sub-ingredients needed for that step.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Images](08-images.md) | [Next: Tables →](10-tables.md)
