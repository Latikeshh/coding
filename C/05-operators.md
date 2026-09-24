# Operators in C

> 🟢 Beginner

## 📖 Definition

An **operator** is a symbol that tells the C compiler to perform specific mathematical, relational, bitwise, or logical transformations on data values called **operands**.

## 🌐 Multilingual Explanation

### English
C provides rich operators for arithmetic, comparisons, logical evaluation, assignment, and bitwise manipulation. In C integer division (`int / int`), fractional decimal parts are truncated (dropped). Explicit type casting (e.g. `(double)a / b`) is required to preserve decimal precision.

### Hindi
C mein alag-alag kaam karne ke liye operators hote hain. Arithmetic, relational, logical, assignment aur bitwise operators isme shamil hain. Two integers ko divide karne par integer division hota hai (`5 / 2 = 2`). Decimal value pane ke liye type casting `(double)a / b` zaroori hai.

### Marathi
C madhye vegvegale calculations sathi operators vaparale jatat. Arithmetic, relational, logical, assignment aani bitwise operators hi tyanchi prakar aahet. Don integers cha bhagakar nehmi integer milto (`5 / 2 = 2`). Decimal uttarasathi type casting `(double)a / b` kareve lagte.

### Hinglish
Operators data variables par operations perform karte hain. Logical comparison ke liye `==` aur assignment ke liye `=` use hota hai. Integer division fractional values drop kar deta hai (`15 / 4 = 3`), isliye exact answer ke liye `(float)15 / 4` cast karna padta hai.

## 🤔 Why Do We Use Them?

Operators are the building blocks of algorithms. They calculate total prices, compare user scores, verify access permissions, evaluate complex formulas, and manipulate hardware register flags.

## 🧠 Simple Explanation

- **Arithmetic Operators:** Perform math like addition (`+`) or subtraction (`-`).
- **Relational Operators:** Ask questions like "Is `a` equal to `b`?" (`a == b`) or "Is `a` greater?" (`a > b`). The answer is always `1` (`true`) or `0` (`false`).
- **Logical Operators:** Combine multiple conditions like "Is user logged in AND is admin?" (`isLoggedIn && isAdmin`).

## 📝 Operator Categories in C

### 1. Arithmetic Operators
| Operator | Name | Example | Result (`a=10, b=3`) |
|---|---|---|---|
| `+` | Addition | `a + b` | `13` |
| `-` | Subtraction | `a - b` | `7` |
| `*` | Multiplication | `a * b` | `30` |
| `/` | Division | `a / b` | `3` (Integer division drops `.333`!) |
| `%` | Modulus (Remainder) | `a % b` | `1` (10 divided by 3 leaves remainder 1) |

### 2. Relational & Equality Operators
| Operator | Name | Example | Evaluation |
|---|---|---|---|
| `==` | Equal To | `a == b` | `0` (`false`) |
| `!=` | Not Equal To | `a != b` | `1` (`true`) |
| `>` | Greater Than | `a > b` | `1` (`true`) |
| `<` | Less Than | `a < b` | `0` (`false`) |
| `>=` | Greater Than or Equal | `a >= 10` | `1` (`true`) |
| `<=` | Less Than or Equal | `b <= 2` | `0` (`false`) |

### 3. Logical Operators
| Operator | Name | Meaning | Result |
|---|---|---|---|
| `&&` | Logical AND | Returns `1` only if **both** conditions are `true` | `(10 > 5 && 3 < 5)` -> `1` |
| `\|\|` | Logical OR | Returns `1` if **at least one** condition is `true` | `(10 < 5 \|\| 3 < 5)` -> `1` |
| `!` | Logical NOT | Inverts boolean truth value (`!1` -> `0`, `!0` -> `1`) | `!(10 == 10)` -> `0` |

### 4. Increment & Decrement Operators
- **Prefix (`++x` / `--x`):** Increments/decrements the variable *before* evaluating the expression.
- **Postfix (`x++` / `x--`):** Evaluates expression using current value *first*, then increments/decrements.

## 💡 Practical Example

Here is a store checkout calculation script demonstrating arithmetic, ternary, assignment, and bitwise operators:

```c
#include <stdio.h>

int main(void) {
    int item1Price = 450;
    int item2Price = 350;
    int quantity1 = 2;
    int quantity2 = 1;

    // 1. Arithmetic calculations
    int rawTotal = (item1Price * quantity1) + (item2Price * quantity2); // (900 + 350) = 1250

    // 2. Integer division vs Type Casting
    int totalItems = quantity1 + quantity2; // 3
    int intAverage = rawTotal / totalItems; // 1250 / 3 = 416 (truncated)
    double exactAverage = (double)rawTotal / totalItems; // 416.6667

    // 3. Ternary Operator (Condition ? trueValue : falseValue)
    double discountPercentage = (rawTotal >= 1000) ? 10.0 : 0.0;
    double discountAmount = rawTotal * (discountPercentage / 100.0);
    double finalBill = rawTotal - discountAmount;

    // 4. Increment and Compound Assignment
    int invoiceNumber = 1001;
    invoiceNumber++; // invoiceNumber becomes 1002

    printf("--- STORE RECEIPT (Invoice #%d) ---\n", invoiceNumber);
    printf("Raw Total Cost    : $%d\n", rawTotal);
    printf("Average/Item (int): $%d\n", intAverage);
    printf("Average/Item (exact): $%.2lf\n", exactAverage);
    printf("Discount Applied  : %.0lf%%\n", discountPercentage);
    printf("Discount Amount   : $%.2lf\n", discountAmount);
    printf("Final Bill Amount : $%.2lf\n", finalBill);

    return 0;
}
```

## 🔍 Code Breakdown

- `rawTotal / totalItems`: Performs integer division (`1250 / 3`), truncating the decimal portion resulting in `416`.
- `(double)rawTotal / totalItems`: Typecasts `rawTotal` to a `double` before division, forcing C to perform double-precision floating-point division resulting in `416.666667`.
- `(rawTotal >= 1000) ? 10.0 : 0.0`: Ternary operator checks if `rawTotal` is at least 1000. If `1` (`true`), returns `10.0`; otherwise returns `0.0`.

## 👀 Output

```text
--- STORE RECEIPT (Invoice #1002) ---
Raw Total Cost    : $1250
Average/Item (int): $416
Average/Item (exact): $416.67
Discount Applied  : 10%
Discount Amount   : $125.00
Final Bill Amount : $1125.00
```

## ⚠️ Common Mistakes

- **Confusing `=` and `==`:** Using `=` (assignment) inside an `if` condition like `if (status = 5)` assigns `5` to `status` and always evaluates to `true`! Always use `==` for comparison: `if (status == 5)`.
- **Bitwise vs Logical Operators:** Confusing single `&` or `|` (bitwise AND / OR operating on individual bit positions) with `&&` or `||` (logical boolean evaluation).
- **Modulus on Floating Point Numbers:** The `%` operator only works with integer data types (`int`, `char`, `short`, `long`). Using `%` with `float` or `double` causes compilation errors (use `fmod()` from `<math.h>` instead).

## 🛡️ Safety / Important Precedence Rules

1. Parentheses `()` have the highest precedence. Always use parentheses in complex formulas to make evaluation order explicit!
2. Multiplication/Division `* / %` execute before Addition/Subtraction `+ -`.
3. Relational operators `< <= > >=` execute before Equality `== !=`.
4. Logical AND `&&` executes before Logical OR `||`.

## 🌍 Real-World Usage

Bitwise operators (`&`, `|`, `^`, `~`, `<<`, `>>`) are used heavily in embedded systems to read hardware sensor registers, pack networking protocol headers, perform cryptography, and optimize graphics routines.

## 🧪 Try It Yourself

1. Declare two `int` variables: `a = 17` and `b = 5`.
2. Print results for `a + b`, `a - b`, `a * b`, `a / b` (integer division), `(double)a / b` (casted division), and `a % b`.

## 🎯 Mini Challenge

Write a program that takes a total number of seconds (e.g. `3800` seconds) and converts it into Hours, Minutes, and Remaining Seconds using `/` and `%` operators (`1 hour = 3600s`, `1 min = 60s`).

## 🔗 Related Topics

- [Variables and Data Types](03-variables-and-data-types.md)
- [Input and Output](04-input-output.md)
- [Conditionals](06-conditionals.md)

## 🧭 Navigation

[← C Home](00-README.md) | [← Previous: Input/Output](04-input-output.md) | [Next: Conditionals →](06-conditionals.md)
