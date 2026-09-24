# Pseudo-elements

> 🟢 Beginner

## 📖 Definition

Pseudo-elements style specific sub-parts of an element or insert virtual content into the page before or after an element (`::before`, `::after`, `::first-line`, `::selection`).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Pseudo-elements style sub-parts of elements. `::before` and `::after` insert decorative virtual elements (require `content: ""`).
> - **Hindi:** सूडो-एलीमेंट्स (`::before`, `::after`) बिना एक्स्ट्रा HTML के वर्चुअल डेकोरेटिव कंटेंट जोड़ने का काम करते हैं (`content: ""` ज़रूरी है)।
> - **Marathi:** `::before` आणि `::after` मुळे HTML न बदलता डिझाईन जोडता येते.
> - **Hinglish:** `::before` aur `::after` se CSS ke zariye virtual elements insert kiye jaate hain. Always specify `content: ""`.

## 📝 Syntax & Examples

```css
/* Decorative icon or quote insertion */
blockquote::before {
  content: "“";
  font-size: 2rem;
  color: #888;
}

/* Underline effect under heading */
h2::after {
  content: "";
  display: block;
  width: 50px;
  height: 3px;
  background-color: #007bff;
  margin-top: 5px;
}
```

## 🧭 Navigation

[← Previous](24-pseudo-classes.md) | [CSS Home](00-README.md) | [Next →](26-text-styling.md)
