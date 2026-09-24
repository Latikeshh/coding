# Tables (`<table>`, `<thead>`, `<tbody>`, `<caption>`)

> 🟢 Beginner

## 📖 Definition

The **`<table>`** element presents structured, 2-dimensional **tabular data** arranged into rows and columns. Tables should be used strictly for tabular data (e.g., student marks, flight schedules, pricing plans, timetables), and **never for page layouts**.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
Tables display structured tabular data. Structure tables using `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>` (row), `<th>` (header cell), and `<td>` (data cell).

### Hindi
टेबल में डेटा रो (`<tr>`), हेडर सेल (`<th>`), और डेटा सेल (`<td>`) में दिखाया जाता है। हमेशा `<caption>`, `<thead>` और `<tbody>` का इस्तेमाल करें। टेबल का उपयोग सिर्फ डेटा दिखाने के लिए करें, पेज लेआउट के लिए नहीं।

### Marathi
तक्ता माहिती रो (`<tr>`) आणि कॉलममध्ये दाखवतो. हेडरसाठी `<th>` आणि डाटासाठी `<td>` वापरतात. तक्ता फक्त डेटा दाखवण्यासाठी वापरावा, लेआउटसाठी नाही.

### Hinglish
Tabular data ke liye `<table>` use karo. `<tr>` row banata hai, `<th>` header cell aur `<td>` normal data cell hota hai. Page layout ke liye tables mat use karo.

## 🧱 Standard HTML Table Structure

An accessible, well-structured table uses semantic sectioning elements:

| Element | Description |
|---|---|
| `<table>` | Outer container wrapping all table content. |
| `<caption>` | Title or caption describing the table data for screen readers and users. |
| `<thead>` | Groups header rows defining column titles. |
| `<tbody>` | Groups primary data rows. |
| `<tfoot>` | Groups summary or total rows at the bottom. |
| `<tr>` | Defines a single horizontal table row (*table row*). |
| `<th>` | Defines a bold, centered header cell (*table header*). Uses `scope="col"` or `scope="row"`. |
| `<td>` | Defines a standard data cell (*table data*). |

## 📝 Code Example

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
        <th scope="row" colspan="2">Average Score</th>
        <td colspan="2">91.6</td>
      </tr>
    </tfoot>
  </table>

</body>
</html>
```

## 🔑 Spanning Rows & Columns (`colspan` & `rowspan`)

- **`colspan="N"`:** Spans a single cell horizontally across `N` columns.
- **`rowspan="N"`:** Spans a single cell vertically across `N` rows.

## ⚠️ Common Mistakes

- **Using tables for website layout:** Using `<table>` to position sidebars or headers (use CSS Flexbox/Grid instead).
- **Omitting `<caption>` and `scope` attributes:** Leaves screen reader users without context about what column or row headers mean.
- **Using outdated `border="1"` presentation attributes:** Table styling (borders, padding, zebra striping) should always be handled in CSS.

## 🧪 Try It Yourself

Build a 3-column timetable table for a school or college schedule:
1. Column headers: **Time**, **Subject**, **Room**.
2. Include `<caption>`, `<thead>`, `<tbody>`, and 3 rows of schedule data.

## 🎯 Mini Challenge

Create a product comparison table listing 2 products, their features, and prices, using `colspan` in `<tfoot>` to display a summary note.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Lists](09-lists.md) | [Next: Forms →](11-forms.md)
