# CSS Transitions

> 🟢 Beginner

## 📖 Definition

Transitions create smooth property change animations over a specified duration when element states change (e.g. on `:hover` or `:focus`).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `transition` smoothly animates CSS state changes (`transition: property duration timing-function`).
> - **Hindi:** `transition` स्टेट बदलने पर एनीमेशन को अचानक के बजाय धीरे और स्मूथ (smooth) बनाता है।
> - **Marathi:** `transition` मुळे होणारे बदल अचानक न होता टप्प्याटप्प्याने स्मूथ दिसतात.
> - **Hinglish:** Hover effects ko smooth banane ke liye `transition: background-color 0.3s ease;` use karo.

## 📝 Syntax

```css
.btn {
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}
```

## 🧭 Navigation

[← Previous](27-fonts.md) | [CSS Home](00-README.md) | [Next →](29-transforms.md)
