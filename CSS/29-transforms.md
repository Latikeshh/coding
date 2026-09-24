# CSS Transforms (2D & 3D)

> 🟢 Beginner

## 📖 Definition

The `transform` property rotates, scales, translates (moves), or skews elements in 2D or 3D space without affecting surrounding layout flow.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `transform` modifies elements (`translate`, `scale`, `rotate`) efficiently using GPU acceleration without disturbing document flow.
> - **Hindi:** `transform` से एलीमेंट्स को खिसकाया (`translate`), बड़ा/छोटा (`scale`), या घुमाया (`rotate`) जा सकता है।
> - **Marathi:** `transform` द्वारे एलिमेंट फिरवता किंवा मोठा-लहान करता येतो.
> - **Hinglish:** Visual shifts aur animations ke liye `transform` (`translate`, `scale`, `rotate`) best hai kyunki ye layout flow touch nahi karta.

## 📝 Syntax

```css
.card:hover {
  transform: translateY(-5px) scale(1.02); /* Lifts up & slightly scales */
}

.icon-spin {
  transform: rotate(45deg);
}
```

## 🧭 Navigation

[← Previous](28-transitions.md) | [CSS Home](00-README.md) | [Next →](30-animations.md)
