# Flexbox Layout (Main & Cross Axes)

> 🟡 Intermediate

## 📖 Definition

**Flexible Box Layout (Flexbox)** is a 1-dimensional CSS layout model designed to distribute space, align items, and handle dynamic sizing along a row or column direction.

## 🌐 Multilingual Explanation

### English
Flexbox (`display: flex`) aligns items along a 1D direction. `justify-content` aligns items along the **Main Axis** and `align-items` aligns items along the **Cross Axis**.

### Hindi
Flexbox (`display: flex`) 1D layout ke liye hota hai. `justify-content` Main Axis par aur `align-items` Cross Axis par elements ko align karta hai.

### Marathi
Flexbox mule content 1D direction madhye sahaj align hoto. `justify-content` Main Axis var ani `align-items` Cross Axis var alignment karte.

## 🎯 Main Axis vs. Cross Axis (Crucial Flexbox Concept)

A common misconception among beginners is thinking `justify-content` is always horizontal and `align-items` is always vertical.

In reality, Flexbox alignment depends entirely on **`flex-direction`**:
- **Main Axis:** The primary direction defined by `flex-direction` (`row` or `column`).
- **Cross Axis:** The perpendicular axis to the Main Axis.

| `flex-direction` Setting | Main Axis (`justify-content`) | Cross Axis (`align-items`) |
|---|---|---|
| **`flex-direction: row`** (Default) | **Horizontal** (Left to Right) | **Vertical** (Top to Bottom) |
| **`flex-direction: column`** | **Vertical** (Top to Bottom) | **Horizontal** (Left to Right) |

```text
flex-direction: row
Main Axis (justify-content) ---> [Item 1] [Item 2] [Item 3]
Cross Axis (align-items) |

flex-direction: column
Main Axis (justify-content) | [Item 1]
                            | [Item 2]
Cross Axis (align-items) --->
```

## 📚 Container & Item Properties Reference

### Flex Container Properties (Applied to Parent):
- **`display: flex` / `inline-flex`:** Enables flex layout context on child elements.
- **`flex-direction`:** `row` | `row-reverse` | `column` | `column-reverse`.
- **`justify-content` (Main Axis Alignment):** `flex-start` | `center` | `flex-end` | `space-between` | `space-around` | `space-evenly`.
- **`align-items` (Cross Axis Alignment):** `stretch` | `flex-start` | `center` | `flex-end` | `baseline`.
- **`flex-wrap`:** `nowrap` | `wrap` | `wrap-reverse` (Allows flex items to wrap onto multiple lines).
- **`gap`:** Sets consistent spacing gap between flex items (`gap: 20px`).

### Flex Item Properties (Applied to Children):
- **`flex-grow`:** Defines ability for an item to grow if extra free space exists (`flex-grow: 1`).
- **`flex-shrink`:** Defines ability for an item to shrink if space is constrained (`flex-shrink: 1`).
- **`flex-basis`:** Defines default ideal size before extra space distribution (`flex-basis: 200px`).
- **`flex` (Shorthand):** `flex: flex-grow flex-shrink flex-basis;` (e.g. `flex: 1 1 0;` or `flex: 1;`).
- **`align-self`:** Overrides `align-items` on a single specific flex child (`align-self: flex-end`).

## 💻 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox Layout Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Navigation Bar Component using Flexbox -->
  <nav class="navbar">
    <div class="logo">BrandLogo</div>
    <ul class="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <button class="cta-btn">Sign In</button>
  </nav>

  <!-- Perfect Centering Box using Flexbox -->
  <div class="hero-center">
    <div class="centered-content">
      <h2>Perfect Centering Made Simple</h2>
      <p>Centered both horizontally and vertically with Flexbox.</p>
    </div>
  </div>

</body>
</html>
```

```css
/* style.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  background-color: #f4f6f8;
}

/* Navbar Component */
.navbar {
  display: flex;
  justify-content: space-between; /* Space out logo, links, button along main axis */
  align-items: center;            /* Center vertically along cross axis */
  padding: 15px 30px;
  background-color: #111827;
  color: white;
}

.nav-links {
  display: flex;
  gap: 20px;                      /* Spacing between list items */
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #d1d5db;
  text-decoration: none;
}

.cta-btn {
  background-color: #3b82f6;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
}

/* Perfect Centering Pattern */
.hero-center {
  display: flex;
  justify-content: center; /* Main axis center */
  align-items: center;     /* Cross axis center */
  min-height: 60vh;
}

.centered-content {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
}
```

## 👀 What You Will See

- The navigation bar spaces out the logo, links, and CTA button horizontally on a single row, vertically aligned in the center.
- The hero box centers both horizontally and vertically inside a 60vh height container.

## 🧪 Try It Yourself

1. Change `flex-direction: row` to `flex-direction: column` on `.navbar`.
2. Notice how `justify-content` now controls vertical spacing and `align-items` controls horizontal centering!

## ⚠️ Common Mistakes

- **Applying `justify-content` to flex child items instead of the flex parent container:** `justify-content` and `align-items` must be declared on the flex parent.
- **Confusing Main and Cross axes when switching `flex-direction`:** Remember that `justify-content` ALWAYS follows the Main Axis (`flex-direction`).

## 💡 Real-World Usage

Flexbox is used in almost every web application for navigation bars, card lists, toolbar alignments, media objects, and centering modals.

## 🔗 Related Topics

- [Display Property](17-display.md)
- [CSS Grid Layout](21-grid.md)
- [Navigation Bar Components](37-navigation-bars.md)

## ✅ Remember

- Flexbox is a 1D layout model (rows OR columns).
- `flex-direction` determines the Main Axis (`row` or `column`).
- `justify-content` = Main Axis alignment; `align-items` = Cross Axis alignment.

## 🧭 Navigation

[← Previous](19-float-and-clear.md) | [CSS Home](00-README.md) | [Next →](21-grid.md)
