# C Mini Projects

> 🟡 Intermediate

Build small command-line utilities to test your knowledge of loops, switch statements, functions, and structs in C.

---

## 🏗️ Project 1: Command Line Calculator

```c
#include <stdio.h>

int main() {
    char op;
    double num1, num2;

    printf("Enter operator (+, -, *, /): ");
    scanf(" %c", &op);

    printf("Enter two numbers: ");
    scanf("%lf %lf", &num1, &num2);

    switch (op) {
        case '+':
            printf("%.2lf + %.2lf = %.2lf\n", num1, num2, num1 + num2);
            break;
        case '-':
            printf("%.2lf - %.2lf = %.2lf\n", num1, num2, num1 - num2);
            break;
        case '*':
            printf("%.2lf * %.2lf = %.2lf\n", num1, num2, num1 * num2);
            break;
        case '/':
            if (num2 != 0)
                printf("%.2lf / %.2lf = %.2lf\n", num1, num2, num1 / num2);
            else
                printf("Error: Division by zero!\n");
            break;
        default:
            printf("Error: Invalid operator!\n");
    }

    return 0;
}
```

---

## 🏗️ Project 2: Number Guessing Game

```c
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int secret, guess, attempts = 0;
    srand(time(0));
    secret = (rand() % 100) + 1; // Number between 1 and 100

    printf("=== Number Guessing Game ===\n");

    do {
        printf("Enter your guess (1-100): ");
        scanf("%d", &guess);
        attempts++;

        if (guess > secret) {
            printf("Too high! Try again.\n");
        } else if (guess < secret) {
            printf("Too low! Try again.\n");
        } else {
            printf("\nCongratulations! You guessed it in %d attempts.\n", attempts);
        }
    } while (guess != secret);

    return 0;
}
```

---

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Structures](12-structures.md)
