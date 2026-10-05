---
layout: default
title: "23 mini projects"
---

# Capstone Mini Projects in C++ (OOP & File I/O System)

> 🔴 Advanced

---

## 📖 Definition

Mini projects synthesize core C++ concepts—including **Object-Oriented Programming (OOP)**, **Standard Template Library (STL) Containers**, **Smart Pointers**, **Exception Handling**, and **File I/O Streams**—into complete, production-grade console applications.

In this lesson, we build a **Complete Bank Management System** that allows account creation, deposit/withdrawal validation, transaction logging to file, and account data persistence.

---

## 🇮🇳 Hindi Explanation

Yeh Capstone Mini Project saare C++ concepts (Classes, Vectors, File Handling, Exceptions, Smart Pointers) ko ek saath ek working C++ Application mein combine karta hai. Isme hum ek **Bank Account Management System** banayenge jo user accounts create kar sakta hai, deposit/withdraw operations validate karta hai, aur saara data disk par file (`bank_data.txt`) mein permanent save aur load karta hai.

---

## 🚩 Marathi Explanation

Ha Mini Project C++ madhil sarva mahatvache concepts (Classes, Vectors, File Handling, Exceptions) ekatra karun ek practical C++ Application tayar karto. Aapan ek **Bank Account Management System** tayar karnar aahot jo accounts create karto, deposit/withdraw validate karto, aani data file madhye save karto.

---

## 🏗️ System Architecture Diagram

```text
                  +-----------------------------------+
                  |      BankManagementSystem         |
                  |  std::vector<std::shared_ptr<Acc>>|
                  +-----------------------------------+
                                    |
            +-----------------------+-----------------------+
            |                                               |
  [ Account Operations ]                             [ File Persistence ]
  - createAccount()                                  - saveToFile()
  - depositMoney()                                   - loadFromFile()
  - withdrawMoney()
```

---

## 💡 Practical Capstone Code: Bank Management System

```cpp
#include <iostream>
#include <vector>
#include <memory>
#include <fstream>
#include <string>
#include <stdexcept>

// 1. BankAccount Class
class Account {
private:
    int accountNumber;
    std::string holderName;
    double balance;

public:
    Account(int accNum, std::string name, double initialBalance)
        : accountNumber(accNum), holderName(name), balance(initialBalance) {}

    int getAccNum() const { return accountNumber; }
    std::string getHolderName() const { return holderName; }
    double getBalance() const { return balance; }

    void deposit(double amount) {
        if (amount <= 0) throw std::invalid_argument("Deposit amount must be positive.");
        balance += amount;
        std::cout << "[SUCCESS] Deposited $" << amount << ". New Balance: $" << balance << std::endl;
    }

    void withdraw(double amount) {
        if (amount <= 0) throw std::invalid_argument("Withdrawal amount must be positive.");
        if (amount > balance) throw std::runtime_error("Insufficient funds for withdrawal.");
        balance -= amount;
        std::cout << "[SUCCESS] Withdrew $" << amount << ". Remaining Balance: $" << balance << std::endl;
    }

    void display() const {
        std::cout << "Acc #" << accountNumber << " | Holder: " << holderName << " | Balance: $" << balance << std::endl;
    }

    std::string serialize() const {
        return std::to_string(accountNumber) + "," + holderName + "," + std::to_string(balance);
    }
};

// 2. Bank Manager Class
class BankManager {
private:
    std::vector<std::shared_ptr<Account>> accounts;
    std::string dataFilename;

public:
    BankManager(std::string filename) : dataFilename(filename) {
        loadFromFile();
    }

    void addAccount(int accNum, std::string name, double initialDeposit) {
        for (const auto& acc : accounts) {
            if (acc->getAccNum() == accNum) {
                throw std::invalid_argument("Account number already exists!");
            }
        }
        accounts.push_back(std::make_shared<Account>(accNum, name, initialDeposit));
        std::cout << "[SUCCESS] Created Account #" << accNum << " for " << name << std::endl;
        saveToFile();
    }

    std::shared_ptr<Account> findAccount(int accNum) {
        for (const auto& acc : accounts) {
            if (acc->getAccNum() == accNum) return acc;
        }
        throw std::out_of_range("Account not found!");
    }

    void displayAll() const {
        std::cout << "\n=== CURRENT BANK ACCOUNTS ===" << std::endl;
        if (accounts.empty()) {
            std::cout << "No active bank accounts found." << std::endl;
            return;
        }
        for (const auto& acc : accounts) {
            acc->display();
        }
    }

    void saveToFile() const {
        std::ofstream outFile(dataFilename, std::ios::out);
        if (outFile.is_open()) {
            for (const auto& acc : accounts) {
                outFile << acc->serialize() << "\n";
            }
            outFile.close();
        }
    }

    void loadFromFile() {
        std::ifstream inFile(dataFilename);
        if (inFile.is_open()) {
            std::string line;
            while (std::getline(inFile, line)) {
                if (line.empty()) continue;
                size_t pos1 = line.find(',');
                size_t pos2 = line.rfind(',');
                if (pos1 != std::string::npos && pos2 != std::string::npos && pos1 != pos2) {
                    int accNum = std::stoi(line.substr(0, pos1));
                    std::string name = line.substr(pos1 + 1, pos2 - pos1 - 1);
                    double bal = std::stod(line.substr(pos2 + 1));
                    accounts.push_back(std::make_shared<Account>(accNum, name, bal));
                }
            }
            inFile.close();
        }
    }
};

int main() {
    try {
        BankManager bank("bank_records.csv");

        std::cout << "=== C++ BANK MANAGEMENT SYSTEM ===" << std::endl;
        
        // Creating accounts
        bank.addAccount(101, "Rahul Sharma", 1500.00);
        bank.addAccount(102, "Priya Patel", 3000.00);

        bank.displayAll();

        // Perform Transactions
        std::cout << "\n--- PERFORMING TRANSACTIONS ---" << std::endl;
        auto acc1 = bank.findAccount(101);
        acc1->deposit(500.00);
        acc1->withdraw(200.00);

        // Save updated state
        bank.saveToFile();
        bank.displayAll();

    } catch (const std::exception& e) {
        std::cerr << "[SYSTEM ERROR] " << e.what() << std::endl;
    }

    return 0;
}
```

---

## 👀 Output

```text
=== C++ BANK MANAGEMENT SYSTEM ===
[SUCCESS] Created Account #101 for Rahul Sharma
[SUCCESS] Created Account #102 for Priya Patel

=== CURRENT BANK ACCOUNTS ===
Acc #101 | Holder: Rahul Sharma | Balance: $1500
Acc #102 | Holder: Priya Patel | Balance: $3000

--- PERFORMING TRANSACTIONS ---
[SUCCESS] Deposited $500. New Balance: $2000
[SUCCESS] Withdrew $200. Remaining Balance: $1800

=== CURRENT BANK ACCOUNTS ===
Acc #101 | Holder: Rahul Sharma | Balance: $1800
Acc #102 | Holder: Priya Patel | Balance: $3000
```

---

## 🧪 Try It Yourself

1. Add a `transferMoney(int fromAcc, int toAcc, double amount)` method to `BankManager`.
2. Implement transaction history recording for each account.

---

## 🔗 Related Topics

- [Classes & Objects](10-classes-and-oops.md)
- [Smart Pointers](14-smart-pointers.md)
- [File Streams](20-file-streams.md)

---

## 🧭 Navigation

[← C++ Home](00-README.md) | [← Previous: Move Semantics](22-move-semantics.md)
