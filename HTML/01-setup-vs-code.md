# Set Up VS Code for HTML

## 📖 Definition

Visual Studio Code (usually called **VS Code**) is a free code editor. You can use it to write, save, and view your HTML files.

## 🤔 Why Do We Use It?

You can write HTML in any plain-text editor, but VS Code makes learning easier. It colours HTML tags, suggests code as you type, and helps you spot mistakes. You do **not** need to buy special software to begin.

## 🧠 Simple Explanation

Think of VS Code as a clean notebook made for coding. Your HTML file is a page in that notebook. A web browser, such as Chrome, Edge, or Firefox, is what reads that page and shows the website.

## 📝 Syntax

Create a file named `index.html` and add this starter page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Website</title>
</head>
<body>
  <h1>Hello, world!</h1>
  <p>I made this page in VS Code.</p>
</body>
</html>
```

## 🚀 Step-by-Step Setup

1. Download and install [Visual Studio Code](https://code.visualstudio.com/) from its official website. On Windows, the **User Setup** installer is the usual choice for one person using the computer.
2. Open VS Code. Choose **File → Open Folder**, then create or choose a folder such as `HTML-Practice`. Keeping all practice files in one folder prevents files from getting lost.
3. In the left Explorer panel, click **New File** and name it `index.html`. The `.html` ending is important: it tells VS Code and the browser that this is an HTML file.
4. Paste the starter code above and press `Ctrl + S` to save.
5. In File Explorer, double-click `index.html`, or right-click it and choose a browser. You should see “Hello, world!” on the page.
6. Change the heading, save again, then refresh the browser. This save-and-refresh cycle is a normal part of web development.

## 🧩 Helpful Extensions

HTML support, syntax colouring, and Emmet shortcuts already come with VS Code, so extensions are optional at first. Install only what you understand and trust.

To install one, click the **Extensions** icon on the left (or press `Ctrl + Shift + X`), search for its exact name, open its details, check the publisher and reviews, then click **Install**.

| Extension | Why a beginner may use it |
|---|---|
| **Live Server** by Ritwick Dey | Opens your page in a local browser server and refreshes it while you work. After installing, right-click `index.html` and choose **Open with Live Server**. |
| **Prettier - Code formatter** by Prettier (`esbenp.prettier-vscode`) | Tidies indentation and spacing. Run **Format Document** with `Shift + Alt + F` when your code becomes messy. |

You do not need dozens of extensions. Too many can be confusing. Read an extension's description and publisher information before installing it, and remove one if you do not use it.

## ✅ Remember

Save before checking your browser. If the page does not change, first check that you saved the correct file and refreshed the correct browser tab. Start with plain HTML; CSS and JavaScript can be added after you understand the basics.

[← First: HTML Home](README.md) | [Next: Introduction to HTML →](02-introduction.md)
