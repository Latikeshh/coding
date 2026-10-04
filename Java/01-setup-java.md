---
layout: default
title: "Set Up Java"
---

# Set Up Java Development Environment

> 🟢 Beginner

## 📖 Definition

Setting up the **Java Development Environment** involves installing the **Java Development Kit (JDK)**, configuring system environment variables (`JAVA_HOME` and `PATH`), understanding how the **Java Virtual Machine (JVM)** executes bytecode, and running Java programs using the command-line compiler (`javac`) or interactive shell (`jshell`).

## 🇮🇳 Hindi

Java code likhne aur chalane ke liye aapko JDK install karna hota hai. `javac` compiler Java source code (`.java`) ko platform-independent Bytecode (`.class`) mein convert karta hai, aur **JVM (Java Virtual Machine)** us bytecode ko aapke operating system par run karta hai.

## 🚩 Marathi

Java program tayar karnyasathi JDK install karave lagte. `javac` compiler `.java` file cha Bytecode (`.class`) tayar karto, aani **JVM** tya bytecode la machine varti run karto.

## 🤔 Why Do We Use It?

Java follows the famous **"Write Once, Run Anywhere" (WORA)** philosophy. Because Java code compiles into universal JVM Bytecode rather than native machine assembly, a Java program compiled on Windows can run without modification on Linux, macOS, or cloud servers.

## 🧠 Simple Explanation

Think of the **JDK** as a complete carpenter's workshop. The **Compiler (`javac`)** is like a blueprint translator that converts your sketch into a standardized machine blueprint (Bytecode). The **JVM** is the automated construction robot that reads that blueprint and physically builds the output on any OS.

## ⚙️ The Java Architecture Triad

1. **JDK (Java Development Kit):** The full software development kit containing the compiler (`javac`), archiver (`jar`), execution tools (`java`), and development libraries.
2. **JRE (Java Runtime Environment):** The runtime package containing the JVM and standard core class libraries needed to run compiled Java applications.
3. **JVM (Java Virtual Machine):** The virtual execution engine that interprets or JIT-compiles Bytecode into native machine instructions at runtime and manages automated memory cleanup (**Garbage Collection**).

```text
+-------------------------------------------------------+
| JDK (Java Development Kit)                            |
|  +-------------------------------------------------+  |
|  | JRE (Java Runtime Environment)                  |  |
|  |  +-------------------+  +--------------------+  |  |
|  |  | JVM (Virtual Engine)|  | Core Libraries     |  |  |
|  |  +-------------------+  +--------------------+  |  |
|  +-------------------------------------------------+  |
|  Compiler (javac), Debugger (jdb), JShell, Tools      |
+-------------------------------------------------------+
```

## 📝 Setting Up JDK & Environment Variables

### Step 1: Install JDK
Download JDK 25 or an LTS release (such as Eclipse Temurin / OpenJDK) from [adoptium.net](https://adoptium.net/).

### Step 2: Configure Environment Variables
- **`JAVA_HOME`:** Set to your JDK installation directory (e.g., `C:\Program Files\Java\jdk-25` on Windows or `/Library/Java/JavaVirtualMachines/jdk-25.jdk/Contents/Home` on macOS).
- **`PATH`:** Append `%JAVA_HOME%\bin` (Windows) or `$JAVA_HOME/bin` (Linux/macOS).

### Step 3: Verify Installation in Terminal
```bash
java -version
javac -version
jshell --version
```

## 💡 Complete Example: Writing, Compiling & Executing

Create a file named `HelloJava.java`:

```java
public class HelloJava {
    public static void main(String[] args) {
        System.out.println("Hello, Welcome to General Java SE Programming!");
        System.out.println("JDK Version Reference: 25");
    }
}
```

### Compilation & Execution Commands:

```bash
# 1. Compile source code into Bytecode (creates HelloJava.class)
javac HelloJava.java

# 2. Execute compiled class on the JVM (do NOT append .class extension)
java HelloJava

# 3. Single-File Direct Launch (Java 11+)
java HelloJava.java
```

## 👀 Output

```text
Hello, Welcome to General Java SE Programming!
JDK Version Reference: 25
```

## ⚠️ Common Mistakes

- **Filename Mismatch:** If a class is declared `public class HelloJava`, the file **MUST** be saved as `HelloJava.java` (case-sensitive!).
- **Appending `.class` when running:** Executing `java HelloJava.class` will throw a `ClassNotFoundException`. Run `java HelloJava`.
- **Case Sensitivity:** Writing `system.out.println` or `string` instead of `System` and `String`.

## 🛡️ Safety / Important Notes

Always compile with strict warnings enabled during development to catch potential runtime bugs early.

## 🌍 Real-World Usage

General Java powers enterprise backend microservices (Spring Boot), high-frequency trading platforms, desktop financial tools, build automation engines (Gradle/Maven), and big-data processing clusters (Apache Spark/Hadoop).

## 🧪 Try It Yourself

1. Open your terminal or `jshell`.
2. Evaluate `25 * 4` in `jshell` and exit using `/exit`.
3. Create a Java class that prints your name, target project goal, and current year.

## 🎯 Mini Challenge

Write a program that prints a 3-line receipt showing an item name, quantity, price, and calculated total cost using `System.out.println()`.

## 🔗 Related Topics

- [Java Program Structure](02-java-program-structure.md)
- [Variables and Data Types](03-variables-and-data-types.md)

## 🧭 Navigation

[← Java Home](00-README.md) | [Next: Java Program Structure →](02-java-program-structure.md)
