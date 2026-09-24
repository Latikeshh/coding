# Display Property

> 🟢 Beginner

## 📖 Definition

The `display` property determines how an HTML element behaves in page layout (`block`, `inline`, `inline-block`, `none`, `flex`, `grid`).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `block` takes full width & new line. `inline` sits in text flow. `inline-block` allows width/height sizing inline. `none` hides element completely.
> - **Hindi:** `block` नई लाइन और पूरी चौड़ाई लेता है। `inline` टेक्स्ट के साथ बहता है। `inline-block` साइज कंट्रोल के साथ इनलाइन रहता है।
> - **Marathi:** `display` मुळे एलिमेंट लेआउटमध्ये कसा दिसेल ते ठरते (`block`, `inline`, `flex`, `grid`).
> - **Hinglish:** `display` property element layout behavior decide karti hai. Elements ko hide karne ke liye `display: none` use karo.

## 📝 Common Display Values

- `block`: Full width, starts on new line (`<div>`, `<p>`, `<h1>`).
- `inline`: Width of content, sits on same line (`<span>`, `<a>`, `<strong>`).
- `inline-block`: Sits inline but respects custom `width` and `height`.
- `none`: Completely removes element from document flow and screen rendering.

```css
.badge {
  display: inline-block;
  padding: 5px 10px;
  width: 100px;
}
```

## 🧭 Navigation

[← Previous](16-box-model.md) | [CSS Home](00-README.md) | [Next →](18-positioning.md)
