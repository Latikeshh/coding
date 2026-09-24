# Links & Anchors (`<a>`)

> 🟢 Beginner

## 📖 Definition

The anchor element **`<a>`** creates hyperlinks that connect web pages, external websites, files, email addresses, phone numbers, or specific sections on the same webpage. Hyperlinks are the defining feature of the World Wide Web.

## 🌍 Multilingual Summary

### English
Hyperlinks are created using `<a href="URL">`. Use relative file paths for local project files and absolute URLs for external websites. Always write descriptive anchor text.

### Hindi
Hyperlinks banane ke liye `<a href="URL">` ka use hota hai. Local project files ke liye relative paths aur external sites ke liye absolute URLs likhein. Link text descriptive hona chahiye.

### Marathi
Hyperlinks tayar karanyasathi `<a href="URL">` vapartat. Local files sathi relative paths ani bahercha websites sathi absolute URLs dya. Link text spashta ani descriptive asava.

## 🤔 Why Do We Use Links?

Links enable seamless navigation between web documents. They allow users to click from one page to another, download resources, send emails, make phone calls on mobile devices, or jump directly to specific chapters on a long page.

## 📐 Link Syntax & Destinations

### 1. External Absolute URLs
Points to an external webpage on another domain:
```html
<a href="https://code.visualstudio.com" target="_blank" rel="noopener">Download VS Code</a>
```
- **`target="_blank"`:** Opens the destination link in a new browser tab.
- **`rel="noopener"`:** Security best practice when opening links in a new tab to prevent security vulnerabilities (`window.opener` exploits).

### 2. Internal Relative File Links
Points to another HTML file within the same project directory:
```html
<a href="about.html">About Us</a>
<a href="contact.html">Contact Us</a>
```

### 3. Fragment Links (Same-Page Jumps)
Jumps directly to an element on the current page with a matching `id` attribute:
```html
<!-- Link pointing to element id -->
<a href="#faq-section">Jump to FAQ Section</a>

<!-- Target element elsewhere on the page -->
<h2 id="faq-section">Frequently Asked Questions</h2>
```

### 4. Email & Telephone Links
Launches the user's default email client or phone dialer app:
```html
<!-- Email mailto link -->
<a href="mailto:support@example.com">Email Customer Support</a>

<!-- Phone tel link -->
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
  <p>Learn more about web standards at the <a href="https://developer.mozilla.org" target="_blank" rel="noopener">MDN Web Docs</a>.</p>

  <h2 id="contact">Get in Touch</h2>
  <p>Need help? Send an email to <a href="mailto:help@college.edu">help@college.edu</a> or call <a href="tel:+919876543210">+91 98765 43210</a>.</p>

</body>
</html>
```

## 👀 Output / What You Will See

Clickable blue underlined text strings that navigate to external pages, jump down to the `#contact` heading on the same page, trigger email software, or launch phone dialing on mobile devices.

## 🧪 Try It Yourself

1. Create a main navigation bar with two internal links (`index.html`, `about.html`).
2. Add an external link pointing to `https://github.com` opening in a new tab (`target="_blank" rel="noopener"`).
3. Create an email link using `mailto:`.

## ⚠️ Common Mistakes

- **Writing uninformative link text:** Writing `<a href="menu.html">Click here</a>` instead of descriptive text like `<a href="menu.html">View Restaurant Menu</a>`. Screen readers often navigate by listing links out of context.
- **Forgetting the `href` attribute:** Writing `<a>Contact Us</a>` creates an unclickable placeholder without a target destination.

## 🌐 Real-World Usage

Every website uses links for global navigation bars, breadcrumbs, social media links, email contact buttons, and table-of-contents jumps.

## 🔗 Related Topics

- [Text Formatting](06-text-formatting.md)
- [Images](08-images.md)
- [Buttons](13-buttons.md)

## 💡 Remember

- `href` specifies the destination URL.
- Always use `rel="noopener"` with `target="_blank"`.
- Use descriptive anchor text for accessibility and SEO.

## 🧭 Navigation

[← Previous: Text Formatting](06-text-formatting.md) | [HTML Home](00-README.md) | [Next: Images →](08-images.md)
