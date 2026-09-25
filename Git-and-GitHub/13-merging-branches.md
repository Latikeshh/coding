# Merging Branches (`git merge`)

> 🟡 Intermediate

## 📖 Definition

**`git merge`** is the command used to integrate independent commit histories from a source branch (e.g. `feature-login`) into a target branch (e.g. `main`), combining code modifications into a single unified timeline.

## 🌐 Multilingual Explanation

### English
`git merge` joins two branch histories. To merge `feature` into `main`, you must first switch to `main` (`git switch main`) and then execute `git merge feature`. If `main` has no new commits since the branch split, Git performs a **Fast-Forward Merge** (simply moving the branch pointer). If both branches have diverged, Git performs a **3-Way Merge** and generates an automatic **Merge Commit**.

### Hindi
Feature branch ka kaam poora hone par use `main` branch mein milane ke liye `git merge` ka use hota hai. Pehle target branch (`main`) par switch karein (`git switch main`), phir `git merge feature-name` run karein. Agar donon branches mein alag-alag commits huye hain toh Git ek 3-Way Merge Commit banata hai.

### Marathi
Feature branch madhil kaam `main` branch madhye aannyasathi `git merge` vaparatat. Pehle `git switch main` karun `main` branch var jaave, mag `git merge feature-name` command chalvavi.

### Hinglish
`feature` branch se code `main` branch mein combine karne ke liye `git merge` use hota hai. Rule simple hai: **Hamesha us branch par khade hokar merge command chalayein jisme code AANA chahiye.** (e.g., `main` branch par jaakar `git merge feature` run karein).

## 🤔 Why Do We Use It?

Branching isolates development, but completed features must eventually be published to the main production codebase so users can access the new functionality. Merging brings those changes together.

## 🧠 Simple Explanation

Think of merging like two streams of a river joining together:
- `main` is the primary river stream.
- `feature` is a side canal that split off to collect new water.
- At the end of the feature project, the canal flows back into the primary river (**Merge**), making the river fuller and complete.

## 📝 The 2 Primary Merge Types

### 1. Fast-Forward Merge
Occurs when the `main` branch has received NO new commits since the `feature` branch split off. Git simply moves the `main` branch pointer forward to match the `feature` commit. No extra merge commit is created.

```text
Before Merge:
[main] ──> C1 ──> C2
                   └──> C3 ──> C4 [feature]

After Fast-Forward Merge (`git merge feature` on `main`):
[main] ──> C1 ──> C2 ──> C3 ──> C4 [feature]
```

### 2. 3-Way Merge
Occurs when BOTH `main` and `feature` have received independent commits since splitting (diverged history). Git compares the common ancestor commit, `main`'s latest commit, and `feature`'s latest commit, generating a special **Merge Commit** with two parent commits.

```text
Before Merge:
[main] ──> C1 ──> C2 ──> C5 [main]
                   └──> C3 ──> C4 [feature]

After 3-Way Merge:
[main] ──> C1 ──> C2 ──> C5 ─────────> C6 (Merge Commit) [main]
                   └──> C3 ──> C4 ──────┘
```

## 💡 Practical Example

Complete step-by-step terminal merging workflow:

```bash
# 1. Switch to destination branch (main)
git switch main

# 2. Ensure main is up to date
git pull origin main

# 3. Execute merge from feature branch
git merge feature-dark-mode

# 4. (Optional) Delete feature branch after successful merge
git branch -d feature-dark-mode
```

## 🔍 Command Breakdown

- `git switch main`: Ensures you are standing on the receiving branch.
- `git merge feature-dark-mode`: Pulls changes FROM `feature-dark-mode` INTO current active branch `main`.
- `--no-ff`: Flag forcing Git to create a 3-Way Merge Commit even if a Fast-Forward merge is possible (preserves visual feature history).

## 👀 Terminal Output

```bash
# Fast-Forward Output:
$ git merge feature-dark-mode
Updating a1b2c3d..e5f6g7h
Fast-forward
 dark.css | 5 +++++
 1 file changed, 5 insertions(+)
 create mode 100644 dark.css
```

## ⚠️ Common Mistakes

- **Merging from Wrong Direction:** Standing on `feature` branch and running `git merge main` when you intended to merge `feature` into `main`! Always verify active branch with `git branch` before merging.
- **Panic on Merge Conflicts:** Getting scared when text conflicts occur. (Merge conflicts are normal and covered in the next lesson!).

## 🛡️ Safety / Important Notes

- If a 3-way merge is initiated and you want to cancel it safely before committing:
  ```bash
  git merge --abort
  ```

## 🌍 Real-World Usage

GitHub Pull Requests execute `git merge` automatically when an engineering lead clicks the green **"Merge Pull Request"** button on the GitHub website interface.

## 🧪 Try It Yourself

1. In your `git-practice` repo, switch to `main` using `git switch main`.
2. Merge your earlier `feature-signup` branch by running `git merge feature-signup`.
3. Observe whether Git performed a Fast-Forward merge or 3-Way merge.

## 🎯 Mini Challenge

Run `git log --oneline --graph --all` after merging to visually inspect how the commit history nodes connected together.

## 🔗 Related Topics

- [Branching Basics](12-branching-basics.md)
- [Handling Merge Conflicts](14-handling-merge-conflicts.md)
- [Git Rebase](15-git-rebase.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: Branching](12-branching-basics.md) | [Next: Merge Conflicts →](14-handling-merge-conflicts.md)
