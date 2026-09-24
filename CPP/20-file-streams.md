# File Streams (`ifstream`, `ofstream`)

> 🟡 Intermediate

## 📖 Definition

The `<fstream>` library provides stream classes to read and write disk files: `std::ofstream` (writing), `std::ifstream` (reading), and `std::fstream` (read/write).

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Use `ofstream` to write disk files and `ifstream` with `getline()` to read files. RAII automatically closes files when stream scope ends.
> - **Hindi:** फाईल में लिखने के लिए `ofstream` और पढ़ने के लिए `ifstream` का उपयोग करें। स्कोप खत्म होते ही फाइल अपने आप बंद हो जाती है।
> - **Marathi:** फाईलमध्ये लिहिण्यासाठी `ofstream` आणि वाचण्यासाठी `ifstream` वापरतात.
> - **Hinglish:** Disk file persistence ke liye `ofstream` (write) aur `ifstream` (read) use hota hai. RAII destruction se files auto-close ho jaati hain.

## 📝 Syntax

```cpp
#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    ofstream outFile("notes.txt");
    outFile << "Persistent C++ File Storage" << endl;
    outFile.close();

    ifstream inFile("notes.txt");
    string line;
    while (getline(inFile, line)) {
        cout << line << endl;
    }
    return 0;
}
```

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Exception Handling](19-exception-handling.md) | [Next: Namespaces & Modern C++ →](21-namespaces-and-modern-cpp.md)
