# Inline Frames (`<iframe>`)

> 🟡 Intermediate

## 📖 Definition

An **Inline Frame (`<iframe>`)** embeds an external HTML document, web page, or interactive widget (such as Google Maps, YouTube video players, or external widgets) directly inside the current webpage.

## 🌍 Multilingual Summary

### English
An `<iframe>` embeds external content (maps, videos, external web pages). Always provide a descriptive `title` attribute for screen reader accessibility.

### Hindi
External content (jaise Google Maps ya YouTube videos) ko apne page mein embed karne ke liye `<iframe>` tag use karein. Screen readers ke liye `title` attribute compulsory hai.

### Marathi
External content (jase Google Maps kiva YouTube videos) potchya webpage madhye dakhavnyasathi `<iframe>` tag vaprtat. `title` attribute dene aavashyak aahe.

## 🤔 Why Do We Use Iframes?

Iframes allow web developers to integrate interactive third-party tools—interactive location maps, embedded video players, payment portals, or social media widgets—without writing complex custom rendering logic from scratch.

## 📐 Key Attributes of `<iframe>`

- **`src`:** The target URL of the external webpage or embedded widget.
- **`title` (Mandatory for Accessibility):** Describes the embedded frame content so screen reader users understand its purpose.
- **`width` & `height`:** Specifies frame container dimensions in pixels or percentages.
- **`loading="lazy"`:** Defers loading iframe content until the user scrolls near it, improving initial page loading speed.
- **`sandbox`:** Restricts script execution, form submissions, and popups inside the embedded frame for security (`sandbox="allow-scripts allow-same-origin"`).
- **`allowfullscreen`:** Permits embedded video players to enter full-screen mode.

## 🔒 Security & Framing Restrictions

1. **Mandatory `title` Attribute:** Screen readers announce iframes by their `title`. Omitting `title` violates accessibility standards.
2. **`X-Frame-Options` & CSP Security Headers:** Major websites (such as Google Search, GitHub, or banking portals) send HTTP security headers (`X-Frame-Options: DENY` or `X-Frame-Options: SAMEORIGIN`) preventing external sites from embedding their pages inside an `<iframe>` to protect against clickjacking attacks.

## 💻 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Embedded Map and Video</title>
</head>
<body>

  <h1>Our Store Location & Demo</h1>

  <section>
    <h2>Visit Our Office</h2>
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2183123!2d-73.9855!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU0LjIiTiA3M8KwNTknMDcuOCJX!5e0!3m2!1sen!2sin!4v123456789" 
      title="Interactive Google Map showing store location" 
      width="100%" 
      height="350" 
      style="border:0;" 
      loading="lazy" 
      allowfullscreen>
    </iframe>
  </section>

  <section>
    <h2>Watch Product Demo</h2>
    <iframe 
      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
      title="YouTube Video Player: Product Demonstration Tutorial" 
      width="560" 
      height="315" 
      style="border:0;" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  </section>

</body>
</html>
```

## 👀 Output / What You Will See

Two embedded interactive frames rendered seamlessly on the page: an interactive Google Maps location widget and a playable YouTube video player.

## 🧪 Try It Yourself

1. Embed a Google Maps location widget inside an `<iframe>`.
2. Add a descriptive `title` attribute, `width="100%"`, `height="300"`, and `loading="lazy"`.
3. Test a YouTube video embed with `allowfullscreen`.

## ⚠️ Common Mistakes

- **Forgetting the `title` attribute:** Writing `<iframe src="...">` without `title="Description"` breaks accessibility standards.
- **Attempting to embed sites that block framing:** Trying to embed `https://google.com` results in a blank box due to `X-Frame-Options` security headers set by Google.

## 🌐 Real-World Usage

Contact pages embed Google Maps, blog articles embed YouTube videos, and e-commerce stores embed payment provider widgets using secure `<iframe>` containers.

## 🔗 Related Topics

- [Video](20-video.md)
- [Accessibility Basics](24-accessibility-basics.md)

## 💡 Remember

- Always provide a descriptive `title` attribute on every `<iframe>`.
- Use `loading="lazy"` to defer loading off-screen iframes.
- Some websites block iframe embedding using security headers.

## 🧭 Navigation

[← Previous: Video](20-video.md) | [HTML Home](00-README.md) | [Next: Semantic HTML →](22-semantic-html.md)
