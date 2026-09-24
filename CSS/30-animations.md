# CSS Animations (`@keyframes`)

> 🟢 Beginner

## 📖 Definition

CSS Animations allow multi-step, complex visual animations using `@keyframes` rules to define intermediate styles at percentages (`0%` to `100%`).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Define animation steps with `@keyframes` and apply using `animation: name duration timing-function iteration-count`.
> - **Hindi:** मल्टी-स्टेप एनीमेशन के लिए `@keyframes` में स्टेट्स (0% से 100%) डिफाइन करके `animation` प्रॉपर्टी द्वारा अप्लाई करें।
> - **Marathi:** `@keyframes` द्वारे एनीमेशनचे टप्पे (0% ते 100%) ठरवता येतात.
> - **Hinglish:** `@keyframes` se complex multi-step animations bante hain. Keep animations subtle for best user experience.

## 📝 Syntax

```css
@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.8; }
  100% { transform: scale(1); opacity: 1; }
}

.badge-active {
  animation: pulse 2s infinite ease-in-out;
}
```

## 🧭 Navigation

[← Previous](29-transforms.md) | [CSS Home](00-README.md) | [Next →](31-variables.md)
