# Links & Anchors (`<a>`)

> 🟢 Beginner

## 📖 Definition

The anchor tag **`<a>`** creates hyperlinks that connect web pages, files, email addresses, phone numbers, or specific sections on the same page. Hyperlinks are the foundation of navigation across the World Wide Web.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
Hyperlinks are created using `<a href="URL">`. Use relative paths for local files and absolute URLs for external websites. Use descriptive link text rather than generic "click here".

### Hindi
हाइपरलिंक बनाने के लिए `<a href="URL">` का इस्तेमाल होता है। अपनी वेबसाइट की फ़ाइलों के लिए relative paths और बाहरी साइट्स के लिए absolute URLs लिखें। स्पष्ट और अर्थपूर्ण लिंक टेक्स्ट लिखें।

### Marathi
वेब पेजवर लिंक तयार करण्यासाठी `<a href="URL">` वापरतात. स्वतःच्या वेबसाईटच्या फाइल्ससाठी relative paths आणि इतर साइट्ससाठी absolute URLs वापरा.

### Hinglish
Hyperlink banane ke liye `<a href="destination_url">` use hota hai. Anchor text descriptive hona chahiye (jaise "Download Syllabus" na ki "click here").

## 📝 Link Syntax & Destinations

### 1. External Absolute URLs
Points to an external webpage on another domain or server:
```html
<a href="https://code.visualstudio.com" target="_blank" rel="noopener">Download VS Code</a>
```
- **`target="_blank"`:** Opens the destination link in a new browser tab or window.
- **`rel="noopener"`:** A recommended security and privacy best practice when opening links in a new tab to prevent the opened page from accessing the opening page's `window.opener` object. (Modern browsers also include automatic built-in protections).

### 2. Internal Relative File Links
Points to another file within the same project folder structure:
```html
<a href="about.html">About Us</a>
<a href="contact.html">Contact Us</a>
```

### 3. Fragment / Section Links (Page Jumps)
Jumps directly to an element on the current page with a matching `id`:
```html
<!-- Link pointing to section -->
<a href="#faq-section">Jump to Frequently Asked Questions</a>

<!-- Target element elsewhere on page -->
<h2 id="faq-section">Frequently Asked Questions</h2>
```

### 4. Email & Telephone Links
Triggers the user's default email client or phone dialer app:
```html
<!-- Email link -->
<a href="mailto:support@example.com">Send Email Support</a>

<!-- Phone link -->
<a href="tel:+18005550199">Call Support: +1 (800) 555-0199</a>
```

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student Resource Hub</title>
</head>
<body>

  <h1>Student Resource Hub</h1>

  <nav>
    <a href="index.html">Home</a> |
    <a href="courses.html">Courses</a> |
    <a href="#contact">Contact Us</a>
  </nav>

  <hr>

  <h2>Official Documentation</h2>
  <p>Learn more about HTML standards at the <a href="https://developer.mozilla.org" target="_blank" rel="noopener">MDN Web Docs</a>.</p>

  <h2 id="contact">Get in Touch</h2>
  <p>Need assistance? Email <a href="mailto:help@college.edu">help@college.edu</a> or call <a href="tel:+919876543210">+91 98765 43210</a>.</p>

</body>
</html>
```

## 👀 Output

Clickable blue underlined text strings that navigate to external websites, jump down to the `#contact` section, open email software, or initiate phone calls on mobile devices.

## ⚠️ Common Mistakes

- **Uninformative link text:** Writing `<a href="menu.html">Click here</a>` instead of `<a href="menu.html">View Restaurant Menu</a>`. Screen reader users often navigate by jumping through a list of links out of context.
- **Missing `href` attribute:** Writing `<a>Contact Us</a>` creates an unclickable anchor without a destination link.

## 🧪 Try It Yourself

Create a navigation menu containing:
1. Two internal relative links (`index.html` and `about.html`).
2. One external link to `github.com` opening in a new tab (`target="_blank" rel="noopener"`).
3. One email link using `mailto:`.

## 🎯 Mini Challenge

Build a single long page with a "Table of Contents" at the top containing fragment links (`#chapter-1`, `#chapter-2`) that jump directly to matching headings further down the page.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Text Formatting](06-text-formatting.md) | [Next: Images →](08-images.md)
