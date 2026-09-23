# Specificity

> 🟢 Beginner

## 📖 Definition

Specificity is how CSS decides which rule wins when multiple rules target the same element.

## 🤔 Why Do We Use It?

If two CSS rules conflict, the browser uses specificity to decide which rule should be applied.

## 🧠 Simple Explanation

CSS is like a ranking system. A more specific rule usually wins over a more general rule.

## Example

```css
p {
  color: blue;
}

.text {
  color: green;
}

#title {
  color: red;
}
```

## Why different results?

- `p` is a general element selector.
- `.text` is more specific because it targets a class.
- `#title` is even more specific because it targets an ID.

So if an element matches all three, the ID rule usually wins.

## Specificity order

```text
Element < Class < ID < Inline < !important
```

## 💡 Example

```html
<p id="title" class="text">Hello</p>
```

```css
p {
  color: blue;
}

.text {
  color: green;
}

#title {
  color: red;
}
```

## 👀 What You Will See

The paragraph text will likely be red because the ID selector is more specific than the class and element selectors.

## ⚠️ Common Mistakes

- Using `!important` everywhere.
- Creating overly complex CSS without understanding selectors.
- Forgetting that specificity is about conflicts.

## ✅ Remember

- More specific selectors usually win.
- `!important` should not be used for normal everyday styling problems.
- It is usually better to write clear, well-structured CSS.

## 🧭 Navigation

[← Previous](08-selectors.md) | [CSS Home](00-README.md) | [Next →](10-width-and-height.md)
