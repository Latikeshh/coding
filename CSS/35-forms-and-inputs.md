# Styling Forms & Inputs

> 🟢 Beginner

## 📖 Definition

Styling HTML form controls (`<input>`, `<textarea>`, `<select>`, `<button>`, `<fieldset>`) transforms browser default form elements into attractive, accessible, and responsive user interface controls using `padding`, `border-radius`, custom focus states (`:focus-visible`), and validation states (`:invalid`, `:disabled`).

## 🌐 Multilingual Explanation

### English
Style form controls using `box-sizing: border-box`, `padding`, `border-radius`, and custom focus rings (`:focus-visible`) for web accessibility.

### Hindi
Form input fields ko style karne ke liye `box-sizing: border-box`, `padding`, `border-radius` ka use karein aur accessibility ke liye custom `:focus` outline dein.

### Marathi
Input fields na `padding`, `border-radius` ani `:focus` state deun form aakarshak ani sahaj vaparnya-saraka banvava.

## 🤔 Why Do We Style Forms?

Default browser form inputs look dated and vary significantly between operating systems (Windows vs. iOS vs. Android). Custom CSS form styling establishes consistent brand aesthetics and improves usability by increasing touch target padding.

## 🧱 Key Form Styling Rules

1. **Apply `box-sizing: border-box`:** Ensures `width: 100%` inputs do not overflow parent form containers when padding is added.
2. **Increase Padding & Touch Targets:** Set at least `10px`–`14px` padding inside text boxes so text doesn't touch border edges.
3. **Custom Accessible Focus States:** Style `:focus-visible` to highlight active inputs when focused by keyboard `Tab` navigation.
4. **Style Placeholder Text:** Use `::placeholder` to set subtle, readable contrast hint text.

## 📝 Syntax & Code Structure

```css
/* Base Form Control Reset */
input[type="text"],
input[type="email"],
input[type="password"],
select,
textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-family: inherit;
  font-size: 1rem;
  background-color: #ffffff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

/* Custom Accessible Focus Ring */
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
}

/* Custom Placeholder Color */
input::placeholder,
textarea::placeholder {
  color: #9ca3af;
}
```

## 💻 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Styling Forms Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="form-card">
    <h2>Contact Us</h2>
    <form action="#" method="POST">

      <div class="form-group">
        <label for="name">Full Name</label>
        <input id="name" type="text" placeholder="Alex Kumar" required>
      </div>

      <div class="form-group">
        <label for="email">Email Address</label>
        <input id="email" type="email" placeholder="alex@example.com" required>
      </div>

      <div class="form-group">
        <label for="subject">Inquiry Subject</label>
        <select id="subject">
          <option value="general">General Inquiry</option>
          <option value="support">Technical Support</option>
          <option value="billing">Billing Question</option>
        </select>
      </div>

      <div class="form-group">
        <label for="message">Your Message</label>
        <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
      </div>

      <button type="submit" class="submit-btn">Send Message</button>

    </form>
  </div>

</body>
</html>
```

```css
/* style.css */
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f3f4f6;
  padding: 30px;
  display: flex;
  justify-content: center;
}

.form-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 450px;
}

h2 {
  margin-top: 0;
  color: #111827;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-weight: bold;
  font-size: 14px;
  color: #374151;
  margin-bottom: 6px;
}

input[type="text"],
input[type="email"],
select,
textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 15px;
  color: #1f2937;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

.submit-btn:hover {
  background-color: #1d4ed8;
}
```

## 👀 What You Will See

A modern contact form with spacious text inputs, a dropdown select box, a message textarea, and interactive blue focus halo rings when input boxes are clicked or tabbed into.

## 🧪 Try It Yourself

Press the `Tab` key repeatedly in your browser to navigate through the form inputs and observe the glowing blue `:focus-visible` halo rings!

## ⚠️ Common Mistakes

- **Removing focus outlines without replacement (`outline: none`):** Prevents keyboard users from knowing which input box is currently active. Always provide a custom focus style (like `box-shadow` or `border-color`).
- **Forgetting `display: block` on `<label>`:** Causes labels to sit awkwardly beside text boxes instead of stacking neatly above them.

## 💡 Real-World Usage

E-commerce checkout forms and login modals use custom CSS form styling, floating labels, and instant validation indicators (`:invalid`) to guide users smoothly.

## 🔗 Related Topics

- [Pseudo-classes](24-pseudo-classes.md)
- [Pseudo-elements](25-pseudo-elements.md)
- [CSS Mini Projects](38-mini-projects.md)

## ✅ Remember

- Use `box-sizing: border-box` so inputs with `width: 100%` fit inside parent containers.
- Add comfortable inner `padding: 12px` to increase input touch target size.
- Always provide accessible `:focus-visible` halo rings for keyboard navigation.

## 🧭 Navigation

[← Previous](34-devtools.md) | [CSS Home](00-README.md) | [Next →](36-card-layout.md)
