# Git Installation & Environment Setup

> 🟢 Beginner

## 📖 Definition

Setting up Git involves installing the Git Command Line Interface (CLI) binary tools on your operating system (Windows, Linux, or macOS) and verifying that the `git` executable is accessible from your system terminal or command prompt.

## 🌐 Multilingual Explanation

### English
Installing Git provides the `git` command-line utility. On Windows, installing **Git for Windows** includes **Git Bash**, a Unix-like emulation terminal. On Linux and macOS, Git runs natively in the default terminal. Running `git --version` confirms successful installation.

### Hindi
Git ko install karne se aapke computer mein `git` command available ho jati hai. Windows par **Git for Windows** install karne se **Git Bash** milta hai jo Unix terminal jaisa chalta hai. Linux aur macOS mein Git native terminal se chalta hai. Installation verify karne ke liye `git --version` run karein.

### Marathi
Git install kelyanantar tumchya computer var `git` command chalute. Windows var **Git for Windows** install kelyas **Git Bash** milte. Linux aani macOS var default terminal madhye Git chalte. Installation check karanyasathi `git --version` vaparale jate.

### Hinglish
Git setup karne par aapko terminal mein `git` commands chalaney ka access milta hai. Windows users ke liye **Git Bash** best terminal hai kyunki isme Linux commands (`ls`, `pwd`, `cat`) bhi chalte hain. Installation confirm karne ke liye terminal mein `git --version` Type karein.

## 🤔 Why Do We Use It?

Before you can create repositories, commit code, or connect to GitHub, the Git engine must be installed and properly registered in your operating system's executable path (`PATH`).

## 🧠 Simple Explanation

Installing Git is like installing the engine and steering wheel of a car. Without the Git engine installed on your machine, your code editor (like VS Code) cannot track changes or talk to GitHub.

## 📝 Installation Instructions Across Operating Systems

### 1. Windows Setup
1. Download the installer from the official website: [git-scm.com/download/win](https://git-scm.com/download/win).
2. Run the `.exe` installer.
3. **Recommended Settings during Wizard:**
   - Default Editor: Select **VS Code** (or your preferred editor).
   - PATH Environment: Select *Git from the command line and also from 3rd-party software*.
   - Line Ending Conversion: Select *Checkout Windows-style, commit Unix-style line endings* (`core.autocrlf = true`).
   - Terminal Emulator: Select **Use MinTTY** (Git Bash default).

### 2. Linux Setup
Open your terminal and run the package manager command for your distribution:

```bash
# Ubuntu / Debian
sudo apt update && sudo apt install git -y

# Fedora / RHEL
sudo dnf install git -y

# Arch Linux
sudo pacman -S git
```

### 3. macOS Setup
Option A — Via Homebrew (Recommended):
```bash
brew install git
```

Option B — Via Xcode Command Line Tools:
```bash
xcode-select --install
```

## 💡 Verifying Installation

Open your terminal (Git Bash on Windows, Terminal on macOS/Linux) and run:

```bash
git --version
```

## 🔍 Command Breakdown

- `git`: The root executable invoking the Git version control CLI tool.
- `--version`: Flag asking Git to print its current installed semantic version string.

## 👀 Terminal Output

```text
# Expected output on Windows / Linux / macOS:
git version 2.43.0
```

## ⚠️ Common Mistakes

- **Command Not Found on Windows:** Getting `'git' is not recognized as an internal or external command` in Windows CMD or PowerShell.
  - *Fix:* Re-run installer and ensure *Add Git to PATH* is checked, or use **Git Bash** directly.
- **Using Wrong Terminal on Windows:** Using default CMD without Unix command support instead of **Git Bash**.

## 🛡️ Safety / Important Notes

- Always download Git from the official domain: `https://git-scm.com`.
- Git Bash on Windows provides essential Unix tools like `ssh-keygen`, `curl`, `grep`, and `bash`.

## 🌍 Real-World Usage

Developers install Git as part of their initial machine setup alongside text editors (VS Code), runtime compilers, and terminal shells.

## 🧪 Try It Yourself

1. Open Git Bash (Windows) or Terminal (Linux/macOS).
2. Type `git --version` and press Enter.
3. Type `git help` to view the list of top-level Git commands available.

## 🎯 Mini Challenge

Run `git help init` in your terminal and observe how Git opens the official documentation in your default web browser or terminal pager.

## 🔗 Related Topics

- [Introduction to Version Control](01-introduction-to-version-control.md)
- [Git Configuration](03-git-configuration.md)
- [Initializing a Repository](04-initializing-a-repository.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: Introduction](01-introduction-to-version-control.md) | [Next: Git Configuration →](03-git-configuration.md)
