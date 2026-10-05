---
layout: default
title: "10 classes and oops"
---

# Classes & Object-Oriented Programming (OOP) in C++

> 🟡 Intermediate

---

## 📖 Definition

**Object-Oriented Programming (OOP)** is a design paradigm centered around **Classes** (user-defined blueprints) and **Objects** (real-world instances of classes holding state and behavior). The four core pillars of OOP are:
1. **Encapsulation**: Bundling member variables and methods inside a class and restricting direct access via access specifiers (`private`, `public`, `protected`).
2. **Abstraction**: Exposing only essential interface methods while hiding complex internal implementation logic.
3. **Inheritance**: Creating new derived classes from existing base classes.
4. **Polymorphism**: Overriding base class functions at runtime using virtual methods.

---

## 🇮🇳 Hindi Explanation

- **Class**: Ek khali blueprint / format hota hai (jaise Bank Account ka form).
- **Object**: Us blueprint se bana real instance (jaise Rahul ka Bank Account).
- **Encapsulation**: Class ke sensitive variables (jaise `balance`) ko `private` rakhna taaki koi bahar se use directly change na kar sake. Access sirf `public` methods (`deposit()`, `withdraw()`) ke zariye milta hai.

---

## 🚩 Marathi Explanation

- **Class**: Ek blueprint aahe (udaharanarth Car cha design).
- **Object**: Tyapasun banavleli pratyaksh vastu (udaharanarth Tesla Car).
- **Encapsulation**: Data safe thevnyasathi variables `private` thevane aani tyaana badalnyasathi `public` functions vaparne.

---

## 🔑 Access Specifiers in C++

| Access Specifier | Accessible Inside Class? | Accessible In Derived Class? | Accessible Outside Class? |
|:---|:---:|:---:|:---:|
| `private` | ✅ Yes | ❌ No | ❌ No |
| `protected` | ✅ Yes | ✅ Yes | ❌ No |
| `public` | ✅ Yes | ✅ Yes | ✅ Yes |

---

## 💡 Practical Example

```cpp
#include <iostream>
#include <string>

// Class Definition (Blueprint)
class BankAccount {
private:
    std::string accountNumber;
    std::string accountHolder;
    double balance; // Encapsulated private data!

public:
    // Constructor (Initializes Object State)
    BankAccount(std::string accNum, std::string holder, double initialBalance) {
        accountNumber = accNum;
        accountHolder = holder;
        balance = (initialBalance >= 0.0) ? initialBalance : 0.0;
    }

    // Public Method: Deposit Money
    void deposit(double amount) {
        if (amount > 0.0) {
            balance += amount;
            std::cout << "[SUCCESS] Deposited $" << amount << ". New Balance: $" << balance << std::endl;
        } else {
            std::cout << "[ERROR] Deposit amount must be positive!" << std::endl;
        }
    }

    // Public Method: Withdraw Money with Validation
    void withdraw(double amount) {
        if (amount > 0.0 && amount <= balance) {
            balance -= amount;
            std::cout << "[SUCCESS] Withdrew $" << amount << ". Remaining Balance: $" << balance << std::endl;
        } else {
            std::cout << "[ERROR] Insufficient funds or invalid amount!" << std::endl;
        }
    }

    // Getter Method for Reading Encapsulated Balance
    double getBalance() const {
        return balance;
    }

    void displayDetails() const {
        std::cout << "Acc Num: " << accountNumber << " | Holder: " << accountHolder << " | Balance: $" << balance << std::endl;
    }
};

int main() {
    std::cout << "--- CREATING BANK ACCOUNT OBJECTS ---" << std::endl;
    
    // Instantiating BankAccount Object
    BankAccount acc1("ACC-1001", "Rahul Sharma", 1000.00);

    acc1.displayDetails();
    acc1.deposit(500.00);
    acc1.withdraw(200.00);
    acc1.withdraw(2000.00); // Triggers insufficient funds guard!

    // Direct access to private member is blocked by compiler!
    // acc1.balance = 500000.00; // COMPILATION ERROR!

    return 0;
}
```

---

## 🔍 Code Breakdown

- `class BankAccount`: Defines a custom data structure holding variables and methods.
- `private:`: Protects `balance` from being directly altered from `main()`.
- `deposit()` and `withdraw()`: Encapsulate valid business rules and data safety guards.
- `double getBalance() const`: Read-only public method for querying current balance safely.

---

## 👀 Output

```text
--- CREATING BANK ACCOUNT OBJECTS ---
Acc Num: ACC-1001 | Holder: Rahul Sharma | Balance: $1000
[SUCCESS] Deposited $500. New Balance: $1500
[SUCCESS] Withdrew $200. Remaining Balance: $1300
[ERROR] Insufficient funds or invalid amount!
```

---

## ⚠️ Common Mistakes

- **Forgetting Semicolon After Class Definition**: Writing `class Car { ... }` without the ending semicolon `;` causes a confusing compilation error! Always end class definitions with `};`.
- **Default Access Specifier in `class` vs `struct`**:
  - In a `class`, members are **`private` by default**.
  - In a `struct`, members are **`public` by default**.

---

## 🛡️ Best Practices

- Always keep member variables `private` and provide getters/setters as needed (Encapsulation Principle).
- Mark getter methods `const` if they do not alter any object variables (`double getBalance() const`).

---

## 🧪 Try It Yourself

1. Create a `Student` class with private attributes `name`, `rollNumber`, and `marks`. Add a method `hasPassed()` that returns `true` if `marks >= 40`.

---

## 🎯 Mini Challenge

Design a `Rectangle` class with private members `length` and `width`. Include methods `setDimensions(l, w)`, `calculateArea()`, and `calculatePerimeter()`.

---

## 🔗 Related Topics

- [Constructors & Destructors](11-constructors-and-destructors.html)
- [Inheritance & Polymorphism](12-inheritance-and-polymorphism.html)

---

## 🧭 Navigation

[← C++ Home](./) | [← Previous: Arrays & Vectors](09-arrays-and-vectors.html) | [Next: Constructors & Destructors →](11-constructors-and-destructors.html)

