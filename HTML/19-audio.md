# Audio (`<audio>`)

> 🟡 Intermediate

## 📖 Definition

The **`<audio>`** element embeds playable sound files (MP3, OGG, or WAV audio tracks, podcasts, or music) directly into a webpage without requiring external plugins.

## 🌍 Multilingual Summary

### English
Embed audio files using `<audio controls>`. Provide multiple `<source>` tags for browser format support, and include written transcripts for accessibility.

### Hindi
Web page par audio files play karne ke liye `<audio controls>` tag use hota hai. Multiple browser compatibility ke liye `<source>` tags dya aur accessibility ke liye written transcript include karein.

### Marathi
Web page var audio files play karanyasathi `<audio controls>` tag vapartat. Alag-alag browser sathi `<source>` tags vapra ani accessibility sathi transcript dya.

## 🤔 Why Do We Use It?

`<audio>` enables native audio playback in browsers with built-in controls (Play/Pause, volume, timeline scrubbing), supporting educational podcasts, pronunciation guides, music previews, and audiobooks.

## 📐 Key Attributes of `<audio>`

- **`controls`:** Displays standard browser audio playback controls (Play/Pause button, timeline scrubber, time counter, and volume slider).
- **`autoplay`:** Automatically starts playing audio when the page loads (**Note:** Modern browsers block unmuted autoplay).
- **`muted`:** Silences audio output by default.
- **`loop`:** Restarts audio playback automatically when finished.
- **`preload="auto|metadata|none"`:** Hints to the browser how much audio data to buffer before the user presses play.

## 🧱 Multiple Audio Sources & Fallbacks

Different browsers support different audio container formats. Providing multiple `<source>` tags ensures universal browser compatibility:

```html
<audio controls preload="metadata">
  <source src="media/podcast-ep1.mp3" type="audio/mpeg">
  <source src="media/podcast-ep1.ogg" type="audio/ogg">
  <source src="media/podcast-ep1.wav" type="audio/wav">
  Your browser does not support the audio element.
</audio>
```

## ♿ Accessibility & Transcripts

Users who are deaf or hard of hearing cannot hear audio tracks. Always provide a written text transcript below any instructional or informational audio player:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Audio Lesson with Transcript</title>
</head>
<body>

  <h1>Lesson 1: Web Fundamentals Pronunciation</h1>

  <figure>
    <figcaption>Listen to the audio lesson below:</figcaption>
    <audio controls preload="metadata">
      <source src="media/pronunciation.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
    </audio>
  </figure>

  <section>
    <h2>Audio Transcript</h2>
    <p><em>"Welcome to the web development audio guide. HTML provides structure, while CSS controls visual appearance."</em></p>
  </section>

</body>
</html>
```

## 👀 Output / What You Will See

A native audio player bar featuring Play/Pause controls, elapsed time display, timeline scrubber, and volume slider, accompanied by a readable text transcript below.

## 🧪 Try It Yourself

1. Create an `<audio controls>` player element.
2. Add `preload="metadata"` and two `<source>` tags for MP3 and OGG formats.
3. Write a text transcript paragraph below the player widget.

## ⚠️ Common Mistakes

- **Forgetting the `controls` attribute:** Writing `<audio src="music.mp3"></audio>` renders an invisible player widget that users cannot control!
- **Relying on `autoplay` for unmuted audio:** Modern browsers automatically block unmuted audio autoplay to protect users from unexpected loud noise.

## 🌐 Real-World Usage

Podcast platforms, language learning apps, music streaming services, and online educational courses use `<audio>` with written transcripts for accessible audio delivery.

## 🔗 Related Topics

- [Video](20-video.md)
- [Iframes](21-iframes.md)

## 💡 Remember

- Always include the `controls` attribute.
- Provide multiple `<source>` tags (MP3, OGG).
- Always include a written text transcript for accessibility.

## 🧭 Navigation

[← Previous: Entities](18-html-entities.md) | [HTML Home](00-README.md) | [Next: Video →](20-video.md)
