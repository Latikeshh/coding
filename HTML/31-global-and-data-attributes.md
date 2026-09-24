# Global Attributes & Custom Data Attributes (`data-*`, `tabindex`, `contenteditable`)

> 🟡 Intermediate

## 📖 Definition

**Global Attributes** are attributes that can be applied to **ANY** HTML element. Custom **`data-*` attributes** allow developers to store custom application data directly inside HTML elements, which can be easily accessed by CSS and JavaScript.

## 🌍 Multilingual Summary

### English
Global attributes (`id`, `class`, `title`, `lang`, `dir`, `hidden`, `tabindex`, `contenteditable`, `spellcheck`) apply to any element. Custom `data-*` attributes store custom application data for JavaScript.

### Hindi
Global attributes (`id`, `class`, `title`, `lang`, `dir`, `hidden`, `tabindex`, `contenteditable`) kisi bhi HTML element par apply hote hain. Custom `data-*` attributes JavaScript ke liye custom data store karte hain.

### Marathi
Global attributes (`id`, `class`, `title`, `lang`, `dir`, `hidden`, `tabindex`, `contenteditable`) kontyahi HTML element var laagu hotat. Custom `data-*` attributes JavaScript sathi custom data store kartat.

## 🤔 Why Do We Use Global & Data Attributes?

Global attributes control element accessibility, focus order (`tabindex`), inline text editing (`contenteditable`), and element visibility (`hidden`). Custom `data-*` attributes bridge HTML markup with JavaScript interactivity without cluttering CSS class names.

## 🧱 Key Global Attributes Reference

| Global Attribute | Description & Functionality | Code Example |
|---|---|---|
| **`id`** | Unique identifier for a single element on a page. | `<div id="unique-card">` |
| **`class`** | Reusable space-separated class names for CSS styling. | `<div class="card shadow">` |
| **`title`** | Advisory hover tooltip text displayed on mouse hover. | `<span title="Tooltip text">Hover me</span>` |
| **`lang`** | Specifies element language (`en`, `hi`, `mr`, `fr`). | `<p lang="fr">Bonjour</p>` |
| **`dir`** | Specifies text direction (`ltr` left-to-right, `rtl` right-to-left). | `<p dir="rtl">...</p>` |
| **`hidden`** | Hides element from visual layout and screen readers. | `<p hidden>Secret text</p>` |
| **`tabindex`** | Controls keyboard focus order (`tabindex="0"` adds to tab order; `tabindex="-1"` allows JS focus). | `<div tabindex="0">Focusable div</div>` |
| **`contenteditable`** | Makes element text content directly editable by users in the browser (`"true"|"false"`). | `<div contenteditable="true">Edit text</div>` |
| **`spellcheck`** | Enables browser spellchecking on editable elements (`"true"|"false"`). | `<div spellcheck="true">...</div>` |
| **`draggable`** | Enables HTML5 drag-and-drop capability (`"true"|"false"`). | `<div draggable="true">Drag me</div>` |
| **`data-*`** | Custom data attributes storing state or values for JS (`data-user-id`, `data-category`). | `<button data-user-id="101">` |

## 🔑 Custom `data-*` Attributes in Detail

Custom data attributes must start with `data-` followed by lowercase attribute names (e.g. `data-user-id`, `data-status`, `data-price`):

```html
<article 
  class="product-item" 
  data-id="p-99" 
  data-category="electronics" 
  data-price="299" 
  data-in-stock="true">
  <h3>Wireless Headphones</h3>
</article>
```

In JavaScript, you can read these values instantly via the element's `.dataset` object:
```javascript
const item = document.querySelector('.product-item');
console.log(item.dataset.category); // Outputs: "electronics"
console.log(item.dataset.price);    // Outputs: "299"
```

In CSS, you can target elements based on data attributes:
```css
article[data-in-stock="true"] {
  border-left: 4px solid green;
}
```

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Global and Data Attributes Practice</title>
</head>
<body>

  <h1>Global Attributes Demonstration</h1>

  <!-- Content Editable Notes Block -->
  <section>
    <h2>Editable Notes Block</h2>
    <div contenteditable="true" spellcheck="true" style="border: 1px solid #ccc; padding: 10px;">
      Click inside this box to edit text directly in your browser!
    </div>
  </section>

  <br>

  <!-- Product Item using custom data-* attributes -->
  <section>
    <h2>Product Filter Target</h2>
    <div 
      id="product-card-1" 
      class="card product-card" 
      title="Hover for product details" 
      tabindex="0" 
      data-product-id="101" 
      data-category="gadgets" 
      data-discount="20">
      <h3>Smart Watch Model X</h3>
      <p>Custom data attributes store product ID (101) and discount (20%) for JavaScript.</p>
    </div>
  </section>

</body>
</html>
```

## 👀 Output / What You Will See

- An interactive, editable text box where visitors can type directly on screen.
- A focusable product card containing tooltip descriptions, keyboard tabbing capabilities, and stored `data-*` attributes for JavaScript processing.

## 🧪 Try It Yourself

1. Create a `<div>` with `contenteditable="true"` and `spellcheck="true"`.
2. Create three list items (`<li>`) holding custom attributes `data-category="fruits"` and `data-price="10"`.
3. Test keyboard navigation using `tabindex="0"`.

## ⚠️ Common Mistakes

- **Using uppercase letters in `data-*` names:** `data-userID` is converted to lowercase `dataset.userid` in JavaScript, causing bug confusion. Use lowercase hyphens `data-user-id`.
- **Using positive `tabindex` values (e.g. `tabindex="4"`):** Disrupts natural document keyboard navigation order.

## 🌐 Real-World Usage

Modern web applications use `data-*` attributes for filtering lists, storing UI modal states, tracking analytics click events, and configuring frontend JavaScript widgets.

## 🔗 Related Topics

- [HTML Attributes](15-html-attributes.md)
- [Div and Span](14-div-and-span.md)

## 💡 Remember

- Global attributes apply to ALL HTML elements.
- `contenteditable="true"` makes text editable in the browser.
- Use `data-*` attributes to store custom data for JavaScript (`element.dataset`).
- Avoid positive `tabindex` values.

## 🧭 Navigation

[← Previous: Interactive Elements](30-interactive-elements.md) | [HTML Home](00-README.md) | [Next: HTML SEO & Open Graph →](32-html-seo-and-open-graph.md)
