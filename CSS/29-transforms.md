# CSS Transforms (2D & 3D)

> 🟡 Intermediate

## 📖 Definition

The **`transform`** property applies 2D or 3D visual spatial modifications to an element—including **translating** (moving), **scaling** (resizing), **rotating** (turning), or **skewing** (slanting)—without affecting the surrounding document layout flow.

## 🌐 Multilingual Explanation

### English
`transform` modifies elements (`translate`, `scale`, `rotate`, `skew`) efficiently using GPU acceleration without disturbing surrounding document layout flow.

### Hindi
`transform` se elements ko hilaaya (`translate`), bada/chhota (`scale`), ya ghumaaya (`rotate`) ja sakta hai. Ye bina layout ko bigaade element ki position badalta hai.

### Marathi
`transform` dware element phirvta (`rotate`), halvta (`translate`) kiwa motha-lahan (`scale`) karta yeto.

## 🤔 Why Are Transforms Better Than Changing Margins or Positions?

Modifying `margin-top` or `top` during hover animations forces the browser to recalculate element geometry across the entire page layout (**Reflow**).

In contrast, `transform: translateY()` processes on the GPU compositor layer, running at a fluid 60 Frames Per Second (60 FPS) without triggering layout reflows!

## 📚 Transform Functions Reference Table

| Transform Function | Purpose & Effect | Example Syntax |
|---|---|---|
| `translate(x, y)` | Moves element along X and Y axes | `transform: translate(10px, -20px);` |
| `translateX(x)` / `translateY(y)` | Moves element along single horizontal or vertical axis | `transform: translateY(-5px);` |
| `scale(x, y)` | Resizes element proportionally (`1` = 100%, `1.1` = 110%) | `transform: scale(1.05);` |
| `rotate(deg)` | Rotates element clockwise or counter-clockwise | `transform: rotate(45deg);` |
| `skew(x, y)` | Slants/distorts element along axes | `transform: skewX(-10deg);` |
| `perspective(px)` | Sets 3D depth perspective | `perspective: 1000px;` |
| `rotateY(deg)` | 3D card flip rotation around Y axis | `transform: rotateY(180deg);` |

## 🔑 Perfect Absolute Centering Pattern using `translate(-50%, -50%)`

Before Flexbox and Grid, `transform: translate(-50%, -50%)` was the standard method to center an `absolute` element perfectly:

```css
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Shifts element back by 50% of its own width/height */
}
```

## 💻 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Transforms Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="card">
    <div class="icon-box">★</div>
    <h2>Interactive Card</h2>
    <p>Hover over this card to observe combined scaling and translation transforms.</p>
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
  /* Smooth transition for transform properties */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.icon-box {
  display: inline-block;
  font-size: 32px;
  color: #3b82f6;
  transition: transform 0.3s ease;
}

/* Hover State Transforms */
.card:hover {
  transform: translateY(-8px) scale(1.02); /* Lifts up 8px and expands 2% */
  box-shadow: 0 12px 24px rgba(0,0,0,0.12);
}

.card:hover .icon-box {
  transform: rotate(360deg); /* Full 360 rotation on hover */
}
```

## 👀 What You Will See

When hovering over the card, the entire card smoothly lifts up `8px` and expands by `2%`, while the star icon inside executes a full `360deg` rotation animation.

## 🧪 Try It Yourself

1. Change `transform: rotate(360deg)` to `transform: rotate(-45deg) scale(1.3)`.
2. Observe how multiple transform functions can be chained together in a single `transform` declaration line!

## ⚠️ Common Mistakes

- **Forgetting that multiple transform functions must be chained in one line:** Writing `transform: translateY(-5px); transform: scale(1.1);` causes the second line to overwrite the first line! Write `transform: translateY(-5px) scale(1.1);` instead.
- **Applying transforms to inline elements:** Inline `<span>` elements ignore `transform`. Set `display: inline-block` or `display: block` first.

## 💡 Real-World Usage

Transforms power smooth 60 FPS UI animations: 3D card flips, off-canvas mobile menu sliding, button click compression, and loading spinner rotations.

## 🔗 Related Topics

- [CSS Transitions](28-transitions.md)
- [CSS Animations (`@keyframes`)](30-animations.md)

## ✅ Remember

- Transforms run on the GPU compositor layer without forcing page layout reflows.
- Chain multiple transform functions on a single line: `transform: translateY(-5px) scale(1.05);`.
- Inline elements must be set to `inline-block` or `block` to accept `transform`.

## 🧭 Navigation

[← Previous](28-transitions.md) | [CSS Home](00-README.md) | [Next →](30-animations.md)
