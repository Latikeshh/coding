---
layout: default
title: "Testing and Debugging"
---

# Testing and Debugging in Java

> 🟡 Intermediate

## 📖 Definition

- **Unit Testing:** Automating the verification of individual units of code (like isolated methods or classes) using frameworks such as **JUnit 5 (Jupiter)**.
- **Debugging:** Isolating, inspecting, and fixing runtime errors, logical bugs, and exceptions using IDE breakpoints, stack trace inspection, and variable watches.

## 🇮🇳 Hindi

Software quality maintain karne ke liye **JUnit 5** test framework se automated unit tests likhe jaate hain. Runtime bugs fix karne ke liye IDE breakpoints, stack trace inspection, aur variable inspection ka use karke line-by-line execution debug kiya jata hai.

## 🚩 Marathi

Automated tests sathi **JUnit 5** framework vaparatat. Code madhil bugs shodhnyasathi IDE Breakpoints aani Debugger vaparatat.

## 📝 1. Core JUnit 5 Test Annotations

| Annotation | What It Does |
|---|---|
| `@Test` | Marks a method as an automated test case |
| `@BeforeEach` | Executes before **each** `@Test` method in the test class |
| `@AfterEach` | Executes after **each** `@Test` method |
| `@BeforeAll` | Executes **once** before all tests in class (`static`) |
| `@AfterAll` | Executes **once** after all tests in class (`static`) |
| `@DisplayName("Custom Name")` | Declares a readable custom test title |
| `@Disabled` | Skips execution of test method |

## 📝 2. JUnit 5 Assertions

```java
import static org.junit.jupiter.api.Assertions.*;

assertEquals(expected, actual);
assertTrue(condition);
assertFalse(condition);
assertNull(objectReference);
assertNotNull(objectReference);

// Exception Assertion (Verifies specific exception is thrown)
assertThrows(IllegalArgumentException.class, () -> {
    methodThatShouldThrow();
});
```

## 📝 3. Effective IDE Debugging Strategies

1. **Set Breakpoint:** Click on any line margin in IntelliJ IDEA or VS Code to pause execution when reached.
2. **Inspect Variables:** View current field values in heap memory in the debugger scope window.
3. **Control Stepping:**
   - **Step Over (F8):** Executes current line and moves to next line.
   - **Step Into (F7):** Jumps inside called method.
   - **Step Out (Shift+F8):** Finishes current method and returns to caller.
   - **Resume (F9):** Resumes normal execution until next breakpoint.

## 💡 Complete Example: Class & Unit Test Class

### Class to Test: `CalculatorService.java`
```java
public class CalculatorService {
    
    public double divide(double numerator, double denominator) {
        if (denominator == 0.0) {
            throw new ArithmeticException("Division by zero is not allowed.");
        }
        return numerator / denominator;
    }

    public boolean isEven(int number) {
        return number % 2 == 0;
    }
}
```

### Automated Unit Test: `CalculatorServiceTest.java`
```java
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

@DisplayName("Calculator Service Unit Tests")
public class CalculatorServiceTest {

    private CalculatorService calculator;

    @BeforeEach
    void setUp() {
        calculator = new CalculatorService(); // Re-instantiated before each test
    }

    @Test
    @DisplayName("Should divide two valid numbers correctly")
    void testValidDivision() {
        double result = calculator.divide(10.0, 2.0);
        assertEquals(5.0, result, 0.0001, "10 / 2 should equal 5.0");
    }

    @Test
    @DisplayName("Should throw ArithmeticException when dividing by zero")
    void testDivisionByZeroThrowsException() {
        Exception exception = assertThrows(ArithmeticException.class, () -> {
            calculator.divide(10.0, 0.0);
        });
        
        assertEquals("Division by zero is not allowed.", exception.getMessage());
    }

    @Test
    @DisplayName("Should correctly identify even numbers")
    void testIsEven() {
        assertTrue(calculator.isEven(4));
        assertFalse(calculator.isEven(7));
    }
}
```

## 👀 Test Execution Output

```text
JUnit Jupiter Test Runner Execution
-------------------------------------------------------
[✔] Calculator Service Unit Tests
   [✔] Should divide two valid numbers correctly
   [✔] Should throw ArithmeticException when dividing by zero
   [✔] Should correctly identify even numbers

Tests passed: 3 of 3 (100% SUCCESS)
-------------------------------------------------------
```

## ⚠️ Common Mistakes

- Writing unit tests that depend on each other's execution order or shared mutable global state.
- Asserting only happy-path inputs while ignoring edge cases and boundary conditions (e.g. `null`, `0`, negative values).
- Reading only the bottom line of an error stack trace; always look for the **first relevant line number in your own package code**!

## 🛡️ Safety / Important Notes

Keep unit tests fast, isolated, repeatable, and independent so they can run automatically during continuous integration build pipelines (`mvn test`).

## 🌍 Real-World Usage

CI/CD deployment pipelines (GitHub Actions, Jenkins), regression testing during codebase refactoring, and verifying business validation rules.

## 🧪 Try It Yourself

1. Create a `BankAccount` class with `deposit()` and `withdraw()` methods.
2. Write a JUnit test class verifying that withdrawing more than balance throws `IllegalArgumentException`.

## 🎯 Mini Challenge

Write a JUnit test verifying that a custom string reverse method returns `""` when passed `""` and correctly handles null arguments by throwing `NullPointerException`.

## 🔗 Related Topics

- [Exceptions and Validation](18-exceptions-and-validation.html)
- [Build Tools and Mini Projects](24-build-tools-and-mini-projects.html)

## 🧭 Navigation

[← Java Home](./) | [← Previous: Dates and Time](22-dates-and-time.html) | [Next: Build Tools and Mini Projects →](24-build-tools-and-mini-projects.html)

