# Accessibility Basics

> 🟡 Intermediate

## 📖 Definition

Accessibility means designing a web page so people with different abilities can use it.

## 🤔 Why Do We Use It?

People may use a keyboard, screen reader, magnifier, captions, or other tools. Accessible pages welcome more visitors.

## 🧠 Simple Explanation

Accessibility is like adding a ramp beside stairs. It gives more people a practical way to enter and use the same place.

## 📝 Syntax

```html
<label for="email">Email address</label>
<input id="email" type="email">
<img src="team.jpg" alt="Three shop staff standing at the counter">
```

Use clear headings, meaningful links, labels, keyboard-friendly controls, and good color contrast.

## 💡 Practical Example

Before publishing a form, try using it with only the Tab key. You should be able to reach each field and button, and see which item is selected. This quick test catches many common problems.

## ✅ Remember

Accessibility is not an optional extra added at the end. Small habits—such as writing real labels and alt text—make every page more useful from the beginning.

- Use labels for form fields.
- Write meaningful alternative text for useful images.
- Make sure the keyboard can reach interactive controls.
- Use enough colour contrast for readable text.

## 💻 Example

```html
<label for="phone">Phone number</label>
<input id="phone" type="tel" autocomplete="tel">

<a href="contact.html">Contact our support team</a>
```

## 👀 Output

A clearly labelled phone field and a link that explains its destination appear on the page.

## 🔍 How It Works

The label tells every visitor what to enter. The descriptive link text remains useful when a screen reader lists links out of context.

## ⚠️ Common Mistakes

- Do not use “click here” as link text.
- Do not remove keyboard focus outlines without adding an equally visible replacement.
- Do not write alt text for purely decorative images; use `alt=""` instead.

## 🧪 Try It Yourself

Use only the Tab key to test a small practice form. Check that you can reach every control.

## 🎯 Mini Challenge

Review a page you built earlier and improve one image, one link, and one form field for accessibility.

## 🧭 Navigation

[← First: HTML Home](README.md) | [← Previous: HTML5 Features](23-html5-features.md) | [Next: Mini Projects →](25-mini-projects.md)
