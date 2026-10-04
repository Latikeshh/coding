---
layout: default
title: "Set Up Python"
---

# Set Up Python Development Environment

> 🟢 Beginner

## 📖 Definition

Setting up the **Python Environment** involves installing the Python 3 interpreter (CPython), configuring system environment variables (`PATH`), running interactive code snippets using the **REPL (Read-Eval-Print Loop)** shell, and executing `.py` script files from your terminal or code editor.

## 🇮🇳 Hindi

Python code chalane ke liye aapko Python 3 install karna hota hai. Python mein do modes hote hain: **REPL (Interactive Shell)** jisme aap line-by-line code test kar sakte hain, aur **Script Mode** jisme aap `.py` file banakar poora program ek saath execute karte hain.

## 🚩 Marathi

Python 3 install kelyanantar tumhi **REPL Shell** madhye turant code test karu shakta kiva `.py` file tayar karun terminal madhun script run karu shakta.

## 🤔 Why Do We Use It?

Python is one of the most versatile, human-readable programming languages in the world. Having a properly configured Python environment allows you to write scripts for web automation, backend APIs, data science, machine learning, and administrative tools.

## 🧠 Simple Explanation

Think of the **Python Interpreter** as an instant multi-lingual translator. The **REPL Shell** is like talking to the translator face-to-face (you say one sentence, it translates instantly). **Script Mode (`.py` file)** is like handing the translator a pre-written letter to read and execute all at once.

## 📝 Terminal Verification Commands

Open your terminal or command prompt and test these version commands:

```bash
# Windows Python Launcher
py --version

# Standard Cross-Platform Commands
python --version
python3 --version
```

### Launching REPL Shell:
Type `python3` (or `py` on Windows) in your terminal to enter the `>>>` prompt. Type `2 + 3` and press `Enter` to get an instant result. Type `exit()` to leave the REPL.

## 💡 Complete Example: Writing & Executing Your First Script

Create a file named `first_script.py`:

```python
# first_script.py - First Python Application
import sys

print("Hello, Welcome to Python 3 Programming!")
print(f"Running on Python Version: {sys.version.split()[0]}")
```

### Executing the Script from Terminal:

```bash
python3 first_script.py  # macOS/Linux
py first_script.py       # Windows
```

## 👀 Output

```text
Hello, Welcome to Python 3 Programming!
Running on Python Version: 3.12.2
```

## ⚠️ Common Mistakes

- Forgetting to check "Add Python to PATH" during the Windows installer wizard, causing `python is not recognized` terminal errors.
- Confusing Python 2 commands with Python 3 (`python --version` showing Python 2.7 instead of Python 3.x).
- Typing Python commands directly in the OS terminal instead of launching the Python REPL shell first.

## 🛡️ Safety / Important Notes

Always use Python 3 for new projects. Python 2 reached official End-of-Life (EOL) in 2020 and is no longer supported.

## 🌍 Real-World Usage

Backend web services (Django, FastAPI), data processing scripts, automated testing pipelines, network tools, and AI/ML model execution.

## 🧪 Try It Yourself

1. Open your terminal and start the Python REPL shell (`python3` or `py`).
2. Type `print(50 * 4)` and press `Enter`.
3. Create a `hello.py` file containing `print("Learning Python is fun!")` and run it from your terminal.

## 🎯 Mini Challenge

Write a Python script that prints three lines: a greeting message, your primary programming goal, and the result of calculating `365 * 24` (hours in a year).

## 🔗 Related Topics

- [Introduction to Python](02-introduction-to-python.md)
- [Variables and Data Types](03-variables-and-data-types.md)

## 🧭 Navigation

[← Python Home](00-README.md) | [Next: Introduction to Python →](02-introduction-to-python.md)
