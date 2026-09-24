# Pseudo-classes (`:hover`, `:focus`, `:nth-child`)

> 🟢 Beginner

## 📖 Definition

A **Pseudo-class** is a keyword added to a selector (prefixed by a single colon `:`) that styles elements based on specific user interaction states (like `:hover`, `:focus`, `:active`) or structural DOM tree positions (like `:first-child`, `:nth-child()`, `:not()`).

## 🌐 Multilingual Explanation

### English
Pseudo-classes style elements based on user interaction state (`:hover`, `:focus`, `:visited`) or DOM tree position (`:first-child`, `:nth-child()`).

### Hindi
Pseudo-classes user interaction states (`:hover`, `:focus`) aur DOM position (`:first-child`, `:nth-child()`) ke aadhar par elements ko style karti hain.

### Marathi
User chya garajenusar (`:hover`, `:focus`) ani position anusar (`:first-child`, `:nth-child()`) elements na style karnyasaathi pseudo-classes vapartat.

## 🤔 Why Do We Use Pseudo-classes?

Pseudo-classes allow web pages to respond dynamically to user actions—highlighting buttons when hovered, showing focus rings around form inputs during keyboard navigation, or zebra-striping table rows—without needing custom JavaScript!

## 📚 Essential Pseudo-classes Reference Table

| Pseudo-class | Trigger State / Position | Example |
|---|---|---|
| **`:hover`** | Triggered when user hovers mouse over element | `a:hover { color: red; }` |
| **`:focus`** | Triggered when element receives keyboard/mouse focus | `input:focus { outline: 2px solid blue; }` |
| **`:active`** | Triggered during mouse click hold state | `button:active { transform: scale(0.98); }` |
| **`:visited`** | Target links user has already visited in browser | `a:visited { color: purple; }` |
| **`:first-child`** | Targets element if it is the first child of parent | `li:first-child { font-weight: bold; }` |
| **`:last-child`** | Targets element if it is the last child of parent | `p:last-child { margin-bottom: 0; }` |
| **`:nth-child(n)`** | Targets elements based on formula (`odd`, `even`, `2n+1`) | `tr:nth-child(even) { background: #f2f2f2; }` |
| **`:not(selector)`** | Negation selector targeting elements matching NOT | `button:not(.primary) { border: 1px solid; }` |
| **`:disabled`** | Targets disabled form controls | `button:disabled { opacity: 0.5; }` |

## ♿ Keyboard Focus & Accessibility Rule

Keyboard users navigate pages using the `Tab` key. Removing focus rings (`outline: none`) without providing custom `:focus` styling destroys accessibility for keyboard and screen reader users.

```css
/* Accessible Custom Focus Styling */
button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
}
```

## 💻 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pseudo-classes Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h2>Zebra Striped Table</h2>

  <table>
    <thead>
      <tr>
        <th>Student Name</th>
        <th>Grade</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Alex Kumar</td><td>A+</td></tr>
      <tr><td>Riya Sharma</td><td>A</td></tr>
      <tr><td>David Miller</td><td>B+</td></tr>
      <tr><td>Sara Khan</td><td>A+</td></tr>
    </tbody>
  </table>

  <br>
  <button class="interactive-btn">Hover &amp; Click Me</button>

</body>
</html>
```

```css
/* style.css */
body {
  font-family: Arial, sans-serif;
  padding: 30px;
  background-color: #f8f9fa;
}

/* Zebra Striping using :nth-child(even) */
table {
  width: 100%;
  max-width: 500px;
  border-collapse: collapse;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

th {
  background-color: #1f2937;
  color: white;
}

tbody tr:nth-child(even) {
  background-color: #f3f4f6; /* Alternating even row background */
}

tbody tr:hover {
  background-color: #e5e7eb; /* Hover highlight row */
}

/* Interactive Button States */
.interactive-btn {
  padding: 12px 24px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.interactive-btn:hover {
  background-color: #1d4ed8;
}

.interactive-btn:active {
  transform: scale(0.97); /* Depresses button slightly on click */
}

.interactive-btn:focus-visible {
  outline: 3px solid #93c5fd;
  outline-offset: 2px;
}
```

## 👀 What You Will See

- Table rows alternate with zebra striping backgrounds (`#f3f4f6`), and rows highlight when hovered.
- The button smoothly darkens on `:hover`, depresses on click (`:active`), and shows a blue outline on keyboard `Tab` focus (`:focus-visible`).

## 🧪 Try It Yourself

Change `tbody tr:nth-child(even)` to `tbody tr:nth-child(odd)` to swap zebra striping rows!

## ⚠️ Common Mistakes

- **Removing outline focus rings (`outline: none` or `outline: 0`) without replacement:** Leaves keyboard users unable to see where focus is located on the page.
- **Incorrect Order for Link States (LVHA Rule):** Link pseudo-classes should be declared in the **LVHA** order: `:link`, `:visited`, `:hover`, `:active`.

## 💡 Real-World Usage

Pseudo-classes power interactive navigation hover states, zebra-striped data tables, form field validation error highlights (`:invalid`), and dark mode toggle states.

## 🔗 Related Topics

- [Basic Selectors](08-selectors.md)
- [Pseudo-elements](25-pseudo-elements.md)
- [Advanced Selectors](39-advanced-selectors.md)

## ✅ Remember

- Pseudo-classes start with a single colon `:`.
- Use `:nth-child(even)` for alternating table row backgrounds.
- Always provide accessible `:focus-visible` styling for keyboard navigation.

## 🧭 Navigation

[← Previous](23-media-queries.md) | [CSS Home](00-README.md) | [Next →](25-pseudo-elements.md)
