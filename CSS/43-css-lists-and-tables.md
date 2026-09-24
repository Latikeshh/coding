# CSS Lists & Table Styling (`list-style`, `border-collapse`)

> 🟢 Beginner

## 📖 Definition

**CSS Lists & Table Styling** controls bullet markers, list spacing, table border collapsing, cell padding, zebra striping, and responsive table layout rules:
- **List Properties:** `list-style-type`, `list-style-position`, `list-style-image`, `list-style: none`.
- **Table Properties:** `border-collapse: collapse`, `border-spacing`, `caption-side`, `table-layout: fixed`.

## 🌐 Multilingual Explanation

### English
Remove default list bullets using `list-style: none`. Combine `border-collapse: collapse`, padding, and zebra-striping (`tr:nth-child(even)`) for clean accessible table styling.

### Hindi
`list-style: none` se list ke default bullet points ko hataya jaata hai. Tables ko clean dikhane ke liye `border-collapse: collapse` aur `tr:nth-child(even)` zebra striping ka use karein.

### Marathi
List sathi `list-style: none` vaprun bullets kadhlya jaatat. Table styling sathi `border-collapse: collapse` vapartaat.

## 📚 List Properties Reference Table

| Property | Purpose & Value Options | Example Syntax |
|---|---|---|
| `list-style-type` | Controls bullet/number marker shape (`none`, `disc`, `circle`, `square`, `decimal`) | `list-style-type: square;` |
| `list-style-position` | Bullet position relative to text (`outside`, `inside`) | `list-style-position: inside;` |
| `list-style-image` | Replaces bullet points with a custom image URL | `list-style-image: url("check.svg");` |
| `list-style` (Shorthand) | Strips bullets and padding completely | `list-style: none; padding: 0; margin: 0;` |

## 📚 Table Properties Reference Table

| Property | Purpose & Value Options | Example Syntax |
|---|---|---|
| `border-collapse` | Combines adjacent table cell borders into a single border | `border-collapse: collapse;` |
| `border-spacing` | Distance between separate table cell borders (when uncollapsing) | `border-spacing: 10px;` |
| `table-layout` | Column width calculation (`auto`, `fixed`) | `table-layout: fixed;` |
| `caption-side` | Position of `<caption>` title (`top`, `bottom`) | `caption-side: bottom;` |

## 💻 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lists and Table Styling Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="table-card">
    <h2>Student Grade Report</h2>
    <table>
      <caption>Semester 1 Examination Results</caption>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Subject</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Alex Kumar</td><td>Web Development</td><td>A+</td></tr>
        <tr><td>Riya Sharma</td><td>Data Structures</td><td>A</td></tr>
        <tr><td>David Miller</td><td>Database Systems</td><td>B+</td></tr>
        <tr><td>Sara Khan</td><td>Cyber Security</td><td>A+</td></tr>
      </tbody>
    </table>
  </div>

</body>
</html>
```

```css
/* style.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f3f4f6;
  padding: 30px;
  display: flex;
  justify-content: center;
}

.table-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  width: 100%;
  max-width: 600px;
}

h2 {
  margin-top: 0;
  color: #111827;
}

/* Accessible Table Styling */
table {
  width: 100%;
  border-collapse: collapse; /* Combines double borders into single clean lines */
  margin-top: 15px;
}

caption {
  caption-side: bottom;
  padding-top: 10px;
  font-size: 13px;
  color: #6b7280;
}

th, td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #e5e7eb;
}

th {
  background-color: #1e293b;
  color: white;
  font-weight: bold;
}

/* Zebra Striping using :nth-child(even) */
tbody tr:nth-child(even) {
  background-color: #f8fafc;
}

/* Row Hover Highlight */
tbody tr:hover {
  background-color: #f1f5f9;
}
```

## 👀 What You Will See

A clean, accessible data table featuring a dark header row, collapsed single-line borders, spacious cell padding, alternating zebra-striped rows, and row highlight feedback on hover.

## 🧪 Try It Yourself

1. Remove `border-collapse: collapse` from `table` and see how double border spaces appear between table cells.
2. Add `list-style: none; padding: 0; margin: 0;` to a `<ul>` list to create a clean, unbulleted flexbox link menu!

## ⚠️ Common Mistakes

- **Forgetting `border-collapse: collapse`:** Causes table cells to render with ugly double borders.
- **Forgetting `list-style: none` reset on navigation `<ul>`:** Leaves default bullet points floating over navigation menu links.

## 💡 Real-World Usage

`list-style: none; padding: 0; margin: 0;` is the standard reset applied to navigation lists (`<nav> <ul>`). `border-collapse: collapse` with zebra striping formats data tables, transaction histories, and analytics dashboards.

## 🔗 Related Topics

- [Borders, Border Radius & Box Shadows](13-borders.md)
- [Pseudo-classes (`:nth-child`)](24-pseudo-classes.md)
- [Navigation Bar Components](37-navigation-bars.md)

## ✅ Remember

- Use `list-style: none; padding: 0; margin: 0;` to strip list bullets for navbars.
- Always declare `border-collapse: collapse` on `<table>` elements.
- Use `tbody tr:nth-child(even)` for readable zebra-striped data tables.

## 🧭 Navigation

[← Previous](42-overflow-and-visibility.md) | [CSS Home](00-README.md)
