# Div and Span

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

[← First: HTML Home](README.md) | [← Previous: Buttons](Buttons.md) | [Next: Attributes →](HTML-Attributes.md)
