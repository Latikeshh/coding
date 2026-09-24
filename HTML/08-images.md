# Images, `<figure>`, & `<picture>`

> 🟢 Beginner

## 📖 Definition

The **`<img>`** element embeds an image into a webpage. Modern HTML also provides **`<figure>`** and **`<figcaption>`** for self-contained captioned images, and **`<picture>`** for responsive art-direction images across different screen sizes.

## 🌍 Multilingual Summary

### English
Embed images using `<img>` with descriptive `alt` text. Use `<figure>` and `<figcaption>` for image captions, and `<picture>` for displaying different images on mobile and desktop screens.

### Hindi
Webpage par image add karne ke liye `<img>` aur `alt` text ka use karein. Image caption ke liye `<figure>` + `<figcaption>`, aur responsive images ke liye `<picture>` tag use hota hai.

### Marathi
Webpage var photo dakhavnyasathi `<img>` ani `alt` text vapra. Photo la caption denyasathi `<figure>` ani `<figcaption>`, ani alag-alag screen sathi `<picture>` tag vapra.

## 🤔 Why Do We Use Them?

Images enhance visual engagement and convey information clearly. Accessible `alt` text ensures screen reader users understand image content, while specified intrinsic dimensions prevent layout shifting (Cumulative Layout Shift - CLS) during page loading.

## 📐 Key Attributes of `<img>`

- **`src` (Source):** Specifies the relative file path or absolute URL of the image file (JPG, PNG, WebP, SVG, GIF).
- **`alt` (Alternative Text):** Describes the image content for screen readers or if the image file fails to load.
- **`width` & `height`:** Defines intrinsic pixel dimensions. Providing these attributes allows browsers to reserve screen layout space before images download, eliminating layout jumps.

```html
<img src="assets/puppy.jpg" alt="A golden retriever puppy sitting on a green lawn" width="400" height="300">
```

## 🔍 How to Write Good `alt` Text

| Scenario | Accessible `alt` Text Example | Bad `alt` Text Example |
|---|---|---|
| **Informative Image** | `alt="A red sports car parked in front of a modern glass office building"` | `alt="image"` or `alt="car"` |
| **Chart / Data** | `alt="Bar chart showing annual revenue growth from $1M in 2024 to $2.5M in 2026"` | `alt="chart"` |
| **Decorative Image** | `alt=""` (Screen readers silently skip decorative borders or background icons) | `alt="divider line"` |

## 🖼️ Captioned Images with `<figure>` & `<figcaption>`

When an image requires a visible caption, diagram reference, or explanation, wrap it inside a `<figure>` element:

```html
<figure>
  <img src="images/everest.jpg" alt="Snow-covered peak of Mount Everest against a blue sky" width="600" height="400">
  <figcaption>Figure 1.1: Mount Everest summit photographed at sunrise.</figcaption>
</figure>
```

## 📱 Responsive Art Direction with `<picture>`

The `<picture>` element allows you to serve different image files depending on the user's screen width (e.g., a tall vertical image for mobile screens and a wide banner for desktop displays):

```html
<picture>
  <!-- Desktop screen (800px and wider) -->
  <source media="(min-width: 800px)" srcset="images/hero-desktop.jpg">
  <!-- Tablet screen (480px to 799px) -->
  <source media="(min-width: 480px)" srcset="images/hero-tablet.jpg">
  <!-- Mobile screen fallback -->
  <img src="images/hero-mobile.jpg" alt="Developer coding at a dual-monitor workstation" width="400" height="300" loading="lazy">
</picture>
```

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Nature Gallery</title>
</head>
<body>

  <h1>Scenic Mountain Showcase</h1>

  <figure>
    <img src="images/mountains.jpg" alt="Snowy mountain range surrounded by pine trees during sunset" width="600" height="400">
    <figcaption>Sunset view over the Rocky Mountains.</figcaption>
  </figure>

</body>
</html>
```

## 👀 Output / What You Will See

The browser displays the mountain photograph with specified dimensions, accompanied by a clean visible caption below the image.

## 🧪 Try It Yourself

1. Add an `<img>` tag with descriptive `alt` text and `width`/`height` dimensions.
2. Wrap the image inside a `<figure>` tag and add a visible caption using `<figcaption>`.
3. Experiment with `<picture>` using `srcset` and `media` rules.

## ⚠️ Common Mistakes

- **Writing meaningless `alt` text:** Using `alt="image.jpg"` or `alt="photo"`.
- **Incorrect file paths:** Writing `src="pic.jpg"` when the file is inside an `images/` folder (`src="images/pic.jpg"`).
- **Omitting `width` and `height`:** Causes layout shifting as images load.

## 🌐 Real-World Usage

E-commerce stores, news platforms, travel blogs, and portfolios use responsive images with captions and `alt` text for fast loading, SEO, and screen reader accessibility.

## 🔗 Related Topics

- [Links](07-links.md)
- [Responsive Images](29-responsive-images.md)

## 💡 Remember

- Always provide meaningful `alt` text.
- Use `width` and `height` to prevent layout shift.
- Use `<figure>` and `<figcaption>` for captioned images.

## 🧭 Navigation

[← Previous: Links](07-links.md) | [HTML Home](00-README.md) | [Next: Lists →](09-lists.md)
