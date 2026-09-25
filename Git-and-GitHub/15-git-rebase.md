# Git Rebase (`git rebase`)

> 🔴 Advanced

## 📖 Definition

**`git rebase`** is an advanced Git command that takes all commits from a feature branch and re-applies them one by one on top of another base branch's latest commit, creating a clean, completely linear commit history without merge commits.

## 🌐 Multilingual Explanation

### English
`git rebase` rewrites commit history by changing the base commit of your current branch. While `git merge` creates a 3-way merge commit preserving true historical timelines, `git rebase` moves your feature commits to sit on top of `main`'s latest commit. Interactive rebase (`git rebase -i`) allows squashing multiple small commits into a single clean commit.

### Hindi
`git rebase` aapki branch ke commits ko `main` branch ke sabse naye commit ke upar re-apply karta hai. Isse commit history ekdum linear (straight line) ban jaati hai aur extra merge commit nahi banta. Interactive rebase (`git rebase -i`) se aap chhote commits ko combine (squash) kar sakte hain.

### Marathi
`git rebase` mule commit history kuthlihi phat nasleli ekas-ek (linear) bante. `git merge` madhye extra merge commit tayar hoto, parantu `git rebase` madhye feature commits `main` chya sarvat shevatchya commit var jaun bastat.

### Hinglish
`git merge` history ko branch graph mein preserve karta hai, jabki `git rebase` history ko rewrite karke linear line bana deta hai. Local feature branch par kaam khatam hone par multiple "wip" commits ko ek clean commit mein combine karne ke liye Interactive Rebase (`git rebase -i`) use karte hain.

## 🤔 Why Do We Use It?

In large teams, frequent 3-way merge commits create a tangled "spiderweb" in `git log` graph history. Rebasing creates a clean, straight-line timeline that is much easier to read and audit.

## 🧠 Simple Explanation

Think of rebasing like moving the foundation pillars of a house:
- You built a 2-story room extension (**Feature Commits**) attached to the 1st floor (**Old Main Base**).
- Meanwhile, the main house grew to 3 stories (**New Main Commits**).
- **Rebase** picks up your 2-story extension and places it directly on top of the new 3rd floor roof (**New Base**), making the building a tall single tower.

## 📝 Merge vs Rebase Comparison

```text
BEFORE (Diverged Branch):
[main] ──> C1 ──> C2 ──> C5 [main]
                   └──> C3 ──> C4 [feature]

AFTER GIT MERGE (`git merge feature` on `main`):
[main] ──> C1 ──> C2 ──> C5 ─────────> C6 (Merge Commit) [main]
                   └──> C3 ──> C4 ──────┘

AFTER GIT REBASE (`git rebase main` on `feature`):
[main] ──> C1 ──> C2 ──> C5 ──> C3' ──> C4' [feature]  (Linear History!)
```

## 💡 Key Rebase Commands

### 1. Standard Rebase Workflow
```bash
# 1. Switch to your feature branch
git switch feature-login

# 2. Rebase feature branch on top of updated main
git rebase main

# 3. Switch back to main and fast-forward merge clean feature
git switch main
git merge feature-login
```

### 2. Interactive Rebase (`git rebase -i`)
Allows squashing, editing, rewording, or dropping last N local commits:
```bash
git rebase -i HEAD~3
```

Interactive Todo List Commands in Editor:
- **`pick` (p):** Keep commit as-is.
- **`squash` (s):** Combine commit into previous commit (melts small commits together).
- **`reword` (r):** Keep commit, but edit commit message text.
- **`drop` (d):** Delete commit from history entirely.

## 🔍 Command Breakdown

- `git rebase main`: Calculates diffs of feature branch commits, rewinds feature branch back to split point, and re-applies each commit sequentially onto `main`'s HEAD.
- `git rebase --continue`: Resumes rebasing after resolving a line conflict during rebase step.
- `git rebase --abort`: Cancels rebase and restores original pre-rebase branch state.

## ⚠️ THE GOLDEN RULE OF REBASING

> 🚨 **NEVER REBASE COMMITS THAT HAVE ALREADY BEEN PUSHED TO A PUBLIC / SHARED REMOTE REPOSITORY!**

Rebasing rewrites commit SHA hashes. If you rebase commits that teammates have already pulled onto their machines, you destroy their commit history base, creating massive merge conflict nightmares for your team.

*Rule:* **Rebase local unpushed feature branches only; Never rebase shared public branches!**

## 👀 Terminal Output

```bash
$ git switch feature-login
$ git rebase main
Successfully rebased and updated refs/heads/feature-login.

$ git log --oneline --graph
* c4d3e2f (HEAD -> feature-login) Add login validation
* a1b2c3d Add login form layout
* f9e8d7c (main) Update main dashboard
* 3c2b1a0 Initial commit
```

## 🛡️ Safety / Important Notes

- If a conflict occurs during `git rebase`, Git pauses at the conflicting commit. Resolve the conflict, run `git add <file>`, and then execute `git rebase --continue` (do NOT run `git commit`!).

## 🌍 Real-World Usage

Open-source projects (like Linux Kernel or React) require contributors to rebase their feature PRs against `main` before merging to maintain a clean linear commit graph.

## 🧪 Try It Yourself

1. Create a branch `feature-rebase-demo` in your `git-practice` repo and make 2 small commits.
2. Run `git rebase -i HEAD~2` in your terminal.
3. Change the second commit word from `pick` to `squash` (or `s`), save and close the editor, and observe how Git combines the two commits into one!

## 🎯 Mini Challenge

Run `git log --oneline` after squashing and verify that the two small commits were replaced by a single combined commit.

## 🔗 Related Topics

- [Branching Basics](12-branching-basics.md)
- [Merging Branches](13-merging-branches.md)
- [Handling Merge Conflicts](14-handling-merge-conflicts.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: Conflicts](14-handling-merge-conflicts.md) | [Next: Git Stash →](16-git-stash.md)
