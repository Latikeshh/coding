# HTML Attributes (`id`, `class`, `title`, Global Attributes)

> 🟢 Beginner

## 📖 Definition

**Attributes** provide additional configuration, metadata, or styling instructions to HTML elements. Attributes are always written inside the opening tag as **`name="value"`** pairs.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
Attributes configure HTML elements as `name="value"` pairs inside opening tags. Global attributes (`id`, `class`, `title`, `lang`, `hidden`, `data-*`) can be used on any HTML element.

### Hindi
एट्रिब्यूट्स टैग के अंदर `name="value"` रूप में अतिरिक्त जानकारी या सेटिंग जोड़ते हैं। `id` पूरी तरह यूनिक होता है, जबकि `class` का इस्तेमाल कई एलीमेंट्स पर रीयूज़ किया जा सकता है।

### Marathi
ॲट्रिब्युट्स टॅगला अतिरिक्त माहिती किंवा सेटिंग्ज (`name="value"`) देतात. `id` हा प्रत्येक घटकासाठी एकमेव (unique) असावा, तर `class` पुनरुत्पादित (reuse) करता येतो.

### Hinglish
Attributes opening tag ke andar `name="value"` format mein extra settings add karte hain. `id` unique hona chahiye jabki `class` multiple elements par reuse ho sakta hai.

## 🔑 Common Global Attributes

Global attributes can be applied to almost any HTML element:

| Global Attribute | Description | Usage Example |
|---|---|---|
| **`id`** | Defines a **unique identifier** for a single element on a page. Used for CSS styling, JS DOM selection, and fragment URL links (`#id`). | `<section id="about">` |
| **`class`** | Assigns one or more **reusable class names** to elements. Multiple elements can share the same class name. | `<button class="btn btn-primary">` |
| **`title`** | Displays advisory tooltip text when a user hovers over the element with a mouse. | `<abbr title="HyperText Markup Language">HTML</abbr>` |
| **`lang`** | Specifies the language of element content. | `<p lang="fr">Bonjour</p>` |
| **`hidden`** | Hides the element from display on the page layout. | `<p hidden>Secret content</p>` |
| **`tabindex`** | Controls keyboard focusability (`tabindex="0"` adds a custom element to natural tab order; `tabindex="-1"` makes it focusable via JS only). Avoid positive values like `tabindex="5"`. | `<div tabindex="0">` |
| **`data-*`** | Custom data attributes used to store custom data for JavaScript (`data-user-id`, `data-category`). | `<div data-category="books">` |
| **`aria-*`** | Accessibility attributes describing states or roles to screen readers (`aria-expanded="false"`). | `<button aria-label="Close menu">` |

## ⚖️ `id` vs. `class` (Crucial Difference)

- **`id` (Unique):** Must be completely unique on the entire page. No two elements should ever share the same `id` value.
- **`class` (Reusable):** Can be assigned to multiple elements across the page. An element can also have multiple space-separated classes (`class="card shadow rounded"`).

## 🎨 Note on the `style` Attribute

The `style` attribute applies inline CSS directly to an element:
```html
<p style="color: blue; font-weight: bold;">Inline styled text</p>
```
**Best Practice:** HTML provides the page structure, while external CSS stylesheets should control visual presentation. Avoid extensive inline `style` attributes in production code.

## 📝 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Global Attributes Example</title>
</head>
<body>

  <h1>Attributes Demonstration</h1>

  <section id="features-section" class="container content-box" data-author="Developer">
    <p title="Hover tooltip text">Move mouse pointer here to view tooltip.</p>

    <button id="main-cta" class="btn primary-btn" data-action="subscribe">
      Subscribe Now
    </button>
  </section>

</body>
</html>
```

## ⚠️ Common Mistakes

- **Reusing the same `id` on multiple elements:** Violates HTML standards and causes JavaScript selector bugs.
- **Using positive `tabindex` values (e.g. `tabindex="3"`):** Disrupts natural keyboard tabbing order for screen reader and keyboard users.
- **Omitting quotes around attribute values:** Writing `class=card title=hello` instead of `class="card" title="hello"`.

## 🧪 Try It Yourself

1. Create a section element with a unique `id="services"`.
2. Add two paragraphs sharing the same class name `class="highlight-text"`.
3. Add a `title` attribute to a link displaying a helpful tooltip.

## 🎯 Mini Challenge

Create three HTML buttons sharing the class `btn`, but assign unique `id` attributes (`btn-save`, `btn-cancel`, `btn-delete`) and custom `data-action` attributes to each button.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Div and Span](14-div-and-span.md) | [Next: Comments →](16-html-comments.md)
