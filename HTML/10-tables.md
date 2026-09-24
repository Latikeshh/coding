# Tables (`<table>`, `<thead>`, `<tbody>`, `<caption>`)

> 🟢 Beginner

## 📖 Definition

The **`<table>`** element presents structured, 2-dimensional **tabular data** arranged into rows and columns. Tables must be used strictly for tabular data (e.g., student grade sheets, flight schedules, pricing plans, timetables), and **never for page layout**.

## 🌍 Multilingual Summary

### English
Tables display structured tabular data. Structure tables using `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>` (row), `<th>` (header cell), and `<td>` (data cell).

### Hindi
Tabular data ke liye `<table>` use karein. `<caption>` table summary deta hai, `<tr>` row banata hai, `<th>` header cell hai, aur `<td>` normal data cell hai. Page layout ke liye tables kabhi mat use karein.

### Marathi
Tabular data sathi `<table>` vapra. `<caption>` table chi mahiti dete, `<tr>` row tayar karto, `<th>` header cell aahe, ani `<td>` normal data cell aahe. Layout sathi tables kadhihi vapru naka.

## 🤔 Why Do We Use Tables?

Tabular data requires rigid grid alignment so visitors and screen readers can analyze relationships between rows and columns (e.g. comparing student marks across subjects or comparing software subscription tiers).

## 🧱 Standard HTML Table Structure

An accessible, well-structured table uses semantic sectioning elements:

| Element | Description & Role |
|---|---|
| `<table>` | Outer container wrapping all table content. |
| `<caption>` | Title or description of the table data for screen readers and users. |
| `<thead>` | Groups header rows defining column titles. |
| `<tbody>` | Groups primary body data rows. |
| `<tfoot>` | Groups summary or total rows at the bottom of the table. |
| `<tr>` | Defines a single horizontal table row (*table row*). |
| `<th>` | Defines a bold, centered header cell (*table header*). Uses `scope="col"` or `scope="row"`. |
| `<td>` | Defines a standard data cell (*table data*). |

## 🔑 Spanning Rows & Columns (`colspan` & `rowspan`)

- **`colspan="N"`:** Spans a single cell horizontally across `N` columns.
- **`rowspan="N"`:** Spans a single cell vertically across `N` rows.

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Student Grade Report</title>
</head>
<body>

  <h1>Semester Examination Results</h1>

  <table>
    <caption>Table 1: Computer Science Semester 1 Results</caption>
    <thead>
      <tr>
        <th scope="col">Student Name</th>
        <th scope="col">Subject</th>
        <th scope="col">Marks (Out of 100)</th>
        <th scope="col">Grade</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Latikesh</td>
        <td>Web Development</td>
        <td>92</td>
        <td>A+</td>
      </tr>
      <tr>
        <td>Riya</td>
        <td>Database Systems</td>
        <td>88</td>
        <td>A</td>
      </tr>
      <tr>
        <td>Aarav</td>
        <td>Data Structures</td>
        <td>95</td>
        <td>A+</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th scope="row" colspan="2">Average Class Score</th>
        <td colspan="2">91.6</td>
      </tr>
    </tfoot>
  </table>

</body>
</html>
```

## 👀 Output / What You Will See

A structured grid table displaying student examination results with clear column headers (**Student Name**, **Subject**, **Marks**, **Grade**), data rows, and a summary footer row spanning multiple columns.

## 🧪 Try It Yourself

1. Build a 3-column timetable table for a school or college schedule.
2. Include `<caption>`, `<thead>`, `<tbody>`, and 3 data rows (`<tr>`).
3. Use `scope="col"` on column headers (`<th>`).
4. Add a footer row using `<tfoot>` and `colspan`.

## ⚠️ Common Mistakes

- **Using tables for website page layout:** Using `<table>` to position sidebars or headers (use CSS Flexbox/Grid instead).
- **Omitting `<caption>` and `scope` attributes:** Leaves screen reader users without context about what column or row headers represent.
- **Using outdated presentation attributes:** Styling borders or background colors using `border="1"` or `bgcolor` instead of CSS.

## 🌐 Real-World Usage

Financial reports, sports scoreboards, airline flight schedules, e-commerce pricing plans, and university mark sheets rely on accessible HTML tables.

## 🔗 Related Topics

- [Lists](09-lists.md)
- [Accessibility Basics](24-accessibility-basics.md)

## 💡 Remember

- Use tables ONLY for tabular data.
- Always include `<caption>` for table context.
- Use `<th>` with `scope="col"` or `scope="row"` for headers.

## 🧭 Navigation

[← Previous: Lists](09-lists.md) | [HTML Home](00-README.md) | [Next: Forms →](11-forms.md)
