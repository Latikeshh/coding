# Comprehensive C++ Mini Projects

> 🔴 Advanced

## 📖 Definition

Mini projects combine OOP, smart pointers, vector containers, STL algorithms, templates, exception handling, and file streams into complete applications.

> 🌐 **Multilingual Summary / संक्षेप / स्पष्टीकरण**
>
> - **English:** Practice modern C++ by building production-grade OOP applications with file persistence and smart pointers.
> - **Hindi:** सीखी हुई सभी C++ तकनीकों (`smart_ptr`, `vector`, `fstream`) का इस्तेमाल करके रियल-वर्ल्ड प्रोजेक्ट बनाएं।
> - **Marathi:** प्रॅक्टिससाठी स्मार्ट पॉइंटर्स आणि फाईल हँडलिंग वापरून प्रोजेक्ट्स बनवा.
> - **Hinglish:** Modern C++ OOP patterns, smart pointers, aur file storage combine karke practical projects build karo.

## 🏗️ Project: Persistent Inventory Manager

```cpp
#include <iostream>
#include <vector>
#include <memory>
#include <fstream>
#include <string>

using namespace std;

class Product {
public:
    int id;
    string name;
    double price;

    Product(int i, string n, double p) : id(i), name(n), price(p) {}
};

class Store {
private:
    vector<unique_ptr<Product>> catalog;

public:
    void addProduct(int id, string name, double price) {
        catalog.push_back(make_unique<Product>(id, name, price));
    }

    void saveToCSV(const string& path) const {
        ofstream out(path);
        for (const auto& p : catalog) {
            out << p->id << "," << p->name << "," << p->price << endl;
        }
    }
};

int main() {
    Store store;
    store.addProduct(101, "Gaming Laptop", 1299.99);
    store.saveToCSV("catalog.csv");
    return 0;
}
```

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Move Semantics](22-move-semantics.md)
