# Comprehensive JavaScript Mini Projects

> 🔴 Advanced

Apply all your JS knowledge—closures, DOM, event delegation, `async`/`await`, `localStorage`, and OOP—to build real applications.

---

## 🏗️ Project 1: Complete Todo App with LocalStorage

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JS Todo Master</title>
  <style>
    body { font-family: sans-serif; max-width: 400px; margin: 40px auto; }
    ul { list-style: none; padding: 0; }
    li { display: flex; justify-content: space-between; padding: 8px; border-bottom: 1px solid #ccc; }
    .completed { text-decoration: line-through; color: gray; }
  </style>
</head>
<body>
  <h2>My Tasks</h2>
  <form id="todoForm">
    <input type="text" id="taskInput" placeholder="New task..." required>
    <button type="submit">Add</button>
  </form>
  <ul id="taskList"></ul>

  <script>
    const form = document.querySelector("#todoForm");
    const input = document.querySelector("#taskInput");
    const list = document.querySelector("#taskList");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveAndRender() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
      list.innerHTML = tasks.map((task, index) => `
        <li data-index="${index}">
          <span class="${task.done ? 'completed' : ''}">${task.text}</span>
          <div>
            <button class="toggle-btn">✓</button>
            <button class="delete-btn">✗</button>
          </div>
        </li>
      `).join('');
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      tasks.push({ text: input.value, done: false });
      input.value = "";
      saveAndRender();
    });

    // Event delegation
    list.addEventListener("click", (e) => {
      const index = e.target.closest("li").dataset.index;
      if (e.target.classList.contains("delete-btn")) {
        tasks.splice(index, 1);
      } else if (e.target.classList.contains("toggle-btn")) {
        tasks[index].done = !tasks[index].done;
      }
      saveAndRender();
    });

    saveAndRender();
  </script>
</body>
</html>
```

---

## 🏗️ Project 2: Weather Dashboard using Fetch API

```javascript
async function getWeather(city) {
  try {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true`);
    const data = await res.json();
    console.log(`Current Temp: ${data.current_weather.temperature}°C`);
    console.log(`Windspeed: ${data.current_weather.windspeed} km/h`);
  } catch (err) {
    console.error("Failed to load weather:", err);
  }
}

getWeather();
```

---

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: JS Modules](23-modules.md)
