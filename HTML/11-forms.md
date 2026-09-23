# Forms

> 🟢 Beginner

## 📖 Definition

A form collects information from a visitor, such as a name, message, or order choice.

## 🤔 Why Do We Use It?

Forms are used for contact pages, sign-ups, searches, and checkout pages.

## 🧠 Simple Explanation

A form is like a paper form at a clinic: a person fills in boxes and then sends the details.

## 📝 Syntax

```html
<form>
  <label for="name">Your name:</label>
  <input id="name" name="name">
  <button>Send</button>
</form>
```

A `label` tells people what information to enter.

## 💡 Practical Example

A bakery contact form might ask for a name, email, and message. Connect each label to its input using the same `for` and `id` value. Clicking the label then places the cursor in the correct box.

## ✅ Remember

HTML creates the form on screen. To actually save or email submitted information, a form needs a server or another service later.

- `<form>` groups related controls.
- A `<label>` explains each control.
- The `for` value must match the input `id`.

## 💻 Example

```html
<form>
  <label for="message">Your message</label>
  <textarea id="message" name="message"></textarea>
  <button type="submit">Send message</button>
</form>
```

## 👀 Output

A visitor sees a label, a larger text box, and a “Send message” button.

## 🔍 How It Works

`<textarea>` is useful for longer text. The matching `for="message"` and `id="message"` connect the label to the text box.

## ⚠️ Common Mistakes

- Do not rely on placeholder text instead of a label.
- Do not use the same `id` more than once on a page.

## 🧪 Try It Yourself

Create a contact form with a name field, email field, and message box.

## 🎯 Mini Challenge

Add a clear submit button and labels for every field without looking at the example.

## 🧭 Navigation

[← First: HTML Home](README.md) | [← Previous: Tables](10-tables.md) | [Next: Input Types →](12-input-types.md)
