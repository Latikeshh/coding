---
layout: default
title: "24 build tools and mini projects"
---

# Build Tools and Mini Projects

## Definition

Build tools compile code, resolve dependencies, run tests, and package applications. Projects combine concepts into software that solves a defined problem.

## Hindi Explanation

Build tool compile, test aur package karne ke steps automate karta hai. Project mein kai concepts milkar ek useful program banate hain.

## Marathi Explanation

Build tool compile, test ani package karanyache steps automate karto. Project madhye anek concepts milun upyogi program tayar hoto.

## Hinglish Explanation

Maven ya Gradle jaise tools repeatable build dete hain; project work concepts ko real problem par apply karata hai.

## Why Use It?

Build tools make project setup repeatable and manage dependencies without manually assembling classpaths.

## Build Basics

Start with an IDE for small lessons, then explore Maven or Gradle. A common Maven layout is `src/main/java`, `src/main/resources`, and `src/test/java`; its `pom.xml` declares project settings and dependencies. Use the build tool wrapper committed with a project when available, so collaborators use the intended tool version. Avoid downloading arbitrary JAR files from untrusted sources.

## Example Workflow

```text
mvn test
mvn package
```

The exact commands depend on the project and installed tools. Let the build descriptor select the Java release (for example, 25) rather than relying on a machine's accidental default.

## Code Breakdown

Dependencies are external libraries. A build descriptor records them and the compiler/test configuration. A JAR packages compiled classes and resources; deployment may require additional runtime configuration.

## Common Mistakes

- Committing generated `target/` or `build/` output unnecessarily.
- Adding a dependency without checking its origin, license, or purpose.
- Assuming a project built on one machine has the same JDK or dependency versions everywhere.

## Mini Projects

Build progressively. For each, define inputs, expected behavior, and edge cases before coding.

1. **Number Guessing Game** — random number, loops, hints, input validation. Add attempt limits.
2. **Calculator** — methods, conditionals, numeric parsing. Handle divide-by-zero and invalid operators.
3. **Student Marks Manager** — records/classes, lists, averages. Check empty lists and mark ranges.
4. **Contact Book** — maps, search, update, delete. Decide how names and duplicate contacts behave.
5. **Expense Tracker** — records, dates, totals, file persistence. Validate amounts and date formats.
6. **Quiz Application** — collections, scoring, input. Handle blank answers and score boundaries.
7. **To-Do CLI** — classes, enums, commands, persistence. Support empty lists and unknown commands.
8. **Password Generator** — random generation and options. Explain that secure password generation needs cryptographically secure randomness.
9. **File Organizer** — paths and file operations. Avoid overwrites and handle permission errors.
10. **Text Analyzer** — strings, maps, files, counts. Consider punctuation and empty input.
11. **CSV Student Report** — parsing, validation, summaries. CSV quoting rules require a CSV library for robust general files.
12. **JSON Notes App** — model data and persistence. Add a maintained JSON library through a build tool; JSON is not built into the Java SE core API.

## Suggested Structure

Keep a small CLI app in clear packages such as `model`, `service`, and `app`. Add tests for calculations and validation. Separate input/output from business rules as each project grows.

## Try It Yourself

Pick one project and write a short behavior checklist before creating classes.

## Mini Challenge

Complete the To-Do CLI with add, list, complete, and remove commands; save data and verify it survives restarting the program.

## Related Topics

[Packages](19-packages-and-project-organization.md) · [Testing](23-testing-and-debugging.md) · [Files](20-file-input-and-output.md)

## Navigation

[Previous: Testing](23-testing-and-debugging.md) | [Home](00-README.md) | Next: End of Course

