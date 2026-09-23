# HTML Attributes

> 🟢 Beginner

## 📖 Definition

Attributes give extra information to an HTML element. They are written inside the opening tag.

## 🤔 Why Do We Use It?

They can set a link destination, identify an element, describe an image, or add a class for styling.

## 🧠 Simple Explanation

An attribute is like a label on a package. The package is the element; the label adds a useful detail.

## 📝 Syntax

```html
<a href="about.html" title="Learn about us">About us</a>
```

Here, `href` and `title` are attributes. Attribute values usually go in quotes.

## 💡 Practical Example

In `<img src="logo.png" alt="Sunrise Bakery logo">`, `src` tells the browser which image to load and `alt` describes that image. One element can have more than one attribute.

## ✅ Remember

Attributes belong in the opening tag. Spell their names correctly and leave a space between attributes.

- Attributes add details to elements.
- Most attribute values are written in quotes.
- Different tags use different useful attributes.

## 💻 Example

```html
<input id="student-name" name="student_name" required>
```

## 👀 Output

The browser shows a text field. The `required` attribute helps prevent an empty form submission.

## 🔍 How It Works

`id` gives the element a unique page name, `name` labels its submitted data, and `required` is a boolean attribute: it works without a value.

## ⚠️ Common Mistakes

- Wrong: putting attributes after the closing `>`.
- Wrong: using the same `id` on two elements.

## 🧪 Try It Yourself

Add `href` and `title` attributes to a link on your page.

## 🎯 Mini Challenge

Add useful `id`, `name`, and `required` attributes to a form field.

## 🧭 Navigation

[← First: HTML Home](README.md) | [← Previous: Div and Span](14-div-and-span.md) | [Next: Comments →](16-html-comments.md)
