# Git File States & The 3 Trees

> 🟢 Beginner

## 📖 Definition

Git manages files through **Three Architectural Areas** (The Working Directory, The Staging Area, and The Commit Repository) and categorizes files into **Four Distinct Lifecycle States** (Untracked, Unmodified, Modified, and Staged).

## 🌐 Multilingual Explanation

### English
Git operates across 3 areas: Working Directory (where you edit files), Staging Area (Index where you prepare snapshots), and Repository (Database storing permanent commits). Files transition through 4 states: Untracked (new file), Unmodified (matches last commit), Modified (edited since last commit), and Staged (marked for next commit).

### Hindi
Git 3 areas par kaam karta hai: Working Directory (jahan aap code edit karte hain), Staging Area (jahan aap snapshot prepare karte hain), aur Repository (jahan permanent commits save hote hain). Files 4 states se guzarti hain: Untracked (nayee file), Unmodified (pichle commit se same), Modified (edit hui file), aur Staged (commit ke liye ready).

### Marathi
Git madhye 3 areas asatat: Working Directory (jithe aapan code edit karto), Staging Area (jithe commit cha snapshot tayar karto), aani Repository (jithe permanent commits save hotat). Files 4 states madhye asatat: Untracked, Unmodified, Modified, aani Staged.

### Hinglish
Working Directory mein files edit hoti hain. Jab aap `git add` chalate hain, toh files Staging Area mein chali jaati hain. Jab aap `git commit` karte hain, toh changes permanent Repository database mein save ho jaate hain.

## 🤔 Why Do We Use It?

Understanding the 3 areas and 4 file states is essential to mastering Git. The Staging Area acts as a buffer that allows you to carefully assemble granular, organized commits rather than dumping every single changed file on your disk into history at once.

## 🧠 Simple Explanation

Think of shipping a package with online shopping:
1. **Working Directory:** Items sitting on your desk that you are packing or modifying.
2. **Staging Area (Index):** Placing specific items inside the cardboard shipping box before sealing it.
3. **Repository (Commit):** Sealing the box, sticking a tracking label on it, and storing it permanently in the delivery warehouse.

## 📝 The 3 Architectural Areas (Trees)

```text
+---------------------+       git add       +------------------+     git commit     +-------------------+
|  Working Directory  |  ---------------->  |   Staging Area   |  --------------->  | Local Repository  |
| (Sandbox on disk)   |                     |     (Index)      |                    | (.git database)   |
+---------------------+                     +------------------+                    +-------------------+
```

## 🔄 The 4 File Lifecycle States

1. **Untracked:** Brand new files in your working directory that Git has never seen or recorded before.
2. **Unmodified:** Tracked files whose current contents on disk match the latest commit snapshot exactly.
3. **Modified:** Tracked files that have been edited on disk since the last commit, but have NOT yet been staged.
4. **Staged:** Modified or untracked files that have been marked using `git add` to be included in the next commit snapshot.

```text
[Untracked] ──(git add)──> [Staged] ──(git commit)──> [Unmodified]
                                ↑                          │
                                │                      (Edit file)
                                └─────── [Modified] <──────┘
```

## 💡 Practical Example

Here is a terminal walk-through showing file state transitions:

```bash
# 1. Create a new file (State: Untracked)
echo "<h1>Welcome</h1>" > index.html
git status # Shows: Untracked files: index.html

# 2. Stage the file (State: Staged)
git add index.html
git status # Shows: Changes to be committed: new file: index.html

# 3. Commit the file (State: Unmodified)
git commit -m "Add homepage title"
git status # Shows: nothing to commit, working tree clean

# 4. Modify the file (State: Modified)
echo "<p>Paragraph text</p>" >> index.html
git status # Shows: Changes not staged for commit: modified: index.html
```

## 🔍 Command Breakdown

- `git status`: The primary inspection command displaying active file states across Working Directory and Staging Area.
- `echo "text" > file`: Terminal command writing text into a file.
- `echo "text" >> file`: Terminal command appending text to an existing file.

## 👀 Terminal Output

```bash
$ git status
On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        style.css
```

## ⚠️ Common Mistakes

- **Forgetting to Stage Before Committing:** Running `git commit` without running `git add` first. Git will report `nothing added to commit but untracked files present`.
- **Assuming Edited Files Auto-Stage:** Modifying a file AFTER running `git add`. The edits made AFTER `git add` will remain in the *Modified* state, while the earlier version remains in the *Staged* state!

## 🛡️ Safety / Important Notes

- Only files in the **Staged** area will be saved into the next commit snapshot when you execute `git commit`.
- Files in the *Untracked* state can be permanently deleted by system cleanups if not committed.

## 🌍 Real-World Usage

Software engineers use the Staging Area to organize clean, logical commits — staging security fixes in one commit and feature additions in a separate commit even if both were edited in the same coding session.

## 🧪 Try It Yourself

1. Inside your `git-practice` folder, create a file named `app.js`.
2. Run `git status` and observe that `app.js` is Untracked.
3. Run `git add app.js` and run `git status` again. Notice that `app.js` is now Staged.

## 🎯 Mini Challenge

Commit `app.js` with message `"Add app entry file"`. Then open `app.js`, add `console.log("Hello");`, save it, and run `git status`. Identify which file state `app.js` is currently in.

## 🔗 Related Topics

- [Initializing a Repository](04-initializing-a-repository.md)
- [Staging & Committing](06-staging-and-committing.md)
- [Viewing History](07-viewing-history-and-git-log.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: Init](04-initializing-a-repository.md) | [Next: Staging & Committing →](06-staging-and-committing.md)
