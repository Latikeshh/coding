# Git Tags & GitHub Releases

> 🟡 Intermediate

## 📖 Definition

A **Git Tag** is a reference pointer that marks a specific commit in history with a human-readable release version label (such as `v1.0.0`). A **GitHub Release** packages a Git Tag with formal changelog release notes and compiled binary assets for users to download.

## 🌐 Multilingual Explanation

### English
Git Tags mark software release milestones in commit history. **Lightweight Tags** are simple commit pointers. **Annotated Tags** (recommended) store tagger name, email, date, and a release message. Tags do not push to remotes automatically; you must explicitly run `git push origin v1.0.0` or `git push origin --tags`.

### Hindi
Git Tags aapke commit history mein release milestones (jaise `v1.0.0`, `v2.0.0`) mark karte hain. Annotated tags (`git tag -a v1.0.0 -m "Release message"`) mein full author info aur release notes hote hain. Tags ko GitHub par upload karne ke liye `git push origin --tags` run karna zaroori hai.

### Marathi
Git Tags cha vapar software releases (`v1.0.0`) mark karanyasathi hoto. Annotated tags (`git tag -a`) vaparne uttam aste. Tags GitHub var ghenyasathi `git push origin --tags` vaparatat.

### Hinglish
Software versioning ke liye Semantic Versioning (`vMAJOR.MINOR.PATCH` e.g. `v1.2.0`) follow karein. Local tag banane ke baad `git push origin --tags` se GitHub par push karein, aur GitHub Releases tab par jaakar official release release notes ke sath publish karein.

## 🤔 Why Do We Use Them?

Branches change constantly as new commits are added. Tags remain permanently fixed to a specific historical commit hash, allowing developers and deployment servers to instantly check out exact production release versions (`v1.0.0`).

## 🧠 Simple Explanation

Think of commits like pages in a textbook:
- A **Branch** is a moving pencil bookmark showing where you are currently reading.
- A **Tag** is a permanent printed chapter marker stuck to Page 100 labeled **"Chapter 1: Initial Release"**. No matter how many pages are added later, Page 100 remains tagged as Chapter 1.

## 📝 Semantic Versioning (SemVer) Standard

Industry release version numbers follow the `vMAJOR.MINOR.PATCH` format:

```text
  v 2 . 4 . 1
    │   │   └── PATCH: Backward-compatible bug fixes
    │   └────── MINOR: Backward-compatible new features
    └────────── MAJOR: Breaking changes / Incompatible API updates
```

## 💡 Key Tagging Commands

### 1. Creating Annotated Tags (RECOMMENDED)
```bash
# Create an annotated tag on current HEAD commit
git tag -a v1.0.0 -m "Production Release Version 1.0.0"

# Tag a past specific commit SHA
git tag -a v0.9.0 a1b2c3d -m "Beta release"
```

### 2. Listing & Inspecting Tags
```bash
# List all tags
git tag

# Filter tags matching pattern
git tag -l "v1.*"

# Inspect detailed tag info and matching commit details
git show v1.0.0
```

### 3. Pushing Tags to GitHub Remote
Tags are NOT pushed automatically by `git push`! You must push tags explicitly:

```bash
# Push a single specific tag
git push origin v1.0.0

# Push ALL local tags to GitHub at once
git push origin --tags
```

### 4. Deleting Tags
```bash
# Delete local tag
git tag -d v1.0.0

# Delete remote tag on GitHub
git push origin --delete v1.0.0
```

## 🔍 Publishing a GitHub Release

1. Navigate to your GitHub repository web page -> Click **Releases** (right sidebar).
2. Click **Draft a new release**.
3. Select an existing tag (e.g. `v1.0.0`) or create a new tag.
4. Add Release Title and detailed Markdown changelog release notes.
5. (Optional) Drag and drop compiled executable binaries (`.zip`, `.exe`, `.apk`).
6. Click **Publish release**.

## 👀 GitHub Release View

```text
Release v1.0.0: Production Release [Latest]
Tag: v1.0.0 | Published 5 minutes ago by @Rahul

Changelog:
- Added responsive navbar layout
- Fixed authentication session timeout bug

Assets:
📦 Source code (zip)
📦 Source code (tar.gz)
```

## ⚠️ Common Mistakes

- **Forgetting to Push Tags:** Creating local tags with `git tag -a v1.0.0` and expecting them to show up on GitHub automatically without running `git push origin --tags`.
- **Using Lightweight Tags for Official Releases:** Using `git tag v1.0.0` (lightweight tag lacking author/date metadata) instead of annotated tags (`git tag -a v1.0.0 -m "msg"`).

## 🛡️ Safety / Important Notes

- Annotated tags are stored as full objects in the Git database, checksummed with SHA hashes containing tagger name, email, date, and message payload.

## 🌍 Real-World Usage

Software deployment pipelines (Jenkins, GitHub Actions, Docker) trigger automated production server deployments whenever a new version tag (e.g., `v1.*`) is pushed to GitHub.

## 🧪 Try It Yourself

1. Inside your `git-practice` repo, create an annotated tag on your latest commit: `git tag -a v1.0.0 -m "Initial Release v1.0.0"`.
2. Run `git tag` to list your tags.
3. Run `git show v1.0.0` to inspect tag metadata.

## 🎯 Mini Challenge

Push your tag to GitHub using `git push origin v1.0.0` (or `git push origin --tags`), open your repo on GitHub web, and navigate to the **Releases** tab to view your live tag!

## 🔗 Related Topics

- [Viewing History](07-viewing-history-and-git-log.md)
- [Syncing Remotes with Push & Pull](18-git-push-and-git-pull.md)
- [GitHub Actions & CI/CD Basics](26-github-actions-and-ci-cd-basics.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: GitHub Pages](24-github-pages-and-hosting.md) | [Next: GitHub Actions →](26-github-actions-and-ci-cd-basics.md)
