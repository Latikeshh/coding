# File Input and Output

## Definition

File I/O reads data from and writes data to files. Modern Java's `Path` and `Files` APIs provide convenient operations.

## Hindi Explanation

File I/O file se data padhne aur usme data likhne ka kaam karta hai. `Path` file ka location darshata hai.

## Marathi Explanation

File I/O file madhun data vachnyas ani tyat lihinyas madat karto. `Path` file che sthan dakhavto.

## Hinglish Explanation

`Path` location batata hai; `Files` us path par read/write operations deta hai.

## Why Use It?

Files let command-line tools save reports, settings, and user-created data between runs.

## Syntax and Example

```java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

Path path = Path.of("notes.txt");
try {
    Files.writeString(path, "Practice Java\n");
    String contents = Files.readString(path);
    System.out.print(contents);
} catch (IOException error) {
    System.err.println("File operation failed: " + error.getMessage());
}
```

## Code Breakdown

`Path.of` creates a path using the platform's path rules. `writeString` creates or replaces a file by default; `readString` reads its text. Both can fail, for example because of permissions or a missing path, and declare `IOException`.

## Another Practical Example

```java
Files.write(Path.of("scores.txt"), java.util.List.of("Asha,91", "Ravi,84"));
for (String line : Files.readAllLines(Path.of("scores.txt"))) {
    System.out.println(line);
}
```

For large files, use buffered streaming APIs rather than loading the entire content into memory. Use explicit character sets such as UTF-8 when calling lower-level reader/writer APIs. Binary data uses byte-oriented APIs.

## Common Mistakes

- Assuming a relative path is relative to the source file; it is usually relative to the process working directory.
- Overwriting a file when append behavior was intended.
- Ignoring I/O exceptions or closing streams manually on every branch.
- Loading a very large file entirely into memory.

## Important Notes

Use try-with-resources for readers, writers, and streams because it closes them even when an exception occurs. `Files.writeString` and related methods close their own underlying resources.

## Real-World Usage

File operations support logs, exports, configuration, batch processing, and local application data.

## Try It Yourself

Write a short shopping list to a text file and read it back.

## Mini Challenge

Count the number of lines and words in a text file; report a helpful message if the file cannot be read.

## Related Topics

[Exceptions](18-exceptions-and-validation.md) · [Collections](11-collections.md)

## Navigation

[Previous: Packages](19-packages-and-project-organization.md) | [Home](00-README.md) | [Next: Lambdas and Streams](21-lambdas-and-streams.md)
