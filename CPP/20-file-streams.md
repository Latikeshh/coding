# File Streams (`ifstream`, `ofstream`)

> 🟡 Intermediate

## 📖 Definition

The `<fstream>` library provides stream classes to read from and write to disk files:
- `std::ofstream`: Output file stream for writing data.
- `std::ifstream`: Input file stream for reading data.
- `std::fstream`: Input/Output file stream for simultaneous read and write.

---

## 📝 Writing and Reading Files

```cpp
#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    // 1. Writing to a file
    ofstream outFile("data.txt");
    if (outFile.is_open()) {
        outFile << "C++ File Handling" << endl;
        outFile << "Line 2: Persistent Storage" << endl;
        outFile.close(); // RAII automatically closes file if scope ends
    }

    // 2. Reading from a file line by line
    ifstream inFile("data.txt");
    if (inFile.is_open()) {
        string line;
        while (getline(inFile, line)) {
            cout << "Read: " << line << endl;
        }
        inFile.close();
    } else {
        cerr << "Unable to open file!" << endl;
    }

    return 0;
}
```

---

## 🧪 Try It Yourself

Write a program that takes user input and appends it to `log.txt` using `ofstream outFile("log.txt", ios::app)`.

## 🎯 Mini Challenge

Write a program that reads a text file and counts total characters and total lines in the file.

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Exception Handling](19-exception-handling.md) | [Next: Namespaces & Modern C++ →](21-namespaces-and-modern-cpp.md)
