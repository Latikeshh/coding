# Modern HTML Features & Built-in Validation

> 🟡 Intermediate

## 📖 Definition

The term **"HTML5"** refers to the major generation of HTML specifications introduced around the 2010s that brought semantic structural elements, native audio/video support, interactive graphics (`<canvas>`, `<svg>`), offline storage APIs, and built-in client-side form validation. Today, the HTML specification evolves continuously as a **Living Standard** maintained by WHATWG.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
HTML5 introduced semantic tags, native audio/video, canvas graphics, and built-in form validation attributes (`required`, `pattern`, `type="email"`). Today's HTML evolves continuously as a Living Standard.

### Hindi
HTML5 में सिमेंटिक टैग्स, नेटिव मीडिया (ऑडियो/वीडियो), कैनवस, और इन-बिल्ट फॉर्म वैलिडेशन (`required`, `pattern`) जैसे आधुनिक फीचर्स मिले। आज HTML एक लगातार अपडेट होने वाला Living Standard है।

### Marathi
HTML5 मुळे ऑडिओ, व्हिडिओ, नवीन इनपुट प्रकार आणि बिल्ट-इन फॉर्म व्हॅलिडेशन (`required`) वापरणे सोपे झाले. आज HTML हे 'Living Standard' म्हणून अपडेट होत राहते.

### Hinglish
HTML5 modern web features (semantic elements, native media, client-side form validation) introduce karta hai. Aaj HTML continuously update hone wala WHATWG Living Standard hai.

## 🚀 Key Innovations Introduced in HTML5

1. **Simplified Document Boilerplate:** Clean, short doctype declaration: `<!DOCTYPE html>`.
2. **Semantic Structural Tags:** `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<figure>`.
3. **Native Media Elements:** `<audio>`, `<video>`, and `<track>` without requiring third-party plugins.
4. **Enhanced Input Types:** `email`, `url`, `tel`, `number`, `date`, `time`, `color`, `range`, `search`.
5. **Built-in Form Validation Attributes:** `required`, `pattern`, `min`, `max`, `step`, `minlength`, `maxlength`.
6. **Graphics & Interactive Elements:** `<canvas>` API, inline `<svg>`, `<details>`, and `<summary>`.

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

  <!-- Regex pattern matching (e.g. 10-digit phone number) -->
  <label for="phone">Phone (10 digits):</label>
  <input id="phone" type="tel" name="phone" pattern="[0-9]{10}" required placeholder="9876543210">

  <button type="submit">Submit</button>
</form>
```

When a user submits invalid data, modern browsers automatically block form submission and display a localized popup error bubble.

## 🛑 Important Security Rule: Client vs. Server Validation

While HTML5 client-side validation provides a fast, responsive user experience and immediate feedback:

> [!IMPORTANT]
> **Client-side validation does NOT replace server-side validation.** Users can easily bypass client-side HTML validation by disabling JavaScript or editing HTML in Developer Tools. Always validate and sanitize user data on the backend server for security.

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
