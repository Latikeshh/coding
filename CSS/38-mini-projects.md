# CSS Mini Projects

> 🟢 Beginner

## 📖 Definition

Mini projects combine CSS selectors, box model, Flexbox, Grid, transitions, and responsive design into polished UI components.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Practice CSS by building cards, pricing tables, hero banners, and responsive layouts.
> - **Hindi:** सीखी हुई सभी प्रॉपर्टीज की प्रेक्टिस करने के लिए छोटे प्रोजेक्ट्स (जैसे प्राइसिंग टेबल, प्रोफाइल कार्ड) बनाएं।
> - **Marathi:** प्रॅक्टिससाठी लहान प्रोजेक्ट्स (प्रायसिंग कार्ड, प्रोफाइल कार्ड) बनवा.
> - **Hinglish:** CSS skills master karne ke liye real mini UI components (pricing cards, hero sections, navbars) build karo.

## 🏗️ Project: Responsive Pricing Card

```html
<div class="pricing-card">
  <h2>Starter Plan</h2>
  <div class="price">$19<span>/mo</span></div>
  <ul>
    <li>5 Projects</li>
    <li>10GB Storage</li>
    <li>24/7 Support</li>
  </ul>
  <button class="btn">Get Started</button>
</div>
```

```css
.pricing-card {
  width: 100%;
  max-width: 320px;
  padding: 30px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.btn {
  width: 100%;
  padding: 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.btn:hover {
  background: #0056b3;
}
```

## 🧭 Navigation

[← Previous](37-navigation-bars.md) | [CSS Home](00-README.md)
