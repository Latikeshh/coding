# HTML5 Features

> 🟡 Intermediate

## 📖 Definition

HTML5 is the modern version of HTML. It introduced useful elements and browser features for richer web pages.

## 🤔 Why Do We Use It?

It lets developers build clearer pages and include media without needing old browser plugins.

## 🧠 Simple Explanation

HTML5 is an updated toolbox. It added better tools, such as semantic sections, audio, video, and better form inputs.

## 📝 Syntax

```html
<!DOCTYPE html>
<input type="email" required>
<video controls src="lesson.mp4"></video>
```

`<!DOCTYPE html>` tells browsers to use modern HTML rules.

## 💡 Practical Example

Before HTML5, adding video often required a separate plugin. Today, the `<video>` element lets a browser play a video directly, while an `email` input can help a visitor enter an email address.

## ✅ Remember

HTML5 is still HTML, not a completely separate language to learn. You use its modern features alongside the headings, paragraphs, and links you already know.

- HTML5 introduced meaningful structural elements.
- It supports audio and video without old browser plugins.
- Modern input types help forms.

## 💻 Example

```html
<main>
  <h1>Newsletter</h1>
  <label for="email">Email</label>
  <input id="email" type="email" required>
</main>
```

## 👀 Output

A semantic main area contains a labelled email field. Browsers can help check that the entered value looks like an email address.

## 🔍 How It Works

`<main>` gives the content a clear role. `type="email"` and `required` provide useful built-in form behaviour, though a server must still validate important data.

## ⚠️ Common Mistakes

- Do not call every modern feature “HTML5” without explaining its purpose.
- Do not assume browser checks alone make form data safe.

## 🧪 Try It Yourself

Use one semantic element and one modern input type in a short page.

## 🎯 Mini Challenge

Update an old-style page outline to use at least three meaningful HTML elements.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Semantic HTML](22-semantic-html.md) | [Next: Accessibility Basics →](24-accessibility-basics.md)
