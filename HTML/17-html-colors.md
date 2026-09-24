# HTML & CSS Colors (HEX, RGB, HSL, Contrast)

> 🟢 Beginner

## 📖 Definition

Colors bring visual structure to webpages. While HTML defines elements, CSS properties (`color` for text, `background-color` for container background) apply color formatting using Color Names, HEX codes, RGB/RGBA values, or HSL values.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
Set text and background colors using color names, HEX codes (`#007bff`), `rgb()`, or `rgba()` values. Ensure high contrast between text and background for readability and accessibility.

### Hindi
टेक्स्ट और बैकग्राउंड कलर्स के लिए HEX कोड (`#ff0000`), रंग का नाम, या `rgb()` वैल्यूज़ का प्रयोग करें। पढ़ने में आसानी के लिए टेक्स्ट और बैकग्राउंड के बीच अच्छा कॉन्ट्रास्ट रखें।

### Marathi
मजकूर आणि बॅकग्राउंड रंगांसाठी HEX कोड (`#007bff`), रंगाचे नाव किंवा `rgb()` वापरा. वाचता येईल असा चांगला कॉन्ट्रास्ट ठेवावा.

### Hinglish
Colors set karne ke liye HEX (`#007bff`), RGB (`rgb(0, 123, 255)`), ya color names use karo. Text aur background ke beech accha contrast hona zaroori hai.

## 🎨 Color Formats Reference

| Format | Syntax Example | Description |
|---|---|---|
| **Named Colors** | `color: navy;` | 140 standard CSS color names (`red`, `blue`, `forestgreen`, `darkslategray`). |
| **HEX Codes** | `color: #007bff;` | Hexadecimal codes (`#RRGGBB` from `00` to `FF`). `#000000` is black, `#ffffff` is white. |
| **RGB** | `color: rgb(0, 123, 255);` | Red, Green, Blue intensity values from `0` to `255`. |
| **RGBA** | `color: rgba(0, 123, 255, 0.5);` | Adds an **Alpha** transparency channel from `0.0` (fully transparent) to `1.0` (opaque). |
| **HSL** | `color: hsl(210, 100%, 50%);` | **Hue** (0–360° color wheel), **Saturation** (0–100%), and **Lightness** (0–100%). |

## ♿ Accessibility & Color Contrast

Web Content Accessibility Guidelines (WCAG) require maintaining **sufficient contrast ratio between text color and background color**:

- **Good Contrast (Accessible):** Dark navy text (`#001f3f`) on a light gray background (`#f8f9fa`). Easy to read for everyone.
- **Poor Contrast (Inaccessible):** Light yellow text (`#ffff00`) on a white background (`#ffffff`). Causes eye strain and is unreadable for low-vision users.

## 📝 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>HTML Colors Example</title>
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
    <p style="color: hsl(210, 100%, 30%);">This alert box uses RGBA transparency for its background.</p>
  </div>

</body>
</html>
```

## ⚠️ Common Mistakes

- **Using low-contrast combinations:** Placing light gray or yellow text on white backgrounds.
- **Forgetting `#` in HEX codes:** Writing `color: 007bff;` instead of `color: #007bff;`.
- **Relying solely on color to convey information:** E.g., marking required form fields in red without also adding text like `(required)` or `*`.

## 🧪 Try It Yourself

1. Create a styled announcement card with a dark blue background (`#002b49`) and white text (`#ffffff`).
2. Add a second box using an `rgba()` background with 20% opacity.

## 🎯 Mini Challenge

Test your background and text color contrast using Chrome DevTools (Inspect Element → Click Color Picker swatch to view WCAG Contrast Ratio rating).

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Comments](16-html-comments.md) | [Next: Entities →](18-html-entities.md)
