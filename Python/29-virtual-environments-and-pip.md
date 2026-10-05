---
layout: default
title: "Virtual Environments and Pip"
---

# Virtual Environments and Package Management (`venv` & `pip`)

> 🟡 Intermediate

## 📖 Definition

- **Virtual Environment (`venv`):** An isolated self-contained Python directory environment that allows a project to install specific library dependencies without affecting global system Python packages or other projects.
- **`pip`:** The official package installer for Python used to download and install packages from the **Python Package Index (PyPI)**.

## 🇮🇳 Hindi

Har Python project ke dependencies alag rakhne ke liye **Virtual Environment (`venv`)** ka use hota hai. Third-party packages (jaise `requests`, `pandas`, `flask`) install karne ke liye **`pip`** tool ka use hota hai. Project requirements save karne ke liye `pip freeze > requirements.txt` use kiya jata hai.

## 🚩 Marathi

Project dependencies isolate karnyasathi **Virtual Environment** vaparatat. Packages install karnyasathi **`pip`** aani requirements record sathi `requirements.txt` vaparatat.

## 📝 1. Creating & Activating Virtual Environments

### Step 1: Create Virtual Environment
Run in your project root folder:

```bash
# Creates a virtual environment directory named 'venv'
python3 -m venv venv  # macOS/Linux
py -m venv venv       # Windows
```

### Step 2: Activate Environment

```bash
# On macOS / Linux Terminal:
source venv/bin/activate

# On Windows Command Prompt (cmd):
venv\Scripts\activate.bat

# On Windows PowerShell:
venv\Scripts\Activate.ps1
```

*(Once activated, your terminal prompt will display `(venv)` at the beginning!).*

### Step 3: Deactivate Environment
```bash
deactivate
```

## 📝 2. Package Management with `pip`

```bash
# 1. Installing a package from PyPI
pip install requests

# 2. Installing specific version
pip install requests==2.31.0

# 3. Listing installed packages in project
pip list

# 4. Exporting installed dependencies to requirements.txt
pip freeze > requirements.txt

# 5. Installing dependencies on a new machine from requirements.txt
pip install -r requirements.txt
```

## 💡 Complete Example: Sample `requirements.txt` & Setup Script

### File: `requirements.txt`
```text
requests==2.31.0
pytest==7.4.3
black==23.11.0
```

### Setup Workflow Commands:

```bash
# 1. Clone or navigate to project
cd my_python_project

# 2. Create and activate virtual environment
python3 -m venv .venv
source .venv/bin/activate

# 3. Upgrade pip and install requirements
pip install --upgrade pip
pip install -r requirements.txt
```

## ⚠️ Common Mistakes

- Installing third-party packages globally without activating a virtual environment first, resulting in system-wide package version conflicts across projects!
- Committing the entire `venv/` folder into Git repositories!
  > 💡 **Best Practice:** Always add `venv/` and `.venv/` to your project's **`.gitignore`** file! Commit only `requirements.txt`.

## 🛡️ Safety / Important Notes

If PowerShell blocks activation on Windows with an ExecutionPolicy error, run `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` in PowerShell to enable script activation.

## 🌍 Real-World Usage

All professional Python projects (web applications, data science scripts, automation tools, microservices) use virtual environments and `requirements.txt` to guarantee reproducible builds.

## 🧪 Try It Yourself

1. Open your terminal and create a test virtual environment `python3 -m venv my_env`.
2. Activate it, install `requests` using `pip install requests`, and run `pip freeze`.

## 🎯 Mini Challenge

Export your virtual environment packages into `requirements.txt`, deactivate the environment, delete the folder, re-create a fresh environment, and install dependencies from `requirements.txt`.

## 🔗 Related Topics

- [Project Structure and Best Practices](30-project-structure-and-best-practices.html)
- [Capstones & Mini Projects](31-mini-projects.html)

## 🧭 Navigation

[← Python Home](./) | [← Previous: Testing and Debugging](28-testing-and-debugging.html) | [Next: Project Structure →](30-project-structure-and-best-practices.html)

