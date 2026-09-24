# Set Up JavaScript Environment

> 🟢 Beginner

## 📖 Definition

JavaScript can run directly inside any modern web browser or in a standalone runtime environment like **Node.js**. Setting up your environment involves learning how to run JavaScript in the browser Developer Tools, connecting `.js` files to HTML documents, and running scripts using Node.js.

## 🇮🇳 Hindi

JavaScript ko aap direct browser ke Developer Console mein chalayein, ya fir `.js` file ko HTML document ke saath link karke chalayein. Node.js ka use karke aap JavaScript ko server-side par terminal se bhi run kar sakte hain.

## 🚩 Marathi

JavaScript tumhi browser chya Developer Console madhye direct run karu shakta, kiva `.js` file HTML document sobat link karun chalavu shakta. Node.js cha wapar karun terminal madhun siddhi JS code run karta yeto.

## 🤔 Why Use It?

Before writing JavaScript programs, you need a environment to execute your code, test ideas, debug errors, and view output in real time.

## 🧠 Simple Explanation

Think of the browser console as a digital notebook where you write a line of code and instantly get an answer. Linking a `.js` file to HTML is like attaching an engine to a car—it gives the web page power and functionality.

## 📝 Setup Options

### Option 1: Browser Developer Console (Fastest for testing)
1. Open Google Chrome, Firefox, or Microsoft Edge.
2. Press `F12` (or right-click anywhere on a page and click **Inspect**).
3. Switch to the **Console** tab.
4. Type `console.log("Hello World")` and press `Enter`.

### Option 2: Connecting JS to HTML in VS Code
Create two files in the same folder: `index.html` and `script.js`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript Setup</title>
  <!-- defer ensures script executes after HTML parsing -->
  <script src="script.js" defer></script>
</head>
<body>
  <h1>JavaScript Environment Setup</h1>
</body>
</html>
```

```javascript
/* script.js */
console.log("JavaScript file successfully connected!");
```

### Option 3: Running JavaScript with Node.js
1. Install Node.js from [nodejs.org](https://nodejs.org).
2. Open your terminal or command prompt.
3. Run: `node script.js`

## 💡 Important Rules & Script Placement

- **`<script>` in `<head>` with `defer`:** Recommended. Downloads in background and executes after HTML is fully parsed.
- **`<script>` at bottom of `<body>`:** Traditional approach. Ensures HTML elements exist before JavaScript tries to manipulate them.
- **`<script>` with `async`:** Downloads asynchronously and executes immediately when downloaded. Use for independent third-party scripts (like analytics).

## 🧪 Try It Yourself

1. Open your browser console (`F12`).
2. Run `console.log(20 + 30);` and see the result.
3. Create an `index.html` and `script.js` file, connect them, and verify the console output.

## ⚠️ Common Mistakes

- Forgetting the quotes around strings in `console.log("Hello")`.
- Misspelling the file path in `<script src="script.js">`.
- Trying to access DOM elements before HTML has loaded (when `<script>` is placed in `<head>` without `defer`).

## 🌍 Real-World Usage

Every professional frontend developer uses the browser Developer Console daily to test snippets, inspect network requests, and debug code execution.

## 💡 Remember

Use `defer` when linking external scripts in `<head>` so your web page loads quickly and reliably.

## 🧭 Navigation

[← JS Home](00-README.md) | [Next: Introduction to JavaScript →](02-introduction-to-js.md)
