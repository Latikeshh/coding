# JavaScript Mini Projects

> 🟡 Intermediate

Build small, practical projects to reinforce your understanding of variables, functions, events, and DOM manipulation.

---

## 🏗️ Project 1: Counter Application

### HTML (`index.html`)
```html
<div class="counter-box">
  <h1 id="count">0</h1>
  <button id="decBtn">-</button>
  <button id="resetBtn">Reset</button>
  <button id="incBtn">+</button>
</div>
<script src="counter.js"></script>
```

### JavaScript (`counter.js`)
```javascript
let score = 0;

const countEl = document.getElementById("count");
const incBtn = document.getElementById("incBtn");
const decBtn = document.getElementById("decBtn");
const resetBtn = document.getElementById("resetBtn");

incBtn.addEventListener("click", () => {
  score++;
  countEl.textContent = score;
});

decBtn.addEventListener("click", () => {
  score--;
  countEl.textContent = score;
});

resetBtn.addEventListener("click", () => {
  score = 0;
  countEl.textContent = score;
});
```

---

## 🏗️ Project 2: Simple Light/Dark Theme Switcher

```html
<button id="themeToggle">Toggle Dark Mode</button>

<script>
  const toggleBtn = document.getElementById("themeToggle");
  
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
</script>
```

---

## 🧪 Practice Ideas

1. **Digital Clock:** Use `new Date()` and `setInterval()` to show a live digital clock.
2. **Tip Calculator:** Calculate total bill including tip percentage based on user input.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: DOM Manipulation](11-dom-manipulation.md)
