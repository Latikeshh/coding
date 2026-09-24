# Modern HTML5 Features & Built-in Validation

> 🟡 Intermediate

## 📖 Definition

**HTML5** is the modern living standard specification for HTML (maintained by WHATWG). It introduced semantic structural elements, native audio/video support, interactive graphics (`<canvas>`, `<svg>`), offline storage APIs, and powerful built-in client-side form validation attributes.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
HTML5 introduced semantic tags, native audio/video, canvas graphics, and built-in form validation attributes (`required`, `pattern`, `type="email"`).

### Hindi
HTML5 में सिमेंटिक टैग्स, नेटिव मीडिया (ऑडियो/वीडियो), कैनवस, और इन-बिल्ट फॉर्म वैलिडेशन (`required`, `pattern`) जैसे आधुनिक फीचर्स मिले।

### Marathi
HTML5 मुळे ऑडिओ, व्हिडिओ, नवीन इनपुट प्रकार आणि बिल्ट-इन फॉर्म व्हॅलिडेशन (`required`) वापरणे सोपे झाले.

### Hinglish
HTML5 modern web standard hai jo semantic elements, native media, aur client-side form validation attributes (`required`, `pattern`, `min`, `max`) provide karta hai.

## 🚀 Key Innovations Introduced in HTML5

1. **Simplified Document Boilerplate:** Clean, short doctype: `<!DOCTYPE html>`.
2. **Semantic Structural Tags:** `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<figure>`.
3. **Native Media Elements:** `<audio>`, `<video>`, and `<track>` without requiring third-party Flash plugins.
4. **Enhanced Input Types:** `email`, `url`, `tel`, `number`, `date`, `time`, `color`, `range`, `search`.
5. **Built-in Form Validation Attributes:** `required`, `pattern`, `min`, `max`, `step`, `minlength`, `maxlength`.
6. **2D/3D Graphics & Vector Support:** `<canvas>` API and native inline `<svg>` graphics.

## 📝 Built-in Client-Side Form Validation

Before HTML5, verifying user email formatting or required fields required writing custom JavaScript. HTML5 handles client-side form validation natively in the browser:

```html
<form>
  <!-- Compulsory text entry -->
  <label for="username">Username (required):</label>
  <input id="username" type="text" name="user" required minlength="3" maxlength="15">

  <!-- Validated email format -->
  <label for="email">Email Address:</label>
  <input id="email" type="email" name="email" required placeholder="user@domain.com">

  <!-- Regex pattern matching (e.g. 10-digit Indian phone number) -->
  <label for="phone">Phone (10 digits):</label>
  <input id="phone" type="tel" name="phone" pattern="[0-9]{10}" required placeholder="9876543210">

  <button type="submit">Submit</button>
</form>
```

When a user submits invalid data, modern browsers automatically block form submission and display a localized popup bubble error message (e.g. *"Please fill out this field"* or *"Please enter an email address"*).

## 🛑 Important Security Rule: Client vs. Server Validation

While HTML5 client-side validation provides a fast, responsive user experience, **it can be bypassed by malicious users** by editing HTML inside browser Developer Tools.

> [!IMPORTANT]
> **Always perform backend server-side validation!** Client-side HTML5 validation is for user convenience, while server-side validation is required for application security.

## 📝 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML5 Validation Demo</title>
</head>
<body>

  <main>
    <h1>Event Registration</h1>

    <form action="/register" method="POST">

      <p>
        <label for="full-name">Full Name:</label><br>
        <input id="full-name" type="text" name="fullName" required minlength="2">
      </p>

      <p>
        <label for="email">Email Address:</label><br>
        <input id="email" type="email" name="email" required autocomplete="email">
      </p>

      <p>
        <label for="ticket-count">Number of Tickets (1–5):</label><br>
        <input id="ticket-count" type="number" name="tickets" min="1" max="5" value="1" required>
      </p>

      <p>
        <button type="submit">Complete Booking</button>
      </p>

    </form>
  </main>

</body>
</html>
```

## ⚠️ Common Mistakes

- **Relying solely on client-side HTML validation for security:** Always validate data on the backend server.
- **Using complex regex in `pattern` without testing:** Unchecked regex patterns can lock out valid user inputs.

## 🧪 Try It Yourself

Build a sign-up form utilizing HTML5 validation attributes:
1. `type="email"` with `required`.
2. `type="password"` with `minlength="8"`.
3. `type="tel"` with `pattern="[0-9]{10}"`.

## 🎯 Mini Challenge

Test HTML5 validation in your browser by attempting to submit an empty form or entering `"not-an-email"` into a `type="email"` field.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Semantic HTML](22-semantic-html.md) | [Next: Accessibility Basics →](24-accessibility-basics.md)
