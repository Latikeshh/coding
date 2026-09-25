# Syncing Remotes (`git push`, `git pull`)

> 🟢 Beginner

## 📖 Definition

**`git push`** uploads local repository commits to a remote server (like GitHub). **`git pull`** fetches latest commits from a remote server and automatically merges them into your active local working branch (`git pull = git fetch + git merge`).

## 🌐 Multilingual Explanation

### English
`git push` uploads local commits to the remote server. The `-u` flag (`--set-upstream`) links your local branch to the remote branch so future pushes require typing only `git push`. `git pull` downloads remote changes and merges them into your active local branch.

### Hindi
Local computer se commits ko GitHub par upload karne ke liye `git push` ka upyog hota hai. Pehli baar push karte waqt `-u` (`--set-upstream`) flag lagayein (`git push -u origin main`). GitHub se naye commits ko local computer par download karke merge karne ke liye `git pull` run karein.

### Marathi
Local commits GitHub var upload karanyasathi `git push` vaparatat. Pehlya veli `git push -u origin main` chalvave. GitHub varil navin badal local computer var aannyasathi `git pull` command vaparali jaate.

### Hinglish
`git push` aapke local commits ko GitHub par live kar deta hai. First time push par `git push -u origin main` use karein. Remote repository par teammates ke dwaara kiye gaye new commits ko apne local code mein merge karne ke liye `git pull` Type karein.

## 🤔 Why Do We Use They?

Without pushing and pulling, code stays trapped on a single developer's laptop. Pushing publishes your completed work to team members; pulling keeps your local workspace synchronized with team contributions.

## 🧠 Simple Explanation

Think of pushing and pulling like cloud storage synchronization:
- **`git push` (Upload):** Uploading your local photos to Google Photos or iCloud so others can view them.
- **`git pull` (Download & Sync):** Downloading the latest photos shared by family members into your local gallery.

## 📝 Syntax & Command Patterns

### 1. Pushing Local Commits (`git push`)
```bash
# First time push: Uploads branch AND sets upstream tracking link
git push -u origin main

# Subsequent pushes on a tracked branch:
git push

# Push a specific feature branch to remote
git push -u origin feature-login

# Delete a remote branch on GitHub
git push origin --delete feature-login
```

### 2. Pulling Remote Changes (`git pull`)
```bash
# Pull and merge latest changes from tracked upstream branch
git pull

# Explicitly pull from origin main
git pull origin main

# Pull with rebase instead of merge commit
git pull --rebase origin main
```

## 💡 Practical Example

Full terminal syncing workflow:

```bash
# 1. Make local changes and commit
echo "console.log('v1.1');" >> app.js
git commit -am "Update app version to v1.1"

# 2. Push to GitHub origin main
git push -u origin main

# 3. Pull latest changes made by team members on GitHub
git pull
```

## 🔍 Command Breakdown

- `git push`: Invokes upload engine.
- `-u` (`--set-upstream`): Remembers remote `origin` and branch `main` so future pushes require only `git push`.
- `git pull`: Executes `git fetch` (downloads remote commits) followed immediately by `git merge` (combines remote commits into local branch).

## 👀 Terminal Output

```bash
$ git push -u origin main
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Writing objects: 100% (5/5), 450 bytes | 450.00 KiB/s, done.
Total 5 (delta 0), reused 0 (delta 0)
To https://github.com/Rahul/my-app.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

## ⚠️ Common Mistakes & Push Rejection

- **Push Rejection (`Updates were rejected because the remote contains work...`):** Attempting `git push` when GitHub contains newer commits pushed by teammates that you don't have locally yet!
  - *Fix:* Run `git pull origin main` first, resolve any merge conflicts if necessary, and then run `git push`.
- **DANGER — Force Pushing (`git push --force`):** Overwriting remote commits with your local history. Never force push to shared `main` branches! (Use `--force-with-lease` if force pushing on personal feature branches).

## 🛡️ Safety / Important Notes

- Always run `git status` to ensure your working tree is clean before running `git pull`.

## 🌍 Real-World Usage

Developers execute `git pull` every morning when starting work to get teammates' latest code, and execute `git push` before ending their workday.

## 🧪 Try It Yourself

1. Verify your active branch using `git branch`.
2. Practice the command syntax for pushing a branch named `feature-auth`: `git push -u origin feature-auth`.

## 🎯 Mini Challenge

Explain in your own words why Git rejects `git push` if your teammate pushed new commits to GitHub while you were working offline.

## 🔗 Related Topics

- [Remote Repositories](17-remote-repositories-and-remotes.md)
- [Remote Tracking & Fetching](19-git-fetch-and-remote-branches.md)
- [Introduction to GitHub](20-introduction-to-github.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: Remotes](17-remote-repositories-and-remotes.md) | [Next: Fetching →](19-git-fetch-and-remote-branches.md)
