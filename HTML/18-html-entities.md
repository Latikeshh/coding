# HTML Entities (`&lt;`, `&gt;`, `&amp;`, `&copy;`)

> 🟢 Beginner

## 📖 Definition

**HTML Entities** are special code sequences used to display reserved characters (like `<` or `>`) that browsers would otherwise interpret as HTML markup tags, or symbols not easily typed on standard keyboards (like `©`, `™`, or non-breaking spaces).

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
Entities display reserved characters like `&lt;` for `<`, `&gt;` for `>`, `&amp;` for `&`, and `&copy;` for `©`. Always end entity codes with a semicolon `;`.

### Hindi
HTML में स्पेशल सिम्बल्स दिखाने के लिए एंटिटीज का इस्तेमाल होता है, जैसे `<` के लिए `&lt;`, `>` के लिए `&gt;`, और `©` के लिए `&copy;` लिखें। अंत में सेमीकोलन `;` लगाना न भूलें।

### Marathi
खास चिन्हे दाखवण्यासाठी एंटिटीज वापरतात (उदा. `<` साठी `&lt;` आणि `©` साठी `&copy;`). शेवटी सेमीकोलन `;` देणे आवश्यक आहे.

### Hinglish
Special reserved characters ko screen par literal text dikhane ke liye entities use hoti hain (jaise `<` ke liye `&lt;` aur `&` ke liye `&amp;`). Semicolon `;` hamesha add karein.

## 📝 Essential HTML Entities Reference

| Symbol / Character | Meaning | Entity Name | Entity Code |
|---|---|---|---|
| `<` | Less than | `&lt;` | `&#60;` |
| `>` | Greater than | `&gt;` | `&#62;` |
| `&` | Ampersand | `&amp;` | `&#38;` |
| `"` | Double quotation mark | `&quot;` | `&#34;` |
| `'` | Single quote / Apostrophe | `&apos;` | `&#39;` |
| `©` | Copyright symbol | `&copy;` | `&#169;` |
| `™` | Trademark symbol | `&trade;` | `&#8482;` |
| `€` | Euro currency symbol | `&euro;` | `&#8364;` |
| `₹` | Indian Rupee symbol | `&#8377;` | `&#8377;` |
|   | Non-breaking space | `&nbsp;` | `&#160;` |

## 🧠 Why Do We Need Entities?

Suppose you want to write a tutorial explaining how to use paragraph tags in HTML:

- **Incorrect Code:** `<p>To make a paragraph, type <p> in HTML.</p>`
- **Problem:** The browser sees `<p>` inside the sentence and thinks you are starting a new paragraph element!
- **Correct Code with Entities:** `<p>To make a paragraph, type &lt;p&gt; in HTML.</p>`

## 📝 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Entities Example</title>
</head>
<body>

  <h1>HTML Entities Demonstration</h1>

  <p>To create a main heading in HTML, use the &lt;h1&gt; heading &lt;/h1&gt; tags.</p>

  <p>Condition: 5 &lt; 10 &amp;&amp; 20 &gt; 15</p>

  <p>Company Name: Johnson &amp; Johnson Co.</p>

  <p>Special Pricing: &#8377;1,499 or &euro;18.50</p>

  <hr>

  <footer>
    <p>Copyright &copy; 2026 Coding Notes &trade;. All rights reserved.</p>
  </footer>

</body>
</html>
```

## 👀 Output

- **"To create a main heading in HTML, use the `<h1>` heading `</h1>` tags."**
- **"Condition: 5 < 10 && 20 > 15"**
- **"Company Name: Johnson & Johnson Co."**
- **"Special Pricing: ₹1,499 or €18.50"**
- **"Copyright © 2026 Coding Notes ™. All rights reserved."**

## ⚠️ Common Mistakes

- **Forgetting the trailing semicolon `;`:** Writing `&lt` or `&copy` instead of `&lt;` or `&copy;`.
- **Using `&nbsp;` repeatedly for layout gaps:** Inserting `&nbsp;&nbsp;&nbsp;&nbsp;` to force gaps between text instead of using CSS `margin` or `padding`.

## 🧪 Try It Yourself

Write an HTML sentence displaying:
`In HTML, we write <a> for hyperlinks and & for ampersand.` using proper HTML entities.

## 🎯 Mini Challenge

Create a footer section displaying the text `Copyright © 2026 Student Portal ™ | Price: ₹999` using HTML entities for all symbols.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Colors](17-html-colors.md) | [Next: Audio →](19-audio.md)
