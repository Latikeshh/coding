---
layout: default
title: "Operators and Expressions"
---

# Operators and Expressions in Java

> 🟢 Beginner

## 📖 Definition

An **Operator** is a special symbol used to perform calculations, assign values, evaluate boolean conditions, and manipulate bit patterns. An **Expression** combines variables, constants, and operators to compute a resulting value.

## 🇮🇳 Hindi

Operators calculations karne, variables compare karne, aur logical conditions check karne ke kaam aate hain. Short-circuit operators (`&&`, `||`) performance aur null-checks ke liye sabse important hote hain.

## 🚩 Marathi

Operators cha wapar ganit (calculations), tulana (comparison), aani logical checks karnyasathi kela jato.

## 🤔 Why Do We Use Them?

Operators are the core evaluation logic of computer software—determining discount eligibility, calculating game physics, performing bitwise flag checks, and controlling decision branching.

## 📝 Operator Categories

### 1. Arithmetic Operators
`+` (Add), `-` (Subtract), `*` (Multiply), `/` (Divide), `%` (Modulus / Remainder)

### 2. Increment & Decrement (`++`, `--`)
- **Prefix (`++x`):** Increments variable **first**, then evaluates in expression.
- **Postfix (`x++`):** Evaluates variable in current expression **first**, then increments.

```java
int a = 5;
int b = ++a; // a = 6, b = 6

int x = 5;
int y = x++; // y = 5, x = 6
```

### 3. Comparison / Relational Operators
`==` (Equal), `!=` (Not Equal), `>` (Greater), `<` (Less), `>=` (Greater Equal), `<=` (Less Equal)

### 4. Logical & Short-Circuit Operators
- `&&` (Logical AND): Returns `true` only if **both** operands are true. Short-circuits if left side is `false`.
- `||` (Logical OR): Returns `true` if **at least one** operand is true. Short-circuits if left side is `true`.
- `!` (Logical NOT): Inverts boolean state.

### 5. Bitwise Operators (Operates on Binary Bits)
- `&` (Bitwise AND), `|` (Bitwise OR), `^` (Bitwise XOR), `~` (Bitwise NOT)
- `<<` (Left Shift), `>>` (Signed Right Shift), `>>>` (Unsigned Right Shift)

### 6. Ternary Operator (`condition ? valueIfTrue : valueIfFalse`)
Provides concise single-line conditional assignment.

```java
int score = 85;
String result = (score >= 40) ? "PASS" : "FAIL";
```

## 🧠 Operator Precedence Summary

1. Parentheses `()`
2. Postfix `x++`, `x--`
3. Prefix `++x`, `--x`, `!`, `~`
4. Multiplicative `*`, `/`, `%`
5. Additive `+`, `-`
6. Shift `<<`, `>>`, `>>>`
7. Relational `<`, `>`, `<=`, `>=`, `instanceof`
8. Equality `==`, `!=`
9. Bitwise `&`, `^`, `|`
10. Logical `&&`, `||`
11. Ternary `? :`
12. Assignment `=`, `+=`, `-=`, `*=`, `/=`, `%=`

## 💡 Complete Example: Operator Evaluation & Short-Circuiting

```java
public class OperatorMaster {
    public static void main(String[] args) {
        // Arithmetic & Integer Division
        int totalApples = 17;
        int students = 5;
        int perStudent = totalApples / students; // 3 (Integer division truncates!)
        int remaining = totalApples % students;  // 2 (Modulus)

        System.out.println("Apples per Student : " + perStudent);
        System.out.println("Remaining Apples   : " + remaining);

        // Short-Circuit Safety Check
        String username = "Aarav";
        // Safe check: if username is null, second condition is NEVER evaluated!
        boolean isValidUser = (username != null) && (username.length() >= 3);
        System.out.println("Is Valid User?     : " + isValidUser);

        // Bitwise Left Shift (Multiply by 2^n)
        int number = 8; // Binary: 0000 1000
        int shifted = number << 2; // Shift left 2 bits -> 32 (8 * 4)
        System.out.println("Bitwise Left Shift : " + shifted);

        // Ternary Operator
        double accountBalance = 4500.00;
        double withdrawalAmount = 1000.00;
        String transactionStatus = (accountBalance >= withdrawalAmount) 
                                   ? "Approved" 
                                   : "Declined: Insufficient Funds";
        System.out.println("Transaction        : " + transactionStatus);
    }
}
```

## 👀 Output

```text
Apples per Student : 3
Remaining Apples   : 2
Is Valid User?     : true
Bitwise Left Shift : 32
Transaction        : Approved
```

## ⚠️ Common Mistakes

- Using single assignment `=` instead of relational equality `==` inside conditions.
- Expecting integer division `5 / 2` to return `2.5` instead of `2` (use `5.0 / 2` for floating-point division!).
- Using `==` to compare Object/String contents instead of primitive values (use `.equals()` for string content comparison).

## 🛡️ Safety / Important Notes

Always use parentheses `()` when mixing arithmetic, logical `&&`, and `||` operators in a single statement to make execution order explicit.

## 🌍 Real-World Usage

Operators power invoice calculations, role-based access permission bitmasks, null-safety checks in backend services, and score thresholds in algorithms.

## 🧪 Try It Yourself

1. Test `System.out.println(10 / 4);` vs `System.out.println(10.0 / 4);`.
2. Write a ternary expression that checks if a number is even or odd using `% 2 == 0`.

## 🎯 Mini Challenge

Write a program that uses bitwise AND `&` to check whether a given integer is even or odd (`(number & 1) == 0`).

## 🔗 Related Topics

- [Variables and Data Types](03-variables-and-data-types.html)
- [Conditionals](06-conditionals.html)

## 🧭 Navigation

[← Java Home](./) | [← Previous: Input and Output](04-input-and-output.html) | [Next: Conditionals →](06-conditionals.html)

