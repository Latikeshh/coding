# Handling Merge Conflicts Step-by-Step

> 🟡 Intermediate

## 📖 Definition

A **Merge Conflict** is an event in Git that occurs when merging two branches that contain competing, overlapping modifications to the **exact same line(s)** of a file, or when one branch modified a file that another branch deleted. Git pauses the merge automatically and requests human intervention to resolve the conflict.

## 🌐 Multilingual Explanation

### English
Merge conflicts occur when two branches modify the same line in a file differently. Git pauses the merge and inserts conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) directly into the file. To resolve: edit the file to choose the correct code, remove conflict markers, stage the resolved file (`git add`), and complete the merge with `git commit`.

### Hindi
Merge conflict tab hota hai jab do branches mein ek hi file ki same line ko alag-alag tarike se edit kiya gaya ho. Git automatic merge rok deta hai aur file mein Conflict Markers (`<<<<<<<`, `=======`, `>>>>>>>`) add kar deta hai. Resolve karne ke liye: file edit karke correct code dekhein, markers hatayein, `git add` karein, aur `git commit` run karein.

### Marathi
Mazi don branches madhye ekach file chya tya line var vegvegale badal aslyas Merge Conflict yeto. Git automatic merge thambavto. Developer ne file ughadun yogya code thevava, conflict markers kadhave, `git add` karun `git commit` kareve.

### Hinglish
Merge conflict se darna nahi hai, yeh Git ka normal feature hai. Jab do log ek hi line change karte hain, toh Git puchta hai: *"Aapko kiska code rakhna hai?"*. File open karke final code select karein, conflict markers delete karein, `git add .` karein aur `git commit` se resolve complete karein.

## 🤔 Why Do We Use It?

Git is smart, but it cannot read human minds. If Alice changes line 10 to `color: blue` and Bob changes line 10 to `color: red`, Git refuses to guess which color is correct and asks the human developer to decide.

## 🧠 Simple Explanation

Think of a merge conflict like two co-authors editing a printed book draft:
- Co-author A writes *"The sky was blue"* on page 5.
- Co-author B writes *"The sky was dark grey"* on page 5.
- The editor (Git) flags page 5 with sticky notes asking: *"Which sentence should stay in the published book?"*.

## 📝 Conflict Markers Syntax Explained

When Git encounters a conflict, it modifies the file on disk by inserting Conflict Markers:

```text
<<<<<<< HEAD (Current Branch - e.g. main)
color: blue;
=======
color: red;
>>>>>>> feature-theme (Incoming Branch)
```

- **`<<<<<<< HEAD`:** Marks the beginning of the conflicting code from your CURRENT active branch.
- **`=======`:** The separator dividing current branch code from incoming branch code.
- **`>>>>>>> branch-name`:** Marks the end of conflicting code from the INCOMING branch being merged.

## 💡 Step-by-Step Practical Conflict Resolution

### Step 1: Identify Conflicted Files
Run `git status` to list all files in "Unmerged paths":

```bash
git status
# Shows: Both modified: style.css
```

### Step 2: Open and Edit the File
Open `style.css` in VS Code or any text editor. Modern editors like VS Code display 1-click resolution buttons above the conflict:
- **Accept Current Change** (Keeps `color: blue;`)
- **Accept Incoming Change** (Keeps `color: red;`)
- **Accept Both Changes** (Keeps both lines)

Or manually edit the text to your desired final code and **delete all `<<<<<<<`, `=======`, and `>>>>>>>` lines** completely!

### Step 3: Stage the Resolved File
Tell Git the conflict has been resolved:

```bash
git add style.css
```

### Step 4: Finalize the Merge Commit
Execute commit without `-m` message flag (Git auto-generates a merge resolution message):

```bash
git commit
```

## 🔍 Canceling a Conflicted Merge Safely

If you get overwhelmed during a complex merge conflict and want to abort completely, returning your repository to the clean state before the merge attempt:

```bash
git merge --abort
```

## 👀 Terminal Output

```bash
$ git merge feature-theme
Auto-merging style.css
CONFLICT (content): Merge conflict in style.css
Automatic merge failed; fix conflicts and then commit the result.

# After editing style.css, staging, and committing:
$ git add style.css
$ git commit -m "Merge branch 'feature-theme' resolving CSS color conflict"
[main c9d8e7f] Merge branch 'feature-theme' resolving CSS color conflict
```

## ⚠️ Common Mistakes

- **Committing With Conflict Markers Remaining:** Leaving `<<<<<<< HEAD` or `=======` inside your code files and committing them! This causes severe syntax errors in your application runtime. Always search files for `<<<<<<<` before staging!
- **Panicking and Deleting Files:** Deleting conflicted files from disk instead of resolving the line edits or using `git merge --abort`.

## 🛡️ Safety / Important Notes

- Always run your application tests (`npm test`, `pytest`, build commands) AFTER resolving conflicts and BEFORE committing to ensure the combined code runs cleanly without bugs.

## 🌍 Real-World Usage

Handling merge conflicts is a daily routine for professional software developers working on active engineering teams with dozens of daily feature branches.

## 🧪 Try It Yourself

1. In your `git-practice` repo on `main` branch, edit `README.md` line 1 to `# Main Title`, stage and commit.
2. Create and switch to `feature-conflict` branch: `git switch -c feature-conflict`.
3. Edit `README.md` line 1 to `# Conflict Title`, stage and commit.
4. Switch back to `main`: `git switch main`.
5. Edit `README.md` line 1 to `# Different Main Title`, stage and commit.
6. Run `git merge feature-conflict` to trigger a deliberate merge conflict!

## 🎯 Mini Challenge

Open `README.md`, resolve the conflict manually, remove all conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`), stage with `git add README.md`, and complete the commit using `git commit`.

## 🔗 Related Topics

- [Merging Branches](13-merging-branches.md)
- [Git Rebase](15-git-rebase.md)
- [Git Stash](16-git-stash.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: Merging](13-merging-branches.md) | [Next: Git Rebase →](15-git-rebase.md)
