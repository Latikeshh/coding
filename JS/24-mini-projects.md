# Comprehensive JavaScript Mini Projects

> 🔴 Advanced

## 📖 Definition

Apply closures, DOM manipulation, event delegation, `async`/`await`, `localStorage`, and ES6 Modules to build complete interactive web applications.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Practice JavaScript by building interactive applications: Todo App with `localStorage` and Weather API Dashboard.
> - **Hindi:** सीखे गए जावास्क्रिप्ट कॉन्सेप्ट्स (DOM, `localStorage`, `fetch`) की प्रेक्टिस के लिए पूरे मिनी प्रोजेक्ट्स बनाएं।
> - **Marathi:** प्रॅक्टिससाठी `localStorage` वापरून टू-डू ॲप आणि हवामानाचा अंदाज दाखवणारे डैशबोर्ड ॲप बनवा.
> - **Hinglish:** Real-world DOM manipulation, API fetching, aur persistent `localStorage` combine karke interactive mini apps build karo.

## 🏗️ Project: Todo App with LocalStorage

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JS Todo Master</title>
</head>
<body>
  <h2>Task List</h2>
  <form id="todoForm">
    <input type="text" id="taskInput" placeholder="New task..." required>
    <button type="submit">Add Task</button>
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
          <span>${task.text}</span>
          <button class="delete-btn">Delete</button>
        </li>
      `).join('');
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      tasks.push({ text: input.value });
      input.value = "";
      saveAndRender();
    });

    // Event delegation
    list.addEventListener("click", (e) => {
      if (e.target.classList.contains("delete-btn")) {
        const index = e.target.closest("li").dataset.index;
        tasks.splice(index, 1);
        saveAndRender();
      }
    });

    saveAndRender();
  </script>
</body>
</html>
```

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: JS Modules](23-modules.md)
