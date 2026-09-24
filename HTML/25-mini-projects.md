# HTML Mini Projects

> 🟡 Intermediate

## 📖 Definition

Practical mini projects allow you to combine all learned HTML concepts—document structure, headings, lists, tables, images, media, forms, accessibility labels, and semantic elements—into complete, real-world web pages.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
Practice HTML by building complete mini projects: a Developer Resume, a Recipe Card page, and a Registration Form.

### Hindi
सीखे गए सभी HTML टैग्स की प्रैक्टिस के लिए तीन व्यावहारिक मिनी प्रोजेक्ट्स (डेवलपर रिज़्यूमे, रेसिपी कार्ड और रजिस्ट्रेशन फॉर्म) बनाएं।

### Marathi
शिकलेल्या सर्व HTML टॅग्जचा सराव करण्यासाठी तीन लहान प्रोजेक्ट्स (डेव्हलपर रिझ्युमे, रेसिपी कार्ड आणि नोंदणी फॉर्म) बनवा.

### Hinglish
Learned HTML concepts ko apply karne ke liye complete mini projects (Developer Resume, Recipe Card, Event Registration Form) practice karo.

---

## 🏗️ Project 1: Developer Portfolio / Resume Page

A structured personal resume page using semantic HTML5 tags:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Alex Kumar - Web Developer Portfolio and Resume">
  <title>Alex Kumar - Developer Portfolio</title>
</head>
<body>

  <header>
    <h1>Alex Kumar</h1>
    <p>Frontend Web Developer &amp; Computer Science Student</p>
    <nav>
      <a href="#about">About</a> |
      <a href="#skills">Skills</a> |
      <a href="#projects">Projects</a> |
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <hr>

  <main>
    <section id="about">
      <h2>About Me</h2>
      <p>Passionate computer science student dedicated to building clean, accessible, and high-performance web applications using modern HTML5, CSS3, and JavaScript.</p>
    </section>

    <section id="skills">
      <h2>Technical Skills</h2>
      <ul>
        <li>Frontend Development (HTML5, CSS3, JavaScript)</li>
        <li>Version Control (Git &amp; GitHub)</li>
        <li>Web Accessibility (a11y) &amp; Responsive Web Design</li>
      </ul>
    </section>

    <section id="projects">
      <h2>Featured Projects</h2>

      <article>
        <h3>1. Student Learning Portal</h3>
        <p>A web platform providing structured coding notes and tutorials for beginners.</p>
      </article>

      <article>
        <h3>2. E-Commerce Food Ordering Site</h3>
        <p>An accessible frontend prototype featuring restaurant menus and order placement forms.</p>
      </article>
    </section>

    <section id="contact">
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:alex@example.com">alex@example.com</a></p>
      <p>GitHub: <a href="https://github.com" target="_blank" rel="noopener">github.com/example-user</a></p>
    </section>
  </main>

  <hr>

  <footer>
    <p>&copy; 2026 Alex Kumar. All rights reserved.</p>
  </footer>

</body>
</html>
```

---

## 🏗️ Project 2: Restaurant Recipe Card Page

A recipe showcase page utilizing `<figure>`, `<figcaption>`, `<dl>`, and `<ol>`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fluffy Homemade Pancakes Recipe</title>
</head>
<body>

  <header>
    <h1>Classic Fluffy Pancakes</h1>
    <p>A quick 15-minute breakfast pancake recipe for family mornings.</p>
  </header>

  <main>
    <figure>
      <img src="images/pancakes.jpg" alt="Stack of golden fluffy pancakes topped with maple syrup and fresh berries" width="500" height="350">
      <figcaption>Figure 1: Golden fluffy pancakes served fresh with syrup.</figcaption>
    </figure>

    <section>
      <h2>Recipe Quick Facts</h2>
      <dl>
        <dt>Prep Time:</dt>
        <dd>10 minutes</dd>
        <dt>Cook Time:</dt>
        <dd>15 minutes</dd>
        <dt>Servings:</dt>
        <dd>4 servings</dd>
      </dl>
    </section>

    <section>
      <h2>Ingredients</h2>
      <ul>
        <li>1½ cups all-purpose flour</li>
        <li>3½ teaspoons baking powder</li>
        <li>1 tablespoon sugar</li>
        <li>1¼ cups milk</li>
        <li>1 egg</li>
        <li>3 tablespoons melted butter</li>
      </ul>
    </section>

    <section>
      <h2>Step-by-Step Instructions</h2>
      <ol>
        <li>Sift flour, baking powder, and sugar together in a large bowl.</li>
        <li>Make a well in the center and pour in milk, egg, and melted butter; mix until smooth.</li>
        <li>Heat a lightly oiled griddle or frying pan over medium-high heat.</li>
        <li>Pour batter onto griddle; cook until bubbles form, then flip and brown second side.</li>
      </ol>
    </section>
  </main>

  <footer>
    <p>Recipe published by Food Corner Blog &bull; &copy; 2026</p>
  </footer>

</body>
</html>
```

---

## 🏗️ Project 3: Student Registration Form Page

A comprehensive form combining `<fieldset>`, input validations, dropdowns, and textareas:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Workshop Registration Form</title>
</head>
<body>

  <main>
    <h1>Web Development Workshop Registration</h1>
    <p>Fill out the form below to register for the upcoming web development bootcamp.</p>

    <form action="/submit-registration" method="POST">

      <fieldset>
        <legend>Personal Information</legend>

        <p>
          <label for="name">Full Name:</label><br>
          <input id="name" type="text" name="fullName" required placeholder="John Doe">
        </p>

        <p>
          <label for="email">Email Address:</label><br>
          <input id="email" type="email" name="userEmail" required placeholder="john@example.com">
        </p>

        <p>
          <label for="phone">Phone Number:</label><br>
          <input id="phone" type="tel" name="userPhone" pattern="[0-9]{10}" placeholder="9876543210" required>
        </p>
      </fieldset>

      <fieldset>
        <legend>Workshop Details</legend>

        <p>
          <label for="track">Select Learning Track:</label><br>
          <select id="track" name="learningTrack" required>
            <option value="">-- Choose a Track --</option>
            <option value="html-css">HTML5 &amp; CSS3 Fundamentals</option>
            <option value="javascript">JavaScript ES6 &amp; DOM</option>
            <option value="fullstack">Fullstack Web Development</option>
          </select>
        </p>

        <p>
          <label for="comments">Why do you want to join this workshop?</label><br>
          <textarea id="comments" name="reasons" rows="4" cols="50" placeholder="Share your coding goals..."></textarea>
        </p>
      </fieldset>

      <p>
        <button type="submit">Complete Registration</button>
        <button type="reset">Clear Form</button>
      </p>

    </form>
  </main>

  <footer>
    <p>Questions? Contact us at <a href="mailto:workshops@college.edu">workshops@college.edu</a></p>
  </footer>

</body>
</html>
```

---

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Accessibility Basics](24-accessibility-basics.md) | [Next: HTML History →](26-html-history.md)
