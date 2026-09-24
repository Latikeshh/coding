# Video (`<video>`)

> 🟡 Intermediate

## 📖 Definition

The **`<video>`** element embeds playable video files (such as MP4 or WebM videos) directly into a webpage with native play, pause, volume, seek, and fullscreen playback controls.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
Embed videos using `<video controls width="640">`. Use `<track>` elements for subtitles and captions, and specify `poster` for a custom video thumbnail.

### Hindi
पेज पर वीडियो प्ले करने के लिए `<video controls>` का इस्तेमाल करें। सबटाइटल के लिए `<track>` टैग और थंबनेल के लिए `poster` एट्रिब्यूट का प्रयोग होता है।

### Marathi
वेब पेजवर व्हिडिओ दाखवण्यासाठी `<video controls>` टॅग वापरतात. सबटायटल्ससाठी `<track>` टॅग व थंबनेलसाठी `poster` ॲट्रिब्यूट वापरा.

### Hinglish
Web page par video render karne ke liye `<video controls>` tag use karo. Video thumbnail ke liye `poster` attribute aur captions ke liye `<track>` tag use hota hai.

## 📝 Key Attributes of `<video>`

- **`controls`:** Displays native playback controls (Play/Pause button, seek scrubber bar, volume, and Fullscreen toggle).
- **`width` & `height`:** Defines player container dimensions in pixels.
- **`poster="thumbnail.jpg"`:** Displays a preview image thumbnail before the user hits play.
- **`autoplay`:** Automatically starts playing video on page load (**Requires `muted` in modern browsers**).
- **`muted`:** Silences video audio track by default.
- **`loop`:** Restarts video playback automatically when finished.
- **`preload="auto|metadata|none"`:** Controls video buffering behavior.

## 💬 Subtitles & Captions with `<track>`

For accessibility and international audience support, wrap `<track>` elements inside `<video>` to supply WebVTT (`.vtt`) subtitle files:

```html
<video controls width="640" poster="images/thumbnail.jpg">
  <source src="media/tutorial.mp4" type="video/mp4">
  <source src="media/tutorial.webm" type="video/webm">
  
  <!-- English Subtitles -->
  <track src="subtitles/en.vtt" kind="subtitles" srclang="en" label="English">
  <!-- Hindi Subtitles -->
  <track src="subtitles/hi.vtt" kind="subtitles" srclang="hi" label="Hindi">

  Your browser does not support the video tag.
</video>
```

## 📝 Code Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Video Tutorial Example</title>
</head>
<body>

  <h1>HTML5 Video Showcase</h1>

  <figure>
    <video controls width="560" height="315" poster="images/html-thumb.jpg" preload="metadata">
      <source src="media/intro-html.mp4" type="video/mp4">
      <source src="media/intro-html.webm" type="video/webm">
      <track src="captions/en.vtt" kind="captions" srclang="en" label="English Captions" default>
      Your browser does not support HTML5 video.
    </video>
    <figcaption>Video 1: Introduction to HTML5 Web Development.</figcaption>
  </figure>

</body>
</html>
```

## ⚠️ Common Mistakes

- **Omitting `muted` on `autoplay` videos:** Writing `<video autoplay>` without `muted` causes modern browsers to block video playback completely.
- **Forgetting explicit `width` and `height`:** Causes layout jumping while the video metadata loads.

## 🧪 Try It Yourself

Create a video element featuring:
1. `controls`, `width="480"`, and a custom `poster` thumbnail image.
2. Two `<source>` tags for MP4 and WebM formats.
3. An English subtitle `<track>` element.

## 🎯 Mini Challenge

Create a background hero video banner that autoplays silently in a loop using `<video autoplay muted loop width="100%">`.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Audio](19-audio.md) | [Next: Iframes →](21-iframes.md)
