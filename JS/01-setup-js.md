# Set Up JavaScript Environment

> 🟢 Beginner

## 📖 Definition

JavaScript can run directly inside any modern web browser or in a standalone runtime environment like **Node.js**.

## 🤔 Why Do We Use It?

You do not need to install complex compilers to begin learning JavaScript. Every web browser comes with a built-in Developer Tools console where you can run JavaScript immediately.

## 🧠 Simple Explanation

Think of your browser console as a live calculator for JavaScript code. You type a line of code, press `Enter`, and the browser executes it on the spot.

## 📝 Syntax

```javascript
console.log("Hello, JavaScript!");
```

## 🚀 Step-by-Step Setup Options

### Option 1: Using the Browser Console (Fastest)
1. Open Google Chrome, Firefox, or Microsoft Edge.
2. Press `F12` (or right-click anywhere on a page and select **Inspect**).
3. Click on the **Console** tab.
4. Type `console.log("Hello World")` and press `Enter`.

### Option 2: Connecting JavaScript to HTML in VS Code
1. Open VS Code and create a new folder named `js-practice`.
2. Create `index.html`:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JS Practice</title>
</head>
<body>
  <h1>Check the Console</h1>
  <script src="script.js"></script>
</body>
</html>
```
3. Create `script.js` in the same folder:
```javascript
console.log("JavaScript is successfully connected!");
```
4. Open `index.html` in your browser and open the Developer Console (`F12`) to view the output.

## 👀 Output

```text
JavaScript is successfully connected!
```

## ⚠️ Common Mistakes

- Forgetting to link `script.js` inside `<script src="...">` tags.
- Typo in file names (e.g. linking `scripts.js` when the file is named `script.js`).

## 🧪 Try It Yourself

Open the browser console (`F12`), type `console.log("I am learning JavaScript!")`, and press `Enter`.

## 🎯 Mini Challenge

Print two lines of text in the console: your name on the first line and your favourite food on the second line.

## 🧭 Navigation

[← JS Home](00-README.md) | [Next: Introduction to JavaScript →](02-introduction-to-js.md)
