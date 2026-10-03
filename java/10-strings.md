# Strings

## Definition

A `String` is an immutable sequence of UTF-16 code units representing text.

## Hindi Explanation

String text ko store karta hai. Java mein String immutable hoti hai, yani operation purani value ko badalne ke bajay nayi String deta hai.

## Marathi Explanation

String text sathavte. Java madhye String immutable aste; operation junya value aivaji navin String dete.

## Hinglish Explanation

String text value hai. `trim` ya `replace` jaisi operations ka result use karna zaroori hai kyunki original String mutate nahi hoti.

## Why Use It?

Names, messages, identifiers, and file content are commonly represented as strings.

## Syntax and Example

```java
String name = "Ravi";
String message = "Hello, " + name;
System.out.println(message.length());
System.out.println(message.toUpperCase());
System.out.println(message.contains("Ravi"));
```

## Output

```text
12
HELLO, RAVI
true
```

## Code Breakdown

Use double quotes for a string and single quotes for a `char`. Useful methods include `length()`, `charAt(index)`, `substring(begin, end)`, `equals`, `equalsIgnoreCase`, `contains`, `startsWith`, `endsWith`, `replace`, `strip`, `split`, and `join` via `String.join`.

## Another Practical Example

```java
String[] parts = "tea,coffee,water".split(",");
String menu = String.join(" | ", parts);
System.out.println(menu);
```

Use `.equals()` to compare string contents, not `==` (which compares object identity). `formatted()` or `String.format` can format values; text blocks (`"""..."""`) are convenient for multiline text. Escape sequences include `\n`, `\t`, `\\`, and `\"`.

## Common Mistakes

- Using `==` for string content comparison.
- Ignoring the returned value from `toLowerCase`, `replace`, or `strip`.
- Treating `length` like a field; for strings it is `length()`.
- Assuming one Java `char` always equals one user-perceived character; supplementary Unicode characters use surrogate pairs.

## Important Notes

Repeated concatenation in a large loop can create unnecessary temporary strings. Use `StringBuilder` for repeated construction. Use `strip()` for Unicode-aware whitespace trimming in modern Java.

## Real-World Usage

Strings carry user input, log messages, serialized data, and labels throughout applications.

## Try It Yourself

Ask for a full name and print its character count, uppercase form, and initials.

## Mini Challenge

Normalize a line of comma-separated tags by trimming each tag and joining them with `, `.

## Related Topics

[Input and Output](04-input-and-output.md) · [Collections](11-collections.md)

## Navigation

[Previous: Arrays](09-arrays.md) | [Home](00-README.md) | [Next: Collections](11-collections.md)
