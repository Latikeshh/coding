# Audio (`<audio>`)

> 🟡 Intermediate

## 📖 Definition

The **`<audio>`** element embeds playable audio files (such as MP3, OGG, or WAV sound files or podcasts) directly into a webpage without needing external browser plugins.

## 🌐 Multilingual Summary / संक्षेप / स्पष्टीकरण

### English
Embed sound files using `<audio controls>`. Provide multiple `<source>` tags for browser format support, and include written transcripts for accessibility.

### Hindi
पेज पर ऑडियो या पॉडकास्ट प्ले करने के लिए `<audio controls>` का यूज़ करें। एक्सेसिबिलिटी के लिए ऑडियो के नीचे टेक्स्ट ट्रांसक्रिप्ट लिखना न भूलें।

### Marathi
वेब पेजवर गाणी किंवा आवाज प्ले करण्यासाठी `<audio controls>` टॅग वापरतात. वेगवेगळ्या ब्राउझरसाठी `<source>` टॅग वापरा.

### Hinglish
Web page par audio files play karne ke liye `<audio controls>` tag use hota hai. Accessibilty ke liye written transcript dedicated `<p>` mein do.

## 📝 Key Attributes of `<audio>`

- **`controls`:** Displays standard browser audio controls (Play/Pause button, seek scrubber bar, elapsed time display, and volume slider).
- **`autoplay`:** Attempts to start playing audio automatically when page loads (**Note:** Modern browsers block audio autoplay unless muted).
- **`muted`:** Silences the audio output by default.
- **`loop`:** Automatically restarts audio playback when finished.
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

Users who are deaf or hard of hearing cannot hear audio content. Always provide a written text transcript below any informational or instructional audio recording:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Audio Lesson with Transcript</title>
</head>
<body>

  <h1>Lesson 1: Pronunciation Guide</h1>

  <figure>
    <figcaption>Listen to the English audio pronunciation:</figcaption>
    <audio controls>
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

## ⚠️ Common Mistakes

- **Forgetting `controls` attribute:** Writing `<audio src="music.mp3"></audio>` renders an invisible audio player widget that users cannot play or control!
- **Relying on `autoplay` for unmuted audio:** Modern browsers automatically block unmuted audio autoplay to protect users from unexpected loud noise.

## 🧪 Try It Yourself

Create an audio player element featuring:
1. `controls` and `preload="metadata"` attributes.
2. Two `<source>` tags for MP3 and OGG formats.
3. A transcript paragraph placed directly below the player.

## 🎯 Mini Challenge

Build a podcast episode showcase component with an `<h1>` episode title, a thumbnail image inside `<figure>`, an `<audio controls>` widget, and a full episode summary transcript.

## 🧭 Navigation

[← First: HTML Home](00-README.md) | [← Previous: Entities](18-html-entities.md) | [Next: Video →](20-video.md)
