---
layout: default
title: "23 testing and debugging"
---

# Testing and Debugging

## Definition

Testing checks that software behaves as expected. Debugging is the process of finding and correcting the cause of incorrect behavior.

## Hindi Explanation

Testing expected behavior ko verify karta hai. Debugging galti ke asli karan ko dhoondhne mein madad karta hai.

## Marathi Explanation

Testing apekshit behavior tapasate. Debugging chukiche mool karan shodhayla madat karto.

## Hinglish Explanation

Test repeatable proof deta hai; debugger code ko step-by-step dekhne deta hai.

## Why Use It?

Tests catch regressions, document expected behavior, and let developers change code with more confidence.

## Syntax and Example

A plain Java assertion:

```java
static int add(int first, int second) {
    return first + second;
}

assert add(2, 3) == 5;
```

Java language assertions run only when enabled with `java -ea`. They are not a full testing framework.

## JUnit Example

With JUnit Jupiter configured in a build tool:

```java
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

class CalculatorTest {
    @Test
    void addsTwoNumbers() {
        assertEquals(5, Calculator.add(2, 3));
    }
}
```

## Code Breakdown

Tests name the behavior and compare expected with actual results. Keep tests focused, independent, and repeatable. Include boundary cases and invalid inputs, not just the typical path.

## Another Practical Example

For a score conversion, test `0`, a boundary score, the maximum, and out-of-range values. Use an IDE breakpoint to pause, inspect variables, step over a line, and continue.

## Common Mistakes

- Testing only one happy path.
- Writing tests that depend on execution order or external state.
- Changing expected values simply to make a failing test pass.
- Reading only the last line of a stack trace; the first relevant application frame often identifies the failure location.

## Important Notes

Use a test framework such as JUnit for automated unit tests. Log or inspect the smallest reproducible case; do not swallow exceptions that reveal the defect.

## Real-World Usage

Teams run automated tests on every change to protect critical behavior and enable safe refactoring.

## Try It Yourself

Write tests for a leap-year method, including years divisible by 100 and 400.

## Mini Challenge

Test a bank account's deposit and withdrawal rules, including zero, negative, and insufficient-funds cases.

## Related Topics

[Methods](08-methods.md) · [Exceptions](18-exceptions-and-validation.md) · [Build Tools](24-build-tools-and-mini-projects.md)

## Navigation

[Previous: Dates and Time](22-dates-and-time.md) | [Home](00-README.md) | [Next: Build Tools and Projects](24-build-tools-and-mini-projects.md)

