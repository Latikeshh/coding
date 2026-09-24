# Specificity, Cascade & Inheritance

> 🟡 Intermediate

## 📖 Definition

The **Cascade**, **Specificity**, and **Inheritance** are the three core rules that control how CSS resolves conflicts when multiple style rules target the exact same HTML element.
- **The Cascade:** The algorithm that combines rules from different sources and resolves conflicts based on origin, specificity, and order of appearance.
- **Specificity:** A calculated numerical score assigned to selectors to determine which rule wins a conflict.
- **Inheritance:** The mechanism by which certain parent element properties (like `color` or `font-family`) automatically pass down to child elements.

## 🌐 Multilingual Explanation

### English
Specificity determines which rule wins when multiple CSS selectors conflict. Specificity score hierarchy: `Inline Styles` (1,0,0,0) > `ID` (0,1,0,0) > `Class/Attribute` (0,0,1,0) > `Element` (0,0,0,1). When scores match, the last rule in the stylesheet wins (Order of Appearance).

### Hindi
Specificity se decide hota hai ki jab do conflicting CSS rules takrayenge toh kaunsa rule jeetega: `Inline Styles` > `ID (#)` > `Class (.)` > `Element`. Agar score match kare, toh baad mein likha rule (Order of Appearance) jeetta hai.

### Marathi
Specificity rules nusar `ID` cha score `Class` peksha jast asto. Score same aaslyas baad madhye lihilela CSS rule apply hoto.

## 📊 Specificity Scoring System

Specificity is represented as a 4-part score `(Inline, ID, Class, Element)`:

| Selector Category | Score Column | Examples | Weight Score |
|---|---|---|---|
| **Inline Styles** | Column 1 | `<h1 style="color: red;">` | `1, 0, 0, 0` |
| **ID Selectors** | Column 2 | `#main-header`, `#user-profile` | `0, 1, 0, 0` |
| **Class, Attribute & Pseudo-classes** | Column 3 | `.btn`, `[type="text"]`, `:hover`, `:focus` | `0, 0, 1, 0` |
| **Element & Pseudo-elements** | Column 4 | `h1`, `p`, `div`, `::before` | `0, 0, 0, 1` |
| **Universal Selector** | None | `*` | `0, 0, 0, 0` |

### Calculation Examples:
```css
p { color: blue; }                     /* Score: 0,0,0,1 (Element) */
.text { color: green; }                /* Score: 0,0,1,0 (Class) - WINS over Element */
#title { color: red; }                /* Score: 0,1,0,0 (ID) - WINS over Class */
div.card p.text { color: purple; }     /* Score: 0,0,2,2 (2 Classes + 2 Elements) */
```

## 🔄 The Cascade & Order of Appearance

When two conflicting rules have the **exact same specificity score**, the rule written **later in the stylesheet (Order of Appearance)** wins:

```css
.btn { background-color: blue; }
.btn { background-color: red; } /* WINS because it appears later in the code */
```

## 🧬 Inheritance Rules

Not all CSS properties inherit automatically from parent elements:
- **Inherited Properties (Pass down to children):** `color`, `font-family`, `font-size`, `font-weight`, `line-height`, `text-align`, `visibility`.
- **Non-Inherited Properties (Do NOT pass down):** `margin`, `padding`, `border`, `background`, `width`, `height`, `display`, `position`.

```css
/* Styling body sets default font for all child elements via inheritance */
body {
  color: #333333;
  font-family: Arial, sans-serif; /* Inherited by paragraphs, headings, lists */
}
```

You can explicitly force property behavior using keyword values:
- `inherit`: Forces a child element to inherit a parent's property value.
- `initial`: Resets a property to its CSS default initial value.
- `unset`: Inherits if inherited by default, otherwise resets to initial.

## 💻 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Specificity Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Element has class="text-green" and id="main-text" -->
  <p id="main-text" class="text-green">
    Which color will this paragraph display?
  </p>

</body>
</html>
```

```css
/* Specificity: 0,0,0,1 */
p {
  color: blue;
}

/* Specificity: 0,0,1,0 */
.text-green {
  color: green;
}

/* Specificity: 0,1,0,0 - WINS OVER CLASS AND ELEMENT! */
#main-text {
  color: red;
}
```

## 👀 What You Will See

The paragraph text renders in **red** because the ID selector `#main-text` (`0,1,0,0`) has higher specificity than the class `.text-green` (`0,0,1,0`) or element `p` (`0,0,0,1`).

## 🧪 Try It Yourself

1. Add an inline `style="color: purple;"` to the `<p>` tag in `index.html`.
2. Observe how Inline Styles (`1,0,0,0`) override the `#main-text` ID selector!

## ⚠️ Common Mistakes

- **Relying on high specificity IDs everywhere:** Makes stylesheets rigid and impossible to override easily. Prefer flat, low-specificity class names.
- **Forgetting that non-layout properties inherit:** Writing `color` on every child element when setting it once on `body` or a parent container suffices.

## 💡 Real-World Usage

Modern CSS methodology (like BEM architecture or utility classes) keeps selector specificity flat (using single class names `0,0,1,0`) so rules can be overridden cleanly without resorting to specificity battles or `!important`.

## 🔗 Related Topics

- [Basic Selectors](08-selectors.md)
- [The `!important` Rule](33-important.md)
- [Advanced Selectors](39-advanced-selectors.md)

## ✅ Remember

- Specificity order: `Inline` > `ID` > `Class` > `Element`.
- Equal specificity? The last rule declared wins (Order of Appearance).
- Typography and color inherit from parents; borders, margins, and padding do not.

## 🧭 Navigation

[← Previous](08-selectors.md) | [CSS Home](00-README.md) | [Next →](10-width-and-height.md)
