# Video

> 🟡 Intermediate

## 📖 Definition

The `<video>` element adds a video player to a web page.

## 🤔 Why Do We Use It?

Videos are useful for tutorials, product demonstrations, and event recordings.

## 🧠 Simple Explanation

It is like placing a small television screen on your page with controls for the visitor.

## 📝 Syntax

```html
<video controls width="480">
  <source src="planting.mp4" type="video/mp4">
  Your browser does not support video.
</video>
```

Add captions when possible so more people can understand the video.

## 💡 Practical Example

A bicycle-repair page could show a short video of fixing a flat tyre. Add a short paragraph below it that explains what viewers will learn before they press play.

## ✅ Remember

Video files can be large. Keep clips focused, use a sensible width, and give visitors controls instead of forcing the video to play.

- `<video>` creates a video player.
- `controls` lets visitors play and pause.
- Captions make spoken video more accessible.

## 💻 Example

```html
<video controls width="480">
  <source src="plant-care.mp4" type="video/mp4">
  Your browser does not support video.
</video>
<p>Video: How to water a houseplant.</p>
```

## 👀 Output

A video player up to 480 pixels wide appears with play and volume controls.

## 🔍 How It Works

The source file is loaded into the video player. The paragraph gives visitors a quick text description of what the video teaches.

## ⚠️ Common Mistakes

- Do not autoplay a video with sound.
- Do not use a huge video file when a short, focused clip is enough.

## 🧪 Try It Yourself

Write the HTML for a video tutorial and add a one-sentence description below it.

## 🎯 Mini Challenge

Research how to add a `<track>` element for captions, then add one to a practice video.

## 🧭 Navigation

[← First: HTML Home](README.md) | [← Previous: Audio](19-audio.md) | [Next: Iframes →](21-iframes.md)
