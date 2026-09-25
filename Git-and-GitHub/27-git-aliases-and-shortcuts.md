# Terminal Productivity & Git Aliases

> 🟡 Intermediate

## 📖 Definition

**Git Aliases** are custom keyboard shortcuts and command abbreviations configured inside your Git configuration (`git config`) that replace long, complex, or frequently typed Git commands with short, memorable commands.

## 🌐 Multilingual Explanation

### English
Git Aliases increase terminal productivity by creating shortcuts for multi-word Git commands. For example, setting `alias.st "status"` allows typing `git st` instead of `git status`. Advanced aliases can encapsulate long formatting strings for custom visual `git log` graphs.

### Hindi
Git Aliases aapke terminal productivity ko fast karte hain. Aap lambe Git commands ke liye chhote shortcuts (jaise `git status` ke liye `git st`, `git commit` ke liye `git ci`) bana sakte hain. Custom aliases `.gitconfig` file mein save hote hain.

### Marathi
Git Aliases dware lamb commands sathi chote shortcuts tayar karta yetat. Jasakhi `git status` sathi `git st` kiva `git checkout` sathi `git co`. Ya mule terminal madhye fast kaam karta yete.

### Hinglish
Har baar `git log --oneline --graph --all` Type karne se pareshan hone ke bajaye ek short alias `git lg` configure karein. Keyboard typing speed badhane aur time save karne ke liye aliases professional developers ka secret tool hain.

## 🤔 Why Do We Use Them?

Software developers execute dozens of Git commands every hour. Typing long commands repeatedly wastes time and increases typographical errors. Shortcuts streamline terminal workflows.

## 🧠 Simple Explanation

Think of Git Aliases like speed-dial contacts on your phone:
- Instead of manually dialing a 10-digit number (`git log --oneline --graph --all`), you press Speed Dial `1` (**`git lg`**), and your phone executes the full call instantly!

## 📝 Top Recommended Developer Aliases

### 1. Basic Command Shortcuts
```bash
# Shortcut for 'git status'
git config --global alias.st "status -s"

# Shortcut for 'git checkout' / 'git switch'
git config --global alias.co "checkout"
git config --global alias.sw "switch"

# Shortcut for 'git branch'
git config --global alias.br "branch"

# Shortcut for 'git commit'
git config --global alias.ci "commit"
```

### 2. Advanced Workflow Shortcuts
```bash
# Shortcut to unstage files cleanly
git config --global alias.unstage "restore --staged"

# Shortcut to view details of the last commit
git config --global alias.last "log -1 HEAD"

# Shortcut to view pretty colorized visual commit tree
git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
```

## 💡 Practical Example

Here is a terminal session using custom aliases:

```bash
# Using 'git st' instead of 'git status'
git st

# Using custom 'git lg' tree viewer
git lg

# Using 'git unstage' to unstage index.html
git unstage index.html
```

## 🔍 Under the Hood: The `~/.gitconfig` File

Configured aliases are stored directly in your global `~/.gitconfig` text file under the `[alias]` section:

```ini
# Contents of ~/.gitconfig:
[user]
    name = Rahul Sharma
    email = rahul@example.com

[alias]
    st = status -s
    co = checkout
    sw = switch
    br = branch
    ci = commit
    unstage = restore --staged
    last = log -1 HEAD
    lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
```

## 👀 Terminal Output

```bash
$ git lg
* a1b2c3d - (HEAD -> main, origin/main) Add user login (2 hours ago) <Rahul Sharma>
* f9e8d7c - Initial repository commit (1 day ago) <Rahul Sharma>
```

## ⚠️ Common Mistakes

- **Overwriting Built-in Git Commands:** Trying to create an alias with the same name as a built-in Git command (e.g. `git config --global alias.status "log"`). Git refuses to overwrite built-in command names.
- **Forgetting Quotes in Complex Aliases:** Omitting quotes when defining multi-word aliases containing spaces or flags.

## 🛡️ Safety / Important Notes

- To remove a global alias:
  ```bash
  git config --global --unset alias.st
  ```

## 🌍 Real-World Usage

Professional developers maintain personal dotfile repositories containing customized `.gitconfig` aliases that they sync across all their development laptops.

## 🧪 Try It Yourself

1. Set up a global shortcut for `git status`:
   `git config --global alias.st "status"`
2. Run `git st` in your terminal and verify that it executes `git status` output cleanly!

## 🎯 Mini Challenge

Set up the custom `git lg` alias in your terminal using the command provided in this lesson, and run `git lg` in your `git-practice` repo to enjoy your new beautiful colorized tree view!

## 🔗 Related Topics

- [Git Configuration](03-git-configuration.md)
- [Viewing History](07-viewing-history-and-git-log.md)
- [Industry Workflows](28-git-workflows-gitflow-and-trunk-based.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: GitHub Actions](26-github-actions-and-ci-cd-basics.md) | [Next: Git Workflows →](28-git-workflows-gitflow-and-trunk-based.md)
