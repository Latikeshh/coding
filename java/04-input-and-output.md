---
layout: default
title: "04 input and output"
---

# Input and Output

## Definition

Input brings data into a program; output communicates results. The standard library provides `System.out` for output and `Scanner` as one beginner-friendly console input option.

## Hindi Explanation

Input se program user ka data leta hai aur output se result dikhata hai. `Scanner` keyboard input padhne ka ek saral tareeka hai.

## Marathi Explanation

Input madhun program user kadun mahiti gheto ani output madhun parinam dakhavto. `Scanner` keyboard input vachnyacha ek sopa marg aahe.

## Hinglish Explanation

Console input user se values leta hai; `System.out.println` result ko readable line mein dikhata hai.

## Why Use It?

Input makes a program respond to different users and situations rather than relying on fixed example values.

## Syntax and Example

```java
import java.util.Scanner;

class Greeting {
    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.print("Your name: ");
            String name = scanner.nextLine();
            System.out.println("Hello, " + name + "!");
        }
    }
}
```

## Output

```text
Your name: Asha
Hello, Asha!
```

## Code Breakdown

- `import` makes `Scanner` available by its short name.
- `nextLine()` reads a complete line as a `String`.
- `print` stays on the current line; `println` appends a line break.
- The try-with-resources statement closes the scanner automatically.

## Reading Numbers

`nextInt()` and `nextDouble()` parse numeric tokens and can throw `InputMismatchException` on invalid input. Mixing `nextInt()` and `nextLine()` may appear to skip a line because the numeric read leaves the line ending behind. A robust beginner approach is to read the whole line and parse it:

```java
System.out.print("Age: ");
int age = Integer.parseInt(scanner.nextLine());
```

Handle invalid input in the exceptions lesson. For simple prompts, keep input handling clear and validate values before using them.

## Another Practical Example

```java
System.out.print("Quantity: ");
int quantity = Integer.parseInt(scanner.nextLine());
System.out.println("Items requested: " + quantity);
```

## Common Mistakes

- Forgetting `import java.util.Scanner;`.
- Calling `nextInt()` when the user enters non-numeric text.
- Mixing token and line reads without consuming the remaining line ending.
- Printing a prompt with `println` when you want input on the same line.

## Important Notes

`System.out.printf("Total: %.2f%n", total)` formats output. `%n` is a platform-appropriate line break. Avoid sharing one `Scanner` across independently owned components that may close it unexpectedly.

## Real-World Usage

Console input is common in command-line tools, setup utilities, and early learning exercises. Desktop and web applications use other input mechanisms.

## Try It Yourself

Ask for a person's name and city, then print a friendly sentence.

## Mini Challenge

Ask for item price and quantity, parse both, and print the total with two decimal places.

## Related Topics

[Variables](03-variables-and-data-types.md) · [Exceptions](18-exceptions-and-validation.md)

## Navigation

[Previous: Variables](03-variables-and-data-types.md) | [Home](00-README.md) | [Next: Operators](05-operators-and-expressions.md)

