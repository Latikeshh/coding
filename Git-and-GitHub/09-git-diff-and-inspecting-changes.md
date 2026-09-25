# Inspecting Changes (`git diff`)

> 🟢 Beginner

## 📖 Definition

**`git diff`** is the command used to inspect line-by-line changes made to files across your Working Directory, Staging Area, previous commits, or different branches, displaying additions, deletions, and modifications before committing.

## 🌐 Multilingual Explanation

### English
`git diff` compares file contents line-by-line. Running `git diff` without flags compares your Working Directory changes against the Staging Area. Running `git diff --staged` (or `--cached`) compares your Staging Area against the latest commit snapshot (`HEAD`).

### Hindi
`git diff` command aapke files ke line-by-line badlav (additions/deletions) dikhata hai. Bina flags ke `git diff` run karne par Working Directory aur Staging Area ke beech ka farak dikhta hai. Staged changes check karne ke liye `git diff --staged` run karein.

### Marathi
`git diff` mhanje don files madhil kiva commit madhil badal (changes) pahane. Terminal madhye hirvya (green) rangat navin lines (`+`) aani lal (red) rangat kadhlesha lines (`-`) distat. Staged files pahanyasathi `git diff --staged` vaparatat.

### Hinglish
Commit karne se pehle kya-kya changes huye hain woh dekhne ke liye `git diff` use karo. Green lines (`+`) added code dikhati hain aur Red lines (`-`) deleted code. `git diff --staged` se aap Staging Area ka diff dekh sakte hain.

## 🤔 Why Do We Use It?

Reviewing diffs before staging or committing prevents accidental code deletions, unwanted debug `console.log()` statements, and formatting mistakes from polluting repository history.

## 🧠 Simple Explanation

Think of `git diff` like a Track Changes feature in Microsoft Word or Google Docs. It highlights newly inserted text in green (`+`) and removed text in red (`-`).

## 📝 Key `git diff` Commands & Modes

```bash
# 1. Compare Working Directory vs Staging Area (Unstaged changes)
git diff

# 2. Compare Working Directory for a single specific file
git diff index.html

# 3. Compare Staging Area vs Last Commit HEAD (Staged changes)
git diff --staged

# 4. Compare two specific commits using their SHA hashes
git diff a1b2c3d f9e8d7c

# 5. Compare two branches (e.g. main vs feature branch)
git diff main feature-login

# 6. Show summary list of changed files only (without line diffs)
git diff --stat
```

## 💡 Practical Example

Inspecting code edits in terminal:

```bash
# 1. Edit index.html
echo "<h2>Subheading Added</h2>" >> index.html

# 2. View unstaged diff
git diff
```

## 🔍 Understanding Unified Diff Output Format

```text
diff --git a/index.html b/index.html
index e69de29..b45c21f 100644
--- a/index.html  <-- Original file version in Staging/HEAD
+++ b/index.html  <-- New file version in Working Directory
@@ -1,3 +1,4 @@  <-- Line numbers chunk header (-1,3 lines changed to +1,4 lines)
 <h1>Welcome Page</h1>
 <p>Original text</p>
+<h2>Subheading Added</h2>  <-- Line added (Green +)
```

## 👀 Terminal Output

```text
$ git diff
--- a/README.md
+++ b/README.md
@@ -1 +1,2 @@
 # My Practice Project
+Author: Rahul Sharma
```

## ⚠️ Common Mistakes

- **Blank Output Confusion:** Running `git diff` after executing `git add .` and seeing no output at all!
  - *Reason:* Plain `git diff` ONLY compares Working Directory against Staging Area. Once files are staged, `git diff` returns empty.
  - *Fix:* Use `git diff --staged` to view staged changes!
- **Panic in Diff Pager:** Getting stuck in terminal view when diff output is long. Press **`q`** to exit.

## 🛡️ Safety / Important Notes

- Always run `git diff` or `git diff --staged` before executing `git commit` to ensure your commit message accurately describes the staged changes.

## 🌍 Real-World Usage

Pull Requests on GitHub, GitLab, and Bitbucket use the `git diff` engine to present clean visual side-by-side code reviews to reviewers before merging code into main branches.

## 🧪 Try It Yourself

1. Modify `README.md` in your `git-practice` directory by adding a line at the bottom.
2. Run `git diff` and observe the green `+` additions.
3. Stage `README.md` with `git add README.md` and run `git diff`. Notice it is empty.
4. Run `git diff --staged` and see your changes again.

## 🎯 Mini Challenge

Run `git diff --stat` on a modified file and note down how many insertions (`+`) and deletions (`-`) are summarized.

## 🔗 Related Topics

- [Viewing History](07-viewing-history-and-git-log.md)
- [Undoing Local Changes with Git Restore](10-undoing-changes-and-git-restore.md)
- [Handling Merge Conflicts](14-handling-merge-conflicts.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: Gitignore](08-ignoring-files-with-gitignore.md) | [Next: Undoing Changes →](10-undoing-changes-and-git-restore.md)
