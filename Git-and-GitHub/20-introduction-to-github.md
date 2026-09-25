# Introduction to GitHub Platform

> 🟢 Beginner

## 📖 Definition

**GitHub** is a cloud-based web hosting platform for Git repositories that provides a graphical interface, collaboration tools, access controls, code review workflows, issue tracking, continuous integration (CI/CD), and open-source project management.

## 🌐 Multilingual Explanation

### English
GitHub hosts Git repositories online in the cloud. While Git is the local CLI tool that tracks version history, GitHub is the web platform where developers store backups, collaborate on team repositories, review Pull Requests, track bugs via Issues, and showcase portfolios.

### Hindi
GitHub ek cloud platform hai jo aapke Git repositories ko online host karta hai. Git local tool hai aur GitHub online website hai jahan aap apna code backup rakh sakte hain, doosron ke saath collaborate kar sakte hain, aur apna developer portfolio bana sakte hain.

### Marathi
GitHub mhanje Git repositories online cloud var sathavnyasathi asleli website. Git ha local tool aahe tar GitHub ha online platform aahe jithe code backup, team collaboration, aani portfolio tayar karta yeto.

### Hinglish
Git local computer par chalta hai, jabki GitHub cloud web server hai. GitHub par aap public repositories banakar duniya ke saamne apna developer portfolio showcase kar sakte hain aur open-source projects mein contribute kar sakte hain.

## 🤔 Why Do We Use It?

GitHub is the global developer social network and code ecosystem. Having a GitHub account allows you to backup projects safely, collaborate with remote teams, participate in open source, host static websites, and present your code to technical recruiters.

## 🧠 Simple Explanation

Think of Git vs GitHub like videos on a smartphone:
- **Git:** The camera app on your phone recording videos locally on your phone storage.
- **GitHub:** YouTube — the cloud platform where you upload your recorded videos so anyone in the world can watch, comment, share, or collaborate!

## 📝 GitHub Repository Setup Steps

### 1. Creating a New Repository on GitHub
1. Sign in to your account at [github.com](https://github.com).
2. Click the **`+`** icon in the top right corner -> Select **New repository**.
3. Fill in Repository Details:
   - **Repository Name:** e.g. `my-web-portfolio`
   - **Visibility:** **Public** (visible to anyone) or **Private** (restricted access).
   - **Initialize Options:** Uncheck README/gitignore if linking an existing local repository.
4. Click **Create repository**.

### 2. Linking Local Repo to GitHub Repo
GitHub presents terminal instructions to link your local code:

```bash
# 1. Rename default local branch to main
git branch -M main

# 2. Add remote URL
git remote add origin https://github.com/your-username/my-web-portfolio.git

# 3. Push local commits to GitHub
git push -u origin main
```

## 💡 Navigating the GitHub UI Tabs

| GitHub Tab | Purpose |
|---|---|
| **Code** | View repository directory tree, files, commits, branches, and releases |
| **Issues** | Bug tracker, feature requests, and task discussions |
| **Pull Requests** | Code review proposals submitted by team members or open-source contributors |
| **Actions** | CI/CD automation pipelines (testing, building, deploying code) |
| **Projects** | Kanban boards and sprint management planning |
| **Settings** | Repository access control, secrets, webhooks, and domain settings |

## 🔍 Command Breakdown

- `git branch -M main`: Forces renaming current active branch to `main` (standard GitHub default).
- `git push -u origin main`: Uploads local `main` branch code to GitHub `origin` remote.

## 👀 GitHub Web View

```text
github.com/your-username/my-web-portfolio
 ├── 📄 README.md        (Displayed on repository home page)
 ├── 📄 index.html
 ├── 🎨 style.css
 └── ⚙️ .gitignore
```

## ⚠️ Common Mistakes

- **Initializing README on GitHub AND Locally:** Checking "Add a README.md file" on GitHub web wizard when creating a repo for code that ALREADY exists locally. This creates diverged histories and triggers `failed to push some refs` error.
  - *Fix:* Leave GitHub wizard checkboxes UNCHECKED when linking existing local code.
- **Uploading Secret Keys:** Uploading `.env` files containing private passwords or API tokens to public GitHub repositories.

## 🛡️ Safety / Important Notes

- Public repositories on GitHub are indexed by search engines. Never upload personal sensitive information or secrets.
- GitHub automatically renders markdown files (`README.md`) as structured documentation on repository homepages.

## 🌍 Real-World Usage

Tech companies evaluate job applicants by inspecting their public GitHub repositories, commit histories, code quality, and open-source contributions.

## 🧪 Try It Yourself

1. Create a free account on [github.com](https://github.com) if you haven't already.
2. Create a new public repository named `github-practice` on GitHub. Leave checkboxes unchecked.
3. Link your local `git-practice` folder to your new GitHub repository using `git remote add origin <url>` and execute `git push -u origin main`.

## 🎯 Mini Challenge

Refresh your GitHub repository web page in your browser and verify that your committed files and README appear live on GitHub!

## 🔗 Related Topics

- [Syncing Remotes with Push & Pull](18-git-push-and-git-pull.md)
- [Forking & Pull Requests](21-forking-and-pull-requests.md)
- [Free Hosting with GitHub Pages](24-github-pages-and-hosting.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: Fetching](19-git-fetch-and-remote-branches.md) | [Next: Forking & Pull Requests →](21-forking-and-pull-requests.md)
