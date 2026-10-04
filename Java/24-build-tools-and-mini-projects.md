---
layout: default
title: "Build Tools and Mini Projects"
---

# Build Tools and Capstone Mini Projects in Java

> 🔴 Advanced

## 📖 Definition

- **Build Tools (Maven & Gradle):** Automated project management tools that resolve external library dependencies, execute automated unit tests, compile Java source code, and package applications into executable **JAR (Java Archive)** files.
- **Capstone Mini Projects:** Hands-on software applications that synthesize core Java concepts (OOP, Collections, Lambdas, Exception Handling, File I/O, Testing).

## 🇮🇳 Hindi

Production Java development mein dependencies manage karne, test cases run karne, aur executable `.jar` files package karne ke liye **Maven (`pom.xml`)** ya **Gradle (`build.gradle`)** ka use hota hai.

## 🚩 Marathi

Project dependencies manage karnyasathi aani executable `.jar` file tayar karnyasathi **Maven** kiva **Gradle** build tools vaparatat.

## 📝 1. Apache Maven Architecture (`pom.xml`)

Maven uses a Project Object Model (`pom.xml`) configuration file to manage project dependencies:

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0">
    <modelVersion>4.0.0</modelVersion>
    <groupId>com.techcorp.app</groupId>
    <artifactId>banking-app</artifactId>
    <version>1.0.0</version>

    <properties>
        <maven.compiler.source>25</maven.compiler.source>
        <maven.compiler.target>25</maven.compiler.target>
    </properties>

    <dependencies>
        <!-- JUnit 5 Testing Dependency -->
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>5.10.0</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```

### Standard Maven Build Lifecycle Commands:
```bash
mvn clean         # Deletes target/ build directory
mvn compile       # Compiles Java source files
mvn test          # Runs automated JUnit unit tests
mvn package       # Packages code into target/banking-app-1.0.0.jar
java -jar target/banking-app-1.0.0.jar  # Launch executable JAR
```

## 🏗️ Capstone Project 1: Interactive To-Do Manager CLI with File Persistence

A complete, multi-class command-line application demonstrating Records, Enums, File I/O, Collections, and Exception Handling.

```java
import java.io.IOException;
import java.nio.file.*;
import java.util.*;

public class TodoAppMaster {

    public enum Status { PENDING, COMPLETED }

    public record Task(int id, String title, Status status) {
        public String toCsvLine() {
            return id + "," + title + "," + status;
        }

        public static Task fromCsvLine(String line) {
            String[] parts = line.split(",");
            return new Task(
                Integer.parseInt(parts[0]),
                parts[1],
                Status.valueOf(parts[2])
            );
        }
    }

    private static final Path DATA_FILE = Path.of("tasks_db.csv");
    private static final List<Task> taskList = new ArrayList<>();
    private static int nextId = 1;

    public static void loadTasks() {
        if (!Files.exists(DATA_FILE)) return;
        try {
            List<String> lines = Files.readAllLines(DATA_FILE);
            taskList.clear();
            for (String line : lines) {
                if (!line.isBlank()) {
                    Task t = Task.fromCsvLine(line);
                    taskList.add(t);
                    if (t.id() >= nextId) nextId = t.id() + 1;
                }
            }
        } catch (IOException e) {
            System.err.println("Failed to load tasks: " + e.getMessage());
        }
    }

    public static void saveTasks() {
        try {
            List<String> lines = taskList.stream().map(Task::toCsvLine).toList();
            Files.write(DATA_FILE, lines);
        } catch (IOException e) {
            System.err.println("Failed to save tasks: " + e.getMessage());
        }
    }

    public static void addTask(String title) {
        Task task = new Task(nextId++, title, Status.PENDING);
        taskList.add(task);
        saveTasks();
        System.out.println("Task Added : #" + task.id() + " - " + task.title());
    }

    public static void listTasks() {
        System.out.println("\n=== TASK LIST ===");
        if (taskList.isEmpty()) {
            System.out.println("No tasks found.");
            return;
        }
        for (Task t : taskList) {
            String check = (t.status() == Status.COMPLETED) ? "[✔]" : "[ ]";
            System.out.printf("%s #%d : %s%n", check, t.id(), t.title());
        }
    }

    public static void main(String[] args) {
        loadTasks();
        System.out.println("=== TO-DO MANAGER CLI ===");
        
        addTask("Study Java Memory Model");
        addTask("Practice Streams API");
        listTasks();
    }
}
```

## 👀 Output

```text
=== TO-DO MANAGER CLI ===
Task Added : #1 - Study Java Memory Model
Task Added : #2 - Practice Streams API

=== TASK LIST ===
[ ] #1 : Study Java Memory Model
[ ] #2 : Practice Streams API
```

## ⚠️ Common Mistakes

- Manual dependency management by copying raw `.jar` files into projects instead of using Maven/Gradle build tools.
- Committing generated build output folders (`target/` or `build/`) into Git repositories (add `target/` and `build/` to `.gitignore`!).

## 🛡️ Safety / Important Notes

Always use Maven or Gradle Wrapper scripts (`./mvnw` or `./gradlew`) committed with your project to ensure team members run builds using identical build tool versions.

## 🌍 Real-World Usage

All professional Java applications (Spring Boot microservices, Android apps, enterprise backend platforms) are built, tested, and packaged using Maven or Gradle pipelines.

## 🧪 Try It Yourself

1. Add a method `markTaskCompleted(int id)` to the To-Do CLI project above.
2. Verify that updated task statuses persist correctly when re-running the application.

## 🎯 Mini Challenge

Build a Student Marksheet Analyzer CLI that reads student records from a CSV file, calculates percentages using Java Streams, and saves a summary report file.

## 🔗 Related Topics

- [File Input and Output](20-file-input-and-output.md)
- [Testing and Debugging](23-testing-and-debugging.md)

## 🧭 Navigation

[← Java Home](00-README.md) | [← Previous: Testing and Debugging](23-testing-and-debugging.md)
