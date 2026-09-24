# Media Queries & Container Queries

> 🟢 Beginner

## 📖 Definition

- **Media Queries (`@media`):** Apply CSS rules based on device features, viewport width, or resolution.
- **Container Queries (`@container`):** Modern CSS feature that applies styles based on the size of a parent container rather than the global viewport size.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Media Queries (`@media`) adapt layouts based on screen viewport size. Container Queries (`@container`) adapt styles based on parent container width.
> - **Hindi:** मीडिया क्वेरीज़ (`@media`) स्क्रीन साइज के हिसाब से स्टाइल बदलती हैं। कंटेनर क्वेरीज़ (`@container`) पैरेंट बॉक्स की चौड़ाई के हिसाब से स्टाइल बदलती हैं।
> - **Marathi:** मीडिया क्वेरीज (`@media`) स्क्रीन साईझनुसार स्टाइल बदलतात. कंटेनर क्वेरीज पॉरेंट बॉक्सच्या आकारावर अवलंबून असतात.
> - **Hinglish:** Media Queries (`@media`) global screen width ke mutabiq styles badalti hain. Container Queries (`@container`) parent element ke size par depend karti hain.

## 📝 Syntax & Examples

### 1. Viewport Media Queries (`@media`)
```css
/* Base Mobile Styles */
.card {
  width: 100%;
}

/* Tablet / Desktop Breakpoint */
@media (min-width: 768px) {
  .card {
    width: 50%;
  }
}
```

### 2. Container Queries (`@container`)
```css
/* Declare container parent */
.sidebar {
  container-type: inline-size;
  container-name: sidebar-card;
}

/* Style child when container width changes */
@container sidebar-card (min-width: 350px) {
  .card-content {
    display: flex;
    flex-direction: row;
  }
}
```

## ⚠️ Common Mistakes

- Overusing arbitrary viewport breakpoints instead of natural content layout breakpoints.
- Forgetting to declare `container-type: inline-size` on parent element when using `@container` queries.

## 🧪 Try It Yourself

Write a media query that changes body background color when screen width is below `600px`.

## 🎯 Mini Challenge

Build a responsive grid card that switches from a stacked layout to a side-by-side flex layout using a media query breakpoint at `768px`.

## 🧭 Navigation

[← Previous](22-responsive-design.md) | [CSS Home](00-README.md) | [Next →](24-pseudo-classes.md)
