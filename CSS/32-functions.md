# CSS Functions (`calc()`, `clamp()`, `var()`)

> 🟢 Beginner

## 📖 Definition

CSS functions perform runtime calculations, retrieve variable values, or compute colors directly within style declarations (e.g. `calc()`, `clamp()`, `min()`, `max()`, `var()`, `rgb()`).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `calc()` performs math calculations (`calc(100% - 40px)`). `clamp(min, val, max)` sets responsive fluid typography and sizing.
> - **Hindi:** `calc()` से गणितीय गणना की जाती है। `clamp()` से टेक्स्ट साइज को मोबाइल और डेस्कटॉप के बीच फ्लेक्सिबल बनाया जाता है।
> - **Marathi:** `calc()` मुळे गणिती आकडेमोड करता येते तर `clamp()` मुळे फॉन्ट साईझ स्क्रीननुसार ॲडजस्ट होते.
> - **Hinglish:** CSS functions mein `calc()` dynamic math evaluation ke liye aur `clamp()` fluid typography & responsive sizing ke liye use hote hain.

## 📝 Syntax & Examples

```css
.card {
  width: calc(100% - 40px); /* Subtracts 40px margin from 100% width */
}

/* Fluid responsive typography */
h1 {
  font-size: clamp(1.5rem, 5vw, 3rem); /* Min 1.5rem, preferred 5vw, max 3rem */
}
```

## 🧭 Navigation

[← Previous](31-variables.md) | [CSS Home](00-README.md) | [Next →](33-important.md)
