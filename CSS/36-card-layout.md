# Card Layout Components

> 🟢 Beginner

## 📖 Definition

A card layout groups related information (image, title, description, action button) into clean, elevated UI containers.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Combine `padding`, `border-radius`, and `box-shadow` to create modular UI cards.
> - **Hindi:** `padding`, `border-radius`, और `box-shadow` को मिलाकर यूआई कार्ड कम्पोनेंट बनाए जाते हैं।
> - **Marathi:** कार्ड लेआउटसाठी `box-shadow` आणि `border-radius` वापरतात.
> - **Hinglish:** UI cards banane ke liye `background-color`, `border-radius: 12px`, aur subtle `box-shadow` use hota hai.

## 📝 Syntax

```css
.card {
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
```

## 🧭 Navigation

[← Previous](35-forms-and-inputs.md) | [CSS Home](00-README.md) | [Next →](37-navigation-bars.md)
