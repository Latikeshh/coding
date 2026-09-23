# ES6 Classes & Object-Oriented JS

> 🔴 Advanced

## 📖 Definition

ES6 introduced the `class` syntax as syntactic sugar over JavaScript's existing prototype-based inheritance model.

---

## 📝 Class Declaration & Features

```javascript
class User {
  // Private field (starts with #)
  #password;

  // Constructor
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.#password = password;
  }

  // Method
  getProfile() {
    return `${this.username} (${this.email})`;
  }

  // Private method / getter
  verifyPassword(input) {
    return this.#password === input;
  }

  // Static method (called on Class itself, not instance)
  static generateId() {
    return Math.floor(Math.random() * 10000);
  }
}

const user1 = new User("coder123", "coder@mail.com", "secret123");
console.log(user1.getProfile());        // "coder123 (coder@mail.com)"
console.log(User.generateId());          // Random number
// console.log(user1.#password);        // SyntaxError: Private field!
```

---

## 🧬 Class Inheritance (`extends` and `super`)

Subclasses inherit properties and methods from parent classes using `extends`:

```javascript
class Admin extends User {
  constructor(username, email, password, permissions) {
    // Call parent class constructor using super()
    super(username, email, password);
    this.permissions = permissions;
  }

  deleteUser(targetUser) {
    console.log(`Admin ${this.username} deleted user ${targetUser}`);
  }
}

const admin = new Admin("boss", "admin@mail.com", "adminpass", ["READ", "WRITE", "DELETE"]);
console.log(admin.getProfile()); // Inherited method from User
admin.deleteUser("john_doe");
```

---

## 🧪 Try It Yourself

Create a `Vehicle` class with a `speed` property and a `drive()` method. Create an `ElectricCar` subclass that adds a `batteryLevel` property.

## 🎯 Mini Challenge

Add a getter `get battery()` and setter `set battery(val)` with validation checking that `val` is between `0` and `100`.

## 🧭 Navigation

[← JS Home](00-README.md) | [← Previous: Prototypes & this](17-prototypes-and-this.md) | [Next: DOM Selection →](19-dom-manipulation.md)
