---
layout: default
title: "24 mini projects"
---

# 🚀 Capstone JavaScript Mini Projects

> 🔴 Advanced

## 📖 Definition

The best way to consolidate your JavaScript knowledge is by building real-world, interactive web applications. These capstone mini projects combine variables, functions, DOM selection, event delegation, `async`/`await`, Fetch API, ES6 modules, and `localStorage` persistence.

---

## 🌐 Multilingual Introduction

### English
In this capstone lesson, you will build 4 production-grade mini projects from scratch. These projects demonstrate real-world state management, event delegation, client-side data persistence, and asynchronous API integration.

### Hindi (Roman Script)
Ab tak seekhe gaye sabhi JavaScript concepts (Variables, DOM Manipulation, Event Listeners, Async/Await, Web Storage) ko combine karke 4 complete interactive projects banayein. Yeh projects aapki portfolio aur job interviews ke liye tayyar karenge.

### Marathi (Roman Script)
Aapn shiklele sarv JavaScript concepts (DOM, Events, Async API, LocalStorage) ektra karun 4 practical interactive apps banva. He projects tumcha portfolio tayar karnyasathi मदत kartil.

### Hinglish
JavaScript ki real power practical applications mein dikhti hai. Is lesson mein hum To-Do App with LocalStorage, Live Weather Dashboard, Expense Tracker, aur Digital Clock with Stopwatch banayenge.

---

## 🏗️ Project 1: Interactive Task Manager with LocalStorage & Event Delegation

An interactive task manager featuring state persistence in `localStorage`, status filtering (All, Active, Completed), and event delegation.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JS Task Master Pro</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 550px; margin: 40px auto; background: #0f172a; color: #f8fafc; }
    h2 { color: #38bdf8; }
    .input-group { display: flex; gap: 8px; margin-bottom: 20px; }
    input[type="text"] { flex: 1; padding: 10px; border-radius: 6px; border: 1px solid #334155; background: #1e293b; color: #fff; }
    button { padding: 10px 16px; background: #2563eb; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; }
    ul { list-style: none; padding: 0; }
    li { display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #1e293b; border-radius: 6px; margin-bottom: 8px; border: 1px solid #334155; }
    .completed span { text-decoration: line-through; opacity: 0.5; }
    .delete-btn { background: #ef4444; padding: 6px 12px; }
    .toggle-btn { background: #10b981; padding: 6px 12px; margin-right: 4px; }
  </style>
</head>
<body>
  <h2>📝 JavaScript Task Master</h2>
  <div class="input-group">
    <input type="text" id="taskInput" placeholder="Enter new task description..." required>
    <button id="addBtn">Add Task</button>
  </div>

  <ul id="taskList"></ul>

  <script>
    const taskInput = document.querySelector("#taskInput");
    const addBtn = document.querySelector("#addBtn");
    const taskList = document.querySelector("#taskList");

    // Load persistent state from LocalStorage
    let tasks = JSON.parse(localStorage.getItem("app_tasks_v2")) || [
      { id: 1, text: "Master JavaScript ES6+", done: true },
      { id: 2, text: "Build Capstone Mini Projects", done: false }
    ];

    function saveAndRender() {
      localStorage.setItem("app_tasks_v2", JSON.stringify(tasks));
      
      if (tasks.length === 0) {
        taskList.innerHTML = `<li style="justify-content:center; color:#64748b;">No tasks found. Add one above!</li>`;
        return;
      }

      taskList.innerHTML = tasks.map((task) => `
        <li class="${task.done ? 'completed' : ''}" data-id="${task.id}">
          <span>${escapeHtml(task.text)}</span>
          <div>
            <button class="toggle-btn">${task.done ? 'Undo' : 'Complete'}</button>
            <button class="delete-btn">Delete</button>
          </div>
        </li>
      `).join('');
    }

    function escapeHtml(str) {
      return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }

    addBtn.addEventListener("click", () => {
      const val = taskInput.value.trim();
      if (!val) return;
      tasks.push({ id: Date.now(), text: val, done: false });
      taskInput.value = "";
      saveAndRender();
    });

    // Event Delegation on parent UL container
    taskList.addEventListener("click", (e) => {
      const li = e.target.closest("li");
      if (!li || !li.dataset.id) return;
      const taskId = Number(li.dataset.id);

      if (e.target.classList.contains("delete-btn")) {
        tasks = tasks.filter(t => t.id !== taskId);
        saveAndRender();
      } else if (e.target.classList.contains("toggle-btn")) {
        tasks = tasks.map(t => t.id === taskId ? { ...t, done: !t.done } : t);
        saveAndRender();
      }
    });

    saveAndRender();
  </script>
</body>
</html>
```

---

## 🏗️ Project 2: Asynchronous Weather Dashboard (Fetch API)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Async Weather Dashboard</title>
  <style>
    body { font-family: sans-serif; max-width: 450px; margin: 40px auto; background: #020617; color: #f1f5f9; text-align: center; }
    .card { background: #0f172a; padding: 24px; border-radius: 12px; border: 1px solid #1e293b; margin-top: 16px; }
    .temp { font-size: 3rem; font-weight: bold; color: #38bdf8; margin: 12px 0; }
  </style>
</head>
<body>
  <h2>🌤️ Weather Finder</h2>
  <input type="text" id="cityInput" placeholder="Enter city name (e.g. London, Mumbai)..." style="padding:10px; width:60%;">
  <button id="searchBtn" style="padding:10px 16px; background:#0284c7; color:#fff; border:none; border-radius:6px; cursor:pointer;">Search</button>

  <div id="weatherCard" class="card" style="display:none;"></div>

  <script>
    const cityInput = document.querySelector("#cityInput");
    const searchBtn = document.querySelector("#searchBtn");
    const weatherCard = document.querySelector("#weatherCard");

    async function getWeather(city) {
      weatherCard.style.display = "block";
      weatherCard.innerHTML = `<p style="color:#94a3b8;">Fetching weather data...</p>`;

      try {
        // Using Open-Meteo public free weather API (No API Key required)
        // 1. Geocoding search
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);
        const geoData = await geoRes.json();

        if (!geoData.results || geoData.results.length === 0) {
          throw new Error("City not found. Please try another name.");
        }

        const { latitude, longitude, name, country } = geoData.results[0];

        // 2. Fetch current weather
        const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const weatherData = await weatherRes.json();
        const { temperature, windspeed } = weatherData.current_weather;

        weatherCard.innerHTML = `
          <h3>${name}, ${country}</h3>
          <div class="temp">${temperature}°C</div>
          <p>Wind Speed: <strong>${windspeed} km/h</strong></p>
        `;
      } catch (err) {
        weatherCard.innerHTML = `<p style="color:#ef4444;">⚠️ Error: ${err.message}</p>`;
      }
    }

    searchBtn.addEventListener("click", () => {
      const city = cityInput.value.trim();
      if (city) getWeather(city);
    });
  </script>
</body>
</html>
```

---

## 🏗️ Project 3: Real-Time Digital Clock & Stopwatch

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Live Clock & Stopwatch</title>
  <style>
    body { font-family: monospace; max-width: 450px; margin: 40px auto; background: #0f172a; color: #f8fafc; text-align: center; }
    .clock-display { font-size: 3rem; color: #38bdf8; background: #1e293b; padding: 20px; border-radius: 10px; margin-bottom: 20px; }
    .stopwatch { background: #1e293b; padding: 20px; border-radius: 10px; }
    .btn { padding: 8px 16px; margin: 4px; border: none; border-radius: 4px; font-weight: bold; cursor: pointer; }
    .start { background: #10b981; color: #fff; }
    .stop { background: #ef4444; color: #fff; }
    .reset { background: #64748b; color: #fff; }
  </style>
</head>
<body>
  <h2>⏰ Digital Clock & Stopwatch</h2>
  <div class="clock-display" id="clock">00:00:00</div>

  <div class="stopwatch">
    <h3>Stopwatch: <span id="timer" style="color:#f59e0b;">00:00.00</span></h3>
    <button class="btn start" id="startBtn">Start</button>
    <button class="btn stop" id="stopBtn">Stop</button>
    <button class="btn reset" id="resetBtn">Reset</button>
  </div>

  <script>
    // Live Digital Clock
    function updateClock() {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      const s = String(now.getSeconds()).padStart(2, '0');
      document.querySelector("#clock").textContent = `${h}:${m}:${s}`;
    }
    setInterval(updateClock, 1000);
    updateClock();

    // Stopwatch Timer
    let timerInterval = null;
    let elapsedMs = 0;

    const timerDisplay = document.querySelector("#timer");
    const startBtn = document.querySelector("#startBtn");
    const stopBtn = document.querySelector("#stopBtn");
    const resetBtn = document.querySelector("#resetBtn");

    function renderTimer() {
      const totalSec = Math.floor(elapsedMs / 1000);
      const m = String(Math.floor(totalSec / 60)).padStart(2, '0');
      const s = String(totalSec % 60).padStart(2, '0');
      const ms = String(Math.floor((elapsedMs % 1000) / 10)).padStart(2, '0');
      timerDisplay.textContent = `${m}:${s}.${ms}`;
    }

    startBtn.addEventListener("click", () => {
      if (timerInterval) return;
      const startTime = Date.now() - elapsedMs;
      timerInterval = setInterval(() => {
        elapsedMs = Date.now() - startTime;
        renderTimer();
      }, 10);
    });

    stopBtn.addEventListener("click", () => {
      clearInterval(timerInterval);
      timerInterval = null;
    });

    resetBtn.addEventListener("click", () => {
      clearInterval(timerInterval);
      timerInterval = null;
      elapsedMs = 0;
      renderTimer();
    });
  </script>
</body>
</html>
```

---

## 🧪 Next Steps & Portfolio Advice

1. Clone or fork these HTML/JS templates into local `.html` files.
2. Customize CSS styles using Tailwind CSS or custom flexbox layout rules.
3. Deploy your project repositories to **GitHub Pages** to showcase live working web apps on your developer resume!

---

## 🔗 Related Topics

- [DOM Selection & Manipulation](19-dom-manipulation.html)
- [Asynchronous JS, Promises & Async/Await](15-promises-and-async-await.html)
- [Web Storage (localStorage & sessionStorage)](21-web-storage.html)

---

## 🧭 Navigation

[← JS Home](./) | [← Previous: JS Modules](23-modules.html) | [Next: JavaScript Debugging →](25-javascript-debugging.html)
