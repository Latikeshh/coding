# Styling Forms and Inputs

> 🟢 Beginner

## 📖 Definition

Forms and inputs are HTML elements used to collect user information, and CSS can make them look clean and user-friendly.

## 🤔 Why Do We Use It?

Styling forms improves usability and makes websites look more polished.

## 🧠 Simple Explanation

A form is a collection of inputs such as text boxes, buttons, checkboxes, and dropdowns.

## Common selectors

- `input`
- `button`
- `textarea`
- `select`
- `label`

## 📝 Syntax

```css
input {
  padding: 10px;
  border: 1px solid #ccc;
}

button {
  background: #007bff;
  color: white;
}
```

## 💡 Example

```css
form {
  max-width: 400px;
}

input, textarea, button {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Form Styling</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <form>
    <label>Name</label>
    <input type="text" placeholder="Enter your name">
    <button>Submit</button>
  </form>
</body>
</html>
```

```css
form {
  max-width: 400px;
}

input, textarea, button {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
}
```

## 👀 What You Will See

The form fields and button are spaced and styled consistently.

## 🧪 Try It Yourself

Change the button color and border radius to create a different style.

## ⚠️ Common Mistakes

- Making form controls too narrow or hard to click.
- Ignoring accessibility and readable labels.
- Styling only the button and not the surrounding layout.

## ✅ Remember

- Forms are interactive and should be easy to use.
- CSS makes them clearer and more attractive.
- Good form design improves conversion and usability.

## 🧭 Navigation

[← Previous](34-devtools.md) | [CSS Home](00-README.md) | [Next →](36-card-layout.md)
