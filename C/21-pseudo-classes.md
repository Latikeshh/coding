# Pseudo-classes

> 🟡 Intermediate

## 📖 Definition

A pseudo-class is a special selector that targets an element in a particular state, such as when a user hovers over a link or clicks a button.

## 🤔 Why Do We Use It?

Pseudo-classes let you add states to interactive elements, making pages feel more responsive and easier to understand.

## 🧠 Simple Explanation

Sometimes an element is not just a normal element; it is being hovered over, focused on, or visited. Pseudo-classes help style those states.

## 📝 Syntax

```css
a:hover {
  color: darkblue;
}

button:focus {
  outline: 2px solid orange;
}
```

## 💡 Example

```css
a:hover {
  color: darkred;
  text-decoration: underline;
}

button:focus {
  border: 2px solid #ff9900;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pseudo-classes</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <a href="#">Read more</a>
  <button>Submit</button>
</body>
</html>
```

```css
a:hover {
  color: darkred;
  text-decoration: underline;
}

button:focus {
  border: 2px solid #ff9900;
}
```

## 👀 What You Will See

The link changes color when hovered, and the button shows a clear focus outline when selected with the keyboard.

## 🧪 Try It Yourself

Add a style for `a:visited` and change the visited link color.

## ✅ Remember

- Pseudo-classes add state-based styling.
- `:hover` is used for mouse-over states.
- `:focus` helps keyboard users.

## 🧭 Navigation

[← Previous](20-responsive-design.md) | [CSS Home](00-README.md) | [Next →](22-pseudo-elements.md)
