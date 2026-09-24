# CSS Mini Projects

> 🟡 Intermediate

## 📖 Definition

CSS Mini Projects combine foundational and intermediate CSS concepts—selectors, Box Model, Flexbox, Grid, custom properties (variables), media queries, transitions, transforms, and UI component patterns—into complete, real-world web application interfaces.

## 🌐 Multilingual Explanation

### English
Practice CSS by building complete real-world projects: a Responsive Pricing Table Card Grid, a Personal Portfolio Hero Section, and an Accessible Dark Theme UI Card.

### Hindi
Seekhi hui sabhi CSS properties ki practice ke liye teen practical mini projects (Pricing Card Grid, Portfolio Hero Section, aur Dark Mode UI) banayein.

### Marathi
Shikleysaathi sarav CSS properties cha sarav karnyasaathi teen lahan projects (Pricing Table, Portfolio Hero Section) banva.

---

## 🏗️ Project 1: Responsive 3-Column Pricing Table Grid

A multi-tiered SaaS pricing table utilizing CSS Grid, Flexbox, hover transforms, and badges:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pricing Table Grid Project</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <header class="pricing-header">
    <h1>Simple, Transparent Pricing</h1>
    <p>Choose the learning plan that fits your coding goals.</p>
  </header>

  <main class="pricing-grid">

    <!-- Starter Plan Card -->
    <div class="pricing-card">
      <h3 class="plan-name">Starter</h3>
      <div class="price">$19<span>/mo</span></div>
      <p class="plan-desc">Perfect for beginners starting web development.</p>
      <ul class="features-list">
        <li>✓ HTML5 &amp; CSS3 Curriculum</li>
        <li>✓ Community Forum Access</li>
        <li>✓ 10 Practice Exercises</li>
      </ul>
      <button class="btn btn-outline">Choose Starter</button>
    </div>

    <!-- Pro Featured Plan Card -->
    <div class="pricing-card featured">
      <span class="badge">MOST POPULAR</span>
      <h3 class="plan-name">Pro Developer</h3>
      <div class="price">$49<span>/mo</span></div>
      <p class="plan-desc">For serious learners building fullstack projects.</p>
      <ul class="features-list">
        <li>✓ All Starter Features</li>
        <li>✓ JavaScript &amp; React Masterclass</li>
        <li>✓ 1-on-1 Code Reviews</li>
        <li>✓ Certificate of Completion</li>
      </ul>
      <button class="btn btn-primary">Get Pro Access</button>
    </div>

    <!-- Enterprise Plan Card -->
    <div class="pricing-card">
      <h3 class="plan-name">Enterprise</h3>
      <div class="price">$99<span>/mo</span></div>
      <p class="plan-desc">For teams and coding bootcamp groups.</p>
      <ul class="features-list">
        <li>✓ All Pro Features</li>
        <li>✓ Team Analytics Dashboard</li>
        <li>✓ Dedicated Mentor Support</li>
      </ul>
      <button class="btn btn-outline">Contact Sales</button>
    </div>

  </main>

</body>
</html>
```

```css
/* style.css */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --primary-blue: #2563eb;
  --primary-dark: #1d4ed8;
  --bg-page: #f8fafc;
  --text-dark: #0f172a;
  --text-muted: #64748b;
  --card-bg: #ffffff;
}

body {
  font-family: Arial, sans-serif;
  background-color: var(--bg-page);
  color: var(--text-dark);
  padding: 40px 20px;
}

.pricing-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 40px auto;
}

.pricing-header h1 {
  font-size: 2.25rem;
  margin-bottom: 10px;
  color: var(--text-dark);
}

.pricing-header p {
  color: var(--text-muted);
  font-size: 1.1rem;
}

/* 2D Auto-responsive Grid Layout */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
  align-items: center;
}

.pricing-card {
  background: var(--card-bg);
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 35px 25px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
}

/* Featured Card Highlight */
.pricing-card.featured {
  border: 2px solid var(--primary-blue);
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.15);
}

.badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary-blue);
  color: white;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 12px;
  letter-spacing: 0.05em;
}

.plan-name {
  font-size: 1.25rem;
  margin-bottom: 15px;
}

.price {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--text-dark);
  margin-bottom: 10px;
}

.price span {
  font-size: 1rem;
  color: var(--text-muted);
  font-weight: normal;
}

.plan-desc {
  color: var(--text-muted);
  font-size: 14px;
  margin-bottom: 25px;
  line-height: 1.5;
}

.features-list {
  list-style: none;
  margin-bottom: 30px;
  flex-grow: 1; /* Pushes button to bottom */
}

.features-list li {
  padding: 8px 0;
  border-bottom: 1px solid #f1f5f9;
  font-size: 14px;
  color: #334155;
}

.btn {
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s;
}

.btn-primary {
  background-color: var(--primary-blue);
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: var(--primary-dark);
}

.btn-outline {
  background-color: transparent;
  color: var(--primary-blue);
  border: 1px solid var(--primary-blue);
}

.btn-outline:hover {
  background-color: #eff6ff;
}
```

---

## 🏗️ Project 2: Developer Portfolio Hero Section

A responsive portfolio hero section utilizing Flexbox alignment, CSS variables, and fluid typography:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio Hero Section Project</title>
  <link rel="stylesheet" href="hero-style.css">
</head>
<body>

  <section class="hero-container">
    <div class="hero-content">
      <span class="status-pill">AVAILABLE FOR HIRE</span>
      <h1>Building Clean &amp; Accessible Web Experiences</h1>
      <p>I am Alex Kumar, a Frontend Engineer specializing in responsive HTML5, CSS3, and JavaScript development.</p>
      <div class="hero-actions">
        <a href="#projects" class="btn btn-main">View My Work</a>
        <a href="#contact" class="btn btn-secondary">Contact Me</a>
      </div>
    </div>
  </section>

</body>
</html>
```

```css
/* hero-style.css */
*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Arial, sans-serif;
  background-color: #0f172a;
  color: #f8fafc;
}

.hero-container {
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  background: radial-gradient(circle at top right, #1e293b, #0f172a);
}

.hero-content {
  max-width: 750px;
  text-align: center;
}

.status-pill {
  display: inline-block;
  background-color: rgba(56, 189, 248, 0.1);
  color: #38bdf8;
  border: 1px solid rgba(56, 189, 248, 0.3);
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.08em;
  margin-bottom: 20px;
}

h1 {
  /* Fluid responsive typography with clamp() */
  font-size: clamp(2rem, 5vw, 3.5rem);
  line-height: 1.2;
  margin-bottom: 20px;
  color: #ffffff;
}

p {
  font-size: 1.125rem;
  color: #94a3b8;
  line-height: 1.6;
  margin-bottom: 30px;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  transition: transform 0.2s, background-color 0.2s, box-shadow 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-main {
  background-color: #0284c7;
  color: white;
  box-shadow: 0 4px 14px rgba(2, 132, 199, 0.4);
}

.btn-main:hover {
  background-color: #0369a1;
}

.btn-secondary {
  background-color: #1e293b;
  color: #e2e8f0;
  border: 1px solid #334155;
}

.btn-secondary:hover {
  background-color: #334155;
}
```

---

## 🧭 Navigation

[← Previous](37-navigation-bars.md) | [CSS Home](00-README.md) | [Next →](39-advanced-selectors.md)
