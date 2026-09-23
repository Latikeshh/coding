# Tables

> 🟢 Beginner

## 📖 Definition

A table displays information in rows and columns.

## 🤔 Why Do We Use It?

It is useful for data that people need to compare, such as a timetable or price list.

## 🧠 Simple Explanation

A table is like a paper calendar: each row and column gives a value a clear place.

## 📝 Syntax

```html
<table>
  <tr><th>Fruit</th><th>Price</th></tr>
  <tr><td>Apple</td><td>$1</td></tr>
</table>
```

`<th>` is a heading cell; `<td>` is a normal data cell.

## 💡 Practical Example

A class timetable is a good table: days can be column headings and subjects can fill the cells. A long article is not a table; use headings and paragraphs for that.

## ✅ Remember

Use tables for data, not to arrange the entire look of a page. Keep each row describing one related set of values.

- `<table>` starts the table.
- `<tr>` creates a row.
- `<th>` is a heading cell and `<td>` is a data cell.

## 💻 Example

```html
<table>
  <tr>
    <th>Subject</th>
    <th>Marks</th>
  </tr>
  <tr>
    <td>Maths</td>
    <td>88</td>
  </tr>
</table>
```

## 👀 Output

| Subject | Marks |
|---|---:|
| Maths | 88 |

## 🔍 How It Works

The first row uses `<th>` because it labels the columns. The next row uses `<td>` because it contains actual student data.

## ⚠️ Common Mistakes

- Do not use a table only to position page content.
- Do not use `<td>` where a column heading should be `<th>`.

## 🧪 Try It Yourself

Make a two-column table for three of your favourite foods and their prices.

## 🎯 Mini Challenge

Create a weekly study timetable with a heading row and at least three days.

## 🧭 Navigation

[← First: HTML Home](README.md) | [← Previous: Lists](09-lists.md) | [Next: Forms →](11-forms.md)
