# HTML Entities

> 🟢 Beginner

## 📖 Definition

HTML entities are special codes for characters that would otherwise be confused with HTML or are hard to type.

## 🤔 Why Do We Use It?

They let you show reserved symbols, spaces, and characters correctly.

## 🧠 Simple Explanation

An entity is a safe nickname for a character. The browser reads the nickname and shows the intended symbol.

## 📝 Syntax

```html
<p>5 &lt; 10</p>
<p>Tea &amp; Coffee</p>
<p>Price: 10&nbsp;USD</p>
```

`&lt;` displays `<` and `&amp;` displays `&`.

## 💡 Practical Example

If a coding lesson needs to display `<p>`, write `&lt;p&gt;` in the page. Without the entity, the browser may think you are trying to create a real paragraph.

## ✅ Remember

An entity begins with `&` and ends with `;`. Use one when a character has a special meaning in HTML.

- `&lt;` shows a less-than sign.
- `&gt;` shows a greater-than sign.
- `&amp;` shows an ampersand.

## 💻 Example

```html
<p>Use &lt;h1&gt; for a main heading.</p>
<p>Research &amp; planning come first.</p>
```

## 👀 Output

Use `<h1>` for a main heading.

Research & planning come first.

## 🔍 How It Works

The browser turns each entity into one character. This lets a lesson show HTML code without the browser trying to interpret it as a real tag.

## ⚠️ Common Mistakes

- Do not forget the ending semicolon in an entity.
- Use `&amp;` when an ampersand belongs in displayed HTML text.

## 🧪 Try It Yourself

Write a paragraph that displays the text `<p>Hello</p>` in the browser.

## 🎯 Mini Challenge

Make a short HTML note that correctly displays `<`, `>`, and `&`.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Colors](17-html-colors.md) | [Next: Audio →](19-audio.md)
