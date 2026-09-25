# GitHub Actions & CI/CD Automation Basics

> 🔴 Advanced

## 📖 Definition

**GitHub Actions** is a built-in Continuous Integration and Continuous Deployment (CI/CD) platform that allows developers to automate software build, testing, linting, security scanning, and deployment pipelines directly inside GitHub repositories triggered by GitHub events (such as `push` or `pull_request`).

## 🌐 Multilingual Explanation

### English
GitHub Actions automates workflow tasks using YAML workflow files stored inside `.github/workflows/`. Continuous Integration (CI) automatically runs automated tests whenever code is pushed or a Pull Request is opened. If tests pass, Continuous Deployment (CD) can automatically deploy the application to production servers.

### Hindi
GitHub Actions aapke code ko automatically test, build, aur deploy karta hai. Project root mein `.github/workflows/ci.yml` file banakar aap rules set kar sakte hain. Jab bhi koi code `push` karta hai ya `Pull Request` kholta hai, GitHub runner automatic server par test suite execute karta hai.

### Marathi
GitHub Actions dware code automatic test, build, aani deploy kele jato. `.github/workflows/` folder madhye YAML file tayar karun automated steps lihatat. Code push kelyavar GitHub server automatic testing chalavto.

### Hinglish
CI/CD automation ke liye GitHub Actions use hota hai. Whenever anyone opens a PR, GitHub Actions automatically runner machine par project checkout karta hai, tests run karta hai, aur agar tests fail hote hain toh PR merge karne se block kar deta hai.

## 🤔 Why Do We Use It?

Relying on humans to manually remember to run test suites or deploy code before merging PRs inevitably leads to human error and broken production deployments. CI/CD automates quality control.

## 🧠 Simple Explanation

Think of GitHub Actions like an automated quality control inspection line in a car factory:
- Every time a car part (code change) moves down the conveyor belt (**Push / PR**), robotic arms (**GitHub Runners**) automatically inspect the part, run crash tests (**Automated Tests**), and paint the car (**Deploy to Cloud**).
- If a part fails testing, the robot stops the assembly line immediately (**Blocks Merge**)!

## 📝 Anatomy of a GitHub Actions YAML Workflow

Workflow configuration files MUST be saved inside `.github/workflows/` directory in YAML (`.yml`) format:

```yaml
# .github/workflows/ci.yml
name: Continuous Integration Pipeline

# 1. Event Triggers (When to run this workflow)
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

# 2. Jobs execution definitions
jobs:
  build-and-test:
    runs-on: ubuntu-latest # Cloud virtual machine runner

    steps:
      # Step 1: Checkout repository code onto runner machine
      - name: Checkout Repository Code
        uses: actions/checkout@v4

      # Step 2: Set up Node.js runtime environment
      - name: Set up Node.js Environment
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      # Step 3: Install dependencies and run tests
      - name: Install Dependencies
        run: npm ci

      - name: Execute Automated Test Suite
        run: npm test
```

## 💡 Practical Example

Here is a simple HTML validator workflow verifying that HTML files are error-free on every push:

```yaml
# .github/workflows/html-check.yml
name: Validate HTML Markup

on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Check HTML Files
        run: |
          echo "Running automated HTML syntax verification..."
          test -f index.html && echo "index.html exists!"
```

## 🔍 Key YAML Terms Explained

- **`on:`**: Specifies trigger events (`push`, `pull_request`, `schedule`, `workflow_dispatch`).
- **`runs-on: ubuntu-latest`**: Specifies the virtual machine operating system hosted by GitHub (Ubuntu, Windows Server, or macOS).
- **`uses:`**: Imports reusable pre-built action modules from the GitHub Actions Marketplace (e.g. `actions/checkout@v4`).
- **`run:`**: Executes shell terminal commands directly on the runner machine.

## 👀 GitHub Actions Execution UI

```text
Actions / Workflows / Continuous Integration Pipeline
✔ Checkout Repository Code (2s)
✔ Set up Node.js Environment (3s)
✔ Install Dependencies (12s)
✔ Execute Automated Test Suite (5s)
Status: All checks passed! [Green Checkmark]
```

## ⚠️ Common Mistakes

- **Wrong File Location:** Placing workflow YAML files outside `.github/workflows/` (e.g. placing in `.github/workflow/` or project root). Git will ignore the workflows!
- **YAML Indentation Errors:** YAML uses strict 2-space indentation. Using tabs or incorrect spacing syntax causes `Invalid YAML` parsing errors.

## 🛡️ Safety / Important Notes

- GitHub provides free GitHub Actions runner minutes for open-source public repositories.
- Secrets used in Actions (like AWS keys or SSH keys) must be stored safely in GitHub Settings -> **Secrets and variables -> Actions**, and referenced in YAML as `${{ secrets.AWS_ACCESS_KEY }}`.

## 🌍 Real-World Usage

Companies use GitHub Actions to automatically run unit tests, check code style formatting, build mobile app binaries (`.apk`/`.ipa`), compile C/C++ projects, and deploy web applications to AWS, Azure, or Vercel.

## 🧪 Try It Yourself

1. Inside your `git-practice` repository, create directory structure `.github/workflows/`.
2. Create a file named `.github/workflows/hello.yml`.
3. Add a simple workflow:
   ```yaml
   name: Hello World Workflow
   on: [push]
   jobs:
     greet:
       runs-on: ubuntu-latest
       steps:
         - run: echo "GitHub Actions is working!"
   ```
4. Commit and push to GitHub, then click the **Actions** tab on your GitHub repo page to view your live running workflow!

## 🎯 Mini Challenge

Edit `hello.yml` to add a second step that prints the current date and time using `run: date`. Push and inspect the updated workflow log output on GitHub.

## 🔗 Related Topics

- [Introduction to GitHub](20-introduction-to-github.md)
- [Free Hosting with GitHub Pages](24-github-pages-and-hosting.md)
- [Security Best Practices](29-git-best-practices-and-security.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: Tags & Releases](25-git-tags-and-releases.md) | [Next: Git Aliases & Shortcuts →](27-git-aliases-and-shortcuts.md)
