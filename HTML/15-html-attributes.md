# HTML Attributes (`id`, `class`, `title`, Global Attributes)

> 🟢 Beginner

## 📖 Definition

**Attributes** provide additional configuration, metadata, properties, or styling instructions to HTML elements. Attributes are always written inside the opening tag as **`name="value"`** pairs.

## 🌍 Multilingual Summary

### English
Attributes configure HTML elements as `name="value"` pairs inside opening tags. Global attributes (`id`, `class`, `title`, `lang`, `hidden`, `data-*`) can be used on any HTML element.

### Hindi
Attributes opening tag ke andar `name="value"` format mein extra settings add karte hain. Global attributes (`id`, `class`, `title`, `lang`, `data-*`) kisi bhi HTML element par use ho sakte hain.

### Marathi
Attributes opening tag madhye `name="value"` swarupat extra settings detat. Global attributes (`id`, `class`, `title`, `lang`, `data-*`) kontyahi HTML element var vaparle jau shaktat.

## 🤔 Why Do We Use Attributes?

Attributes customize element behavior—specifying image sources (`src`), link destinations (`href`), element identifiers (`id`), reusable CSS styling classes (`class`), tooltip descriptions (`title`), and language declarations (`lang`).

## 🔑 Common Global Attributes Reference

Global attributes can be applied to almost any HTML element:

| Global Attribute | Description & Purpose | Usage Example |
|---|---|---|
| **`id`** | Defines a **unique identifier** for a single element on a page. Used for CSS styling, JS DOM selection, and fragment links (`#id`). | `<section id="about">` |
| **`class`** | Assigns one or more **reusable class names** to elements. Multiple elements can share the same class name. | `<button class="btn primary-btn">` |
| **`title`** | Displays advisory tooltip text when hovering over the element with a mouse pointer. | `<abbr title="HyperText Markup Language">HTML</abbr>` |
| **`lang`** | Specifies the language of element content. | `<p lang="fr">Bonjour</p>` |
| **`dir`** | Specifies text direction (`ltr` for left-to-right, `rtl` for right-to-left languages like Arabic or Hebrew). | `<p dir="rtl">...</p>` |
| **`hidden`** | Hides the element from display on the page layout. | `<p hidden>Secret text</p>` |
| **`tabindex`** | Controls keyboard focus order (`tabindex="0"` adds custom element to natural tab order). | `<div tabindex="0">` |
| **`data-*`** | Stores custom data attributes for JavaScript (`data-user-id`, `data-category`). | `<div data-category="books">` |

## ⚖️ `id` vs. `class` (Crucial Difference)

- **`id` (Unique):** MUST be completely unique across the entire HTML document. No two elements should ever share the same `id` value.
- **`class` (Reusable):** Can be assigned to multiple elements across the page. An element can also hold multiple space-separated classes (`class="card shadow rounded"`).

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Global Attributes Practice</title>
</head>
<body>

  <h1>Attributes Demonstration</h1>

  <section id="features-section" class="container content-box" data-author="Developer">
    <p title="Hover tooltip information">Move mouse pointer here to view tooltip message.</p>

    <button id="main-cta" class="btn primary-btn" data-action="subscribe">
      Subscribe Now
    </button>
  </section>

</body>
</html>
```

## 👀 Output / What You Will See

A rendered section with an `id` and classes, displaying a tooltip message when hovering over the paragraph text, and a styled button with custom `data-action` attribute.

## 🧪 Try It Yourself

1. Create a section element with a unique `id="services"`.
2. Add two paragraphs sharing the same class `class="highlight-text"`.
3. Add a `title` attribute to a link displaying a helpful tooltip.
4. Add a custom `data-category="electronics"` attribute to a container.

## ⚠️ Common Mistakes

- **Reusing the same `id` on multiple elements:** Violates HTML standards and breaks JavaScript selector logic.
- **Using positive `tabindex` values (e.g., `tabindex="5"`):** Disrupts natural tabbing order for keyboard and screen reader users.
- **Omitting quotes around attribute values:** Writing `class=card title=hello` instead of `class="card" title="hello"`.

## 🌐 Real-World Usage

All modern web frameworks and UI libraries rely heavily on `class` names for CSS styling and `data-*` attributes for interactive JavaScript state.

## 🔗 Related Topics

- [Div and Span](14-div-and-span.md)
- [Global & Data Attributes](31-global-and-data-attributes.md)

## 💡 Remember

- `id` MUST be unique per page.
- `class` can be reused on multiple elements.
- Attributes are written as `name="value"` inside opening tags.

## 🧭 Navigation

[← Previous: Div and Span](14-div-and-span.md) | [HTML Home](00-README.md) | [Next: Comments →](16-html-comments.md)
