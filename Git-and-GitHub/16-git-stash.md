# Git Stash (`git stash`)

> 🟡 Intermediate

## 📖 Definition

**`git stash`** is a command used to temporarily shelve (save aside) uncommitted local modifications in your Working Directory and Staging Area into a temporary clipboard stack, clearing your working directory so you can switch branches or pull emergency hotfixes without making half-finished commits.

## 🌐 Multilingual Explanation

### English
`git stash` takes uncommitted changes and saves them on a temporary storage stack, returning your working directory to a clean `HEAD` state. Running `git stash pop` re-applies the stashed changes back onto your working directory and removes them from the stash stack. `git stash apply` re-applies changes while keeping them on the stack.

### Hindi
`git stash` aapke adhoore (uncommitted) code ko temporary clipboard par save karke aapki Working Directory ko ekdum clean kar deta hai. Isse aap emergency mein doosri branch par switch kar sakte hain. Wapas aakar `git stash pop` chalane se aapka adhoora code wapas aa jata hai.

### Marathi
`git stash` dware ardhvat zalela code temporary bajula sathavla jato aani Working Directory clean hote. Emergency madhye dusrya branch var jaanyasathi ha vaparla jato. Kaam zalya var `git stash pop` karun toch ardhvat code parat aanta yeto.

### Hinglish
Jab aap adhoore feature par kaam kar rahe hon aur achanak boss kahe *"Urgent hotfix main branch par karo"*, toh bina half-baked commit kiye `git stash` chalaayein. Project clean ho jayega. Hotfix complete hone ke baad `git stash pop` karke purana adhoora kaam waapas le aayein.

## 🤔 Why Do We Use It?

Git prevents switching branches if you have uncommitted modifications that conflict with the destination branch. `git stash` lets you store uncommitted work safely without polluting commit history with temporary "wip" commits.

## 🧠 Simple Explanation

Think of `git stash` like a drawer next to your desk:
- You are halfway through assembling a complex Lego set on your desk (**Uncommitted Edits**).
- Someone needs to use your desk immediately for an emergency meeting (**Switch Branch**).
- You sweep all Lego pieces into the drawer (**`git stash`**), clearing the desk.
- Once the meeting finishes, you open the drawer and place all Lego pieces back on the desk (**`git stash pop`**).

## 📝 Key `git stash` Commands

```bash
# 1. Stash current uncommitted changes (tracked files)
git stash

# 2. Stash with a custom descriptive message (RECOMMENDED)
git stash push -m "Half-finished login validation logic"

# 3. Include untracked new files in the stash
git stash -u

# 4. List all saved stashes in the clipboard stack
git stash list

# 5. Apply most recent stash AND remove it from stash stack
git stash pop

# 6. Apply most recent stash WITHOUT removing it from stash stack
git stash apply

# 7. Apply a specific stash from list (e.g. stash@{1})
git stash apply stash@{1}

# 8. Delete a specific stash
git stash drop stash@{0}

# 9. Clear ALL stashes in clipboard permanently
git stash clear
```

## 💡 Practical Example

Step-by-step emergency hotfix workflow using `git stash`:

```bash
# 1. Working on feature branch with uncommitted edits
git switch feature-payment
echo "half finished payment code" >> payment.js

# 2. Urgent request comes in! Stash uncommitted work
git stash push -m "WIP payment gateway implementation"

# 3. Switch to main branch and fix urgent bug
git switch main
echo "bug fix" >> index.html
git commit -am "Fix urgent homepage header typo"

# 4. Switch back to feature branch and restore stashed work
git switch feature-payment
git stash pop
```

## 🔍 Command Breakdown

- `git stash push -m "msg"`: Stores changes into `.git/refs/stash` stack with an index tag (`stash@{0}`, `stash@{1}`).
- `git stash pop`: Re-applies `stash@{0}` changes and executes `git stash drop stash@{0}` automatically.

## 👀 Terminal Output

```bash
$ git stash push -m "WIP payment gateway"
Saved working directory and index state WIP on feature-payment: WIP payment gateway

$ git stash list
stash@{0}: On feature-payment: WIP payment gateway
stash@{1}: On main: Unfinished footer styling

$ git stash pop
On branch feature-payment
Changes not staged for commit:
        modified:   payment.js
Dropped refs/stash@{0} (1a2b3c4d...)
```

## ⚠️ Common Mistakes

- **Forgetting Stashed Work Exists:** Stashing changes, working for weeks, and forgetting those stashes exist in `git stash list`.
- **Applying Stash on Wrong Branch:** Running `git stash pop` while accidentally standing on a different branch, causing unexpected merge conflicts!

## 🛡️ Safety / Important Notes

- Plain `git stash` ONLY stashes *tracked* modified files by default. To include brand-new *untracked* files, always use `git stash -u` (or `--include-untracked`).

## 🌍 Real-World Usage

Developers use `git stash` multiple times daily when context-switching between code reviews, bug fixes, and feature development.

## 🧪 Try It Yourself

1. Edit `README.md` in your `git-practice` repo without staging or committing.
2. Run `git stash push -m "Test stash"`.
3. Verify with `git status` that your working tree is clean.
4. Run `git stash pop` and notice your edits return to `README.md`.

## 🎯 Mini Challenge

Run `git stash list` after popping your stash and confirm that `stash@{0}` was automatically dropped from the list.

## 🔗 Related Topics

- [Undoing Local Changes with Git Restore](10-undoing-changes-and-git-restore.md)
- [Branching Basics](12-branching-basics.md)
- [Git Rebase](15-git-rebase.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: Rebase](15-git-rebase.md) | [Next: Remote Repositories →](17-remote-repositories-and-remotes.md)
