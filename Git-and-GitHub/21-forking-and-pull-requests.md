# Forking & Pull Requests (PRs)

> 🟡 Intermediate

## 📖 Definition

A **Fork** is a personal server-side copy of another user's GitHub repository created under your own account. A **Pull Request (PR)** is a formal proposal submitted on GitHub requesting the original repository maintainer to review, discuss, and merge code changes from your feature branch into their upstream project.

## 🌐 Multilingual Explanation

### English
Forking copies a repository to your GitHub account. Pull Requests (PRs) are the core mechanism for open-source collaboration. You create a fork, clone it locally, make changes on a feature branch, push the branch to your fork, and submit a PR to the original repository for code review.

### Hindi
Forking se aap kisi doosre ke GitHub project ka personal clone apne account mein bana sakte hain. Pull Request (PR) ek proposal hota hai jisme aap original project maintainer se request karte hain ki woh aapke dwara kiye gaye code changes ko unke main project mein merge karein.

### Marathi
Forking mhanje dusryachya GitHub repository chi prat (copy) swatachya account var tayar karne. Pull Request (PR) dware aapan original project owner la sangto ki majhe badal tya mukhya project madhye merge kara.

### Hinglish
Open-source projects mein contribution Forking aur Pull Request (PR) se hoti hai. Step 1: Repo Fork karein, Step 2: Local clone karke feature branch banayein, Step 3: Code edit karke apne fork par push karein, Step 4: GitHub par "Compare & Pull Request" click karke maintainer ko PR bhejein.

## 🤔 Why Do We Use Them?

In open-source software, maintainers cannot grant write access to thousands of stranger developers. Forking and Pull Requests allow anyone to propose code improvements safely without risking breaking the original repository.

## 🧠 Simple Explanation

Think of a Pull Request like submitting a guest article to a newspaper editor:
- **Forking:** Taking a blank copy of the newspaper layout to your desk.
- **Editing:** Writing your article on your copy (**Commit & Push**).
- **Pull Request:** Submitting your written article to the Editor-in-Chief (**PR**). The Editor reviews it (**Code Review**), suggests edits, and prints it in the Sunday newspaper (**Merge**).

## 📝 The Open-Source Contribution Workflow

```text
[Original Upstream Repo]  ──────(Fork)──────>  [Your Personal Fork]
         │                                              │
         │                                          (git clone)
         │                                              │
         ▼                                              ▼
[Upstream Commit Changes] <───(Pull Request)─── [Your Local Workspace]
```

### Step-by-Step Execution Guide

#### Step 1: Fork the Repository
On GitHub, navigate to the target open-source repository and click the **`Fork`** button in the top right.

#### Step 2: Clone Your Personal Fork
Clone your fork to your computer disk:
```bash
git clone https://github.com/your-username/repository-name.git
cd repository-name
```

#### Step 3: Configure Upstream Remote Link
Link your local clone to the original parent repository to keep your code updated:
```bash
git remote add upstream https://github.com/original-author/repository-name.git
```

#### Step 4: Create a Feature Branch & Commit Changes
```bash
git switch -c fix-button-bug
echo "color: green;" >> style.css
git commit -am "Fix button hover color contrast issue"
```

#### Step 5: Push Feature Branch to YOUR Fork
```bash
git push -u origin fix-button-bug
```

#### Step 6: Create Pull Request on GitHub
Navigate to your fork on GitHub web. Click **"Compare & pull request"**, write a clear title and description explaining your fix, and click **"Create pull request"**.

## 💡 Code Review & Merge Process

1. **Review:** Project maintainers inspect your line-by-line `git diff`, run automated tests (CI/CD), and leave comments.
2. **Revisions:** If maintainers request changes, make edits locally, commit, and push to your fork branch. The PR updates automatically!
3. **Merge:** Once approved, the maintainer clicks **"Merge pull request"**, incorporating your code into the upstream project.

## 🔍 Command Breakdown

- `git clone <url>`: Downloads remote repository, initializes local Git database, and sets `origin` remote.
- `git remote add upstream <url>`: Adds `upstream` shortcut referencing original parent repo.

## 👀 GitHub Pull Request UI

```text
Pull Request #42: Fix button hover color contrast issue
Status: Open (1 review requested)
Branch: your-username:fix-button-bug -> original-author:main
```

## ⚠️ Common Mistakes

- **Submitting PR From `main` Branch:** Creating a PR directly from your fork's `main` branch rather than a dedicated feature branch (`fix-button-bug`).
- **Ignoring PR Guidelines:** Failing to read `CONTRIBUTING.md` guidelines provided by open-source projects before opening a PR.

## 🛡️ Safety / Important Notes

- PRs remain open until merged or closed by maintainers. Pushing additional commits to your PR branch automatically updates the active PR.

## 🌍 Real-World Usage

Millions of open-source contributions to Linux, React, Python, Kubernetes, and VS Code occur daily through GitHub Pull Requests.

## 🧪 Try It Yourself

1. Search GitHub for an open-source repository or practice repo.
2. Click **Fork** to create a copy under your account.
3. Clone your fork locally using `git clone`.

## 🎯 Mini Challenge

Run `git remote -v` inside your cloned fork and configure `upstream` link referencing the original repository URL using `git remote add upstream <parent-url>`.

## 🔗 Related Topics

- [Introduction to GitHub](20-introduction-to-github.md)
- [SSH Keys & Authentication](22-ssh-keys-and-github-authentication.md)
- [GitHub Issues & Project Boards](23-github-issues-and-project-boards.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: GitHub Intro](20-introduction-to-github.md) | [Next: SSH Authentication →](22-ssh-keys-and-github-authentication.md)
