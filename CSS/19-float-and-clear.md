# Float and Clear

> 🟢 Beginner

## 📖 Definition

The `float` property moves an element to the left or right, allowing surrounding text to wrap around it. `clear` prevents elements from floating beside earlier floated elements.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `float: left/right` wraps text around images. Modern page layouts prefer Flexbox or CSS Grid over floats.
> - **Hindi:** `float` से टेक्स्ट इमेज के चारों तरफ लिपटता (wrap) है। लेआउट के लिए अब फ्लेक्सबॉक्स और ग्रिड का इस्तेमाल होता है।
> - **Marathi:** इमेजबोवती मजकूर रॅप करण्यासाठी `float` वापरतात.
> - **Hinglish:** Image ke surrounding mein text wrapping ke liye `float: left` use hota hai. Modern layouts ke liye Flexbox/Grid prefer karo.

## 📝 Syntax

```css
.article-img {
  float: left;
  margin-right: 15px;
  margin-bottom: 10px;
}

.footer-clear {
  clear: both; /* Stops floating elements from pushing past this point */
}
```

## 🧭 Navigation

[← Previous](18-positioning.md) | [CSS Home](00-README.md) | [Next →](20-flexbox.md)
