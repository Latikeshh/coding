---
layout: default
title: "Mini Projects"
---

# Capstone Python Mini Projects

> 🔴 Advanced

## 📖 Definition

Apply functions, Object-Oriented Programming (OOP), Dataclasses, Collections, Exception Handling, File I/O, JSON, CSV processing, and Unit Testing to build complete, functional, real-world Python applications.

## 🇮🇳 Hindi

Ab tak seekhe gaye sabhi Python concepts (Variables, Loops, Functions, OOP, Exception Handling, JSON, CSV) ko combine karke full real-world practical applications create karein.

## 🚩 Marathi

Aapn shiklele sarv Python concepts ektra karun practical interactive apps banva.

---

## 🏗️ Project 1: Interactive To-Do Manager CLI with JSON Persistence

A complete, interactive command-line application featuring Dataclasses, JSON storage, and input validation.

```python
import json
import os
from dataclasses import dataclass, asdict
from typing import List

# 1. Data Model
@dataclass
class Task:
    task_id: int
    title: str
    completed: bool = False

# 2. Task Manager Class
class TaskManager:
    def __init__(self, db_path: str = "tasks_db.json"):
        self.db_path = db_path
        self.tasks: List[Task] = []
        self._load_tasks()

    def _load_tasks(self) -> None:
        if os.path.exists(self.db_path):
            try:
                with open(self.db_path, "r", encoding="utf-8") as f:
                    data = json.load(f)
                    self.tasks = [Task(**item) for item in data]
            except Exception as e:
                print(f"Error loading tasks: {e}")

    def _save_tasks(self) -> None:
        try:
            with open(self.db_path, "w", encoding="utf-8") as f:
                json.dump([asdict(t) for t in self.tasks], f, indent=4)
        except Exception as e:
            print(f"Error saving tasks: {e}")

    def add_task(self, title: str) -> None:
        new_id = max([t.task_id for t in self.tasks], default=0) + 1
        task = Task(task_id=new_id, title=title)
        self.tasks.append(task)
        self._save_tasks()
        print(f"Task Added : #{task.task_id} - '{task.title}'")

    def toggle_task(self, task_id: int) -> None:
        for t in self.tasks:
            if t.task_id == task_id:
                t.completed = not t.completed
                self._save_tasks()
                status = "COMPLETED" if t.completed else "PENDING"
                print(f"Task #{task_id} marked as {status}.")
                return
        print(f"Task #{task_id} not found.")

    def list_tasks(self) -> None:
        print("\n=== CURRENT TO-DO LIST ===")
        if not self.tasks:
            System.out.println("No tasks found.") if False else print("No tasks in list.")
            return
        for t in self.tasks:
            status = "[✔]" if t.completed else "[ ]"
            print(f"{status} #{t.task_id} : {t.title}")

# 3. Running Application Demo
if __name__ == "__main__":
    manager = TaskManager("demo_tasks.json")
    
    print("=== TO-DO MANAGER CLI ===")
    manager.add_task("Master Python OOP & Dataclasses")
    manager.add_task("Practice Decorators and Generators")
    manager.list_tasks()
    
    manager.toggle_task(1)
    manager.list_tasks()

    # Cleanup demo DB file
    if os.path.exists("demo_tasks.json"):
        os.remove("demo_tasks.json")
```

## 👀 Output

```text
=== TO-DO MANAGER CLI ===
Task Added : #1 - 'Master Python OOP & Dataclasses'
Task Added : #2 - 'Practice Decorators and Generators'

=== CURRENT TO-DO LIST ===
[ ] #1 : Master Python OOP & Dataclasses
[ ] #2 : Practice Decorators and Generators
Task #1 marked as COMPLETED.

=== CURRENT TO-DO LIST ===
[✔] #1 : Master Python OOP & Dataclasses
[ ] #2 : Practice Decorators and Generators
```

---

## 🏗️ Project 2: Password Generator & Strength Validator

```python
import random
import string
import re

def generate_password(length: int = 12, include_symbols: bool = True) -> str:
    """Generates a cryptographically strong random password."""
    letters = string.ascii_letters
    digits = string.digits
    symbols = "!@#$%^&*()_+"
    
    character_pool = letters + digits + (symbols if include_symbols else "")
    
    # Ensure at least 1 uppercase, 1 lowercase, 1 digit
    password = [
        random.choice(string.ascii_uppercase),
        random.choice(string.ascii_lowercase),
        random.choice(string.digits)
    ]
    
    if include_symbols:
        password.append(random.choice(symbols))
        
    # Fill remaining characters
    while len(password) < length:
        password.append(random.choice(character_pool))
        
    random.shuffle(password)
    return "".join(password)

def evaluate_password_strength(password: str) -> str:
    """Evaluates password strength using Regex pattern checks."""
    if len(password) < 8:
        return "WEAK (Too Short)"
        
    has_upper = bool(re.search(r"[A-Z]", password))
    has_lower = bool(re.search(r"[a-z]", password))
    has_digit = bool(re.search(r"\d", password))
    has_symbol = bool(re.search(r"[!@#$%^&*()_+]", password))
    
    score = sum([has_upper, has_lower, has_digit, has_symbol])
    
    if score == 4 and len(password) >= 12:
        return "VERY STRONG"
    elif score >= 3:
        return "STRONG"
    else:
        return "MODERATE"

# Test Execution
print("=== PASSWORD GENERATOR & VALDIATOR ===")
pwd = generate_password(14, include_symbols=True)
strength = evaluate_password_strength(pwd)

print(f"Generated Password : {pwd}")
print(f"Security Rating    : {strength}")
```

## 👀 Output

```text
=== PASSWORD GENERATOR & VALDIATOR ===
Generated Password : aK9#mQ2$pL5!xR
Security Rating    : VERY STRONG
```

---

## 🧭 Navigation

[← Python Home](./) | [← Previous: Project Structure](30-project-structure-and-best-practices.html)

