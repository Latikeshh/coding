# Float and Clear Layouts

> 🟢 Beginner

## 📖 Definition

The **`float`** property moves an element to the left or right edge of its parent container, allowing inline content (like paragraph text) to wrap around it. The **`clear`** property specifies whether an element can sit beside floating elements or must move below them.

## 🌐 Multilingual Explanation

### English
`float: left/right` wraps text around images or columns. `clear: both` moves subsequent elements below floated elements. For overall page layout, Flexbox and Grid are preferred over floats.

### Hindi
`float` se image ke chaaron taraf paragraph text wrap hota hai. `clear` tag floated elements ke neeche naya content bhejne ka kaam karta hai. Modern layout ke liye Flexbox aur Grid use karein.

### Marathi
Image bhowti text wrap karnyasaathi `float` vapartat. Modern layouts sathi Flexbox va Grid vapraavet.

## 🤔 Why Were Floats Used & Why Flexbox/Grid Replaced Them?

Historically (before 2012), web developers used `float` for multi-column website layouts because CSS lacked Flexbox or Grid. However, floats caused container collapse bugs requiring "clearfix" hacks. Today, floats are reserved primarily for its original intended purpose: **wrapping text around images**.

## 📝 Syntax & Properties Breakdown

```css
/* Floating an image left so paragraph text wraps around its right side */
.article-image {
  float: left;
  margin-right: 20px;
  margin-bottom: 10px;
}

/* Clearing floats on a footer or following section */
.footer {
  clear: both; /* Options: left, right, both, none */
}

/* Modern Micro Clearfix Hack for float containers */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```

## 💻 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Float and Clear Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <article class="news-article clearfix">
    <h2>Tech News Article</h2>
    <img src="https://via.placeholder.com/150" alt="Tech Graphic" class="float-img">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
  </article>

  <footer class="footer">
    <p>© 2026 Tech News Portal</p>
  </footer>

</body>
</html>
```

```css
/* style.css */
body {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f8f9fa;
}

.news-article {
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.float-img {
  float: left;
  margin-right: 20px;
  margin-bottom: 10px;
  border-radius: 6px;
}

/* Clearfix prevents parent container collapse */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

.footer {
  margin-top: 20px;
  padding: 10px;
  background-color: #333;
  color: white;
  text-align: center;
}
```

## 👀 What You Will See

The paragraph text wraps smoothly around the right and bottom sides of the left-floated image. The clearfix ensures the article container stretches fully to encompass the image height before the footer renders.

## 🧪 Try It Yourself

1. Remove `class="clearfix"` from `.news-article`.
2. Notice how the floated image spills out of the article container box if the paragraph text is too short!

## ⚠️ Common Mistakes

- **Using `float` for modern grid or flex layouts:** Causes fragile code requiring clearfix hacks. Use Flexbox or Grid instead.
- **Forgetting to clear floats:** Causes following sections or footers to jump up beside floated items unexpectedly.

## 💡 Real-World Usage

Floats remain useful in editorial blogs, news sites, and digital magazines for wrapping article text around inline images or pull-quotes.

## 🔗 Related Topics

- [Display Property](17-display.md)
- [Flexbox Layout](20-flexbox.md)
- [CSS Grid Layout](21-grid.md)

## ✅ Remember

- Use `float: left` or `float: right` to wrap text around images.
- Use `clear: both` or `.clearfix` to prevent floating elements from breaking parent container heights.
- Use Flexbox/Grid for website structure layouts.

## 🧭 Navigation

[← Previous](18-positioning.md) | [CSS Home](00-README.md) | [Next →](20-flexbox.md)
