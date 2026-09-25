# Git Configuration (`git config`)

> 🟢 Beginner

## 📖 Definition

**`git config`** is the command used to customize Git's behavior, user identity settings, default editor preferences, line-ending conversions, and branch naming conventions across your entire system or for a specific repository.

## 🌐 Multilingual Explanation

### English
Before making commits, you must configure your user identity (`user.name` and `user.email`). Git attaches this author metadata to every commit you make. Configuration levels include `--global` (all repositories for current OS user), `--local` (current repository only), and `--system` (all OS users).

### Hindi
Commits karne se pehle aapko apna user identity (`user.name` aur `user.email`) configure karna zaroori hai. Git har commit ke saath yeh author info attach karta hai. Global level (`--global`) se yeh settings aapke sabhi repositories par apply hoti hain.

### Marathi
Commits karanya pūrvi aapan aaple identity (`user.name` aani `user.email`) set kela pahije. Git pratyek commit sobat he author information jodto. Global settings (`--global`) sarv repositories sathi lagu hotat.

### Hinglish
Pehli baar Git install karne par `user.name` aur `user.email` config karna mandatory hai. GitHub par commits aapke account se link hone ke liye `user.email` exact GitHub registered email se match hona chahiye. `--global` flag sabhi projects ke liye defaults set karta hai.

## 🤔 Why Do We Use It?

If you don't configure your name and email, Git will either refuse to create commits or generate commits with default system hostname strings (e.g. `user@DESKTOP-8492X`). Configuring your email ensures GitHub attributes your commits to your profile correctly.

## 🧠 Simple Explanation

Think of `git config` like setting up your digital passport or signature stamp. Every time you seal an official document (make a commit), Git stamps your name, email, and timestamp onto that document.

## 📝 Configuration Levels

1. **`--system`:** Applied system-wide to all users on the computer (`/etc/gitconfig`).
2. **`--global`:** Applied to current OS user's home directory (`~/.gitconfig` or `C:\Users\username\.gitconfig`). **(Most Common)**
3. **`--local`:** Applied only to the current active repository (`.git/config`). Overrides global settings.

## 💡 Essential First-Time Commands

### 1. Set Your Author Identity
```bash
# Set your full name
git config --global user.name "Rahul Sharma"

# Set your GitHub registered email address
git config --global user.email "rahul.sharma@example.com"
```

### 2. Set Default Branch Name to `main`
Modern industry standard uses `main` as the default primary branch name instead of legacy `master`:
```bash
git config --global init.defaultBranch main
```

### 3. Set VS Code as Default Git Text Editor
```bash
git config --global core.editor "code --wait"
```

### 4. Configure Line-Ending Conversions (`core.autocrlf`)
Prevents cross-platform line ending issues (`CRLF` on Windows vs `LF` on Linux/macOS):
```bash
# On Windows:
git config --global core.autocrlf true

# On Linux / macOS:
git config --global core.autocrlf input
```

### 5. Inspecting Active Configuration
```bash
# List all active configurations
git config --list

# Show where each setting originates from (file path)
git config --list --show-origin
```

## 🔍 Command Breakdown

- `git config`: Invokes the configuration tool.
- `--global`: Specifies that settings apply to the current user across all repositories.
- `user.name "Your Name"`: Key-value pair assigning the author name string.
- `user.email "email@domain.com"`: Key-value pair assigning the author email address.

## 👀 Terminal Output

```bash
$ git config --global user.name "Rahul Sharma"
$ git config --global user.email "rahul.sharma@example.com"

$ git config user.name
Rahul Sharma

$ git config user.email
rahul.sharma@example.com
```

## ⚠️ Common Mistakes

- **Email Mismatch on GitHub:** Setting a generic email in `git config` that doesn't match your registered GitHub account email. As a result, GitHub will not display your commit avatar or count your contributions on your profile activity graph!
- **Typos in Command Keys:** Writing `git config user.nam` instead of `user.name`.

## 🛡️ Safety / Important Notes

- Configuration settings are stored in plain text files (`~/.gitconfig`). Do NOT store passwords, API keys, or private SSH keys inside `git config` files.
- Local repository settings (`--local`) always override `--global` settings.

## 🌍 Real-World Usage

Developers use `--local` config when switching between work/company repositories (using company email) and personal open-source projects (using personal GitHub email) on the same laptop.

## 🧪 Try It Yourself

1. Set your `user.name` and `user.email` globally in Git Bash or Terminal.
2. Run `git config user.name` and verify that your name prints correctly.
3. Set your default branch to `main` using `git config --global init.defaultBranch main`.

## 🎯 Mini Challenge

Run `git config --list --show-origin` in your terminal and identify the exact file path where your `--global` config settings are saved on your computer disk.

## 🔗 Related Topics

- [Installation & Setup](02-installation-and-setup.md)
- [Initializing a Repository](04-initializing-a-repository.md)
- [SSH Keys & Authentication](22-ssh-keys-and-github-authentication.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: Setup](02-installation-and-setup.md) | [Next: Initializing Repository →](04-initializing-a-repository.md)
