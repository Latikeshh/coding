# Positioning, `z-index` & Stacking Context

> 🟢 Beginner

## 📖 Definition

The `position` property controls how an element is placed in the document flow. The `z-index` property manages the vertical stacking order (front-to-back overlap) of positioned elements within a **Stacking Context**.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** `position` places elements (`relative`, `absolute`, `fixed`, `sticky`). `z-index` controls front-to-back stacking on overlapping elements.
> - **Hindi:** `position` प्रॉपर्टी एलीमेंट्स को खिसकाने के काम आती है। ओवरलैप होने वाले एलीमेंट्स में कौन ऊपर दिखेगा, यह `z-index` से तय होता है।
> - **Marathi:** `position` मुळे एलिमेंट हलवता येतो. ओव्हरलॅप झालेल्या एलिमेंट्समध्ये `z-index` मुळे कोणता एलिमेंट वर दिसेल ते ठरते.
> - **Hinglish:** `position` property (`relative`, `absolute`, `fixed`, `sticky`) se elements place hote hain. Overlapping elements ki layering `z-index` se control hoti hai.

## Position Values

- `static` → Default position in normal document flow. `z-index` has no effect.
- `relative` → Shifted relative to its normal position without disturbing neighboring elements.
- `absolute` → Removed from document flow; positioned relative to nearest positioned ancestor.
- `fixed` → Removed from document flow; stays fixed relative to the viewport during scrolling.
- `sticky` → Toggles between `relative` and `fixed` based on scroll position.

## 📝 Syntax & `z-index`

```css
.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10; /* Stacked on top of elements with lower z-index */
}

.sticky-header {
  position: sticky;
  top: 0;
  z-index: 100; /* Stays above body content while scrolling */
}
```

## 🔍 Stacking Context

A **Stacking Context** is a 3D conceptual layer in CSS. An element creates a new Stacking Context if it has:
1. `position: absolute` or `relative` with a `z-index` other than `auto`.
2. `position: fixed` or `sticky`.
3. `opacity` less than `1`.
4. `transform` or `filter` properties applied.

*Note: An element with `z-index: 9999` inside a lower parent stacking context cannot appear above an element in a higher parent stacking context!*

## ⚠️ Common Mistakes

- Applying `z-index` to a `position: static` element (`z-index` requires a positioned element).
- Expecting a child with high `z-index` to break out of a lower parent stacking context.

## 🧪 Try It Yourself

Create two overlapping `absolute` positioned boxes and change their `z-index` values to switch which box appears in front.

## 🎯 Mini Challenge

Build a sticky navigation bar with `position: sticky; top: 0; z-index: 1000;` that stays on top of page content during scroll.

## 🧭 Navigation

[← Previous](17-display.md) | [CSS Home](00-README.md) | [Next →](19-float-and-clear.md)
