# Comprehensive C++ Mini Projects

> 🔴 Advanced

Build production-grade applications combining OOP, smart pointers, STL, templates, exception handling, and file streams.

---

## 🏗️ Project 1: Inventory Management System with File Storage & Smart Pointers

```cpp
#include <iostream>
#include <vector>
#include <memory>
#include <fstream>
#include <string>

using namespace std;

class Item {
public:
    int id;
    string name;
    double price;

    Item(int i, string n, double p) : id(i), name(n), price(p) {}

    void display() const {
        cout << "ID: " << id << " | Name: " << name << " | Price: $" << price << endl;
    }
};

class Inventory {
private:
    vector<unique_ptr<Item>> items;

public:
    void addItem(int id, string name, double price) {
        items.push_back(make_unique<Item>(id, name, price));
    }

    void listItems() const {
        cout << "\n=== Current Inventory ===" << endl;
        for (const auto& item : items) {
            item->display();
        }
    }

    void saveToFile(const string& filename) const {
        ofstream outFile(filename);
        if (!outFile) return;
        for (const auto& item : items) {
            outFile << item->id << "," << item->name << "," << item->price << endl;
        }
        cout << "Saved inventory to " << filename << endl;
    }
};

int main() {
    Inventory inv;
    inv.addItem(101, "Gaming Laptop", 1299.99);
    inv.addItem(102, "Mechanical Keyboard", 89.50);

    inv.listItems();
    inv.saveToFile("inventory.csv");

    return 0;
}
```

---

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Move Semantics](22-move-semantics.md)
