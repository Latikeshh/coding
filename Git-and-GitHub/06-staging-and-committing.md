# Staging & Committing Changes (`git add`, `git commit`)

> 🟢 Beginner

## 📖 Definition

**Staging** (`git add`) is the process of marking modified or untracked files to be included in the next commit snapshot. **Committing** (`git commit`) takes all currently staged changes and saves them permanently into the Git repository database as an immutable version snapshot accompanied by a commit message and author metadata.

## 🌐 Multilingual Explanation

### English
`git add` stages changes from your Working Directory into the Staging Area (Index). `git commit -m "message"` records those staged changes permanently in the local repository database. Good commit messages follow imperative mood conventions (e.g. "Add login validation" rather than "Added login validation").

### Hindi
`git add` aapke changed files ko Staging Area mein add karta hai. `git commit -m "message"` un staged changes ka permanent snapshot database mein save kar deta hai. Commit message hamesha clear aur meaningful hona chahiye.

### Marathi
`git add` cha vapar badalalele files Staging Area madhye taknyasathi hoto. `git commit -m "message"` mhadhyamane staged files cha permanent snapshot repository madhye save hoto.

### Hinglish
`git add .` se saare modified aur new files Staging Area mein add ho jaate hain. Iske baad `git commit -m "Your Commit Message"` se repository mein permanent save point ban jata hai. Pehle `git add` karna zaroori hai, tabhi `git commit` kaam karega.

## 🤔 Why Do We Use Them?

Commits serve as time-travel checkpoints in your codebase. If a new feature introduces a critical bug, you can compare or revert back to previous commits instantly.

## 🧠 Simple Explanation

Think of staging and committing like taking a photo with a camera:
1. **`git add`:** Arranging people in front of the camera lens, getting everyone to pose (**Staging**).
2. **`git commit`:** Clicking the shutter button to snap the permanent photo (**Commit**).

## 📝 Key Commands & Syntax

### 1. Staging Commands (`git add`)
```bash
# Stage a single specific file
git add index.html

# Stage multiple specific files
git add style.css app.js

# Stage ALL modified and untracked files in current directory and subdirectories
git add .
```

### 2. Committing Commands (`git commit`)
```bash
# Commit staged changes with an inline commit message
git commit -m "Add responsive navigation header"

# Stage all tracked modified files AND commit in one step (Skips untracked files!)
git commit -am "Update button styling"
```

## 💡 Practical Example

Here is a complete terminal workflow for staging and committing a new user authentication feature:

```bash
# 1. Create feature files
echo "function login() {}" > auth.js
echo ".login-btn { color: red; }" > auth.css

# 2. Check untracked status
git status

# 3. Stage all new files
git add .

# 4. Confirm files are in Staging Area
git status

# 5. Commit staged changes with meaningful message
git commit -m "Implement user authentication login layout"
```

## 🔍 Command Breakdown

- `git add .`: The dot `.` represents current directory. Adds all new, modified, and deleted files in the working directory tree to Staging.
- `git commit`: Takes staged files and seals them into a new commit object in `.git/objects/`.
- `-m "Message"`: Inline flag supplying the commit message without opening an interactive text editor.

## 👀 Terminal Output

```bash
$ git commit -m "Implement user authentication login layout"
[main a1b2c3d] Implement user authentication login layout
 2 files changed, 2 insertions(+)
 create mode 100644 auth.css
 create mode 100644 auth.js
```

## ⚠️ Common Mistakes

- **Vague Commit Messages:** Writing meaningless messages like `"fixed"`, `"asdf"`, `"wip"`, or `"changes"`. A good commit message explains WHAT was done and WHY.
- **Committing Sensitive Secrets:** Staging files containing passwords, API keys, or `.env` files into commits. Once committed, secrets remain in Git history even if deleted in later commits!
- **Huge Monolithic Commits:** Grouping 10 completely unrelated features or bug fixes into a single massive commit instead of making small, atomic commits.

## 🛡️ Best Practices for Commit Messages

1. **Keep Summary Line Under 50 Characters.**
2. **Use Imperative Mood:** Write `"Fix header bug"` instead of `"Fixed header bug"` or `"Fixes header bug"`.
3. **Commit Atomic Changes:** One logical task per commit.

## 🌍 Real-World Usage

Professional software teams require atomic commits with clear messages so team members can review code changes easily in Pull Requests.

## 🧪 Try It Yourself

1. Inside your `git-practice` folder, create a file named `README.md` containing `# My Practice Project`.
2. Stage `README.md` using `git add README.md`.
3. Commit `README.md` using `git commit -m "Add project README file"`.

## 🎯 Mini Challenge

Edit `README.md` to add a second line `Author: Your Name`. Run `git status`, stage the modified file, and commit it with message `"Update README author details"`.

## 🔗 Related Topics

- [Git File States & Lifecycle](05-git-file-states-and-lifecycle.md)
- [Viewing History](07-viewing-history-and-git-log.md)
- [Ignoring Files](08-ignoring-files-with-gitignore.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: File States](05-git-file-states-and-lifecycle.md) | [Next: Viewing History →](07-viewing-history-and-git-log.md)
