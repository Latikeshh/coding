# Important

> 🟢 Beginner

## 📖 Definition

The `!important` rule gives a CSS declaration higher priority than normal declarations.

## 🤔 Why Do We Use It?

It can be useful in special cases when a style must override other rules.

## 🧠 Simple Explanation

If a rule is marked with `!important`, it is treated as more important than other conflicting rules.

## 📝 Syntax

```css
p {
  color: red !important;
}
```

## 💡 Example

```css
.warning {
  color: orange !important;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Important Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <p class="warning">This text is important.</p>
</body>
</html>
```

```css
.warning {
  color: orange !important;
}
```

## 👀 What You Will See

The paragraph color remains orange even if another rule tries to set it differently.

## 🧪 Try It Yourself

Remove `!important` and see how the normal CSS cascade changes the result.

## ⚠️ Common Mistakes

- Overusing `!important` makes CSS harder to maintain.
- Using it to avoid understanding specificity.
- It can cause confusion when debugging styles.

## ✅ Remember

- `!important` is a powerful override.
- Use it sparingly and only when necessary.
- Good CSS structure is usually better than forcing overrides.

## 🧭 Navigation

[← Previous](32-functions.md) | [CSS Home](00-README.md) | [Next →](34-devtools.md)
