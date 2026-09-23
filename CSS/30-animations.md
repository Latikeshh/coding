# Animations

> 🟢 Beginner

## 📖 Definition

Animations let elements change over time with keyframes and timing.

## 🤔 Why Do We Use It?

They bring interfaces to life and can create attention-grabbing visual effects.

## 🧠 Simple Explanation

Instead of a single transition, animation can include multiple steps over time.

## 📝 Syntax

```css
@keyframes pulse {
  0% { opacity: 0.5; }
  50% { opacity: 1; }
  100% { opacity: 0.5; }
}

.element {
  animation: pulse 2s infinite;
}
```

## 💡 Example

```css
@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(20px); }
}

.card {
  animation: slide 1s ease-in-out infinite alternate;
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Animations Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">Animated card</div>
</body>
</html>
```

```css
@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(20px); }
}

.card {
  animation: slide 1s ease-in-out infinite alternate;
}
```

## 👀 What You Will See

The card gently moves back and forth across the page.

## 🧪 Try It Yourself

Change the animation duration to `3s` and see the speed slow down.

## ⚠️ Common Mistakes

- Overusing animations, which can distract users.
- Not providing a sensible timing function.
- Forgetting about performance on mobile devices.

## ✅ Remember

- Animations are best when subtle and purposeful.
- `@keyframes` defines the behavior over time.
- Use them to support design, not overwhelm it.

## 🧭 Navigation

[← Previous](29-transforms.md) | [CSS Home](00-README.md) | [Next →](31-variables.md)
