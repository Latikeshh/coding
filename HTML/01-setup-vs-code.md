# Set Up VS Code for HTML

> 🟢 Beginner

## 📖 Definition

Visual Studio Code (commonly called **VS Code**) is a free, lightweight, and powerful code editor developed by Microsoft. It is used by web developers to write, format, save, and manage web development files including HTML, CSS, and JavaScript.

## 🌍 Multilingual Summary

### English
VS Code is a free code editor that helps you write HTML code efficiently with syntax highlighting, auto-completion, keyboard shortcuts, and live preview extensions.

### Hindi
VS Code ek free code editor hai jo aapko HTML code likhne, auto-complete karne, keyboard shortcuts use karne, aur browser mein live preview dekhne mein help karta hai.

### Marathi
VS Code ha ek free code editor aahe jo tumhala HTML code lihinyasathi, auto-complete karanyasathi, ani browser madhye live preview pahanyasathi madat karto.

## 🤔 Why Do We Use It?

You can write HTML in any basic text editor (like Windows Notepad or Mac TextEdit), but specialized code editors like VS Code make web development significantly faster and easier:
- **Syntax Highlighting:** Colors tags, attributes, and text so code is clear and easy to read.
- **Auto-Closing Tags:** Automatically inserts `</h1>` when you type `<h1>`.
- **Emmet Abbreviations:** Type `!` and press `Tab` to generate a complete HTML boilerplate instantly.
- **Error Detection:** Highlights missing brackets or invalid tags before you test in the browser.

## 🧠 Simple Explanation

Think of VS Code as a smart notebook specifically designed for writing code. Your HTML file is a page in that notebook. A web browser (like Google Chrome, Mozilla Firefox, or Microsoft Edge) reads that file and displays the finished visual webpage to visitors.

## 📐 Syntax & Boilerplate

Create a file named `index.html` in VS Code and type this standard HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Webpage</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>I created my first HTML page using VS Code.</p>
</body>
</html>
```

## 🚀 Step-by-Step Setup Guide

1. **Download & Install:** Download [Visual Studio Code](https://code.visualstudio.com/) for Windows, macOS, or Linux.
2. **Open a Project Folder:** Open VS Code, click **File → Open Folder**, and choose or create a new folder named `html-practice`.
3. **Create `index.html`:** In the left Explorer panel, click the **New File** icon and name it `index.html`. The `.html` file extension tells VS Code and browsers that this is an HTML file.
4. **Write & Save Code:** Type or paste the boilerplate code above and press `Ctrl + S` (or `Cmd + S` on Mac) to save your work.
5. **View in Browser:** Double-click `index.html` from your computer's file manager or drag it into your browser tab to view your webpage.

## 🧩 Recommended VS Code Extensions

| Extension Name | Developer | Purpose |
|---|---|---|
| **Live Server** | Ritwick Dey | Starts a local development server so your browser reloads automatically whenever you save (`Ctrl + S`). |
| **Prettier - Code Formatter** | Prettier | Automatically formats and indents your code cleanly when you save (`Shift + Alt + F`). |
| **Auto Rename Tag** | Jun Han | Renames the matching closing tag automatically when you modify an opening tag. |

## 💻 Complete HTML Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>VS Code Setup Practice</title>
</head>
<body>
  <header>
    <h1>Welcome to My Coding Space</h1>
  </header>
  <main>
    <p>VS Code makes writing HTML fast and fun!</p>
  </main>
</body>
</html>
```

## 👀 Output / What You Will See

When opened in a browser, you will see a large heading **"Welcome to My Coding Space"** followed by a paragraph of text **"VS Code makes writing HTML fast and fun!"**.

## 🧪 Try It Yourself

1. Create a folder named `my-first-site` on your computer.
2. Open the folder in VS Code and create `index.html`.
3. Type `!` and press `Tab` (or `Enter`) to generate the HTML boilerplate automatically.
4. Change the title to `"My Personal Profile"` and add an `<h1>` with your name.
5. Save (`Ctrl + S`) and open `index.html` in your web browser.

## ⚠️ Common Mistakes

- **Forgetting to save the file:** Changes won't show in the browser until you press `Ctrl + S`.
- **Saving as `.txt` instead of `.html`:** Naming the file `index.html.txt` causes browsers to display plain text instead of rendering web tags.
- **Editing standalone files outside a folder:** Always open a project folder in VS Code so relative image and CSS file paths work correctly.

## 🌐 Real-World Usage

Professional software engineers, frontend developers, and UI/UX designers across global tech companies use VS Code as their primary code editor due to its speed, extensions, integrated terminal, and Git support.

## 🔗 Related Topics

- [Introduction to HTML](02-introduction.md)
- [HTML Document Structure & Metadata](03-html-document-structure.md)

## 💡 Remember

- File extension MUST end with `.html`.
- Save often with `Ctrl + S`.
- Use the **Live Server** extension for instant browser updates.

## 🧭 Navigation

[HTML Home](00-README.md) | [Next: Introduction to HTML →](02-introduction.md)
