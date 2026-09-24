# HTML Entities (`&lt;`, `&gt;`, `&amp;`, `&copy;`)

> 🟢 Beginner

## 📖 Definition

**HTML Entities** are special code sequences used to display reserved HTML syntax characters (like `<` or `>`) that browsers would otherwise interpret as tag markup, or specific symbols that may not be easily typed on standard computer keyboards (like `©` or `™`).

## 🌍 Multilingual Summary

### English
Entities display reserved syntax characters like `&lt;` for `<`, `&gt;` for `>`, `&amp;` for `&`, and `&copy;` for `©`. Always end entity codes with a semicolon `;`.

### Hindi
Special reserved characters ko literal text dikhane ke liye entities use hoti hain (jaise `<` ke liye `&lt;`, `>` ke liye `&gt;`, `&` ke liye `&amp;`, `©` ke liye `&copy;`). End mein semicolon `;` lagayein.

### Marathi
Special characters screen var dakhavnyasathi entities vapartat (`<` sathi `&lt;`, `>` sathi `&gt;`, `©` sathi `&copy;`). End madhye semicolon `;` dene aavashyak aahe.

## 🤔 Why Do We Use Entities?

Certain characters are reserved in HTML syntax (`<`, `>`, `&`, `"`, `'`). If you type `<p>` inside body text, web browsers treat it as an opening HTML paragraph tag instead of displaying literal `<p>` text. HTML entities instruct browsers to render literal symbol characters without breaking HTML syntax parsing.

## 📝 Common HTML Entities Reference

| Symbol / Character | Description | Entity Name | Entity Code |
|---|---|---|---|
| `<` | Less-than symbol | `&lt;` | `&#60;` |
| `>` | Greater-than symbol | `&gt;` | `&#62;` |
| `&` | Ampersand symbol | `&amp;` | `&#38;` |
| `"` | Double quote mark | `&quot;` | `&#34;` |
| `'` | Single quote / Apostrophe | `&apos;` | `&#39;` |
| `©` | Copyright symbol | `&copy;` | `&#169;` |
| `™` | Trademark symbol | `&trade;` | `&#8482;` |
| `€` | Euro currency symbol | `&euro;` | `&#8364;` |
| `₹` | Indian Rupee symbol | `&#8377;` | `&#8377;` |
|   | Non-breaking space | `&nbsp;` | `&#160;` |

## 🧠 When Are Entities Necessary?

- **Syntax Safety:** Printing literal HTML code snippets inside tutorials (e.g., displaying `&lt;h1&gt;` on screen).
- **Trademarks & Copyrights:** Formatting footer legal statements with `&copy;` and `&trade;`.
- **Note on UTF-8:** Because modern HTML boilerplate uses `<meta charset="UTF-8">`, you can type standard Unicode symbols directly. Entities are primarily used for syntax safety (`<`, `>`, `&`).

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Entities Practice</title>
</head>
<body>

  <h1>HTML Entities Demonstration</h1>

  <p>To create a main heading in HTML, use the &lt;h1&gt; heading &lt;/h1&gt; tags.</p>

  <p>Mathematical expression: 5 &lt; 10 &amp;&amp; 20 &gt; 15</p>

  <p>Company Title: Johnson &amp; Johnson Co.</p>

  <p>Special Pricing: &#8377;1,499 or &euro;18.50</p>

  <hr>

  <footer>
    <p>Copyright &copy; 2026 Coding Notes &trade;. All rights reserved.</p>
  </footer>

</body>
</html>
```

## 👀 Output / What You Will See

- "To create a main heading in HTML, use the `<h1>` heading `</h1>` tags."
- "Mathematical expression: 5 < 10 && 20 > 15"
- "Company Title: Johnson & Johnson Co."
- "Special Pricing: ₹1,499 or €18.50"
- "Copyright © 2026 Coding Notes ™. All rights reserved."

## 🧪 Try It Yourself

Write an HTML sentence displaying:  
`In HTML, we write <a> for hyperlinks and & for ampersand.` using proper HTML entities (`&lt;`, `&gt;`, `&amp;`).

## ⚠️ Common Mistakes

- **Forgetting trailing semicolons `;`:** Writing `&lt` or `&copy` instead of `&lt;` or `&copy;`.
- **Using `&nbsp;` repeatedly for visual layout gaps:** Inserting `&nbsp;&nbsp;&nbsp;&nbsp;` to force gaps between text instead of using CSS `margin` or `padding`.

## 🌐 Real-World Usage

Tech documentation sites, code tutorial portals, e-commerce stores, and website footers use HTML entities for code snippets and legal symbol display.

## 🔗 Related Topics

- [Text Formatting](06-text-formatting.md)
- [Colors](17-html-colors.md)

## 💡 Remember

- `&lt;` = `<`
- `&gt;` = `>`
- `&amp;` = `&`
- `&copy;` = `©`
- Always end entity codes with a semicolon `;`.

## 🧭 Navigation

[← Previous: Colors](17-html-colors.md) | [HTML Home](00-README.md) | [Next: Audio →](19-audio.md)
