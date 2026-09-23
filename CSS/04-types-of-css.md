# Types of CSS

> 🟢 Beginner

## 📖 Definition

CSS can be written in three common ways: inline, internal, and external.

## 🤔 Why Do We Use It?

Different situations need different ways to add CSS. A small one-off style may use inline CSS, while a real website usually uses an external stylesheet.

## 🧠 Simple Explanation

Think of it like choosing where to write your notes:

- in the same line as the text
- inside the page header
- in a separate file

## 1. Inline CSS

Inline CSS is written directly inside an HTML tag.

```html
<p style="color: red; font-size: 18px;">Hello</p>
```

### What it is

It applies styles directly to one element.

### Advantages

- Very quick for small changes
- Helpful for testing ideas

### Disadvantages

- Hard to maintain in larger projects
- Repeated styles can create duplication

### When it is useful

- Small quick tests
- One-time special styling

## 2. Internal CSS

Internal CSS is written inside the `<style>` tag in the `<head>` of an HTML document.

```html
<head>
  <style>
    p {
      color: red;
    }
  </style>
</head>
```

### What it is

It styles elements within that one page.

### Advantages

- Good for single-page examples
- Easy to keep all styles together

### Disadvantages

- Not reusable across multiple pages
- More difficult to organize in larger sites

### When it is useful

- Small pages
- Learning examples
- One-page demos

## 3. External CSS

External CSS is kept in its own file and linked into the HTML file.

```html
<link rel="stylesheet" href="style.css">
```

```css
p {
  color: red;
}
```

### What it is

The HTML file connects to a separate CSS file using the `<link>` tag.

### Advantages

- Reusable across many pages
- Cleaner and easier to maintain
- Better for websites and larger projects

### Disadvantages

- Requires an extra file
- You must remember to link it correctly

### Why it is commonly used

For larger websites, external CSS keeps the code organized and easier to update.

## Project Structure Example

```text
project/
├── index.html
└── style.css
```

## Comparison Table

| Type | Written where? | Best for |
|---|---|---|
| Inline | Inside an HTML element | Small one-off styles |
| Internal | Inside the `<style>` tag in the HTML head | One-page styling |
| External | In a separate `.css` file | Websites and larger projects |

## 👀 What You Will See

The page will use different styling depending on where the CSS is written. External CSS is usually the cleanest and most professional choice for larger projects.

## 🧪 Try It Yourself

Write the same style once as inline CSS, once as internal CSS, and once as external CSS. Compare how each method works.

## ⚠️ Common Mistakes

- Putting CSS in the wrong place and expecting it to work.
- Forgetting the semicolon in inline style.
- Not linking the external CSS file correctly.

## ✅ Remember

- Inline CSS styles a single element.
- Internal CSS styles one page.
- External CSS is best for projects with multiple pages.

## 🧭 Navigation

[← Previous](03-history-of-css.md) | [CSS Home](00-README.md) | [Next →](05-how-to-add-css.md)
