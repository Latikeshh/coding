# Pseudo-classes

> 🟢 Beginner

## 📖 Definition

Pseudo-classes select and style elements based on their specific user interaction states or structural positions in the DOM tree (e.g. `:hover`, `:focus`, `:active`, `:first-child`, `:nth-child()`).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Pseudo-classes style elements based on state (`:hover`, `:focus`, `:visited`) or DOM tree position (`:first-child`, `:nth-child()`).
> - **Hindi:** सूडो-क्लासेस यूज़र इंटरैक्शन स्टेट्स (`:hover`, `:focus`) और पोजीशन (`:first-child`) के आधार पर स्टाइल करती हैं।
> - **Marathi:** स्टेटनुसार (`:hover`, `:focus`) एलिमेंट्सना स्टाइल करण्यासाठी प्सुडो-क्लासेस वापरतात.
> - **Hinglish:** Element state (`:hover`, `:focus`, `:active`) ya structural position (`:nth-child()`) target karne ke liye pseudo-classes use hoti hain.

## 📝 Syntax & Examples

```css
/* Mouse hover state */
button:hover {
  background-color: #0056b3;
}

/* Keyboard focus state (essential for accessibility!) */
input:focus, button:focus {
  outline: 2px solid #0056b3;
}

/* Structural positional pseudo-classes */
li:first-child { font-weight: bold; }
tr:nth-child(even) { background-color: #f2f2f2; }
```

## 🧭 Navigation

[← Previous](23-media-queries.md) | [CSS Home](00-README.md) | [Next →](25-pseudo-elements.md)
