# Div and Span

> 🟡 Intermediate

## 📖 Definition

`<div>` groups larger blocks of content. `<span>` groups a small piece of text inside a line.

## 🤔 Why Do We Use It?

They help organize content and give CSS or JavaScript a specific part of the page to work with.

## 🧠 Simple Explanation

A `div` is like a storage box holding several things. A `span` is like putting a small sticker on one word.

## 📝 Syntax

```html
<div class="product">
  <p>Tea: <span class="price">$4</span></p>
</div>
```

Prefer meaningful tags such as `<main>` or `<article>` when they describe the content better.

## 💡 Practical Example

An online shop could wrap each product card in a `<div>`. Inside it, a `<span>` can wrap only the price so CSS can make that small part green or bold.

## ✅ Remember

`div` starts on a new line as a block. `span` stays inside the current line. Neither tells the browser what the content means by itself.

- A `div` groups a block of content.
- A `span` wraps a small inline piece of content.
- Use semantic elements first when they describe the content.

## 💻 Example

```html
<div class="notice">
  <p>Your total is <span class="price">$12</span>.</p>
</div>
```

## 👀 Output

The sentence appears as one paragraph. CSS could later style the whole notice or only the price.

## 🔍 How It Works

The `div` wraps the full notice. The `span` wraps only “$12,” which makes that small part easy to target with CSS.

## ⚠️ Common Mistakes

- Do not replace every meaningful tag with `<div>`.
- Do not use `<span>` to wrap a full page section.

## 🧪 Try It Yourself

Wrap a product name and price in a `div`, then wrap only the price in a `span`.

## 🎯 Mini Challenge

Plan a product card using semantic tags where possible and `div` only where it helps grouping.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Buttons](13-buttons.md) | [Next: Attributes →](15-html-attributes.md)
