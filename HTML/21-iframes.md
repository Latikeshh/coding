# Inline Frames (`<iframe>`)

> 🟡 Intermediate

## 📖 Definition

An **Inline Frame (`<iframe>`)** embeds an external HTML document, video, or interactive widget (such as Google Maps, YouTube videos, or external widgets) directly inside the current webpage.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
An `<iframe>` embeds external content (maps, videos, external sites). Always provide a descriptive `title` attribute for screen reader accessibility.

### Hindi
`<iframe>` टैग बाहरी वेब पेज, मैप या यूट्यूब वीडियो को अपने पेज में एम्बेड करता है। एक्सेसिबिलिटी के लिए `title` एट्रिब्यूट देना अनिवार्य है।

### Marathi
दुसऱ्या वेबसाईटचा भाग, नकाशे किंवा युट्यूब व्हिडिओ आपल्या पेजवर दाखवण्यासाठी `<iframe>` वापरतात. `title` ॲट्रिब्यूट देणे आवश्यक आहे.

### Hinglish
External content (jaise Google Maps ya YouTube videos) ko apne page mein embed karne ke liye `<iframe>` tag use karo. Screen readers ke liye `title` attribute compulsory hai.

## 📝 Key Attributes of `<iframe>`

- **`src`:** The target URL of the external webpage or embedded widget.
- **`title` (Mandatory for Accessibility):** Explains what content the frame contains so screen reader users understand its purpose.
- **`width` & `height`:** Specifies frame container dimensions in pixels or percentages.
- **`loading="lazy"`:** Defers loading the iframe content until the user scrolls near it, improving initial page load performance.
- **`sandbox`:** Restricts script execution, form submission, and popups inside the embedded iframe for security (`sandbox="allow-scripts allow-same-origin"`).
- **`allowfullscreen`:** Permits embedded video players to enter full-screen mode.

## 🔒 Security & Privacy Considerations

1. **Mandatory `title` Attribute:** Screen readers announce iframes by their `title`. Omitting `title` causes accessibility audit failures.
2. **`X-Frame-Options` HTTP Header:** Certain major websites (like Google Search, Facebook, or banking sites) set server headers preventing their pages from being embedded inside `<iframe>` tags on external sites to prevent clickjacking attacks.

## 📝 Code Example

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
      title="Interactive Google Map showing store location in New York" 
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

## ⚠️ Common Mistakes

- **Forgetting the `title` attribute:** Writing `<iframe src="...">` without `title="Description"` breaks accessibility standards.
- **Attempting to embed sites that block framing:** Trying to embed `https://google.com` results in a blank gray box due to `X-Frame-Options: DENY`.

## 🧪 Try It Yourself

1. Embed a Google Maps location widget inside an `<iframe>`.
2. Add a descriptive `title`, `width="100%"`, `height="300"`, and `loading="lazy"`.

## 🎯 Mini Challenge

Create an HTML page containing two `<iframe>` widgets (one map and one YouTube video embed), ensuring both have accessible `title` attributes and responsive container widths.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Video](20-video.md) | [Next: Semantic HTML →](22-semantic-html.md)
