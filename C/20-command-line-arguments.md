# Command Line Arguments (`argc`, `argv`)

> 🟡 Intermediate

## 📖 Definition

Command line arguments allow users to pass arguments directly to a C executable when launching it from the terminal shell.

---

## 📝 Syntax & Mechanics

The `main` function receives two parameters:
- `int argc` (Argument Count): Total number of arguments passed (including program executable name).
- `char *argv[]` (Argument Vector): An array of null-terminated string pointers representing each argument.

```c
#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {
    printf("Executable name: %s\n", argv[0]);
    printf("Total arguments passed: %d\n", argc - 1);

    for (int i = 1; i < argc; i++) {
        printf("Arg [%d]: %s\n", i, argv[i]);
    }

    return 0;
}
```

---

## 💻 Running in Terminal

```bash
gcc program.c -o program
./program hello world 123
```

## 👀 Output

```text
Executable name: ./program
Total arguments passed: 3
Arg [1]: hello
Arg [2]: world
Arg [3]: 123
```

---

## 💡 Converting String Arguments to Numbers

Use `atoi()` or `atof()` from `<stdlib.h>`:

```c
int num1 = atoi(argv[1]);
int num2 = atoi(argv[2]);
printf("Sum: %d\n", num1 + num2);
```

---

## 🧪 Try It Yourself

Write a CLI program `add` that takes two numbers as arguments, converts them with `atoi()`, and prints their sum.

## 🎯 Mini Challenge

Write a program that takes a file name as a CLI argument (`./view notes.txt`) and prints its contents to stdout.

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Storage Classes](19-storage-classes.md) | [Next: Multi-file Projects →](21-multi-file-projects.md)
