# Iframes

> 🟡 Intermediate

## 📖 Definition

An iframe displays another web page or document inside a small area on your page.

## 🤔 Why Do We Use It?

It is often used to embed a map, a video, or a shared document.

## 🧠 Simple Explanation

An iframe is like a window cut into your page. Through that window, visitors see content from another source.

## 📝 Syntax

```html
<iframe src="https://example.com" title="Example website"></iframe>
```

Always give an iframe a helpful `title`. Only embed websites you trust.

## 💡 Practical Example

A local business may embed a map so customers can find its address. The map is displayed inside the page, but its content is supplied by the map service.

## ✅ Remember

Some websites block themselves from being embedded. If an iframe is blank, check whether the source website allows embedding.

- `src` is the page to display.
- `title` explains the embedded content.
- An iframe is content from another page, not a replacement for your own page content.

## 💻 Example

```html
<iframe
  src="https://example.com"
  title="Example website"
  width="600"
  height="300">
</iframe>
```

## 👀 Output

A 600-by-300 pixel embedded area tries to display the example website.

## 🔍 How It Works

The iframe creates a separate browsing area inside the page. Its title gives screen-reader users a useful description of that area.

## ⚠️ Common Mistakes

- Do not embed untrusted pages.
- Do not omit the `title` attribute.

## 🧪 Try It Yourself

Find a trusted service that provides embed code and identify its iframe `src` and `title`.

## 🎯 Mini Challenge

Embed a map for a pretend shop and write a text address outside the iframe too.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Video](20-video.md) | [Next: Semantic HTML →](22-semantic-html.md)
