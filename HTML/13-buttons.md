# Buttons (`<button>`, `type="submit"`, `type="button"`)

> 🟢 Beginner

## 📖 Definition

The **`<button>`** element creates clickable interactive buttons used to trigger form submissions, reset form inputs, or initiate JavaScript actions.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
Use `<button type="submit">` inside forms to submit data and `<button type="button">` for JavaScript click events. Use anchor links `<a>` for page navigation.

### Hindi
फॉर्म डाटा सबमिट करने के लिए `<button type="submit">` और JavaScript एक्शन्स के लिए `<button type="button">` का यूज़ करें। पेज नेविगेशन के लिए `<a>` लिंक का इस्तेमाल करें।

### Marathi
फॉर्म सबमिट करण्यासाठी `<button type="submit">` आणि JavaScript साठी `<button type="button">` वापरा. दुसऱ्या पेजवर जाण्यासाठी `<a>` टॅग वापरा.

### Hinglish
Form submit karne ke liye `<button type="submit">` aur JS actions ke liye `<button type="button">` use hota hai. Navigation ke liye `<a>` link best hai.

## 🧱 Button Types & Behaviors

Inside forms, the `type` attribute of a `<button>` defines its behavior:

| Button Type | Description & Behavior |
|---|---|
| `<button type="submit">` | Submits the enclosing `<form>` data to the `action` URL. **Default behavior if `type` is omitted inside a form.** |
| `<button type="reset">` | Resets all input fields inside the form back to their original initial values. |
| `<button type="button">` | Plain clickable button with no default action. Used to trigger custom JavaScript functions (e.g., toggling a modal, menu, or theme). |

```html
<!-- Form submission button -->
<button type="submit">Send Message</button>

<!-- Clear form fields -->
<button type="reset">Clear All Fields</button>

<!-- Custom JavaScript action -->
<button type="button" onclick="alert('Item added to cart!')">Add to Cart</button>
```

## ⚔️ `<button>` vs. `<a href="...">` (When to Use Which?)

- **Use `<a>` (Anchor Link):** When navigating to another page, URL, or document section (e.g., "About Us", "View Profile", "Go to Checkout").
- **Use `<button>`:** When triggering an action or state change without navigating away from the page (e.g., "Submit Form", "Open Menu", "Close Modal", "Play Video").

## ⚔️ `<button>` vs. `<input type="submit">`

`<button>` is modern and flexible because it can wrap formatted HTML content, icons, and images, whereas `<input type="submit" value="...">` can only display plain text inside its `value` attribute:

```html
<!-- Modern flexible <button> with icon -->
<button type="submit">
  <img src="icons/send.svg" alt="" width="16" height="16">
  <span>Send Feedback</span>
</button>

<!-- Legacy <input type="submit"> -->
<input type="submit" value="Send Feedback">
```

## 📝 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Buttons Demonstration</title>
</head>
<body>

  <h1>Form Action Buttons</h1>

  <form action="/subscribe" method="POST">
    <p>
      <label for="newsletter-email">Subscribe to Newsletter:</label><br>
      <input id="newsletter-email" type="email" name="email" required placeholder="name@domain.com">
    </p>

    <p>
      <button type="submit">Subscribe Now</button>
      <button type="reset">Reset</button>
    </p>
  </form>

</body>
</html>
```

## ⚠️ Common Mistakes

- **Omitting `type="button"` on non-submitting form buttons:** Clicking a button without a `type` attribute inside a form accidentally submits the form!
- **Using `<button>` for simple page navigation:** Use `<a href="page.html">` for navigating between pages so browser right-click "Open in new tab" works properly.

## 🧪 Try It Yourself

Build a small contact form containing:
1. One email input box.
2. A `<button type="submit">` button.
3. A `<button type="reset">` button.

## 🎯 Mini Challenge

Create an interactive UI snippet containing a button with `type="button"` and an inline `onclick` handler, paired with an anchor link (`<a>`) pointing to an external website.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Input Types](12-input-types.md) | [Next: Div and Span →](14-div-and-span.md)
