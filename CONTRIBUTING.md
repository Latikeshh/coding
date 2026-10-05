---
layout: default
title: "Comprehensive Contribution Guide"
permalink: /CONTRIBUTING.html
---

# 🤝 How to Contribute & Push Changes to Coding Repository

Thank you for your interest in contributing to **Coding**! 🎉

This repository is a open-source educational resource designed to empower learners across Web Development, Systems Programming, Databases, and Version Control. Contributions from developers, learners, and educators of all skill levels are warmly welcome!

---

## 📌 What You Can Contribute

You can contribute in many impactful ways:

- ✍️ **Add New Lessons or Topics**: Expand existing tracks with new lessons or advanced concepts.
- 💡 **Improve Explanations**: Make complex programming concepts easier to understand.
- 🌍 **Add Multilingual Translations**: Enhance Hindi (Roman Script), Marathi (Roman Script), or Hinglish sections.
- 🐛 **Fix Mistakes or Typos**: Correct code syntax errors, broken links, or grammatical issues.
- 🧪 **Add Code Examples & Projects**: Provide practical, runnable code snippets or mini projects.
- 🎨 **Documentation & Styling**: Improve markdown formatting, CSS theme, or documentation accessibility.

---

## 🚀 Complete Step-by-Step Guide: How to Push Contributions

Follow this detailed Git and GitHub workflow to make your contribution and submit a Pull Request (PR):

### Step 1: Fork the Repository

1. Go to the main repository page: [https://github.com/Latikeshh/coding](https://github.com/Latikeshh/coding)
2. Click the **Fork** button near the top right corner.
3. Select your GitHub account to create a copy of the repository in your profile.

---

### Step 2: Clone Your Fork to Your Local Machine

Open your terminal or command prompt and run:

```bash
# Clone your forked repository (replace <your-username> with your actual GitHub username)
git clone https://github.com/<your-username>/coding.git

# Move into the project directory
cd coding
```

---

### Step 3: Configure Upstream Remote

Set up a reference to the main original repository (upstream) so you can keep your fork updated:

```bash
git remote add upstream https://github.com/Latikeshh/coding.git

# Verify remotes
git remote -v
```

---

### Step 4: Create a New Feature Branch

Always create a new branch for your changes rather than working on `main`:

```bash
# Create and switch to a descriptive new branch
git checkout -b feature/add-c-array-examples
```

---

### Step 5: Make Your Changes & Follow Formatting Standards

Edit or create the files using your preferred code editor (VS Code, Android Studio, CLion, etc.).

#### 📋 File & Content Formatting Standards:

- **YAML Front Matter**: Every Markdown file MUST start with valid YAML front matter:
  ```markdown
  ---
  layout: default
  title: "Your Lesson or Page Title"
  ---
  ```
- **Relative Links**: Ensure all internal lesson links point to `.html` files (e.g., `01-setup-c.html`) and homepage links point to `./`.
- **Multilingual Structure**: Include explanations in English, Hindi (Roman Script), Marathi (Roman Script), and Hinglish when creating or updating lessons.
- **Code Blocks**: Specify language tags for syntax highlighting (e.g., ` ```c `, ` ```cpp `, ` ```python `, ` ```js `).

---

### Step 6: Stage and Commit Your Changes

Review your modified files and commit them with a clear, descriptive message:

```bash
# Check status of modified files
git status

# Stage the changed files
git add .

# Commit with a clear commit message
git commit -m "docs: add new dynamic memory allocation examples in C track"
```

---

### Step 7: Push Branch to Your GitHub Fork

Push your local branch to your remote fork on GitHub:

```bash
git push origin feature/add-c-array-examples
```

---

### Step 8: Open a Pull Request (PR)

1. Visit your forked repository on GitHub (`https://github.com/<your-username>/coding`).
2. You will see a banner with a **Compare & pull request** button. Click it!
3. Provide a clear **Title** and **Description** explaining what changes you made and why.
4. Click **Create pull request**.

🎉 **Congratulations!** Your contribution is submitted. The maintainers will review your PR, provide feedback if needed, and merge it into the main repository.

---

## 🔄 Keeping Your Local Fork Updated

Before creating a new branch or making new changes, sync your local `main` branch with the upstream repository:

```bash
# Switch to main branch
git checkout main

# Fetch latest changes from upstream repository
git fetch upstream

# Merge upstream main into your local main
git merge upstream/main

# Push updated main to your GitHub fork
git push origin main
```

---

## 👥 Contributor Hall of Fame

All accepted contributors will be featured in the **Contributors** section of the main repository README!

Thank you for helping make **Coding** a better resource for learners worldwide! 🚀
