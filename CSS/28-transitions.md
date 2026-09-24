# CSS Transitions

> 🟢 Beginner

## 📖 Definition

**CSS Transitions** create smooth property change animations over a specified duration when an element switches between states (such as `:hover`, `:focus`, `:active`, or class changes).

## 🌐 Multilingual Explanation

### English
`transition` smoothly animates CSS state changes (`transition: property duration timing-function delay`).

### Hindi
`transition` state badalne par (jaise mouse hover karne par) badlaav ko turant jhatke se hone ke bajaye dheere aur smooth banata hai.

### Marathi
`transition` mule honare badal achanak na hota tappya-tappyane smooth distat.

## 🤔 Why Do We Use Transitions?

Without transitions, when a user hovers over a button, its color snaps instantly from blue to red in 0 milliseconds, feeling harsh and unrefined. Adding a 0.2s transition turns instant jumps into fluid visual feedback.

## 📝 Syntax & Shorthand Breakdown

```css
/* Shorthand: transition: property duration timing-function delay; */
.button {
  transition: background-color 0.3s ease, transform 0.2s ease;
}
```

| Property Sub-component | Purpose | Values / Examples |
|---|---|---|
| `transition-property` | Specific CSS property to animate | `background-color`, `transform`, `opacity`, `all` |
| `transition-duration` | Time duration of transition animation | `0.3s`, `300ms` |
| `transition-timing-function` | Speed curve calculation | `ease`, `linear`, `ease-in`, `ease-out`, `cubic-bezier()` |
| `transition-delay` | Wait time before animation starts | `0.1s`, `0s` (Default) |

> [!TIP]
> **Performance Best Practice:** Only animate `opacity` and `transform` properties! Animating `width`, `height`, `margin`, or `padding` forces layout recalculations (reflow) on every frame.

## 💻 Examples

```css
/* Smooth Elevating Card on Hover */
.card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  /* Declare transition on BASE class, NOT on :hover state! */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}
```

## 🌐 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Transitions Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="card">
    <h2>Interactive UI Button</h2>
    <p>Hover over the button below to observe smooth property transitions.</p>
    <button class="btn">Hover Me</button>
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
  max-width: 350px;
}

.btn {
  background-color: #2563eb;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  /* Declare transition on base rule so it animates both IN and OUT */
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

.btn:active {
  transform: translateY(0);
}
```

## 👀 What You Will See

When hovering over the button, its background color darkens smoothly over `0.3s`, lifts up by `2px`, and projects a blue shadow. When the mouse leaves, it smoothly transitions back to its original resting state.

## 🧪 Try It Yourself

1. Move the `transition` property line from `.btn` into `.btn:hover`.
2. Notice what happens: the hover-in animates smoothly, but when your mouse leaves, the button snaps back instantly without an animation! (Always put `transition` on the base selector rule).

## ⚠️ Common Mistakes

- **Placing `transition` inside `:hover` selector:** Causes the transition to animate on hover-in, but snap back abruptly on mouse-out. Place `transition` on the base class selector.
- **Using `transition: all` indiscriminately:** Can cause unintended transitions on layout properties like `width` or `height` during window resizing. Specify exact properties: `transition: transform 0.2s, opacity 0.2s;`.

## 💡 Real-World Usage

Transitions format button hover states, navigation link underlines, card elevation shadows, dropdown menu toggles, and modal backdrop fade-ins.

## 🔗 Related Topics

- [Pseudo-classes](24-pseudo-classes.md)
- [CSS Transforms (2D & 3D)](29-transforms.md)
- [CSS Animations (`@keyframes`)](30-animations.md)

## ✅ Remember

- Declare `transition` on the base element selector (not on `:hover`).
- Animate high-performance properties: `transform` and `opacity`.
- Syntax: `transition: property duration timing-function;`.

## 🧭 Navigation

[← Previous](27-fonts.md) | [CSS Home](00-README.md) | [Next →](29-transforms.md)
