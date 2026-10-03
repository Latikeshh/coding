# Java Program Structure

## Definition

Java source consists of declarations and statements organized into classes. Statements usually end with semicolons, and braces group blocks.

## Hindi Explanation

Java code classes aur methods ke andar organize hota hai. Semicolon statement ko khatam karta hai aur braces code block banate hain.

## Marathi Explanation

Java code classes ani methods madhye rachlela asto. Semicolon statement sampavto ani braces code block tayar kartat.

## Hinglish Explanation

Java source ko organized containers ki tarah socho: class ke andar method hota hai, aur method mein executable statements.

## Why Use It?

Consistent structure lets the compiler check code and helps people navigate larger programs.

## Syntax and Example

```java
// A line comment explains intent.
class Welcome {
    public static void main(String[] args) {
        String name = "Asha";
        if (!name.isBlank()) {
            System.out.println("Welcome, " + name);
        }
    }
}
```

## Code Breakdown

- `//` begins a single-line comment; `/* ... */` is a block comment.
- `class Welcome` declares a class.
- `main` is the conventional entry point for a basic application.
- The braces after `main` form a block. Indentation is not syntax, but good indentation reveals the block structure.
- `!` negates a boolean expression. Java identifiers and keywords are case-sensitive.

## Output

```text
Welcome, Asha
```

## Another Practical Example

```java
class Receipt {
    public static void main(String[] args) {
        // Calculate a simple item total.
        int quantity = 3;
        double price = 2.50;
        System.out.println("Total: " + quantity * price);
    }
}
```

## Common Mistakes

- Forgetting a semicolon after a statement.
- Mismatched `{` and `}` braces.
- Using `=` where a comparison such as `==` is intended.
- Thinking indentation controls Java blocks; braces do that.

## Important Notes

Expressions produce values; statements perform actions. Java has several comment forms, including documentation comments `/** ... */`. Keep comments focused on why code does something.

## Real-World Usage

Classes and methods give applications boundaries for responsibilities, from command-line entry points to service components.

## Try It Yourself

Change the name, add a second output line, and deliberately remove a semicolon to read the compiler diagnostic.

## Mini Challenge

Create `Profile.java` with a `main` method that prints a name, a learning goal, and a favorite number.

## Related Topics

[Setup](01-setup-java.md) · [Variables](03-variables-and-data-types.md)

## Navigation

[Previous: Setup](01-setup-java.md) | [Home](00-README.md) | [Next: Variables](03-variables-and-data-types.md)
