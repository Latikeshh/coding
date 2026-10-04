---
layout: default
title: "19 packages and project organization"
---

# Packages and Project Organization

## Definition

Packages group related Java types into namespaces. Project structure organizes source code, resources, tests, and build configuration.

## Hindi Explanation

Packages related classes ko group aur name collisions se bachate hain. Project structure source, resources aur tests ko alag rakhta hai.

## Marathi Explanation

Packages sambandhit classes ekatra thevtat ani name collisions talnyas madat kartat. Project structure source, resources ani tests vegle thevte.

## Hinglish Explanation

Package class ka namespace hai; folder layout project ko maintain karna easy banata hai.

## Why Use It?

Packages make larger projects easier to navigate and allow types with the same simple name in different namespaces.

## Syntax and Example

At the top of `src/main/java/com/example/app/Main.java`:

```java
package com.example.app;

public class Main {
    public static void main(String[] args) {
        System.out.println("App started");
    }
}
```

The folder path normally mirrors the package: `com/example/app/Main.java`. Compile and launch from a project root using your IDE or build tool.

## Code Breakdown

`package` is a declaration; imports can follow it. `java.lang` is imported implicitly. `public` types are accessible from outside their package. Package-private types and members omit an access modifier.

## Another Practical Example

```text
my-app/
  src/main/java/com/example/app/Main.java
  src/test/java/com/example/app/MainTest.java
  src/main/resources/
```

This is the conventional layout used by common Java build tools.

## Common Mistakes

- A package declaration that disagrees with its folder path in a conventional build.
- Importing a class that is already in the same package.
- Naming packages with uppercase letters or defaulting all production types into the unnamed package.

## Important Notes

Java modules are a separate feature for explicitly describing module boundaries; beginners can first learn packages. Keep packages lowercase and organize by cohesive responsibility.

## Real-World Usage

Packages separate application, domain, infrastructure, and test code as a codebase grows.

## Try It Yourself

Move a simple class into `com.example.greetings` and run it from an IDE or command line.

## Mini Challenge

Create separate `model` and `app` packages and import a public model type into the application entry point.

## Related Topics

[Classes](14-classes-and-objects.md) · [Build Tools](24-build-tools-and-mini-projects.md)

## Navigation

[Previous: Exceptions](18-exceptions-and-validation.md) | [Home](00-README.md) | [Next: Files](20-file-input-and-output.md)

