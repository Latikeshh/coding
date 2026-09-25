# Practical Team Workflows & Capstone Projects

> 🔴 Advanced

## 📖 Definition

This capstone lesson combines all Git and GitHub concepts — initialization, staging, atomic committing, `.gitignore`, branching, merging, merge conflict resolution, remotes, SSH authentication, GitHub Pages hosting, and GitHub Actions CI/CD — into end-to-end practical workflows simulating real-world software engineering practice.

## 🌐 Multilingual Explanation

### English
This lesson provides practical hands-on workflows simulating real-world developer tasks. By completing these 3 progressive capstone projects (Beginner: Personal web project publishing, Intermediate: Branching, conflict resolution, and GitHub Pages deployment, Advanced: Complete open-source contribution workflow with CI/CD and Pull Requests), you solidify end-to-end Git and GitHub engineering mastery.

### Hindi
Yeh capstone lesson aapko real-world software companies ke workflows sikhata hai. Teen practical projects (Beginner: Personal project GitHub par push karna, Intermediate: Branching, conflict resolve karna aur GitHub Pages par site live karna, Advanced: Open-source contribution, PR, aur GitHub Actions CI/CD pipeline) se aapka Git confidence strong hoga.

### Marathi
Ha capstone lesson kharya software industry madhye vaparale jaanare workflows dakhvato. Teen practical projects dware (Beginner, Intermediate, Advanced) Git aani GitHub chya sarv commands chi bhari practice hote.

### Hinglish
Theories padhne ke baad real workflow practice zaroori hai. In 3 capstone projects ko apne terminal par execute karke aap end-to-end Git and GitHub mastery achieve kar sakte hain.

---

## 🟢 WORKFLOW 1 (Beginner): Initializing & Publishing a Web Project

### 🎯 Goal
Create a local web portfolio project, configure identity, ignore build/secret files, initialize Git, make clean atomic commits, and push to GitHub.

### 🧠 Skills Used
- `git config`, `git init`, `git add`, `git commit`, `.gitignore`, `git remote`, `git push -u`

### 📝 Step-by-Step Execution Guide

```bash
# 1. Create project directory
mkdir my-portfolio-app
cd my-portfolio-app

# 2. Configure global author identity
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global init.defaultBranch main

# 3. Initialize Git repository
git init

# 4. Create files and .gitignore
echo "# My Web Portfolio" > README.md
echo "<h1>Developer Portfolio</h1>" > index.html
echo "body { font-family: sans-serif; }" > style.css
echo ".env" > .gitignore
echo "*.log" >> .gitignore

# 5. Inspect status and stage files
git status
git add .

# 6. Make initial atomic commit
git commit -m "Initialize web portfolio structure and landing page"

# 7. Create repository on GitHub web, add remote and push
git remote add origin https://github.com/your-username/my-portfolio-app.git
git push -u origin main
```

---

## 🟡 WORKFLOW 2 (Intermediate): Branching, Conflict Resolution & GitHub Pages Deployment

### 🎯 Goal
Develop a dark mode feature on an isolated branch, simulate and resolve a deliberate merge conflict against `main`, and publish the live site on GitHub Pages.

### 🧠 Skills Used
- `git switch -c`, `git merge`, Conflict Resolution, `git push`, GitHub Pages Hosting

### 📝 Step-by-Step Execution Guide

```bash
# 1. Ensure you are on main and create feature branch
git switch main
git switch -c feature-dark-theme

# 2. Make feature edits on dark theme branch
echo "body { background-color: #121212; color: #fff; }" >> style.css
git commit -am "Implement dark mode stylesheet rules"

# 3. Meanwhile, simulate a conflicting edit on main branch!
git switch main
echo "body { background-color: #f4f4f4; color: #333; }" >> style.css
git commit -am "Update light theme background color"

# 4. Merge feature branch into main to trigger conflict
git merge feature-dark-theme
# Output: CONFLICT (content): Merge conflict in style.css

# 5. Open style.css in VS Code, choose dark theme rules, and remove conflict markers
# Save style.css, then stage and finalize merge
git add style.css
git commit -m "Merge feature-dark-theme resolving CSS theme conflict"

# 6. Push updated main to GitHub
git push origin main
```

*Next Step:* Enable GitHub Pages in Repository **Settings -> Pages** (Branch: `main`, Folder: `/root`) to view your live website hosted online!

---

## 🔴 WORKFLOW 3 (Advanced): Open-Source Contribution with PR, Magic Keywords & GitHub Actions CI

### 🎯 Goal
Fork an open-source project, set up upstream tracking, create a feature branch, fix a bug, write an automated GitHub Actions CI workflow, and open a Pull Request with magic issue closing keywords.

### 🧠 Skills Used
- Forking, `git clone`, `git remote add upstream`, `git switch -c`, GitHub Actions YAML, `git push`, PR Review, Magic Keywords (`Fixes #N`)

### 📝 Step-by-Step Execution Guide

```bash
# 1. Fork target open-source repository on GitHub web interface
# 2. Clone your personal fork locally
git clone https://github.com/your-username/open-source-project.git
cd open-source-project

# 3. Add upstream link to original parent repository
git remote add upstream https://github.com/original-author/open-source-project.git
git fetch upstream

# 4. Create feature branch
git switch -c fix-mobile-nav-bug

# 5. Fix code and create a GitHub Actions CI workflow file
mkdir -p .github/workflows
cat << 'EOF' > .github/workflows/ci.yml
name: CI Test Pipeline
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: echo "Automated CI verification passed!"
EOF

# 6. Commit changes with atomic commit message
git add .
git commit -m "Fix mobile navigation dropdown touch event (Fixes #42)"

# 7. Push feature branch to YOUR fork on GitHub
git push -u origin fix-mobile-nav-bug
```

*Final Step:* Navigate to original upstream repository on GitHub web, click **"Compare & pull request"**, fill out PR description, and submit your Pull Request! Notice that GitHub Actions runs CI checks automatically, and `Fixes #42` links your PR directly to Issue #42.

---

## 🧪 Graduation Checklist

If you can successfully complete all 3 capstone workflows, you possess complete proficiency in:

- [x] Local Git mechanics (`init`, `add`, `commit`, `log`, `status`, `diff`, `restore`, `reset`, `revert`)
- [x] Branching & Merging (`branch`, `switch`, `merge`, conflict resolution, `rebase`, `stash`)
- [x] Remote Collaboration (`remote`, `push`, `pull`, `fetch`, SSH keys, upstream tracking)
- [x] GitHub Ecosystem (Issues, PRs, Forking, Code Reviews, GitHub Pages, GitHub Actions CI/CD)

---

## 🔗 Master Navigation

[← Home](00-README.md) | [← Previous: Security](29-git-best-practices-and-security.md)
