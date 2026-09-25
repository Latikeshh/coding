# GitHub Issues, Projects & Discussions

> 🟡 Intermediate

## 📖 Definition

**GitHub Issues** is an integrated bug tracking and feature request system built directly into GitHub repositories. **GitHub Projects** provides interactive Kanban boards for agile sprint planning, and **GitHub Discussions** serves as a community forum for Q&A, ideas, and open-ended conversations.

## 🌐 Multilingual Explanation

### English
GitHub Issues track bugs, enhancements, and tasks. Issues support Markdown formatting, labels (`bug`, `documentation`), assignees, and milestones. You can automatically close an issue from a commit or Pull Request by typing magic keywords like `Fixes #12` or `Closes #45` in commit messages or PR descriptions.

### Hindi
GitHub Issues aapke project ke bugs, feature requests, aur task list ko track karta hai. Commit message ya PR mein `Fixes #12` likhne se Issue #12 PR merge hote hi automatically closed ho jata hai. GitHub Projects Kanban board (To Do, In Progress, Done) provide karta hai.

### Marathi
GitHub Issues mule bugs aani navin features track karta yetat. Commit kiva PR madhye `Fixes #12` lihilyas Issue #12 swatahch close hoto. GitHub Projects madhye Kanban board dware kaam vyavasthit organize karta yete.

### Hinglish
Project bugs aur tasks manage karne ke liye GitHub Issues use hota hai. Good open-source practice ke mutabiq pehle Issue open karein, use discuss karein, aur jab PR submit karein toh PR description mein `Closes #IssueNumber` likhein taaki issue auto-close ho jaye.

## 🤔 Why Do We Use Them?

Without issue tracking, software bugs get lost in emails or chat messages. GitHub Issues links bugs directly to the exact code commits and Pull Requests that resolve them.

## 🧠 Simple Explanation

Think of GitHub project management tools like an office workspace:
- **GitHub Issues:** Sticky note bug tickets attached to the bulletin board.
- **GitHub Projects:** A digital Kanban board with 3 columns (**To Do**, **In Progress**, **Done**) where team members drag tickets across columns.
- **GitHub Discussions:** The coffee break room where team members brainstorm ideas without clogging up bug tracking.

## 📝 Magic Closing Keywords in Commit Messages

When you push a commit or merge a Pull Request containing specific closing keywords followed by an issue number `#N`, GitHub automatically closes that issue!

| Closing Keywords | Example Usage | Action Taken by GitHub |
|---|---|---|
| `close`, `closes`, `closed` | `Closes #12` | Closes Issue #12 when PR merges |
| `fix`, `fixes`, `fixed` | `Fixes #45` | Closes Issue #45 when PR merges |
| `resolve`, `resolves`, `resolved` | `Resolves #89` | Closes Issue #89 when PR merges |

### Example Commit Message:
```bash
git commit -m "Fix navbar mobile overflow bug (Fixes #24)"
```

## 💡 Practical Workflow Example

1. **Create Issue:** User submits Issue `#14` titled *"Login button non-responsive on mobile devices"*.
2. **Assign & Label:** Maintainer adds labels `bug` and `mobile`, and assigns developer Rahul.
3. **Develop & Commit:** Rahul creates branch `fix-issue-14`, fixes code, and commits:
   ```bash
   git commit -m "Correct button touch event handler (Fixes #14)"
   ```
4. **Merge PR:** Rahul opens PR. When PR merges into `main`, GitHub automatically marks Issue `#14` as **Closed**!

## 🔍 Issue Labels & Milestones

- **Labels:** Color-coded tags categorizing issues (`bug`, `enhancement`, `documentation`, `good first issue`).
- **`good first issue` Label:** Standard tag used across open-source projects marking easy beginner-friendly tasks for first-time contributors.
- **Milestones:** Target release deadlines (e.g. `Version 1.0 Release`) grouping related issues together.

## 👀 GitHub Issue Interface

```text
Issue #14: Login button non-responsive on mobile devices [Open]
Labels: [bug] [mobile]
Assignee: @Rahul
Milestone: Version 1.0 Release
```

## ⚠️ Common Mistakes

- **Forgetting `#` in Magic Keywords:** Writing `Fixes 14` instead of `Fixes #14`. Without the hash `#` symbol, GitHub cannot detect the issue reference!
- **Using Issues for General Chat:** Posting general beginner questions in Issues when repository has **GitHub Discussions** enabled.

## 🛡️ Safety / Important Notes

- Issue numbers `#N` share a numerical sequence with Pull Request numbers `#N` within the same repository.

## 🌍 Real-World Usage

Tech organizations manage entire product roadmaps using GitHub Projects, tracking hundreds of bugs and feature releases across developer teams.

## 🧪 Try It Yourself

1. Go to your `github-practice` repository on GitHub.
2. Click the **Issues** tab -> Click **New issue**.
3. Create an issue titled `Add footer contact links` and add label `enhancement`.
4. Note down the issue number (e.g. `#1`).

## 🎯 Mini Challenge

Make a edit in your local project, commit with message `Add footer links (Fixes #1)`, push to GitHub, and verify on GitHub web that Issue `#1` was automatically closed!

## 🔗 Related Topics

- [Introduction to GitHub](20-introduction-to-github.md)
- [Forking & Pull Requests](21-forking-and-pull-requests.md)
- [GitHub Actions Basics](26-github-actions-and-ci-cd-basics.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: SSH Keys](22-ssh-keys-and-github-authentication.md) | [Next: GitHub Pages →](24-github-pages-and-hosting.md)
