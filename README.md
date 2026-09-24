# 💻 Coding — Practical, Accurate & Multilingual Programming Resource

> **A comprehensive, open-source educational resource designed to take learners from absolute beginners to software engineering proficiency across Web Development and Systems Programming.**

[![Standard ISO C11](https://img.shields.io/badge/C-ISO_C11-blue.svg)](C/00-README.md)
[![Standard C++20](https://img.shields.io/badge/C++-ISO_C++17/20-blue.svg)](CPP/00-README.md)
[![ECMAScript ES6+](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](JS/00-README.md)
[![HTML5 & CSS3](https://img.shields.io/badge/Web-HTML5%20%7C%20CSS3-orange.svg)](HTML/00-README.md)
[![Multilingual](https://img.shields.io/badge/Languages-EN%20%7C%20HI%20%7C%20MR%20%7C%20Hinglish-green.svg)](#-multilingual-pedagogy-and-accessibility)

Welcome to **Coding** — a structured, technically rigorous, and beginner-first repository created for self-taught developers, computer science students, educators, and software engineers.

This repository eliminates artificial complexity, outdated practices, and superficial tutorials. Every lesson combines formal definitions, 4-language explanations, runnable production-ready code examples, common pitfall warnings, real-world usage contexts, hands-on exercises, and capstone mini projects.

---

## 📂 Repository Architecture & Structure

The repository is modularly organized into 5 primary technology tracks comprising **147+ comprehensive lessons**:

```text
coding/
├── 🌐 HTML/               # 32 Lessons: HTML5, Semantic Elements, Forms, Media, Accessibility & SEO
│   ├── 00-README.md       # HTML Master Syllabus & Learning Path
│   ├── 01-setup-vs-code.md
│   └── ... [02 to 32]
├── 🎨 CSS/                # 43 Lessons: Selectors, Box Model, Flexbox, Grid, Animations & Responsive Design
│   ├── 00-README.md       # CSS Master Syllabus & Learning Path
│   ├── 01-setup-css.md
│   └── ... [02 to 43]
├── ⚙️ C/                  # 23 Lessons: ISO C11, Pointers, Dynamic Memory (malloc/free), Structs & File I/O
│   ├── 00-README.md       # C Master Syllabus & Systems Learning Path
│   ├── 01-setup-c.md
│   └── ... [02 to 23]
├── ⚡ JS/                 # 25 Lessons: Modern ES6+, Scope, Closures, Promises, Async/Await, DOM & Storage
│   ├── 00-README.md       # JavaScript Master Syllabus & Web API Path
│   ├── 01-setup-js.md
│   └── ... [02 to 25]
├── 🚀 CPP/                # 23 Lessons: ISO C++17/20, OOP, RAII, Smart Pointers, STL, Templates & Move Semantics
│   ├── 00-README.md       # C++ Master Syllabus & Systems OOP Path
│   ├── 01-setup-cpp.md
│   └── ... [02 to 23]
└── 📄 README.md           # Master Repository Documentation
```

---

## 📚 Curriculum Breakdown & Learning Tracks

| Track | Total Lessons | Level Range | Key Concepts Covered | Quick Link |
|---|---|---|---|---|
| 🌐 **HTML** | 32 Lessons | Beginner → Intermediate | Document Structure, Semantic HTML5, Forms & Validations, Audio/Video, Accessibility (ARIA), Meta Tags, Open Graph & SEO | [Explore HTML](HTML/00-README.md) |
| 🎨 **CSS** | 43 Lessons | Beginner → Advanced | Specificity, Box Model, Flexbox, CSS Grid, Media Queries, Transitions, Keyframe Animations, Custom Properties (Variables), Dark Mode & Architecture | [Explore CSS](CSS/00-README.md) |
| ⚙️ **C** | 23 Lessons | Beginner → Systems | ISO C11, Input/Output (`fgets`), Pointer Arithmetic, Dynamic Memory Allocation (`malloc`/`free`), Structs, Unions, File I/O, Header Guards & Persistent Binary Database Engine | [Explore C](C/00-README.md) |
| ⚡ **JavaScript** | 25 Lessons | Beginner → Advanced | Modern ES6+, Scoping & Hoisting, Closures, Promises, `async`/`await`, Fetch API, Prototypes, ES6 Classes, DOM Selection/Events & Web Storage | [Explore JS](JS/00-README.md) |
| 🚀 **C++** | 23 Lessons | Beginner → Advanced Systems | ISO C++17/20, References, Modern OOP, Operator Overloading, Smart Pointers (`unique_ptr`/`shared_ptr`), STL Containers & Algorithms, Templates, Exceptions, Lambda Expressions & Move Semantics | [Explore C++](CPP/00-README.md) |

---

## 🌐 Multilingual Pedagogy & Accessibility

Programming terminology and keywords are strictly maintained in **English** across all tracks. However, to help non-native English speakers grasp abstract concepts, every lesson includes explanations in **4 language formats**:

1. **English:** Primary technical explanation, formal definitions, and ISO standard specifications.
2. **Hindi (Roman Script):** Natural, conversational Hindi written in the Roman/Latin alphabet (e.g. `Pointer memory address store karta hai.`).
3. **Marathi (Roman Script):** Clear, simple Marathi written in the Roman/Latin alphabet (e.g. `Pointer dusrya variable cha memory address sathavato.`).
4. **Hinglish (Roman Script):** Conversational developer Hinglish commonly spoken in technical discussions.

> 💡 **Why Roman Script for Regional Languages?**
> Using Roman/Latin script for Hindi and Marathi ensures seamless readability across code editors, Linux/macOS terminal sessions, Windows Command Prompt, and mobile devices without missing font/glyph dependencies.

---

## 📖 Standard Lesson Blueprint

Every lesson in this repository follows a consistent, high-yield pedagogical structure:

```markdown
1. Topic Title & Difficulty Badge (🟢 Beginner / 🟡 Intermediate / 🔴 Advanced)
2. 📖 Definition (Formal, technically accurate description)
3. 🌐 Multilingual Explanation (English, Roman Hindi, Roman Marathi, Hinglish)
4. 🤔 Why Do We Use It? (Practical software engineering purpose)
5. 🧠 Simple Explanation (Real-world relatable analogies)
6. 📝 Syntax & Mechanics (Correct standard syntax & rules)
7. 💡 Practical Example (Runnable, realistic code example)
8. 🔍 Code Breakdown (Step-by-step logic explanation)
9. 👀 Output (Expected deterministic output)
10. ⚠️ Common Mistakes (Beginner pitfalls, syntax bugs & security warnings)
11. 🛡️ Safety / Important Notes (Memory safety, UB warnings, standard flags)
12. 🌍 Real-World Usage (Where this is used in production systems)
13. 🧪 Try It Yourself (Interactive beginner exercise)
14. 🎯 Mini Challenge (Slightly harder problem solving task)
15. 🔗 Related Topics & 🧭 Navigation Links
```

---

## ⚡ Quick Execution & Compilation Cheatsheet

### 1. Running C Programs (ISO C11)
```bash
# Compile with strict warnings enabled
gcc -Wall -Wextra -std=c11 program.c -o program

# Execute binary
./program        # Linux / macOS
program.exe      # Windows
```

### 2. Running C++ Programs (ISO C++17/20)
```bash
# Compile with modern C++ standard
g++ -Wall -Wextra -std=c++20 program.cpp -o program

# Execute binary
./program
```

### 3. Running JavaScript (Node.js & DevTools)
```bash
# Run via Node.js runtime
node script.js

# Or open browser Developer Console (F12) -> Console tab
```

### 4. Running Web Projects (HTML / CSS)
Open `.html` files in any modern web browser or use VS Code **Live Server** extension for hot-reloading.

---

## 🗺️ Recommended Learning Roadmap

For beginners entering software development, we recommend following this progressive sequence:

```text
[1. Web Fundamentals]
   HTML (Structure & Content) ──> CSS (Styling, Flexbox & Grid)
                                       │
                                       ▼
[2. Dynamic Web Logic]          JavaScript (ES6+, DOM, Async/Await)
                                       │
                                       ▼
[3. Low-Level Systems]          C (Pointers, Memory & Structs)
                                       │
                                       ▼
[4. High-Performance OOP]       C++ (Modern OOP, STL, Smart Pointers & Move Semantics)
```

---

## 🛡️ Technical Accuracy & Quality Assurance

- **Zero Undefined Behavior:** C/C++ lessons explicitly teach memory safety, bounds checking, avoiding undefined behavior (UB), avoiding dangling pointers, and proper heap cleanup (`free`, RAII, `std::unique_ptr`).
- **Idiomatic Code Patterns:** C code uses idiomatic patterns (e.g. `int *arr = malloc(n * sizeof *arr);` without redundant casting). C++ code uses modern RAII and standard algorithms instead of raw pointer manipulation.
- **Safe I/O:** Banned legacy unsafe functions (like `gets()`) in favor of bounded functions (`fgets()`, `getline()`).

---

## 🤝 Contributing & Community

Contributions are welcome! If you spot a typo, a bug in a code example, or want to improve an explanation:
1. Fork the repository.
2. Create a focused branch (`git checkout -b fix-explanation`).
3. Commit clear, well-described changes.
4. Open a Pull Request.

---

## 🧭 Navigation Quick Links

- 🌐 [HTML Learning Path](HTML/00-README.md)
- 🎨 [CSS Learning Path](CSS/00-README.md)
- ⚙️ [C Systems Path](C/00-README.md)
- ⚡ [JavaScript Path](JS/00-README.md)
- 🚀 [C++ Systems Path](CPP/00-README.md)
