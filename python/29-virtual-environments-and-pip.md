---
layout: default
title: "29 virtual environments and pip"
---

# Virtual Environments and pip

## Definition

venv, pip, dependencies, requirements.txt; python -m venv/pip install/list/freeze; Windows and Unix activation; avoid global installs.

## Hindi Explanation

Virtual environment dependencies alag rakhta hai; python -m pip sahi interpreter se chalta hai.

## Marathi Explanation

Virtual environment dependencies veglya thevto; python -m pip yogya interpreter madhun chalto.

## Hinglish Explanation

venv, pip, dependencies, requirements.txt; python -m venv/pip install/list/freeze; Windows and Unix activation; avoid global installs.. Is concept ko chhote code me use karke result dekhein.

## Why Use It?

venv, pip, dependencies, requirements.txt; python -m venv/pip install/list/freeze; Windows and Unix activation; avoid global installs.. Isse practical programs banana aur unka behavior samajhna aasaan hota hai.

## Simple Explanation

Virtual environment dependencies alag rakhta hai; python -m pip sahi interpreter se chalta hai.

## Syntax

```bash
python -m venv .venv
```

Activate in a terminal if desired:

```text
Windows PowerShell: .venv\Scripts\Activate.ps1
Windows Command Prompt: .venv\Scripts\activate.bat
macOS/Linux: source .venv/bin/activate
```

Use the environment's interpreter to install and record dependencies:

```bash
python -m pip install package-name
python -m pip list
python -m pip freeze
python -m pip freeze > requirements.txt
python -m pip install -r requirements.txt
```


## Example

```bash
python -m venv .venv
python -m pip install package
python -m pip list
python -m pip freeze
```

## Code Breakdown

venv, pip, dependencies, requirements.txt; python -m venv/pip install/list/freeze; Windows and Unix activation; avoid global installs.. Example ko line by line padhein, input aur output identify karein, phir ek value badal kar dobara run karein.

## Output

```text
Environment created
```

## Another Practical Example

Create a clean environment, install a package, and record requirements.

## Common Mistakes

venv, pip, dependencies, requirements.txt; python -m venv/pip install/list/freeze; Windows and Unix activation; avoid global installs.. Inputs aur boundary cases check karein.

## Important Notes

venv, pip, dependencies, requirements.txt; python -m venv/pip install/list/freeze; Windows and Unix activation; avoid global installs.

## Real-World Usage

Yeh concept scripts, automation, tools, backend aur data applications me milta hai.

## Try It Yourself

Compare pip list and pip freeze inside the environment.

## Mini Challenge

Recreate dependencies from requirements.txt in a fresh environment.

## Related Topics

[Python Curriculum Home](00-README.md) aur pichhle/agale lesson ko dekhein.

## Navigation

[Previous: 28 Testing and Debugging](28-testing-and-debugging.md)  
[Home](00-README.md)  
[Next: 30 Project Structure and Best Practices](30-project-structure-and-best-practices.md)

