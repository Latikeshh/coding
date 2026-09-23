# C++ Mini Projects

> 🟡 Intermediate

Consolidate your knowledge of vectors, OOP, classes, and stream I/O by building real C++ console applications.

---

## 🏗️ Project 1: Student Grade Management System

```cpp
#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Student {
public:
    string name;
    double grade;

    Student(string n, double g) : name(n), grade(g) {}

    void display() const {
        cout << "Student: " << name << " | Grade: " << grade << endl;
    }
};

int main() {
    vector<Student> classRoster;
    int choice;

    do {
        cout << "\n--- Student Grade System ---" << endl;
        cout << "1. Add Student" << endl;
        cout << "2. View All Students" << endl;
        cout << "3. Exit" << endl;
        cout << "Choice: ";
        cin >> choice;

        if (choice == 1) {
            string name;
            double grade;
            cout << "Enter student name: ";
            cin >> name;
            cout << "Enter grade: ";
            cin >> grade;
            classRoster.push_back(Student(name, grade));
            cout << "Student added successfully!" << endl;
        } else if (choice == 2) {
            cout << "\nClass Roster:" << endl;
            for (const auto& student : classRoster) {
                student.display();
            }
        }
    } while (choice != 3);

    cout << "Goodbye!" << endl;
    return 0;
}
```

---

## 🏗️ Project 2: Bank Account System

```cpp
#include <iostream>
#include <string>
using namespace std;

class BankAccount {
private:
    string accountHolder;
    double balance;

public:
    BankAccount(string name, double initialBalance) {
        accountHolder = name;
        balance = initialBalance;
    }

    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            cout << "Deposited $" << amount << ". New Balance: $" << balance << endl;
        }
    }

    void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            cout << "Withdrew $" << amount << ". Remaining Balance: $" << balance << endl;
        } else {
            cout << "Insufficient funds!" << endl;
        }
    }

    void display() const {
        cout << "Account: " << accountHolder << " | Balance: $" << balance << endl;
    }
};

int main() {
    BankAccount myAccount("Alex Smith", 500.0);
    myAccount.display();
    myAccount.deposit(150.0);
    myAccount.withdraw(200.0);
    return 0;
}
```

---

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Inheritance](11-inheritance-and-polymorphism.md)
