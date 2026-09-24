# CSS Animations (`@keyframes`)

> 🟡 Intermediate

## 📖 Definition

**CSS Animations** allow creating complex, multi-step keyframe animations using **`@keyframes`** rules to define intermediate styles at percentages (`0%` to `100%`) along an animation timeline, applied via the **`animation`** property.

## 🌐 Multilingual Explanation

### English
Define multi-step animation sequences with `@keyframes` and apply them using `animation: name duration timing-function iteration-count direction`.

### Hindi
Multi-step animation ke liye `@keyframes` mein steps (0% se 100%) define karke `animation` property dwara apply karein.

### Marathi
`@keyframes` dware animation che steps (0% te 100%) tharvta yetat.

## 🤔 `transition` vs. `animation` (When to Use Which?)

- **Use `transition`:** For simple 2-state animations triggered by user interaction (like `:hover` or `:focus`).
- **Use `animation`:** For multi-step sequences (`0%` → `50%` → `100%`), continuous infinite loops (like loading spinners), or animations that run automatically on page load without user hover.

## 📝 Syntax & `@keyframes` Structure

```css
/* 1. Define Keyframe Sequence */
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* 2. Apply Animation Rule */
.badge-live {
  /* animation: name duration timing-function delay iteration-count direction fill-mode; */
  animation: pulse 2s ease-in-out infinite;
}
```

## 📚 Animation Sub-properties Reference Table

| Sub-property | Purpose & Options | Example |
|---|---|---|
| `animation-name` | Matches `@keyframes` identifier name | `animation-name: spin;` |
| `animation-duration` | Time length for one full cycle | `animation-duration: 1.5s;` |
| `animation-timing-function` | Speed curve (`ease`, `linear`, `steps()`) | `animation-timing-function: linear;` |
| `animation-iteration-count` | Repetition count (`1`, `3`, `infinite`) | `animation-iteration-count: infinite;` |
| `animation-direction` | Direction (`normal`, `reverse`, `alternate`) | `animation-direction: alternate;` |
| `animation-fill-mode` | Retains keyframe styles before/after (`forwards`, `backwards`, `both`) | `animation-fill-mode: forwards;` |
| `animation-play-state` | Pauses/plays animation (`running`, `paused`) | `animation-play-state: paused;` |

## 💻 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Animations Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="card">
    <div class="spinner"></div>
    <h3>Loading Dashboard...</h3>
    <p>Please wait while we fetch your analytics data.</p>
  </div>

</body>
</html>
```

```css
/* style.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f3f4f6;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  text-align: center;
  width: 280px;
}

/* Loading Spinner Element */
.spinner {
  width: 40px;
  height: 40px;
  margin: 0 auto 15px auto;
  border: 4px solid #e5e7eb;
  border-top-color: #2563eb; /* Blue spinner accent */
  border-radius: 50%;
  animation: spin 1s linear infinite; /* Infinite continuous rotation */
}

/* Keyframe Definition */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

## 👀 What You Will See

A smooth, continuously rotating loading spinner ring spinning infinitely at `1s` per revolution.

## 🧪 Try It Yourself

1. Add `@media (prefers-reduced-motion: reduce)` to disable animations for users who prefer reduced motion:
   ```css
   @media (prefers-reduced-motion: reduce) {
     .spinner {
       animation: none;
     }
   }
   ```

## ⚠️ Common Mistakes

- **Misspelling keyframe names:** Writing `animation: spin 1s;` when the keyframe is named `@keyframes spinner`.
- **Forgetting `forwards` fill-mode on one-time animations:** When animating an element into view once (`1`), without `animation-fill-mode: forwards;`, the element snaps back to its pre-animated initial state at the end!

## 💡 Real-World Usage

CSS `@keyframes` power infinite loading spinners, pulsing live-status badges, skeleton screens, toast notification slide-ins, and hero text entrance animations.

## 🔗 Related Topics

- [CSS Transitions](28-transitions.md)
- [CSS Transforms (2D & 3D)](29-transforms.md)
- [CSS Architecture & Dark Mode](41-css-architecture-and-dark-mode.md)

## ✅ Remember

- Define animation sequences using `@keyframes name { 0% {...} 100% {...} }`.
- Use `infinite` for continuous loops (like loading spinners).
- Use `animation-fill-mode: forwards` to retain final keyframe styles.

## 🧭 Navigation

[← Previous](29-transforms.md) | [CSS Home](00-README.md) | [Next →](31-variables.md)
