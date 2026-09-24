# Buttons (`<button>`, `type="submit"`, `type="button"`)

> 🟢 Beginner

## 📖 Definition

The **`<button>`** element creates clickable interactive buttons used to submit forms, reset form fields, or trigger custom JavaScript actions.

## 🌍 Multilingual Summary

### English
Use `<button type="submit">` inside forms to submit data and `<button type="button">` for JavaScript click events. Use anchor links `<a>` for page navigation.

### Hindi
Form data submit karne ke liye `<button type="submit">` aur JavaScript actions ke liye `<button type="button">` use karein. Dusre page par jaane ke liye `<a>` links use karein.

### Marathi
Form submit karanyasathi `<button type="submit">` ani JavaScript actions sathi `<button type="button">` vapra. Dusrya page var janyasathi `<a>` tags vapra.

## 🤔 Why Do We Use Buttons?

Buttons are the primary interactive triggers for user actions on web pages—submitting forms, opening modal dialogs, toggling dark mode, clearing inputs, or adding items to a shopping cart.

## 🧱 Button Types & Behaviors

Inside forms, the `type` attribute of a `<button>` determines its behavior:

| Button Type | Description & Behavior |
|---|---|
| `<button type="submit">` | Submits enclosing `<form>` data to the `action` URL. **Default behavior if `type` attribute is omitted inside a form.** |
| `<button type="reset">` | Resets all input fields inside the enclosing form back to their initial values. |
| `<button type="button">` | Plain clickable button with no default action. Used to trigger custom JavaScript functions. |

## ⚔️ `<button>` vs. `<a href="...">` (When to Use Which?)

- **Use `<a>` (Anchor Link):** When navigating to another webpage, URL, or document section (e.g., "About Us", "View Profile", "Go to Checkout").
- **Use `<button>`:** When triggering an action or state change on the current page without navigating away (e.g., "Submit Form", "Open Menu", "Close Modal", "Play Video").

## ⚔️ `<button>` vs. `<input type="submit">`

`<button>` is flexible because it can contain formatted HTML elements, SVG icons, and images, whereas `<input type="submit" value="...">` can only display plain text string values:

```html
<!-- Modern flexible <button> with icon -->
<button type="submit">
  <img src="icons/send.svg" alt="" width="16" height="16">
  <span>Send Feedback</span>
</button>

<!-- Legacy plain-text <input type="submit"> -->
<input type="submit" value="Send Feedback">
```

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Buttons Practice</title>
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
      <button type="reset">Reset Fields</button>
      <button type="button" onclick="alert('Help requested!')">Need Help?</button>
    </p>
  </form>

</body>
</html>
```

## 👀 Output / What You Will See

A newsletter form displaying a **Subscribe Now** submit button, a **Reset Fields** clear button, and a **Need Help?** JavaScript button.

## 🧪 Try It Yourself

1. Build a contact form containing an email input field.
2. Add a `<button type="submit">` button.
3. Add a `<button type="reset">` button.
4. Add a standalone `<button type="button">` with an inline `onclick` handler.

## ⚠️ Common Mistakes

- **Omitting `type="button"` on non-submitting form buttons:** Clicking a button without an explicit `type` attribute inside a form accidentally submits the form!
- **Using `<button>` for simple page navigation:** Use `<a href="page.html">` for page navigation so right-click "Open in new tab" works properly.

## 🌐 Real-World Usage

E-commerce checkout pages, web application dashboards, form submissions, and UI dropdowns rely on proper button types and accessibility labels.

## 🔗 Related Topics

- [Links](07-links.md)
- [Forms](11-forms.md)
- [Input Types](12-input-types.md)

## 💡 Remember

- Use `<button type="submit">` for form submission.
- Use `<button type="button">` for JavaScript actions.
- Use `<a>` links for page navigation.

## 🧭 Navigation

[← Previous: Input Types](12-input-types.md) | [HTML Home](00-README.md) | [Next: Generic Containers →](14-div-and-span.md)
