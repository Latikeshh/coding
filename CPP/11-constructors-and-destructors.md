---
layout: default
title: "11 constructors and destructors"
---

# Constructors, Member Initializer Lists & Destructors in C++

> 🟡 Intermediate

---

## 📖 Definition

- **Constructor**: A special member function called automatically when an object is instantiated. It shares the exact name as the class, has no return type, and initializes the object's variables.
- **Member Initializer List**: A clean, efficient initialization mechanism executed *before* the constructor body executes.
- **Destructor**: A special member function prefixed with a tilde (`~`) called automatically when an object goes out of scope or is deleted. It cleans up allocated heap resources, closes file streams, and releases sockets.

---

## 🇮🇳 Hindi Explanation

- **Constructor**: Class ka wo special method jo naya object banne par apne aap turant run hota hai. Iska kaam variables ko initial values dena hota hai.
- **Member Initializer List (`: var1(v1), var2(v2)`)**: Variables ko initialize karne ka sabse fast aur modern C++ tareeka hai.
- **Destructor (`~ClassName()`)**: Jab object ka kaam khatam ho jata hai aur wo scope se bahar jata hai, tab destructor apne aap call hota hai taaki memory leaks na ho.

---

## 🚩 Marathi Explanation

- **Constructor**: N नवीन object tayar hoinaahimatra apoaap run honara special function.
- **Member Initializer List**: Variables la prarambhik (initial) value denya chi sarvadhik vegvan padhat.
- **Destructor (`~ClassName()`)**: Object chi garaj samplyavar aani toh scope chya baher gelyavar memory clean karnyasathi apoaap call hoto.

---

## 📝 Types of Constructors

1. **Default Constructor**: Takes no parameters.
2. **Parameterized Constructor**: Takes arguments to initialize member fields.
3. **Copy Constructor**: Initializes an object using another existing object of the same class (`ClassName(const ClassName& other)`).

---

## 💡 Practical Example

```cpp
#include <iostream>
#include <string>

class DatabaseConnection {
private:
    std::string dbName;
    int connectionId;

public:
    // 1. Parameterized Constructor with Member Initializer List
    DatabaseConnection(std::string name, int id) 
        : dbName(name), connectionId(id) // Member Initializer List!
    {
        std::cout << "[CONSTRUCTOR] Connected to Database: " << dbName << " (ID: " << connectionId << ")" << std::endl;
    }

    // 2. Copy Constructor
    DatabaseConnection(const DatabaseConnection& source)
        : dbName(source.dbName + "_COPY"), connectionId(source.connectionId + 100)
    {
        std::cout << "[COPY CONSTRUCTOR] Created Duplicate DB Connection: " << dbName << std::endl;
    }

    // 3. Destructor (Cleans up resources automatically)
    ~DatabaseConnection() {
        std::cout << "[DESTRUCTOR] Closed Connection to Database: " << dbName << std::endl;
    }

    void executeQuery(std::string sql) const {
        std::cout << "Executing SQL on [" << dbName << "]: " << sql << std::endl;
    }
};

int main() {
    std::cout << "=== SCOPE START ===" << std::endl;
    {
        // Object instantiated inside block scope
        DatabaseConnection db1("ProductionDB", 101);
        db1.executeQuery("SELECT * FROM users;");

        // Copy constructor
        DatabaseConnection db2 = db1;
        db2.executeQuery("SELECT * FROM logs;");

        std::cout << "Exiting inner block scope..." << std::endl;
    } // db1 and db2 go out of scope HERE -> Destructors called automatically!
    
    std::cout << "=== SCOPE END ===" << std::endl;
    return 0;
}
```

---

## 🔍 Code Breakdown

- `: dbName(name), connectionId(id)`: Member Initializer List directly initializes fields during object creation, avoiding double assignment overhead.
- `~DatabaseConnection()`: The destructor. Notice in output how `db2` and `db1` are destroyed in **reverse order of creation** (stack LIFO order) as soon as the inner `{ }` block ends!

---

## 👀 Output

```text
=== SCOPE START ===
[CONSTRUCTOR] Connected to Database: ProductionDB (ID: 101)
Executing SQL on [ProductionDB]: SELECT * FROM users;
[COPY CONSTRUCTOR] Created Duplicate DB Connection: ProductionDB_COPY
Executing SQL on [ProductionDB_COPY]: SELECT * FROM logs;
Exiting inner block scope...
[DESTRUCTOR] Closed Connection to Database: ProductionDB_COPY
[DESTRUCTOR] Closed Connection to Database: ProductionDB
=== SCOPE END ===
```

---

## ⚠️ Common Mistakes

- **Writing Return Types on Constructors/Destructors**: Writing `void ClassName()` or `int ~ClassName()` causes compilation errors. Constructors/Destructors **have no return type** (not even `void`).
- **Shallow Copy Bug in Raw Pointers**: If a class allocates raw dynamic memory with `new` and lacks a custom Deep Copy constructor, copying an object leads to double-free crashes! Use `std::unique_ptr` or `std::vector` to prevent this completely.

---

## 🛡️ Best Practices

- Always prefer Member Initializer Lists over assignment inside the constructor body.
- Follow the **Rule of Zero / Rule of Five** in modern C++: Use RAII objects (`std::vector`, `std::string`, `std::unique_ptr`) so you don't need custom raw destructors.

---

## 🧪 Try It Yourself

1. Create a `Book` class with `title` and `author`. Use a member initializer list in its constructor and print a message in its destructor when the book object is destroyed.

---

## 🎯 Mini Challenge

Write a `Logger` class that opens a simulated log file in its constructor, writes log messages via a `log(text)` method, and prints `"Log File Closed"` in its destructor.

---

## 🔗 Related Topics

- [Classes & Objects](10-classes-and-oops.md)
- [Smart Pointers](14-smart-pointers.md)

---

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Classes & OOP](10-classes-and-oops.md) | [Next: Inheritance →](12-inheritance-and-polymorphism.md)
