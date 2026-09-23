# HTML Document Structure

> 🟢 Beginner

## 📖 Definition

An HTML document has a standard outer structure that tells the browser where the page starts and where its visible content is.

## 🤔 Why Do We Use It?

It gives browsers a clear, reliable page layout and lets you set useful page information, such as the tab title.

## 🧠 Simple Explanation

It is like a book: `head` is the cover information, while `body` is the page people read. Only the body normally appears on the page.

## 📝 Syntax

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Page</title>
</head>
<body>
  <h1>Hello!</h1>
</body>
</html>
```

## 💡 Practical Example

Save this code in a file called `index.html`, then open it in a browser. “My First Page” appears in the browser tab, while “Hello!” appears inside the page. Try changing both pieces of text to see the difference.

## ✅ Remember

Put page content—headings, paragraphs, images, and links—inside `<body>`. Put setup information, such as `<title>`, inside `<head>`.

- `<!DOCTYPE html>` comes first.
- `<head>` holds page information.
- `<body>` holds visible page content.

## 💻 Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Weekend Plans</title>
</head>
<body>
  <h1>My Weekend Plans</h1>
</body>
</html>
```

## 👀 Output

The browser tab says **Weekend Plans**. The page shows the heading **My Weekend Plans**.

## 🔍 How It Works

The `lang="en"` attribute says the page is in English. The title belongs in `<head>`, while the heading belongs in `<body>`.

## ⚠️ Common Mistakes

- Do not put visible headings inside `<head>`.
- Do not forget the closing `</body>` and `</html>` tags.

## 🧪 Try It Yourself

Create an HTML document with your own browser-tab title and one page heading.

## 🎯 Mini Challenge

Add a paragraph and check that only the title appears in the browser tab.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Introduction](02-introduction.md) | [Next: Headings →](04-headings.md)
