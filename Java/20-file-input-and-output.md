---
layout: default
title: "File Input and Output"
---

# File Input and Output in Java

> 🔴 Advanced

## 📖 Definition

**File Input/Output (I/O)** allows Java programs to read data from and write data to persistent storage files on disk. Modern Java provides high-performance **NIO.2 APIs** (`java.nio.file.Path` and `java.nio.file.Files`) alongside traditional Stream classes (`java.io`).

## 🇮🇳 Hindi

Files mein data write aur read karne ke liye File I/O ka use hota hai. Modern Java (NIO.2) mein `Path.of()` file location specify karne ke liye aur `Files.readString()` / `Files.writeString()` fast text file operations ke liye use hoti hain. Resource leak rokne ke liye `try-with-resources` compulsory use karein.

## 🚩 Marathi

Disk varti file madhye data lihinya aani vachnyasathi File I/O vaparatat. Modern Java madhye `Path` aani `Files` API cha wapar sarvat sopa ahe.

## 📝 1. Modern Java NIO.2 APIs (`Path` & `Files`)

Java 7 & 11 introduced simplified helper methods inside `java.nio.file.Files`:

```java
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;

Path filePath = Path.of("app_logs.txt");

// Write string to file (Creates or overwrites)
Files.writeString(filePath, "System Started\n");

// Append string to existing file
Files.writeString(filePath, "User Logged In\n", StandardOpenOption.APPEND);

// Read complete file as string
String content = Files.readString(filePath);

// Read file as List of lines
List<String> lines = Files.readAllLines(filePath);
```

## 📝 2. High-Performance Stream Buffering (`BufferedReader` & `BufferedWriter`)

For processing large multi-gigabyte log files without loading the entire file into memory at once:

```java
Path bigFilePath = Path.of("large_dataset.csv");

// Reading line-by-line efficiently
try (BufferedReader reader = Files.newBufferedReader(bigFilePath)) {
    String line;
    while ((line = reader.readLine()) != null) {
        // Process line
    }
}
```

## 📝 3. Object Serialization (`Serializable` & `transient`)

Serialization converts an object state in memory into a binary byte stream to store on disk or transmit across network sockets.

- Implement `java.io.Serializable` marker interface.
- Mark fields as `transient` if they should **NOT** be serialized (e.g. passwords, secret keys).

```java
import java.io.Serializable;

public class UserSession implements Serializable {
    private static final long serialVersionUID = 1L; // Versioning
    
    private String username;
    private transient String passwordHash; // Excluded from serialization!
}
```

## 💡 Complete Example: persistent Transaction Log Manager

```java
import java.io.IOException;
import java.nio.file.*;
import java.util.List;

public class FileLogManager {
    private static final Path LOG_FILE = Path.of("transactions.log");

    public static void appendLogEntry(String logMessage) {
        try {
            String timestampedEntry = String.format("[%tF %<tT] %s%n", 
                    System.currentTimeMillis(), logMessage);
            
            // Append entry cleanly using NIO.2 Files
            Files.writeString(LOG_FILE, timestampedEntry, 
                    StandardOpenOption.CREATE, StandardOpenOption.APPEND);
            
            System.out.println("Log entry written successfully.");
        } catch (IOException e) {
            System.err.println("File Write Failed: " + e.getMessage());
        }
    }

    public static void displayLogs() {
        if (!Files.exists(LOG_FILE)) {
            System.out.println("No log file found.");
            return;
        }

        try {
            List<String> logLines = Files.readAllLines(LOG_FILE);
            System.out.println("\n=== TRANSACTION AUDIT LOGS ===");
            for (String line : logLines) {
                System.out.println(line);
            }
            System.out.println("==============================");
        } catch (IOException e) {
            System.err.println("File Read Failed: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        appendLogEntry("ACCOUNT_CREATED: ID #5012");
        appendLogEntry("DEPOSIT_SUCCESS: ₹5000.00");
        appendLogEntry("WITHDRAWAL_SUCCESS: ₹1200.00");

        displayLogs();
    }
}
```

## 👀 Output

```text
Log entry written successfully.
Log entry written successfully.
Log entry written successfully.

=== TRANSACTION AUDIT LOGS ===
[2026-10-04 10:45:00] ACCOUNT_CREATED: ID #5012
[2026-10-04 10:45:00] DEPOSIT_SUCCESS: ₹5000.00
[2026-10-04 10:45:00] WITHDRAWAL_SUCCESS: ₹1200.00
==============================
```

## ⚠️ Common Mistakes

- Assuming relative file paths are relative to the `.java` source code file location instead of the **current working process directory**.
- Overwriting existing file data by omitting `StandardOpenOption.APPEND`.
- Forgetting to close low-level stream readers/writers (use Try-with-Resources!).
- Loading huge multi-gigabyte files completely into memory with `Files.readAllBytes()` instead of streaming lines with `Files.lines()`.

## 🛡️ Safety / Important Notes

Always specify explicit character encodings (`StandardCharsets.UTF-8`) when working with low-level file readers/writers to ensure cross-platform character rendering consistency across Windows and Linux servers.

## 🌍 Real-World Usage

Application error logging, exporting CSV reports, saving user preference configuration properties, batch file processing, and local database storage engines.

## 🧪 Try It Yourself

1. Create a program that creates a text file `tasks.txt` and writes 3 tasks into it.
2. Read the file back using `Files.readAllLines()` and print each line with a line number prefix.

## 🎯 Mini Challenge

Write a program that searches through a text log file and counts how many lines contain the word `"ERROR"`.

## 🔗 Related Topics

- [Exceptions and Validation](18-exceptions-and-validation.md)
- [Packages and Project Organization](19-packages-and-project-organization.md)

## 🧭 Navigation

[← Java Home](00-README.md) | [← Previous: Packages](19-packages-and-project-organization.md) | [Next: Lambdas and Streams →](21-lambdas-and-streams.md)
