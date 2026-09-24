# Styling Forms and Inputs

> 🟢 Beginner

## 📖 Definition

Styling HTML form controls (`<input>`, `<textarea>`, `<select>`, `<button>`) improves usability, accessibility, and visual presentation.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Style inputs with `padding`, `border`, `border-radius`, and `:focus` state outlines for accessibility.
> - **Hindi:** इनपुट फील्ड्स में `padding`, `border`, और `:focus` स्टेट्स देकर फॉर्म को सुंदर और सुलभ बनाएं।
> - **Marathi:** इनपुट फील्ड्सना `padding` आणि `:focus` स्टेट देऊन फॉर्म आकर्षक बनवावा.
> - **Hinglish:** Form inputs ko style karne ke liye `box-sizing: border-box`, `padding`, aur accessible `:focus` outline style use karo.

## 📝 Syntax

```css
input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  box-sizing: border-box;
}

input:focus, textarea:focus {
  border-color: #007bff;
  outline: 2px solid rgba(0, 123, 255, 0.25);
}
```

## 🧭 Navigation

[← Previous](34-devtools.md) | [CSS Home](00-README.md) | [Next →](36-card-layout.md)
