# Audio

> 🟡 Intermediate

## 📖 Definition

The `<audio>` element adds playable sound, such as music or a spoken lesson, to a page.

## 🤔 Why Do We Use It?

Audio can make a language lesson, podcast page, or product demonstration more useful.

## 🧠 Simple Explanation

It works like a small music player placed inside your web page.

## 📝 Syntax

```html
<audio controls>
  <source src="welcome.mp3" type="audio/mpeg">
  Your browser does not support audio.
</audio>
```

The `controls` attribute shows play, pause, and volume controls.

## 💡 Practical Example

For a pronunciation lesson, add a short audio clip after each new word. Visitors can press play only when they are ready, rather than being surprised by sound starting automatically.

## ✅ Remember

Provide a written transcript when audio contains important spoken information. A transcript helps people who cannot hear the recording or prefer to read.

- `<audio>` creates an audio player.
- `controls` gives visitors play and volume controls.
- `<source>` names the audio file and its type.

## 💻 Example

```html
<audio controls>
  <source src="pronunciation.mp3" type="audio/mpeg">
  Your browser does not support audio.
</audio>
<p>Transcript: Welcome to our English lesson.</p>
```

## 👀 Output

An audio player with controls appears, followed by a readable transcript.

## 🔍 How It Works

The browser loads `pronunciation.mp3`. If it cannot play audio, it displays the fallback sentence inside the `<audio>` element.

## ⚠️ Common Mistakes

- Do not autoplay sound unexpectedly.
- Do not forget a transcript when spoken content is important.

## 🧪 Try It Yourself

Plan an audio player for a language lesson and write a one-sentence transcript below it.

## 🎯 Mini Challenge

Add two `<source>` files with different formats so the browser can choose one it supports.

## 🧭 Navigation

[← First: HTML Home](README.md) | [← Previous: Entities](18-html-entities.md) | [Next: Video →](20-video.md)
