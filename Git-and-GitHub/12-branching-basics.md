# Branching Basics (`git branch`, `git switch`)

> 🟢 Beginner

## 📖 Definition

A **Branch** in Git is a lightweight, moveable pointer to a specific commit. **Branching** enables developers to diverge from the main line of development to work on new features, bug fixes, or experiments in complete isolation without affecting the stable `main` codebase.

## 🌐 Multilingual Explanation

### English
Branches isolate development environments. In Git, a branch is merely a 41-byte file containing a commit hash. Use `git branch <name>` to create a branch, `git switch <name>` (or `git checkout <name>`) to switch branches, and `git switch -c <name>` to create and switch in a single command.

### Hindi
Branching se aap stable code (`main`) ko bina disturb kiye nayee features par alag kaam kar sakte hain. Git mein branch ek chota pointer hota hai. Nayi branch banane aur uspar switch karne ke liye `git switch -c branch-name` command use karein.

### Marathi
Branching mulhe mukhya stable code (`main`) safe rahto aani aapan navin feature var veglach kaam karu shakto. Navin branch tayar karun tya var jaanyasathi `git switch -c branch-name` vaparale jaate.

### Hinglish
Production code `main` branch par rehta hai. New feature banane ke liye `git switch -c feature-login` se nayee branch banayein. Jab tak aap new branch par kaam kar rahe hain, `main` branch billkul safe aur unchanged rehti hai.

## 🤔 Why Do We Use It?

Imagine 5 developers working on the same codebase simultaneously without branches. Every untested change or broken code edit would instantly break the application for everyone else! Branching isolates every developer's work.

## 🧠 Simple Explanation

Think of Git branching like parallel dimensions in a sci-fi movie:
- The **`main` timeline** is the real world where everything works stably.
- You open a portal (**Create Branch `feature-login`**) into an alternate dimension where you build a new login portal.
- Once the login portal works perfectly, you collapse the dimensions together (**Merge**). If it fails, you destroy the alternate timeline (**Delete Branch**) without harming the real world!

## 📝 Key Branching Commands

```bash
# 1. List all local branches (Active branch marked with *)
git branch

# 2. Create a new branch named 'feature-payment' (Does NOT switch automatically)
git branch feature-payment

# 3. Switch to an existing branch (Modern Git 2.23+ syntax)
git switch feature-payment

# 4. Create AND switch to a new branch in one single step (RECOMMENDED)
git switch -c feature-user-profile

# Legacy equivalence: git checkout -b feature-user-profile

# 5. Rename current active branch
git branch -m feature-profile

# 6. Delete a branch safely (Only if merged)
git branch -d feature-profile

# 7. Force delete an unmerged branch
git branch -D experimental-failed-test
```

## 💡 Practical Example

Step-by-step workflow creating and working on a feature branch:

```bash
# 1. Verify you are on main branch
git switch main

# 2. Create and switch to new feature branch
git switch -c feature-dark-mode

# 3. Add feature files and commit on new branch
echo "body { background: #111; }" > dark.css
git add dark.css
git commit -m "Add dark theme stylesheet"

# 4. Switch back to main branch (dark.css disappears from working directory!)
git switch main
```

## 🔍 Command Breakdown

- `git switch <branch>`: Safely updates Working Directory files to match target branch HEAD commit and moves `HEAD` pointer.
- `-c <branch>`: Stands for "create" — creates new branch before switching.

## 👀 Terminal Output

```bash
$ git branch
* feature-dark-mode
  main

$ git switch main
Switched to branch 'main'
```

## ⚠️ Common Mistakes

- **Committing on the Wrong Branch:** Forgetting to run `git switch -c new-feature` before making edits, accidentally committing experimental code directly onto `main` branch!
- **Dirty Working Directory Switch Warning:** Trying to switch branches while having uncommitted modified files in your Working Directory that conflict with the target branch.
  - *Fix:* Commit your changes first, or stash them using `git stash` before switching!

## 🛡️ Safety / Important Notes

- Creating a branch in Git takes 1 millisecond regardless of repository size because Git only writes a 41-byte text file containing a 40-character commit hash!
- Always switch back to `main` and pull the latest code before creating new feature branches.

## 🌍 Real-World Usage

Software teams enforce Branch Protection Rules on GitHub so developers cannot commit directly to `main`. All work must occur on feature branches and be merged via Pull Requests.

## 🧪 Try It Yourself

1. Inside your `git-practice` repo, run `git branch` and verify `main` is active.
2. Create and switch to a branch named `feature-signup` using `git switch -c feature-signup`.
3. Create a file `signup.html`, stage, and commit it.
4. Switch back to `main` using `git switch main` and notice that `signup.html` is not present in `main`!

## 🎯 Mini Challenge

Switch back to `feature-signup` using `git switch feature-signup` and verify with `ls` or `dir` that `signup.html` reappears instantly.

## 🔗 Related Topics

- [Merging Branches](13-merging-branches.md)
- [Handling Merge Conflicts](14-handling-merge-conflicts.md)
- [Git Rebase](15-git-rebase.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: Reset & Revert](11-git-reset-and-git-revert.md) | [Next: Merging Branches →](13-merging-branches.md)
