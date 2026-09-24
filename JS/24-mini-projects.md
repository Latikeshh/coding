# Comprehensive JavaScript Mini Projects

> 🔴 Advanced

## 📖 Definition

Apply DOM selection, event delegation, closures, `async`/`await`, Fetch API, and `localStorage` to build complete, functional, interactive web applications.

## 🇮🇳 Hindi

Ab tak seekhe gaye sabhi JavaScript concepts (Variables, Functions, DOM, Events, Async/Await, Web Storage) ko combine karke interactive real-world projects banayein.

## 🚩 Marathi

Aapn shiklele sarv JS concepts ektra karun practical interactive apps banva.

---

## 🏗️ Project 1: Interactive Todo App with LocalStorage

### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript Task Master</title>
  <style>
    body { font-family: sans-serif; max-width: 500px; margin: 30px auto; }
    ul { list-style: none; padding: 0; }
    li { display: flex; justify-content: space-between; margin-bottom: 10px; padding: 8px; border: 1px solid #ccc; }
    .completed { text-decoration: line-through; opacity: 0.6; }
  </style>
</head>
<body>
  <h2>My Task Manager</h2>
  <form id="taskForm">
    <input type="text" id="taskInput" placeholder="Enter new task..." required>
    <button type="submit">Add Task</button>
  </form>

  <ul id="taskList"></ul>

  <script>
    const form = document.querySelector("#taskForm");
    const input = document.querySelector("#taskInput");
    const list = document.querySelector("#taskList");

    // Load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem("app_tasks")) || [];

    function saveAndRender() {
      localStorage.setItem("app_tasks", JSON.stringify(tasks));
      list.innerHTML = tasks.map((task, index) => `
        <li class="${task.done ? 'completed' : ''}" data-index="${index}">
          <span>${task.text}</span>
          <div>
            <button class="toggle-btn">${task.done ? 'Undo' : 'Done'}</button>
            <button class="delete-btn">Delete</button>
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

    // Event Delegation for Toggle and Delete
    list.addEventListener("click", (e) => {
      const index = e.target.closest("li").dataset.index;

      if (e.target.classList.contains("delete-btn")) {
        tasks.splice(index, 1);
        saveAndRender();
      } else if (e.target.classList.contains("toggle-btn")) {
        tasks[index].done = !tasks[index].done;
        saveAndRender();
      }
    });

    saveAndRender();
  </script>
</body>
</html>
```

---

## 🏗️ Project 2: Live Digital Clock & Stopwatch

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Live Digital Clock</title>
</head>
<body>
  <div style="font-family: monospace; font-size: 2rem;" id="clock">00:00:00</div>

  <script>
    function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      document.querySelector("#clock").textContent = `${hours}:${minutes}:${seconds}`;
    }

    // Update every second
    setInterval(updateClock, 1000);
    updateClock();
  </script>
</body>
</html>
```

---

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: JS Modules](23-modules.md) | [Next: JavaScript Debugging →](25-javascript-debugging.md)
