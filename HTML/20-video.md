# Video (`<video>`)

> 🟡 Intermediate

## 📖 Definition

The **`<video>`** element embeds playable video files (such as MP4 or WebM videos) directly into a webpage with native play, pause, volume, seek timeline, and fullscreen controls.

## 🌍 Multilingual Summary

### English
Embed videos using `<video controls width="640">`. Use `<track>` elements for subtitles and captions, and specify `poster` for a custom thumbnail image.

### Hindi
Web page par video render karne ke liye `<video controls>` tag use karein. Video thumbnail ke liye `poster` attribute aur captions ke liye `<track>` tag use hota hai.

### Marathi
Web page var video dakhavnyasathi `<video controls>` tag vapra. Thumbnail sathi `poster` attribute ani captions sathi `<track>` tag vaprtat.

## 🤔 Why Do We Use It?

`<video>` provides native, plugin-free video playback across desktop and mobile browsers. It supports custom poster thumbnails, subtitle captions for accessibility, and responsive sizing.

## 📐 Key Attributes of `<video>`

- **`controls`:** Displays native browser playback controls (Play/Pause, scrub timeline, volume slider, fullscreen toggle).
- **`width` & `height`:** Defines player container dimensions in pixels.
- **`poster="thumbnail.jpg"`:** Displays a preview thumbnail image before the user presses play.
- **`autoplay`:** Automatically starts playing video on page load (**Requires `muted` in modern browsers**).
- **`muted`:** Silences the video audio track by default.
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

## 💻 Code Example

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

## 👀 Output / What You Will See

A responsive video player displaying a custom thumbnail image (`poster`) with native playback controls, volume slider, fullscreen toggle, and selectable English captions.

## 🧪 Try It Yourself

1. Create a video element with `controls`, `width="480"`, and a custom `poster` image.
2. Add two `<source>` tags for MP4 and WebM formats.
3. Add a `<track>` element for WebVTT subtitle captions.

## ⚠️ Common Mistakes

- **Omitting `muted` on `autoplay` videos:** Writing `<video autoplay>` without `muted` causes modern browsers to block video playback completely.
- **Forgetting explicit `width` and `height`:** Causes layout jumping while video metadata downloads.

## 🌐 Real-World Usage

E-learning portals, news websites, product landing pages, and portfolio sites use `<video>` with poster thumbnails and captions for accessible video streaming.

## 🔗 Related Topics

- [Audio](19-audio.md)
- [Iframes](21-iframes.md)

## 💡 Remember

- Always include `controls` attribute.
- Use `poster` for preview thumbnail images.
- Autoplay requires `muted` attribute in modern browsers.
- Use `<track>` for WebVTT subtitle captions.

## 🧭 Navigation

[← Previous: Audio](19-audio.md) | [HTML Home](00-README.md) | [Next: Iframes →](21-iframes.md)
