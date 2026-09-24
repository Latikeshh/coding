# Images, `<picture>`, & `<figure>`

> 🟢 Beginner

## 📖 Definition

The **`<img>`** element embeds an image into a webpage. HTML5 also provides **`<figure>`** and **`<figcaption>`** for self-contained captioned images, and **`<picture>`** for responsive art-direction images.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
Embed images using `<img>` with descriptive `alt` text. Use `<figure>` and `<figcaption>` for image captions, and `<picture>` for displaying different images on mobile and desktop screens.

### Hindi
पेज में इमेज जोड़ने के लिए `<img>` और `alt` टेक्स्ट का यूज़ करें। इमेज कैप्शन के लिए `<figure>` और `<figcaption>`, और रेस्पॉन्सिव इमेजेस के लिए `<picture>` टैग का इस्तेमाल होता है।

### Marathi
वेब पेजवर फोटो दाखवण्यासाठी `<img>` आणि `alt` मजकूर वापरावा. फोटोला कॅप्शन देण्यासाठी `<figure>` आणि `<figcaption>` तर वेगवेगळ्या स्क्रीनसाठी `<picture>` वापरा.

### Hinglish
Image add karne ke liye `<img>` tag aur descriptive `alt` text use karo. Caption ke liye `<figure>` + `<figcaption>` aur responsive screen images ke liye `<picture>` tag use hota hai.

## 📝 Key Attributes of `<img>`

- **`src` (source):** Specifies the relative file path or absolute URL of the image file (e.g. JPG, PNG, WebP, SVG, GIF).
- **`alt` (alternative text):** Describes the image content for screen readers, or when the image fails to load.
- **`width` & `height`:** Specifies intrinsic pixel dimensions. Providing these dimensions helps the browser reserve space before the image file finishes downloading, reducing Cumulative Layout Shift (CLS).

```html
<img src="assets/puppy.jpg" alt="A golden retriever puppy sitting on a green lawn" width="400" height="300">
```

## 🔍 How to Write Good `alt` Text

| Scenario | Good `alt` Text Example | Bad `alt` Text Example |
|---|---|---|
| **Informative Image** | `alt="A red sports car parked in front of a modern glass office building"` | `alt="image"` or `alt="car"` |
| **Chart / Data** | `alt="Bar chart showing annual revenue growth from $1M in 2024 to $2.5M in 2026"` | `alt="chart"` |
| **Decorative Image** | `alt=""` (Screen readers silently skip decorative background borders) | `alt="divider line"` |

## 🖼️ Captioned Images with `<figure>` & `<figcaption>`

When an image requires a visible caption, diagram reference, or explanation, wrap it inside a `<figure>` element:

```html
<figure>
  <img src="images/everest.jpg" alt="Snow-covered peak of Mount Everest against a clear blue sky" width="600" height="400">
  <figcaption>Figure 1.1: Mount Everest summit photographed at sunrise.</figcaption>
</figure>
```

## 📱 Responsive Art Direction with `<picture>`

The `<picture>` element allows you to serve different image files depending on the user's screen size (e.g. a cropped vertical image for mobile screens and a wide banner for desktop displays):

```html
<picture>
  <!-- Desktop screen (800px and wider) -->
  <source media="(min-width: 800px)" srcset="images/hero-desktop.jpg">
  <!-- Tablet screen (480px to 799px) -->
  <source media="(min-width: 480px)" srcset="images/hero-tablet.jpg">
  <!-- Mobile screen fallback -->
  <img src="images/hero-mobile.jpg" alt="Developer coding at a dual-monitor workstation" width="400" height="300">
</picture>
```

## ⚠️ Common Mistakes

- **Writing uninformative `alt` text:** Using `alt="image.jpg"` or `alt="picture"`.
- **Incorrect file paths:** Writing `src="pic.jpg"` when the file is stored inside an `images/` folder (`src="images/pic.jpg"`).

## 🧪 Try It Yourself

1. Add an image tag with descriptive `alt` text and specified `width` and `height`.
2. Wrap the image inside a `<figure>` tag and add a caption using `<figcaption>`.

## 🎯 Mini Challenge

Create a responsive `<picture>` component providing two image sizes: one wide banner image for desktop screens (`min-width: 768px`) and one compact image for mobile screens.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Links](07-links.md) | [Next: Lists →](09-lists.md)
