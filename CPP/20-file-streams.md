---
layout: default
title: "20 file streams"
---

# File I/O Streams in C++ (`std::ifstream`, `std::ofstream`, `<fstream>`)

> 🟡 Intermediate

---

## 📖 Definition

File Input and Output (I/O) in C++ is managed through the `<fstream>` header library using three primary stream classes:
1. `std::ofstream` (Output File Stream): Used for **creating and writing** data to disk files.
2. `std::ifstream` (Input File Stream): Used for **reading** data from disk files.
3. `std::fstream` (File Stream): Supports **both reading and writing** to files simultaneously.

---

## 🇮🇳 Hindi Explanation

C++ mein disk par text files create, write, aur read karne ke liye `<fstream>` library ka use hota hai.
- **`std::ofstream`**: File banana aur usme data write karna (`file << "text";`).
- **`std::ifstream`**: Disk par pehle se maujood file ko kholna aur lines read karna (`std::getline(file, line)`).
- File open karne ke baad use `.close()` karna zaroori hota hai (halanki destructor use automatically close kar deta hai).

---

## 🚩 Marathi Explanation

Disk varil text files tayar karne, lihine (write), aani vachane (read) yasathi `<fstream>` cha vapar hota.
- **`std::ofstream`**: File lihinyasathi (Output).
- **`std::ifstream`**: File vachnyasathi (Input).
- File vaaparun zalyavar `.close()` करणे changle aste.

---

## 📊 File Open Modes Summary

| Open Mode | Flag | Description |
|:---|:---|:---|
| **Write** | `std::ios::out` | Opens file for writing (truncates existing file by default) |
| **Append** | `std::ios::app` | Appends new data to the **end** of existing file |
| **Read** | `std::ios::in` | Opens existing file for reading |
| **Binary** | `std::ios::binary` | Reads/writes binary data instead of text lines |

---

## 💡 Practical Example

```cpp
#include <iostream>
#include <fstream> // For std::ofstream and std::ifstream
#include <string>

int main() {
    std::string filename = "user_logs.txt";

    // 1. WRITING TO FILE using std::ofstream
    std::cout << "--- 1. WRITING TO FILE ---" << std::endl;
    std::ofstream outFile(filename, std::ios::out);

    if (outFile.is_open()) {
        outFile << "Log 101: System initialized successfully." << std::endl;
        outFile << "Log 102: User 'Rahul' logged in." << std::endl;
        outFile << "Log 103: Database backup completed." << std::endl;
        outFile.close(); // Explicitly closing stream
        std::cout << "Data successfully saved to " << filename << std::endl;
    } else {
        std::cerr << "Failed to create/open " << filename << std::endl;
    }

    // 2. APPENDING TO FILE using std::ios::app
    std::ofstream appendFile(filename, std::ios::app);
    if (appendFile.is_open()) {
        appendFile << "Log 104: Session closed." << std::endl;
        appendFile.close();
    }

    // 3. READING FROM FILE using std::ifstream
    std::cout << "\n--- 2. READING FROM FILE ---" << std::endl;
    std::ifstream inFile(filename);

    if (inFile.is_open()) {
        std::string line;
        // Read file line by line until EOF (End Of File)
        while (std::getline(inFile, line)) {
            std::cout << "[READ LINE] " << line << std::endl;
        }
        inFile.close();
    } else {
        std::cerr << "Could not open " << filename << " for reading!" << std::endl;
    }

    return 0;
}
```

---

## 🔍 Code Breakdown

- `#include <fstream>`: Provides `ofstream` and `ifstream` classes.
- `outFile.is_open()`: Checks if the file handle was successfully acquired before performing I/O.
- `std::getline(inFile, line)`: Continuously reads text line by line until reaching End-Of-File (EOF).
- `std::ios::app`: Specifies append mode so new log entries don't overwrite previous logs.

---

## 👀 Output

```text
--- 1. WRITING TO FILE ---
Data successfully saved to user_logs.txt

--- 2. READING FROM FILE ---
[READ LINE] Log 101: System initialized successfully.
[READ LINE] Log 102: User 'Rahul' logged in.
[READ LINE] Log 103: Database backup completed.
[READ LINE] Log 104: Session closed.
```

---

## ⚠️ Common Mistakes

- **Forgetting `.is_open()` Check**: Attempting to read a file that doesn't exist without checking `.is_open()` fails silently without reading anything.
- **Default Overwriting in `ofstream`**: Opening a file with `std::ofstream outFile("data.txt")` **truncates/deletes** existing contents! Pass `std::ios::app` if you want to append without deleting.

---

## 🛡️ Best Practices

- Always check if the file opened successfully (`if (file.is_open())`).
- Leverage C++ RAII: destructors automatically flush and close file streams when file object variables go out of scope.

---

## 🧪 Try It Yourself

1. Write a C++ script that inputs a user's favorite quote and saves it into `quote.txt`.
2. Read `quote.txt` and print the total number of characters in the file.

---

## 🎯 Mini Challenge

Write a Student Grade Exporter program that reads a list of student names and scores from `students.txt`, calculates their grade, and writes the results to `grades_report.txt`.

---

## 🔗 Related Topics

- [Input & Output in C++](04-input-output.md)
- [Exception Handling](19-exception-handling.md)

---

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Exception Handling](19-exception-handling.md) | [Next: Namespaces & Modern C++ →](21-namespaces-and-modern-cpp.md)
