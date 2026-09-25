# SSH Keys & GitHub Authentication

> 🟡 Intermediate

## 📖 Definition

**SSH (Secure Shell)** authentication uses an asymmetric cryptographic key pair — a **Private Key** kept secure on your local computer and a **Public Key** uploaded to GitHub — to authenticate terminal `git push` and `git pull` operations securely without entering account passwords or Personal Access Tokens (PATs).

## 🌐 Multilingual Explanation

### English
GitHub requires secure authentication for git operations. Password authentication for HTTPS git pushes was deprecated by GitHub in 2021. Setting up an SSH Key pair (`Ed25519` algorithm) establishes passwordless, encrypted communication between your computer terminal and GitHub servers.

### Hindi
GitHub par HTTPS password-based authentication band ho chuka hai. SSH Key Setup karne se aap bina har baar password ya token daale surakshit tarike se `git push` aur `git pull` kar sakte hain. SSH mein ek Public Key (jo GitHub par save hoti hai) aur ek Private Key (jo aapke laptop mein hoti hai) banti hai.

### Marathi
GitHub var HTTPS password baddal SSH Keys kiva Personal Access Tokens (PAT) vaparale jatat. SSH Keys mule password n takta secure `git push` karta yete. Public Key GitHub var takli jaate aani Private Key aaplya computer var rahte.

### Hinglish
Har baar `git push` karte waqt GitHub password maangne se pareshan hone ke bajaye SSH Key configure karein. `ssh-keygen` command se Key Pair generate karein, Public Key (`.pub`) ko GitHub settings mein add karein, aur permanent passwordless push access enjoy karein.

## 🤔 Why Do We Use It?

Personal Access Tokens (PATs) expire periodically and require manual credential helper configuration. SSH keys provide permanent, zero-friction, hardware-tied security that authenticates your terminal pushes automatically.

## 🧠 Simple Explanation

Think of SSH Key authentication like a physical lock and key:
- **Public Key (`.pub`):** The lock installed on the GitHub front door. Anyone can see the lock.
- **Private Key (no extension):** The physical key sitting inside your pocket.
- When you run `git push`, your local key turns the lock on GitHub. If they match, GitHub lets you in instantly!

## 📝 Step-by-Step SSH Setup Guide

### Step 1: Generate a New SSH Key Pair
Open Git Bash or Terminal and run the modern `Ed25519` algorithm command:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```
*Press Enter to accept default file location (`~/.ssh/id_ed25519`) and optionally set a passphrase.*

### Step 2: Start SSH Agent and Add Private Key
```bash
# Start background ssh-agent process
eval "$(ssh-agent -s)"

# Add your private key to agent memory
ssh-add ~/.ssh/id_ed25519
```

### Step 3: Copy Your Public Key Content
Display and copy your public key text string:

```bash
cat ~/.ssh/id_ed25519.pub
```

### Step 4: Add Public Key to GitHub Account
1. Log in to GitHub -> Click your profile avatar (top right) -> **Settings**.
2. Select **SSH and GPG keys** in left sidebar.
3. Click **New SSH key**.
4. Set Title (e.g. `Work Laptop`), paste copied key string into **Key** field, and click **Add SSH key**.

### Step 5: Test Connection to GitHub
```bash
ssh -T git@github.com
```

### Step 6: Convert Local Repository from HTTPS to SSH
```bash
git remote set-url origin git@github.com:your-username/repository-name.git
```

## 🔍 Command Breakdown

- `ssh-keygen -t ed25519`: Generates a high-security Ed25519 elliptic-curve SSH key pair.
- `cat ~/.ssh/id_ed25519.pub`: Prints the **Public Key** content (ends in `.pub`).
- `git@github.com:user/repo.git`: The SSH format URL for remote repositories.

## 👀 Terminal Output

```bash
# Testing SSH Connection Output:
$ ssh -T git@github.com
Hi your-username! You've successfully authenticated, but GitHub does not provide shell access.
```

## ⚠️ Common Mistakes & Security Warnings

- **NEVER Share Private Key:** Uploading or emailing your Private Key (`~/.ssh/id_ed25519` without `.pub`). Anyone with your private key has full access to your GitHub account!
- **Permission Denied Error (`Permission denied (publickey)`):** Running `git push` with an SSH URL when your public key has NOT been added to GitHub Settings yet, or when `ssh-agent` is not running.

## 🛡️ Safety / Important Notes

- **Public Key (`id_ed25519.pub`):** Safe to share and upload to GitHub/GitLab servers.
- **Private Key (`id_ed25519`):** STRICTLY CONFIDENTIAL. Never share or commit!

## 🌍 Real-World Usage

Enterprise engineering environments enforce mandatory SSH key authentication with hardware security keys (e.g. YubiKey) for all code pushes.

## 🧪 Try It Yourself

1. Check if you already have existing SSH keys by running `ls -la ~/.ssh`.
2. Generate an Ed25519 key pair using `ssh-keygen -t ed25519 -C "your_email@example.com"`.
3. Display your public key using `cat ~/.ssh/id_ed25519.pub`.

## 🎯 Mini Challenge

Add your SSH Public Key to your GitHub Settings and verify successful authentication by running `ssh -T git@github.com`.

## 🔗 Related Topics

- [Remote Repositories](17-remote-repositories-and-remotes.md)
- [Syncing Remotes with Push & Pull](18-git-push-and-git-pull.md)
- [Security Best Practices](29-git-best-practices-and-security.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: Forking & PRs](21-forking-and-pull-requests.md) | [Next: GitHub Issues & Projects →](23-github-issues-and-project-boards.md)
