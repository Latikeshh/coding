# Card Layout Components

> 🟢 Beginner

## 📖 Definition

A **Card Layout Component** is a modular UI design pattern that groups related information (such as an image thumbnail, category badge, headline title, description text, and action button) into an elevated rectangular container using `background-color`, `border-radius`, `padding`, `box-shadow`, and `transition` effects.

## 🌐 Multilingual Explanation

### English
Card components combine `padding`, `border-radius`, `box-shadow`, and `transition` to group related content into clean modular UI containers.

### Hindi
Card component mein image, title, aur button ko ek box mein `padding`, `border-radius`, aur `box-shadow` ka use karke design kiya jaata hai.

### Marathi
Card layout sathi `padding`, `border-radius` ani `box-shadow` vaprun aakarshak UI card design banavle jaate.

## 🤔 Why Are Cards Popular in Modern Web Design?

Cards break complex page layouts into bite-sized, digestible content units. They are flexible, easy to rearrange in Flexbox or CSS Grid tracks, and scale responsively across all screen widths.

## 🧱 Structure of a Standard UI Card

```text
+------------------------------------------+
| [ CARD IMAGE / MEDIA THUMBNAIL ]         |
|                                          |
|  CATEGORY BADGE                          |
|  Card Title / Headline                   |
|  Brief description text paragraph...     |
|                                          |
|  [ Action Button / Read More Link ]      |
+------------------------------------------+
```

## 📝 Syntax & CSS Pattern

```css
.card {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden; /* Clips image corners to match border-radius */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* Subtle Hover Lift Effect */
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.card-body {
  padding: 20px;
}
```

## 💻 HTML + CSS Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Card Component Demo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="card">
    <img src="https://via.placeholder.com/350x180" alt="Course Thumbnail" class="card-img">
    <div class="card-body">
      <span class="badge">COURSE</span>
      <h3>CSS Grid &amp; Flexbox Masterclass</h3>
      <p>Learn to build modern, responsive 2D layouts and UI components from scratch.</p>
      <a href="#" class="card-btn">Enroll Now</a>
    </div>
  </div>

</body>
</html>
```

```css
/* style.css */
body {
  font-family: Arial, sans-serif;
  background-color: #f3f4f6;
  padding: 40px;
  display: flex;
  justify-content: center;
}

.card {
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden; /* Clips top image to rounded card corners */
  width: 100%;
  max-width: 320px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-6px); /* Elevates up on hover */
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
}

.card-img {
  width: 100%;
  height: 180px;
  object-fit: cover; /* Prevents image distortion */
}

.card-body {
  padding: 20px;
}

.badge {
  display: inline-block;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 0.08em;
  color: #2563eb;
  background-color: #eff6ff;
  padding: 4px 8px;
  border-radius: 4px;
  margin-bottom: 10px;
}

h3 {
  margin: 0 0 10px 0;
  color: #111827;
  font-size: 1.125rem;
}

p {
  color: #4b5563;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 20px;
}

.card-btn {
  display: block;
  text-align: center;
  background-color: #2563eb;
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 6px;
  font-weight: bold;
  transition: background-color 0.2s;
}

.card-btn:hover {
  background-color: #1d4ed8;
}
```

## 👀 What You Will See

A card component featuring a thumbnail image, category badge, course headline, and an action button that smoothly lifts up on mouse hover.

## 🧪 Try It Yourself

Wrap three `.card` elements inside a parent container styled with `.card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }` to create a responsive card grid!

## ⚠️ Common Mistakes

- **Forgetting `overflow: hidden` on card containers with images:** Causes sharp rectangular image top corners to spill outside the rounded `border-radius` of the card.
- **Distorting images without `object-fit: cover`:** Setting explicit image widths and heights without `object-fit: cover` stretches image aspect ratios.

## 💡 Real-World Usage

Card components are the primary UI building blocks for e-commerce product grids (Amazon), streaming movie catalogs (Netflix), news article feeds, and SaaS pricing tables.

## 🔗 Related Topics

- [Borders, Border Radius & Box Shadows](13-borders.md)
- [CSS Grid Layout](21-grid.md)
- [Modern CSS Features (`object-fit`)](40-modern-css-features.md)

## ✅ Remember

- Use `overflow: hidden` on cards containing top image banners.
- Use `object-fit: cover` on card images to preserve aspect ratio.
- Combine `transform: translateY(-4px)` and `box-shadow` on `:hover` for subtle card elevation feedback.

## 🧭 Navigation

[← Previous](35-forms-and-inputs.md) | [CSS Home](00-README.md) | [Next →](37-navigation-bars.md)
