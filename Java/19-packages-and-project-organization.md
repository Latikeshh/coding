---
layout: default
title: "Packages and Project Organization"
---

# Packages and Project Organization in Java

> 🟡 Intermediate

## 📖 Definition

- **Package:** A namespace mechanism that groups related Java classes, interfaces, enums, and sub-packages together into organized directory structures, preventing class naming collisions.
- **Java Module System (Java 9+ JPMS):** A higher-level modularity system (`module-info.java`) that explicitly declares module dependencies and exports public package APIs.

## 🇮🇳 Hindi

Packages Java files ko organized folders mein group karte hain aur name collisions ko rokte hain. Naming standard reverse domain format follow karta hai (`com.company.project`). Package components ko access karne ke liye `import` keyword ka use hota hai.

## 🚩 Marathi

Packages classes la organized directory madhye group kartat. Imports sathi `import` keyword vaparatat.

## 📝 1. Package Naming Standards

Reverse Internet Domain Format is industry standard:

```text
com.company.projectname.module
e.g., com.techcorp.ecommerce.payment
```

## 📝 2. Types of Imports

```java
// 1. Explicit Single Class Import (Best Practice)
import java.util.List;
import java.util.ArrayList;

// 2. Wildcard Package Import (Imports all public classes in package)
import java.util.*;

// 3. Static Import (Direct access to static members without class name qualifier)
import static java.lang.Math.PI;
import static java.lang.Math.sqrt;

public class MathTest {
    double radius = 5.0;
    double area = PI * radius * radius; // Direct PI access via static import!
}
```

## 📝 3. Standard Maven / Gradle Directory Structure

Modern Java software projects adhere to standard build directory layouts:

```text
my-java-app/
├── pom.xml                                 # Maven Build Configuration
├── src/
│   ├── main/
│   │   ├── java/                           # Java Source Code Root
│   │   │   └── com/techcorp/app/
│   │   │       ├── Main.java               # Application Entry Point
│   │   │       ├── model/                  # Data Models / Entities / Records
│   │   │       │   └── User.java
│   │   │       ├── service/                # Business Logic Services
│   │   │       │   └── UserService.java
│   │   │       └── util/                   # Utility Classes
│   │   │           └── PasswordHasher.java
│   │   └── resources/                      # Properties, Configs, SQL scripts
│   │       └── application.properties
│   └── test/
│       └── java/                           # JUnit Automated Test Files
│           └── com/techcorp/app/
│               └── UserServiceTest.java
```

## 💡 Complete Example: Package Organization Across Files

### File 1: `com/techcorp/model/User.java`
```java
package com.techcorp.model;

public record User(int id, String name, String email) {}
```

### File 2: `com/techcorp/service/UserService.java`
```java
package com.techcorp.service;

import com.techcorp.model.User; // Importing User model from another package!
import java.util.ArrayList;
import java.util.List;

public class UserService {
    private final List<User> users = new ArrayList<>();

    public void registerUser(User user) {
        users.add(user);
        System.out.println("User Registered Successfully : " + user.name());
    }

    public List<User> getAllUsers() {
        return List.copyOf(users);
    }
}
```

### File 3: `com/techcorp/app/MainApp.java`
```java
package com.techcorp.app;

import com.techcorp.model.User;
import com.techcorp.service.UserService;

public class MainApp {
    public static void main(String[] args) {
        UserService userService = new UserService();
        
        User u1 = new User(101, "Rahul Sharma", "rahul@example.com");
        User u2 = new User(102, "Ananya Roy", "ananya@example.com");

        userService.registerUser(u1);
        userService.registerUser(u2);

        System.out.println("\nTotal Registered Users Count : " + userService.getAllUsers().size());
    }
}
```

## 👀 Output

```text
User Registered Successfully : Rahul Sharma
User Registered Successfully : Ananya Roy

Total Registered Users Count : 2
```

## ⚠️ Common Mistakes

- Placing `package` statements anywhere other than the **very first non-comment line** in a `.java` file.
- Disagreement between the `package com.techcorp.app;` declaration and the actual OS directory folder path (`com/techcorp/app/`).
- Overusing wildcard imports (`import java.util.*;`) causing accidental class name ambiguities.

## 🛡️ Safety / Important Notes

`java.lang` package classes (`String`, `System`, `Integer`, `Math`, `Exception`) are **automatically imported** into every Java file by default without needing explicit `import` statements.

## 🌍 Real-World Usage

All enterprise application architectures (Spring Boot microservices, Android libraries, backend REST APIs) rely on package hierarchies to divide code by responsibility (`controller`, `service`, `repository`, `entity`, `dto`, `config`).

## 🧪 Try It Yourself

1. Create a sub-package `com.myapp.model` containing a record `Product`.
2. Create `com.myapp.app.Main` and import `Product` to instantiate it.

## 🎯 Mini Challenge

Create a static import statement for `java.util.Collections.sort` and use it directly inside a main method without qualifying `Collections.`.

## 🔗 Related Topics

- [Classes and Objects](14-classes-and-objects.md)
- [Build Tools and Mini Projects](24-build-tools-and-mini-projects.md)

## 🧭 Navigation

[← Java Home](00-README.md) | [← Previous: Exceptions](18-exceptions-and-validation.md) | [Next: File Input and Output →](20-file-input-and-output.md)
