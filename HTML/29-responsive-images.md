# Responsive Images & Art Direction (`<picture>`, `srcset`, `sizes`, `loading="lazy"`)

> 🟡 Intermediate

## 📖 Definition

**Responsive Images** in HTML enable web browsers to select and download the optimal image file based on a device's screen size, display resolution (pixel density), and layout width. This is achieved using the **`srcset`** and **`sizes`** attributes on `<img>` elements, the **`<picture>`** element for art direction, and performance attributes like **`loading="lazy"`**.

## 🌍 Multilingual Summary

### English
Responsive images serve optimal image files using `srcset` and `sizes` for resolution density, `<picture>` for media query art direction, and `loading="lazy"` for performance optimization.

### Hindi
Responsive images device screen size aur pixel density ke according standard image choose karte hain using `srcset`, `sizes`, `<picture>` tag, aur `loading="lazy"` for fast page loading.

### Marathi
Responsive images screen size ani pixel density nusar yogy photo download kartat. Yasathi `srcset`, `sizes`, `<picture>` tag, ani `loading="lazy"` vapartat.

## 🤔 Why Do We Use Responsive Images?

Serving a huge 4000px desktop banner to a mobile smartphone wastes mobile cellular data and slows down page load speed. Conversely, serving a small mobile thumbnail to a 4K desktop monitor results in blurry images. Responsive images deliver fast page loading, saved bandwidth, and sharp visual quality across all devices.

## 📐 Method 1: Resolution Switching with `srcset` & `sizes`

The `srcset` attribute provides a list of image file sources paired with their intrinsic pixel widths (`w`), while `sizes` tells the browser how wide the image will render at different viewport breakpoints:

```html
<img 
  src="images/banner-medium.jpg" 
  srcset="images/banner-small.jpg 480w,
          images/banner-medium.jpg 800w,
          images/banner-large.jpg 1200w" 
  sizes="(max-width: 600px) 480px,
         (max-width: 1000px) 800px,
         1200px" 
  alt="Developer working at a laptop workstation" 
  width="1200" 
  height="600" 
  loading="lazy">
```

How it works: The browser inspects device screen width and pixel density, consults `sizes`, and automatically downloads only the most appropriate image source file from `srcset`.

## 🖼️ Method 2: Art Direction with `<picture>` & `<source>`

Use `<picture>` when you want to serve **completely different cropped images or file formats** (e.g. WebP/AVIF vs JPG) depending on screen width media queries:

```html
<picture>
  <!-- Modern AVIF format for supporting modern browsers -->
  <source type="image/avif" srcset="images/hero.avif">
  
  <!-- Media query: Desktop wide banner -->
  <source media="(min-width: 900px)" srcset="images/hero-desktop-wide.jpg">
  
  <!-- Media query: Tablet medium cropped image -->
  <source media="(min-width: 600px)" srcset="images/hero-tablet.jpg">
  
  <!-- Mobile default fallback img tag -->
  <img src="images/hero-mobile-portrait.jpg" alt="Team meeting around a conference table" width="400" height="500" loading="lazy">
</picture>
```

## ⚡ Performance Optimization Attributes

- **`loading="lazy"`:** Defers downloading images located off-screen until the user scrolls near them, reducing initial page load time and saving bandwidth.
- **`decoding="async"`:** Allows browsers to decode image bytes asynchronously off the main thread, preventing UI stuttering.

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Responsive Images Practice</title>
</head>
<body>

  <h1>Responsive Photography Showcase</h1>

  <!-- Art Direction Example -->
  <figure>
    <picture>
      <source media="(min-width: 800px)" srcset="images/nature-desktop.jpg">
      <source media="(min-width: 500px)" srcset="images/nature-tablet.jpg">
      <img src="images/nature-mobile.jpg" alt="Scenic mountain valley under blue sky" width="800" height="400" loading="lazy">
    </picture>
    <figcaption>Figure 1: Responsive mountain landscape adapted for all screen sizes.</figcaption>
  </figure>

</body>
</html>
```

## 👀 Output / What You Will See

On mobile screens, the browser renders the compact mobile image crop (`nature-mobile.jpg`). On wide desktop screens, it automatically loads the high-resolution desktop banner (`nature-desktop.jpg`).

## 🧪 Try It Yourself

1. Build a `<picture>` element with two `<source>` tags using `media="(min-width: 768px)"` for desktop and fallback `<img>` for mobile.
2. Add `loading="lazy"` and explicit `width`/`height` attributes to prevent layout shifts.

## ⚠️ Common Mistakes

- **Forgetting fallback `<img>` inside `<picture>`:** Without a fallback `<img>`, the `<picture>` element renders nothing if media queries fail or browser support is limited.
- **Forgetting `width` and `height`:** Causes Cumulative Layout Shift (CLS) as images load into the viewport.

## 🌐 Real-World Usage

E-commerce stores, news publishers, and photography portals use responsive images with WebP/AVIF formats and lazy loading for maximum speed and performance.

## 🔗 Related Topics

- [Images](08-images.md)
- [Modern HTML5 Features](23-html5-features.md)

## 💡 Remember

- Use `srcset` and `sizes` for resolution density switching.
- Use `<picture>` for art direction (cropped mobile vs desktop images).
- Always include a fallback `<img>` inside `<picture>`.
- Add `loading="lazy"` for off-screen images.

## 🧭 Navigation

[← Previous: Advanced Form Controls](28-advanced-form-controls.md) | [HTML Home](00-README.md) | [Next: Interactive Elements →](30-interactive-elements.md)
