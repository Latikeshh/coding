# Undoing Local Changes (`git restore`)

> 🟢 Beginner

## 📖 Definition

**`git restore`** is a modern Git command (introduced in Git 2.23) designed specifically to discard uncommitted modifications in your Working Directory or unstage files from the Staging Area without altering commit history.

## 🌐 Multilingual Explanation

### English
`git restore` undoes uncommitted changes. Running `git restore filename` discards local edits in your Working Directory, restoring the file to the state of the last commit. Running `git restore --staged filename` removes a file from the Staging Area back to the Working Directory without losing edits.

### Hindi
`git restore` command bina commit kiye huye local badlav ko undo karne ke liye use hoti hai. `git restore filename` chalane se aapke Working Directory ke saare uncommitted edits delete ho jaate hain. Staging Area se file ko bahar nikalne ke liye `git restore --staged filename` run karein.

### Marathi
`git restore` dware uncommitted badal (changes) discard kele jatat. `git restore filename` chalavlyas file madhil chukiche badal nighun jatat aani file pichlya commit sarkhi hote. Staged file la unstage karanyasathi `git restore --staged filename` vaparatat.

### Hinglish
Agar aapne galat code edit kar diya hai aur pichli working version par waapas jaana chahte hain, toh `git restore filename` use karein. Agar aapne galti se `git add .` kar diya hai aur unstage karna chahte hain, toh `git restore --staged filename` run karein.

## 🤔 Why Do We Use It?

Developers frequently experiment with code. If an experimental edit fails or breaks functionality, `git restore` provides a 1-second reset button to throw away bad edits cleanly.

## 🧠 Simple Explanation

Think of `git restore` like the **`Ctrl + Z` (Undo)** key in a text editor:
- **`git restore file`:** Reverts the file on disk back to the last saved checkpoint (last commit).
- **`git restore --staged file`:** Takes a file out of the shipping box (Staging Area) and puts it back on the desk (Working Directory).

## 📝 Key `git restore` Commands

```bash
# 1. Discard local unstaged edits in Working Directory for a specific file
git restore index.html

# 2. Discard local unstaged edits for ALL files in current directory
git restore .

# 3. Unstage a file from Staging Area back to Working Directory (Preserves edits!)
git restore --staged index.html

# 4. Restore a file's state from a specific past commit SHA
git restore --source=a1b2c3d index.html
```

## 💡 Practical Example

Here is a step-by-step terminal demonstration of restoring files:

```bash
# Scenario A: Discarding Bad Edits
echo "Bad experimental code" >> app.js
git status # Shows: modified: app.js

# Discard the bad edits instantly
git restore app.js
git status # Shows: working tree clean! (Edits discarded)

# Scenario B: Unstaging an Accidentally Staged File
echo "Valid code" >> app.js
git add app.js
git status # Shows: Changes to be committed: modified: app.js

# Unstage app.js back to Working Directory
git restore --staged app.js
git status # Shows: Changes not staged for commit: modified: app.js
```

## 🔍 Command Breakdown

- `git restore <file>`: Target file whose Working Directory modifications will be overwritten by HEAD commit state.
- `--staged`: Flag specifying that the target area is the Index/Staging Area rather than the Working Directory.
- `--source=<commit>`: Flag specifying an alternate commit snapshot to pull the file version from.

## 👀 Terminal Output

```bash
$ git restore app.js
$ git status
On branch main
nothing to commit, working tree clean
```

## ⚠️ Common Mistakes & Danger Warning

- **DANGER — Permanent Data Loss:** Executing `git restore filename` on an UNCOMMITTED file permanently overwrites your disk changes! Uncommitted discarded changes CANNOT be recovered using Git history because they were never committed to the database!
- **Confusing `git restore` and Legacy `git checkout`:** Prior to Git 2.23, `git checkout -- filename` was used for restoring files. `git restore` was created to separate file restoration from branch switching (`git switch`).

## 🛡️ Safety / Important Notes

- Always run `git diff` BEFORE executing `git restore` so you know exactly what edits you are about to discard permanently.
- `git restore --staged` is 100% safe because it only unstages changes without deleting your actual code edits from disk.

## 🌍 Real-World Usage

Developers run `git restore` daily to clean up local debug statements, undo failed experimental refactoring, and unstage unwanted configuration files before committing clean code PRs.

## 🧪 Try It Yourself

1. Edit `README.md` in your `git-practice` directory with random garbage text.
2. Run `git status` and verify it is modified.
3. Run `git restore README.md` and open `README.md`. Notice that the garbage text is completely gone!

## 🎯 Mini Challenge

Modify `README.md`, stage it with `git add README.md`, and then use `git restore --staged README.md` to unstage it. Verify with `git status` that your edits are preserved in the Working Directory.

## 🔗 Related Topics

- [Git Diff & Inspecting Changes](09-git-diff-and-inspecting-changes.md)
- [Undoing Commits with Git Reset & Revert](11-git-reset-and-git-revert.md)
- [Git Stash](16-git-stash.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: Git Diff](09-git-diff-and-inspecting-changes.md) | [Next: Reset & Revert →](11-git-reset-and-git-revert.md)
