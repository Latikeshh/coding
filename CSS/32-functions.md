# CSS Functions (`calc()`, `min()`, `max()`, `clamp()`)

> 🟡 Intermediate

## 📖 Definition

**CSS Functions** are built-in value methods that perform runtime mathematical calculations (`calc()`), select boundary thresholds (`min()`, `max()`), or set fluid responsive scaling (`clamp()`) directly inside CSS property declarations.

## 🌐 Multilingual Explanation

### English
`calc()` evaluates math expressions (`calc(100% - 40px)`). `clamp(min, val, max)` sets fluid responsive typography and sizing without media queries.

### Hindi
`calc()` mathematical calculations karne ke liye use hota hai. `clamp(min, val, max)` se font size aur width bina media queries ke mobile aur desktop ke beech flexible ban jaate hain.

### Marathi
`calc()` dware ganiti aakdemod karta yete. `clamp()` mule font size screen-nusar aapoaap adjust hote.

## 🤔 Why Do We Use CSS Mathematical Functions?

Before CSS math functions, setting a sidebar to a fixed 300px width while making the main content area fill remaining space required complex JavaScript or float hacks. Functions like `calc()` and `clamp()` make dynamic fluid layouts simple and native.

## 📚 Core Math & Fluid Functions Reference Table

| Function | Purpose & Expression Format | Example Usage |
|---|---|---|
| **`calc()`** | Evaluates mathematical expressions (`+`, `-`, `*`, `/`) mixing different units | `width: calc(100% - 40px);` |
| **`min()`** | Selects the **smallest** value from comma-separated options | `width: min(100%, 800px);` |
| **`max()`** | Selects the **largest** value from comma-separated options | `font-size: max(18px, 2vw);` |
| **`clamp()`** | Clamps a value between a **minimum**, **preferred**, and **maximum** bound | `font-size: clamp(1rem, 2.5vw, 2.5rem);` |

## 🌟 Fluid Responsive Typography with `clamp()`

`clamp(minimum, preferred, maximum)` takes three parameters:
1. **Minimum Value:** The smallest font size (e.g. `1rem` on small mobile screens).
2. **Preferred Value:** A dynamic relative unit (e.g. `4vw` screen percentage) that scales continuously as the window resizes.
3. **Maximum Value:** The largest font size cap (e.g. `2.5rem` on wide desktop monitors).

```css
/* Fluid Typography: Scales smoothly from 16px (1rem) up to 40px (2.5rem) */
h1 {
  font-size: clamp(1rem, 4vw, 2.5rem);
}
```

## 📝 Syntax & Operator Rules for `calc()`

When using `calc()`, **spaces are MANDATORY around addition `+` and subtraction `-` operators**:

```css
/* CORRECT: Spaces around minus operator */
.content {
  width: calc(100% - 60px);
}

/* INCORRECT: Missing spaces breaks calc() parsing! */
.content {
  width: calc(100%-60px); /* INVALID SYNTAX */
}
```

## 💻 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Functions Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="fluid-card">
    <h1>Fluid Clamp Heading</h1>
    <p>Resize your browser window width to see the headline font size scale fluidly between 1.5rem and 3rem without a single media query!</p>
  </div>

</body>
</html>
```

```css
/* style.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f3f4f6;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
}

.fluid-card {
  /* min() selects whichever is smaller: 100% or 600px */
  width: min(100%, 600px);
  padding: calc(1rem + 10px); /* Mixing rem and px units */
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  text-align: center;
}

h1 {
  color: #1d4ed8;
  margin-top: 0;
  /* Fluid responsive typography with clamp(MIN, PREFERRED, MAX) */
  font-size: clamp(1.5rem, 5vw, 3rem);
}

p {
  color: #4b5563;
  line-height: 1.6;
}
```

## 👀 What You Will See

The headline font size scales fluidly as you drag your browser viewport wider or narrower, never dropping below `1.5rem` or exceeding `3rem`.

## 🧪 Try It Yourself

Change `width: min(100%, 600px)` to `width: calc(100% - 80px)` and observe how the card maintains an exact 40px margin gap on both left and right sides.

## ⚠️ Common Mistakes

- **Forgetting spaces around `+` and `-` in `calc()`:** Writing `calc(100%-40px)` breaks parsing. Always include spaces: `calc(100% - 40px)`.
- **Swapping MIN and MAX order in `clamp(min, val, max)`:** The first parameter MUST be smaller than the third parameter.

## 💡 Real-World Usage

Modern web design systems use `clamp()` for fluid responsive typography and fluid padding scales (`padding: clamp(1rem, 3vw, 3rem)`), eliminating dozens of repetitive media query breakpoints.

## 🔗 Related Topics

- [CSS Units (`px`, `rem`, `em`, `%`, `vw`, `vh`)](11-css-units.md)
- [CSS Variables (Custom Properties)](31-variables.md)
- [Modern CSS Features](40-modern-css-features.md)

## ✅ Remember

- Always include spaces around `+` and `-` in `calc()`.
- `clamp(min, preferred, max)` sets fluid responsive typography.
- `min(100%, 800px)` prevents elements from exceeding 800px on desktop while fitting 100% on mobile.

## 🧭 Navigation

[← Previous](31-variables.md) | [CSS Home](00-README.md) | [Next →](33-important.md)
