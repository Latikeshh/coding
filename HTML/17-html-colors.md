# HTML & CSS Colors (HEX, RGB, HSL, Contrast)

> 🟢 Beginner

## 📖 Definition

Colors bring visual structure to webpages. While HTML defines structural elements, CSS properties (`color` for text color, `background-color` for background color) apply color formatting using Color Names, HEX codes, RGB/RGBA values, or HSL values.

## 🌍 Multilingual Summary

### English
Set text and background colors using color names, HEX codes (`#007bff`), `rgb()`, or `rgba()` values. Ensure high contrast between text and background for readability and accessibility.

### Hindi
Text aur background colors set karne ke liye HEX (`#007bff`), RGB (`rgb(0, 123, 255)`), ya color names use karein. Text aur background ke beech high contrast rakhein.

### Marathi
Text ani background colors sathi HEX (`#007bff`), RGB (`rgb(0, 123, 255)`), kiva color names vapra. Separation sathi changla text contrast theva.

## 🤔 Why Do We Use Colors?

Colors guide visual attention, emphasize key notices, convey brand identity, and make user interfaces pleasant to navigate. High contrast between text and background is essential for web accessibility.

## 🎨 Color Formats Reference

| Format | Syntax Example | Description & Features |
|---|---|---|
| **Named Colors** | `color: navy;` | 140 standard CSS color names (`red`, `blue`, `forestgreen`, `darkslategray`). |
| **HEX Codes** | `color: #007bff;` | Hexadecimal format (`#RRGGBB` from `00` to `FF`). `#000000` is black, `#ffffff` is white. |
| **RGB** | `color: rgb(0, 123, 255);` | Red, Green, Blue intensity values ranging from `0` to `255`. |
| **RGBA** | `color: rgba(0, 123, 255, 0.5);` | Adds an **Alpha** opacity channel from `0.0` (fully transparent) to `1.0` (opaque). |
| **HSL** | `color: hsl(210, 100%, 50%);` | **Hue** (0–360° color wheel), **Saturation** (0–100%), and **Lightness** (0–100%). |

## ♿ Accessibility & Color Contrast

Web Content Accessibility Guidelines (WCAG) require maintaining **sufficient contrast ratio between text color and background color**:

- **Good Contrast (Accessible):** Dark navy text (`#001f3f`) on a light gray background (`#f8f9fa`). Easy to read for all users.
- **Poor Contrast (Inaccessible):** Light yellow text (`#ffff00`) on a white background (`#ffffff`). Causes severe eye strain and is unreadable for low-vision users.

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Colors Practice</title>
</head>
<body>

  <h1>Color Formats Demonstration</h1>

  <!-- High-contrast dark text on light background -->
  <div style="background-color: #f0f4f8; padding: 15px; border-radius: 5px;">
    <h2 style="color: #0d3b66;">Primary Heading in Deep Navy (HEX)</h2>
    <p style="color: rgb(40, 40, 40);">Readable dark charcoal body text defined using RGB values.</p>
  </div>

  <br>

  <!-- Semi-transparent overlay box using RGBA -->
  <div style="background-color: rgba(0, 123, 255, 0.1); border: 2px solid rgb(0, 123, 255); padding: 15px;">
    <p style="color: hsl(210, 100%, 30%);">This banner uses RGBA transparency for its background layer.</p>
  </div>

</body>
</html>
```

## 👀 Output / What You Will See

- A light blue card containing dark navy heading text and dark charcoal paragraph text.
- A second semi-transparent blue alert banner created using RGBA background transparency.

## 🧪 Try It Yourself

1. Create a styled announcement card with a dark blue background (`#002b49`) and white text (`#ffffff`).
2. Add a second box using an `rgba()` background with 20% opacity.
3. Test your text color contrast in Chrome DevTools (Inspect Element → Click Color swatch).

## ⚠️ Common Mistakes

- **Using low-contrast combinations:** Placing light gray or yellow text on white backgrounds.
- **Forgetting `#` in HEX codes:** Writing `color: 007bff;` instead of `color: #007bff;`.
- **Relying solely on color to convey meaning:** Marking required fields in red without also adding text labels like `(required)` or `*`.

## 🌐 Real-World Usage

All professional websites use consistent color systems (HEX, RGB, RGBA) defined in CSS stylesheets to maintain brand themes and high WCAG contrast accessibility standards.

## 🔗 Related Topics

- [Div and Span](14-div-and-span.md)
- [Accessibility Basics](24-accessibility-basics.md)

## 💡 Remember

- High contrast text is essential for accessibility.
- HEX codes start with `#`.
- RGBA adds an alpha opacity channel (`0.0` to `1.0`).

## 🧭 Navigation

[← Previous: Comments](16-html-comments.md) | [HTML Home](00-README.md) | [Next: Entities →](18-html-entities.md)
