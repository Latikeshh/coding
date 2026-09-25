# Industry Workflows (GitFlow & Trunk-Based)

> 🔴 Advanced

## 📖 Definition

A **Git Workflow** (or Branching Strategy) is a standardized set of team conventions and rules defining how branches are created, named, merged, and released into production environments. The two dominant industry models are **GitFlow** and **Trunk-Based Development**.

## 🌐 Multilingual Explanation

### English
Git workflows guide team collaboration. **GitFlow** uses strict long-lived branches (`main` for production, `develop` for integration) alongside support branches (`feature/*`, `release/*`, `hotfix/*`). **Trunk-Based Development** uses a single central branch (`trunk`/`main`) where developers merge small, frequent commits multiple times per day using feature flags.

### Hindi
Git Workflow team collaboration ka rulebook hota hai. **GitFlow** mein do main branches hoti hain: `main` (production code) aur `develop` (staging code), aur chhote branches hote hain jaise `feature/login` ya `hotfix/bug`. **Trunk-Based Development** mein sabhi developers rozana chote commits directly `main` branch par merge karte hain.

### Marathi
Git Workflow mhanje team madhye branching che niyam. **GitFlow** madhye `main` aani `develop` don mukhya branches asatat. **Trunk-Based Development** madhye sarv developers ekach central `main` branch var lhan-lhan badal divsatun anekda merge kartat.

### Hinglish
Moti companies team collaboration ke liye specific branching strategy follow karti hain. Scheduled software releases ke liye **GitFlow** best hai. Fast SaaS continuous deployment ke liye **Trunk-Based Development** (micro-PRs merged daily into `main`) popular hai.

## 🤔 Why Do We Use Them?

Without a defined team workflow, developers create randomly named branches, merge unreviewed code into production, and overwrite teammates' code during release deployment.

## 🧠 Simple Explanation

Think of Git Workflows like managing airport air traffic:
- **GitFlow:** A large international airport with strict scheduled runways: International Terminal (`main`), Domestic Terminal (`develop`), Boarding Gates (`feature/*`), and Emergency Runway (`hotfix/*`).
- **Trunk-Based Development:** A high-speed express subway train (`main`) where passengers hop on and off every 2 minutes in rapid, small bursts.

## 📝 Workflow Architectures Compared

### 1. GitFlow Workflow Architecture
Created by Vincent Driessen. Ideal for traditional software with scheduled versioned releases (e.g. mobile apps, desktop software, embedded firmware).

```text
[main] ───────(v1.0)───────────────────────────────────(v1.1)─────> (Production)
                │                                       ▲
                └────> [hotfix/patch] ──────────────────┘
                          ▲
                          │
[develop] ────────────────┴─────(release/v1.1)─────────> (Staging)
             │                       ▲
             └─> [feature/auth] ─────┘
```

#### Branch Roles in GitFlow:
- **`main`:** Contains strictly stable, production-ready, tagged release code.
- **`develop`:** Integration branch for upcoming releases.
- **`feature/*`:** Short-lived branches for new feature development (merged into `develop`).
- **`release/*`:** Preparation branch for testing a new release candidate.
- **`hotfix/*`:** Emergency patch branch spawned directly from `main` to fix critical production bugs.

---

### 2. Trunk-Based Development Architecture
Preferred by high-velocity SaaS companies (Google, Meta, Netflix) practicing Continuous Integration / Continuous Deployment (CI/CD).

```text
[main / trunk] ───●──────●──────●──────●──────●──────●──────> (Production)
                  │      ▲      │      ▲
                  └──C1──┘      └──C2──┘ (Short-lived 1-day Feature Branches)
```

#### Key Rules of Trunk-Based Development:
- Developers merge small, short-lived feature branches into `main` multiple times per day.
- Every commit on `main` must pass automated CI/CD unit test suites.
- Unfinished features are hidden behind **Feature Flags** (boolean configuration toggles) so unready code can safely sit in production without being visible to end users.

---

### 3. GitHub Flow (Simplified Web Workflow)
A lightweight alternative to GitFlow designed for web applications:
1. Create a branch from `main` (`feature/name`).
2. Add commits and push to GitHub.
3. Open a Pull Request for discussion and review.
4. Merge PR into `main` after CI checks pass.
5. Deploy `main` immediately to production.

## 💡 Summary Comparison Matrix

| Feature | GitFlow | Trunk-Based Development | GitHub Flow |
|---|---|---|---|
| **Branch Complexity** | Heavy (5+ branch types) | Lightweight (1 main trunk) | Medium (main + feature branches) |
| **Release Frequency** | Scheduled (Monthly/Quarterly) | Continuous (Multiple times/day) | Continuous / On-demand |
| **Testing Overhead** | Manual release testing | 100% Automated CI/CD required | Automated CI + Code Review |
| **Best Used For** | Mobile apps, OS kernels | Web apps, Microservices, SaaS | Open-source web projects |

## ⚠️ Common Mistakes

- **Long-Lived Feature Branches in Trunk-Based Dev:** Keeping a feature branch unmerged for weeks, resulting in "Merge Hell" when trying to integrate back into `main`.
- **Committing Directly to `main` in GitFlow:** Bypassing `develop` and committing unstable experimental code onto production `main`.

## 🛡️ Safety / Important Notes

- Enforce **GitHub Branch Protection Rules** on `main` requiring at least 1-2 approved PR reviews and passing CI checks before merging.

## 🌍 Real-World Usage

Google and Meta run Trunk-Based Development with millions of daily automated test runs, while Apple and automotive software teams utilize GitFlow for strict hardware release cycles.

## 🧪 Try It Yourself

1. Identify which workflow model (GitFlow, Trunk-Based, or GitHub Flow) best fits a web portfolio project.
2. Practice creating a branch using GitHub Flow naming conventions: `git switch -c feature/add-contact-form`.

## 🎯 Mini Challenge

Write down the 3 steps required in GitFlow to deliver an emergency bug fix for a production crash on `main`.

## 🔗 Related Topics

- [Branching Basics](12-branching-basics.md)
- [Merging Branches](13-merging-branches.md)
- [GitHub Actions & CI/CD Basics](26-github-actions-and-ci-cd-basics.md)

## 🧭 Navigation

[← Home](00-README.md) | [← Previous: Aliases](27-git-aliases-and-shortcuts.md) | [Next: Best Practices & Security →](29-git-best-practices-and-security.md)
