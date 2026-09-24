# HTML Comments (`<!-- -->`)

> 🟢 Beginner

## 📖 Definition

**HTML comments** are developer notes written inside the HTML document. Web browsers completely ignore comments during page rendering, so they are not displayed on the rendered webpage.

## 🌍 Multilingual Summary

### English
HTML comments (`<!-- comment -->`) are notes for developers that browsers do not display on screen. Use comments to document code structure or temporarily disable code during debugging.

### Hindi
Comments (`<!-- note -->`) developer notes ke liye hote hain jo browser screen par render nahi hote. Code section document karne ya debugging ke time code disable karne ke liye use hote hain.

### Marathi
Comments (`<!-- note -->`) developer notes sathi astat je browser screen var dakhat nahi. Code cha structure samajhanyasathi ani debugging sathi vapartat.

## 🤔 Why Do We Use Comments?

1. **Documenting Code Structure:** Helps developers navigate large HTML files by labeling header, navigation, main content, sidebar, and footer sections.
2. **Temporarily Disabling Code:** Allows developers to "comment out" code blocks to test layout changes without deleting code.

## 📐 Syntax & Examples

```html
<!-- Single-line HTML comment -->

<!-- 
  Multi-line HTML comment
  spanning across multiple lines
-->
```

## 🚨 CRITICAL SECURITY WARNING

HTML comments are transmitted to the user's browser and can be viewed by **ANYONE** inspecting page source code (`Ctrl + U` or Developer Tools `F12`).

> [!CAUTION]
> **NEVER store sensitive information in HTML comments!**
> Do not put database passwords, private API keys, user credentials, phone numbers, or confidential developer notes inside HTML comments.

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Comments Example</title>
</head>
<body>

  <!-- ==================== HEADER SECTION ==================== -->
  <header>
    <h1>Tech Learning Portal</h1>
  </header>

  <!-- ==================== MAIN CONTENT AREA ==================== -->
  <main>
    <article>
      <h2>Learning Web Development</h2>
      <p>HTML is the foundation for building modern web applications.</p>

      <!-- TODO: Add video tutorial component here after review -->
    </article>
  </main>

  <!-- ==================== FOOTER SECTION ==================== -->
  <footer>
    <p>&copy; 2026 Tech Learning Portal</p>
  </footer>

</body>
</html>
```

## 👀 Output / What You Will See

The browser displays only the heading **"Tech Learning Portal"**, article heading, paragraph, and footer copyright text. All `<!-- comment -->` lines are completely invisible to website visitors.

## 🧪 Try It Yourself

1. Open an HTML file in VS Code.
2. Add comments marking the start and end of a navigation bar.
3. Comment out a paragraph to hide it from the browser preview.
4. Use keyboard shortcut `Ctrl + /` (or `Cmd + /` on Mac) to toggle comments quickly in VS Code.

## ⚠️ Common Mistakes

- **Nesting comments inside comments:** Writing `<!-- <!-- nested --> -->` is invalid syntax and breaks HTML parsing.
- **Putting sensitive credentials in comments:** Exposes private passwords or keys publicly to website visitors inspecting page source.
- **Leaving debug clutter in production:** Clean up temporary debugging comments before publishing websites live.

## 🌐 Real-World Usage

Developers use comments to mark section boundaries in large multi-page templates and leave `TODO:` notes for teammates.

## 🔗 Related Topics

- [Document Structure](03-html-document-structure.md)
- [HTML Attributes](15-html-attributes.md)

## 💡 Remember

- Comments use `<!-- comment -->` syntax.
- Browsers ignore comments during rendering.
- NEVER put sensitive passwords or API keys in HTML comments.

## 🧭 Navigation

[← Previous: Attributes](15-html-attributes.md) | [HTML Home](00-README.md) | [Next: Colors →](17-html-colors.md)
