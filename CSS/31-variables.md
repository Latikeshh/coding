# CSS Variables (Custom Properties)

> 🟢 Beginner

## 📖 Definition

CSS Custom Properties (Variables) store reusable values (colors, spacing, font sizes) defined on scopes like `:root` and accessed via `var(--variable-name)`.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Store global design tokens on `:root` as `--name: value;` and reference them with `var(--name)`.
> - **Hindi:** `:root` में `--primary-color: #007bff;` जैसे वेरिएबल बनाकर `var(--primary-color)` से री-यूज़ करें।
> - **Marathi:** सीएसएस व्हॅरियबल्समुळे थीम बदलणे आणि कोड व्यवस्थित ठेवणे सोपे जाते.
> - **Hinglish:** CSS Variables se design themes (Dark/Light mode) aur consistent styling maintain karna aasaan hota hai.

## 📝 Syntax

```css
:root {
  --primary-color: #007bff;
  --bg-color: #ffffff;
  --card-padding: 20px;
}

body {
  background-color: var(--bg-color);
}

.btn-primary {
  background-color: var(--primary-color);
  padding: var(--card-padding);
}
```

## 🧭 Navigation

[← Previous](30-animations.md) | [CSS Home](00-README.md) | [Next →](32-functions.md)
