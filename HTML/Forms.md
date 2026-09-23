# Forms

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

[← First: HTML Home](README.md) | [← Previous: Tables](Tables.md) | [Next: Input Types →](Input-Types.md)
