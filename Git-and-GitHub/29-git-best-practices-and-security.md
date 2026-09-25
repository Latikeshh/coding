# Security Best Practices & Secret Protection

> 🔴 Advanced

## 📖 Definition

**Git Security & Best Practices** encompass engineering standards, credential protection, repository hygiene, atomic commit conventions, and access control rules designed to prevent secret leaks, security breaches, and corrupted repository histories.

## 🌐 Multilingual Explanation

### English
Security is paramount in version control. Never commit secret API keys, database passwords, or private SSH keys to Git. Plain `git rm` deletes a file from the current commit but leaves the secret exposed in past Git history! Use `.gitignore`, pre-commit hooks, and tools like `git-filter-repo` or BFG Repo-Cleaner to strip leaked credentials from entire repository histories.

### Hindi
Git mein kabhi bhi private API keys, database passwords, ya `.env` files commit na karein. Agar koi secret tiyari se commit ho jaye, toh sirf `git rm` karne se woh purani commit history se delete nahi hota! Purani history se secret completely erase karne ke liye `git-filter-repo` tool use kiya jata hai.

### Marathi
Git madhye kadihi secret passwords, API keys, kiva `.env` files commit karu nayet. Plain `git rm` kelyane file fakt chaluk commit madhun jaate, pan maghil commit history madhye secret rahto. Secrets poorna pne kadhanyasathi `git-filter-repo` sarkhe tools vaparale jatat.

### Hinglish
GitHub par public repo mein `.env` file push karne par automated bots seconds ke andar aapke API keys aur AWS credentials steal karke galat upyog kar sakte hain. Always add `.env` in `.gitignore`. Secrets scan karne ke liye pre-commit hooks aur GitHub Secret Scanning enable karein.

## 🤔 Why Do We Use It?

Automated hacker bots constantly scan public GitHub commits 24/7/365 for leaked AWS keys, Stripe tokens, and database passwords. A single leaked credential can lead to server hijacking or massive cloud billing bills.

## 🧠 Simple Explanation

Think of Git history like concrete cement:
- When you write code in your Working Directory, the cement is wet.
- When you execute `git commit`, the cement hardens into stone.
- Dropping a key into wet cement and trying to scratch it off the surface later (`git rm`) leaves the key encased inside the hard block forever! You must crush the block (**`git-filter-repo`**) to extract the key completely.

## 🛡️ Top 7 Git Security Rules

### Rule 1: Never Commit Secret Credentials
Always place environment configuration files (`.env`, `.env.local`, `credentials.json`, `id_rsa`) inside `.gitignore` BEFORE making your first commit.

### Rule 2: Plain `git rm` DOES NOT Delete Secrets from History
If you commit `.env` and later run `git rm .env && git commit`, the password remains readable in past commits (`git checkout HEAD~1`).
- **To scrub a leaked secret completely from all commits:**
  ```bash
  # Use official git-filter-repo tool
  python3 -m pip install git-filter-repo
  git filter-repo --invert-paths --path .env
  ```
- Immediately **revoke / rotate** the leaked API key or password on your cloud provider!

### Rule 3: Use Pre-Commit Hooks
Install pre-commit hooks (like `gitleaks` or `git-secrets`) that intercept `git commit` and scan staged files for API key regex patterns before allowing a commit:

```bash
# Install Gitleaks pre-commit scanner
gitleaks protect --staged
```

### Rule 4: Enforce GitHub Branch Protection Rules
In GitHub Repo Settings -> **Branches** -> Add Rule for `main`:
- [✔] Require a pull request before merging
- [✔] Require status checks to pass before merging
- [✔] Require signed commits (GPG/SSH signature)
- [✔] Do not allow force pushes

### Rule 5: Commit Atomic Changes
Make small, focused commits addressing a single issue. Avoid dumping 20 modified files into a single `git commit -m "fixed stuff"` commit.

### Rule 6: Write Professional Commit Messages
Follow the Imperative Mood standard:
- ✅ `"Fix navigation dropdown mobile overflow"`
- ❌ `"fixed navigation"`

### Rule 7: Pull Before You Push
Always pull latest remote changes (`git pull --rebase`) before pushing to avoid non-fast-forward push rejections.

## 💡 Practical Security Checklist

```text
[✔] Is .env listed in .gitignore?
[✔] Are API tokens loaded via environment variables (process.env / os.environ)?
[✔] Are commit messages clear and imperative?
[✔] Are GitHub Branch Protection rules enabled for 'main'?
[✔] Is GitHub Secret Scanning enabled in Repo Settings -> Security?
```

## ⚠️ Emergency Leak Response Checklist

If you accidentally push a live private key or API token to GitHub:

1. **REVOKE / INVALIDATE THE KEY IMMEDIATELY** on AWS, Stripe, or Google Cloud dashboard.
2. Scrub the secret from Git history using `git-filter-repo`.
3. Force push scrubbed history: `git push origin --force --all`.
4. Notify your security or DevOps team.

## 🛡️ Safety / Important Notes

- GitHub automatically sends email alerts and blocks commits when its built-in **GitHub Secret Scanning** detects known cloud API token formats.

## 🌍 Real-World Usage

Enterprise security teams run automated secret scanners (TruffleHog, Checkov, Snyk) in CI/CD pipelines to block PRs containing hardcoded passwords.

## 🧪 Try It Yourself

1. Verify that `.env` is listed inside your `.gitignore` file.
2. Run `git status` and verify that `.env` is never listed under Untracked files.

## 🎯 Mini Challenge

Explain why revoking / invalidating a leaked API key on your cloud provider dashboard is the #1 required emergency step if a key is pushed to public GitHub.

## 🔗 Related Topics

- [Ignoring Files with Gitignore](08-ignoring-files-with-gitignore.md)
- [SSH Keys & Authentication](22-ssh-keys-and-github-authentication.md)
- [GitHub Actions Basics](26-github-actions-and-ci-cd-basics.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: Workflows](28-git-workflows-gitflow-and-trunk-based.md) | [Next: Capstone Projects →](30-practical-projects-and-workflows.md)
