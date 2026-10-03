# Exceptions and Validation

## Definition

An exception represents an abnormal condition that interrupts ordinary control flow. Validation checks whether data meets an application's rules.

## Hindi Explanation

Exception kisi operation mein aayi problem ko darshata hai. Validation input ko istemal karne se pehle rules ke hisaab se check karta hai.

## Marathi Explanation

Exception operation madhil adchan dakhavto. Validation input vaparnyapurvi niyamanusar tapasate.

## Hinglish Explanation

Invalid data ko pehle validate karo; exceptional failure ho to suitable exception handle karo.

## Why Use It?

Good error handling helps programs report failures clearly and recover only where recovery is sensible.

## Syntax and Example

```java
static int parseAge(String text) {
    int age = Integer.parseInt(text);
    if (age < 0 || age > 130) {
        throw new IllegalArgumentException("age is outside the accepted range");
    }
    return age;
}

try {
    System.out.println(parseAge("24"));
} catch (IllegalArgumentException error) {
    System.out.println("Please enter a valid age.");
}
```

## Code Breakdown

`throw` signals an exception. `try` encloses the operation; `catch` handles selected types. `finally` runs during normal completion or exception unwinding (except abrupt process termination). Try-with-resources automatically closes resources.

## Another Practical Example

```java
try (var reader = java.nio.file.Files.newBufferedReader(java.nio.file.Path.of("notes.txt"))) {
    System.out.println(reader.readLine());
} catch (java.io.IOException error) {
    System.err.println("Could not read notes: " + error.getMessage());
}
```

Checked exceptions such as `IOException` must be caught or declared with `throws`. Unchecked exceptions generally indicate programming errors or invalid arguments. Avoid catching `Exception` broadly unless at a deliberate application boundary.

## Common Mistakes

- Catching an exception and silently ignoring it.
- Using exceptions for ordinary expected branching.
- Catching `Exception` and hiding the actual failure.
- Printing stack traces to users instead of giving a useful message.

## Important Notes

Use specific exception types and preserve causes when wrapping failures. Validate inputs at clear boundaries and maintain class invariants in constructors and methods.

## Real-World Usage

Applications handle missing files, invalid requests, unavailable services, and malformed input.

## Try It Yourself

Parse a menu selection and give a helpful message for non-numeric or out-of-range values.

## Mini Challenge

Implement a withdrawal method that rejects invalid amounts and insufficient funds with a clear exception policy.

## Related Topics

[Input and Output](04-input-and-output.md) · [Files](20-file-input-and-output.md)

## Navigation

[Previous: Interfaces](17-interfaces-and-abstract-classes.md) | [Home](00-README.md) | [Next: Packages](19-packages-and-project-organization.md)
