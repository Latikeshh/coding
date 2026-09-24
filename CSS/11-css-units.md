# CSS Units (`px`, `rem`, `em`, `%`, `vw`, `vh`)

> 🟢 Beginner

## 📖 Definition

CSS units define measurements for widths, font sizes, margins, and padding. Units are divided into **Absolute** (`px`) and **Relative** (`rem`, `em`, `%`, `vw`, `vh`).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `px` is fixed. `rem` is relative to root font size. `%` is relative to parent container width. `vw`/`vh` are relative to viewport width/height.
> - **Hindi:** `px` फिक्स्ड यूनिट है। `rem` रूट फ़ॉन्ट साइज के सापेक्ष बदलता है। `%` पैरेंट विड्थ के सापेक्ष होता है।
> - **Marathi:** `rem` रूट फॉन्टवर आणि `%` पॅरेंट बॉक्सच्या आकारावर अवलंबून असते.
> - **Hinglish:** Responsive typography ke liye `rem` use karo. Dynamic layouts ke liye `%`, `vw`, aur `vh` best hain.

## 📝 Common Relative Units

- `rem`: Relative to root `<html>` font size (default `1rem = 16px`).
- `em`: Relative to parent element font size.
- `%`: Percentage relative to parent element sizing.
- `vw` / `vh`: 1% of viewport width or height.

```css
html { font-size: 16px; }
h1 { font-size: 2rem; }   /* 2 * 16px = 32px */
.card { width: 80%; }     /* 80% of parent container */
```

## 🧭 Navigation

[← Previous](10-width-and-height.md) | [CSS Home](00-README.md) | [Next →](12-backgrounds.md)
