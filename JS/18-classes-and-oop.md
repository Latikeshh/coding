# ES6 Classes & Object-Oriented JS

> 🔴 Advanced

## 📖 Definition

ES6 **Classes** provide modern, clean syntactic sugar over JavaScript's prototype-based inheritance model. Classes encapsulate state (properties), behavior (methods), constructors, static methods, and private fields (`#`).

## 🇮🇳 Hindi

ES6 Classes Object-Oriented Programming (OOP) concepts ko implement karne ka ek simple tareeqa hain. Class mein `constructor`, methods, static methods, `#` se private fields, aur `extends` + `super()` ka use karke Inheritance apply ki jaati hai.

## 🚩 Marathi

Classes mule Object-Oriented Programming (OOP) sarakha code lihita येतो. Class madhye `constructor`, methods, aani `extends` cha wapar karun Inheritance implement kele jaate.

## 📝 OOP Concepts in JavaScript

1. **Encapsulation:** Grouping data and related behavior inside class objects.
2. **Inheritance:** Creating child subclasses that inherit properties and methods from parent classes (`extends`).
3. **Polymorphism:** Overriding inherited parent methods in child classes.
4. **Private Fields (`#`):** Properties inaccessible from outside the class instance.

## 💡 Complete Example: Class Inheritance & Private Fields

```javascript
class BankAccount {
  // Private field (cannot be accessed outside class instance)
  #accountPin;

  constructor(accountHolder, balance, pin) {
    this.accountHolder = accountHolder;
    this.balance = balance;
    this.#accountPin = pin;
  }

  deposit(amount) {
    this.balance += amount;
    return `Deposited ₹${amount}. Total Balance: ₹${this.balance}`;
  }

  // Method to verify pin safely
  verifyPin(inputPin) {
    return this.#accountPin === inputPin;
  }

  // Static Utility Method
  static calculateInterest(amount, rate) {
    return amount * (rate / 100);
  }
}

// Subclass inheriting from BankAccount
class SavingsAccount extends BankAccount {
  constructor(accountHolder, balance, pin, interestRate = 4) {
    // MUST call super() before accessing 'this' in child constructor!
    super(accountHolder, balance, pin);
    this.interestRate = interestRate;
  }

  applyInterest() {
    const interest = BankAccount.calculateInterest(this.balance, this.interestRate);
    this.balance += interest;
    return `Applied ${this.interestRate}% interest (₹${interest}). New Balance: ₹${this.balance}`;
  }
}

const mySavings = new SavingsAccount("Anish Roy", 10000, 1234);
console.log(mySavings.deposit(5000));
console.log(mySavings.applyInterest());
console.log("Pin Valid?", mySavings.verifyPin(1234));
// console.log(mySavings.#accountPin); // SyntaxError: Private field '#accountPin' must be declared in an enclosing class
```

## 👀 Output

```text
Deposited ₹5000. Total Balance: ₹15000
Applied 4% interest (₹6000). New Balance: ₹15600
Pin Valid? true
```

## 🧪 Try It Yourself

1. Create a parent class `Vehicle` with `brand` and `start()` method.
2. Create a subclass `Car` extending `Vehicle` with an additional `model` property.

## ⚠️ Common Mistakes

- Forgetting to call `super()` inside child class constructors before using `this`.
- Expecting JavaScript classes to be fundamentally different from prototypes—classes are syntactical sugar built directly on prototypes!

## 🌍 Real-World Usage

Building UI components, domain modeling in enterprise applications, custom SDKs, and state management models.

## 💡 Remember

Use `class` for OOP design, `#` for private fields, `extends` for inheritance, and `super()` to initialize parent constructors.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Prototypes & this](17-prototypes-and-this.md) | [Next: DOM Selection →](19-dom-manipulation.md)
