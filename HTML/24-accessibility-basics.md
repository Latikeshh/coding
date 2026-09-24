# Web Accessibility (a11y) & HTML Validation

> 🟡 Intermediate

## 📖 Definition

**Web Accessibility (a11y)** means building webpages so that everyone—including people with visual, auditory, physical, speech, or cognitive disabilities—can access, navigate, and understand web content seamlessly.

## 🌍 Multilingual Summary

### English
Web accessibility ensures pages work for everyone, including screen readers and keyboard users. Prefer native semantic HTML elements first before using ARIA. Always validate your HTML code.

### Hindi
Accessibility (a11y) ka matlab hai ki aapka web page sabhi users (screen readers, keyboard users) ke liye accessible ho. Pehle native semantic tags use karein, ARIA sirf zaroorat padne par.

### Marathi
Accessibility (a11y) mule screen reader ani keyboard vaparnaryansahit sarv users na webpage sahaj vaparta yete. ARIA aadhi nehammi native semantic tags vaprave.

## 🤔 Why Do We Use Accessibility & Validation?

Building accessible websites ensures compliance with legal standards, expands audience reach to millions of users with disabilities, improves SEO rankings, and ensures clean parsing across different web browsers and screen readers.

## ♿ 5 Core Pillars of Accessible HTML

1. **Form Input Labels:** Every form control must have a connected `<label for="id">` so screen readers state what information is expected.
2. **Descriptive Image Alternative Text:** All informative images must provide meaningful `alt` text. Purely decorative images must use `alt=""` so screen readers skip them.
3. **Logical Heading Hierarchy:** Use `<h1>` through `<h6>` to build a logical nested outline for your document content.
4. **Keyboard Navigability & Visible Focus:** All links, buttons, and form inputs must be reachable using the `Tab` key, maintaining a clear visible focus outline.
5. **Descriptive Link Text:** Avoid vague link text like *"click here"* or *"link"*. Use descriptive anchor text like *"Download Course Syllabus (PDF)"*.

## ⚖️ Native Semantic HTML vs. ARIA Rules

**ARIA (Accessible Rich Internet Applications)** attributes (`role="..."`, `aria-label="..."`, `aria-expanded="..."`) provide additional accessibility information for complex custom web widgets.

> [!IMPORTANT]
> **First Rule of ARIA:** *Do not use ARIA if a native HTML element already exists that provides the semantic meaning and keyboard behavior you need.*

```html
<!-- BAD: Custom clickable div with ARIA override -->
<div role="button" tabindex="0" onclick="submitForm()">Submit</div>

<!-- GOOD: Native HTML button (automatically focusable & screen reader accessible) -->
<button type="submit">Submit</button>
```

## 🔍 Checking HTML Code Quality: HTML Validation

Writing valid HTML ensures consistent rendering across browsers and assistive screen readers.

- **Browser Developer Tools:** Press `F12` or `Ctrl + Shift + I` in Chrome/Firefox/Edge to inspect the rendered DOM tree and console warnings.
- **W3C Markup Validation Service:** You can check your HTML code at [validator.w3.org](https://validator.w3.org/) to identify unclosed tags, invalid nesting, duplicate IDs, or missing required attributes.

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Accessible Contact Form</title>
</head>
<body>

  <header>
    <h1>Contact Support Team</h1>
  </header>

  <main>
    <form action="/contact" method="POST">

      <p>
        <label for="user-name">Full Name (required):</label><br>
        <input id="user-name" type="text" name="name" required placeholder="e.g. Alex">
      </p>

      <p>
        <label for="user-email">Email Address (required):</label><br>
        <input id="user-email" type="email" name="email" required placeholder="name@domain.com">
      </p>

      <p>
        <button type="submit" aria-label="Submit contact inquiry form">Send Inquiry</button>
      </p>

    </form>
  </main>

  <footer>
    <p><a href="privacy.html">Read Privacy Policy Statement</a></p>
  </footer>

</body>
</html>
```

## 👀 Output / What You Will See

A clean, accessible contact form with associated labels, visible keyboard focus indicators, descriptive link text, and valid semantic structure.

## 🧪 Try It Yourself

1. Open your webpage in a browser.
2. Press the `Tab` key repeatedly to verify that you can navigate through every link, button, and input box in logical order.
3. Validate your HTML code at [validator.w3.org](https://validator.w3.org/).

## ⚠️ Common Mistakes

- **Removing CSS focus outlines (`outline: none`):** Prevents keyboard users from seeing which button or link is currently focused.
- **Using color alone to convey meaning:** Relying solely on red text for error messages without text labels or icons.

## 🌐 Real-World Usage

Government portals, educational institutions, enterprise web applications, and global companies mandate WCAG accessibility compliance.

## 🔗 Related Topics

- [Headings](04-headings.md)
- [Forms](11-forms.md)
- [Semantic HTML](22-semantic-html.md)

## 💡 Remember

- Prefer native semantic HTML over ARIA.
- Connect every `<label for="id">` to its `<input id="id">`.
- Ensure keyboard focus outlines are visible.
- Validate HTML at validator.w3.org.

## 🧭 Navigation

[← Previous: HTML5 Features](23-html5-features.md) | [HTML Home](00-README.md) | [Next: Mini Projects →](25-mini-projects.md)
