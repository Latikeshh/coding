# Images

> 🟢 Beginner

## 📖 Definition

The `<img>` tag puts an image on a web page.

## 🤔 Why Do We Use It?

Images can show products, people, instructions, or ideas more quickly than text alone.

## 🧠 Simple Explanation

The `src` is the image's address. The `alt` text is a short description for people who cannot see it or when the image fails to load.

## 📝 Syntax

```html
<img src="puppy.jpg" alt="A brown puppy playing with a red ball">
```

Always write useful `alt` text for meaningful images.

## 💡 Practical Example

For a recipe, `alt="A bowl of tomato soup with basil"` describes useful information. If an image is only decoration, use empty alt text: `alt=""`, so screen readers can skip it.

## ✅ Remember

The `<img>` tag has no closing tag. Make sure `src` points to the correct file name and folder; a wrong address makes a broken-image icon appear.

- `src` tells the browser where the image file is.
- `alt` describes meaningful images.
- `width` can set a displayed width when needed.

## 💻 Example

```html
<img src="images/mango-smoothie.jpg"
     alt="A mango smoothie in a glass with a straw"
     width="300">
```

## 👀 Output

A 300-pixel-wide mango smoothie image appears. If it cannot load, the alternative text explains what should have been shown.

## 🔍 How It Works

The file is inside an `images` folder, so `src` uses `images/` before the file name. The `alt` text is not usually visible unless the image fails or a screen reader reads it.

## ⚠️ Common Mistakes

- Do not write `alt="image"`; describe what matters in the image.
- Check uppercase and lowercase letters in file names when an image does not load.

## 🧪 Try It Yourself

Add one meaningful image to a hobby page and write useful alt text.

## 🎯 Mini Challenge

Create a simple product card with an image, heading, and paragraph.

## 🧭 Navigation

[← First: HTML Home](README.md) | [← Previous: Links](07-links.md) | [Next: Lists →](09-lists.md)
