---
layout: default
title: "Security Policy"
permalink: /SECURITY.html
---

# 🛡️ Security Policy

The **Coding** repository is an open-source educational resource and developer hub. We take security seriously—both for the website infrastructure (Jekyll templates, search engine scripts, and GitHub Pages assets) and for the accuracy and safety of the code examples published across our curriculum tracks.

---

## 📋 Supported Versions & Tracks

Security fixes and code safety improvements are actively maintained on the primary `main` branch:

| Component / Track | Supported | Status |
| :--- | :---: | :--- |
| `main` Branch (Curriculum & Code Examples) | ✅ | Currently Supported & Maintained |
| Site Infrastructure (`_layouts`, `assets/js`, `search`) | ✅ | Currently Supported |
| GitHub Actions Workflows (`.github/workflows`) | ✅ | Currently Supported |
| Archived / Historical Branches | ❌ | Unsupported |

---

## 🔍 What Constitutes a Security Issue?

In the context of this repository, security reports include:

1. **Unsafe Code Examples in Lessons**:
   - Usage of inherently insecure functions in C/C++ examples (e.g. `gets()` instead of `fgets()`, buffer overflow hazards without bounds checking).
   - Unsafe SQL query examples that promote SQL injection without explaining parameterization or sanitization.
   - Cross-Site Scripting (XSS) vulnerabilities in JavaScript examples.
2. **Infrastructure & Web Security**:
   - XSS, HTML injection, or script manipulation vulnerabilities in site search (`assets/js/search.js`) or Jekyll layouts (`_layouts/default.html`).
3. **Secret Protection**:
   - Accidental exposure of API keys, credentials, or private tokens in documentation or workflow files.

---

## 📩 Reporting a Vulnerability

If you discover a security vulnerability or unsafe code example, please report it responsibly:

### 1. Private Contact (Preferred)
Please **do not** open a public GitHub issue for critical security vulnerabilities. Instead:
- Report via **[GitHub Private Vulnerability Reporting](https://github.com/Latikeshh/coding/security/advisories/new)** (if enabled on the repository).
- Or email the maintainer directly at **[latikesh29@gmail.com](mailto:latikesh29@gmail.com)** with the subject line: `[SECURITY] Issue in Coding Repository`.

### 2. What to Include in Your Report
Please include:
- A clear description of the vulnerability or insecure code snippet.
- The path of the file(s) affected (e.g. `C/17-file-handling.md` or `assets/js/search.js`).
- Steps to reproduce the issue or proof-of-concept.
- Suggested fix or safer alternative code example (if available).

---

## ⏱️ Response & Disclosure Timeline

- **Acknowledgment**: You can expect an initial response within **24 to 48 hours**.
- **Assessment**: The maintainers will evaluate the report and confirm the vulnerability.
- **Fix & Patch**: Confirmed security vulnerabilities or insecure code examples will be patched promptly on the `main` branch.
- **Credit**: Valid security contributions will be acknowledged in the commit log and contributor notes (unless you request to remain anonymous).

Thank you for helping keep **Coding** safe, accurate, and secure for learners worldwide! 🚀
