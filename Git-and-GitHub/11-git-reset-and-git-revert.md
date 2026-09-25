# Undoing Commits (`git reset`, `git revert`)

> 🟡 Intermediate

## 📖 Definition

Undoing commits in Git is handled by two distinct commands: **`git reset`** (which rewrites commit history by moving the active `HEAD` pointer backwards) and **`git revert`** (which safely undoes a past commit by creating a brand-new inverse commit without destroying history).

## 🌐 Multilingual Explanation

### English
`git reset` rewrites history by moving `HEAD` to a previous commit. Modes include `--soft` (keeps changes staged), `--mixed` (default, keeps changes unstaged in Working Directory), and `--hard` (discards all changes permanently). `git revert <hash>` is the safe choice for public/shared branches because it creates a new commit that undoes specified past changes without altering historical commits.

### Hindi
`git reset` commit history ko peeche le jata hai. `--soft` changes ko staged rakhta hai, `--mixed` changes ko working directory mein rakhta hai, aur `--hard` sabhi changes ko permanently delete kar deta hai. Public GitHub branches ke liye `git revert` sabse safe hai kyunki yeh history delete kiye bina ek naya inverse commit banata hai.

### Marathi
`git reset` dware commit history maghe ghetli jaate. `--soft` changes staged thevto, `--mixed` working directory madhye thevto, aani `--hard` sarv badal permanently kadhun takto. Remote GitHub branches sathi `git revert` vaparale pahije karan te navin commit tayar karun badal undo karte.

### Hinglish
Unpublished local commits ke liye `git reset` use karein. Public/GitHub branches par kabhi bhi `git reset --hard` na chalayein; wahan `git revert` use karein. `git revert` ek naya commit add karta hai jo purane bug commit ke exact opposite changes apply karta hai.

## 🤔 Why Do We Use Them?

If you committed broken code locally before pushing, `git reset` lets you uncommit and fix it. If a bug was pushed to a shared production branch days ago, `git revert` safely rolls back the bug without disrupting team history.

## 🧠 Simple Explanation

- **`git reset` (Time Machine / Rewrite):** Erasing pages from a history book as if those events never happened. Fine for your personal diary (local branch), but dangerous if others have already read those pages!
- **`git revert` (Correction Notice):** Writing a new page in the history book saying *"The entry on page 10 was incorrect; page 12 cancels out those changes."*

## 📝 Modes & Syntax Comparison

### 1. `git reset` Modes (Local Unpushed Commits Only!)
Moves `HEAD` pointer back by 1 commit (`HEAD~1`) or to a specific SHA hash:

```bash
# Soft Reset: Uncommits, but keeps all changes STAGED in Index
git reset --soft HEAD~1

# Mixed Reset (Default): Uncommits, keeps changes UNSTAGED in Working Directory
git reset --mixed HEAD~1
git reset HEAD~1

# Hard Reset (DANGER!): Uncommits AND wipes out all working directory edits!
git reset --hard HEAD~1
```

### 2. `git revert` (Safe for Shared Remote Branches!)
Creates a new inverse commit undoing specified commit:
```bash
git revert a1b2c3d
```

## 💡 Practical Example

Comparison workflow between `reset` and `revert`:

```bash
# Scenario A: Local Soft Reset
# Undo last commit, keep changes staged to fix commit message or add missing file
git reset --soft HEAD~1
git add missing_file.js
git commit -m "Corrected commit with missing file"

# Scenario B: Safe Public Revert
# Safely undo commit a1b2c3d on shared main branch
git revert a1b2c3d -m "Revert broken authentication payment gateway"
```

## 🔍 Command Breakdown

- `HEAD~1`: Relative notation meaning "1 commit prior to current `HEAD`". (`HEAD~2` = 2 commits back).
- `git revert <hash>`: Opens text editor asking for a commit message for the new reverting commit.

## 👀 Terminal Output

```bash
# Executing git revert:
$ git revert a1b2c3d
[main e5f6g7h] Revert "Add buggy discount calculation"
 1 file changed, 2 deletions(-)

# Notice that git log now shows BOTH original commit AND reverting commit!
```

## ⚠️ Critical Danger Warning

- **NEVER Reset Pushed Public Commits:** Executing `git reset --hard` on commits already pushed to GitHub breaks history for all teammates pulling from origin. This forces chaotic merge conflicts for the entire team.
  - *Golden Rule:* **Reset for Local Unpushed Code; Revert for Shared Pushed Code!**

## 🛡️ Safety / Important Notes

- If you accidentally execute `git reset --hard`, Git stores a safety backup log called **`git reflog`**. You can recover lost commits using `git reflog` within 30 days!

## 🌍 Real-World Usage

DevOps engineers use `git revert` during production incidents to instantly undo breaking deployment commits in main pipelines without rewriting git history.

## 🧪 Try It Yourself

1. In your `git-practice` repo, make a dummy commit: `echo "Test" >> test.txt`, `git add .`, `git commit -m "Dummy commit"`.
2. Run `git log --oneline` and notice your commit.
3. Run `git reset --soft HEAD~1` and run `git status`. Notice `test.txt` is still staged!

## 🎯 Mini Challenge

Commit `test.txt` again. Now run `git revert HEAD` and inspect `git log --oneline` to see the new reverting commit generated by Git.

## 🔗 Related Topics

- [Undoing Local Changes with Git Restore](10-undoing-changes-and-git-restore.md)
- [Branching Basics](12-branching-basics.md)
- [Merging Branches](13-merging-branches.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: Restore](10-undoing-changes-and-git-restore.md) | [Next: Branching Basics →](12-branching-basics.md)
