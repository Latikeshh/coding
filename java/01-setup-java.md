---
layout: default
title: "01 setup java"
---

# Set Up Java

## Definition

The Java Development Kit (JDK) includes the tools needed to compile and run Java programs. The Java Runtime Environment is commonly discussed as the runtime portion, but beginners should install a JDK.

## Hindi Explanation

Java program likhne aur chalane ke liye JDK install karte hain. Isme compiler aur JVM jaise tools hote hain.

## Marathi Explanation

Java program lihinyasathi ani chalavnyasathi JDK install karto. Tyat compiler ani JVM sarkhi sadhane astat.

## Hinglish Explanation

JDK ko Java ka complete toolkit samjho: code compile karne aur run karne ke tools isi mein milte hain.

## Why Use It?

Installing a JDK gives you `java`, `javac`, and JShell. JDK 25 is the course reference; another recent supported JDK can also run most examples.

## Install and Check

Get a JDK 25 build from a trusted distribution such as Oracle JDK or Eclipse Temurin. Choose the installer for your operating system and processor. On Windows, enable the installer's PATH option if offered. Otherwise add the JDK `bin` directory to PATH, then open a new terminal. macOS/Linux package managers and shell setup vary by distribution.

```text
java --version
javac --version
jshell --version
```

`java` runs compiled programs (and can launch a source file); `javac` compiles source; `jshell` starts an interactive Java shell. If the command is not found, check the installation and PATH, then reopen the terminal. Some systems have multiple JDKs, so verify the reported version.

## First Program

Save as `Hello.java`:

```java
class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
```

Compile and run:

```text
javac Hello.java
java Hello
```

Recent Java also supports launching a single source file directly with `java Hello.java`. Use `javac` explicitly while learning compilation. `main` is the program entry point; `System.out.println` prints one line.

## Interactive and File-Based Work

JShell is useful for short experiments: start `jshell`, enter an expression such as `2 + 3`, then type `/exit`. For complete programs, save `.java` source files, compile, and run them. VS Code with the Java extensions, IntelliJ IDEA, and other Java-aware editors can provide completion and debugging.

## Common Mistakes

- The public class name and source filename must match (`Hello` and `Hello.java`).
- Java is case-sensitive: `System` and `system` differ.
- After changing PATH, open a new terminal.
- Run a compiled class by its class name, without `.class`.

## Try It Yourself

Print your name and one sentence about what you want to build. Try both compile-then-run and source-file launch.

## Mini Challenge

Print three lines: a greeting, your learning goal, and the output of a simple arithmetic expression.

## Related Topics

[Program Structure](02-java-program-structure.md) · [Input and Output](04-input-and-output.md)

## Navigation

[Previous: Home](00-README.md) | [Home](00-README.md) | [Next: Program Structure](02-java-program-structure.md)

