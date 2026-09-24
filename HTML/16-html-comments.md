# HTML Comments (`<!-- -->`)

> 🟢 Beginner

## 📖 Definition

**HTML comments** are developer notes written inside the HTML document. Browsers completely ignore comments during page rendering, so they are not visible on the rendered webpage layout.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
HTML comments (`<!-- comment -->`) are notes for developers that browsers do not display on screen. Use comments to document code structure or temporarily disable code during debugging.

### Hindi
कमेंट्स (`<!-- टिप्पणी -->`) डेवलपर्स के लिए नोट्स होते हैं जिन्हें ब्राउज़र स्क्रीन पर नहीं दिखाता। इनका उपयोग कोड स्ट्रक्चर समझाने या डिबगिंग के लिए होता है।

### Marathi
कमेंट्स (`<!-- टिप्पणी -->`) कोड वाचणाऱ्यांसाठी किंवा स्वतःसाठी लिहिलेल्या नोट्स असतात. ब्राउझर हे वाचत नाही किंवा स्क्रीनवर दाखवत नाही.

### Hinglish
Comments (`<!-- note -->`) developer notes ke liye hote hain jo browser screen par render nahi hote. Debugging ke time code temporarily disable karne ke liye bhi use hote hain.

## 📝 Syntax & Usage

```html
<!-- Single-line HTML comment -->

<!-- 
  Multi-line HTML comment
  spanning across multiple lines
-->
```

## 🧠 Why Do We Use Comments?

1. **Documenting Code Sections:** Helps you and team members navigate large HTML documents by labeling header, navigation, main content, sidebar, and footer sections.
   ```html
   <!-- ==================== MAIN NAVIGATION START ==================== -->
   <nav>
     <a href="index.html">Home</a>
     <a href="about.html">About</a>
   </nav>
   <!-- ==================== MAIN NAVIGATION END ==================== -->
   ```
2. **Temporarily Disabling Code During Debugging:** You can "comment out" code blocks to test layout changes without deleting the code:
   ```html
   <!-- <p>This feature is temporarily disabled for maintenance.</p> -->
   ```

## 🚨 CRITICAL SECURITY WARNING

HTML comments are sent to the client browser and can be viewed by **ANYONE** who inspects page source code (by pressing `Ctrl + U` or using browser Developer Tools `F12`).

> [!CAUTION]
> **NEVER store sensitive information in HTML comments!**
> Do not put database passwords, private API keys, user credentials, personal phone numbers, or confidential developer notes inside HTML comments.

## 📝 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Comments Example</title>
</head>
<body>

  <!-- Header Banner Area -->
  <header>
    <h1>Tech Learning Portal</h1>
  </header>

  <!-- Main Article Content -->
  <main>
    <article>
      <h2>Learning Web Development</h2>
      <p>HTML is the starting point for building modern web applications.</p>

      <!-- TODO: Add video tutorial link here after review -->
    </article>
  </main>

  <!-- Footer Info -->
  <footer>
    <p>© 2026 Tech Learning Portal</p>
  </footer>

</body>
</html>
```

## ⚠️ Common Mistakes

- **Nesting comments inside comments:** Writing `<!-- <!-- nested --> -->` is invalid syntax and breaks parsing in web browsers.
- **Putting sensitive keys or notes in comments:** Exposes private information publicly to website visitors.
- **Leaving clutter comments in production code:** Clean up temporary debugging comments before publishing websites live.

## 🧪 Try It Yourself

Open an HTML file in VS Code and:
1. Add comments marking the start and end of a navigation bar.
2. Comment out a paragraph so it disappears from the browser preview.
3. Use keyboard shortcut `Ctrl + /` (or `Cmd + /` on Mac) to toggle comments quickly in VS Code.

## 🎯 Mini Challenge

Open any public website in your browser, press `Ctrl + U` to view the page source, and locate the HTML comments written by its developers.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Attributes](15-html-attributes.md) | [Next: Colors →](17-html-colors.md)
